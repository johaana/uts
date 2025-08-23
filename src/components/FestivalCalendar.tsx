
'use client';

import { useState, useMemo, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Star, Calendar, MapPin, Tag, Loader2 } from "lucide-react";
import { format, parse, getYear, isValid, isFuture, isToday, startOfDay, addDays, getMonth, startOfToday, endOfDay } from 'date-fns';
import { allEvents } from '@/lib/festival-data';
import { cn } from '@/lib/utils';
import React from 'react';

const defaultMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const defaultRegions = ["Nationwide", "North", "South", "East", "West", "Northeast", "Central", "Global"];
const defaultEventTypes = ["Festivals", "Holidays", "Long Weekends"];

interface FestivalEvent {
    date: string;
    name: string;
    region: string;
    type: string;
    link?: string;
    longWeekend?: boolean;
}

interface FestivalCalendarProps {
    events?: FestivalEvent[];
    availableYears?: string[];
    availableRegions?: string[];
    availableEventTypes?: string[];
    title?: string;
    description?: string;
    showLongWeekendInfo?: boolean;
    displayLimit?: number;
}

export function FestivalCalendar({
    events = allEvents,
    availableRegions = defaultRegions,
    availableEventTypes = defaultEventTypes,
    title,
    description,
    showLongWeekendInfo = true,
    displayLimit,
}: FestivalCalendarProps) {
    const [isClient, setIsClient] = useState(false);
    const [selectedMonth, setSelectedMonth] = useState('all');
    const [selectedRegion, setSelectedRegion] = useState('all');
    const [selectedEventType, setSelectedEventType] = useState('all');
    const [selectedYear, setSelectedYear] = useState('Upcoming');

    const dynamicYears = useMemo(() => {
        const years = Array.from(new Set(events.map(event => {
            const dateStr = event.date.split(' - ')[0];
            const parsedDate = parse(dateStr, 'MMM dd, yyyy', new Date());
            return isValid(parsedDate) ? getYear(parsedDate) : null;
        })))
        .filter(year => year !== null) as number[];
        
        return ['Upcoming', ...years.sort().map(String), 'All Years'];
    }, [events]);
    
    useEffect(() => {
        setIsClient(true);
    }, []);

    const getEventDateRange = (dateString: string): { start: Date, end: Date } | null => {
        try {
            const parts = dateString.split(' - ');
            const startDateStr = parts[0];
            const startDate = parse(startDateStr, 'MMM dd, yyyy', new Date());

            if (!isValid(startDate)) return null;

            let endDate = startDate;
            if (parts.length > 1) {
                const endDateStr = parts[1];
                let parsedEndDate;
                
                if (endDateStr.split(',').length < 2) { 
                    parsedEndDate = parse(`${endDateStr}, ${getYear(startDate)}`, 'MMM dd, yyyy', new Date());
                } else {
                    parsedEndDate = parse(endDateStr, 'MMM dd, yyyy', new Date());
                }
                if (isValid(parsedEndDate)) {
                    endDate = parsedEndDate;
                }
            }
            return { start: startOfDay(startDate), end: endOfDay(endDate) };
        } catch (e) {
            console.error("Error parsing date string:", dateString, e);
            return null;
        }
    };
    
    const filteredEvents = useMemo(() => {
        if (!isClient) return [];

        const today = startOfToday();
        const selectedMonthIndex = selectedMonth === 'all' ? -1 : defaultMonths.indexOf(selectedMonth);

        let filtered = events.filter(event => {
            const range = getEventDateRange(event.date);
            if (!range) return false;

            // Year Filtering Logic
            let yearMatch = false;
            if (selectedYear === 'Upcoming' || selectedYear === 'All Years') {
                yearMatch = true;
            } else {
                const yearNum = parseInt(selectedYear, 10);
                yearMatch = getYear(range.start) === yearNum || getYear(range.end) === yearNum;
            }
            if (!yearMatch) return false;

            // Month Filtering
            const monthMatch = selectedMonth === 'all' || 
                (range.start.getMonth() <= selectedMonthIndex && range.end.getMonth() >= selectedMonthIndex) ||
                (getYear(range.start) < getYear(range.end) && (range.start.getMonth() <= selectedMonthIndex || range.end.getMonth() >= selectedMonthIndex));


            // Region Filtering
            const regionMatch = selectedRegion === 'all' || event.region === selectedRegion || event.region.includes(selectedRegion);
            
            // Event Type Filtering
            let eventTypeMatch = true;
            if (selectedEventType !== 'all') {
                 if (selectedEventType === 'Festivals') {
                    eventTypeMatch = event.type !== 'Holiday' && event.type !== 'Diwali';
                } else if (selectedEventType === 'Holidays') {
                    eventTypeMatch = event.type === 'Holiday';
                } else if (selectedEventType === 'Long Weekends') {
                    eventTypeMatch = !!event.longWeekend;
                } else {
                    eventTypeMatch = event.type === selectedEventType;
                }
            }

            return monthMatch && regionMatch && eventTypeMatch;
        });

        // Post-filter for 'Upcoming'
        if (selectedYear === 'Upcoming') {
            filtered = filtered.filter(event => {
                const range = getEventDateRange(event.date);
                return range && range.end >= today;
            });
        }
        
        // Finally, sort by date
        filtered.sort((a, b) => {
             const dateA = getEventDateRange(a.date)?.start.getTime() || 0;
             const dateB = getEventDateRange(b.date)?.start.getTime() || 0;
             return dateA - dateB;
        });


        return filtered;
    }, [isClient, selectedYear, selectedMonth, selectedRegion, selectedEventType, events]);

    const displayedEvents = useMemo(() => {
        if (displayLimit) {
            return filteredEvents.slice(0, displayLimit);
        }
        return filteredEvents;
    }, [filteredEvents, displayLimit]);
    
    const formatDateString = (dateString: string) => {
        const range = getEventDateRange(dateString);
        if (!range) return dateString;
        const { start, end } = range;
        
        const singleDay = format(start, 'yyyy-MM-dd') === format(end, 'yyyy-MM-dd');
        
        if (singleDay) {
            return format(start, 'MMM dd, yyyy (EEEE)');
        }
        
        if (getYear(start) !== getYear(end)) {
            return `${format(start, 'MMM dd, yyyy')} - ${format(end, 'MMM dd, yyyy')}`;
        } else if (getMonth(start) !== getMonth(end)) {
            return `${format(start, 'MMM dd')} - ${format(end, 'MMM dd, yyyy')}`;
        } else {
            return `${format(start, 'MMM dd')} - ${format(end, 'dd, yyyy')}`;
        }
    };

    const getBadgeClass = (type: string) => {
        switch(type) {
            case 'Religious': return 'bg-sky-600/80 text-white';
            case 'Harvest': return 'bg-green-600/80 text-white';
            case 'Holiday': return 'border-blue-500/80 text-blue-500';
            case 'Cultural': return 'bg-purple-600/80 text-white';
            case 'New Year': return 'bg-teal-600/80 text-white';
            case 'Seasonal': return 'bg-yellow-500/80 text-white';
            case 'Diwali': return 'bg-amber-500/80 text-white';
            case 'Solar': return 'bg-orange-500/80 text-white';
            case 'Monsoon': return 'bg-indigo-500/80 text-white';
            default: return 'bg-secondary text-secondary-foreground';
        }
    };

    const renderEventName = (name: string, link?: string) => {
        const content = name.split(' (')[0];
        const subtext = name.match(/\(([^)]+)\)/);

        const nameElement = link ? (
            <Link href={link} className="font-bold text-base hover:underline hover:text-primary">{content}</Link>
        ) : (
            <span className="font-bold text-base">{content}</span>
        );
        
        return (
            <>
                {nameElement}
                {subtext && <span className="font-normal text-muted-foreground ml-1">({subtext[1]})</span>}
            </>
        );
    };


    return (
        <div className="w-full">
           {title && description && (
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-5xl font-bold text-primary">{title}</h2>
                    <p className="mt-3 text-base md:text-lg text-foreground/80 max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>
            )}
            
            <Card className="p-4 md:p-6 mb-2">
                 <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 items-center md:grid-cols-4">
                    <Select onValueChange={setSelectedYear} value={selectedYear}>
                        <SelectTrigger><SelectValue placeholder="Year" /></SelectTrigger>
                        <SelectContent>
                            {dynamicYears.map(year => <SelectItem key={year} value={year}>{year}</SelectItem>)}
                        </SelectContent>
                    </Select>
                    <Select onValueChange={setSelectedMonth} value={selectedMonth}>
                        <SelectTrigger><SelectValue placeholder="Month" /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Months</SelectItem>
                            {defaultMonths.map(month => <SelectItem key={month} value={month}>{month}</SelectItem>)}
                        </SelectContent>
                    </Select>
                     <Select onValueChange={setSelectedRegion} value={selectedRegion}>
                        <SelectTrigger><SelectValue placeholder="Region" /></SelectTrigger>
                        <SelectContent>
                             <SelectItem value="all">All Regions</SelectItem>
                            {availableRegions.map(region => <SelectItem key={region} value={region}>{region}</SelectItem>)}
                        </SelectContent>
                    </Select>
                    <Select onValueChange={setSelectedEventType} value={selectedEventType}>
                        <SelectTrigger><SelectValue placeholder="Type" /></SelectTrigger>
                        <SelectContent>
                             <SelectItem value="all">All Types</SelectItem>
                            {availableEventTypes.map(type => <SelectItem key={type} value={type}>{type}</SelectItem>)}
                        </SelectContent>
                    </Select>
                </div>
            </Card>

            {showLongWeekendInfo && (
                 <div className="flex items-center justify-start text-sm text-muted-foreground mb-8 ml-2">
                    <Star className="w-4 h-4 mr-2 text-amber-500 fill-amber-500" />
                    <span>Indicates a long weekend opportunity. See our <Link href="/blog/long-weekends-2025" className="font-semibold text-accent-foreground bg-accent/20 hover:bg-accent/40 px-2 py-0.5 rounded-md transition-colors">Long Weekends Guide</Link> for travel ideas.</span>
                </div>
            )}

            <div className="hidden md:block">
                 <Card className="overflow-hidden flex flex-col">
                    <div className={cn("overflow-y-auto", !displayLimit && "max-h-[70vh]")}>
                        <Table>
                            <TableHeader className="sticky top-0 bg-background z-10">
                                <TableRow>
                                    <TableHead className="w-[250px] text-primary">Date</TableHead>
                                    <TableHead className="text-primary">Name</TableHead>
                                    <TableHead className="text-primary">Region</TableHead>
                                    <TableHead className="text-primary">Type</TableHead>
                                    <TableHead className="text-right text-primary">Details</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {!isClient ? (
                                    <TableRow>
                                        <TableCell colSpan={5} className="text-center h-24">
                                            <div className="flex items-center justify-center">
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Loading calendar...
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ) : displayedEvents.length > 0 ? (
                                    displayedEvents.map((event, index) => (
                                        <TableRow key={event.name + event.date + index}>
                                            <TableCell className="w-[250px] font-medium">{formatDateString(event.date)}</TableCell>
                                            <TableCell>
                                                {renderEventName(event.name, event.link)}
                                                {event.longWeekend && <Star className="w-4 h-4 text-amber-500 fill-amber-500 inline-block ml-2" />}
                                            </TableCell>
                                            <TableCell>{event.region}</TableCell>
                                            <TableCell>
                                                <Badge variant="outline" className={getBadgeClass(event.type)}>
                                                    {event.type}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                {event.link && (event.link.startsWith('/') || event.link.startsWith('http')) ? (
                                                    <Link href={event.link}>
                                                        <Button variant="ghost" size="icon">
                                                            <ArrowRight className="h-4 w-4" />
                                                        </Button>
                                                    </Link>
                                                ) : <div className="h-10 w-10"/>}
                                            </TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={5} className="text-center h-24">
                                            No events found for the selected filters.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </Card>
            </div>

            <div className={cn("md:hidden space-y-4", !displayLimit && "max-h-[60vh] overflow-y-auto pr-2")}>
                 {!isClient ? (
                    <Card className="text-center h-24 flex items-center justify-center text-muted-foreground">
                        <div className="flex items-center">
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Loading calendar...
                        </div>
                    </Card>
                 ) : displayedEvents.length > 0 ? (
                    displayedEvents.map((event, index) => (
                        <Card key={event.name + event.date + index} className="p-4">
                            <CardContent className="p-0 flex items-center justify-between">
                                <div className="flex-1">
                                    <div className="font-bold flex items-center gap-2 mb-2">
                                        {renderEventName(event.name, event.link)}
                                        {event.longWeekend && <Star className="w-4 h-4 text-amber-500 fill-amber-500 inline-block ml-2" />}
                                    </div>
                                     <p className="text-sm text-muted-foreground flex items-center gap-2 mb-2">
                                        <Calendar className="w-4 h-4" />
                                        {formatDateString(event.date)}
                                     </p>
                                     <div className="flex items-center gap-4">
                                         <p className="text-sm text-muted-foreground flex items-center gap-2">
                                            <MapPin className="w-4 h-4" />
                                            {event.region}
                                         </p>
                                         <Badge variant="outline" className={cn("text-xs", getBadgeClass(event.type))}>
                                            {event.type}
                                         </Badge>
                                     </div>
                                </div>
                                {event.link && (event.link.startsWith('/') || event.link.startsWith('http')) && (
                                    <Link href={event.link} className="ml-4">
                                        <Button variant="ghost" size="icon">
                                            <ArrowRight className="h-5 w-5" />
                                        </Button>
                                    </Link>
                                )}
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <Card className="text-center h-24 flex items-center justify-center text-muted-foreground">
                        No events found for the selected filters.
                    </Card>
                )}
            </div>
        </div>
    );
}

    
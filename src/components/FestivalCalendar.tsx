
'use client';

import { useState, useMemo, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Star, Calendar, MapPin, Tag, Loader2 } from "lucide-react";
import { format, parse, getYear, isValid, isFuture, isToday, startOfDay, addYears, getMonth, startOfToday, endOfDay } from 'date-fns';
import { allEvents as defaultEvents } from '@/lib/festival-data';
import { cn } from '@/lib/utils';
import React from 'react';

const defaultMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const defaultEventTypes = ["Festivals", "Holidays", "Long Weekends"];

interface FestivalEvent {
    name: string;
    date: string;
    region: string;
    country?: string;
    type: string;
    link?: string;
    longWeekend?: boolean;
}

interface FestivalCalendarProps {
    events?: FestivalEvent[];
    availableRegions?: string[];
    availableEventTypes?: string[];
    title?: string;
    description?: string;
    showLongWeekendInfo?: boolean;
}

export function FestivalCalendar({
    events = defaultEvents,
    availableEventTypes = defaultEventTypes,
    title,
    description,
    showLongWeekendInfo = true,
}: FestivalCalendarProps) {
    const [isClient, setIsClient] = useState(false);
    const [selectedMonth, setSelectedMonth] = useState('all');
    const [selectedGeography, setSelectedGeography] = useState('all');
    const [selectedEventType, setSelectedEventType] = useState('all');
    const [selectedYear, setSelectedYear] = useState('Upcoming');

    useEffect(() => {
        setIsClient(true);
    }, []);

    const dynamicYears = useMemo(() => {
        const years = Array.from(new Set(events.map(event => {
            const dateStr = event.date.split(' - ')[0];
            const parsedDate = parse(dateStr, 'MMM dd, yyyy', new Date());
            return isValid(parsedDate) ? getYear(parsedDate) : null;
        })))
        .filter(year => year !== null) as number[];
        
        return ['Upcoming', ...years.sort().map(String), 'All Years'];
    }, [events]);

    const geographies = useMemo(() => {
        const countries = Array.from(new Set(events.filter(e => e.country).map(e => e.country)));
        const regions = Array.from(new Set(events.filter(e => !e.country).map(e => e.region)));
        return Array.from(new Set([...countries, ...regions])).sort();
    }, [events]);
    
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
            return null;
        }
    };
    
    const filteredEvents = useMemo(() => {
        if (!isClient) return [];

        const today = startOfToday();
        const futureLimit = addYears(today, 3);
        const selectedMonthIndex = selectedMonth === 'all' ? -1 : defaultMonths.indexOf(selectedMonth);

        let filtered = events.filter(event => {
            const range = getEventDateRange(event.date);
            if (!range) return false;

            let yearMatch = false;
            if (selectedYear === 'Upcoming') {
                yearMatch = range.end >= today;
            } else if (selectedYear === 'All Years') {
                yearMatch = true;
            } else {
                const yearNum = parseInt(selectedYear, 10);
                yearMatch = getYear(range.start) === yearNum || getYear(range.end) === yearNum;
            }
            
            const monthMatch = selectedMonth === 'all' || 
                (range.start.getMonth() <= selectedMonthIndex && range.end.getMonth() >= selectedMonthIndex);

            const geoMatch = selectedGeography === 'all' || 
                event.country === selectedGeography || 
                event.region === selectedGeography;
            
            let eventTypeMatch = true;
            if (selectedEventType !== 'all') {
                 if (selectedEventType === 'Festivals') {
                    eventTypeMatch = !['Holiday', 'Diwali'].includes(event.type);
                } else if (selectedEventType === 'Holidays') {
                    eventTypeMatch = event.type === 'Holiday';
                } else if (selectedEventType === 'Long Weekends') {
                    eventTypeMatch = !!event.longWeekend;
                } else {
                    eventTypeMatch = event.type === selectedEventType;
                }
            }

            return yearMatch && monthMatch && geoMatch && eventTypeMatch;
        });
        
        filtered.sort((a, b) => {
             const dateA = getEventDateRange(a.date)?.start.getTime() || 0;
             const dateB = getEventDateRange(b.date)?.start.getTime() || 0;
             return dateA - dateB;
        });

        return filtered;
    }, [isClient, selectedYear, selectedMonth, selectedGeography, selectedEventType, events]);

    const getBadgeClass = (type: string) => {
        switch(type) {
            case 'Religious': return 'bg-chart-3 text-white';
            case 'Harvest': return 'bg-green-600 text-white';
            case 'Holiday': return 'border-blue-500 text-blue-600';
            case 'Cultural': return 'bg-chart-5 text-white';
            case 'New Year': return 'bg-chart-1 text-white';
            default: return 'bg-secondary text-secondary-foreground';
        }
    };

    return (
        <div className="w-full">
           {title && (
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-5xl font-bold text-primary">{title}</h2>
                    {description && <p className="mt-3 text-base text-foreground/80 max-w-2xl mx-auto">{description}</p>}
                </div>
            )}
            
            <Card className="p-4 mb-8">
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
                    <Select onValueChange={setSelectedYear} value={selectedYear}>
                        <SelectTrigger><Calendar className="w-4 h-4 mr-2" /><SelectValue placeholder="Year" /></SelectTrigger>
                        <SelectContent>
                            {dynamicYears.map(year => <SelectItem key={year} value={year}>{year}</SelectItem>)}
                        </SelectContent>
                    </Select>
                    <Select onValueChange={setSelectedMonth} value={selectedMonth}>
                        <SelectTrigger><Calendar className="w-4 h-4 mr-2" /><SelectValue placeholder="Month" /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Months</SelectItem>
                            {defaultMonths.map(month => <SelectItem key={month} value={month}>{month}</SelectItem>)}
                        </SelectContent>
                    </Select>
                     <Select onValueChange={setSelectedGeography} value={selectedGeography}>
                        <SelectTrigger><MapPin className="w-4 h-4 mr-2" /><SelectValue placeholder="Country / Region" /></SelectTrigger>
                        <SelectContent>
                             <SelectItem value="all">Everywhere</SelectItem>
                            {geographies.map(geo => <SelectItem key={geo} value={geo}>{geo}</SelectItem>)}
                        </SelectContent>
                    </Select>
                    <Select onValueChange={setSelectedEventType} value={selectedEventType}>
                        <SelectTrigger><Tag className="w-4 h-4 mr-2" /><SelectValue placeholder="Type" /></SelectTrigger>
                        <SelectContent>
                             <SelectItem value="all">All Types</SelectItem>
                            {availableEventTypes.map(type => <SelectItem key={type} value={type}>{type}</SelectItem>)}
                        </SelectContent>
                    </Select>
                </div>
            </Card>

            <Card className="overflow-hidden">
                <Table>
                    <TableHeader className="bg-muted/50">
                        <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Festival</TableHead>
                            <TableHead>Location</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead className="text-right">Link</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {!isClient ? (
                            <TableRow><TableCell colSpan={5} className="text-center py-10"><Loader2 className="animate-spin inline mr-2"/>Loading...</TableCell></TableRow>
                        ) : filteredEvents.length > 0 ? (
                            filteredEvents.map((event, i) => (
                                <TableRow key={i}>
                                    <TableCell className="font-data text-xs">{event.date}</TableCell>
                                    <TableCell className="font-bold">{event.name}</TableCell>
                                    <TableCell className="text-sm">{event.country || event.region}</TableCell>
                                    <TableCell><Badge className={getBadgeClass(event.type)}>{event.type}</Badge></TableCell>
                                    <TableCell className="text-right">
                                        {event.link ? <Link href={event.link}><Button size="icon" variant="ghost"><ArrowRight className="h-4 w-4"/></Button></Link> : null}
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow><TableCell colSpan={5} className="text-center py-10">No events found for these filters.</TableCell></TableRow>
                        )}
                    </TableBody>
                </Table>
            </Card>
        </div>
    );
}

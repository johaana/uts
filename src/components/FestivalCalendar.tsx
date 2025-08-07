
'use client';

import { useState, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { format, parse, getYear, isValid, isWithinInterval, startOfToday, addDays, isFuture, isToday, parseISO, endOfDay } from 'date-fns';
import { allEvents } from '@/lib/festival-data';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const regions = ["Nationwide", "North", "South", "East", "West", "Northeast", "Central"];
const eventTypes = ["Festivals", "Holidays", "Long Weekends"];

const safeParseDate = (dateStr: string) => parse(dateStr, 'MMM dd, yyyy', new Date());

const allAvailableYears = [
    ...new Set(
        allEvents
            .map(e => getYear(safeParseDate(e.date.split(' - ')[0])))
            .filter(year => !isNaN(year))
    ),
].sort();

export function FestivalCalendar() {
    const [selectedMonth, setSelectedMonth] = useState('all');
    const [selectedRegion, setSelectedRegion] = useState('all');
    const [selectedEventType, setSelectedEventType] = useState('all');
    const [selectedYear, setSelectedYear] = useState('Upcoming (1 year)');

    const availableYears = ['Upcoming (1 year)', ...allAvailableYears.map(String), 'all'];

    const formatDateString = (dateString: string) => {
        const parts = dateString.split(' - ');
        try {
            const startDate = parse(parts[0], 'MMM dd, yyyy', new Date());
            if (!isValid(startDate)) return dateString;

            if (parts.length > 1) {
                const endDateStr = parts[1];
                let endDate;
                if (endDateStr.split(',').length < 2) {
                     endDate = parse(`${endDateStr}, ${getYear(startDate)}`, 'MMM dd, yyyy', new Date());
                } else {
                     endDate = parse(endDateStr, 'MMM dd, yyyy', new Date());
                }

                if (!isValid(endDate)) {
                     return format(startDate, 'MMM dd, yyyy (EEEE)');
                }

                if (getYear(startDate) !== getYear(endDate)) {
                    return `${format(startDate, 'MMM dd, yyyy')} - ${format(endDate, 'MMM dd, yyyy')}`;
                } else if (format(startDate, 'MMMM') !== format(endDate, 'MMMM')) {
                    return `${format(startDate, 'MMM dd')} - ${format(endDate, 'MMM dd, yyyy')}`;
                } else {
                    return `${format(startDate, 'MMM dd')} - ${format(endDate, 'dd, yyyy')}`;
                }
            }
            return format(startDate, 'MMM dd, yyyy (EEEE)');
        } catch (error) {
            console.error("Error formatting date:", dateString, error);
            return dateString;
        }
    };
    
    const getMonthFromDateString = (dateString: string) => {
        try {
            const datePart = dateString.split(' - ')[0];
            const date = parse(datePart, "MMM dd, yyyy", new Date());
            if (!isValid(date)) return 'Unknown';
            return format(date, 'MMMM');
        } catch (e) {
            return 'Unknown';
        }
    };
    
    const filteredEvents = useMemo(() => {
        const today = startOfToday();
        
        // 1. Filter by Year or Upcoming
        let dateFilteredEvents;
        if (selectedYear === 'Upcoming (1 year)') {
            const oneYearFromNow = endOfDay(addDays(today, 365));
            dateFilteredEvents = allEvents.filter(event => {
                const startDate = safeParseDate(event.date.split(' - ')[0]);
                if (!isValid(startDate)) return false;
                // An event is "upcoming" if its start date is between today and one year from now
                return isWithinInterval(startDate, { start: today, end: oneYearFromNow });
            });
        } else if (selectedYear === 'all') {
            dateFilteredEvents = allEvents.filter(event => {
                const startDate = safeParseDate(event.date.split(' - ')[0]);
                if (!isValid(startDate)) return false;
                return isFuture(startDate) || isToday(startDate);
            });
        } else {
            const yearNum = parseInt(selectedYear, 10);
            dateFilteredEvents = allEvents.filter(event => {
                const startDate = safeParseDate(event.date.split(' - ')[0]);
                return isValid(startDate) && getYear(startDate) === yearNum;
            });
        }

        // 2. Apply other filters to the already date-filtered list
        return dateFilteredEvents.filter(event => {
            const monthMatch = selectedMonth === 'all' || getMonthFromDateString(event.date) === selectedMonth;
            const regionMatch = selectedRegion === 'all' || event.region === selectedRegion || event.region.includes(selectedRegion);
            
            let eventTypeMatch = true;
            if (selectedEventType === 'Festivals') {
                eventTypeMatch = event.type !== 'Holiday' && event.type !== 'Diwali';
            } else if (selectedEventType === 'Holidays') {
                eventTypeMatch = event.type === 'Holiday';
            } else if (selectedEventType === 'Long Weekends') {
                eventTypeMatch = !!event.longWeekend;
            }

            return monthMatch && regionMatch && eventTypeMatch;
        });

    }, [selectedYear, selectedMonth, selectedRegion, selectedEventType]);


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

    const renderEventName = (name: string) => {
        const match = name.match(/^(.*?) (\(.*\))$/);
        if (match) {
            return (
                <div className="text-base">
                    <span className="font-bold">{match[1]}</span>
                    <span className="font-normal text-muted-foreground ml-1">{match[2]}</span>
                </div>
            );
        }
        return <span className="font-bold text-base">{name}</span>;
    };


    return (
        <div className="w-full">
            <div className="text-center mb-12">
                <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">Festival & Holiday Calendar</h2>
                <p className="mt-3 text-lg text-foreground/80 max-w-2xl mx-auto">
                    Plan your year around the vibrant celebrations of India. Never miss a festival, holiday, or long weekend.
                </p>
            </div>
            
            <Card className="p-6 mb-2">
                 <div className="flex flex-col md:flex-row gap-4 items-center">
                    <p className="font-semibold text-lg mr-4 shrink-0 text-primary">Filter by:</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                        <Select onValueChange={setSelectedYear} value={selectedYear}>
                            <SelectTrigger>
                                <SelectValue placeholder="Year" />
                            </SelectTrigger>
                            <SelectContent>
                                {availableYears.map(year => <SelectItem key={year} value={year}>{year}</SelectItem>)}
                            </SelectContent>
                        </Select>
                        <Select onValueChange={setSelectedMonth} value={selectedMonth}>
                            <SelectTrigger>
                                <SelectValue placeholder="Month" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Months</SelectItem>
                                {months.map(month => <SelectItem key={month} value={month}>{month}</SelectItem>)}
                            </SelectContent>
                        </Select>
                         <Select onValueChange={setSelectedRegion} value={selectedRegion}>
                            <SelectTrigger>
                                <SelectValue placeholder="Region" />
                            </SelectTrigger>
                            <SelectContent>
                                 <SelectItem value="all">All Regions</SelectItem>
                                {regions.map(region => <SelectItem key={region} value={region}>{region}</SelectItem>)}
                            </SelectContent>
                        </Select>
                        <Select onValueChange={setSelectedEventType} value={selectedEventType}>
                            <SelectTrigger>
                                <SelectValue placeholder="Type" />
                            </SelectTrigger>
                            <SelectContent>
                                 <SelectItem value="all">All Types</SelectItem>
                                {eventTypes.map(type => <SelectItem key={type} value={type}>{type}</SelectItem>)}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </Card>

            <div className="flex items-center justify-start text-sm text-muted-foreground mb-8 ml-2">
                <Star className="w-4 h-4 mr-2 text-amber-500 fill-amber-500" />
                <span>Indicates a long weekend opportunity. See our <Link href="/blog/long-weekends-2025" className="underline hover:text-primary">Long Weekends Guide</Link> for travel ideas.</span>
            </div>

            <Card>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[250px] text-primary">Date</TableHead>
                                <TableHead className="text-primary">Name</TableHead>
                                <TableHead className="text-primary">Region</TableHead>
                                <TableHead className="text-primary">Type</TableHead>
                                <TableHead className="text-right text-primary">Details</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredEvents.length > 0 ? (
                                filteredEvents.map((event, index) => (
                                    <TableRow key={event.name + event.date + index}>
                                        <TableCell className="font-medium">{formatDateString(event.date)}</TableCell>
                                        <TableCell className="flex items-center gap-2">
                                            {renderEventName(event.name)}
                                            {event.longWeekend && <Star className="w-4 h-4 text-amber-500 fill-amber-500" />}
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
                                            ) : (
                                                <Button variant="ghost" size="icon" disabled className="opacity-0">
                                                    <ArrowRight className="h-4 w-4" />
                                                </Button>
                                            )}
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
                </CardContent>
            </Card>
        </div>
    );
}

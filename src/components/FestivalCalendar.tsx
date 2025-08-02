'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { format, parse, getYear } from 'date-fns';

const allEvents = [
    // Public Holidays 2025
    { date: "Jan 01, 2025", name: "New Year's Day", region: "Nationwide", type: "Holiday", link: null },
    { date: "Jan 26, 2025", name: "Republic Day", region: "Nationwide", type: "Holiday", link: "https://i.postimg.cc/9z1m3k5z/republic-day.jpg" },
    { date: "Mar 30, 2025", name: "Eid-al-Fitr (Ramzan Eid)", region: "Nationwide", type: "Religious", link: "/festivals/eid-al-fitr" },
    { date: "Mar 31, 2025", name: "Holi", region: "Nationwide", type: "Holiday", link: "/festivals/holi" },
    { date: "Apr 18, 2025", name: "Good Friday", region: "Nationwide", type: "Religious", link: "/festivals/christmas" },
    { date: "May 01, 2025", name: "Labour Day", region: "Nationwide", type: "Holiday", link: null },
    { date: "Jun 17, 2025", name: "Eid al-Adha", region: "Nationwide", type: "Religious", link: null },
    { date: "Aug 15, 2025", name: "Independence Day", region: "Nationwide", type: "Holiday", link: "https://i.postimg.cc/s13jNrLt/Independence-day.jpg" },
    // Festivals 2025
    { date: "Aug 19, 2025", name: "Raksha Bandhan", region: "Nationwide", type: "Cultural", link: "/festivals/raksha-bandhan" },
    { date: "Aug 27, 2025", name: "Ganesh Chaturthi", region: "West", type: "Religious", link: "/festivals/ganesh-chaturthi" },
    { date: "Sep 07, 2025", name: "Onam", region: "South", type: "Harvest", link: "/festivals/onam" },
    { date: "Sep 22 - Oct 01, 2025", name: "Navratri", region: "Nationwide", type: "Religious", link: "/festivals/navratri" },
    { date: "Sep 27 - Oct 01, 2025", name: "Durga Puja", region: "East", type: "Religious", link: "/festivals/durga-puja" },
    { date: "Oct 02, 2025", name: "Gandhi Jayanti", region: "Nationwide", type: "Holiday", link: null },
    { date: "Oct 19, 2025", name: "Dhanteras", region: "Nationwide", type: "Diwali", link: "/festivals/diwali" },
    { date: "Oct 20, 2025", name: "Naraka Chaturdashi (Choti Diwali)", region: "Nationwide", type: "Diwali", link: "/festivals/diwali" },
    { date: "Oct 21, 2025", name: "Lakshmi Puja (Diwali)", region: "Nationwide", type: "Diwali", link: "/festivals/diwali" },
    { date: "Oct 21, 2025", name: "Diwali (Deepavali)", region: "Nationwide", type: "Holiday", link: "/festivals/diwali" },
    { date: "Oct 22, 2025", name: "Govardhan Puja (Padwa)", region: "Nationwide", type: "Diwali", link: "/festivals/diwali" },
    { date: "Oct 23, 2025", name: "Bhai Dooj (Bhaubeej)", region: "Nationwide", type: "Diwali", link: "/festivals/diwali" },
    { date: "Oct 27, 2025", name: "Chhath Puja", region: "East", type: "Solar", link: "/festivals/chhath-puja" },
    { date: "Nov 05, 2025", name: "Guru Nanak Jayanti", region: "Nationwide", type: "Religious", link: "/festivals/guru-nanak-jayanti" },
    { date: "Dec 25, 2025", name: "Christmas", region: "Nationwide", type: "Religious", link: "/festivals/christmas" },

    // Public Holidays 2026
    { date: "Jan 01, 2026", name: "New Year's Day", region: "Nationwide", type: "Holiday", link: null },
    { date: "Jan 14, 2026", name: "Makar Sankranti", region: "Nationwide", type: "Harvest", link: "/festivals/makar-sankranti" },
    { date: "Jan 14-17, 2026", name: "Pongal", region: "South", type: "Harvest", link: "/festivals/pongal" },
    { date: "Jan 15, 2026", name: "Bihu", region: "Northeast", type: "Harvest", link: "/festivals/bihu" },
    { date: "Jan 26, 2026", name: "Republic Day", region: "Nationwide", type: "Holiday", link: "https://i.postimg.cc/9z1m3k5z/republic-day.jpg" },
    { date: "Feb 03, 2026", name: "Vasant Panchami", region: "Nationwide", type: "Seasonal", link: null },
    { date: "Mar 04, 2026", name: "Holi", region: "Nationwide", type: "Cultural", link: "/festivals/holi" },
    { date: "Mar 20, 2026", name: "Holi", region: "Nationwide", type: "Holiday", link: "/festivals/holi" },
    { date: "Mar 21, 2026", name: "Gudi Padwa", region: "West", type: "New Year", link: "/festivals/gudi-padwa" },
    { date: "Apr 03, 2026", name: "Good Friday", region: "Nationwide", type: "Religious", link: "/festivals/christmas" },
    { date: "May 01, 2026", name: "Labour Day", region: "Nationwide", type: "Holiday", link: null },
    { date: "Jun 06, 2026", name: "Eid al-Adha", region: "Nationwide", type: "Religious", link: null },
    { date: "Aug 15, 2026", name: "Independence Day", region: "Nationwide", type: "Holiday", link: "https://i.postimg.cc/s13jNrLt/Independence-day.jpg" },
    { date: "Oct 02, 2026", name: "Gandhi Jayanti", region: "Nationwide", type: "Holiday", link: null },
    { date: "Nov 09, 2026", name: "Diwali (Deepavali)", region: "Nationwide", type: "Holiday", link: "/festivals/diwali" },
    { date: "Dec 25, 2026", name: "Christmas", region: "Nationwide", type: "Religious", link: "/festivals/christmas" },
].sort((a, b) => {
    const dateA = parse(a.date.split(' - ')[0], 'MMM dd, yyyy', new Date());
    const dateB = parse(b.date.split(' - ')[0], 'MMM dd, yyyy', new Date());
    return dateA.getTime() - dateB.getTime();
});

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const regions = ["Nationwide", "North", "South", "East", "West", "Northeast"];
const eventTypes = ["Festivals", "Holidays"];
const years = ["2025", "2026"];

export function FestivalCalendar() {
    const [selectedMonth, setSelectedMonth] = useState('all');
    const [selectedRegion, setSelectedRegion] = useState('all');
    const [selectedEventType, setSelectedEventType] = useState('all');
    const [selectedYear, setSelectedYear] = useState('all');

    const getMonthFromDateString = (dateString: string) => {
        try {
            const datePart = dateString.split(' - ')[0].split(', ')[0] + ', ' + dateString.split(', ')[1].split('-')[0];
            const date = parse(datePart, "MMM dd, yyyy", new Date());
            return format(date, 'MMMM');
        } catch (e) {
            return 'Unknown';
        }
    };

    const getYearFromDateString = (dateString: string): number => {
        try {
            const yearStr = dateString.split(', ')[1].split(' - ')[0];
            return parseInt(yearStr, 10);
        } catch (e) {
            return 0;
        }
    };
    
    const filteredEvents = allEvents.filter(event => {
        const eventMonth = getMonthFromDateString(event.date);
        const eventYear = getYearFromDateString(event.date);

        const yearMatch = selectedYear === 'all' || eventYear === parseInt(selectedYear);
        const monthMatch = selectedMonth === 'all' || eventMonth === selectedMonth;
        const regionMatch = selectedRegion === 'all' || event.region === selectedRegion;
        
        let eventTypeMatch = true;
        if (selectedEventType === 'Festivals') {
            eventTypeMatch = event.type !== 'Holiday';
        } else if (selectedEventType === 'Holidays') {
            eventTypeMatch = event.type === 'Holiday';
        }


        return yearMatch && monthMatch && regionMatch && eventTypeMatch;
    });

    const getBadgeVariant = (type: string) => {
        switch(type) {
            case 'Religious': return 'default';
            case 'Cultural': return 'secondary';
            case 'Harvest': return 'default';
            case 'Holiday': return 'outline';
            case 'Diwali': return 'default';
            default: return 'secondary';
        }
    };

     const getBadgeClass = (type: string) => {
        switch(type) {
            case 'Religious': return 'bg-primary/80 text-primary-foreground';
            case 'Harvest': return 'bg-green-600/80 text-white';
            case 'Holiday': return 'border-blue-500/80 text-blue-500';
            case 'Diwali': return 'bg-amber-500/80 text-white';
            default: return '';
        }
    };

    return (
        <div className="w-full">
            <div className="text-center mb-12">
                <h1 className="font-headline text-4xl md:text-5xl font-bold">Festival & Holiday Calendar</h1>
                <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
                    Plan your year around the vibrant celebrations of India. Never miss a festival or holiday with our comprehensive calendar.
                </p>
            </div>
            
            <Card className="p-6 mb-12">
                 <div className="flex flex-col md:flex-row gap-4 items-center">
                    <p className="font-semibold text-lg mr-4 shrink-0">Filter by:</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                        <Select onValueChange={setSelectedYear} value={selectedYear}>
                            <SelectTrigger>
                                <SelectValue placeholder="Year" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Years</SelectItem>
                                {years.map(year => <SelectItem key={year} value={year}>{year}</SelectItem>)}
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

            <Card>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[200px]">Date</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Region</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead className="text-right">Details</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredEvents.length > 0 ? (
                                filteredEvents.map((event) => (
                                    <TableRow key={event.name + event.date}>
                                        <TableCell className="font-medium">{event.date}</TableCell>
                                        <TableCell className="font-bold text-base">{event.name}</TableCell>
                                        <TableCell>{event.region}</TableCell>
                                        <TableCell>
                                            <Badge variant={getBadgeVariant(event.type)} className={getBadgeClass(event.type)}>
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

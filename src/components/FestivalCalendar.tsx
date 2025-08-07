
'use client';

import { useState, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { format, parse, getYear, isAfter, isSameDay, addYears, isBefore, isValid } from 'date-fns';

const allEvents = [
    // 2024
    { date: "Aug 15, 2024", name: "Independence Day", region: "Nationwide", type: "Holiday", link: "/festivals/independence-day", longWeekend: true },
    { date: "Aug 19, 2024", name: "Raksha Bandhan", region: "Nationwide", type: "Cultural", link: "/festivals/raksha-bandhan", longWeekend: true },
    { date: "Aug 26, 2024", name: "Janmashtami", region: "Nationwide", type: "Religious", link: "#" },
    { date: "Sep 07, 2024", name: "Ganesh Chaturthi", region: "West & South", type: "Religious", link: "/festivals/ganesh-chaturthi" },
    { date: "Sep 15, 2024", name: "Onam", region: "South", type: "Harvest", link: "/festivals/onam", longWeekend: true },
    { date: "Oct 02, 2024", name: "Gandhi Jayanti", region: "Nationwide", type: "Holiday", link: "/festivals/gandhi-jayanti" },
    { date: "Oct 03 - Oct 11, 2024", name: "Navratri", region: "Nationwide", type: "Religious", link: "/festivals/navratri", longWeekend: true },
    { date: "Oct 09 - Oct 13, 2024", name: "Durga Puja", region: "East", type: "Religious", link: "/festivals/durga-puja", longWeekend: true },
    { date: "Oct 29, 2024", name: "Dhanteras (Diwali Day 1)", region: "Nationwide", type: "Diwali", link: "/festivals/diwali", longWeekend: true },
    { date: "Oct 30, 2024", name: "Naraka Chaturdashi (Diwali Day 2)", region: "Nationwide", type: "Diwali", link: "/festivals/diwali" },
    { date: "Oct 31, 2024", name: "Diwali (Lakshmi Puja) (Day 3)", region: "Nationwide", type: "Holiday", link: "/festivals/diwali", longWeekend: true },
    { date: "Nov 01, 2024", name: "Govardhan Puja (Diwali Day 4)", region: "North & West", type: "Diwali", link: "/festivals/diwali" },
    { date: "Nov 02, 2024", name: "Bhai Dooj (Diwali Day 5)", region: "North & West", type: "Diwali", link: "/festivals/diwali" },
    { date: "Nov 15, 2024", name: "Guru Nanak Jayanti", region: "Nationwide", type: "Religious", link: "/festivals/guru-nanak-jayanti" },
    { date: "Dec 01 - Dec 10, 2024", name: "Hornbill Festival", region: "Northeast", type: "Cultural", link: "/festivals/hornbill-festival" },
    { date: "Dec 25, 2024", name: "Christmas", region: "Nationwide", type: "Religious", link: "/festivals/christmas" },

    // 2025
    { date: "Jan 13, 2025", name: "Lohri", region: "North", type: "Harvest", link: "/festivals/lohri", longWeekend: true },
    { date: "Jan 14, 2025", name: "Makar Sankranti / Pongal", region: "Nationwide", type: "Harvest", link: "/festivals/makar-sankranti" },
    { date: "Jan 15, 2025", name: "Madai Festival", region: "Central", type: "Cultural", link: "/festivals/madai-festival" },
    { date: "Jan 26, 2025", name: "Republic Day", region: "Nationwide", type: "Holiday", link: "/festivals/republic-day" },
    { date: "Feb 03, 2025", name: "Vasant Panchami", region: "Nationwide", type: "Seasonal", link: "/festivals/vasant-panchami" },
    { date: "Feb 11, 2025", name: "Thaipusam", region: "South", type: "Religious", link: "/festivals/thaipusam" },
    { date: "Feb 22 - Feb 25, 2025", name: "Goa Carnival", region: "West", type: "Cultural", link: "/festivals/goa-carnival" },
    { date: "Feb 26, 2025", name: "Maha Shivaratri", region: "Nationwide", type: "Religious", link: "#" },
    { date: "Mar 01, 2025", name: "Chapchar Kut", region: "Northeast", type: "Cultural", link: "/festivals/chapchar-kut" },
    { date: "Mar 06, 2025", name: "Yaoshang", region: "Northeast", type: "Cultural", link: "/festivals/yaoshang" },
    { date: "Mar 14, 2025", name: "Holi", region: "Nationwide", type: "Holiday", link: "/festivals/holi", longWeekend: true },
    { date: "Mar 30, 2025", name: "Gudi Padwa / Ugadi", region: "West & South", type: "New Year", link: "/festivals/gudi-padwa" },
    { date: "Mar 30, 2025", name: "Eid-al-Fitr", region: "Nationwide", type: "Religious", link: "/festivals/eid-al-fitr", longWeekend: true },
    { date: "Apr 05, 2025", name: "Mopin", region: "Northeast", type: "Harvest", link: "/festivals/mopin" },
    { date: "Apr 06, 2025", name: "Ram Navami", region: "Nationwide", type: "Religious", link: "#" },
    { date: "Apr 14, 2025", name: "Vaisakhi / Bihu / Vishu", region: "North & Northeast", type: "Harvest", link: "/festivals/bihu", longWeekend: true },
    { date: "Apr 18, 2025", name: "Good Friday", region: "Nationwide", type: "Religious", link: "/festivals/good-friday", longWeekend: true },
    { date: "Apr 21, 2025", name: "Akshaya Tritiya", region: "Nationwide", type: "Religious", link: "/festivals/akshaya-tritiya" },
    { date: "Jun 06, 2025", name: "Eid-al-Adha", region: "Nationwide", type: "Religious", link: "#" },
    { date: "Jun 10, 2025", name: "Hemis Tsechu", region: "North", type: "Cultural", link: "/festivals/hemis-tsechu" },
    { date: "Jun 29, 2025", name: "Rath Yatra", region: "East", type: "Religious", link: "/festivals/rath-yatra" },
    { date: "Jul 28, 2025", name: "Hareli Festival", region: "Central", type: "Harvest", link: "/festivals/hareli-festival" },
    { date: "Jul 28, 2025", name: "Muharram (Ashura)", region: "Nationwide", type: "Religious", link: "/festivals/muharram" },
    { date: "Jul 29, 2025", name: "Nag Panchami", region: "Nationwide", type: "Cultural", link: "/festivals/nag-panchami" },
    { date: "Aug 03, 2025", name: "Teej", region: "North", type: "Monsoon", link: "/festivals/teej" },
    { date: "Aug 09, 2025", name: "Raksha Bandhan", region: "Nationwide", type: "Cultural", link: "/festivals/raksha-bandhan", longWeekend: true },
    { date: "Aug 15, 2025", name: "Independence Day", region: "Nationwide", type: "Holiday", link: "/festivals/independence-day", longWeekend: true },
    { date: "Aug 17, 2025", name: "Janmashtami", region: "Nationwide", type: "Religious", link: "#" },
    { date: "Aug 22, 2025", name: "Nuakhai", region: "East", type: "Harvest", link: "/festivals/nuakhai" },
    { date: "Aug 27, 2025", name: "Ganesh Chaturthi", region: "West & South", type: "Religious", link: "/festivals/ganesh-chaturthi" },
    { date: "Sep 05, 2025", name: "Onam", region: "South", type: "Harvest", link: "/festivals/onam" },
    { date: "Sep 06, 2025", name: "Anant Chaturdashi", region: "West & South", type: "Religious", link: "/festivals/ganesh-chaturthi" },
    { date: "Sep 22 - Oct 01, 2025", name: "Navratri", region: "Nationwide", type: "Religious", link: "/festivals/navratri", longWeekend: true },
    { date: "Sep 23 - Dec 06, 2025", name: "Bastar Dussehra", region: "Central", type: "Cultural", link: "/festivals/bastar-dussehra" },
    { date: "Oct 02, 2025", name: "Dussehra", region: "Nationwide", type: "Religious", link: "#", longWeekend: true },
    { date: "Oct 02, 2025", name: "Gandhi Jayanti", region: "Nationwide", type: "Holiday", link: "/festivals/gandhi-jayanti", longWeekend: true },
    { date: "Oct 11, 2025", name: "Karva Chauth", region: "North", type: "Cultural", link: "/festivals/karva-chauth" },
    { date: "Oct 19, 2025", name: "Dhanteras (Diwali Day 1)", region: "Nationwide", type: "Diwali", link: "/festivals/diwali", longWeekend: true },
    { date: "Oct 20, 2025", name: "Naraka Chaturdashi (Diwali Day 2)", region: "Nationwide", type: "Diwali", link: "/festivals/diwali", longWeekend: true },
    { date: "Oct 21, 2025", name: "Diwali (Lakshmi Puja) (Day 3)", region: "Nationwide", type: "Holiday", link: "/festivals/diwali", longWeekend: true },
    { date: "Oct 22, 2025", name: "Govardhan Puja (Diwali Day 4)", region: "North & West", type: "Diwali", link: "/festivals/diwali" },
    { date: "Oct 23, 2025", name: "Bhai Dooj (Diwali Day 5)", region: "North & West", type: "Diwali", link: "/festivals/diwali" },
    { date: "Nov 05, 2025", name: "Guru Nanak Jayanti", region: "Nationwide", type: "Religious", link: "/festivals/guru-nanak-jayanti" },
    { date: "Nov 11, 2025", name: "Karthigai Deepam", region: "South", type: "Religious", link: "/festivals/karthigai-deepam" },
    { date: "Nov 12, 2025", name: "Wangala", region: "Northeast", type: "Harvest", link: "/festivals/wangala" },
    { date: "Dec 01 - Dec 10, 2025", name: "Hornbill Festival", region: "Northeast", type: "Cultural", link: "/festivals/hornbill-festival" },
    { date: "Dec 25, 2025", name: "Christmas", region: "Nationwide", type: "Religious", link: "/festivals/christmas", longWeekend: true },

    // 2026
    { date: "Jan 13, 2026", name: "Lohri", region: "North", type: "Harvest", link: "/festivals/lohri" },
    { date: "Jan 14, 2026", name: "Makar Sankranti / Pongal", region: "Nationwide", type: "Harvest", link: "/festivals/makar-sankranti" },
    { date: "Jan 26, 2026", name: "Republic Day", region: "Nationwide", type: "Holiday", link: "/festivals/republic-day" },
    { date: "Feb 14, 2026", name: "Maha Shivaratri", region: "Nationwide", type: "Religious", link: "#" },
    { date: "Feb 23, 2026", name: "Vasant Panchami", region: "Nationwide", type: "Seasonal", link: "/festivals/vasant-panchami" },
    { date: "Mar 04, 2026", name: "Holi", region: "Nationwide", type: "Holiday", link: "/festivals/holi" },
    { date: "Mar 20, 2026", name: "Eid-al-Fitr", region: "Nationwide", type: "Religious", link: "/festivals/eid-al-fitr", longWeekend: true },
    { date: "Mar 21, 2026", name: "Gudi Padwa / Ugadi", region: "West & South", type: "New Year", link: "/festivals/gudi-padwa" },
    { date: "Mar 28, 2026", name: "Ram Navami", region: "Nationwide", type: "Religious", link: "#" },
    { date: "Apr 03, 2026", name: "Good Friday", region: "Nationwide", type: "Religious", link: "/festivals/good-friday", longWeekend: true },
    { date: "Apr 14, 2026", name: "Vaisakhi / Bihu", region: "North & Northeast", type: "Harvest", link: "/festivals/bihu" },
    { date: "Aug 15, 2026", name: "Independence Day", region: "Nationwide", type: "Holiday", link: "/festivals/independence-day", longWeekend: true },
    { date: "Aug 28, 2026", name: "Raksha Bandhan", region: "Nationwide", type: "Cultural", link: "/festivals/raksha-bandhan", longWeekend: true },
    { date: "Sep 05, 2026", name: "Janmashtami", region: "Nationwide", type: "Religious", link: "#" },
    { date: "Sep 15, 2026", name: "Ganesh Chaturthi", region: "West", type: "Religious", link: "/festivals/ganesh-chaturthi" },
    { date: "Sep 25, 2026", name: "Anant Chaturdashi", region: "West", type: "Religious", link: "/festivals/ganesh-chaturthi" },
    { date: "Sep 26, 2026", name: "Onam", region: "South", type: "Harvest", link: "/festivals/onam" },
    { date: "Oct 20, 2026", name: "Dussehra", region: "Nationwide", type: "Religious", link: "#", longWeekend: true },
    { date: "Nov 07, 2026", name: "Dhanteras (Diwali Day 1)", region: "Nationwide", type: "Diwali", link: "/festivals/diwali", longWeekend: true },
    { date: "Nov 08, 2026", name: "Diwali (Lakshmi Puja) (Day 3)", region: "Nationwide", type: "Holiday", link: "/festivals/diwali", longWeekend: true },
    { date: "Nov 09, 2026", name: "Govardhan Puja (Diwali Day 4)", region: "North & West", type: "Diwali", link: "/festivals/diwali" },
    { date: "Nov 10, 2026", name: "Bhai Dooj (Diwali Day 5)", region: "North & West", type: "Diwali", link: "/festivals/diwali" },
    { date: "Nov 24, 2026", name: "Guru Nanak Jayanti", region: "Nationwide", type: "Religious", link: "/festivals/guru-nanak-jayanti" },
    { date: "Dec 25, 2026", name: "Christmas", region: "Nationwide", type: "Religious", link: "/festivals/christmas", longWeekend: true },
].sort((a, b) => {
    const dateA = parse(a.date.split(' - ')[0], 'MMM dd, yyyy', new Date());
    const dateB = parse(b.date.split(' - ')[0], 'MMM dd, yyyy', new Date());
    if (!isValid(dateA) || !isValid(dateB)) return 0;
    return dateA.getTime() - dateB.getTime();
});

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const regions = ["Nationwide", "North", "South", "East", "West", "Northeast", "Central"];
const eventTypes = ["Festivals", "Holidays", "Long Weekends"];

const safeParseDate = (dateStr: string) => parse(dateStr, 'MMM dd, yyyy', new Date());

const availableYears = [
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
    const [selectedYear, setSelectedYear] = useState('upcoming');

    const formatDateString = (dateString: string) => {
        const parts = dateString.split(' - ');
        try {
            const startDate = parse(parts[0], 'MMM dd, yyyy', new Date());
            if (!isValid(startDate)) return dateString;

            if (parts.length > 1) {
                const endDateStr = parts[1];
                let endDate;
                // Handle cases like "Oct 09 - Oct 13, 2024" vs "Feb 22 - 25, 2025"
                if (endDateStr.split(',').length < 2) {
                     endDate = parse(`${endDateStr}, ${getYear(startDate)}`, 'MMM dd, yyyy', new Date());
                } else {
                     endDate = parse(endDateStr, 'MMM dd, yyyy', new Date());
                }

                if (!isValid(endDate)) {
                     // Fallback for single day format if end date is invalid
                     return format(startDate, 'MMM dd, yyyy (EEEE)');
                }

                if (format(startDate, 'yyyy') !== format(endDate, 'yyyy')) {
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
        const now = new Date();
        now.setHours(0,0,0,0);
        
        return allEvents.filter(event => {
            const eventStartDateStr = event.date.split(' - ')[0];
            const eventStartDate = safeParseDate(eventStartDateStr);
            if(!isValid(eventStartDate)) return false;

            const eventMonth = getMonthFromDateString(event.date);
            const eventYear = getYear(eventStartDate);

            let yearMatch = true;
            if (selectedYear === 'upcoming') {
                const oneYearFromNow = addYears(now, 1);
                yearMatch = (isAfter(eventStartDate, now) || isSameDay(eventStartDate, now)) && isBefore(eventStartDate, oneYearFromNow);
            } else if (selectedYear !== 'all') {
                yearMatch = eventYear === parseInt(selectedYear);
            }
            
            const monthMatch = selectedMonth === 'all' || eventMonth === selectedMonth;
            const regionMatch = selectedRegion === 'all' || event.region === selectedRegion || event.region.includes(selectedRegion);
            
            let eventTypeMatch = true;
            if (selectedEventType === 'Festivals') {
                eventTypeMatch = event.type !== 'Holiday' && event.type !== 'Diwali';
            } else if (selectedEventType === 'Holidays') {
                eventTypeMatch = event.type === 'Holiday';
            } else if (selectedEventType === 'Long Weekends') {
                eventTypeMatch = !!event.longWeekend;
            }

            return yearMatch && monthMatch && regionMatch && eventTypeMatch;
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
                                <SelectItem value="upcoming">Upcoming (1 year)</SelectItem>
                                <SelectItem value="all">All Years</SelectItem>
                                {availableYears.map(year => <SelectItem key={year} value={String(year)}>{year}</SelectItem>)}
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
                                        <TableCell className="text-base flex items-center gap-2">
                                            {event.name}
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


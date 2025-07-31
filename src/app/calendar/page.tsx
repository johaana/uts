
'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { format, parse } from 'date-fns';

const festivalCalendar = [
    { date: "Aug 19, 2025", name: "Raksha Bandhan", region: "Nationwide", type: "Cultural", link: "raksha-bandhan" },
    { date: "Aug 27, 2025", name: "Ganesh Chaturthi", region: "West", type: "Religious", link: "ganesh-chaturthi" },
    { date: "Sep 07, 2025", name: "Onam", region: "South", type: "Harvest", link: "onam" },
    { date: "Sep 22 - Oct 01, 2025", name: "Navratri", region: "Nationwide", type: "Religious", link: "navratri" },
    { date: "Sep 27 - Oct 01, 2025", name: "Durga Puja", region: "East", type: "Religious", link: "durga-puja" },
    { date: "Oct 21, 2025", name: "Diwali", region: "Nationwide", type: "Religious", link: "diwali" },
    { date: "Oct 23, 2025", name: "Bhai Dooj", region: "Nationwide", type: "Cultural", link: "diwali" },
    { date: "Oct 27, 2025", name: "Chhath Puja", region: "East", type: "Solar", link: "chhath-puja" },
    { date: "Jan 14, 2026", name: "Makar Sankranti", region: "Nationwide", type: "Harvest", link: "makar-sankranti" },
    { date: "Jan 14-17, 2026", name: "Pongal", region: "South", type: "Harvest", link: "pongal" },
    { date: "Jan 15, 2026", name: "Bihu", region: "Northeast", type: "Harvest", link: "bihu" },
    { date: "Feb 03, 2026", name: "Vasant Panchami", region: "Nationwide", type: "Seasonal", link: "vasant-panchami" },
    { date: "Mar 04, 2026", name: "Holi", region: "Nationwide", type: "Cultural", link: "holi" },
    { date: "Mar 21, 2026", name: "Gudi Padwa", region: "West", type: "New Year", link: "gudi-padwa" },
];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const regions = ["Nationwide", "North", "South", "East", "West", "Northeast"];

export default function CalendarPage() {
    const [selectedMonth, setSelectedMonth] = useState('all');
    const [selectedRegion, setSelectedRegion] = useState('all');

    const getMonthFromDateString = (dateString: string) => {
        try {
            // We only care about the start date for filtering
            const datePart = dateString.split(' ')[0] + ' ' + dateString.split(' ')[1] + ' ' + dateString.split(', ')[1].split('-')[0];
            const date = parse(datePart, "MMM dd, yyyy", new Date());
            return format(date, 'MMMM');
        } catch (e) {
            return 'Unknown';
        }
    };
    
    const filteredFestivals = festivalCalendar.filter(festival => {
        const festivalMonth = getMonthFromDateString(festival.date);
        const monthMatch = selectedMonth !== 'all' ? festivalMonth === selectedMonth : true;
        const regionMatch = selectedRegion !== 'all' ? festival.region === selectedRegion : true;
        return monthMatch && regionMatch;
    });

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="font-headline text-4xl md:text-5xl font-bold">Festival Calendar 2025-2026</h1>
                <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
                    Plan your year around the vibrant celebrations of India. Never miss a festival with our comprehensive calendar.
                </p>
            </div>
            
            <Card className="p-6 mb-12">
                 <div className="flex flex-col md:flex-row gap-4 items-center">
                    <p className="font-semibold text-lg mr-4 shrink-0">Filter by:</p>
                    <div className="flex flex-col sm:flex-row gap-4 w-full">
                        <Select onValueChange={setSelectedMonth} value={selectedMonth}>
                            <SelectTrigger className="w-full sm:w-[180px]">
                                <SelectValue placeholder="Month" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Months</SelectItem>
                                {months.map(month => <SelectItem key={month} value={month}>{month}</SelectItem>)}
                            </SelectContent>
                        </Select>
                         <Select onValueChange={setSelectedRegion} value={selectedRegion}>
                            <SelectTrigger className="w-full sm:w-[180px]">
                                <SelectValue placeholder="Region" />
                            </SelectTrigger>
                            <SelectContent>
                                 <SelectItem value="all">All Regions</SelectItem>
                                {regions.map(region => <SelectItem key={region} value={region}>{region}</SelectItem>)}
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
                                <TableHead>Festival Name</TableHead>
                                <TableHead>Region</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead className="text-right">Details</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredFestivals.length > 0 ? (
                                filteredFestivals.map((festival) => (
                                    <TableRow key={festival.name}>
                                        <TableCell className="font-medium">{festival.date}</TableCell>
                                        <TableCell className="font-bold text-base">{festival.name}</TableCell>
                                        <TableCell>{festival.region}</TableCell>
                                        <TableCell>
                                            <Badge variant={festival.type === "Religious" ? "default" : "secondary" } className={festival.type === "Religious" ? 'bg-primary/80 text-primary-foreground' : ''}>
                                                {festival.type}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <Link href={`/festivals/${festival.link}`}>
                                                <Button variant="ghost" size="icon">
                                                    <ArrowRight className="h-4 w-4" />
                                                </Button>
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center h-24">
                                        No festivals found for the selected filters.
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

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const festivalCalendar = [
    { date: "Jan 14, 2025", name: "Makar Sankranti", region: "Nationwide", type: "Harvest", link: "makar-sankranti" },
    { date: "Jan 15, 2025", name: "Pongal", region: "South", type: "Harvest", link: "pongal" },
    { date: "Feb 14, 2025", name: "Vasant Panchami", region: "Nationwide", type: "Seasonal", link: "vasant-panchami" },
    { date: "Mar 14, 2025", name: "Holi", region: "Nationwide", type: "Cultural", link: "holi" },
    { date: "Apr 06, 2025", name: "Gudi Padwa", region: "West", type: "New Year", link: "gudi-padwa" },
    { date: "Sep 07, 2025", name: "Ganesh Chaturthi", region: "West", type: "Religious", link: "ganesh-chaturthi" },
    { date: "Sep 06, 2025", name: "Onam", region: "South", type: "Harvest", link: "onam" },
    { date: "Oct 03-11, 2024", name: "Navratri", region: "Nationwide", type: "Religious", link: "navratri" },
    { date: "Oct 09-13, 2024", name: "Durga Puja", region: "East", type: "Religious", link: "durga-puja" },
    { date: "Nov 01, 2024", name: "Diwali", region: "Nationwide", type: "Religious", link: "diwali" },
    { date: "Nov 03, 2024", name: "Bhai Dooj", region: "Nationwide", type: "Cultural", link: "diwali" },
];


export default function CalendarPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="font-headline text-4xl md:text-5xl font-bold">Festival Calendar 2024-2025</h1>
                <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
                    Plan your year around the vibrant celebrations of India. Never miss a festival with our comprehensive calendar.
                </p>
            </div>
            
            <Card className="p-6 mb-12">
                 <div className="flex flex-col md:flex-row gap-4 items-center">
                    <p className="font-semibold text-lg mr-4">Filters:</p>
                    <div className="flex gap-4 w-full md:w-auto">
                        <Select>
                            <SelectTrigger className="w-full md:w-[180px]">
                                <SelectValue placeholder="By Month" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="jan">January</SelectItem>
                                <SelectItem value="feb">February</SelectItem>
                                <SelectItem value="mar">March</SelectItem>
                                <SelectItem value="apr">April</SelectItem>
                                <SelectItem value="may">May</SelectItem>
                                <SelectItem value="jun">June</SelectItem>
                                <SelectItem value="jul">July</SelectItem>
                                <SelectItem value="aug">August</SelectItem>
                                <SelectItem value="sep">September</SelectItem>
                                <SelectItem value="oct">October</SelectItem>
                                <SelectItem value="nov">November</SelectItem>
                                <SelectItem value="dec">December</SelectItem>
                            </SelectContent>
                        </Select>
                         <Select>
                            <SelectTrigger className="w-full md:w-[180px]">
                                <SelectValue placeholder="By Region" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="north">North</SelectItem>
                                <SelectItem value="south">South</SelectItem>
                                <SelectItem value="east">East</SelectItem>
                                <SelectItem value="west">West</SelectItem>
                            </SelectContent>
                        </Select>
                        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Apply</Button>
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
                            {festivalCalendar.map((festival) => (
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
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}

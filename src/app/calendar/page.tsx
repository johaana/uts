
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const months = [
    { name: "January", image: "https://i.postimg.cc/gJrdvSxD/makar-sankranti.jpg", hint: "kites festival" },
    { name: "February", image: "https://i.postimg.cc/QCVN56qC/Venice-Carnival-Italy.jpg", hint: "venetian masks" },
    { name: "March", image: "https://i.postimg.cc/0276MjRN/Holi.jpg", hint: "holi celebration" },
    { name: "April", image: "https://i.postimg.cc/htb3BK98/cherry-blossom-festival.jpg", hint: "cherry blossoms" },
    { name: "May", image: "https://i.postimg.cc/L438TyHZ/buddha-purnima.webp", hint: "buddha statue" },
    { name: "June", image: "https://i.postimg.cc/kXC7f44W/rath-yatra.jpg", hint: "chariot festival" },
    { name: "July", image: "https://i.postimg.cc/N0MM9Q6G/boryeong.avif", hint: "mud festival" },
    { name: "August", image: "https://i.postimg.cc/0564g0S7/nandu-menon-h-GHldb-Cg-YDA-unsplash.jpg", hint: "onam feast" },
    { name: "September", image: "https://i.postimg.cc/Zn3Rzsz8/navratri1.jpg", hint: "garba dance" },
    { name: "October", image: "https://i.postimg.cc/TYs5B2K4/lakshmi_puja.webp", hint: "lakshmi ganesh puja" },
    { name: "November", image: "https://i.postimg.cc/XJs7rMdt/Yi-Peng-Lantern-Festival-Thailand.webp", hint: "sky lanterns" },
    { name: "December", image: "https://i.postimg.cc/rpDTKRn2/Christmas.webp", hint: "christmas decor" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

export default function CalendarPage() {
    return (
        <div className="bg-background text-foreground min-h-screen">
            <div className="container mx-auto px-4 py-12 md:py-20">
                <div className="text-center mb-12 md:mb-16">
                    <h1 className="font-headline text-4xl md:text-6xl font-bold text-primary">A Year of Celebration</h1>
                    <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
                        Your monthly guide to the world's most vibrant festivals.
                    </p>
                </div>
                
                <motion.div 
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {months.map((month) => (
                        <motion.div key={month.name} variants={itemVariants}>
                            <Link href={`/calendar/${month.name.toLowerCase()}`} passHref>
                                <motion.div
                                    className="block relative aspect-[4/5] rounded-lg overflow-hidden group shadow-lg"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <motion.div 
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{ backgroundImage: `url(${month.image})` }}
                                        data-ai-hint={month.hint}
                                        variants={{
                                            initial: { scale: 1 },
                                            hover: { scale: 1.1 }
                                        }}
                                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                                    ></motion.div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-colors duration-300"></div>
                                    <motion.div 
                                        className="absolute inset-0 flex items-end p-4"
                                        variants={{
                                            initial: { y: 0 },
                                            hover: { y: -10 }
                                        }}
                                    >
                                        <h2 className="font-headline text-2xl md:text-3xl font-bold text-white text-left drop-shadow-2xl w-full">
                                            {month.name}
                                        </h2>
                                    </motion.div>
                                </motion.div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

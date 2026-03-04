'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedCounterProps {
    end: number;
    duration?: number;
    suffix?: string;
}

function AnimatedCounter({ end, duration = 2, suffix = '' }: AnimatedCounterProps) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            let startValue = 0;
            const stepTime = Math.abs(Math.floor((duration * 1000) / end));

            const timer = setInterval(() => {
                startValue += 1;
                setCount(startValue);
                if (startValue >= end) {
                    clearInterval(timer);
                    setCount(end); // Ensure we end exactly on the target number
                }
            }, stepTime);

            return () => clearInterval(timer);
        }
    }, [end, duration, isInView]);

    return (
        <span ref={ref}>
            {count}{suffix}
        </span>
    );
}

export default function StatsStrip() {
    return (
        <section className="bg-brand-green py-12 relative overflow-hidden z-20 -mt-8 shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-white/20">
                    <div className="text-center px-4">
                        <p className="text-5xl font-heading font-black text-white mb-1"><AnimatedCounter end={20} suffix="+" /></p>
                        <p className="font-bold text-brand-gold uppercase tracking-widest text-sm">Years Experience</p>
                    </div>
                    <div className="text-center px-4">
                        <p className="text-5xl font-heading font-black text-white mb-1"><AnimatedCounter end={1000} suffix="+" /></p>
                        <p className="font-bold text-brand-gold uppercase tracking-widest text-sm">Units Deployed</p>
                    </div>
                    <div className="text-center px-4">
                        <p className="text-5xl font-heading font-black text-white mb-1"><AnimatedCounter end={6} /></p>
                        <p className="font-bold text-brand-gold uppercase tracking-widest text-sm">Point Inspection</p>
                    </div>
                    <div className="text-center px-4">
                        <p className="text-5xl font-heading font-black text-white mb-1"><AnimatedCounter end={100} suffix="%" /></p>
                        <p className="font-bold text-brand-gold uppercase tracking-widest text-sm">Title Clarity</p>
                    </div>
                </div>
            </div>
        </section>
    );
}


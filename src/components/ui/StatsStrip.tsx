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
        <section className="relative z-20 py-8 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-[#FBFBFB] via-white to-[#FFFBEB] rounded-xl p-6 sm:p-8 shadow-lg border border-amber-200 backdrop-blur-md">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-amber-200/80">
                    <div className="text-center px-4 py-2 flex flex-col justify-center">
                        <p className="text-4xl lg:text-5xl font-heading font-extrabold text-amber-600 mb-1 tracking-tight">
                            <AnimatedCounter end={25} suffix="+" />
                        </p>
                        <p className="font-bold text-gray-700 uppercase tracking-wide text-xs sm:text-sm">Years Experience</p>
                    </div>
                    <div className="text-center px-4 py-2 flex flex-col justify-center">
                        <p className="text-4xl lg:text-5xl font-heading font-extrabold text-amber-600 mb-1 tracking-tight">
                            <AnimatedCounter end={500} suffix="+" />
                        </p>
                        <p className="font-bold text-gray-700 uppercase tracking-wide text-xs sm:text-sm">Units Deployed</p>
                    </div>
                    <div className="text-center px-4 py-2 flex flex-col justify-center">
                        <p className="text-4xl lg:text-5xl font-heading font-extrabold text-amber-600 mb-1 tracking-tight">
                            <AnimatedCounter end={100} suffix="%" />
                        </p>
                        <p className="font-bold text-gray-700 uppercase tracking-wide text-xs sm:text-sm">Title Clarity</p>
                    </div>
                    <div className="text-center px-4 py-2 flex flex-col justify-center">
                        <p className="text-4xl lg:text-5xl font-heading font-extrabold text-amber-600 mb-1 tracking-tight">
                            24/7
                        </p>
                        <p className="font-bold text-gray-700 uppercase tracking-wide text-xs sm:text-sm">Video Inspection</p>
                    </div>
                </div>
            </div>
        </section>
    );
}


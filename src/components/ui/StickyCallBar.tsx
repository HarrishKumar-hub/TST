'use client';

import { useState, useEffect } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function StickyCallBar() {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        // Show only on smaller devices after scrolling down a bit
        const handleScroll = () => {
            if (window.scrollY > 300 && window.innerWidth < 768) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check immediately
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (isDismissed) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-0 left-0 right-0 z-[100] md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.2)]"
                >
                    {/* Dismiss button */}
                    <button
                        onClick={() => setIsDismissed(true)}
                        className="absolute -top-10 right-2 bg-text-slate/80 text-white rounded-full p-1 opacity-80 z-[101]"
                    >
                        <X size={20} />
                    </button>

                    <div className="bg-bg-dark border-t-2 border-brand-gold flex divide-x divide-gray-700 h-16">
                        <Link
                            href="tel:+919443744349"
                            className="flex-1 flex flex-col items-center justify-center text-white active:bg-gray-800 transition-colors"
                        >
                            <Phone size={20} className="mb-1 text-brand-gold" />
                            <span className="text-[10px] uppercase font-bold tracking-widest leading-none">Call Now</span>
                        </Link>

                        <Link
                            href="https://api.whatsapp.com/send?phone=919443744349&text=Hello,%20I%20am%20looking%20for%20heavy%20machinery."
                            target="_blank"
                            className="flex-1 flex flex-col items-center justify-center text-white active:bg-gray-800 transition-colors"
                        >
                            <MessageCircle size={20} className="mb-1 text-[#25D366]" />
                            <span className="text-[10px] uppercase font-bold tracking-widest leading-none">WhatsApp</span>
                        </Link>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

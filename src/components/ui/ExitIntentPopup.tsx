'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, PhoneCall } from 'lucide-react';
import { HeavyButton } from './HeavyButton';

export default function ExitIntentPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [hasShown, setHasShown] = useState(false);

    useEffect(() => {
        // Check if we've already shown it this session to avoid annoying the user
        const hasSeenPopup = sessionStorage.getItem('exitIntentShown');
        if (hasSeenPopup) {
            setHasShown(true);
            return;
        }

        const handleMouseLeave = (e: MouseEvent) => {
            // Trigger when mouse moves up towards the browser chrome (tabs/address bar)
            if (e.clientY <= 0 && !hasShown) {
                setIsVisible(true);
                setHasShown(true);
                sessionStorage.setItem('exitIntentShown', 'true');
            }
        };

        document.addEventListener('mouseleave', handleMouseLeave);
        return () => document.removeEventListener('mouseleave', handleMouseLeave);
    }, [hasShown]);

    const closePopup = () => setIsVisible(false);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="bg-white w-full max-w-lg relative overflow-hidden shadow-2xl border-4 border-brand-gold rounded-3xl"
                    >
                        {/* Close Button */}
                        <button
                            onClick={closePopup}
                            className="absolute top-4 right-4 text-gray-400 hover:text-text-slate z-10 transition-colors"
                        >
                            <X size={24} />
                        </button>

                        {/* High-Impact Header */}
                        <div className="bg-bg-dark text-white p-8 relative">
                            <div className="absolute inset-0 opacity-[0.03] mesh-gradient"></div>
                            <Search size={48} className="text-brand-gold mb-4 opacity-50 absolute right-8 top-8" />

                            <h2 className="text-3xl font-heading font-black uppercase mb-2 relative z-10">
                                Still Looking For The <span className="text-brand-gold">Right Iron?</span>
                            </h2>
                            <p className="text-gray-400 font-medium relative z-10">
                                Our acquisition network finds machinery before it hits the open market. Tell us what you need.
                            </p>
                        </div>

                        {/* Form Body */}
                        <div className="p-8">
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="block text-sm font-heading font-bold text-text-slate uppercase mb-1">Company / Name</label>
                                    <input type="text" className="w-full border border-gray-300 p-3 bg-bg-gray focus:outline-none focus:border-brand-gold transition-colors font-sans text-sm" placeholder="ENTER YOUR NAME" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-heading font-bold text-text-slate uppercase mb-1">WhatsApp Number</label>
                                    <input type="tel" className="w-full border border-gray-300 p-3 bg-bg-gray focus:outline-none focus:border-brand-gold transition-colors font-sans text-sm" placeholder="+91" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-heading font-bold text-text-slate uppercase mb-1">Target Machinery</label>
                                    <select className="w-full border border-gray-300 p-3 bg-bg-gray focus:outline-none focus:border-brand-gold transition-colors font-sans text-sm">
                                        <option>10-Wheel Tipper</option>
                                        <option>6-Wheel Tipper</option>
                                        <option>Heavy Excavator</option>
                                        <option>Other / Specific Model</option>
                                    </select>
                                </div>

                                <div className="pt-4">
                                    <HeavyButton className="w-full flex items-center justify-center gap-2 text-lg py-4">
                                        <PhoneCall size={20} /> Request Insider Access
                                    </HeavyButton>
                                </div>

                                <button
                                    type="button"
                                    onClick={closePopup}
                                    className="w-full text-center text-sm font-bold text-gray-400 hover:text-text-slate uppercase tracking-wider mt-4 tracking-widest transition-colors"
                                >
                                    No Thanks, I'll keep browsing.
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}


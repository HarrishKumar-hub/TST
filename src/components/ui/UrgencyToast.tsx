'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, X } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';

export function UrgencyToast() {
    const [isVisible, setIsVisible] = useState(false);
    const { language } = useLanguage();

    useEffect(() => {
        // Show after 3 seconds, hide after 10 seconds
        const showTimer = setTimeout(() => setIsVisible(true), 3000);
        const hideTimer = setTimeout(() => setIsVisible(false), 13000);

        return () => {
            clearTimeout(showTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    const content = {
        en: {
            title: "Recent Sale!",
            message: "A Tata SK 1212 was just sold in Salem.",
            time: "2 mins ago"
        },
        ta: {
            title: "சமீபத்திய விற்பனை!",
            message: "ஒரு டாடா SK 1212 சேலத்தில் விற்கப்பட்டுள்ளது.",
            time: "2 நிமிடங்களுக்கு முன்"
        }
    };

    const text = content[language];

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, x: -50, y: 50 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, x: -50, y: 50 }}
                    className="fixed bottom-6 left-6 z-50 max-w-sm bg-bg-secondary border border-brand-saffron shadow-lg rounded-sm overflow-hidden"
                >
                    {/* Progress Bar Header */}
                    <motion.div
                        initial={{ width: "100%" }}
                        animate={{ width: "0%" }}
                        transition={{ duration: 10, ease: "linear" }}
                        className="h-1 bg-brand-saffron"
                    />

                    <div className="p-4 flex items-start gap-3">
                        <div className="bg-brand-saffron/20 p-2 rounded-full mt-1">
                            <Bell size={20} className="text-brand-saffron" />
                        </div>

                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <h4 className="font-heading font-bold text-white text-lg uppercase tracking-wider">{text.title}</h4>
                                <button
                                    onClick={() => setIsVisible(false)}
                                    className="text-gray-400 hover:text-white transition-colors ml-2"
                                >
                                    <X size={16} />
                                </button>
                            </div>
                            <p className="text-gray-300 text-sm mt-1">{text.message}</p>
                            <span className="text-xs text-brand-saffron font-bold block mt-2">{text.time}</span>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

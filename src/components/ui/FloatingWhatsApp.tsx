'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function FloatingWhatsApp() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-[90] flex flex-col items-end pointer-events-none">

            {/* Popout Chat Bubble */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="mb-4 w-[320px] bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 pointer-events-auto"
                    >
                        {/* Header */}
                        <div className="bg-bg-dark p-4 flex items-center justify-between relative">
                            <div className="absolute inset-0 opacity-[0.03] mesh-gradient"></div>

                            <div className="flex items-center gap-3 relative z-10">
                                <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center font-heading font-black text-xl text-black">
                                    K
                                </div>
                                <div>
                                    <h4 className="text-white font-bold leading-none mb-1">Kumar Consultancy</h4>
                                    <p className="text-[#25D366] text-xs font-mono font-bold flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse"></span>
                                        Online - Replies fast
                                    </p>
                                </div>
                            </div>

                            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white relative z-10">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Chat Body */}
                        <div className="p-4 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-gray-50 h-[150px]">
                            <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm text-sm text-text-slate border border-gray-100 max-w-[90%] inline-block">
                                Hello! Looking for a specific Tipper or Excavator? Let us know the tonnage and we can help you find it.
                            </div>
                        </div>

                        {/* Footer / CTA */}
                        <div className="p-4 bg-white border-t border-gray-100">
                            <Link
                                href="https://api.whatsapp.com/send?phone=919443744349&text=Hello,%20I%20am%20interested%20in%20procuring%20heavy%20machinery."
                                target="_blank"
                                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full py-3 px-4 font-bold flex items-center justify-center gap-2 transition-colors shadow-md shadow-[#25D366]/30"
                            >
                                <MessageCircle fill="currentColor" size={18} /> Send Message
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Trigger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(37,211,102,0.4)] transition-transform hover:scale-110 pointer-events-auto relative group"
                aria-label="Chat on WhatsApp"
            >
                <div className="absolute inset-0 border-2 border-[#25D366] rounded-full animate-ping opacity-50"></div>

                {isOpen ? (
                    <X size={28} />
                ) : (
                    <>
                        <MessageCircle fill="currentColor" size={32} strokeWidth={1} />
                        <span className="absolute -top-1 -right-1 bg-brand-gold text-bg-dark text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm">
                            1
                        </span>
                    </>
                )}
            </button>

        </div>
    );
}

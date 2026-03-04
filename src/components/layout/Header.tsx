'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Truck, Settings } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Yard Stock', href: '/inventory' },
        { name: 'Inspection Standard', href: '/inspection' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className="fixed w-full z-50 transition-all duration-300 glass-panel border-b border-brand-gold/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-28 py-2">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-4 group">
                            <Image
                                src="/images/tst-kumar-logo.svg"
                                alt="TST Kumar Logo"
                                width={96}
                                height={96}
                                className="transform group-hover:-rotate-3 transition-transform"
                                priority
                            />
                            <div className="flex flex-col justify-center" style={{ fontFamily: "'Clarendon Bold', 'Clarendon', serif" }}>
                                <span className="text-2xl md:text-3xl font-black tracking-wide text-text-slate leading-tight">
                                    TST KUMAR
                                </span>
                                <span className="text-lg md:text-xl font-bold tracking-widest text-brand-green leading-tight drop-shadow-sm uppercase">
                                    Consultancy
                                </span>
                            </div>
                        </Link>
                    </div>

                    <nav className="hidden md:flex items-center space-x-8">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-sans font-semibold text-text-slate hover:text-brand-green transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-0.5 after:bg-brand-green hover:after:w-full after:transition-all"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <a
                            href="tel:+919443744349"
                            className="bg-brand-green text-white px-6 py-3 font-sans font-semibold text-sm hover:shadow-lg hover:shadow-brand-green/30 hover:-translate-y-0.5 transition-all rounded-full relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-700 ease-in-out z-0"></div>
                            <span className="relative z-10 block">Call Dealer</span>
                        </a>
                    </nav>

                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-text-slate hover:text-brand-gold p-2"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden glass-panel border-b border-brand-gold/30">
                    <div className="px-4 pt-4 pb-6 flex flex-col space-y-4">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-text-slate hover:text-brand-green hover:pl-4 transition-all font-semibold text-lg border-l-2 border-transparent hover:border-brand-green py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}


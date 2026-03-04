import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, MessageCircle } from 'lucide-react';
import { assetPath } from '@/lib/assetPath';

export default function Footer() {
    return (
        <footer className="bg-bg-gray text-text-slate-dark border-t border-gray-200 pb-24 md:pb-0 relative overflow-hidden">
            {/* Subtle background texture */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000000 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-12">

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 group">
                            <div className="bg-white p-2 rounded-sm transform group-hover:-rotate-3 transition-transform inline-block">
                                <Image src={assetPath("/images/tst-kumar-logo.svg")} alt="TST Kumar Logo" width={56} height={56} />
                            </div>
                            <h3 className="text-2xl font-black text-text-slate-dark tracking-wide whitespace-nowrap">
                                <span style={{ fontFamily: "'Clarendon Bold', 'Clarendon', serif", letterSpacing: "0.02em" }}>
                                    TST KUMAR<br /><span className="text-brand-green">CONSULTANCY</span>
                                </span>
                            </h3>
                        </div>
                        <p className="text-gray-500 max-w-sm leading-relaxed border-l-2 border-brand-green pl-4 text-sm font-medium">
                            Direct Dealer Digital Showroom. Skip the broker. Buy direct from the source. Certified industrial power natively vetted.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-lg font-sans text-text-slate-dark font-bold mb-4">Showroom Address</h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4 text-gray-500 group cursor-pointer">
                                <div className="p-2 bg-white border border-gray-200 shadow-sm rounded-lg group-hover:bg-brand-green group-hover:text-white group-hover:border-brand-green transition-all shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <span className="pt-1 group-hover:text-brand-green transition-colors">Sankari, Salem, Tamil Nadu</span>
                            </div>
                            <div className="flex items-center gap-4 text-gray-500 group cursor-pointer">
                                <div className="p-2 bg-white border border-gray-200 shadow-sm rounded-lg group-hover:bg-brand-green group-hover:text-white group-hover:border-brand-green transition-all shrink-0">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <span className="block font-sans tracking-wide font-bold text-text-slate-dark text-lg group-hover:text-brand-green transition-colors">+91 94437 44349</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-lg font-sans text-text-slate-dark font-bold mb-4">Direct Line</h4>
                        <p className="text-gray-500 text-sm mb-4">Message us directly for yard stock pricing.</p>
                        <Link
                            href="https://api.whatsapp.com/send?phone=919443744349"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] hover:shadow-md hover:shadow-[#25D366]/20 text-white px-8 py-3.5 font-sans font-semibold text-sm transition-all rounded-xl relative overflow-hidden group/btn"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-[-100%] group-hover/btn:translate-y-[100%] transition-transform duration-700 ease-in-out z-0 pointer-events-none"></div>
                            <MessageCircle size={22} className="relative z-10" />
                            <span className="relative z-10">WhatsApp Us</span>
                        </Link>
                    </div>

                </div>

                <div className="mt-20 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400 font-medium">
                    <p>&copy; {new Date().getFullYear()} TST Kumar Direct Dealer. All Rights Reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-brand-green transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-brand-green transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>

            {/* Floating Mobile Footer */}
            <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-white border-t border-gray-200 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] flex">
                <a href="tel:+919443744349" className="flex-1 flex items-center justify-center gap-2 py-4 bg-bg-gray text-text-slate-dark font-sans font-bold text-sm border-r border-gray-200 transition-colors hover:bg-gray-100">
                    <Phone size={18} className="text-brand-green" /> Call Dealer
                </a>
                <a href="https://api.whatsapp.com/send?phone=919443744349" className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#25D366] text-white font-sans font-bold text-sm transition-colors hover:bg-[#20bd5a]">
                    <MessageCircle size={18} /> WhatsApp
                </a>
            </div>
        </footer>
    );
}


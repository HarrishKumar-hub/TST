'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { HeavyButton } from '@/components/ui/HeavyButton';
import Link from 'next/link';
import { ShieldCheck, Crosshair, MapPin, Truck } from 'lucide-react';
import { assetPath } from '@/lib/assetPath';

export default function AboutPage() {
    return (
        <div className="bg-bg-white min-h-screen selection:bg-brand-green selection:text-white flex flex-col">
            {/* Hero Section */}
            <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full min-h-[80vh] flex items-center pt-12 pb-12 overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 -m-32 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-3xl -z-10 pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-4"
                    >
                        <div className="inline-flex items-center gap-2 bg-brand-green/5 border border-brand-green/10 px-4 py-2 rounded-full shadow-sm">
                            <span className="text-brand-green font-sans text-xs font-semibold tracking-wide uppercase">Our Heritage</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-heading font-black text-text-slate-dark leading-[0.9] tracking-tight">
                            20 Years of <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-green-light drop-shadow-sm">Excellence.</span>
                        </h1>

                        <p className="text-xl text-text-slate font-medium leading-relaxed border-l-4 border-brand-green pl-6">
                            TST Kumar Consultancy is South India's premier destination for certified, yard-owned heavy machinery. Founded on the principles of absolute transparency and rigorous mechanical standards.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link href="/inventory">
                                <HeavyButton>View Yard Stock</HeavyButton>
                            </Link>
                            <Link href="/contact">
                                <button className="px-8 py-4 rounded-full font-sans font-semibold tracking-wider bg-white border border-gray-200 text-text-slate hover:border-brand-green hover:text-brand-green transition-all shadow-sm hover:shadow-md">
                                    Contact the Dealer
                                </button>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <Image
                            src={assetPath("/images/tst_tipper_construction_greenorange.png")}
                            alt="TST Kumar Consultancy Yard"
                            fill
                            className="object-cover object-center"
                        />
                        <div className="absolute bottom-8 left-8 text-white drop-shadow-lg">
                            <p className="font-heading font-bold text-2xl tracking-wide flex items-center gap-2">
                                <MapPin className="text-brand-green" /> Sankari, Salem
                            </p>
                            <p className="font-sans text-sm mt-1 opacity-90">Our Primary Heavy Equipment Base</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* The TST Standard Section */}
            <section className="bg-bg-gray py-20 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-heading font-black text-text-slate-dark mb-6 tracking-tight">The TST Kumar Advantage</h2>
                        <p className="text-lg text-text-slate font-medium">Why brokers consistently buy from us, and why operators trust us with their heavy investments.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-green/30 transition-all group"
                        >
                            <div className="w-14 h-14 bg-brand-green/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-green group-hover:text-white transition-colors text-brand-green">
                                <ShieldCheck size={28} />
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-text-slate-dark mb-4">Title & Finance Clarity</h3>
                            <p className="text-text-slate leading-relaxed">
                                Zero compromises. We guarantee 100% original RC books, spotless NOCs, and entirely transparent finance histories. If the paperwork isn't perfect, it doesn't enter our yard.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-green/30 transition-all group"
                        >
                            <div className="w-14 h-14 bg-brand-green/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-green group-hover:text-white transition-colors text-brand-green">
                                <Crosshair size={28} />
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-text-slate-dark mb-4">The Kumar Standard</h3>
                            <p className="text-text-slate leading-relaxed">
                                Every tipper truck undergoes a grueling 6-point mechanical inspection. We check the chassis, engine, hydraulics, and structural integrity to ensure deployment-ready reliability.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-green/30 transition-all group"
                        >
                            <div className="w-14 h-14 bg-brand-green/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-green group-hover:text-white transition-colors text-brand-green">
                                <Truck size={28} />
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-text-slate-dark mb-4">1000+ Units Deployed</h3>
                            <p className="text-text-slate leading-relaxed">
                                Over the last two decades, we have facilitated the sale and transfer of over a thousand heavy-duty units across South India. Our volume speaks to our verified trust.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Trust CTA */}
            <section className="py-24">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-4xl md:text-5xl font-heading font-black text-text-slate-dark mb-8 tracking-tight">Stop dealing with mediators.</h2>
                    <p className="text-xl text-text-slate font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
                        Come directly to the source. Get fair pricing, transparent history, and absolute peace of mind.
                    </p>
                    <div className="flex justify-center">
                        <Link href="/contact">
                            <HeavyButton className="px-10 py-5 text-lg">Send a WhatsApp Inquiry</HeavyButton>
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}

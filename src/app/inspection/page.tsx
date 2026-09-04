'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, Gauge, Hammer, Cog, CircleDashed, Armchair } from 'lucide-react';
import { assetPath } from '@/lib/assetPath';

export default function Inspection() {
    const steps = [
        {
            icon: <Gauge size={32} />,
            title: "Hydraulic System",
            desc: "We perform a full-cycle load test on the tipping jack to ensure rated speed, peak stability, and zero oil leakage."
        },
        {
            icon: <Hammer size={32} />,
            title: "Chassis Integrity",
            desc: "A structural verification of the main frame and suspension mounts to ensure no hidden stress cracks or unauthorized welding repairs."
        },
        {
            icon: <Cog size={32} />,
            title: "Engine & Gearbox",
            desc: "Performance mapping, compression check, and gearbox smoothness analysis to guarantee the vehicle is 'Ready-to-Work'."
        },
        {
            icon: <CircleDashed size={32} />,
            title: "Tyre Health",
            desc: "Precision tread depth verification and a structural check for sidewall damage or low-quality resoling."
        },
        {
            icon: <ShieldCheck size={32} />,
            title: "Legal & RTO",
            desc: "100% verification of the Registration Certificate, Insurance, Fitness Certificate (FC), and clear Finance NOCs."
        },
        {
            icon: <Armchair size={32} />,
            title: "Cabin & Electrical",
            desc: "A full health check of the dashboard instruments, electrical wiring, and driver cabin safety features."
        }
    ];

    return (
        <div className="bg-bg-white min-h-screen">
            {/* The Kumar Standard Hero */}
            <section className="relative py-24 bg-white border-b border-gray-200 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="space-y-6">
                        <div className="inline-block bg-amber-600 text-white font-sans font-bold px-4 py-2 text-xs sm:text-sm uppercase tracking-widest rounded-full shadow-sm">
                            Absolute Authority
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading font-black text-text-slate-dark uppercase leading-[0.95] tracking-tight">
                            The Kumar <br /><span className="text-amber-600">Standard</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-xl font-medium leading-relaxed border-l-4 border-amber-600 pl-6">
                            We take absolute responsibility for the quality of the iron we sell. We don&apos;t just look at tracks and tires. Every vehicle in our yard passes these exact criteria before listing.
                        </p>
                    </div>

                    <div className="relative aspect-[4/3] w-full group">
                        <div className="absolute inset-0 bg-amber-600 rounded-3xl transform translate-x-3 translate-y-3 transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
                        <div className="relative h-full w-full bg-white overflow-hidden rounded-3xl shadow-xl border border-gray-200">
                            <img
                                src={assetPath("/images/kanda_tipper_2.jpeg")}
                                alt="Kumar Standard Mechanical Inspection in Sankari Yard"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-amber-200/80 flex items-center justify-between">
                                <div>
                                    <p className="font-heading font-bold text-lg text-text-slate-dark tracking-tight">Kumar Certified Audit</p>
                                    <p className="font-sans font-medium text-xs text-amber-700 flex items-center gap-1 uppercase tracking-wider">
                                        <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse"></span> Sankari Workshop Approved
                                    </p>
                                </div>
                                <ShieldCheck size={36} className="text-amber-600 shrink-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Grid */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-heading font-black text-text-slate uppercase flex flex-col md:flex-row justify-center items-center gap-4 text-center">
                            <span className="w-12 h-1 bg-brand-gold inline-block"></span>
                            The 6-Point Inspection Protocol
                            <span className="w-12 h-1 bg-brand-gold inline-block"></span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 border border-gray-200 shadow-sm hover:shadow-md hover:border-brand-green transition-all group relative overflow-hidden"
                            >
                                <div className="absolute top-2 right-4 text-5xl font-heading font-black text-amber-600/40 select-none z-0">
                                    0{index + 1}
                                </div>
                                <div className="text-brand-green mb-6 bg-white glass-panel w-16 h-16 flex items-center justify-center rounded-sm shadow-sm group-hover:bg-brand-green group-hover:text-white transition-colors relative z-10 border border-gray-200 group-hover:border-transparent">
                                    {step.icon}
                                </div>
                                <h3 className="text-2xl font-heading font-black text-text-slate uppercase tracking-wider mb-4 relative z-10">{step.title}</h3>
                                <p className="text-gray-600 font-medium leading-relaxed relative z-10">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}


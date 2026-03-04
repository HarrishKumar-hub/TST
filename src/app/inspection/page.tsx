'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, Gauge, Hammer, Cog, CircleDashed, Armchair } from 'lucide-react';

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
        <div className="bg-bg-gray min-h-screen">
            {/* Blueprint Hero */}
            <section className="relative py-24 bg-white border-b border-gray-200 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <div className="inline-block bg-brand-gold text-white font-bold px-4 py-2 text-sm uppercase tracking-widest mb-6 rounded-full shadow-sm">
                            Absolute Authority
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-heading font-black text-text-slate uppercase leading-none mb-6">
                            The Kumar <br /><span className="text-brand-green">Standard</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-xl font-medium leading-relaxed">
                            We take absolute responsibility for the quality of the iron we sell. We don't just look at tracks and tires. Every vehicle in our yard passes these exact criteria before listing.
                        </p>
                    </div>

                    <div className="flex-1 relative aspect-square max-w-md w-full bg-bg-gray border border-gray-200 shadow-sm flex items-center justify-center p-8">
                        {/* Dealer Graphic representation */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                            className="w-full h-full border-[12px] border-brand-gold/10 rounded-full flex items-center justify-center relative"
                        >
                            <div className="absolute inset-0 flex items-center justify-center">
                                <ShieldCheck size={80} className="text-brand-green" />
                            </div>
                            <motion.div className="w-[80%] h-[80%] border-4 border-brand-green/20 rounded-full border-dashed flex items-center justify-center" />
                        </motion.div>
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
                                <div className="absolute top-0 right-0 text-6xl font-black text-gray-100 -mt-2 -mr-2 transition-colors">
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


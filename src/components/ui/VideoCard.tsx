'use client';

import { motion } from 'framer-motion';
import { Video, ShieldCheck, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface VideoCardProps {
    title: string;
    specs: string[];
    imageSrc: string;
    modelName: string;
    slug: string;
}

export default function VideoCard({ title, specs, imageSrc, modelName, slug }: VideoCardProps) {
    const defaultMessage = `Hello, I'm interested in the ${modelName}. Can we schedule a Live Video Inspection?`;
    const whatsappLink = `https://api.whatsapp.com/send?phone=919443744349&text=${encodeURIComponent(defaultMessage)}`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group relative bg-white shadow-md hover:shadow-2xl overflow-hidden transition-all duration-500 flex flex-col h-full border border-gray-100"
        >
            <div className="aspect-[4/3] relative overflow-hidden bg-bg-dark block w-full rounded-3xl">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    priority={false}
                />

                {/* Premium Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-60" />

                {/* Modern Certified Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md text-brand-green font-sans font-semibold text-xs px-3 py-1.5 flex items-center gap-1.5 rounded-full z-20 shadow-sm border border-gray-100">
                    <ShieldCheck size={14} className="text-brand-green" />
                    Certified
                </div>

                {/* Glassmorphism Specs floating on image */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 z-20 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {specs.slice(0, 3).map((spec, i) => (
                        <span key={i} className="text-xs font-sans font-bold text-text-slate bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-sm shadow-sm">
                            {spec}
                        </span>
                    ))}
                    {specs.length > 3 && (
                        <span className="text-xs font-sans font-bold text-text-slate bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-sm shadow-sm">
                            +{specs.length - 3}
                        </span>
                    )}
                </div>
            </div>

            <div className="p-6 flex-1 flex flex-col bg-white overflow-visible relative">
                {/* Accent line */}
                <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

                <Link href={`/inventory/${slug}`} className="block mt-4">
                    <h3 className="text-2xl font-heading font-black text-text-slate-dark mb-2 tracking-tight group-hover:text-brand-green transition-colors duration-300 line-clamp-2 leading-tight">
                        {title}
                    </h3>
                </Link>

                <p className="text-sm text-gray-500 font-sans font-medium mb-6 line-clamp-2">
                    Fully vetted, yard-owned machinery ready for deployment. Instant video inspection available.
                </p>

                <div className="mt-auto flex flex-col sm:flex-row gap-3">
                    <Link
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 relative overflow-hidden flex items-center justify-center gap-2 bg-[#25D366] text-white py-2.5 px-4 font-sans font-semibold text-sm transition-all hover:bg-[#20bd5a] hover:shadow-md hover:shadow-[#25D366]/20 rounded-xl group/btn"
                    >
                        <div className="absolute inset-0 bg-white/20 translate-y-[-100%] group-hover/btn:translate-y-[100%] transition-transform duration-700 ease-in-out z-0 pointer-events-none"></div>
                        <Video size={18} className="shrink-0 relative z-10" />
                        <span className="relative z-10 truncate">Video Inspect</span>
                    </Link>

                    <Link href={`/inventory/${slug}`} className="flex items-center justify-center gap-1 bg-brand-green/5 text-brand-green hover:bg-brand-green hover:text-white py-2.5 px-4 font-sans font-semibold text-sm transition-all duration-300 rounded-xl border border-transparent hover:shadow-md hover:shadow-brand-green/20">
                        Details <ChevronRight size={16} />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}


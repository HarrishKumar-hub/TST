'use client';

import { Play } from 'lucide-react';

export default function Testimonials() {
    const testimonials = [
        {
            company: "Apex Construction Services",
            content: "The CAT excavator from TST Kumar outperformed every unit in our local fleet. The inspection process was rigorous, and it showed.",
            author: "David H., Fleet Manager",
            coverImage: "https://images.unsplash.com/photo-1541888082~etc/placeholder1", // Generic placeholder format for demo
        },
        {
            company: "Global Mining Ops",
            content: "Sourcing heavy iron internationally is usually a nightmare. These guys made it a single WhatsApp message. Unbelievable service.",
            author: "Sarah J., Procurement Director",
            coverImage: "https://images.unsplash.com/photo-1541888082~etc/placeholder2",
        },
        {
            company: "Metro Infrastructure",
            content: "They found us a fleet of low-hour Volvo tippers when no one else could. Their technical background is unmatched in the dealership world.",
            author: "Michael R., VP Operations",
            coverImage: "https://images.unsplash.com/photo-1541888082~etc/placeholder3",
        }
    ];

    return (
        <div className="bg-bg-dark min-h-screen py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h1 className="text-4xl md:text-6xl font-heading font-black text-white uppercase mb-6">
                        Words From The <span className="text-brand-yellow">Field</span>
                    </h1>
                    <p className="text-xl text-gray-400">
                        Don&apos;t just take our word for it. Hear from operations managers and procurement directors who trust our hardware.
                    </p>
                </div>

                {/* Video-First Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((test, index) => (
                        <div key={index} className="bg-bg-secondary border border-gray-800 p-6 flex flex-col group relative overflow-hidden transition-colors hover:border-brand-yellow/50">

                            {/* Simulated Video Thumbnail */}
                            <div className="aspect-video bg-[#111] border border-gray-800 mb-6 relative overflow-hidden flex items-center justify-center group-hover:bg-[#151515] transition-colors cursor-pointer">
                                <div className="w-12 h-12 bg-brand-yellow/90 flex items-center justify-center rounded-full transform transition-transform group-hover:scale-110">
                                    <Play className="text-black ml-1 w-5 h-5" fill="currentColor" />
                                </div>
                                {/* Abstract overlay */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0,rgba(0,0,0,0.5)_100%)] pointer-events-none"></div>
                            </div>

                            <div className="flex-1">
                                <div className="font-heading font-bold text-brand-yellow uppercase tracking-widest text-xs mb-3">
                                    {test.company}
                                </div>
                                <blockquote className="text-gray-300 italic mb-6 leading-relaxed relative z-10">
                                    &quot;{test.content}&quot;
                                </blockquote>
                            </div>

                            <div className="mt-auto pt-6 border-t border-gray-800">
                                <p className="text-white font-bold font-heading uppercase tracking-wide text-sm">{test.author}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

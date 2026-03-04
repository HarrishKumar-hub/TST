import { inventoryData } from "@/data/inventory";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { HeavyButton } from "@/components/ui/HeavyButton";
import { CheckCircle2, Factory, History, MapPin, Gauge, MessageCircle, ChevronLeft } from "lucide-react";

export async function generateStaticParams() {
    return inventoryData.map((item) => ({
        slug: item.slug,
    }));
}

export default function MachineryDetail({ params }: { params: { slug: string } }) {
    const item = inventoryData.find(i => i.slug === params.slug);

    if (!item) {
        notFound();
    }

    const defaultMessage = `Hello, I'm interested in the ${item.title} (ID: ${item.id}). Can we schedule a Live Video Inspection?`;
    const whatsappLink = `https://api.whatsapp.com/send?phone=919443744349&text=${encodeURIComponent(defaultMessage)}`;

    return (
        <div className="bg-bg-gray min-h-screen pb-32">

            {/* Top Navigation Bar */}
            <div className="bg-white border-b border-gray-200 sticky top-[114px] z-40 hidden md:block">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                    <Link href="/inventory" className="text-sm font-bold uppercase tracking-widest text-text-slate flex items-center gap-2 hover:text-brand-green transition-colors">
                        <ChevronLeft size={16} /> Back to Yard Stock
                    </Link>
                    <div className="flex gap-4">
                        <p className="font-mono text-sm font-bold text-gray-500 uppercase flex items-center gap-2 border-r border-gray-300 pr-4">
                            ID: {item.id}
                        </p>
                        <p className="font-mono text-sm font-bold text-brand-green uppercase flex items-center gap-2">
                            <MapPin size={16} /> {item.location}
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 md:mt-10">
                <div className="mb-8">
                    <span className="inline-block px-3 py-1 bg-brand-green/10 text-brand-green font-mono text-sm font-bold uppercase tracking-widest rounded-full mb-4">
                        {item.year} | {item.category}
                    </span>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black text-text-slate uppercase leading-tight">
                        {item.title}
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left Column: Media & Details */}
                    <div className="lg:col-span-8 space-y-12">

                        {/* Massive Primary Image */}
                        <div className="aspect-[16/9] relative bg-bg-dark rounded-3xl shadow-lg border border-gray-100 overflow-hidden group">
                            <Image
                                src={item.imageSrc}
                                alt={item.title}
                                fill
                                className="object-cover transform group-hover:scale-105 transition-transform duration-[2s]"
                                priority
                            />
                            <div className="absolute top-6 right-6 bg-brand-gold text-black font-heading font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-lg flex items-center gap-2">
                                <CheckCircle2 size={18} /> Kumar Certified
                            </div>
                        </div>

                        {/* Secondary Gallery Grid */}
                        <div className="grid grid-cols-3 gap-4">
                            {item.gallery.slice(1).map((img, idx) => (
                                <div key={idx} className="aspect-[4/3] relative bg-white border border-gray-200 shadow-sm overflow-hidden cursor-zoom-in hover:border-brand-green transition-colors">
                                    <Image src={img} alt={`${item.title} angle ${idx + 2}`} fill className="object-cover hover:scale-110 transition-transform duration-500" />
                                </div>
                            ))}
                        </div>

                        {/* Executive Summary */}
                        <div className="bg-white p-10 border border-gray-200 shadow-sm relative overflow-hidden rounded-3xl">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-bg-gray rounded-bl-[100px] z-0 opacity-50"></div>
                            <h2 className="text-3xl font-heading font-black text-text-slate uppercase mb-6 relative z-10 border-l-4 border-brand-gold pl-4 tracking-wide">Machine Overview</h2>
                            <p className="text-lg text-gray-600 font-medium leading-relaxed relative z-10 font-sans">
                                {item.description}
                            </p>
                        </div>

                        {/* Reconditioning & Features */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-heading font-black text-text-slate uppercase flex items-center gap-3 tracking-wide">
                                <Factory className="text-brand-green" /> Kumar Standard Approvals
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {item.features.map((feature, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm border-l-4 border-transparent hover:border-l-brand-green transition-all flex items-start gap-4">
                                        <CheckCircle2 className="text-[#25D366] shrink-0 w-6 h-6" />
                                        <span className="font-bold text-gray-700 font-sans">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Sticky Pricing & Action Block */}
                    <div className="lg:col-span-4 relative">
                        <div className="sticky top-[200px] space-y-6">

                            {/* Primary Action Card */}
                            <div className="bg-bg-dark text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden group border border-gray-800">
                                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
                                <div className="absolute top-0 right-[-20%] w-[60%] h-full bg-gradient-to-l from-brand-green/20 to-transparent skew-x-[-15deg] transition-transform duration-700 group-hover:translate-x-full"></div>

                                <div className="relative z-10">
                                    <p className="text-sm font-sans font-bold text-gray-400 uppercase tracking-widest mb-2">Direct Dealer Price</p>
                                    <h3 className="text-5xl font-heading font-black text-brand-gold uppercase tracking-wider mb-8 drop-shadow-md">
                                        {item.price}
                                    </h3>

                                    <div className="space-y-4 pt-4 border-t border-white/10 font-sans">
                                        <div className="flex justify-between items-center text-sm font-bold uppercase tracking-wider">
                                            <span className="text-gray-400">Condition</span>
                                            <span className="text-white">{item.condition}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm font-bold uppercase tracking-wider">
                                            <span className="text-gray-400">Location</span>
                                            <span className="text-white">{item.location}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm font-bold uppercase tracking-wider pb-4 border-b border-white/10">
                                            <span className="text-gray-400">Status</span>
                                            <span className="text-[#25D366] flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></div> Available</span>
                                        </div>
                                    </div>

                                    <div className="mt-8 space-y-4 font-sans">
                                        <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full flex">
                                            <HeavyButton className="w-full !bg-[#25D366] hover:!bg-[#20bd5a] !text-white flex items-center justify-center gap-3 shadow-lg">
                                                <MessageCircle size={20} /> Live Video Inspection
                                            </HeavyButton>
                                        </Link>
                                        <a href="tel:+919443744349" className="w-full flex">
                                            <HeavyButton variant="outline" className="w-full !border-white/20 !text-white hover:!bg-white hover:!text-black flex items-center justify-center gap-3">
                                                Call Direct Deals
                                            </HeavyButton>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Heavy Metal Finance Teaser */}
                            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:border-brand-green hover:shadow-md transition-all duration-300">
                                <h4 className="text-2xl font-heading font-black text-text-slate uppercase mb-2">Finance Need?</h4>
                                <p className="text-gray-600 font-medium text-sm mb-6 pb-6 border-b border-gray-200 font-sans">
                                    We work with top NBFCs to secure heavy machinery loans fast.
                                </p>
                                <div className="flex justify-between items-center font-sans mt-4">
                                    <span className="text-text-slate font-bold uppercase text-xs tracking-wider">Estimated EMI</span>
                                    <span className="text-brand-green font-black text-xl">From ₹45,000/m</span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}



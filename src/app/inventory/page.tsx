import VideoCard from "@/components/ui/VideoCard";
import { HeavyButton } from "@/components/ui/HeavyButton";
import { Filter, Search } from "lucide-react";
import { inventoryData } from "@/data/inventory";

export default function Inventory() {
    return (
        <div className="py-24 bg-bg-gray min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-16">
                    <h1 className="text-5xl md:text-7xl font-heading font-black text-text-slate uppercase mb-4 flex items-center gap-4">
                        <span className="w-3 h-12 bg-brand-gold inline-block rounded-sm rounded-full"></span>
                        Yard <span className="text-brand-green">Stock</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mt-6 font-medium">
                        Browse our currently available, direct yard-owned heavy machinery. Ready for immediate Live Video Inspection via WhatsApp.
                    </p>
                </div>

                {/* Filters and Search */}
                <div className="flex flex-col md:flex-row gap-4 mb-12 bg-white p-6 shadow-sm border border-gray-200">
                    <div className="relative flex-grow">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="SEARCH BY BRAND, MODEL, OR YEAR..."
                            className="w-full bg-white border border-gray-300 text-text-slate pl-12 pr-4 py-4 focus:outline-none focus:border-brand-green placeholder-gray-500 font-heading font-bold text-sm uppercase tracking-widest shadow-inner shadow-gray-100"
                        />
                    </div>
                    <div className="flex gap-4">
                        <select className="bg-white border border-gray-300 text-text-slate px-4 py-4 focus:outline-none focus:border-brand-green font-heading font-bold text-sm uppercase tracking-widest shadow-inner shadow-gray-100">
                            <option>ALL INVENTORY</option>
                            <option>6-WHEEL TIPPERS</option>
                            <option>10-WHEEL TIPPERS</option>
                        </select>
                        <HeavyButton variant="outline" className="shrink-0 flex items-center justify-center gap-2 py-4 px-8 text-sm bg-white glass-panel">
                            <Filter size={16} /> FILTERS
                        </HeavyButton>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {inventoryData.map((item, index) => (
                        <VideoCard key={index} {...item} />
                    ))}
                </div>

            </div>
        </div>
    );
}


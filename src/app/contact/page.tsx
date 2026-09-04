'use client';
import { Mail, MapPin, Phone, MessageCircle, Send } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
    return (
        <div className="bg-gray-50 min-h-screen py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Page Title & Intro */}
                <div className="mb-16 max-w-3xl">
                    <div className="inline-block bg-amber-600/10 border border-amber-600/20 text-amber-700 font-sans font-bold px-4 py-1.5 text-xs uppercase tracking-widest rounded-full mb-4">
                        Direct Dealer Channel
                    </div>
                    <h1 className="text-5xl md:text-7xl font-heading font-black text-text-slate-dark tracking-tight leading-none mb-6">
                        Showroom <span className="text-amber-600">Contact</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed font-sans">
                        Ready to deploy iron? Connect directly with our Sankari yard for transparent pricing and immediate video inspections. Skip the broker.
                    </p>
                </div>

                {/* Symmetrical 2-Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Left Column: Direct Lines & Location (Unboxed Flow) */}
                    <div className="space-y-8 pr-0 lg:pr-6">
                        <h2 className="text-2xl font-heading font-black tracking-tight text-text-slate-dark border-b-2 border-amber-600 pb-3 inline-block">
                            Direct Lines & Yard Location
                        </h2>

                        <div className="space-y-6 divide-y divide-gray-200">
                            {/* Sales & Sourcing Line */}
                            <div className="pt-2">
                                <div className="flex items-start gap-5">
                                    <div className="p-3.5 bg-amber-600/10 text-amber-600 rounded-2xl shrink-0">
                                        <Phone size={26} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-gray-500 font-sans font-bold text-xs uppercase tracking-wider mb-1">Sales & Sourcing Line</h3>
                                        <p className="text-text-slate-dark font-sans font-black text-2xl mb-1 tracking-tight">+91 94437 44349</p>
                                        <p className="text-xs text-amber-600 font-semibold tracking-wide font-sans">Available 24/7 for Direct Deals</p>
                                    </div>
                                </div>
                            </div>

                            {/* Official Email */}
                            <div className="pt-6">
                                <div className="flex items-start gap-5">
                                    <div className="p-3.5 bg-amber-600/10 text-amber-600 rounded-2xl shrink-0">
                                        <Mail size={26} />
                                    </div>
                                    <div>
                                        <h3 className="text-gray-500 font-sans font-bold text-xs uppercase tracking-wider mb-1">General Enquiries</h3>
                                        <p className="text-text-slate-dark font-sans font-bold text-xl tracking-tight">info@tstkumar.in</p>
                                    </div>
                                </div>
                            </div>

                            {/* Physical Yard Exact Address */}
                            <div className="pt-6">
                                <div className="flex items-start gap-5">
                                    <div className="p-3.5 bg-amber-600/10 text-amber-600 rounded-2xl shrink-0">
                                        <MapPin size={26} />
                                    </div>
                                    <div>
                                        <h3 className="text-gray-500 font-sans font-bold text-xs uppercase tracking-wider mb-1">Exact Yard Address</h3>
                                        <p className="text-text-slate-dark font-sans font-bold text-base md:text-lg leading-relaxed max-w-md">
                                            Ambal Nagar, Manjakalpatti, Sankari, Devanakavandanur, Tamil Nadu 637301
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Rapid Request Form */}
                    <div className="bg-white p-8 md:p-10 rounded-3xl border border-amber-200 shadow-sm relative">
                        <h2 className="text-2xl font-heading font-black tracking-tight text-text-slate-dark border-b-2 border-amber-600 pb-3 mb-8">
                            Send a Rapid Request
                        </h2>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-xs font-sans font-bold text-gray-700 uppercase tracking-wider mb-2">Your Name</label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-200 p-4 bg-gray-50 focus:bg-white focus:outline-none focus:border-amber-600 rounded-xl transition-all font-sans text-sm font-medium"
                                    placeholder="e.g. Balamurugan"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-sans font-bold text-gray-700 uppercase tracking-wider mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    className="w-full border border-gray-200 p-4 bg-gray-50 focus:bg-white focus:outline-none focus:border-amber-600 rounded-xl transition-all font-sans text-sm font-medium"
                                    placeholder="+91 98427 24345"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-sans font-bold text-gray-700 uppercase tracking-wider mb-2">Machinery Interest</label>
                                <select className="w-full border border-gray-200 p-4 bg-gray-50 focus:bg-white focus:outline-none focus:border-amber-600 rounded-xl transition-all font-sans text-sm font-medium">
                                    <option>Select Tonnage / Model</option>
                                    <option>6-Wheel Tipper</option>
                                    <option>10-Wheel Tipper</option>
                                    <option>Heavy Excavator</option>
                                    <option>Other / Custom Procurement</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-sans font-bold text-base py-4 rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                            >
                                <Send size={18} /> Send Rapid Request
                            </button>
                        </form>
                    </div>

                </div>

                {/* Google Map Integration */}
                <div className="mt-16 bg-white p-6 rounded-3xl border border-gray-200 shadow-sm">
                    <h2 className="text-xl font-heading font-bold text-text-slate-dark tracking-tight mb-4 px-2">
                        Locate Our Sankari Yard
                    </h2>
                    <div className="w-full h-[400px] md:h-[450px] rounded-2xl overflow-hidden bg-gray-100 border border-gray-100">
                        <iframe
                            src="https://maps.google.com/maps?q=Ambal%20Nagar%2C%20Manjakalpatti%2C%20Sankari%2C%20Devanakavandanur%2C%20Tamil%20Nadu%20637301&t=&z=14&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Sankari Location Map"
                            className="w-full h-full object-cover"
                        ></iframe>
                    </div>
                </div>

            </div>
        </div>
    );
}

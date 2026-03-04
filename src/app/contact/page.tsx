'use client';
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import { HeavyButton } from '@/components/ui/HeavyButton';
import Link from 'next/link';

export default function Contact() {
    return (
        <div className="bg-bg-gray min-h-screen py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-16">
                    <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-heading font-black text-text-slate-dark tracking-tight mb-4 flex items-center gap-4 leading-tight">
                        <span className="w-3 h-12 bg-brand-green rounded-full"></span>
                        Showroom <span className="text-brand-green">Contact</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mt-6 font-medium leading-relaxed font-sans">
                        Ready to deploy iron? Reach out directly to our sourcing and inspection specialists. Skip the broker.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Methods */}
                    <div className="space-y-12">

                        {/* Direct Lines */}
                        <div className="space-y-8">
                            <h2 className="text-3xl font-heading font-black tracking-tight text-text-slate-dark border-b-2 border-brand-green pb-4 inline-block">
                                Direct Lines
                            </h2>

                            <div className="bg-white p-6 shadow-sm border border-gray-200">
                                <div className="flex items-start gap-5">
                                    <div className="p-4 bg-bg-gray border border-gray-200 rounded-sm shrink-0">
                                        <Phone className="text-brand-green w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-text-slate-dark font-sans font-bold mb-2 text-xl">Sales & Sourcing</h3>
                                        <p className="text-gray-600 font-bold text-xl mb-2 font-sans">+91 94437 44349</p>
                                        <p className="text-sm text-brand-green font-semibold tracking-wide font-sans">Available 24/7 for Direct Deals</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 shadow-sm border border-gray-200">
                                <div className="flex items-start gap-5">
                                    <div className="p-4 bg-bg-gray border border-gray-200 rounded-sm shrink-0">
                                        <Mail className="text-brand-green w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-text-slate-dark font-sans font-bold mb-2 text-xl">General Enquiries</h3>
                                        <p className="text-gray-600 font-bold text-lg mb-2 font-sans">balamuruganconsulting@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* HQ Address */}
                        <div className="space-y-8">
                            <h2 className="text-3xl font-heading font-black tracking-tight text-text-slate-dark border-b-2 border-brand-green pb-4 inline-block">
                                Sankari Showroom
                            </h2>

                            <div className="bg-white p-6 shadow-sm border border-gray-200">
                                <div className="flex items-start gap-5">
                                    <div className="p-4 bg-bg-gray border border-gray-200 rounded-sm shrink-0">
                                        <MapPin className="text-brand-green w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-text-slate-dark font-sans font-bold mb-2 text-xl">Physical Yard</h3>
                                        <p className="text-gray-600 font-medium text-lg leading-relaxed font-sans">
                                            Sankari,<br />
                                            Salem,<br />
                                            Tamil Nadu
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-8">
                            <Link
                                href="https://api.whatsapp.com/send?phone=919443744349"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <HeavyButton className="w-full sm:w-auto flex items-center justify-center gap-3 !bg-[#25D366] !text-white hover:!bg-[#20bd5a] hover:!text-white border-none shadow-md">
                                    Start WhatsApp Chat <MessageCircle size={20} />
                                </HeavyButton>
                            </Link>
                        </div>

                    </div>

                    {/* Placeholder Area or Form */}
                    <div className="bg-white border border-gray-200 shadow-sm relative p-8">
                        <h2 className="text-3xl font-heading font-black tracking-tight text-text-slate-dark border-b-2 border-brand-green pb-4 mb-8">
                            Send a Rapid Request
                        </h2>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-sans font-semibold text-text-slate-dark mb-2">Your Name</label>
                                <input type="text" className="w-full border border-gray-300 p-4 bg-white shadow-inner focus:outline-none focus:border-brand-green shadow-sm rounded-lg transition-colors font-sans text-sm" placeholder="e.g. Kumar" />
                            </div>
                            <div>
                                <label className="block text-sm font-sans font-semibold text-text-slate-dark mb-2">Phone Number</label>
                                <input type="tel" className="w-full border border-gray-300 p-4 bg-white shadow-inner focus:outline-none focus:border-brand-green shadow-sm rounded-lg transition-colors font-sans text-sm" placeholder="+91" />
                            </div>
                            <div>
                                <label className="block text-sm font-sans font-semibold text-text-slate-dark mb-2">Machinery Interest</label>
                                <select className="w-full border border-gray-300 p-4 bg-white shadow-inner focus:outline-none focus:border-brand-green shadow-sm rounded-lg transition-colors font-sans text-sm">
                                    <option>Select Option</option>
                                    <option>6-Wheel Tippers</option>
                                    <option>10-Wheel Tippers</option>
                                    <option>General Enquiry</option>
                                </select>
                            </div>
                            <HeavyButton type="button" className="w-full text-lg">Send Request</HeavyButton>
                        </form>
                    </div>

                </div>

            </div>

            {/* Google Map Integration */}
            <div className="mt-16 bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-sans font-bold text-text-slate-dark tracking-tight mb-4 px-2">
                    Locate Our Yard
                </h2>
                <div className="w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden bg-gray-100">
                    <iframe
                        src="https://maps.google.com/maps?q=Sankari%2C%20Salem%2C%20Tamil%20Nadu&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
    );
}

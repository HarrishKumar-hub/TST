'use client';

import Image from "next/image";
import Link from "next/link";
import { HeavyButton } from "@/components/ui/HeavyButton";
import VideoCard from "@/components/ui/VideoCard";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from 'react';
import { ShieldCheck, Truck, CircleAlert, MapPin, Wrench, FileCheck, Video } from "lucide-react";
import { inventoryData, getCategoryCount } from "@/data/inventory";
import StatsStrip from "@/components/ui/StatsStrip";
import { assetPath } from "@/lib/assetPath";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = [
    { src: "/images/hero_bg_1.png", align: "object-cover object-center" },
    { src: "/images/hero_bg_2.png", align: "object-cover object-center" },
    { src: "/images/hero_bg_3.png", align: "object-cover object-center" },
    { src: "/images/hero_bg_4.png", align: "object-cover object-center" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Use the first 3 items as featured inventory
  const featuredInventory = inventoryData.slice(0, 3);

  // Dynamic category stock counts
  const tenWheelCount = getCategoryCount('10-Wheel Tipper');
  const sixWheelCount = getCategoryCount('6-Wheel Tipper');
  const excavatorCount = getCategoryCount('Excavator');

  return (
    <div className="bg-bg-white text-text-slate selection:bg-brand-green selection:text-white">
      {/* Full-Bleed Cinematic Hero Section */}
      <section ref={heroRef} className="relative w-full min-h-[85vh] h-[85vh] flex items-center overflow-hidden bg-text-slate-dark">

        {/* Full-Bleed Background Slideshow */}
        <motion.div
          style={{ y: yParallax, opacity: opacityFade }}
          className="absolute inset-0 z-0"
        >
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute inset-0 z-0"
            >
              <Image
                src={heroImages[currentImageIndex].src}
                alt="Heavy Duty Machinery Digital Showroom"
                fill
                className={heroImages[currentImageIndex].align}
                priority={currentImageIndex === 0}
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Brand Hook Section */}
      <section className="py-12 bg-bg-white border-t-4 border-amber-600 relative text-center z-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-sans font-semibold text-amber-600 tracking-widest uppercase mb-2">
              THE TST DIRECT PROMISE
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 tracking-tight leading-tight">
              Cut out the middlemen. Deal directly with the yard owner.
            </h2>
            <p className="text-sm md:text-base text-gray-600 font-medium max-w-2xl mx-auto mt-2 leading-relaxed">
              No broker commissions, no inflated promises—just 25 years of transparent heavy machinery dealing in Sankari.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust & Scale Numbers */}
      <StatsStrip />

      {/* Handover Gallery - Keys Delivered, Trust Earned */}
      <section className="py-24 bg-bg-white relative border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-sm font-sans font-semibold text-amber-600 tracking-widest uppercase mb-3">Sankari Yard Handovers</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-black text-text-slate-dark tracking-tight mb-4">
              Keys Delivered, <span className="text-amber-600">Trust Earned.</span>
            </h3>
            <p className="text-lg text-gray-600 font-medium">
              Real handovers from our Sankari yard. No brokers, just direct delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Ashok Leyland 1612 Tipper Handover",
                  location: "Sankari Yard",
                  src: "/images/kanda_tipper_1.jpeg"
                },
                {
                  title: "Tata SK 1212 Heavy Tipper Delivery",
                  location: "Salem Region",
                  src: "/images/tst_hero_tipper.jpg"
                },
                {
                  title: "BharatBenz Mining Spec Tipper Dispatch",
                  location: "Namakkal Yard",
                  src: "/images/kanda_tipper_3.jpeg"
                }
              ].map((handover, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={handover.src}
                    alt={handover.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-amber-600 text-white font-sans text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                    Direct Handover
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-heading font-bold text-lg text-text-slate-dark mb-1 group-hover:text-amber-600 transition-colors">
                    {handover.title}
                  </h4>
                  <p className="text-xs font-sans text-gray-500 flex items-center gap-1 font-semibold uppercase tracking-wider">
                    <MapPin size={14} className="text-amber-600" /> {handover.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The TST Inspection Standard Section */}
      <section className="py-24 bg-bg-gray relative border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-sm font-sans font-semibold text-amber-600 tracking-widest uppercase mb-3">Kumar Standard Quality Assurance</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-black text-text-slate-dark tracking-tight">
              The TST <span className="text-amber-600">Inspection Standard</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm border-t-4 border-t-amber-600 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 bg-amber-600/10 rounded-2xl flex items-center justify-center mb-6 text-amber-600">
                <Wrench size={32} />
              </div>
              <h4 className="font-heading font-bold text-xl text-text-slate-dark mb-3">100-Point Mechanical Check</h4>
              <p className="text-gray-600 font-medium leading-relaxed text-sm">
                Deep-dive engine, hydraulics, and chassis audit conducted by certified technicians at our Sankari workshop before listing.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm border-t-4 border-t-amber-600 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 bg-amber-600/10 rounded-2xl flex items-center justify-center mb-6 text-amber-600">
                <FileCheck size={32} />
              </div>
              <h4 className="font-heading font-bold text-xl text-text-slate-dark mb-3">100% Clear Title & RC</h4>
              <p className="text-gray-600 font-medium leading-relaxed text-sm">
                Original RC books, legal ownership records, and bank finance NOCs strictly verified for hassle-free transfer.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm border-t-4 border-t-amber-600 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 bg-amber-600/10 rounded-2xl flex items-center justify-center mb-6 text-amber-600">
                <Video size={32} />
              </div>
              <h4 className="font-heading font-bold text-xl text-text-slate-dark mb-3">Remote Live Inspection</h4>
              <p className="text-gray-600 font-medium leading-relaxed text-sm">
                Live HD WhatsApp video walkarounds allowing remote buyers to inspect engine sound, hydraulics, and cabin condition.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder's Trust Pledge Transition Banner */}
      <section className="py-16 bg-bg-white relative border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-[#FBFBFB] via-white to-[#FFFBEB] p-8 md:p-12 rounded-3xl border border-amber-200 shadow-sm text-center relative overflow-hidden"
          >
            <div className="text-amber-600 font-serif text-5xl font-black mb-2 opacity-30 select-none">&ldquo;</div>
            <blockquote className="text-xl md:text-2xl font-heading font-bold text-text-slate-dark leading-relaxed max-w-4xl mx-auto mb-6">
              When you buy from TST, you are buying 25 years of Sankari reputation. No broker commissions, no hidden flaws&mdash;just direct ownership and verified iron.
            </blockquote>
            <p className="font-sans font-semibold text-amber-700 uppercase tracking-widest text-xs sm:text-sm">
              &mdash; Kumar, Founder &amp; Principal Consultant
            </p>
          </motion.div>
        </div>
      </section>

      {/* Full Closing Trust & Action Section */}
      <section className="py-24 bg-bg-white relative overflow-hidden border-t border-gray-200 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ShieldCheck size={56} className="text-amber-600 mx-auto mb-6 opacity-90" />
            <h2 className="text-4xl md:text-6xl font-heading font-black text-text-slate-dark tracking-tight mb-6 leading-tight">
              Built on <span className="text-amber-600">Action.</span> Not Talk.
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed mb-10">
              25 years of direct dealing in Sankari, Salem. No middlemen, no confusion&mdash;just verified iron and transparent titles.
            </p>

            {/* Direct Contact Call-To-Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+919443744349"
                className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white font-sans font-bold text-lg px-8 py-4 rounded-full shadow-md hover:shadow-xl hover:shadow-amber-600/30 transition-all flex items-center justify-center gap-3"
              >
                <Truck size={22} /> Call Kumar Directly
              </a>
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-white border border-gray-300 hover:border-amber-600 text-text-slate-dark hover:text-amber-600 font-sans font-bold text-lg px-8 py-4 rounded-full shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2"
              >
                <MapPin size={20} className="text-amber-600" /> Visit Sankari Yard
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


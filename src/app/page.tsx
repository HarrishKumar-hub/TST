'use client';

import Image from "next/image";
import Link from "next/link";
import { HeavyButton } from "@/components/ui/HeavyButton";
import VideoCard from "@/components/ui/VideoCard";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from 'react';
import { ShieldCheck, Truck, CircleAlert, MapPin } from "lucide-react";
import { inventoryData } from "@/data/inventory";
import StatsStrip from "@/components/ui/StatsStrip";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = [
    { src: "/images/tst_tipper_highway_yellow.png", align: "object-cover object-center" },
    { src: "/images/tst_tipper_construction_green.png", align: "object-cover object-center" },
    { src: "/images/tst_tipper_green_yellow_road.png", align: "object-cover object-center" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Use the first 3 items as featured inventory
  const featuredInventory = inventoryData.slice(0, 3);

  return (
    <div className="bg-bg-white text-text-slate selection:bg-brand-green selection:text-white">
      {/* Dynamic Parallax Hero Section */}
      <section ref={heroRef} className="relative h-screen min-h-[800px] flex items-center bg-white overflow-hidden">

        {/* Crisp White Left Panel overlaying the parallax */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[65%] bg-gradient-to-r from-white via-white/80 to-transparent z-10 flex items-center">
          {/* Subtle mesh background */}
          <div className="absolute inset-0 opacity-[0.02] mesh-gradient pointer-events-none"></div>

          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl space-y-8 pt-20"
            >
              {/* Soft Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-brand-green/5 border border-brand-green/10 backdrop-blur-md px-4 py-2 rounded-full shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
                </span>
                <span className="text-brand-green font-sans text-xs font-semibold tracking-wide pl-1">Live Inventory: 24 active units</span>
              </div>

              {/* High-Impact Modern Headline */}
              <h1 className="relative text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[7rem] font-heading font-black text-text-slate-dark leading-[0.9] tracking-tight">
                Skip the {" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-green-light drop-shadow-sm">broker.</span><br />
                Buy direct.
              </h1>

              <p className="text-xl md:text-2xl text-text-slate font-medium max-w-xl border-l-4 border-brand-green pl-6 leading-relaxed">
                Access certified, yard-owned heavy machinery with transparent pricing and instant live video inspections.
              </p>

              <div className="pt-8 flex flex-wrap gap-4">
                <Link href="/inventory" className="w-full sm:w-auto">
                  <HeavyButton className="w-full text-base sm:text-lg">
                    View Yard Stock
                  </HeavyButton>
                </Link>
                <button className="flex items-center gap-3 text-text-slate font-sans font-semibold tracking-wide hover:text-brand-green transition-colors px-6 py-4 group">
                  <div className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center group-hover:border-brand-green group-hover:shadow-md transition-all">
                    <Truck size={20} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                  See Our Standard
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Side Image with Framer Motion Parallax */}
        <motion.div
          style={{ y: yParallax, opacity: opacityFade }}
          className="absolute inset-0 z-0 flex justify-end"
        >
          <div className="w-full lg:w-[65%] h-[110%] relative top-[-5%] rounded-3xl overflow-hidden">
            {/* Subtle overlay to prevent image from totally blowing out white text on smaller screens */}
            <div className="absolute inset-0 bg-bg-dark/20 z-10 lg:hidden pointer-events-none"></div>

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
                  alt="Heavy Duty Indian Tipper Truck Working"
                  fill
                  className={heroImages[currentImageIndex].align}
                  priority={currentImageIndex === 0}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </section>

      {/* Trust & Scale Numbers */}
      <StatsStrip />

      {/* Feature Section - Scroll Reveal */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-heading font-black text-text-slate-dark tracking-tight leading-tight">
                The difference between a <span className="text-brand-green">broker</span> and a <span className="text-brand-green border-b-2 border-brand-green">direct dealer.</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                Most websites simply list vehicles they don't own. We are different. Every single truck, tipper, and excavator listed on TST Kumar Consultancy is physically sitting in our yard in Sankari.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                We've bought it, inspected it to the absolute limit, and hold the original papers in our safe. When you buy from us, you skip the inflated commissions and deal directly with the source.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="bg-bg-gray p-6 rounded-2xl border border-gray-100 shadow-sm border-t-4 border-t-brand-green">
                  <MapPin className="text-brand-green mb-3 w-8 h-8" />
                  <h4 className="font-sans font-bold text-lg mb-1 text-text-slate-dark">Physical Yard</h4>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed">Come kick the tires. Sankari, Salem.</p>
                </div>
                <div className="bg-bg-gray p-6 rounded-2xl border border-gray-100 shadow-sm border-t-4 border-t-bg-dark">
                  <ShieldCheck className="text-bg-dark mb-3 w-8 h-8" />
                  <h4 className="font-sans font-bold text-lg mb-1 text-text-slate-dark">Clear Title</h4>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed">Original RC and strict finance NOC checks.</p>
                </div>
              </div>
            </div>

            <div className="relative aspect-square max-w-md mx-auto w-full group">
              <div className="absolute inset-0 bg-brand-green transform translate-x-4 translate-y-4 rounded-3xl transition-transform group-hover:translate-x-6 group-hover:translate-y-6"></div>
              <div className="relative h-full w-full bg-white overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src="/images/kanda_tipper_3.jpeg"
                  alt="Yard Inspection"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100">
                  <p className="font-sans font-bold text-xl text-text-slate-dark mb-1 tracking-tight">Kumar Certified</p>
                  <p className="font-sans font-medium text-sm text-brand-green flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-brand-green"></span> 100% Vetted Iron
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Fleet - Category Navigation */}
      <section className="py-24 bg-bg-gray overflow-hidden border-t-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-sans font-semibold text-brand-green tracking-widest mb-3">Browse by Class</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-black text-text-slate-dark tracking-tight">
              The <span className="text-brand-green">Fleet</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "10-Wheel Tippers", count: "12 In Stock", src: "/images/kanda_tipper_1.jpeg" },
              { title: "6-Wheel Tippers", count: "8 In Stock", src: "/images/tst_hero_tipper.jpg" },
              { title: "Heavy Excavators", count: "4 In Stock", src: "/images/kanda_tipper_3.jpeg" }
            ].map((category, idx) => (
              <div key={idx} className="group relative h-96 bg-bg-dark overflow-hidden rounded-3xl cursor-pointer block">
                <Image src={category.src} fill className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" alt={category.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 z-10 transition-transform duration-500 group-hover:-translate-y-4">
                  <p className="text-brand-green font-mono font-medium text-sm mb-2">{category.count}</p>
                  <h4 className="text-white font-heading font-black text-3xl tracking-tight">{category.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Catalog Grid */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-sm font-sans font-semibold text-brand-green tracking-widest mb-3 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-brand-green inline-block"></span> Active Inventory
              </h2>
              <h3 className="text-4xl md:text-5xl font-heading font-black text-text-slate-dark tracking-tight">
                Yard-Owned Machinery
              </h3>
            </div>
            <HeavyButton variant="outline" className="hidden border-transparent md:flex">View Full Catalog</HeavyButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredInventory.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="h-full"
              >
                <VideoCard {...item} />
              </motion.div>
            ))}
          </div>

          <div className="mt-12 md:hidden">
            <HeavyButton variant="outline" className="w-full">View Full Catalog</HeavyButton>
          </div>
        </div>
      </section>

      {/* Built on Iron - Trust Section */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000000 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <CircleAlert size={48} className="text-brand-green mx-auto mb-6 opacity-80" />
          <h2 className="text-4xl md:text-5xl font-heading font-black text-text-slate-dark tracking-tight mb-16">
            Built on <span className="text-brand-green">Action,</span> Not Talk.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder delivery stats / quotes */}
            {[
              { stat: "20+", label: "Units Deployed Monthly", text: "Providing relentless machinery to standard & heavy grading sites across South India." },
              { stat: "100%", label: "Title Clarity", text: "Zero bank liens. Zero shadow broker interference. You get the exact papers in hand instantly." },
              { stat: "24/7", label: "Video Inspection", text: "Can't visit Sankari today? We put our mechanics on a live WhatsApp call to show you the guts." },
            ].map((item, idx) => (
              <div key={idx} className="bg-bg-gray p-8 border-t-4 border-brand-green text-left rounded-3xl shadow-sm hover:shadow-lg transition-shadow group border border-gray-200">
                <p className="text-5xl font-heading font-black text-text-slate-dark mb-2">{item.stat}</p>
                <p className="text-brand-green font-sans font-bold tracking-wide mb-4 border-b border-gray-200 pb-4">{item.label}</p>
                <p className="text-gray-500 font-medium leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Sourcing CTA Component */}
      <section className="py-32 bg-brand-green/5 border-t border-brand-green/20 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20 mesh-gradient pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 px-4">
          <h2 className="text-5xl md:text-7xl font-heading font-black text-text-slate-dark tracking-tight leading-none mb-6">
            Don't see exactly <br />what you need?
          </h2>
          <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
            We run an active acquisition network. Tell us exactly what tonnage and class you require, and we will source, inspect, and buy it for you.
          </p>
          <a href="https://api.whatsapp.com/send?phone=919443744349&text=I%20am%20looking%20to%20source%20a%20specific%20piece%20of%20machinery..." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-brand-green text-white text-lg font-sans font-semibold px-10 py-5 rounded-full hover:bg-brand-green-light hover:-translate-y-1 transition-all shadow-md hover:shadow-xl hover:shadow-brand-green/30">
            Initiate Sourcing Request
          </a>
        </div>
      </section>
    </div>
  );
}


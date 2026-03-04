'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';

export default function IntroAnimation() {
    return (
        <div className="fixed inset-0 z-[100] bg-white flex items-center justify-center intro-overlay pointer-events-none">
            <div className="flex flex-col items-center justify-center gap-6">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Image
                        src={assetPath("/images/tst-kumar-logo.svg")}
                        alt="TST Kumar Consultancy Logo"
                        width={200}
                        height={200}
                        priority
                    />
                </motion.div>

                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <h1
                        className="text-3xl font-bold tracking-widest text-text-slate uppercase"
                        style={{ fontFamily: "'Clarendon Bold', 'Clarendon', serif" }}
                    >
                        TST KUMAR CONSULTANCY
                    </h1>
                </motion.div>
            </div>
        </div>
    );
}

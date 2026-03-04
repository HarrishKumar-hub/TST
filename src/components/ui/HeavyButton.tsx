'use client';

import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'default' | 'outline';
    children: React.ReactNode;
    className?: string;
}

export function HeavyButton({ variant = 'default', children, className = '', ...props }: ButtonProps) {
    const baseStyles = "relative px-8 py-3.5 font-sans font-medium hover:-translate-y-0.5 overflow-hidden group transition-all duration-300 rounded-full flex items-center justify-center gap-2";

    const variants = {
        default: 'bg-gradient-to-r from-brand-green to-brand-green-light text-white shadow-md hover:shadow-xl hover:shadow-brand-green/20 ring-1 ring-white/10',
        outline: "bg-white border border-gray-200 text-text-slate hover:border-brand-green hover:text-brand-green hover:shadow-md"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {/* Subtle gloss effect */}
            <div className="absolute inset-0 bg-white/10 translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-700 ease-in-out z-0 pointer-events-none"></div>
            <span className="relative z-10 block">{children}</span>
        </motion.button>
    );
}


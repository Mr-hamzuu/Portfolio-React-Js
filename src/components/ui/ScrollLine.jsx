"use client";
import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { cn } from "../../lib/utils";

export const ScrollLine = ({ className }) => {
    const { scrollYProgress } = useScroll();

    // Smooth out the progress for the dot
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Transform scroll progress to vertical position (0% to 100%)
    const y = useTransform(scaleY, [0, 1], ["0%", "100%"]);

    // Add more pronounced dot scale effect
    const dotScale = useTransform(scaleY, [0, 0.2, 0.5, 0.8, 1], [1, 1.4, 1.8, 1.4, 1]);

    return (
        <div className={cn("fixed left-2 md:left-8 top-0 h-screen w-px md:w-[2px] z-50 opacity-40 md:opacity-100", className)}>
            {/* Background Line */}
            <div className="absolute inset-y-0 left-0 w-full bg-gray-800/20 rounded-full" />

            {/* Progress Line */}
            <motion.div
                className="absolute top-0 left-0 w-full bg-linear-to-b from-primary-500 to-accent-500 rounded-full origin-top"
                style={{ scaleY }}
            />

            {/* Moving Dot */}
            <motion.div
                className="absolute left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_20px_rgba(56,189,248,0.8)] border-2 border-primary-500 z-50"
                style={{ top: y, translateY: "-50%", scale: dotScale }}
            />
        </div>
    );
};

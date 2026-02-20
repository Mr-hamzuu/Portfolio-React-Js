"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const BackgroundBeams = ({
    className
}) => {
    const [beams, setBeams] = useState([]);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current) {
                const { width, height } = containerRef.current.getBoundingClientRect();
                const newBeams = Array.from({ length: 20 }).map((_, i) => ({
                    id: i,
                    x: Math.random() * width,
                    y: Math.random() * height,
                    duration: Math.random() * 10 + 10,
                    delay: Math.random() * 5,
                }));
                setBeams(newBeams);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div
            ref={containerRef}
            className={cn(
                "absolute inset-0 mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]",
                className
            )}
        >
            <svg
                className="absolute inset-0 h-full w-full opacity-30"
                xmlns="http://www.w3.org/2000/svg"
            >
                {beams.map((beam) => (
                    <motion.path
                        key={beam.id}
                        d={`M${beam.x} ${beam.y} L${beam.x + 100} ${beam.y + 100}`}
                        stroke="white"
                        strokeWidth="0.5"
                        strokeDasharray="1 10"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: [0, 1],
                            opacity: [0, 1, 0],
                            transition: {
                                duration: beam.duration,
                                repeat: Infinity,
                                delay: beam.delay,
                                ease: "linear",
                            },
                        }}
                    />
                ))}
            </svg>
        </div>
    );
};

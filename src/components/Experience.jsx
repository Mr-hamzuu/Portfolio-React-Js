import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const experiences = [
        {
            company: 'RFZ Digital',
            role: 'Software Engineer Intern',
            duration: 'Feb 17, 2026 - Present',
            description: 'Currently exploring and implementing AI tools to enhance development workflows. Working extensively with WordPress and Shopify for e-commerce solutions. Preparing to transition into Next.js and Node.js for upcoming full-stack projects.',
            highlights: ['AI Tools', 'WordPress & Shopify', 'Next.js & Node.js (Upcoming)'],
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    };

    return (
        <section id="experience" className="relative py-20 overflow-hidden bg-secondary/30">
            <div className="section-container">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    <motion.div variants={cardVariants} className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text font-display">
                            Experience
                        </h2>
                        <div className="w-20 h-1 bg-linear-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="max-w-4xl mx-auto relative px-4">
                        {/* Vertical Timeline Line */}
                        <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gray-800/50"></div>

                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className="relative pl-14 md:pl-28 mb-16"
                            >
                                {/* Timeline Point - centered on line */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
                                    className="absolute left-[24px] md:left-[38px] top-1.5 w-4 h-4 md:w-5 md:h-5 rounded-full bg-primary-500 border-4 border-gray-900 z-10"
                                />

                                <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                                    {/* Left side: Role & Date */}
                                    <div className="md:w-1/3">
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1 leading-tight">{exp.role}</h3>
                                        <p className="text-primary-400 font-medium mb-2 text-sm md:text-base">{exp.company}</p>
                                        <p className="text-gray-500 text-xs md:text-sm italic">{exp.duration}</p>
                                    </div>

                                    {/* Right side: Description & Highlights */}
                                    <div className="md:w-2/3">
                                        <motion.div
                                            whileHover={{
                                                y: -5,
                                                scale: 1.01,
                                                transition: { duration: 0.2 }
                                            }}
                                            className="card glass-effect hover:border-primary-500/30 transition-all cursor-default relative overflow-hidden group p-5 rounded-2xl"
                                        >
                                            <div className="absolute inset-0 bg-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4 relative z-10">
                                                {exp.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2 relative z-10">
                                                {exp.highlights.map((skill, sIndex) => (
                                                    <span
                                                        key={sIndex}
                                                        className="px-2 py-1 md:px-3 md:py-1 bg-primary-500/10 text-primary-400 text-[10px] md:text-xs rounded-full border border-primary-500/20 group-hover:border-primary-500/40 transition-colors"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;

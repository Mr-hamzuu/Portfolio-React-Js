import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import pic from '../assets/pic.png';
const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section id="about" className="relative py-20 overflow-hidden">
            <div className="section-container">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="pl-8 md:pl-16 lg:pl-0"
                >
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text font-display">
                            About Me
                        </h2>
                        <div className="w-20 h-1 bg-linear-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Image/Graphic */}
                        <motion.div variants={itemVariants} className="relative">
                            <div className="relative z-10 glass-effect rounded-2xl p-8 aspect-square flex items-center justify-center overflow-hidden">
                                <div className="text-center w-full h-full flex flex-col items-center justify-center">
                                    <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-linear-to-br from-primary-500 to-accent-500 p-1">
                                        <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                                            <img
                                                src={pic}
                                                alt="Muhammad Hamza Khan - Portfolio"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <p className="text-gray-400 text-sm">Building the future, one line at a time</p>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-linear-to-br from-primary-500/20 to-accent-500/20 blur-3xl -z-10"></div>
                        </motion.div>

                        {/* Right Column - Content */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <p className="text-gray-300 text-lg leading-relaxed">
                                I'm a passionate <span className="gradient-text font-semibold">Software Engineer</span> and{' '}
                                <span className="gradient-text font-semibold">Frontend Developer</span> with a love for creating
                                exceptional digital experiences.
                            </p>

                            <p className="text-gray-400 leading-relaxed">
                                With expertise in modern web technologies like React, TypeScript, and Tailwind CSS,
                                I specialize in building responsive, accessible, and performant applications that
                                users love.
                            </p>

                            <p className="text-gray-400 leading-relaxed">
                                When I'm not coding, you'll find me exploring new technologies, contributing to
                                open-source projects, or sharing knowledge with the developer community.
                            </p>

                            <div className="grid grid-cols-2 gap-6 pt-6">
                                <div className="card text-center">
                                    <div className="text-3xl font-bold gradient-text mb-2">1+</div>
                                    <div className="text-gray-400 text-sm">Years Experience</div>
                                </div>
                                <div className="card text-center">
                                    <div className="text-3xl font-bold gradient-text mb-2">8+</div>
                                    <div className="text-gray-400 text-sm">Projects Completed</div>
                                </div>
                                <div className="card text-center">
                                    <div className="text-3xl font-bold gradient-text mb-2">10+</div>
                                    <div className="text-gray-400 text-sm">Happy Clients</div>
                                </div>
                                <div className="card text-center">
                                    <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
                                    <div className="text-gray-400 text-sm">Support Available</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

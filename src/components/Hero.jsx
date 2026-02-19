import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };

    const socialLinks = [
        { icon: FaGithub, href: 'https://github.com/Engr-Hamza-Khan-dev', label: 'GitHub' },
        { icon: FaLinkedin, href: 'https://www.linkedin.com/in/engrhamzakhandev/', label: 'LinkedIn' },
        { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
    ];

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -90, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"
                />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 section-container text-center"
            >
                <motion.div variants={itemVariants} className="mb-6">
                    <span className="text-primary-400 text-lg font-medium">Hi, I'm</span>
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 font-display"
                >
                    <span className="gradient-text">Muhammad Hamza Khan</span>
                </motion.h1>

                <motion.h2
                    variants={itemVariants}
                    className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-8 text-gray-300"
                >
                    Software Engineer & Frontend Developer
                </motion.h2>

                <motion.p
                    variants={itemVariants}
                    className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-12"
                >
                    I craft beautiful, responsive web applications with modern technologies.
                    Passionate about creating seamless user experiences and writing clean code.
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center mb-12">
                    <a href="#contact" className="btn-primary">
                        Get In Touch
                    </a>
                    <a href="#projects" className="btn-secondary">
                        View My Work
                    </a>
                </motion.div>

                {/* Social Links */}
                <motion.div variants={itemVariants} className="flex gap-6 justify-center">
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, y: -5 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                            aria-label={social.label}
                        >
                            <social.icon size={28} />
                        </motion.a>
                    ))}
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{
                        y: [0, 10, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="absolute bottom-4 md:bottom-10 left-1/2 transform -translate-x-1/2"
                >
                    <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-primary-400 rounded-full mt-2 animate-bounce"></div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;

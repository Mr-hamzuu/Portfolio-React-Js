import { motion } from 'framer-motion';
import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: FaGithub, href: 'https://github.com/Mr-hamzuu', label: 'GitHub' },
        { icon: FaLinkedin, href: 'https://www.linkedin.com/in/hamzuu6971/', label: 'LinkedIn' },
        { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
        { icon: FaEnvelope, href: 'mailto:engr.hamza.khan.dev@gmail.com', label: 'Email' },
    ];

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <footer className="relative bg-gray-950 border-t border-white/10">
            <div className="section-container py-12">
                <div className="grid md:grid-cols-3 gap-12 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold gradient-text font-display mb-4">{'<Hamza />'}</h3>
                        <p className="text-gray-400 mb-4">
                            Building beautiful and functional web experiences, one component at a time.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, y: -3 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-3 glass-effect rounded-lg text-gray-400 hover:text-primary-400 transition-colors"
                                    aria-label={social.label}
                                >
                                    <social.icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-primary-400 transition-colors inline-block hover:translate-x-1 duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter/Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Stay Connected</h4>
                        <p className="text-gray-400 mb-4">
                            Follow me on social media for updates on new projects and tech insights.
                        </p>
                        <a
                            href="#contact"
                            className="inline-block px-6 py-3 bg-linear-to-r from-primary-500 to-accent-500 
                       text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm text-center md:text-left">
                        © {currentYear} Muhammad Hamza Khan. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

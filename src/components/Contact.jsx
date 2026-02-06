import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch('https://formspree.io/f/xeozwvbe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

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

    const contactInfo = [
        {
            icon: FaEnvelope,
            title: 'Email',
            value: 'hamzuu6971@gmail.com',
            link: 'mailto:hamzuu6971@gmail.com',
        },
        {
            icon: FaMapMarkerAlt,
            title: 'Location',
            value: 'Rawalpindi, Pakistan',
            link: null,
        },
    ];

    return (
        <section id="contact" className="relative py-20 overflow-hidden bg-grid">
            <div className="section-container">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text font-display">
                            Get In Touch
                        </h2>
                        <div className="w-20 h-1 bg-linear-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
                        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                            Have a project in mind or just want to say hi? Feel free to reach out!
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <motion.div variants={itemVariants} className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-semibold mb-6">Let's talk about everything!</h3>
                                <p className="text-gray-400 leading-relaxed mb-8">
                                    Don't like forms? Send me an email directly or connect with me on social media.
                                    I'm always excited to discuss new opportunities and ideas.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={info.title}
                                        variants={itemVariants}
                                        className="card flex items-center gap-4"
                                    >
                                        <div className="p-4 bg-linear-to-br from-primary-500 to-accent-500 rounded-lg">
                                            <info.icon size={24} className="text-white" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400">{info.title}</p>
                                            {info.link ? (
                                                <a
                                                    href={info.link}
                                                    className="text-white hover:text-primary-400 transition-colors"
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="text-white">{info.value}</p>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div variants={itemVariants}>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none 
                             focus:border-primary-500 transition-colors text-white placeholder-gray-500"
                                        placeholder="Your Name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none 
                             focus:border-primary-500 transition-colors text-white placeholder-gray-500"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none 
                             focus:border-primary-500 transition-colors text-white placeholder-gray-500"
                                        placeholder="How can I help?"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none 
                             focus:border-primary-500 transition-colors text-white placeholder-gray-500 resize-none"
                                        placeholder="Your message..."
                                    ></textarea>
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    whileHover={{ scale: status === 'submitting' ? 1 : 1.05 }}
                                    whileTap={{ scale: status === 'submitting' ? 1 : 0.95 }}
                                    className={`w-full btn-primary flex items-center justify-center gap-2 ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''
                                        }`}
                                >
                                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                                    <FaPaperPlane size={16} className={status === 'submitting' ? 'animate-pulse' : ''} />
                                </motion.button>
                            </form>

                            {status === 'success' && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-green-400 mt-4 text-center font-medium"
                                >
                                    Message sent successfully! I'll get back to you soon.
                                </motion.p>
                            )}
                            {status === 'error' && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-red-400 mt-4 text-center font-medium"
                                >
                                    Oops! Something went wrong. Please try again later.
                                </motion.p>
                            )}

                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;

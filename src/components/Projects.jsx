import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import image from "../assets/image.png"
const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce solution with user authentication, product management, and payment integration.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            image: image,
            github: 'https://github.com/Mr-hamzuu',
            demo: 'https://restaurant-rust-mu.vercel.app/',
            gradient: 'from-blue-500 to-purple-500',
        },
        {
            title: 'Task Management App',
            description: 'Collaborative task management tool with real-time updates and team features.',
            technologies: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind'],
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
            github: 'https://github.com/Mr-hamzuu',
            demo: 'https://demo.com',
            gradient: 'from-green-500 to-teal-500',
        },
        {
            title: 'Weather Dashboard',
            description: 'Beautiful weather application with forecasts, maps, and location-based features.',
            technologies: ['React', 'OpenWeather API', 'Chart.js', 'CSS3'],
            image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
            github: 'https://github.com/Mr-hamzuu',
            demo: 'https://demo.com',
            gradient: 'from-orange-500 to-pink-500',
        },
        {
            title: 'Portfolio CMS',
            description: 'Content management system for developers to showcase their work with custom themes.',
            technologies: ['Vue.js', 'Express', 'PostgreSQL', 'AWS'],
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
            github: 'https://github.com/Mr-hamzuu',
            demo: 'https://demo.com',
            gradient: 'from-indigo-500 to-purple-500',
        },
        {
            title: 'Social Media Analytics',
            description: 'Analytics dashboard for tracking social media metrics and engagement across platforms.',
            technologies: ['React', 'D3.js', 'Node.js', 'Redis'],
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
            github: 'https://github.com/Mr-hamzuu',
            demo: 'https://demo.com',
            gradient: 'from-cyan-500 to-blue-500',
        },
        {
            title: 'Fitness Tracker',
            description: 'Mobile-first fitness tracking app with workout plans, progress charts, and goal setting.',
            technologies: ['React Native', 'Firebase', 'Redux', 'Charts'],
            image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
            github: 'https://github.com/Mr-hamzuu',
            demo: 'https://demo.com',
            gradient: 'from-red-500 to-orange-500',
        },
    ];

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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section id="projects" className="relative py-20 overflow-hidden">
            <div className="section-container">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="pl-8 md:pl-20 lg:pl-0"
                >
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text font-display">
                            Featured Projects
                        </h2>
                        <div className="w-20 h-1 bg-linear-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
                        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                            A collection of projects that showcase my skills and passion for development
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                                className="group relative glass-effect rounded-xl overflow-hidden"
                            >
                                {/* Project Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <div className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-80`}></div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />

                                    {/* Overlay Links */}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                                            aria-label={`${project.title} GitHub`}
                                        >
                                            <FaGithub size={24} />
                                        </a>
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                                            aria-label={`${project.title} Demo`}
                                        >
                                            <FaExternalLinkAlt size={20} />
                                        </a>
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-gray-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
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

export default Projects;

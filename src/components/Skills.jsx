import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaGitAlt,
    FaPython,
    FaDatabase,
} from 'react-icons/fa';
import {
    SiJavascript,
    SiTypescript,
    SiTailwindcss,
    SiMongodb,
    SiFirebase,
    SiRedux,
    SiExpress,
    SiCplusplus,
} from 'react-icons/si';
const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const skillCategories = [
        {
            title: 'Frontend',
            skills: [
                { name: 'React', icon: FaReact, color: '#61DAFB' },
                { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
                { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
                { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
                { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
                { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
                { name: 'Redux', icon: SiRedux, color: '#764ABC' },
            ],
        },
        {
            title: 'Backend',
            skills: [
                { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
                // { name: 'Express', icon: SiExpress, color: '#000000' },
                { name: 'Python', icon: FaPython, color: '#3776AB' },
                { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
                { name: 'SQL', icon: FaDatabase, color: '#4479A1' },
                { name: 'C++', icon: SiCplusplus, color: '#00599C' },
            ],
        },
        {
            title: 'Tools & Others',
            skills: [
                { name: 'Git', icon: FaGitAlt, color: '#F05032' },
            ],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section id="skills" className="relative py-20 overflow-hidden bg-grid">
            <div className="section-container">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text font-display">
                            Skills & Expertise
                        </h2>
                        <div className="w-20 h-1 bg-linear-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
                        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                            Technologies and tools I use to bring ideas to life
                        </p>
                    </motion.div>

                    <div className="space-y-12">
                        {skillCategories.map((category, categoryIndex) => (
                            <motion.div
                                key={category.title}
                                variants={itemVariants}
                                className="space-y-6"
                            >
                                <h3 className="text-2xl font-semibold text-center md:text-left text-primary-400">
                                    {category.title}
                                </h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                                    {category.skills.map((skill, index) => (
                                        <motion.div
                                            key={skill.name}
                                            variants={itemVariants}
                                            whileHover={{ scale: 1.1, y: -5 }}
                                            className="card flex flex-col items-center justify-center p-6 space-y-3 group cursor-pointer"
                                        >
                                            <skill.icon
                                                size={48}
                                                className="transition-all duration-300 text-gray-400 group-hover:text-white"
                                                style={{ color: skill.color }}
                                            />
                                            <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                                                {skill.name}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;

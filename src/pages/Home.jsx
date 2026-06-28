import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhone, FaDownload } from 'react-icons/fa';
import CountUp from 'react-countup';
import { personalData, stats, projects } from '../data/data.js';

const Home = () => {
  return (
    <div className="section-padding min-h-screen pt-20 md:pt-28">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center order-2 lg:order-1"
          >
            <p className="text-lg font-medium text-primary-500 dark:text-primary-400">Hello, I'm</p>
            <h1 className="mt-2 text-4xl font-bold text-dark-900 dark:text-white md:text-5xl lg:text-6xl">
              {personalData.name}
            </h1>
            
            <div className="mt-3 text-xl text-dark-600 dark:text-dark-300 md:text-2xl">
              <TypeAnimation
                sequence={[
                  'Software Engineer', 2000,
                  'Backend Developer', 2000,
                  'Python Developer', 2000,
                  'Full-Stack Developer', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="gradient-text"
              />
            </div>

            <p className="mt-4 text-base text-dark-500 dark:text-dark-400 md:text-lg">
              {personalData.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a href="/resume/resume-sahil-ghag.pdf" download className="btn-primary">
                <FaDownload /> Download Resume
              </a>
              <a href="/contact" className="btn-secondary">
                Contact Me
              </a>
            </div>

            <div className="mt-6 flex gap-4">
              <a href={personalData.github} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-dark-100 p-3 text-dark-600 transition-all hover:bg-primary-500 hover:text-white dark:bg-dark-800 dark:text-dark-300 dark:hover:bg-primary-600">
                <FaGithub size={20} />
              </a>
              <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-dark-100 p-3 text-dark-600 transition-all hover:bg-primary-500 hover:text-white dark:bg-dark-800 dark:text-dark-300 dark:hover:bg-primary-600">
                <FaLinkedinIn size={20} />
              </a>
              <a href={`mailto:${personalData.email}`} className="rounded-lg bg-dark-100 p-3 text-dark-600 transition-all hover:bg-primary-500 hover:text-white dark:bg-dark-800 dark:text-dark-300 dark:hover:bg-primary-600">
                <FaEnvelope size={20} />
              </a>
              <a href={`tel:${personalData.phone}`} className="rounded-lg bg-dark-100 p-3 text-dark-600 transition-all hover:bg-primary-500 hover:text-white dark:bg-dark-800 dark:text-dark-300 dark:hover:bg-primary-600">
                <FaPhone size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right - Profile Photo & Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center justify-center order-1 lg:order-2"
          >
            <div className="relative mb-8">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary-500 shadow-2xl shadow-primary-500/30">
                <img 
                  src="/images/profile.jpg" 
                  alt="Sahil Ghag" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
              {stats.map((stat) => (
                <div key={stat.id} className="glass-card rounded-2xl p-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400">
                    <CountUp end={stat.value} duration={2.5} />
                    {stat.suffix}
                  </div>
                  <p className="mt-1 text-xs md:text-sm text-dark-500 dark:text-dark-400">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 w-full max-w-md">
              <h3 className="mb-4 text-lg font-semibold text-dark-900 dark:text-white">Featured Projects</h3>
              <div className="space-y-3">
                {projects.slice(0, 2).map((project) => (
                  <a key={project.id} href={`/projects`} className="block glass-card rounded-xl p-4 transition-all hover:scale-105 hover:shadow-xl">
                    <h4 className="font-semibold text-dark-900 dark:text-white">{project.title}</h4>
                    <p className="mt-1 text-sm text-dark-500 dark:text-dark-400">{project.description.substring(0, 100)}...</p>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
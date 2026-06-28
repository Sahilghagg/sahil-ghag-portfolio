import React from 'react';
import { motion } from 'framer-motion';
import { personalData, experiences, education, achievements } from '../data/data.js';

const About = () => {
  return (
    <div className="section-padding pt-20 md:pt-28">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-1 flex flex-col items-center"
          >
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary-500 shadow-2xl shadow-primary-500/30">
              <img 
                src="/images/profile.jpg" 
                alt="Sahil Ghag" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-2xl font-bold text-dark-900 dark:text-white">{personalData.name}</h3>
            <p className="text-primary-600 dark:text-primary-400">{personalData.role}</p>
            <p className="mt-2 text-sm text-dark-500 dark:text-dark-400">{personalData.location}</p>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2"
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-4">Who I Am</h3>
              <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                {personalData.bio}
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Experience */}
              <div className="glass-card rounded-2xl p-6">
                <h4 className="text-lg font-bold text-dark-900 dark:text-white mb-3">Experience</h4>
                {experiences.map((exp) => (
                  <div key={exp.id} className="mb-4 last:mb-0">
                    <h5 className="font-semibold text-dark-900 dark:text-white">{exp.title}</h5>
                    <p className="text-primary-600 dark:text-primary-400 text-sm">{exp.company}</p>
                    <p className="text-xs text-dark-500 dark:text-dark-400">{exp.startDate} - {exp.endDate}</p>
                  </div>
                ))}
              </div>

              {/* Achievements */}
              <div className="glass-card rounded-2xl p-6">
                <h4 className="text-lg font-bold text-dark-900 dark:text-white mb-3">Achievements</h4>
                <ul className="space-y-2">
                  {achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-dark-600 dark:text-dark-300">
                      <span className="text-primary-500">🏆</span>
                      <span className="text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
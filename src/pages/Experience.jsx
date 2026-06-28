import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/data.js';

const Experience = () => {
  return (
    <div className="section-padding pt-20 md:pt-28">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">My professional journey</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-primary-300 dark:bg-primary-700 md:left-1/2"></div>

          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`relative mb-8 flex flex-col md:flex-row ${
                idx % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:flex-row-reverse'
              }`}
            >
              <div className="absolute left-4 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-primary-500 text-white shadow-lg shadow-primary-500/30 md:left-1/2">
                <span className="text-xs font-bold">{idx + 1}</span>
              </div>

              <div className={`glass-card rounded-2xl p-6 md:w-1/2 ${
                idx % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
              }`}>
                <h3 className="text-xl font-bold text-dark-900 dark:text-white">{exp.title}</h3>
                <p className="text-lg font-semibold text-primary-600 dark:text-primary-400">{exp.company}</p>
                <p className="text-sm text-dark-500 dark:text-dark-400">{exp.location}</p>
                <p className="text-sm text-dark-500 dark:text-dark-400">{exp.startDate} - {exp.endDate}</p>

                <ul className="mt-4 list-disc list-inside space-y-2 text-sm text-dark-600 dark:text-dark-300">
                  {exp.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="badge text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
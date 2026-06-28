import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/data.js';

const Education = () => {
  return (
    <div className="section-padding pt-20 md:pt-28">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">My academic background</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {education.map((edu) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-dark-900 dark:text-white">{edu.degree}</h3>
                  <p className="text-primary-600 dark:text-primary-400">{edu.institution}</p>
                </div>
                <span className="badge">{edu.startDate} - {edu.endDate}</span>
              </div>

              <div className="mt-4">
                <p className="text-lg font-semibold text-dark-900 dark:text-white">CGPA: {edu.cgpa}</p>
              </div>

              <div className="mt-4">
                <h4 className="mb-2 font-semibold text-dark-700 dark:text-dark-300">Relevant Coursework</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course, idx) => (
                    <span key={idx} className="badge">
                      {course}
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

export default Education;
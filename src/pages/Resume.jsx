import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaFilePdf } from 'react-icons/fa';

const Resume = () => {
  return (
    <div className="section-padding pt-20 md:pt-28">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="section-title">Resume</h2>
          <p className="section-subtitle">Download my professional resume</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-12 max-w-2xl"
        >
          <div className="glass-card rounded-2xl p-12 text-center">
            <FaFilePdf className="mx-auto text-6xl text-primary-500 dark:text-primary-400" />
            <h3 className="mt-4 text-xl font-semibold text-dark-900 dark:text-white">Sahil Ghag - Resume.pdf</h3>
            <p className="mt-2 text-sm text-dark-500 dark:text-dark-400">
              Software Engineer | Backend Developer | Python Developer
            </p>

            <div className="mt-8 flex justify-center gap-4">
              <a href="/resume/resume-sahil-ghag.pdf" download className="btn-primary">
                <FaDownload /> Download Resume
              </a>
              <a href="/resume/resume-sahil-ghag.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                View Online
              </a>
            </div>

            <div className="mt-8 border-t border-dark-200/30 pt-8 dark:border-dark-700/30">
              <p className="text-xs text-dark-400 dark:text-dark-500">
                Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
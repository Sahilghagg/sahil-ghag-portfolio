import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhone, FaHeart } from 'react-icons/fa';
import { navLinks } from '../../data/data.js';

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-dark-200/30 bg-white/80 backdrop-blur-xl dark:border-dark-700/30 dark:bg-dark-900/80">
      <div className="container-custom mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" className="text-xl font-bold">
              <span className="gradient-text">Sahil</span>
              <span className="text-dark-600 dark:text-dark-400">.dev</span>
            </Link>
            <p className="mt-3 text-sm text-dark-500 dark:text-dark-400">
              Software Engineer &amp; Backend Developer building scalable, high-performance applications.
            </p>
            <div className="mt-4 flex gap-3">
              <a href="https://github.com/Sahilghagg" target="_blank" rel="noopener noreferrer" className="rounded-lg p-2 text-dark-400 transition-colors hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-900/30 dark:hover:text-primary-400">
                <FaGithub size={18} />
              </a>
              <a href="https://www.linkedin.com/in/sahil-ghag-a14609341/" target="_blank" rel="noopener noreferrer" className="rounded-lg p-2 text-dark-400 transition-colors hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-900/30 dark:hover:text-primary-400">
                <FaLinkedinIn size={18} />
              </a>
              <a href="mailto:ghagsahil21@gmail.com" className="rounded-lg p-2 text-dark-400 transition-colors hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-900/30 dark:hover:text-primary-400">
                <FaEnvelope size={18} />
              </a>
              <a href="tel:+917208678132" className="rounded-lg p-2 text-dark-400 transition-colors hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-900/30 dark:hover:text-primary-400">
                <FaPhone size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-dark-500 dark:text-dark-400">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-dark-500 transition-colors hover:text-primary-600 dark:text-dark-400 dark:hover:text-primary-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-dark-500 dark:text-dark-400">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:ghagsahil21@gmail.com" className="flex items-center gap-2 text-sm text-dark-500 transition-colors hover:text-primary-600 dark:text-dark-400 dark:hover:text-primary-400">
                  <FaEnvelope size={14} /> ghagsahil21@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+917208678132" className="flex items-center gap-2 text-sm text-dark-500 transition-colors hover:text-primary-600 dark:text-dark-400 dark:hover:text-primary-400">
                  <FaPhone size={14} /> +91 72086 78132
                </a>
              </li>
              <li>
                <a href="https://github.com/Sahilghagg" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-dark-500 transition-colors hover:text-primary-600 dark:text-dark-400 dark:hover:text-primary-400">
                  <FaGithub size={14} /> Sahilghagg
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/sahil-ghag-a14609341/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-dark-500 transition-colors hover:text-primary-600 dark:text-dark-400 dark:hover:text-primary-400">
                  <FaLinkedinIn size={14} /> sahil-ghag
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-dark-500 dark:text-dark-400">Stay Connected</h4>
            <p className="mb-3 text-sm text-dark-500 dark:text-dark-400">Follow me on GitHub and LinkedIn for updates.</p>
            <div className="flex gap-3">
              <a href="https://github.com/Sahilghagg" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">GitHub</a>
              <a href="https://www.linkedin.com/in/sahil-ghag-a14609341/" target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-dark-200/30 pt-6 text-sm text-dark-500 dark:border-dark-700/30 dark:text-dark-400 md:flex-row">
          <p className="flex items-center gap-1">
            &copy; {new Date().getFullYear()} Sahil Ghag. Built with <FaHeart className="text-red-500" size={14} /> using React &amp; Tailwind.
          </p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 rounded-lg bg-dark-100 px-4 py-2 transition-colors hover:bg-dark-200 dark:bg-dark-800 dark:hover:bg-dark-700">
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
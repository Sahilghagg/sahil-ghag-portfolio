import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext.jsx';
import { navLinks } from '../../data/data.js';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg dark:bg-dark-900/80' : 'bg-transparent'
    }`}>
      <div className="container-custom mx-auto flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="group flex items-center gap-2">
          <span className="text-xl font-bold md:text-2xl">
            <span className="gradient-text">Sahil</span>
            <span className="text-dark-600 dark:text-dark-400">.dev</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-primary-600 dark:hover:text-primary-400 ${
                location.pathname === link.path
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-dark-600 dark:text-dark-300'
              }`}
            >
              {link.label}
              {location.pathname === link.path && (
                <motion.span
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-primary-500"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="ml-2 rounded-lg p-2 text-dark-600 transition-colors hover:bg-dark-100 dark:text-dark-300 dark:hover:bg-dark-800"
          >
            {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="rounded-lg p-2 text-dark-600 transition-colors hover:bg-dark-100 dark:text-dark-300 dark:hover:bg-dark-800"
          >
            {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-dark-600 transition-colors hover:bg-dark-100 dark:text-dark-300 dark:hover:bg-dark-800"
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-white/95 backdrop-blur-xl dark:bg-dark-900/95 md:hidden"
          >
            <div className="container-custom flex flex-col space-y-1 pb-6 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`rounded-lg px-4 py-3 text-base font-medium transition-all duration-200 ${
                    location.pathname === link.path
                      ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400'
                      : 'text-dark-600 hover:bg-dark-50 dark:text-dark-300 dark:hover:bg-dark-800'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
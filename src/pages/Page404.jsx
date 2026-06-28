import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome } from 'react-icons/fa';

const Page404 = () => {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-8xl font-black text-primary-500 md:text-9xl">404</h1>
        <h2 className="mt-4 text-2xl font-bold text-dark-900 dark:text-white md:text-3xl">
          Page Not Found
        </h2>
        <p className="mt-2 text-dark-500 dark:text-dark-400">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-primary mt-6 inline-flex">
          <FaHome className="mr-2" /> Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default Page404;
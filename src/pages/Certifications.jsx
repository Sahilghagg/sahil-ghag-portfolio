import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaSearch, FaExternalLinkAlt } from 'react-icons/fa';
import { certifications } from '../data/data.js';

const Certifications = () => {
  const [search, setSearch] = useState('');
  const [filteredCerts, setFilteredCerts] = useState(certifications);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);
    const filtered = certifications.filter(cert =>
      cert.name.toLowerCase().includes(query) ||
      cert.issuer.toLowerCase().includes(query) ||
      cert.category?.toLowerCase().includes(query) ||
      cert.skills?.some(skill => skill.toLowerCase().includes(query))
    );
    setFilteredCerts(filtered);
  };

  // Group certifications by category
  const categories = {
    'Programming': certifications.filter(c => c.category === 'Programming'),
    'Networking & Security': certifications.filter(c => c.category === 'Networking & Security'),
    'Cloud & DevOps': certifications.filter(c => c.category === 'Cloud & DevOps'),
    'Linux & OS': certifications.filter(c => c.category === 'Linux & OS'),
    'Cybersecurity': certifications.filter(c => c.category === 'Cybersecurity'),
    'Other': certifications.filter(c => c.category === 'Other' || !c.category),
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Programming': 'from-blue-500 to-cyan-500',
      'Networking & Security': 'from-red-500 to-orange-500',
      'Cloud & DevOps': 'from-purple-500 to-pink-500',
      'Linux & OS': 'from-green-500 to-emerald-500',
      'Cybersecurity': 'from-indigo-500 to-blue-500',
      'Other': 'from-gray-500 to-slate-500',
    };
    return colors[category] || 'from-gray-500 to-slate-500';
  };

  return (
    <div className="section-padding pt-20 md:pt-28">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">Professional certifications and credentials</p>
        </motion.div>

        {/* Search */}
        <div className="relative mb-8 max-w-md">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-400" />
          <input
            type="text"
            placeholder="Search certifications..."
            value={search}
            onChange={handleSearch}
            className="w-full rounded-xl border border-dark-300 bg-white/50 py-3 pl-10 pr-4 outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-dark-700 dark:bg-dark-800/50 dark:text-white"
          />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCerts.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="glass-card rounded-2xl p-6 transition-all hover:scale-105 hover:shadow-xl group"
            >
              <div className="flex items-start gap-4">
                <div className={`rounded-full bg-gradient-to-r ${getCategoryColor(cert.category)} p-3 text-white shadow-lg`}>
                  <FaCertificate size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-dark-900 dark:text-white text-sm leading-tight">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-dark-500 dark:text-dark-400">
                    {cert.date}
                  </p>
                  {cert.credentialId && (
                    <p className="text-xs text-dark-400 dark:text-dark-500 mt-1">
                      ID: {cert.credentialId}
                    </p>
                  )}
                  {cert.skills && cert.skills.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {cert.skills.slice(0, 3).map((skill, i) => (
                        <span key={i} className="badge text-xs">
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 3 && (
                        <span className="badge text-xs">+{cert.skills.length - 3}</span>
                      )}
                    </div>
                  )}
                  {cert.category && (
                    <span className={`inline-block mt-2 text-xs px-2 py-0.5 rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300`}>
                      {cert.category}
                    </span>
                  )}
                </div>
              </div>
              {cert.url && cert.url !== '#' && (
                <div className="mt-3 flex justify-end">
                  <a 
                    href={cert.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-primary-500 hover:text-primary-600 flex items-center gap-1 transition-colors"
                  >
                    View Certificate <FaExternalLinkAlt size={10} />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {filteredCerts.length === 0 && (
          <div className="mt-12 text-center text-dark-500 dark:text-dark-400">
            No certifications found matching your search.
          </div>
        )}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          <div className="glass-card rounded-2xl p-4 text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400">
              {certifications.length}
            </div>
            <p className="text-sm text-dark-500 dark:text-dark-400">Total Certifications</p>
          </div>
          <div className="glass-card rounded-2xl p-4 text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400">
              {new Set(certifications.map(c => c.issuer)).size}
            </div>
            <p className="text-sm text-dark-500 dark:text-dark-400">Issuers</p>
          </div>
          <div className="glass-card rounded-2xl p-4 text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400">
              {new Set(certifications.map(c => c.category)).size}
            </div>
            <p className="text-sm text-dark-500 dark:text-dark-400">Categories</p>
          </div>
          <div className="glass-card rounded-2xl p-4 text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400">
              {certifications.filter(c => c.skills).reduce((acc, c) => acc + (c.skills?.length || 0), 0)}
            </div>
            <p className="text-sm text-dark-500 dark:text-dark-400">Skills Covered</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Certifications;
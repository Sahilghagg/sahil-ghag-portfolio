import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaFilter } from 'react-icons/fa';
import { skillCategories } from '../data/data.js';

const Skills = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...skillCategories.map(c => c.label)];

  // Filter skills based on search and category
  const getFilteredSkills = () => {
    return skillCategories.filter(cat => {
      const matchesCategory = selectedCategory === 'All' || cat.label === selectedCategory;
      const matchesSearch = search === '' || cat.skills.some(skill => 
        skill.toLowerCase().includes(search.toLowerCase())
      );
      return matchesCategory && matchesSearch;
    });
  };

  const filteredSkills = getFilteredSkills();

  return (
    <div className="section-padding pt-20 md:pt-28">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </motion.div>

        {/* Search and Filter */}
        <div className="flex flex-col gap-4 mb-8 md:flex-row md:items-center md:justify-between">
          <div className="relative flex-1 max-w-md">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-400" />
            <input
              type="text"
              placeholder="Search skills..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-dark-300 bg-white/50 py-3 pl-10 pr-4 outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-dark-700 dark:bg-dark-800/50 dark:text-white"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <FaFilter className="text-dark-400 self-center" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                    : 'bg-dark-100 text-dark-600 hover:bg-dark-200 dark:bg-dark-800 dark:text-dark-300 dark:hover:bg-dark-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredSkills.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <h3 className={`mb-4 text-lg font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.label}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span key={skillIdx} className="badge text-sm px-3 py-1.5">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="mt-12 text-center text-dark-500 dark:text-dark-400">
            No skills found matching your search.
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
              {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)}
            </div>
            <p className="text-sm text-dark-500 dark:text-dark-400">Total Skills</p>
          </div>
          <div className="glass-card rounded-2xl p-4 text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400">
              {skillCategories.length}
            </div>
            <p className="text-sm text-dark-500 dark:text-dark-400">Categories</p>
          </div>
          <div className="glass-card rounded-2xl p-4 text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400">
              {skillCategories.filter(cat => cat.skills.length > 5).length}
            </div>
            <p className="text-sm text-dark-500 dark:text-dark-400">Major Domains</p>
          </div>
          <div className="glass-card rounded-2xl p-4 text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400">
              {skillCategories.reduce((acc, cat) => {
                const techCount = cat.skills.filter(s => 
                  ['Python', 'JavaScript', 'React.js', 'Node.js', 'SQL', 'AWS'].includes(s)
                ).length;
                return acc + techCount;
              }, 0)}
            </div>
            <p className="text-sm text-dark-500 dark:text-dark-400">Core Technologies</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
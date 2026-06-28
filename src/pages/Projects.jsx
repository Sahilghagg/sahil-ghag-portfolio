import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaSearch, 
  FaFilter,
  FaCloud,
  FaCode,
  FaLock,
  FaBrain,
  FaMobile,
  FaPalette,
  FaDatabase,
  FaNetworkWired
} from 'react-icons/fa';
import { projects } from '../data/data.js';

const Projects = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Get unique categories
  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const getCategoryIcon = (category) => {
    const icons = {
      'Cloud & Backend': <FaCloud />,
      'Web Application': <FaCode />,
      'Security': <FaLock />,
      'Blockchain': <FaNetworkWired />,
      'AI & Machine Learning': <FaBrain />,
      'Mobile & Accessibility': <FaMobile />,
      'Productivity': <FaCode />,
      'Clone': <FaPalette />,
      'Data & Analytics': <FaDatabase />,
      'Other': <FaCode />
    };
    return icons[category] || <FaCode />;
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);
    filterProjects(query, selectedCategory);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    filterProjects(search, category);
  };

  const filterProjects = (query, category) => {
    const filtered = projects.filter(p => {
      const matchesSearch = p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.technologies.some(t => t.toLowerCase().includes(query));
      
      const matchesCategory = category === 'All' || p.category === category;
      
      return matchesSearch && matchesCategory;
    });
    setFilteredProjects(filtered);
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
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Showcasing my work and contributions</p>
        </motion.div>

        {/* Search and Filter */}
        <div className="flex flex-col gap-4 mb-8 md:flex-row md:items-center md:justify-between">
          <div className="relative flex-1 max-w-md">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={handleSearch}
              className="w-full rounded-xl border border-dark-300 bg-white/50 py-3 pl-10 pr-4 outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-dark-700 dark:bg-dark-800/50 dark:text-white"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <FaFilter className="text-dark-400 self-center" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                    : 'bg-dark-100 text-dark-600 hover:bg-dark-200 dark:bg-dark-800 dark:text-dark-300 dark:hover:bg-dark-700'
                }`}
              >
                {category !== 'All' && getCategoryIcon(category)}
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl overflow-hidden group hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                {/* Project Header */}
                <div className="h-48 bg-gradient-to-r from-primary-500 to-purple-600 flex items-center justify-center relative">
                  <span className="text-4xl text-white/50">{project.title.charAt(0)}</span>
                  {project.isPrivate && (
                    <span className="absolute top-2 right-2 bg-red-500/80 text-white text-xs px-2 py-1 rounded-full">
                      Private
                    </span>
                  )}
                  {project.category && (
                    <span className="absolute bottom-2 left-2 bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      {getCategoryIcon(project.category)}
                      {project.category}
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark-900 dark:text-white line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-dark-500 dark:text-dark-400 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="badge text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="badge text-xs">+{project.technologies.length - 4}</span>
                    )}
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-dark-600 transition-colors hover:text-primary-600 dark:text-dark-300 dark:hover:text-primary-400"
                      >
                        <FaGithub /> Code
                      </a>
                      {project.live && project.live !== '#' && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm text-dark-600 transition-colors hover:text-primary-600 dark:text-dark-300 dark:hover:text-primary-400"
                        >
                          <FaExternalLinkAlt /> Demo
                        </a>
                      )}
                    </div>
                    <span className="text-xs text-dark-400 dark:text-dark-500">
                      {project.startDate} - {project.endDate}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="mt-12 text-center text-dark-500 dark:text-dark-400">
            No projects found matching your search.
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
              {projects.length}
            </div>
            <p className="text-sm text-dark-500 dark:text-dark-400">Total Projects</p>
          </div>
          <div className="glass-card rounded-2xl p-4 text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400">
              {new Set(projects.map(p => p.category)).size}
            </div>
            <p className="text-sm text-dark-500 dark:text-dark-400">Categories</p>
          </div>
          <div className="glass-card rounded-2xl p-4 text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400">
              {projects.filter(p => !p.isPrivate).length}
            </div>
            <p className="text-sm text-dark-500 dark:text-dark-400">Public Repos</p>
          </div>
          <div className="glass-card rounded-2xl p-4 text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400">
              {projects.reduce((acc, p) => acc + p.technologies.length, 0)}
            </div>
            <p className="text-sm text-dark-500 dark:text-dark-400">Tech Stack Used</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
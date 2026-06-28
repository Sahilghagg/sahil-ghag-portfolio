import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { personalData } from '../data/data.js';

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'pass#Sahil2004',
        'template_6fwu1gl',
        formRef.current,
        'jAGKY7heIwaeTsxEl'
      );
      toast.success('Message sent successfully!');
      formRef.current.reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="section-padding pt-20 md:pt-28">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">Let's connect and work together</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card rounded-2xl p-6">
              <h3 className="mb-4 text-xl font-bold text-dark-900 dark:text-white">Get in Touch</h3>
              <p className="text-dark-500 dark:text-dark-400">
                I'm always open to new opportunities, collaborations, and interesting conversations.
              </p>
            </div>

            <div className="space-y-4">
              <div className="glass-card flex items-center gap-4 rounded-2xl p-4">
                <div className="rounded-full bg-primary-100 p-3 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-sm text-dark-500 dark:text-dark-400">Location</p>
                  <p className="font-medium text-dark-900 dark:text-white">{personalData.location}</p>
                </div>
              </div>

              <div className="glass-card flex items-center gap-4 rounded-2xl p-4">
                <div className="rounded-full bg-primary-100 p-3 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                  <FaPhone />
                </div>
                <div>
                  <p className="text-sm text-dark-500 dark:text-dark-400">Phone</p>
                  <a href={`tel:${personalData.phone}`} className="font-medium text-dark-900 hover:text-primary-600 dark:text-white dark:hover:text-primary-400">
                    {personalData.phone}
                  </a>
                </div>
              </div>

              <div className="glass-card flex items-center gap-4 rounded-2xl p-4">
                <div className="rounded-full bg-primary-100 p-3 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-sm text-dark-500 dark:text-dark-400">Email</p>
                  <a href={`mailto:${personalData.email}`} className="font-medium text-dark-900 hover:text-primary-600 dark:text-white dark:hover:text-primary-400">
                    {personalData.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h4 className="mb-3 font-semibold text-dark-900 dark:text-white">Connect with me</h4>
              <div className="flex gap-3">
                <a href={personalData.github} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-dark-100 p-3 text-dark-600 transition-all hover:bg-primary-500 hover:text-white dark:bg-dark-800 dark:text-dark-300 dark:hover:bg-primary-600">
                  <FaGithub size={20} />
                </a>
                <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-dark-100 p-3 text-dark-600 transition-all hover:bg-primary-500 hover:text-white dark:bg-dark-800 dark:text-dark-300 dark:hover:bg-primary-600">
                  <FaLinkedinIn size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card rounded-2xl p-8">
              <div className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-dark-700 dark:text-dark-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full rounded-xl border border-dark-300 bg-white/50 px-4 py-3 outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-dark-700 dark:bg-dark-800/50 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-dark-700 dark:text-dark-300">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full rounded-xl border border-dark-300 bg-white/50 px-4 py-3 outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-dark-700 dark:bg-dark-800/50 dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-dark-700 dark:text-dark-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="w-full rounded-xl border border-dark-300 bg-white/50 px-4 py-3 outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-dark-700 dark:bg-dark-800/50 dark:text-white"
                    placeholder="Project Collaboration"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-dark-700 dark:text-dark-300">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    className="w-full rounded-xl border border-dark-300 bg-white/50 px-4 py-3 outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-dark-700 dark:bg-dark-800/50 dark:text-white"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary justify-center"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
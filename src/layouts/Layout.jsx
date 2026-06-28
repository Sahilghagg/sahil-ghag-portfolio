import React from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '../context/ThemeContext.jsx';
import Navbar from '../components/layout/Navbar.jsx';
import Footer from '../components/layout/Footer.jsx';
import AnimatedCursor from '../components/common/AnimatedCursor.jsx';
import ParticlesBackground from '../components/common/ParticlesBackground.jsx';
import ScrollProgress from '../components/common/ScrollProgress.jsx';

const Layout = () => {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-x-hidden bg-white dark:bg-dark-950">
        <AnimatedCursor />
        <ParticlesBackground />
        <ScrollProgress />
        <Navbar />
        <main className="relative z-10">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
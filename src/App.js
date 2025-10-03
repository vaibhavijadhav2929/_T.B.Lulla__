import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import './components.css';
import './Gallery.css';
import Header from './Header';
import Footer from './Footer';
import HomePage from './pages/HomePage';
import About from './About';
import AboutDetailed from './AboutDetailed';
import PhotoGallery from './PhotoGallery';
import VideoGallery from './VideoGallery';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import VisionMissionPage from './pages/VisionMissionPage';
import GSTInfoPage from './pages/GSTInfoPage';
import ArticlesPage from './pages/ArticlesPage';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/vision-mission" element={<VisionMissionPage />} />
        <Route path="/gst-info" element={<GSTInfoPage />} />
        <Route path="/about-detailed" element={<AboutDetailed />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/photo-gallery" element={<PhotoGallery />} />
        <Route path="/video-gallery" element={<VideoGallery />} />
      </Routes>
      <Footer />
      
      {/* Scroll to Top Button - Integrated from ScrollToTop.js */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
            whileHover={{ 
              scale: 1.15, 
              boxShadow: '0 15px 40px rgba(22,163,74,0.5)',
              y: -5
            }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            style={{
              position: 'fixed',
              bottom: '30px',
              right: '30px',
              zIndex: 1000,
              background: 'linear-gradient(135deg, #16a34a 0%, #059669 100%)',
              color: 'white',
              border: '2px solid rgba(255,255,255,0.3)',
              borderRadius: '50%',
              width: '60px',
              height: '60px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 8px 25px rgba(22,163,74,0.4)',
              outline: 'none',
              padding: 0
            }}
            aria-label="Scroll to top"
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowUp size={26} strokeWidth={2.5} />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;

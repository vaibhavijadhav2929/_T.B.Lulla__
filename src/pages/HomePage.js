import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import FounderIntro from '../FounderIntro';
import Commitment from '../Commitment';
import Services from '../main.js/Services';
import Articles from '../Articles';
import PhotoGallery from '../PhotoGallery';
import VideoGallery from '../VideoGallery';

const HomePage = () => {
  // Hero states
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Complete GST Solutions - Filing, Returns & Compliance Made Easy";
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const services = [
    "GST Registration & Filing",
    "Tax Consultation Services", 
    "Business Compliance Solutions",
    "Financial Advisory Services",
    "Return Processing & Management"
  ];
  const [visibleWords, setVisibleWords] = useState(0);
  const descriptionWords = ["Expert", "GST", "and", "tax", "consultation", "services", "since", "1959."];
  const secondLineWords = ["We", "help", "businesses", "stay", "compliant", "and", "maximize", "their", "financial", "potential", "with", "our", "comprehensive", "solutions."];

  // Hero effects
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex(prev => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [services.length]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (visibleWords < descriptionWords.length + secondLineWords.length) {
        setVisibleWords(prev => prev + 1);
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [visibleWords, descriptionWords.length, secondLineWords.length]);

  return (
    <>
      {/* Hero Section */}
      <section id="hero" style={{ position: 'relative', background: 'linear-gradient(180deg, #d1fae5 0%, #a7f3d0 100%)', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', width: '100%' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem', paddingTop: '8rem', position: 'relative', zIndex: 1, width: '100%' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }} className="hero-content">
              <div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <div style={{
                  display: 'inline-block',
                  padding: '0.5rem 1.5rem',
                  background: 'linear-gradient(135deg, #047857 0%, #059669 100%)',
                  borderRadius: '50px',
                  marginBottom: '2rem',
                  boxShadow: '0 8px 20px rgba(4,120,87,0.3)',
                  border: '2px solid rgba(255,255,255,0.3)'
                }}>
                  <span style={{ 
                    color: 'white', 
                    fontSize: '0.85rem',
                    fontWeight: '700',
                    letterSpacing: '0.05em'
                  }}>
                    GST & Tax Consultation
                  </span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{
                  fontSize: '2.75rem',
                  fontWeight: '800',
                  background: 'linear-gradient(135deg, #064e3b 0%, #047857 50%, #10b981 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: '1.3',
                  marginBottom: '2rem',
                  position: 'relative',
                  minHeight: '120px'
                }}
              >
                <motion.span
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    background: 'linear-gradient(90deg, #064e3b 0%, #047857 25%, #10b981 50%, #047857 75%, #064e3b 100%)',
                    backgroundSize: '200% auto',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  {displayedText}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    style={{
                      borderRight: '3px solid #047857',
                      marginLeft: '2px'
                    }}
                  >
                    |
                  </motion.span>
                </motion.span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                style={{
                  fontSize: '1.4rem',
                  color: '#047857',
                  fontWeight: '600',
                  marginBottom: '1.5rem',
                  textAlign: 'center',
                  minHeight: '40px'
                }}
              >
                <span style={{ color: '#065f46', fontSize: '1.1rem' }}>Specializing in: </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentServiceIndex}
                    initial={{ opacity: 0, y: 20, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    exit={{ opacity: 0, y: -20, rotateX: 90 }}
                    transition={{ duration: 0.5 }}
                    style={{
                      display: 'inline-block',
                      background: 'linear-gradient(135deg, #047857 0%, #10b981 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontWeight: '700'
                    }}
                  >
                    {services[currentServiceIndex]}
                  </motion.span>
                </AnimatePresence>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                style={{
                  fontSize: '1.25rem',
                  color: '#065f46',
                  lineHeight: '1.8',
                  marginBottom: '3rem',
                  fontWeight: '500',
                  textAlign: 'center'
                }}
              >
                <div style={{ marginBottom: '0.5rem' }}>
                  {descriptionWords.map((word, index) => (
                    <motion.span
                      key={`first-${index}`}
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={visibleWords > index ? { 
                        opacity: 1, 
                        y: 0, 
                        scale: 1,
                        color: index === 1 || index === 3 ? '#047857' : '#065f46'
                      } : {}}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                      style={{
                        display: 'inline-block',
                        marginRight: '0.4rem',
                        fontWeight: index === 1 || index === 3 || index === 7 ? '700' : '500',
                        background: index === 7 ? 'linear-gradient(135deg, #047857 0%, #10b981 100%)' : 'none',
                        WebkitBackgroundClip: index === 7 ? 'text' : 'none',
                        WebkitTextFillColor: index === 7 ? 'transparent' : 'inherit',
                        backgroundClip: index === 7 ? 'text' : 'none'
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </div>

                <div>
                  {secondLineWords.map((word, index) => (
                    <motion.span
                      key={`second-${index}`}
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={visibleWords > (descriptionWords.length + index) ? { 
                        opacity: 1, 
                        y: 0, 
                        scale: 1,
                        color: ['businesses', 'compliant', 'financial', 'comprehensive', 'solutions.'].includes(word) ? '#047857' : '#065f46'
                      } : {}}
                      transition={{ 
                        duration: 0.5, 
                        delay: (descriptionWords.length + index) * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                      style={{
                        display: 'inline-block',
                        marginRight: '0.4rem',
                        fontWeight: ['businesses', 'compliant', 'financial', 'comprehensive', 'solutions.'].includes(word) ? '700' : '500',
                        background: word === 'solutions.' ? 'linear-gradient(135deg, #047857 0%, #10b981 100%)' : 'none',
                        WebkitBackgroundClip: word === 'solutions.' ? 'text' : 'none',
                        WebkitTextFillColor: word === 'solutions.' ? 'transparent' : 'inherit',
                        backgroundClip: word === 'solutions.' ? 'text' : 'none'
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </div>

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: visibleWords >= (descriptionWords.length + secondLineWords.length) ? '100%' : '0%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                  style={{
                    height: '3px',
                    background: 'linear-gradient(90deg, #047857 0%, #10b981 50%, #047857 100%)',
                    borderRadius: '2px',
                    margin: '1rem auto 0',
                    maxWidth: '200px'
                  }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 3.5 }}
                style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
              >
                <motion.a
                  href="/contact"
                  whileHover={{ 
                    scale: 1.08, 
                    boxShadow: '0 20px 40px rgba(4,120,87,0.4)',
                    y: -5
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      '0 10px 25px rgba(4,120,87,0.3)',
                      '0 15px 35px rgba(4,120,87,0.5)',
                      '0 10px 25px rgba(4,120,87,0.3)'
                    ]
                  }}
                  transition={{ 
                    boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                  style={{
                    background: 'linear-gradient(135deg, #047857 0%, #065f46 100%)',
                    color: 'white',
                    padding: '1.1rem 2.8rem',
                    borderRadius: '50px',
                    fontWeight: '700',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    fontSize: '1.05rem',
                    position: 'relative',
                    overflow: 'hidden',
                    border: '2px solid rgba(255,255,255,0.2)'
                  }}
                >
                  <span style={{ position: 'relative', zIndex: 1 }}>Get Started</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    style={{ position: 'relative', zIndex: 1 }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </motion.a>

                <motion.a
                  href="/services"
                  whileHover={{ 
                    scale: 1.08,
                    backgroundColor: '#064e3b',
                    color: 'white',
                    y: -5
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    border: '3px solid #064e3b',
                    color: '#064e3b',
                    padding: '1rem 2.5rem',
                    borderRadius: '50px',
                    fontWeight: '700',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    fontSize: '1.05rem',
                    transition: 'all 0.4s ease',
                    backgroundColor: 'white',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                    position: 'relative'
                  }}
                >
                  <span>How it works</span>
                  <motion.div
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <FounderIntro />
      <Commitment />


      <Services />
      <Articles />
      <PhotoGallery isPreview={true} />
      <VideoGallery isPreview={true} />
    </>
  );
};

export default HomePage;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${subscribeEmail}`);
    setSubscribeEmail('');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
      setSearchQuery('');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer style={{ 
      backgroundColor: '#0a0a0a', 
      color: 'white',
      borderRadius: '40px 40px 0 0',
      marginTop: '4rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated background gradient */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 50%, rgba(255,136,0,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(37,99,235,0.05) 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        style={{ 
          maxWidth: '1280px', 
          margin: '0 auto', 
          padding: '3rem 2rem 1.5rem',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Main Content Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '2fr 1fr 1fr 1.5fr', 
          gap: '3rem', 
          marginBottom: '3rem' 
        }} className="footer-main-grid">
          
          {/* Left Section - Logo & About */}
          <motion.div variants={itemVariants}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: '1.5rem' }}
            >
              <img 
                src="/TBLulla%20(1).jpg" 
                alt="T. B. Lulla & Company" 
                style={{ height: '50px', width: 'auto', objectFit: 'contain', marginBottom: '1rem' }} 
              />
              <p style={{ fontSize: '0.85rem', color: '#999' }}>T. B. Lulla & Company</p>
            </motion.div>

            <h3 style={{ 
              color: '#FCB53B', 
              fontSize: '1rem', 
              fontWeight: '600',
              marginBottom: '1rem' 
            }}>About Us</h3>
            <p style={{ 
              color: 'rgba(255,255,255,0.7)', 
              fontSize: '0.9rem', 
              lineHeight: '1.6',
              marginBottom: '1.5rem'
            }}>
              Smart, Simple, and Reliable GST Services.
            </p>

            <h3 style={{ 
              color: '#FCB53B', 
              fontSize: '1rem', 
              fontWeight: '600',
              marginBottom: '1rem' 
            }}>Contact Us</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <motion.a 
                href="tel:+919423872374"
                whileHover={{ x: 5 }}
                style={{ 
                  color: 'rgba(255,255,255,0.8)', 
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.9rem'
                }}
              >
                <Phone size={16} />
                +91 94238 72374, +91 94224 07979
              </motion.a>
              <motion.a 
                href="mailto:amitklulla@gmail.com"
                whileHover={{ x: 5 }}
                style={{ 
                  color: 'rgba(255,255,255,0.8)', 
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.9rem'
                }}
              >
                <Mail size={16} />
                amitklulla@gmail.com
              </motion.a>
            </div>
          </motion.div>

          {/* Information Links */}
          <motion.div variants={itemVariants}>
            <h3 style={{ 
              color: '#FCB53B', 
              fontSize: '1.1rem', 
              fontWeight: '600',
              marginBottom: '1.5rem' 
            }}>Information</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { name: 'About Us', to: '/about' },
                { name: 'Services', to: '/services' },
                { name: 'Articles', to: '/articles' },
                { name: 'Photo Gallery', to: '/photo-gallery' },
                { name: 'Events', to: '/' }
              ].map((link, index) => (
                <motion.li 
                  key={link.name}
                  style={{ marginBottom: '0.75rem' }}
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    to={link.to}
                    style={{ 
                      color: 'rgba(255,255,255,0.7)', 
                      textDecoration: 'none',
                      fontSize: '0.95rem',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#FCB53B'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Helpful Links */}
          <motion.div variants={itemVariants}>
            <h3 style={{ 
              color: '#FCB53B', 
              fontSize: '1.1rem', 
              fontWeight: '600',
              marginBottom: '1.5rem' 
            }}>Helpful Links</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { name: 'Services', to: '/services' },
                { name: 'Supports', to: '/contact' },
                { name: 'Terms & Condition', to: '/' },
                { name: 'Privacy Policy', to: '/' }
              ].map((link, index) => (
                <motion.li 
                  key={link.name}
                  style={{ marginBottom: '0.75rem' }}
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    to={link.to}
                    style={{ 
                      color: 'rgba(255,255,255,0.7)', 
                      textDecoration: 'none',
                      fontSize: '0.95rem',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#FCB53B'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Subscribe & Search Section */}
          <motion.div variants={itemVariants}>
            <h3 style={{ 
              color: 'rgba(255,255,255,0.9)', 
              fontSize: '1rem', 
              fontWeight: '600',
              marginBottom: '1rem' 
            }}>Subscribe More Info</h3>
            
            {/* Email Subscribe */}
            <motion.form 
              onSubmit={handleSubscribe}
              whileHover={{ scale: 1.02 }}
              style={{ 
                backgroundColor: 'rgba(255,255,255,0.08)',
                borderRadius: '30px',
                padding: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1.5rem',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <Mail size={18} color="#999" style={{ marginLeft: '0.5rem' }} />
              <input 
                type="email"
                value={subscribeEmail}
                onChange={(e) => setSubscribeEmail(e.target.value)}
                placeholder="Enter your Email"
                required
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: 'white',
                  fontSize: '0.9rem',
                  padding: '0.5rem'
                }}
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  backgroundColor: '#FCB53B',
                  border: 'none',
                  borderRadius: '25px',
                  padding: '0.6rem 1.5rem',
                  color: 'white',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: '0.85rem'
                }}
              >
                Subscribe
              </motion.button>
            </motion.form>

            {/* Search Box */}
            <motion.form 
              onSubmit={handleSearch}
              whileHover={{ scale: 1.02 }}
              style={{ 
                backgroundColor: 'white',
                borderRadius: '30px',
                padding: '0.75rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                border: '2px solid #FCB53B',
                position: 'relative'
              }}
            >
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#333',
                  fontSize: '0.95rem'
                }}
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  padding: 0
                }}
              >
                <Search size={24} color="#FCB53B" />
              </motion.button>
            </motion.form>

            {/* Social Media Icons Below Search */}
            <motion.div 
              style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', marginTop: '1.5rem' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {[
                { Icon: Facebook, color: '#1877f2', href: 'https://www.facebook.com/T-B-Lulla-Company-579412899405200/' },
                { Icon: Twitter, color: '#1da1f2', href: 'https://twitter.com' },
                { Icon: Instagram, color: '#e4405f', href: 'https://instagram.com' },
                { Icon: Linkedin, color: '#0077b5', href: 'https://linkedin.com' }
              ].map(({ Icon, color, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
                  whileHover={{ 
                    scale: 1.2, 
                    y: -5,
                    boxShadow: `0 10px 20px ${color}40`
                  }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    backgroundColor: color,
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    textDecoration: 'none',
                    boxShadow: `0 4px 10px ${color}30`,
                    transition: 'all 0.3s ease'
                  }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Divider with gradient */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ 
            height: '1px', 
            background: 'linear-gradient(90deg, transparent, rgba(252,181,59,0.5), transparent)',
            margin: '2rem 0' 
          }} 
        />

        {/* Bottom Section - Copyright & Designer */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          textAlign: 'center'
        }} className="footer-bottom">
          
          {/* Copyright */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{ 
              color: 'rgba(255,255,255,0.6)', 
              fontSize: '0.9rem'
            }}
          >
            {currentYear} © T. B. Lulla & Company. All Rights Reserved
          </motion.div>

          {/* Designed By */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            style={{ 
              color: 'rgba(255,255,255,0.5)', 
              fontSize: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            <span>Designed by</span>
            <motion.a
              href="https://infoyashonand.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              style={{
                color: '#FCB53B',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#FFA500'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#FCB53B'}
            >
              Infoyashonand Technology Pvt. Ltd. | Top IT Company in Sangli, Maharashtra
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
      
      <style>{`
        @media (max-width: 1024px) {
          .footer-main-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 640px) {
          .footer-main-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
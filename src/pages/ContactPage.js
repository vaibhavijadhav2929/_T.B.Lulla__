import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { AtSign, Phone, Mail, MapPin } from 'lucide-react';

const ContactPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    address: '',
    feedback: ''
  });

  useEffect(() => {
    document.title = 'Contact Us - T. B. Lulla & Company';
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your feedback! We will get back to you soon.');
    setFormData({ name: '', email: '', mobile: '', address: '', feedback: '' });
  };

  const contactIcons = [
    { Icon: AtSign, label: 'Email', delay: 0.1 },
    { Icon: Phone, label: 'Phone', delay: 0.2 },
    { Icon: Mail, label: 'Mail', delay: 0.3 },
    { Icon: MapPin, label: 'Location', delay: 0.4 }
  ];

  return (
    <main style={{ paddingTop: '8rem', paddingBottom: '4rem', backgroundColor: '#f9fafb' }}>
      <section ref={ref}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <h1 style={{ fontSize: '2.1rem', fontWeight: '700', color: '#1f2937', marginBottom: '0.5rem' }}>
              Contact Us
            </h1>
            <div style={{ width: '100px', height: '4px', backgroundColor: '#16a34a', margin: '0 auto 1rem auto' }}></div>
            <p style={{ fontSize: '1.1rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
              Get in touch with us for all your GST and tax consultation needs
            </p>
          </motion.div>

          <div className="contact-page-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
            
            {/* Left Side - Company Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '1.5rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                border: '1px solid #e5e7eb',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Animated green top border */}
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: '100%' } : { width: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #10b981, #16a34a, #22c55e)',
                }}
              />
              <motion.h2
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.3 }}
                style={{
                  fontSize: '1.75rem',
                  color: '#2563eb',
                  fontWeight: '700',
                  marginBottom: '1.5rem',
                  borderBottom: '2px dotted #cbd5e1',
                  paddingBottom: '0.5rem'
                }}
              >
                T. B. Lulla & Company
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
                style={{ marginBottom: '2rem', lineHeight: '1.8', color: '#374151' }}
              >
                <p style={{ marginBottom: '0.5rem' }}>30-A, Abhyankar Complex,</p>
                <p style={{ marginBottom: '0.5rem' }}>Amrai Road, Sangli - 416 416.</p>
                <p style={{ marginBottom: '0.5rem' }}>Maharashtra, India</p>
                <p style={{ marginBottom: '0.5rem', marginTop: '1rem' }}><strong>Phone No. :</strong> (0233) 2375374</p>
                <p style={{ marginBottom: '0.5rem' }}>
                  <strong>Mobile No. :</strong> +919423872374, +919422407979
                </p>
                <p style={{ marginBottom: '0.5rem' }}>
                  <strong>E-Mail ID :</strong> amitkulla@gmail.com
                </p>
                <p>lullakishor@gmail.com</p>
              </motion.div>

              {/* Embedded Map */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5 }}
                style={{
                  borderRadius: '0.5rem',
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  position: 'relative'
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.234!2d74.5678!3d16.8524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDUxJzA4LjYiTiA3NMKwMzQnMDQuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="T.B. Lulla & Company Location"
                ></iframe>
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: 'rgba(0,0,0,0.6)',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.9rem',
                  pointerEvents: 'none'
                }}>
                  Use ctrl + scroll to zoom the map
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Feedback Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                backgroundColor: 'white',
                padding: '2.5rem',
                borderRadius: '1.5rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                border: '1px solid #e5e7eb',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Animated green top border */}
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: '100%' } : { width: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #10b981, #16a34a, #22c55e)',
                }}
              />

              {/* Contact Icons at Top */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                style={{ 
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '1.5rem',
                  marginBottom: '2rem',
                  paddingTop: '1rem'
                }}
              >
                {contactIcons.map(({ Icon, label, delay }, index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0, y: -50 }}
                    animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0, y: -50 }}
                    transition={{ 
                      delay: 0.5 + index * 0.1, 
                      type: 'spring', 
                      stiffness: 300,
                      damping: 15
                    }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 10,
                      y: -5,
                      transition: { type: 'spring', stiffness: 300, damping: 10 }
                    }}
                    style={{
                      backgroundColor: '#16a34a',
                      borderRadius: '50%',
                      width: '55px',
                      height: '55px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      boxShadow: '0 8px 16px rgba(22,163,74,0.3)',
                      transition: 'box-shadow 0.3s ease',
                      position: 'relative'
                    }}
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                        ease: "easeInOut"
                      }}
                    >
                      <Icon size={24} color="white" strokeWidth={2.5} />
                    </motion.div>
                    
                    {/* Pulse effect */}
                    <motion.div
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                        ease: "easeInOut"
                      }}
                      style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        backgroundColor: '#16a34a',
                        zIndex: -1
                      }}
                    />
                  </motion.div>
                ))}
              </motion.div>

              <motion.h3
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.6 }}
                style={{
                  fontSize: '1.75rem',
                  color: '#16a34a',
                  fontWeight: '700',
                  marginBottom: '1.5rem',
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, #10b981, #16a34a)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Send Feedback/Query
              </motion.h3>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ delay: 0.7 }}
                >
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem', 
                    color: '#16a34a', 
                    fontWeight: '600',
                    fontSize: '0.95rem'
                  }}>
                    Your Name :
                  </label>
                  <motion.input
                    whileFocus={{ 
                      scale: 1.01, 
                      boxShadow: '0 0 0 4px rgba(22,163,74,0.15)',
                      borderColor: '#16a34a'
                    }}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.875rem 1rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '0.75rem',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      backgroundColor: '#f9fafb'
                    }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ delay: 0.8 }}
                >
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem', 
                    color: '#16a34a', 
                    fontWeight: '600',
                    fontSize: '0.95rem'
                  }}>
                    E-Mail ID :
                  </label>
                  <motion.input
                    whileFocus={{ 
                      scale: 1.01, 
                      boxShadow: '0 0 0 4px rgba(22,163,74,0.15)',
                      borderColor: '#16a34a'
                    }}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.875rem 1rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '0.75rem',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      backgroundColor: '#f9fafb'
                    }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ delay: 0.9 }}
                >
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem', 
                    color: '#16a34a', 
                    fontWeight: '600',
                    fontSize: '0.95rem'
                  }}>
                    Mobile No. :
                  </label>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <div style={{
                      padding: '0.875rem 1rem',
                      backgroundColor: '#16a34a',
                      borderRadius: '0.75rem',
                      border: '2px solid #16a34a',
                      fontWeight: '600',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      +91
                    </div>
                    <motion.input
                      whileFocus={{ 
                        scale: 1.01, 
                        boxShadow: '0 0 0 4px rgba(22,163,74,0.15)',
                        borderColor: '#16a34a'
                      }}
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      style={{
                        flex: 1,
                        padding: '0.875rem 1rem',
                        border: '2px solid #e5e7eb',
                        borderRadius: '0.75rem',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease',
                        backgroundColor: '#f9fafb'
                      }}
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ delay: 1.0 }}
                >
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem', 
                    color: '#16a34a', 
                    fontWeight: '600',
                    fontSize: '0.95rem'
                  }}>
                    Address :
                  </label>
                  <motion.input
                    whileFocus={{ 
                      scale: 1.01, 
                      boxShadow: '0 0 0 4px rgba(22,163,74,0.15)',
                      borderColor: '#16a34a'
                    }}
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.875rem 1rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '0.75rem',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      backgroundColor: '#f9fafb'
                    }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ delay: 1.1 }}
                >
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem', 
                    color: '#16a34a', 
                    fontWeight: '600',
                    fontSize: '0.95rem'
                  }}>
                    Feedback/Query :
                  </label>
                  <motion.textarea
                    whileFocus={{ 
                      scale: 1.01, 
                      boxShadow: '0 0 0 4px rgba(22,163,74,0.15)',
                      borderColor: '#16a34a'
                    }}
                    name="feedback"
                    value={formData.feedback}
                    onChange={handleChange}
                    required
                    rows={4}
                    style={{
                      width: '100%',
                      padding: '0.875rem 1rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '0.75rem',
                      fontSize: '1rem',
                      resize: 'vertical',
                      transition: 'all 0.3s ease',
                      backgroundColor: '#f9fafb'
                    }}
                  />
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1.2 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    transition: { type: 'spring', stiffness: 400, damping: 17 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="submit-button-gradient"
                  style={{
                    background: 'linear-gradient(135deg, #10b981, #16a34a)',
                    color: 'white',
                    padding: '1rem 2.5rem',
                    borderRadius: '0.75rem',
                    border: 'none',
                    fontSize: '1rem',
                    fontWeight: '700',
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    boxShadow: '0 8px 20px rgba(22,163,74,0.3)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'box-shadow 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(22,163,74,0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(22,163,74,0.3)';
                  }}
                >
                  SEND FEEDBACK/QUERY
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;



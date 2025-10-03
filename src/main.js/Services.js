import React, { useRef } from 'react';
import { Calculator, FileText, BookOpen, ArrowRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: 'GST related services',
      description: 'Complete GST solutions in one place.',
      features: [' Filling of returns', ' Legal opinion', 'Appeals']
    },
    {
      icon: FileText,
      title: ' Income Tax',
      description: 'Expert CA & CS services for Income Tax and Company Act',
      features: ['Tax Services', 'CA Support']
    },
    {
      icon: BookOpen,
      title: 'Retainership',
      description: 'We provide yearly consultancy and daily updates on amendments on a retainership basis.',
      features: ['Annual Consultancy', 'Retainership Updates']
    }
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="services" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our Services</h2>
          <motion.div 
            className="section-divider"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tax and accounting services tailored to meet your business needs
          </p>
        </motion.div>

        <div className="services-grid-container">
          <div className="services-grid">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.03,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                className="service-card"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-green-400 via-blue-400 to-purple-400 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                />
                
                <div className="service-content">
                  <motion.div 
                    className="service-icon-wrapper"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="w-8 h-8 text-green-600" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
                
                <div className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div 
                      key={featureIndex} 
                      className="service-feature"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.1 + featureIndex * 0.1 + 0.3 }}
                    >
                      <motion.div 
                        className="service-feature-dot"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: featureIndex * 0.2 }}
                      ></motion.div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

        <motion.div 
          className="services-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
        >
          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(22, 163, 74, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                padding: '0.75rem 2rem', 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                backgroundColor: '#16a34a',
                color: 'white',
                border: 'none',
                borderRadius: '9999px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Learn More
              <ArrowRight size={20} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const ServicesPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    address: '',
    enquiry: ''
  });

  const serviceDetails = {
    gst: {
      title: 'A) GST related services',
      items: [
        {
          subtitle: '1. Filling of returns :-',
          description: 'We have expert senior team of staff who file correct and complete all GST returns within 24 hours after receipt of your mail. These returns include monthly, quarterly and annual returns.'
        },
        {
          subtitle: '2. Appearing for scrutiny, assessment, audit',
          description: 'GSTP Amit Lulla along with Adv. Kishor Lulla appear regularly and promptly to represent your case before the GST authorities. Our focus area is Sangli, Kolhapur and Satara district.'
        },
        {
          subtitle: '3. Appeals :-',
          description: 'We represent our clients before 1st and 2nd Appellate authorities at Kolhapur and Pune. Deep study of GST law by our TEAM fetch good results.'
        },
        {
          subtitle: '4. Legal opinion :-',
          description: 'We give our legal opinion on any quarry raised by you in connection with GST law. Normally we mail our opinion maximum within 3 days.'
        },
        {
          subtitle: '5. Internal Audit :-',
          description: 'Our expert team conducts internal audit of your activities related to taxation which benefits your firm in avoiding levy of heavy tax dues, interest and penalty.'
        }
      ]
    },
    professional: {
      title: 'B) Professional tax related services',
      description: 'We have separate expert clerk who takes care exclusively issues and day to day work for The Maharashtra Professional Tax.'
    },
    income: {
      title: 'C) Income Tax',
      description: 'The Chartered Accountant as well as Company Secretary in our office provide all types of services related to Income Tax act and Company Act.'
    },
    accounting: {
      title: 'D) Accounting',
      description: 'A separate wing do write books of accounts in Tally for you.'
    },
    retainership: {
      title: 'E) Retainership',
      description: 'If your office is already doing day to day work related to above mentioned services, we can provide you "consultancy" on yearly basis and informing you day to day amendments on retainership basis.'
    },
    package: {
      title: 'F) Package',
      description: 'If required we offer you one consolidated yearly package for all the services mentioned above which reduces your cost.'
    },
    csr: {
      title: 'G) CSR activity',
      description: 'As a social responsibility we voluntarily do charitable activities through our own T. B. Lulla Charitable Foundation Sangli.'
    }
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    document.title = 'Our Services - T. B. Lulla & Company';
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main style={{ paddingTop: '5rem', paddingBottom: '3rem', background: 'linear-gradient(180deg, #f0fdf4 0%, #f9fafb 100%)', position: 'relative', overflow: 'hidden' }}>
      {/* Animated Background Elements */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ 
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          position: 'absolute',
          top: '5%',
          right: '0',
          width: '300px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(22,163,74,0.1) 0%, rgba(22,163,74,0) 70%)',
          pointerEvents: 'none',
          filter: 'blur(60px)'
        }}
      />
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, rgba(59,130,246,0) 70%)',
          pointerEvents: 'none',
          filter: 'blur(70px)'
        }}
      />
      
      <section id="services" ref={ref} style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
              style={{
                display: 'inline-block',
                padding: '0.5rem 1.5rem',
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                borderRadius: '50px',
                marginBottom: '1.5rem',
                boxShadow: '0 8px 20px rgba(16,185,129,0.3)',
                border: '2px solid rgba(255,255,255,0.3)'
              }}
            >
              <span style={{ color: 'white', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '0.05em' }}>
                PROFESSIONAL SERVICES
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ 
                fontSize: '2.2rem', 
                fontWeight: '900', 
                background: 'linear-gradient(135deg, #064e3b 0%, #16a34a 50%, #10b981 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '1rem',
                lineHeight: '1.2'
              }}
            >
              Our Services Under One Roof
            </motion.h1>
            <motion.div 
              initial={{ width: 0 }}
              animate={isInView ? { width: '120px' } : { width: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ 
                height: '5px', 
                background: 'linear-gradient(90deg, #16a34a, #10b981)',
                margin: '0 auto 1.5rem',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(16,185,129,0.4)'
              }}
            />
            <motion.p 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{ fontSize: '1.2rem', color: '#065f46', maxWidth: '800px', margin: '0 auto', fontWeight: '500' }}
            >
              We provide various services under one roof
            </motion.p>
          </motion.div>

          {/* GST Services - Detailed */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring" }}
            whileHover={{ boxShadow: '0 25px 60px rgba(0,0,0,0.15)' }}
            style={{
              backgroundColor: 'white',
              borderRadius: '2rem',
              padding: '3rem',
              marginBottom: '3rem',
              boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
              border: '2px solid transparent',
              backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #0ea5e9, #06b6d4)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Animated corner decoration */}
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '150px',
                height: '150px',
                background: 'radial-gradient(circle, rgba(14,165,233,0.15), transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(30px)',
                pointerEvents: 'none'
              }}
            />
            
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ 
                fontSize: '1.6rem', 
                fontWeight: '800', 
                color: '#0ea5e9', 
                marginBottom: '2.5rem',
                borderBottom: '4px solid #0ea5e9',
                paddingBottom: '0.75rem',
                display: 'inline-block',
                position: 'relative'
              }}
            >
              {serviceDetails.gst.title}
              <motion.div
                animate={{ width: ['0%', '100%', '0%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: 0,
                  height: '4px',
                  backgroundColor: '#06b6d4',
                  borderRadius: '2px'
                }}
              />
            </motion.h2>
            {serviceDetails.gst.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ x: 10, backgroundColor: '#f0f9ff' }}
                style={{ 
                  marginBottom: '2rem',
                  padding: '1.5rem',
                  borderRadius: '1rem',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  borderLeft: '4px solid #0ea5e9'
                }}
              >
                <h3 style={{ 
                  fontSize: '1.2rem', 
                  fontWeight: '700', 
                  color: '#111827', 
                  marginBottom: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <motion.span
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: index * 0.2 }}
                    style={{
                      display: 'inline-block',
                      width: '8px',
                      height: '8px',
                      backgroundColor: '#0ea5e9',
                      borderRadius: '50%'
                    }}
                  />
                  {item.subtitle}
                </h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                  style={{ 
                    fontSize: '1.05rem', 
                    color: '#4b5563', 
                    lineHeight: '1.8',
                    paddingLeft: '1.5rem'
                  }}
                >
                  {item.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>

          {/* Other Services Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {Object.entries(serviceDetails).filter(([key]) => key !== 'gst').map(([key, service], index) => {
              // All cards use the same green color scheme
              const color = { bg: '#f0fdf4', border: '#16a34a', text: '#15803d' };
              
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
                  whileHover={{ 
                    y: -15, 
                    scale: 1.03,
                    boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
                    rotateZ: 2
                  }}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '2rem',
                    padding: '2.5rem',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                    transition: 'all 0.4s ease',
                    border: `4px solid ${color.border}`,
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Animated background gradient */}
                  <motion.div
                    animate={{ 
                      background: [
                        `radial-gradient(circle at 0% 0%, ${color.bg}, transparent 50%)`,
                        `radial-gradient(circle at 100% 100%, ${color.bg}, transparent 50%)`,
                        `radial-gradient(circle at 0% 0%, ${color.bg}, transparent 50%)`
                      ]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      opacity: 0.5,
                      pointerEvents: 'none'
                    }}
                  />
                  
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    style={{
                      width: '60px',
                      height: '60px',
                      backgroundColor: color.bg,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem',
                      border: `2px solid ${color.border}`
                    }}
                  >
                    <span
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: '900',
                        color: color.text
                      }}
                    >
                      {String.fromCharCode(65 + index)}
                    </span>
                  </motion.div>
                  
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                    style={{ 
                      fontSize: '1.4rem', 
                      fontWeight: '800', 
                      color: color.text, 
                      marginBottom: '1rem',
                      position: 'relative',
                      zIndex: 1
                    }}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                    style={{ 
                      fontSize: '1.05rem', 
                      color: '#4b5563', 
                      lineHeight: '1.8',
                      position: 'relative',
                      zIndex: 1
                    }}
                  >
                    {service.description}
                  </motion.p>
                </motion.div>
              );
            })}
          </div>

          {/* Service Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              backgroundColor: 'white',
              borderRadius: '1.5rem',
              padding: '3rem',
              boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
            }}
          >
            <h2 style={{ 
              fontSize: '2rem', 
              fontWeight: '700', 
              color: '#16a34a', 
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              Service Enquiry
            </h2>
            <form onSubmit={handleSubmit} style={{ maxWidth: '700px', margin: '0 auto' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#374151', fontWeight: '600' }}>
                  Your Name :
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#16a34a'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#374151', fontWeight: '600' }}>
                  E Mail ID :
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#16a34a'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#374151', fontWeight: '600' }}>
                  Mobile No. :
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  placeholder="+91"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#16a34a'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#374151', fontWeight: '600' }}>
                  Address :
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#16a34a'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#374151', fontWeight: '600' }}>
                  Enquiry :
                </label>
                <textarea
                  name="enquiry"
                  value={formData.enquiry}
                  onChange={handleChange}
                  required
                  rows="5"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    resize: 'vertical'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#16a34a'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(22,163,74,0.4)' }}
                whileTap={{ scale: 0.98 }}
                style={{
                  width: '100%',
                  padding: '1rem 2rem',
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.5rem',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                SEND ENQUIRY
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;



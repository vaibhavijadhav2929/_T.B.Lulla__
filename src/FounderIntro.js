import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users, GraduationCap, Building2, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';

const FounderIntro = () => {
  const items = [ 
    { icon: GraduationCap, text: 'B.Com.LL.B qualified professional and Sales Tax Consultant since 1980.' },
    { icon: Building2, text: 'Practicing at T. B. Lulla & Company, Sangli, a firm established in 1959.' },
    { icon: CheckCircle, text: 'Expertise in the Goods & Services Tax Act.' },
    { icon: Users, text: 'The firm includes his son Amit (GST practitioner), CA Anish Shah (Income Tax & Audit), and a separate accounting department.' },
    { icon: Award, text: 'Past president of Goods & Service Tax Association of Maharashtra and Taxation Consultants Association, Sangli.' },
    { icon: Users, text: "Managing Committee Member of All India Federation of Tax Practitioner's Association." },
    { icon: BookOpen, text: 'Author of "Fun Tax Stic," a book of 62 cartoons published in the Sales Tax Review from 2008 to 2013.' },
  ];

  return (
    <section id="founder" style={{ padding: '5rem 0', backgroundColor: '#f9fafb', position: 'relative', overflow: 'hidden' }}>
      {/* Animated Background Elements */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{ 
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          position: 'absolute',
          top: '10%',
          right: '-5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(22,163,74,0.15) 0%, rgba(22,163,74,0) 70%)',
          pointerEvents: 'none',
          filter: 'blur(40px)'
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
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, rgba(16,185,129,0) 70%)',
          pointerEvents: 'none',
          filter: 'blur(50px)'
        }}
      />

      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
        {/* New Overlapping Layout */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '500px 1fr',
          gap: '0',
          alignItems: 'center',
          position: 'relative',
          minHeight: '600px'
        }} className="founder-overlap-grid">
          
          {/* Image - Now First and Larger */}
          <motion.div 
            initial={{ opacity: 0, x: -150, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut", type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.02, x: -10 }}
            style={{
              position: 'relative',
              zIndex: 2,
              transition: 'all 0.4s ease'
            }}
          >
            <motion.div
              style={{
                backgroundColor: 'white',
                borderRadius: '2.5rem',
                padding: '1.5rem',
                boxShadow: '0 30px 80px rgba(0,0,0,0.2)',
                border: '3px solid #16a34a',
                overflow: 'hidden'
              }}
            >
              {/* Animated corner decoration */}
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  position: 'absolute',
                  top: '-30px',
                  right: '-30px',
                  width: '100px',
                  height: '100px',
                  background: 'radial-gradient(circle, rgba(16,185,129,0.3), transparent 70%)',
                  borderRadius: '50%',
                  filter: 'blur(20px)',
                  pointerEvents: 'none'
                }}
              />
              <motion.img 
                src="/04.png" 
                alt="Founder" 
                whileHover={{ scale: 1.05, filter: 'brightness(1.1)' }}
                transition={{ duration: 0.3 }}
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  maxHeight: '650px',
                  objectFit: 'cover',
                  borderRadius: '1.75rem',
                  display: 'block'
                }}
                onError={(e) => { e.currentTarget.src = '/TBLulla (1).jpg'; }}
              />
              {/* Badge overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 0.6 }}
                style={{
                  position: 'absolute',
                  bottom: '30px',
                  left: '30px',
                  backgroundColor: '#16a34a',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '50px',
                  fontWeight: '700',
                  fontSize: '0.9rem',
                  boxShadow: '0 10px 25px rgba(22,163,74,0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <Award size={20} />
                <span>65+ Years</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content Card - Now Second, Overlapping */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            whileHover={{ boxShadow: '0 35px 70px rgba(0,0,0,0.18)' }}
            style={{
              backgroundColor: 'white',
              borderRadius: '2rem',
              boxShadow: '0 25px 60px rgba(0,0,0,0.15)',
              border: '2px solid transparent',
              backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #16a34a, #10b981, #16a34a)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
              position: 'relative',
              overflow: 'hidden',
              marginLeft: '-100px',
              paddingLeft: '120px',
              paddingRight: '2.5rem',
              paddingTop: '2.5rem',
              paddingBottom: '2.5rem',
              zIndex: 1,
              transition: 'all 0.3s ease'
            }}
            className="founder-animated-border"
          >
            {/* Animated floating accent */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ 
                position: 'absolute', 
                width: '140px', 
                height: '140px', 
                borderRadius: '50%', 
                background: 'radial-gradient(circle, rgba(22,163,74,0.2), transparent 60%)', 
                top: '-40px', 
                right: '-40px', 
                filter: 'blur(20px)',
                pointerEvents: 'none'
              }}
            />
            <div style={{ padding: '2.5rem' }}>
              <div className="section-header" style={{ marginBottom: '2.5rem' }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 1.5rem',
                    backgroundColor: '#ecfdf5',
                    borderRadius: '50px',
                    marginBottom: '1rem',
                    border: '2px solid #16a34a'
                  }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles size={18} color="#16a34a" />
                  </motion.div>
                  <span style={{ color: '#16a34a', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    About Us
                  </span>
                </motion.div>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="section-title" 
                  style={{ fontSize: '2rem', fontWeight: '800', color: '#111827', marginBottom: '1rem' }}
                >
                  Meet Our Founder
                </motion.h2>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '80px' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="section-divider"
                  style={{ height: '4px', backgroundColor: '#16a34a', margin: '0 auto', borderRadius: '2px' }}
                />
              </div>
              <div style={{ textAlign: 'left', display: 'grid', gap: '1.2rem' }}>
                {items.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      gap: '1rem',
                      cursor: 'pointer',
                      padding: '0.5rem',
                      borderRadius: '0.5rem',
                      transition: 'background-color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0fdf4'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                      style={{ 
                        flexShrink: 0,
                        backgroundColor: '#ecfdf5',
                        padding: '0.6rem',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <item.icon size={20} color="#16a34a" />
                    </motion.div>
                    <span style={{ color: '#374151', fontSize: '1rem', lineHeight: '1.6', fontWeight: '500' }}>
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
              
              {/* Learn More Button Inside Box */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                style={{ marginTop: '2rem', textAlign: 'left' }}
              >
                <motion.a 
                  href="/about" 
                  whileHover={{ 
                    scale: 1.08, 
                    boxShadow: '0 20px 40px rgba(22,163,74,0.4)',
                    y: -5
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      '0 10px 25px rgba(22,163,74,0.3)',
                      '0 15px 35px rgba(22,163,74,0.5)',
                      '0 10px 25px rgba(22,163,74,0.3)'
                    ]
                  }}
                  transition={{ 
                    boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                  style={{ 
                    background: 'linear-gradient(135deg, #16a34a 0%, #059669 100%)',
                    color: 'white', 
                    padding: '1rem 2.5rem', 
                    borderRadius: '50px', 
                    textDecoration: 'none', 
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    fontWeight: '700',
                    fontSize: '1.05rem',
                    border: '2px solid rgba(255,255,255,0.2)'
                  }}
                >
                  <span>Learn More</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`
        .founder-overlap-grid {
          display: grid;
          grid-template-columns: 500px 1fr;
          gap: 0;
          align-items: center;
        }
        
        @media (max-width: 1200px) {
          .founder-overlap-grid {
            grid-template-columns: 400px 1fr;
          }
        }
        
        @media (max-width: 968px) {
          .founder-overlap-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            min-height: auto !important;
          }
          
          .founder-overlap-grid > div:nth-child(2) {
            margin-left: 0 !important;
            padding: 2rem !important;
          }
        }
        
        @media (max-width: 768px) {
          section#founder {
            padding: 3rem 0 !important;
          }
          
          .founder-overlap-grid {
            padding: 0 1rem !important;
          }
          
          .founder-overlap-grid > div:nth-child(2) {
            padding: 1.5rem !important;
          }
          
          .founder-overlap-grid > div:nth-child(2) h2 {
            font-size: 1.75rem !important;
          }
          
          .founder-overlap-grid > div:nth-child(2) p {
            font-size: 0.95rem !important;
          }
        }
        
        @media (max-width: 640px) {
          .founder-overlap-grid > div:first-child > div {
            padding: 1rem !important;
            border-radius: 1.5rem !important;
          }
          
          .founder-overlap-grid img {
            max-height: 350px !important;
            border-radius: 1rem !important;
          }
          
          .founder-overlap-grid > div:nth-child(2) h2 {
            font-size: 1.5rem !important;
          }
          
          .founder-overlap-grid > div:nth-child(2) > div > div {
            padding: 1rem !important;
            font-size: 0.9rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .founder-overlap-grid img {
            max-height: 300px !important;
          }
          
          .founder-overlap-grid > div:nth-child(2) h2 {
            font-size: 1.3rem !important;
          }
        }
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translate(0,0); }
          50% { transform: translate(0, 10px); }
        }
      `}</style>
    </section>
  );
};

export default FounderIntro;



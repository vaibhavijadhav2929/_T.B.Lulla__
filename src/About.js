import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users, CheckCircle, Briefcase, GraduationCap, Building2, Sparkles } from 'lucide-react';

// Reusable component for list items with icons
const InfoPoint = ({ icon: Icon, text, color, index }) => (
  <motion.div 
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ x: 10, scale: 1.02 }}
    style={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: '0.875rem',
      padding: '0.5rem 0',
      textAlign: 'left',
      cursor: 'pointer',
    }}
  >
    <motion.div 
      whileHover={{ rotate: 360, scale: 1.2 }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundColor: `${color}1a`,
        padding: '0.5rem',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <Icon style={{ width: '1.25rem', height: '1.25rem', color: color }} />
    </motion.div>
    <p style={{ color: '#374151', fontSize: '1rem', fontWeight: '500', margin: 0, lineHeight: '1.6' }}>
      {text}
    </p>
  </motion.div>
);

// Section for each person with alternating image layout
const PersonSection = ({ imageSrc, alt, name, titleColor, points, achievements, detailedLink, imageLeft = true }) => (
  <motion.section 
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    whileHover={{ y: -10 }}
    style={{
      backgroundColor: 'white',
      borderRadius: '1.5rem',
      boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
      overflow: 'hidden',
      padding: '2rem',
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '2rem',
      alignItems: 'center',
      transition: 'all 0.3s ease',
      position: 'relative',
      border: '2px solid transparent',
      backgroundImage: `linear-gradient(white, white), linear-gradient(90deg, ${titleColor}, #10b981, ${titleColor})`,
      backgroundOrigin: 'border-box',
      backgroundClip: 'padding-box, border-box',
    }} 
    className="person-section-grid person-animated-border"
  >
    <motion.div 
      initial={{ opacity: 0, scale: 0.8, rotateY: imageLeft ? -30 : 30 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      whileHover={{ scale: 1.05, rotateZ: imageLeft ? -3 : 3 }}
      style={{ order: imageLeft ? 1 : 2, textAlign: 'center' }} 
      className="person-image-container"
    >
      <motion.img 
        src={imageSrc}
        alt={alt}
        whileHover={{ filter: 'brightness(1.1)' }}
        style={{ 
          width: '100%', 
          maxWidth: '320px', 
          borderRadius: '1.25rem', 
          boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
          margin: '0 auto',
          transition: 'filter 0.3s ease'
        }}
      />
    </motion.div>
    <div style={{ order: imageLeft ? 2 : 1 }}>
      <motion.h2 
        initial={{ opacity: 0, x: imageLeft ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{ 
          fontSize: '2rem', 
          fontWeight: '700', 
          color: titleColor, 
          marginBottom: '1.5rem', 
          textAlign: 'left',
          position: 'relative',
          display: 'inline-block'
        }}
      >
        {name}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            position: 'absolute',
            bottom: '-5px',
            left: 0,
            height: '3px',
            backgroundColor: titleColor,
            borderRadius: '2px'
          }}
        />
      </motion.h2>
      {points.map((point, index) => (
        <InfoPoint key={index} icon={point.icon} text={point.text} color={titleColor} index={index} />
      ))}
      <motion.h3 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{ 
          fontSize: '1.5rem', 
          fontWeight: '700', 
          color: '#111827', 
          marginTop: '2rem', 
          marginBottom: '1rem', 
          borderLeft: `4px solid ${titleColor}`, 
          paddingLeft: '1rem', 
          textAlign: 'left' 
        }}
      >
        Key Achievements
      </motion.h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {achievements.map((item, index) => (
          <InfoPoint key={index} icon={item.icon} text={item.text} color={titleColor} index={index + points.length} />
        ))}
      </div>
    </div>
  </motion.section>
);

const About = () => {
  useEffect(() => {
    document.title = 'About Us - T. B. Lulla & Company';
  }, []);

  const kishorLullaPoints = [
    { icon: GraduationCap, text: 'B.Com.LL.B qualified professional' },
    { icon: Briefcase, text: 'Sales Tax Consultant since 1980' },
    { icon: Building2, text: 'Practicing at T. B. Lulla & Company, Sangli (established in 1959)' },
    { icon: CheckCircle, text: 'Expertise in Goods & Services Tax Act' },
  ];

  const kishorLullaAchievements = [
    { icon: Award, text: "Past president of Goods & Service Tax Association of Maharashtra" },
    { icon: Users, text: "Managing Committee Member of All India Federation of Tax Practitioner's Association" },
    { icon: Award, text: 'Past president of Taxation Consultants Association, Sangli' },
    { icon: BookOpen, text: 'Author of "Fun Tax Stic" - a book with 62 taxation-related cartoons' },
  ];

  const amitLullaPoints = [
    { icon: GraduationCap, text: 'B.com. D.I.T. & Sales Tax Practitioner since 2007' },
    { icon: CheckCircle, text: 'GST practitioner since 2017' },
    { icon: Users, text: 'Member of the Goods & Service Tax Practitioners Association of Maharashtra' },
    { icon: Briefcase, text: 'Managing Committee member of Taxation Consultants Association, Sangli' },
  ];

  const amitLullaAchievements = [
    { icon: Users, text: 'Managing Committee member of All India Federation of Tax Practitioners' },
    { icon: Award, text: 'Active member in Rotary club activities' },
    { icon: BookOpen, text: 'Written articles & given speeches on GST' },
  ];

  return (
    <main style={{ padding: '8rem 0 4rem', backgroundColor: '#f9fafb', position: 'relative', overflow: 'hidden' }}>
      {/* Animated Background Elements */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(22,163,74,0.1) 0%, rgba(22,163,74,0) 70%)',
          pointerEvents: 'none'
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
          bottom: '-10%',
          left: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(59,130,246,0) 70%)',
          pointerEvents: 'none'
        }}
      />
      
      <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '0 1rem', position: 'relative', zIndex: 1 }}>
        {/* Page Title */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', color: '#16a34a', marginBottom: '1rem' }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={24} />
            </motion.div>
            <span style={{ fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Our Experts</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
            style={{ fontSize: '2.5rem', fontWeight: '800', color: '#111827', margin: 0 }}
          >
            Meet Our Team
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '100px' }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ width: '100px', height: '4px', backgroundColor: '#16a34a', margin: '1rem auto 0' }}
          />
        </motion.div>

        {/* Sections for each person */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>
          <PersonSection 
            imageSrc="/04.png"
            alt="Advocate Kishor Lulla"
            name="Advocate Kishor Lulla"
            titleColor="#16a34a"
            points={kishorLullaPoints}
            achievements={kishorLullaAchievements}
            detailedLink="/about-detailed"
            imageLeft={true}
          />
          <PersonSection 
            imageSrc="/05.png"
            alt="Amit Kishor Lulla"
            name="Amit Kishor Lulla"
            titleColor="#3b82f6"
            points={amitLullaPoints}
            achievements={amitLullaAchievements}
            detailedLink="/about-detailed"
            imageLeft={false}
          />
        </div>
      </div>
      
      <style>{`
        @keyframes borderRotate {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .person-animated-border {
          background-size: 200% 200%;
          animation: borderRotate 4s ease-in-out infinite;
        }
        
        .person-animated-border:hover {
          animation: borderRotate 2s ease-in-out infinite;
        }
        
        @media (min-width: 1024px) {
          .person-section-grid {
            grid-template-columns: 400px 1fr !important;
          }
        }
        @media (max-width: 1023px) and (min-width: 768px) {
          .person-section-grid {
            grid-template-columns: 320px 1fr !important;
          }
        }
        @media (max-width: 767px) {
          h1 {
            font-size: 2rem !important;
          }
          h2 {
            font-size: 1.75rem !important;
          }
        }
      `}</style>
    </main>
  );
};

export default About;

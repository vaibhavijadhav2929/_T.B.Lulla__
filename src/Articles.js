import React, { useRef, useState } from 'react';
import { FileText, Download, ArrowRight, ChevronDown } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const Articles = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedYear, setSelectedYear] = useState('2022-2023');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const articlesByYear = {
    '2025-2026': [
      { id: '01', title: 'GST Updates for 2025', pdfUrl: '/pdfs/gst-updates-2025.pdf' },
      { id: '02', title: 'Tax Planning 2025-26', pdfUrl: '/pdfs/tax-planning-2025.pdf' }
    ],
    '2024-2025': [
      { id: '01', title: 'Budget 2024 Analysis', pdfUrl: '/pdfs/budget-2024.pdf' },
      { id: '02', title: 'GST Compliance Guide', pdfUrl: '/pdfs/gst-compliance-2024.pdf' }
    ],
    '2023-2024': [
      { id: '01', title: 'Income Tax Changes', pdfUrl: '/pdfs/income-tax-2023.pdf' },
      { id: '02', title: 'Corporate Law Updates', pdfUrl: '/pdfs/corporate-law-2023.pdf' }
    ],
    '2022-2023': [
      { id: '01', title: 'GST Returns Process', pdfUrl: '/pdfs/gst-returns-2022.pdf' },
      { id: '02', title: 'Tax Deduction Guide', pdfUrl: '/pdfs/tax-deduction-2022.pdf' }
    ],
    '2021-2022': [
      { id: '01', title: 'ई वे बिल बाबत बरेच काही १२.१,२२', pdfUrl: 'pdfs/ई वे बिल बाबत बरेच काही १२.१,२२.pdf' },
      { id: '02', title: 'जीएसटी कायद्यांतर्गत कलम ६५ प्रमाणे ऑडिट.pdf', pdfUrl: 'pdfs/जीएसटी कायद्यांतर्गत कलम ६५ प्रमाणे ऑडिट.pdf' }
    ]
  };

  const years = Object.keys(articlesByYear);
  const currentArticles = articlesByYear[selectedYear] || [];

  const handlePdfClick = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <section id="articles" ref={ref} style={{ padding: '5rem 0', background: 'linear-gradient(180deg, #f0fdf4 0%, #f9fafb 100%)', position: 'relative', overflow: 'hidden' }}>
      {/* Animated Background Elements */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          position: 'absolute',
          top: '10%',
          right: '-5%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(22,163,74,0.08) 0%, rgba(22,163,74,0) 70%)',
          pointerEvents: 'none',
          filter: 'blur(50px)'
        }}
      />
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3rem' }}
        >
          <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Our Articles</h2>
          <div style={{ width: '80px', height: '3px', backgroundColor: '#16a34a', margin: '0 auto 2rem auto' }}></div>
        </motion.div>

        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {/* Year Dropdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: '2rem', position: 'relative' }}
          >
            <motion.div
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              whileHover={{ scale: 1.02, boxShadow: '0 10px 20px rgba(37,99,235,0.3)' }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: '#2563eb',
                color: 'white',
                padding: '0.65rem 1.25rem',
                borderRadius: '8px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontWeight: '600',
                fontSize: '0.95rem',
                cursor: 'pointer',
                minWidth: '160px',
                justifyContent: 'space-between',
                boxShadow: '0 4px 12px rgba(37,99,235,0.2)',
                border: 'none',
                transition: 'all 0.3s ease'
              }}
            >
              {selectedYear}
              <motion.div
                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={20} />
              </motion.div>
            </motion.div>
            
            {isDropdownOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                marginTop: '0.5rem',
                backgroundColor: 'white',
                borderRadius: '0.375rem',
                boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                overflow: 'hidden',
                zIndex: 10,
                minWidth: '200px'
              }}>
                {years.map((year) => (
                  <div
                    key={year}
                    onClick={() => {
                      setSelectedYear(year);
                      setIsDropdownOpen(false);
                    }}
                    style={{
                      padding: '0.75rem 1.5rem',
                      backgroundColor: year === selectedYear ? '#2563eb' : 'white',
                      color: year === selectedYear ? 'white' : '#1f2937',
                      cursor: 'pointer',
                      fontWeight: year === selectedYear ? '600' : '500',
                      transition: 'all 0.2s',
                      fontSize: '1.125rem'
                    }}
                    onMouseEnter={(e) => {
                      if (year !== selectedYear) {
                        e.currentTarget.style.backgroundColor = '#eff6ff';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (year !== selectedYear) {
                        e.currentTarget.style.backgroundColor = 'white';
                      }
                    }}
                  >
                    {year}
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Single Articles Box */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
            whileHover={{ boxShadow: '0 25px 50px rgba(0,0,0,0.15)' }}
            style={{ 
              backgroundColor: 'white', 
              borderRadius: '1.5rem', 
              padding: '2rem', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              border: '2px solid #16a34a'
            }}
          >
            {currentArticles.length > 0 ? (
              currentArticles.map((article, articleIndex) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, x: -30, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -30, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: articleIndex * 0.15 + 0.4, type: "spring" }}
                  whileHover={{ 
                    x: 15, 
                    backgroundColor: '#f0fdf4',
                    scale: 1.02,
                    boxShadow: '0 4px 12px rgba(22,163,74,0.1)'
                  }}
                  onClick={() => handlePdfClick(article.pdfUrl)}
                  style={{
                    padding: '1.5rem',
                    borderBottom: articleIndex < currentArticles.length - 1 ? '2px solid #e5e7eb' : 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.25rem',
                    transition: 'all 0.3s ease',
                    borderRadius: '0.75rem',
                    marginBottom: articleIndex < currentArticles.length - 1 ? '0.5rem' : '0'
                  }}
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    style={{
                      backgroundColor: '#ecfdf5',
                      padding: '0.75rem',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <FileText size={22} style={{ color: '#16a34a' }} />
                  </motion.div>
                  <span style={{ 
                    color: '#0ea5e9', 
                    fontSize: '1.05rem', 
                    fontWeight: '600',
                    flex: 1,
                    textDecoration: 'none',
                    lineHeight: '1.5'
                  }}>
                    {article.id} {article.title}
                  </span>
                  <motion.div
                    whileHover={{ scale: 1.3, rotate: -10 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      backgroundColor: '#16a34a',
                      padding: '0.5rem',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Download size={18} style={{ color: 'white' }} />
                  </motion.div>
                </motion.div>
              ))
            ) : (
              <p style={{ textAlign: 'center', color: '#6b7280', padding: '2rem', fontSize: '1.1rem' }}>No articles available for this year.</p>
            )}
          </motion.div>
        </div>

        {/* See More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{ textAlign: 'center', marginTop: '3rem' }}
        >
          <Link to="/articles">
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
              See More Articles
              <ArrowRight size={20} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Articles;

import React from 'react';
import { motion } from 'framer-motion';

const commitments = [
  {
    title: 'Premium Quality',
    image: '/01.jpg',
    description: 'We are committed to delivering the highest quality of service, ensuring accuracy and excellence in everything we do.',
  },
  {
    title: 'Customer Satisfaction',
    image: '/02.jpg',
    description: 'Your satisfaction is our priority. We strive to exceed your expectations with personalized and attentive service.',
  },
  {
    title: 'Corporate Responsibility',
    image: '/03.jpg',
    description: 'We believe in giving back to the community and operating with integrity and a strong sense of social responsibility.',
  },
];

const Commitment = () => {
  return (
    <section id="commitment" style={{ padding: '4rem 0', backgroundColor: '#f9fafb' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#111827', marginBottom: '1rem' }}>
            Our Commitment to You
          </h2>
          <div style={{ width: '80px', height: '4px', backgroundColor: '#16a34a', margin: '0 auto' }}></div>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {commitments.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.05, boxShadow: '0 30px 60px rgba(0,0,0,0.12)' }}
              style={{
                backgroundColor: 'white',
                borderRadius: '1rem',
                padding: '2.5rem',
                textAlign: 'center',
                boxShadow: '0 20px 50px rgba(0,0,0,0.08)',
                borderLeft: '5px solid #16a34a',
              }}
            >
              <motion.img
                src={item.image}
                alt={item.title}
                style={{
                  width: '200px',
                  height: '200px',
                  objectFit: 'contain',
                  margin: '0 auto 1.5rem auto'
                }}
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/150x150?text=${item.title.replace(' ', '+')}`;
                }}
                whileHover={{ rotate: [0, -5, 5, -5, 5, 0], transition: { duration: 0.5 } }}
              />
              <div style={{ marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem' }}>{item.title}</h3>
                <div style={{ width: '50px', height: '3px', backgroundColor: '#16a34a', margin: '0 auto' }}></div>
              </div>
              <p style={{ color: '#4b5563', lineHeight: '1.7' }}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Commitment;

import React, { useRef } from 'react';
import { Award, Users, Heart, Scale, Leaf, Target } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const VisionMission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="vision-mission" className="py-20 bg-white" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our Vision & Mission</h2>
          <motion.div 
            className="section-divider"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Committed to excellence, customer satisfaction, and social responsibility
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* Premium Quality Badge */}
          <motion.div
            className="relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 group"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
            transition={{ delay: 0, type: "spring", stiffness: 100 }}
            whileHover={{ y: -10, scale: 1.03 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
            
            <div className="relative p-8 text-center">
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                className="mb-6"
              >
                <img 
                  src="/quality-badge.png" 
                  alt="Premium Quality 100% Satisfaction Guaranteed" 
                  className="w-32 h-32 mx-auto"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-yellow-100 to-orange-100 mx-auto shadow-lg">
                  <Award className="w-12 h-12 text-yellow-600" />
                </div>
              </motion.div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Premium Quality</h3>
              <p className="text-gray-600 leading-relaxed">100% Satisfaction Guaranteed</p>
              
              <motion.div
                className="mt-6 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              ></motion.div>
            </div>
          </motion.div>

          {/* Customer Satisfaction */}
          <motion.div
            className="relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 group"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            whileHover={{ y: -10, scale: 1.03 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
            
            <div className="relative p-8 text-center">
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="mb-6"
              >
                <img 
                  src="/satisfaction-meter.png" 
                  alt="Customer Satisfaction Meter" 
                  className="w-32 h-32 mx-auto"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 mx-auto shadow-lg">
                  <Users className="w-12 h-12 text-blue-600" />
                </div>
              </motion.div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Customer Satisfaction</h3>
              <p className="text-gray-600 leading-relaxed">Your success is our priority</p>
              
              <motion.div
                className="mt-6 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              ></motion.div>
            </div>
          </motion.div>

          {/* CSR Badge */}
          <motion.div
            className="relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 group"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
            whileHover={{ y: -10, scale: 1.03 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-red-500 opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
            
            <div className="relative p-8 text-center">
              <motion.div
                animate={{ 
                  rotate: [0, -5, 5, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="mb-6"
              >
                <img 
                  src="/csr-badge.png" 
                  alt="Corporate Social Responsibility" 
                  className="w-32 h-32 mx-auto"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-pink-100 to-red-100 mx-auto shadow-lg">
                  <Heart className="w-12 h-12 text-pink-600" />
                </div>
              </motion.div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Corporate Social Responsibility</h3>
              <p className="text-gray-600 leading-relaxed">Contributing to society's growth</p>
              
              <motion.div
                className="mt-6 h-1 bg-gradient-to-r from-pink-400 to-red-500 rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              ></motion.div>
            </div>
          </motion.div>
        </div>

        {/* Additional Mission Points */}
        <motion.div
          className="mt-16 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 md:p-12 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Scale className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Integrity</h4>
              <p className="text-gray-600">Honest and ethical practices in all our dealings</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Excellence</h4>
              <p className="text-gray-600">Delivering top-quality services consistently</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Leaf className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Sustainability</h4>
              <p className="text-gray-600">Building lasting relationships and growth</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission;

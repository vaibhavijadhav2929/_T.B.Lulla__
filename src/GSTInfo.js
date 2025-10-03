import React, { useRef } from 'react';
import { CheckCircle, Shield, FileText, TrendingUp } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const GSTInfo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Shield,
      title: "Smart Taxation System",
      description: "Comprehensive GST solutions for modern businesses"
    },
    {
      icon: FileText,
      title: "Complete Documentation",
      description: "All your GST paperwork handled professionally"
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description: "Strategic tax planning for business expansion"
    },
    {
      icon: CheckCircle,
      title: "Compliance Assured",
      description: "Stay compliant with all GST regulations"
    }
  ];

  return (
    <section id="gst-info" className="py-20 bg-gradient-to-br from-green-50 to-blue-50" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">GST - Goods and Services Tax</h2>
          <motion.div 
            className="section-divider"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Smart Taxation System for Your Business Success
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 2, -2, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <img 
                src="/gst-image.png" 
                alt="GST - Goods and Services Tax Smart Taxation System" 
                className="w-full h-auto rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500"
                style={{ maxWidth: '100%' }}
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop";
                }}
              />
            </motion.div>
            
            {/* Animated decorative elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-green-400 rounded-full opacity-20 blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="w-7 h-7 text-green-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GSTInfo;

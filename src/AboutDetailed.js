import React, { useRef, useEffect } from 'react';
import { Award, Star, CheckCircle, Sparkles } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const AboutDetailed = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Set page title
  useEffect(() => {
    document.title = 'About Us - T. B. Lulla & Company';
  }, []);

  return (
    <section
      id="about-detailed"
      className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50 relative overflow-hidden"
      ref={ref}
    >
      {/* Animated Background Shapes */}
      <motion.div
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, rgba(22, 163, 74, 0.1), transparent)',
          borderRadius: '50%',
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '8%',
          width: '120px',
          height: '120px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1), transparent)',
          borderRadius: '50%',
        }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Section Title */}
      <div className="text-center mb-16 relative z-10" style={{ padding: '0 1rem' }}>
        <motion.div
          className="inline-flex items-center gap-3 mb-4"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Sparkles className="text-green-600 w-6 h-6 sm:w-8 sm:h-8" />
          <span className="text-green-600 font-bold uppercase tracking-widest text-xs sm:text-sm">
            Discover Our Story
          </span>
        </motion.div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text">
          About Us
        </h1>
        <motion.div
          className="mx-auto mt-4 h-1 rounded-full bg-gradient-to-r from-green-600 via-blue-500 to-green-600"
          initial={{ width: 0, opacity: 0 }}
          animate={isInView ? { width: 120, opacity: 1 } : { width: 0, opacity: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        />
      </div>

      {/* Content */}
      <div className="container" style={{ padding: '0 1rem' }}>
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start mt-8 max-w-6xl mx-auto">
          {/* Left Column - Image and Quick Facts */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Professional Image */}
            <motion.div
              className="relative rounded-3xl overflow-hidden"
              style={{ boxShadow: '0 30px 60px rgba(22, 163, 74, 0.25)' }}
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.9, rotateY: -15 }}
              transition={{ duration: 1, delay: 0.3, type: 'spring' }}
              whileHover={{ scale: 1.03, rotateY: 2, boxShadow: '0 35px 70px rgba(22, 163, 74, 0.35)' }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500"
                animate={{ opacity: [0.15, 0.25, 0.15] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                style={{
                  position: 'absolute',
                  top: '-50%',
                  left: '-50%',
                  width: '200%',
                  height: '200%',
                  background:
                    'linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent)',
                }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <img
                src="/kishor-lulla.png"
                alt="Advocate Kishor Lulla - Sales Tax Consultant"
                className="w-full h-auto object-cover relative z-10"
                style={{ border: '5px solid white' }}
                onError={(e) => {
                  e.target.src =
                    'https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=800';
                }}
              />
            </motion.div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-5">
              {/* Established */}
              <motion.div
                className="bg-gradient-to-br from-white to-green-50 p-3 sm:p-5 rounded-2xl text-center shadow-lg border-2 border-green-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.8 }}
                transition={{ delay: 0.5, type: 'spring', bounce: 0.5 }}
                whileHover={{ scale: 1.08, y: -5 }}
              >
                <motion.div
                  className="text-3xl sm:text-5xl font-black text-green-600 mb-2"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  65+
                </motion.div>
                <div className="text-xs sm:text-sm font-bold text-gray-800">Years Established</div>
                <div className="text-xs font-semibold text-gray-600 mt-1">Since 1959</div>
              </motion.div>

              {/* Experience */}
              <motion.div
                className="bg-gradient-to-br from-white to-blue-50 p-3 sm:p-5 rounded-2xl text-center shadow-lg border-2 border-blue-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.8 }}
                transition={{ delay: 0.6, type: 'spring', bounce: 0.5 }}
                whileHover={{ scale: 1.08, y: -5 }}
              >
                <motion.div
                  className="text-3xl sm:text-5xl font-black text-blue-600 mb-2"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                >
                  45+
                </motion.div>
                <div className="text-xs sm:text-sm font-bold text-gray-800">Years Experience</div>
                <div className="text-xs font-semibold text-gray-600 mt-1">Since 1980</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Detailed Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            {/* About Text */}
            <motion.div
              className="prose bg-gradient-to-br from-white to-green-50 p-4 sm:p-6 rounded-2xl shadow-lg border-2 border-green-200"
              whileHover={{ scale: 1.02 }}
              >
              <h1>About US</h1>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                <strong className="text-green-600">Advocate Kishor Lulla</strong> is{' '}
                <span className="font-semibold">B.Com.LL.B</span> & by profession, a{' '}
                <span className="font-semibold">Sales Tax Consultant since 1980</span>.
                He is practicing in the firm{' '}
                <span className="font-semibold">T. B. Lulla & Company at Sangli</span>,
                which was <span className="font-semibold">established in 1959</span>. He has expertise in the{' '}
                <span className="font-semibold text-green-600">Goods & Services Tax Act</span>.
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-4">
                His son <span className="font-semibold text-blue-600">Amit</span> has also joined as a{' '}
                <span className="font-semibold">GST practitioner</span>, along with{' '}
                <span className="font-semibold text-blue-600">CA Anish Shah</span> handling Income Tax and Audit.  
                The firm also has a dedicated <span className="font-semibold">accounting department</span>.
              </p>
            </motion.div>

            {/* Achievements */}
            <motion.div className="bg-gradient-to-br from-white to-blue-50 p-4 sm:p-6 rounded-2xl shadow-lg border-2 border-blue-200">
              <h3 className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent flex items-center gap-2 mb-4">
                <Award className="text-green-600" /> Key Achievements
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  'Past president of GST Association of Maharashtra',
                  "Managing Committee Member of All India Federation of Tax Practitioner's Association",
                  'Past president of Taxation Consultants Association, Sangli',
                  'Author of "Fun Tax Stic" - 62 taxation cartoons published in 2013',
                  'Articles published in Sales Tax Review (2008–2013)',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Trusted */}
            <motion.div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-4 sm:p-6 rounded-2xl shadow-lg border-2 border-yellow-300">
              <h3 className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent flex items-center gap-2 mb-3">
                <Star className="text-yellow-500 fill-yellow-500" /> Trusted by Thousands
              </h3>
              <p className="text-sm sm:text-base text-yellow-800 font-medium leading-relaxed">
                With over <strong className="text-yellow-600">6 decades</strong> of combined
                experience, we provide expert guidance for all your{' '}
                <strong className="text-yellow-600">GST and taxation</strong> needs.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutDetailed;

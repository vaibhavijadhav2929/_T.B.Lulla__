import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const PhotoGallery = ({ isPreview = false }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const photos = [
    { id: 1, src: 'PhotoG/PG-3.jpg', alt: 'Gallery 1', className: 'bento-item-1' },
    { id: 2, src: 'PhotoG/PG-2.jpg', alt: 'Gallery 2', className: 'bento-item-2' },
    { id: 3, src: 'PhotoG/PG-3.jpg', alt: 'Gallery 3', className: 'bento-item-3' },
    { id: 4, src: 'PhotoG/PG-4.jpg', alt: 'Gallery 4', className: 'bento-item-4' },
    { id: 5, src: 'PhotoG/PG-1.jpg', alt: 'Gallery 5', className: 'bento-item-5' },
   
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const renderGallery = (photoList) => (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={isPreview ? "bento-grid" : "photo-regular-grid"}
    >
      {photoList.map((photo) => (
        <motion.div
          key={photo.id}
          variants={itemVariants}
          className={isPreview && photo.className ? `bento-item ${photo.className}` : "photo-grid-item"}
          onClick={() => setSelectedImage(photo)}
        >
          <img
            src={photo.src}
            alt={photo.alt}
            onError={(e) => { e.target.src = `https://via.placeholder.com/600x400?text=Photo+${photo.id}`; }}
          />
          <div className="photo-overlay">
            <ZoomIn size={20} />
            <span>View</span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <h2 className="gallery-title">Photo Gallery</h2>
        <div className="gallery-divider"></div>
        <p className="gallery-description">Explore our memorable moments and achievements</p>
      </div>

      {renderGallery(isPreview ? photos.slice(0, 5) : photos)}

      {isPreview && (
        <div className="view-all-button-container">
          <Link to="/photo-gallery" className="view-all-button">
            View All Photos
          </Link>
        </div>
      )}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="close-button"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </motion.button>
            <motion.img
              src={selectedImage.src}
              alt={selectedImage.alt}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoGallery;

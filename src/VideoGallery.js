import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const VideoGallery = ({ isPreview = false }) => {

  const videos = [
    { id: 1, title: 'GST Registration Process', videoId: 'DqMwXbEGOGw', className: 'bento-item-1' },
    { id: 2, title: 'Tax Filing Guide', videoId: '-iDG-PpdlqU', className: 'bento-item-2' },
    { id: 3, title: 'Business Consultation', videoId: 'XLGawFCcf7Y', className: 'bento-item-3' },
    { id: 4, title: 'GST Returns Tutorial', videoId: 'G4Qof_wnxLM', className: 'bento-item-4' },
    { id: 5, title: 'Tax Planning Tips', videoId: 'tWezuMe7O1g', className: 'bento-item-5' },
    { id: 6, title: 'Compliance Guide', videoId: 'DXzD6HCGR8I' },
    { id: 7, title: 'Business Compliance', videoId: 'v_CBP6P_Khk' },
    { id: 8, title: 'Video Tutorial 8', videoId: '_2zkEYCcGrw' },
    { id: 9, title: 'Expert Guide 9', videoId: 'EjHPUNGaASQ' },
    { id: 10, title: 'Business Tips 10', videoId: 'y-GqUN-Cgho' },
    { id: 11, title: 'GST Guide 11', videoId: 'LcwGdPSVLxk' },
    { id: 12, title: 'Tax Tutorial 12', videoId: '0hc52w2tsKg' },
    { id: 13, title: 'Compliance Tips 13', videoId: 'LImFhQ_Z7Co' },
    { id: 14, title: 'Business Guide 14', videoId: 'UIYtDg3h-Kc' },
    { id: 15, title: 'GST Tutorial 15', videoId: 'nq6PQpZAesI' },
    { id: 16, title: 'Tax Planning 16', videoId: 'LYP4V_jV7sk' },
    { id: 17, title: 'Expert Tips 17', videoId: 'd_xJ2-OiS_4' },
    { id: 18, title: 'Business Tutorial 18', videoId: '_S_MZBXfF1Q' },
    { id: 19, title: 'GST Guide 19', videoId: '3he6cCdz0o4' },
    { id: 20, title: 'Tax Guide 20', videoId: 'dfBWpnoKmrk' },
    { id: 21, title: 'Compliance Guide 21', videoId: 'z9r6sclxzfs' },
    { id: 22, title: 'Business Tips 22', videoId: 'Rdy7nFIEzJA' },
    { id: 23, title: 'GST Tutorial 23', videoId: 'jQ4FkGFcCbI' },
    { id: 24, title: 'Tax Tips 24', videoId: 'XfPA9BgSDt8' },
    { id: 25, title: 'Expert Guide 25', videoId: 'hOuiLC9NArs' },
    { id: 26, title: 'Business Guide 26', videoId: 'Leu9skJjmms' },
    { id: 27, title: 'GST Tips 27', videoId: 'SgN_6nMUFpU' },
    { id: 28, title: 'Tax Tutorial 28', videoId: 'GQ-Kd6KXaNU' },
    { id: 29, title: 'Compliance Tips 29', videoId: 'SQfrlBvQSY8' },
    { id: 30, title: 'Business Tutorial 30', videoId: 'VfxK_OIaYR0' },
    { id: 31, title: 'GST Guide 31', videoId: 'tZZH-8aoSdc' },
    { id: 32, title: 'Tax Guide 32', videoId: '0zdc9QBy7LA' },
    { id: 33, title: 'Expert Tips 33', videoId: 'vBIfniHQnPw' },
    { id: 34, title: 'Business Guide 34', videoId: '-2mrc_m7zaw' },
    { id: 35, title: 'GST Tutorial 35', videoId: 'QY1t2SjVH68' },
  ];




  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
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

  const renderGallery = (videoList) => (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={isPreview ? "bento-grid" : "video-regular-grid"}
    >
      {videoList.map((video) => (
        <motion.a
          key={video.id}
          variants={itemVariants}
          className={isPreview && video.className ? `bento-item ${video.className}` : "video-grid-item"}
          href={`https://www.youtube.com/watch?v=${video.videoId}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
            alt={video.title}
            onError={(e) => { e.target.src = `https://via.placeholder.com/600x400?text=${video.title}`; }}
          />
          <div className="video-overlay">
            <Play size={32} color="white" fill="white" />
            <span>{video.title}</span>
          </div>
        </motion.a>
      ))}
    </motion.div>
  );

  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <h2 className="gallery-title">Video Gallery</h2>
        <div className="gallery-divider"></div>
        <p className="gallery-description">Watch our expert guides on GST, taxation, and business compliance</p>
      </div>

      {renderGallery(isPreview ? videos.slice(0, 5) : videos)}

      {isPreview && (
        <div className="view-all-button-container">
          <Link to="/video-gallery" className="view-all-button">
            View All Videos
          </Link>
        </div>
      )}
    </section>
  );
};

export default VideoGallery;

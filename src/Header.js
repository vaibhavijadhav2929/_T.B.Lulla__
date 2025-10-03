import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  const navItems = [
    { name: 'Home', to: '/', section: 'hero' },
    { name: 'About Us', to: '/about', section: 'about' },
    { name: 'Services', to: '/services', section: 'services' },
    { name: 'Articles', to: '/articles', section: 'articles' },
    { name: 'Photo Gallery', to: '/photo-gallery', section: 'photo-gallery' },
    { name: 'Video Gallery', to: '/video-gallery', section: 'video-gallery' },
    { name: 'Contact Us', to: '/contact', section: 'contact' },
  ];

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      // Only apply scroll spy on home page
      if (location.pathname !== '/') {
        setActiveSection('');
        return;
      }

      const sections = ['hero', 'founder', 'commitment', 'services', 'articles', 'photo-gallery', 'video-gallery', 'contact'];
      const scrollPosition = window.scrollY + 150; // Offset for header height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    // Call on mount and scroll
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Helper function to check if link is active
  const isLinkActive = (item, isRouteActive) => {
    // If on home page, use scroll spy
    if (location.pathname === '/') {
      return activeSection === item.section;
    }
    // Otherwise, use route matching
    return isRouteActive;
  };

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      width: '100%',
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      padding: '1rem 0'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: 'auto 1fr', alignItems: 'center' }}>

        {/* Logo */}
        <div style={{ justifySelf: 'start' }}>
          <img 
            src="/logo.png" 
            alt="T. B. Lulla & Company" 
            style={{ width: 'auto' }}
            onError={(e) => {
              e.target.src = "/TBLulla (1).jpg";
            }}
          />
        </div>

        {/* Desktop Navigation */}
        <nav style={{ justifySelf: 'end' }} className="lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              end={item.to === '/'}
              style={({ isActive }) => {
                const active = isLinkActive(item, isActive);
                return {
                  color: active ? '#16a34a' : '#374151',
                  fontWeight: active ? '700' : '500',
                  textDecoration: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  position: 'relative',
                  borderBottom: active ? '3px solid #16a34a' : '3px solid transparent',
                  transition: 'all 0.3s ease',
                };
              }}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile menu button */}
        <div style={{ justifySelf: 'end' }}>
          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="mobile-menu" style={{ padding: '1rem' }}>
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-center"
              style={({ isActive }) => {
                const active = isLinkActive(item, isActive);
                return {
                  color: active ? '#16a34a' : '#374151',
                  fontWeight: '700',
                  textDecoration: 'none',
                  borderBottom: active ? '2px solid #16a34a' : 'none',
                  paddingBottom: '0.5rem',
                };
              }}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
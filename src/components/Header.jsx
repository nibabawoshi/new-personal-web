// components/Header.jsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiHome, FiUser, FiCode, FiFolder, FiMail } from 'react-icons/fi';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', name: 'Home', icon: <FiHome /> },
    { path: '/about', name: 'About', icon: <FiUser /> },
    { path: '/skills', name: 'Skills', icon: <FiCode /> },
    { path: '/projects', name: 'Projects', icon: <FiFolder /> },
    { path: '/contact', name: 'Contact', icon: <FiMail /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 300, damping: 30 }
    },
    closed: {
      x: '100%',
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      {/* Logo */}
      <div className="logo">
        <Link to="/">Wenkang (Pierce) Zhu</Link>
      </div>

      {/* 桌面导航 */}
      <nav className="desktop-nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* 移动端菜单按钮 */}
      <button
        className="mobile-menu-button"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="导航菜单"
      >
        {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* 移动端导航菜单 */}
      <AnimatePresence>
        {isMobileMenuOpen && (

          <motion.nav
            className="mobile-nav"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <ul>
              {navItems.map((item) => (
                <motion.li
                  key={item.path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link
                    to={item.path}
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
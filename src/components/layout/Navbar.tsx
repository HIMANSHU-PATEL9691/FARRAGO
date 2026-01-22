import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Collections', path: '/collections' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-md shadow-card' 
            : 'bg-transparent'
        }`}
      >
        <nav className="container-luxury">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link to="/" className="relative z-10">
              <h1 className="text-2xl md:text-3xl font-serif font-semibold tracking-wide">
                <span className="text-gold">Club Tara</span>
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm tracking-widest uppercase transition-colors duration-300 link-underline ${
                    location.pathname === link.path
                      ? 'text-gold'
                      : 'text-foreground hover:text-gold'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full transition-colors duration-300 hover:bg-secondary"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon size={20} className="text-foreground" />
                ) : (
                  <Sun size={20} className="text-gold" />
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 z-50"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X size={24} className="text-foreground" />
                ) : (
                  <Menu size={24} className="text-foreground" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-background" />
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative h-full flex flex-col items-center justify-center gap-8"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`text-2xl md:text-3xl font-serif tracking-wide transition-colors ${
                      location.pathname === link.path
                        ? 'text-gold'
                        : 'text-foreground hover:text-gold'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

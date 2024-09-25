import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RiceStoreLogo from '../assets/logo.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) { 
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-10 shadow-lg transition-all duration-300 ${
        scrolled ? 'bg-white' : 'bg-transparent'
      } font-bold text-gray-600 text-lg flex items-center justify-between px-20`}
    >
      <Link to="/" className="flex items-center">
        <img
          src={RiceStoreLogo}
          alt="Rice Store Logo"
          className="h-20 w-auto object-contain"
        />
        <span className="ml-4 text-xl font-bold text-green-600">VIERICE QUALITY Company</span>
      </Link>
      <nav className="flex space-x-8">
        <Link to="/" className="hover:text-green-600">Home</Link>
        <Link to="/about" className="hover:text-green-600">About Us</Link>
        <Link to="/contact" className="hover:text-green-600">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;

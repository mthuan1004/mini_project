import { useState, useEffect } from 'react';
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
      } font-bold text-gray-600 text-lg flex items-center`}
    >
      <img
        src={RiceStoreLogo}
        alt="Rice Store Logo"
        className="h-20 ml-20 mr-48 w-auto object-contain"
      />
    </header>
  );
};

export default Header;

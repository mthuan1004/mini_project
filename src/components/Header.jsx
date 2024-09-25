import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RiceStoreLogo from '../assets/logo.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const smoothScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else if (id === 'top') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-10 shadow-lg transition-all duration-300 ${scrolled ? 'bg-white' : 'bg-transparent'} font-bold text-gray-600 text-lg flex items-center justify-between px-4 md:px-20`}
    >
      <Link to="/" className="flex items-center" onClick={() => { smoothScrollTo('top'); setIsMenuOpen(false); }}>
        <img src={RiceStoreLogo} alt="Rice Store Logo" className="h-20 w-auto object-contain" />
        <span className="ml-4 text-xl font-bold text-green-600">VIERICE QUALITY Company</span>
      </Link>
      
      {/* Hamburger icon for mobile */}
      <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      {/* Navigation Links */}
      <nav className={`flex-col md:flex md:flex-row md:space-x-8 absolute right-0 bg-white md:bg-transparent transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0 md:static md:flex-row md:items-center w-full md:w-auto p-2 mt-28`}>
        <Link to="/" onClick={() => { smoothScrollTo('top'); setIsMenuOpen(false); }} className="hover:text-green-600 p-2 md:p-0">
          Home
        </Link>
        <Link to="#" onClick={() => { smoothScrollTo('product'); setIsMenuOpen(false); }} className="hover:text-green-600 p-2 md:p-0">
          Product
        </Link>
        <Link to="#" onClick={() => { smoothScrollTo('about'); setIsMenuOpen(false); }} className="hover:text-green-600 p-2 md:p-0">
          About Us
        </Link>
        <Link to="#" onClick={() => { smoothScrollTo('contact'); setIsMenuOpen(false); }} className="hover:text-green-600 p-2 md:p-0">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;

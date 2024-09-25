import ProductList from '../components/ProductList';
import FacebookIcon from '../assets/icon_facebook.png'; 
import { useState } from 'react';

const HomePage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center py-8 relative">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-8 uppercase">Product List</h2>
      <div className="w-full max-w-screen-lg px-4">
        <ProductList />
      </div>
      
      <div className="fixed bottom-8 right-8 group">
        <a
          href="https://www.facebook.com/profile.php?id=61565754661233" 
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="bg-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-500 transition-colors duration-300 ease-in-out flex items-center justify-center"
        >
          <img src={FacebookIcon} alt="Facebook" className="w-8 h-8" />
        </a>
        {isHovered && (
          <span className="absolute bottom-12 right-0  font-medium text-sm p-1 mb-3 rounded-md shadow-md transition-opacity duration-300">
            Contact
          </span>
        )}
      </div>
    </div>
  );
};

export default HomePage;

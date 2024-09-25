import { useState, useEffect } from "react";
import BannerImage from '../assets/banner.png';
import BannerImage2 from '../assets/banner2.jpg';
import BannerImage3 from '../assets/banner3.jpg';

const banners = [BannerImage, BannerImage2, BannerImage3];

const Banner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prevBanner) => (prevBanner + 1) % banners.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <section className="bg-gray-100">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <img
            src={banners[currentBanner]}
            alt={`Banner ${currentBanner + 1}`}
            className="w-full h-auto object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;

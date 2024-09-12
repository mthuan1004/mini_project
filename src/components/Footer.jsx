import { Link } from "react-router-dom";
import GoogleIcon from "../assets/icon_google.png";
import FacebookIcon from "../assets/icon_facebook.png";
import InstagramIcon from "../assets/icon_instagram.png";

const Footer = () => {
  return (
    <footer className="text-white py-8 border-t-2 border-t-gray-300 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-left md:text-center lg:text-left">
            <Link to="/" className="text-2xl font-bold text-green-600">
              VIERICE QUALITY Company
            </Link>
            <p className="text-gray-600 font-semibold mt-4">
              Công ty của chúng tôi chuyên cung cấp tất cả các loại gạo sạch,
              chất lượng nhất.
            </p>
          </div>

          <div>
            <h3 className="text-green-600 font-bold mb-4">Quick Links</h3>
            <ul className="flex flex-col space-y-2 text-gray-600 font-semibold">
              <li>
                <Link to="/privacy-policy" className="hover:text-red-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/term-service" className="hover:text-red-600">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-red-600">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-green-600 font-bold mb-4">Contact Us</h3>
            <ul className="flex flex-col space-y-2 text-gray-600">
              <li>Email: support@gmail.com</li>
              <li>Phone: +84 78 888 8888</li>
              <li>Address: 180 Cao Lo, Ward 4, District 8, Ho Chi Minh City</li>
            </ul>
          </div>

          <div>
            <h3 className="text-green-600 text-center font-bold mb-4">Follow Us</h3>
            <div className="flex justify-center gap-4">
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={GoogleIcon} alt="Google" className="w-8 h-8" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={FacebookIcon} alt="Facebook" className="w-8 h-8" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={InstagramIcon} alt="Instagram" className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 text-center text-gray-600 font-bold">
          © 2024 TK Hotels. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

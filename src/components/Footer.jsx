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
              Our company specializes in providing all types of clean, high-quality rice.
            </p>
          </div>

          <div>
            <h3 className="text-green-600 font-bold mb-4">Contact Us</h3>
            <ul className="flex flex-col space-y-2 text-gray-600">
              <li>Email: viericequalityvn@gmail.com.</li>
              <li>Phone: +84 907 525 540.</li>
              <li>Address: <br></br>Cong Hoa Garden, 20 Cong Hoa, Tan Binh, Ho Chi Minh City. <br></br>Ward 5, City. Tan An, Long An province</li>
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
                href="https://www.facebook.com/profile.php?id=61565754661233"
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
          © 2024 VIERICE QUALITY Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

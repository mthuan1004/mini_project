import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FacebookIcon from "../assets/icon_facebook.png";
import Image1 from "../assets/11.png";
import Image2 from "../assets/12.png";

const AboutPage = () => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center py-8 px-4">
        <div className="mb-8 w-full ml-80">
            <button
            onClick={() => navigate(-1)}
            className="bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 px-4 rounded"
            >
            Back
            </button>
        </div>

        <h2 className="text-3xl font-bold text-center text-green-600 mb-8 uppercase">
            About Us
        </h2>
        <div className="max-w-3xl text-left mb-8">
            <p className="text-lg text-gray-700 mb-4 font-semibold">
            Vierice Quality Co., Ltd. was established on April 14, 2014. The
            English name is VIERICE QUALITY CO., LTD. Vierice Quality is not just
            a combination of the origin from Vietnam and the quality of rice
            products; it also reflects the company’s commitment to providing the
            highest quality rice products from Vietnam to friends around the
            world.
            </p>
            <p className="text-lg text-gray-700 mb-4 font-semibold">
            In early 2020, the company began exporting its first rice shipment to
            the promising new market of the Philippines. The company’s rice
            products quickly became popular among consumers in this country due to
            their delicious quality and competitive pricing.
            </p>
            <p className="text-lg text-gray-700 mb-4 font-semibold">
            In 2022, the company continued to expand its market to the United
            States. Thanks to a flexible business strategy and quality products,
            the company signed many long-term contracts with distribution partners
            in these markets. Notably, this year, the company successfully
            exported 100,000 tons of rice to the U.S. market, one of the most
            demanding markets in terms of quality requirements.
            </p>
            <img
            src={Image1}
            alt="About Us Image 1"
            className="w-full h-auto mb-4 rounded-lg"
            />
            <p className="text-lg text-gray-700 mb-4 font-semibold">
            With the motto: The Essence in Every Grain of Rice the company is
            committed to providing customers with products that meet high-quality
            and safety standards. We apply a closed production and packaging
            process, along with competitive pricing compared to our competitors.
            </p>
            <p className="text-lg text-gray-700 mb-4 font-semibold">
            Passion is the top priority for the company, and we always consider
            customer feedback to be valuable lessons for our development. This
            helps enhance the value, quality of products, services, and customer
            care.
            </p>
            <p className="text-lg text-gray-700 mb-4 font-semibold">
            Vision: To bring the greatest satisfaction to customers and establish
            the Vietnamese Rice brand in both domestic and international markets.”
            <br></br>
            Mission: To elevate the quality of Vietnamese rice to an international
            level, contributing to the sustainable development of agriculture and
            improving the lives of Vietnamese farmers.
            </p>
            <img
            src={Image2}
            alt="About Us Image 2"
            className="w-full h-auto mb-4 rounded-lg"
            />
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
            <span className="absolute bottom-12 right-0 font-medium text-sm p-1 mb-3 rounded-md shadow-md transition-opacity duration-300">
                Contact
            </span>
            )}
        </div>
        </div>
    );
};

export default AboutPage;

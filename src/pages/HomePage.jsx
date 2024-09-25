import ProductList from "../components/ProductList";
import FacebookIcon from "../assets/icon_facebook.png";
import { useState } from "react";
import Image1 from "../assets/11.png";
import Image2 from "../assets/12.png";

const HomePage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
    ...prevData,
    [name]: value,
    }));
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
};
  return (
    <div className="flex flex-col items-center py-8 relative">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-8 uppercase" id="product">
        Product List
      </h2>
      <div className="w-full max-w-screen-lg px-4">
        <ProductList />
      </div>
      <h2 className="text-3xl font-bold text-center text-green-600 mb-8 uppercase" id="about">
        About Us
      </h2>
      <div className="max-w-3xl text-left mb-8">
        <p className="text-lg text-gray-700 mb-4 font-semibold text-justify">
          Vierice Quality Co., Ltd. was established on April 14, 2014. The
          English name is VIERICE QUALITY CO., LTD. Vierice Quality is not just
          a combination of the origin from Vietnam and the quality of rice
          products; it also reflects the company’s commitment to providing the
          highest quality rice products from Vietnam to friends around the
          world.
        </p>
        <p className="text-lg text-gray-700 mb-4 font-semibold text-justify">
          In early 2020, the company began exporting its first rice shipment to
          the promising new market of the Philippines. The company’s rice
          products quickly became popular among consumers in this country due to
          their delicious quality and competitive pricing.
        </p>
        <p className="text-lg text-gray-700 mb-4 font-semibold text-justify">
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
        <p className="text-lg text-gray-700 mb-4 font-semibold text-justify">
          With the motto: The Essence in Every Grain of Rice the company is
          committed to providing customers with products that meet high-quality
          and safety standards. We apply a closed production and packaging
          process, along with competitive pricing compared to our competitors.
        </p>
        <p className="text-lg text-gray-700 mb-4 font-semibold text-justify">
          Passion is the top priority for the company, and we always consider
          customer feedback to be valuable lessons for our development. This
          helps enhance the value, quality of products, services, and customer
          care.
        </p>

        <img
          src={Image2}
          alt="About Us Image 2"
          className="w-full h-auto mb-4 rounded-lg"
        />
        <p className="text-lg text-gray-700 mb-4 font-semibold text-justify">
          Vision: To bring the greatest satisfaction to customers and establish
          the Vietnamese Rice brand in both domestic and international markets.
        </p>
        <p className="text-lg text-gray-700 mb-4 font-semibold text-justify">
          Mission: To elevate the quality of Vietnamese rice to an international
          level, contributing to the sustainable development of agriculture and
          improving the lives of Vietnamese farmers.
        </p>
      </div>
      <h2 className="text-3xl font-bold text-center text-green-600 mb-8 uppercase" id="contact">
            Contact Us
        </h2>
        <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg"
        >
            <div className="mb-4">
            <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
            >
                Name
            </label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            </div>
            <div className="mb-4">
            <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
            >
                Email
            </label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            </div>
            <div className="mb-4">
            <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
            >
                Message
            </label>
            <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows="4"
            />
            </div>
            <div className="flex items-center justify-end">
            <button
                type="submit"
                className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Send Message
            </button>
            </div>
        </form>
        <p className="text-center text-gray-600 font-semibold">
            Or you can reach us at: <br />
            Email: viericequalityvn@gmail.com <br />
            Phone: +84 907 525 540
        </p>
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

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FacebookIcon from "../assets/icon_facebook.png";

const ContactPage = () => {
    const navigate = useNavigate();
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

export default ContactPage;

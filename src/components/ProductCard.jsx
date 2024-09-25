import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleContactClick = () => {
    navigate('/contact'); // Navigate to contact page on button click
  };

  return (
    <div className="border border-gray-200 p-4 rounded-lg shadow-lg shadow-green-200 hover:shadow-xl hover:shadow-green-300 transition-shadow duration-300 ease-in-out flex flex-col h-full">
      <div className="flex justify-center mb-4">
        <img
          src={product.img}
          alt={product.name}
          className="w-56 h-64 object-cover rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <h3 className="text-xl text-center font-bold text-gray-800 mb-2">
        {product.name}
      </h3>
      <p className="mb-2 text-xl font-semibold flex-grow overflow-hidden">
        Description Taste: <br />
        <span className="text-lg font-normal">{product.taste}</span>
      </p>
      <p className="mb-2 text-xl font-semibold flex-grow overflow-hidden">
        Shape and Color: <br />
        <span className="text-lg font-normal">{product.shapeandcolor}</span>
      </p>
      <div className="flex justify-end mt-4">
        <button 
          onClick={handleContactClick} 
          className="w-32 bg-green-600 text-white font-bold p-2 rounded-lg hover:bg-green-500 transition-colors duration-300 ease-in-out"
        >
          Contact
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    taste: PropTypes.string.isRequired,
    shapeandcolor: PropTypes.string.isRequired, 
  }).isRequired,
};

export default ProductCard;

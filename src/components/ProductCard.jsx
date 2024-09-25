import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
  return (
    <div className="border border-gray-200 p-4 rounded-lg shadow-lg shadow-green-200 hover:shadow-xl hover:shadow-green-300 transition-shadow duration-300 ease-in-out flex flex-col">
      <div className="flex justify-center mb-4">
        <img
          src={product.img}
          alt={product.name}
          className="w-56 h-64 object-cover rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <h3 className="text-xl text-center font-bold text-gray-800 mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-2 text-lg font-semibold flex-grow overflow-hidden">Description: {product.description}</p>
      <p className="text-green-600 font-bold mb-4 text-lg">Giá: {product.price.toLocaleString()} VND</p>
      <button className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-500 transition-colors duration-300 ease-in-out">
        Add to Cart
      </button>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;

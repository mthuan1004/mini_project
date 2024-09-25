import ProductList from '../components/ProductList';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center py-8">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-8 uppercase">Product List</h2>
      <div className="w-full max-w-screen-lg px-4">
        <ProductList />
      </div>
    </div>
  );
};

export default HomePage;

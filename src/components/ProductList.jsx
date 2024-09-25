import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Jasmine Rice', price: '50.000', description: 'Jasmine rice has a mild fragrance and long grains, perfect for gourmet dishes.', img: 'https://tvfood.com.vn/vnt_upload/product/09_2023/Jasmine_2.png' },
  { id: 2, name: 'Brown Rice', price: '60.000', description: 'Nutrient-rich brown rice.', img: 'https://sieuthigao.vn/wp-content/uploads/2013/08/gao-lut-do-co-may-tui-2-5-kg-hut-chan-khong.png' },
  { id: 3, name: 'Nang Hoa Rice', price: '55.000', description: 'Long, uniform-colored grains with a natural fragrance when cooked.', img: 'https://vuagaovn.com/upload/1/products/l_1570623492_go_nang_hoa_1.png' },
  { id: 4, name: 'Thom Lai Rice', price: '40.000', description: 'Long, white grains with a mild aroma, soft and slightly sticky when cooked, with a sweet aftertaste.', img: 'https://vuagaovn.com/upload/1/products/l_128401299_go_thm_lai_2.png' },
  { id: 5, name: 'ST25 Krong Ana Rice', price: '70.000', description: 'Long, uniform grains with a soft texture, sweet aftertaste, and remains sticky even when cooled.', img: 'https://vuagaovn.com/upload/1/products/l_1914010411_47c02766-04b7-4aa5-94be-1cab0f406ef8.png' },
  { id: 6, name: 'Tu Tam Rice', price: '60.000', description: 'Delicious and easy-to-eat rice suitable for most people.', img: 'https://vuagaovn.com/upload/1/products/l_1467376578_t-tm_1.png' },
];

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;

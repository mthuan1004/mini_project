import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Gạo Jasmine', price: '50.000', description: 'Gạo Jasmine có hương thơm nhẹ và hạt gạo dài, phù hợp cho các món ăn cao cấp.', img: 'https://tvfood.com.vn/vnt_upload/product/09_2023/Jasmine_2.png' },
  { id: 2, name: 'Gạo Lứt', price: '60.000', description: 'Gạo lứt dinh dưỡng', img: 'https://sieuthigao.vn/wp-content/uploads/2013/08/gao-lut-do-co-may-tui-2-5-kg-hut-chan-khong.png' },
  { id: 3, name: 'Gạo Nàng Hoa', price: '55.000', description: 'Hạt gạo dài, màu đồng nhất, khi nấu có hương thơm tự nhiên.', img: 'https://vuagaovn.com/upload/1/products/l_1570623492_go_nang_hoa_1.png'},
  { id: 4, name: 'Gạo Thơm Lài', price: '40.000', description: 'Hạt gạo thon dài, trắng đồng đều, cơm chín hạt mềm, dẻo vừa và thơm nhẹ, khi nhai có vị ngọt hậu.', img: 'https://vuagaovn.com/upload/1/products/l_128401299_go_thm_lai_2.png'},
  { id: 5, name: 'Gạo ST25 Krông Ana', price: '70.000', description: 'Hạt gạo thon dài, đều màu, mềm cơm, khi nhai vị ngọt hậu, để nguội vẫn giữ được độ dẻo.', img: 'https://vuagaovn.com/upload/1/products/l_1914010411_47c02766-04b7-4aa5-94be-1cab0f406ef8.png'},
  { id: 6, name: 'Gạo Từ Tâm', price: '60.000', description: 'Gạo ngon, dễ ăn, thích hợp với đa phần mọi người.', img: 'https://vuagaovn.com/upload/1/products/l_1467376578_t-tm_1.png'},
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

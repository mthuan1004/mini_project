import ProductCard from "./ProductCard";
import Product1 from "../assets/1.png";
import Product2 from "../assets/2.png";
import Product3 from "../assets/3.png";
import Product4 from "../assets/4.png";
import Product5 from "../assets/5.png";


const products = [
  {
    id: 1,
    name: "Brown Rice",
    shapeandcolor:
      "Brown rice is a type of regular rice with a reddish-brown shell but white inside, and is quite sticky when cooked.",
    taste:
      "Brown rice is rich in fiber and antioxidants, many important vitamins and minerals. 100g of cooked brown rice provides 1.8g of fiber, antioxidants, vitamins and minerals,....",
    img: Product1,
  },
  {
    id: 2,
    name: "Fragrant Rice ST25",
    shapeandcolor:
      "Rice grains are long, slim and have a natural shine and clear white color..",
    taste:
      "ST25 rice has a gentle aroma, faintly smelling of pandan leaves or green rice, very characteristic. When cooked, the rice is soft, has a sweet taste and is not dry.",
    img: Product2,
  },
  {
    id: 3,
    name: "Fragrant rice RVT",
    shapeandcolor:
      "The rice grains are long and transparent, with an average grain length of 6.8mm.",
    taste:
      "RVT rice has a light fragrance, with a hint of jasmine. The rice is sweet, very sticky, the rice grains are sticky, and the rice is sticky when cooled.",
    img: Product3,
  },
  {
    id: 4,
    name: "Fragrant rice DT8",
    shapeandcolor:
      "Rice grains are long and transparent, not chalky.",
    taste:
      "After cooking, Dai Thom 8 rice has a mild fragrance, white rice grains, soft and sweet taste, not mushy, the rice is still sticky when cooled.",
    img: Product4,
  },
  {
    id: 5,
    name: "Glutinous rice",
    shapeandcolor:
      "Good sticky rice grains are large and even. The appearance is shiny, the rice is not broken or crumbly, has a yellow color and the rice grains have a characteristic aroma.",
    taste:
      "When cooked, sticky rice has a soft and sticky texture, forming a soft and sticky mass. Most types of sticky rice have a mild aroma when cooked, stimulating the taste buds.",
    img: Product5,
  },
];

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;

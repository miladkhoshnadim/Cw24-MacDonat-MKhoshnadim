import { Headers } from "./Headers";
import FoodCard from "./FoodCard/FoodCard";

const pruducts = [
  {
    id: 1,
    img: "../assets/img/hamburger.png",
    name: "همبرگر مخصوص",
    price: "10000",
  },
  {
    id: 2,
    img: "../assets/img/hamburger.png",
    name: "همبرگر مخصوص",
    price: "10000",
  },
  {
    id: 3,
    img: "../assets/img/hamburger.png",
    name: "همبرگر مخصوص",
    price: "10000",
  },
  {
    id: 2,
    img: "../assets/img/hamburger.png",
    name: "همبرگر مخصوص",
    price: "10000",
  },
  {
    id: 3,
    img: "../assets/img/hamburger.png",
    name: "همبرگر مخصوص",
    price: "10000",
  },
];

export const ProductSection = () => {
  return (
    <div className="ManProductSection">
      <Headers />
      <div className="SingleProductSection">
        {pruducts.map((item) => (
          <FoodCard item={item} />
        ))}
      </div>
    </div>
  );
};

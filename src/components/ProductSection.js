import { Headers } from "./Headers";
import FoodCard from "./FoodCard/FoodCard";

const pruducts = [
  {
    id: 1,
    img: "../../assets/img/hamburger.png",
    name: "همبرگر مخصوص",
    price: "52500",
  },
  {
    id: 2,
    img: "../../assets/img/hamburger.png",
    name: " همبرگر مخصوص و ویژه",
    price: "55000",
  },
  {
    id: 3,
    img: "../assets/img/french_fries.png",
    name: "سیب زمینی سرخ شده",
    price: "35000",
  },
  {
    id: 4,
    img: "../assets/img/ceasar.png",
    name: "سالاد سزار",
    price: "40000",
  },
  {
    id: 5,
    img: "../assets/img/salad.png",
    name: "سالاد کاهو ویژه",
    price: "20000",
  },
  {
    id: 6,
    img: "../assets/img/soda.png",
    name: "نوشابه مخصوص",
    price: "10000",
  },
];

export const ProductSection = ({ setTotPrice, totPrice }) => {
  return (
    <div className="ManProductSection">
      <Headers />
      <div className="SingleProductSection">
        {pruducts.map((item) => (
          <FoodCard item={item} setTotPrice={setTotPrice} totPrice={totPrice} />
        ))}
      </div>
    </div>
  );
};

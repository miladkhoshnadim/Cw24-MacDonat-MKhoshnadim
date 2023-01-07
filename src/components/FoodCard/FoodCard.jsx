import Counter from "../Counter/counter";
import hamber from "../../assets/img/hamburger.png";
import { useEffect, useState } from "react";

const FoodCard = ({ item, setTotPrice, totPrice }) => {
  const [count, setCount] = useState(0);
  const TotalSinglePrice = count * item.price;
  let ArrayObject = totPrice;

  useEffect(() => {
    const index = ArrayObject.findIndex((old) => old.price === item.price);
    // console.log("index", index);
    if (index>-1) {
      ArrayObject[index].Counter = count;
    } else {
      ArrayObject.push({
        price: item.price,
        Counter: count,
        name: `${item.name}`,
      });
    }

    // console.log("newArray", ArrayObject);
    setTotPrice(ArrayObject);
  }, [count]);

  return (
    <div className="SingleProduct">
      <div>
        {" "}
        <img className="imageProduct" src={hamber} />
      </div>
      <div className="ExplainNamePriceDiv">
        <span className="HeadSingleCard">{item.name}</span>

        <span> تومان{item.price}</span>
        <div className="PriceSection">
          <Counter count={count} setCount={setCount} />
          <span> {TotalSinglePrice}</span>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

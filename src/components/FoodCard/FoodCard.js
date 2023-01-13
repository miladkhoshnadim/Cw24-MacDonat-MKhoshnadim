import Counter from "../Counter/counter";
import hamber from "../../assets/img/hamburger.png";
import { useContext, useEffect, useState } from "react";
import { FactorInfoContext } from "../UseContext";

const FoodCard = ({ item }) => {
  const inFormationFactor = useContext(FactorInfoContext);
  const [count, setCount] = useState(0);
  const TotalSinglePrice = count * item.price;
  let ArrayObject = inFormationFactor.totPrice;

  useEffect(() => {
    const index = ArrayObject.findIndex((old) => old.price === item.price);
    // console.log("index", index);
    if (index > -1 && count > 0) {
      ArrayObject[index].Counter = count;
    } else if (count > 0) {
      ArrayObject.push({
        price: item.price,
        Counter: count,
        name: `${item.name}`,
      });
    }

    // console.log("newArray", ArrayObject);
    inFormationFactor.setTotPrice(ArrayObject);
  }, [ArrayObject,count,inFormationFactor,item.name,item.price]);

  return (
    <div className="SingleProduct">
      <div>
        {" "}
        <img alt="" className="imageProduct" src={hamber} />
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

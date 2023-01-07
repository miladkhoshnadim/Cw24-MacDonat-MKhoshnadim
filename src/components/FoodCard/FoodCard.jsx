import Counter from "../Counter/counter";
import hamber from "../../assets/img/hamburger.png";

const FoodCard = ({ item }) => {
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
        <Counter />
        <span> 0</span>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

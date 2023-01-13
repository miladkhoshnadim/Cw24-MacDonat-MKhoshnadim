import { useContext, useEffect, useState } from "react";
import { FactorInfoContext } from "./UseContext";

export const FactorSection = () => {
  const inFormationFactor = useContext(FactorInfoContext);
  // console.log("incomeFactor", inFormationFactor.totPrice);
  const newInformationFactoe = [...inFormationFactor.totPrice];
  const [Factor, setFactor] = useState({ Order: 0, Khadamat: 0, Off: 0 });
  let SumOrder = 0;
  let SumKhadamat = 0;
  useEffect(() => {
    // console.log("incomFactorUseEffect", inFormationFactor.totPrice);
    newInformationFactoe.forEach((element) => {
      SumOrder = SumOrder + element.price * element.Counter;
      SumKhadamat = SumKhadamat + 1500 * element.Counter;
    });
    setFactor({ Order: `${SumOrder}`, Khadamat: `${SumKhadamat}`, Off: 0 });
  }, [newInformationFactoe]);

  return (
    <div className="FactorSection">
      <div className="SumationFactor">
        <span>{Factor.Order} تومان</span>
        <span>جمع کل سفارشات</span>
      </div>
      <div className="SumationFactor">
        <span>{Factor.Khadamat} تومان</span>
        <span>حق سرویس و کارمزد</span>
      </div>
      <div className="SumationFactor">
        <span>0 درصد</span>
        <span>درصد تخفیف</span>
      </div>
      <div className="CodeOffFactor">
        <input className="InputFactor" placeholder="کد تخفیف" />
        <span className="TicOffFactor">🗸</span>
      </div>
      <div className="finalPrice">
        <span>{+Factor.Order + +Factor.Khadamat} تومان</span>
        <span>مبلغ قابل پرداخت</span>
      </div>
      <div className="SubmitOrder">ثبت سفارش</div>
    </div>
  );
};

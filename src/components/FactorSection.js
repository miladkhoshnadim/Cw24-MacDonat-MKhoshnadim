export const FactorSection = () => {
  return (
    <div className="FactorSection">
      <div className="SumationFactor">
        <span>10000 تومان</span>
        <span>جمع کل سفارشات</span>
      </div>
      <div className="SumationFactor">
        <span>500 تومان</span>
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
      <div className="SumationFactor">
        <span>105000 تومان</span>
        <span>مبلغ قابل پرداخت</span>
      </div>
      <div className="SumationFactor">ثبت سفارش</div>
    </div>
  );
};

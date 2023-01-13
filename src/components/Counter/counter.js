

const Counter = ({count, setCount}) => {
  
  function handelMaines() {
    if (count < 1) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  }

  return (
    <div className="counterSection">
      <button className="PluseBottom" onClick={() => setCount(count + 1)}>
        +
      </button>
      <div className="CounterShow"> {count}</div>
      <button className="PluseBottom" onClick={handelMaines}>
        -
      </button>
    </div>
  );
};
export default Counter;

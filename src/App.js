import { useState } from "react";
import "./App.css";
import { FactorSection } from "./components/FactorSection";
import { ProductSection } from "./components/ProductSection";

function App() {
  const [totPrice, setTotPrice] = useState([]);
  return (
    <div className="mainBody">
      <FactorSection totPrice={totPrice} />
      <ProductSection setTotPrice={setTotPrice} totPrice={totPrice} />
    </div>
  );
}

export default App;

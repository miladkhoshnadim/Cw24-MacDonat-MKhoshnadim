import { useState } from "react";
import "./App.css";
import { FactorSection } from "./components/FactorSection";
import { ProductSection } from "./components/ProductSection";
import { FactorInfoContext } from "./components/UseContext";

function App() {
  const [totPrice, setTotPrice] = useState([]);
  return (
    <FactorInfoContext.Provider value={{ setTotPrice, totPrice }}>
      <div className="mainBody">
        <FactorSection />
        <ProductSection />
      </div>
    </FactorInfoContext.Provider>
  );
}

export default App;

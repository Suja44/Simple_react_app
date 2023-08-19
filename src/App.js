import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart";
import Shop from "./Pages/shop/Shop";
import { ShopContextProvider } from "./Context/shopContextProvider";
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<ShoppingCart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;

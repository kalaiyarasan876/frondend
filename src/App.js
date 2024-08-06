import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="App">
      <div>
        <Router>
          <div>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
            <Header cartItems={cartItems} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Home />} />
              <Route path="/product/:id"  element={<ProductDetail cartItems={cartItems} setCartItems={setCartItems}  /> }/>
              <Route path="/cart" element={ <Cart cartItems={cartItems} setCartItems={setCartItems}/> }/>
            </Routes>
            <Footer />
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;

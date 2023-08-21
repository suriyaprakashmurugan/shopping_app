import React, { createContext, useEffect, useReducer, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useWindowDimensions from "./components/hooks/useWidowsDimentions";
import "./style.css";
import Home from "./pages/home/home";
import Cart from "./pages/cart/cart";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Edit from "./pages/edit/edit";
import Dashboard from "./pages/dashboard/dashboard";
import AddProduct from "./pages/add/add";
import ProductPage from "./pages/product/products"
import Signup from "./components/signup/signup";
import Registerpage from "./pages/login/registerpage";
import LoginPage from "./pages/login/loginpage";

export const ProductsContext = createContext();

// const initialState = electronics;

// const reducer = (state, action) => {
//   switch (action) {
//     case "Electronics":
//       return electronics;
//     case "Grocery":
//       return grocery;
//     default:
//       return state;
//   }
// };

function App() {
  const { height, width } = useWindowDimensions();
  // const [pro, dispatch] = useReducer(reducer, initialState);
  // const [itemDetails, setItemDetails] = useState([]);
  const contextValues = { width };
  return (
    <ProductsContext.Provider value={contextValues}>
      <div className="page">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/signin" element={<LoginPage/>}></Route>
            <Route exact path="/register" element={<Registerpage/>}></Route>
            <Route exact path="/home" element={<Home/>}></Route>
            <Route exact path="/cart" element={<Cart/>}></Route>
            <Route exact path="/edit/:id" element={<Edit/>}></Route>
            <Route exact path="/dashborad" element={<Dashboard/>}></Route>
            <Route exact path="/product/:category" element={<ProductPage/>}></Route>
            <Route exact path="/add" element={<AddProduct/>}></Route>
          </Routes>
          <Footer />
        </Router>
      </div>
    </ProductsContext.Provider>
  );
}

export default App;

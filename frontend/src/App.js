import React, { createContext, useEffect, useReducer, useState } from "react";
import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Cart from "./pages/cart/cart";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import useWindowDimensions from "./components/hooks/useWidowsDimentions";
import { electronics, grocery } from "./components/products/productList";
import Edit from "./pages/edit/edit";
import Dashboard from "./pages/dashboard/dashboard";
import AddProduct from "./pages/add/add";

export const ProductsContext = createContext();

const initialState = electronics;

const reducer = (state, action) => {
  switch (action) {
    case "Electronics":
      return electronics;
    case "Grocery":
      return grocery;
    default:
      return state;
  }
};

function App() {
  const { height, width } = useWindowDimensions();
  const [pro, dispatch] = useReducer(reducer, initialState);
  const [itemDetails, setItemDetails] = useState([]);
  const contextValues = { pro, dispatch, width,itemDetails, setItemDetails };
  return (
    <ProductsContext.Provider value={contextValues}>
      <div className="page">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/cart" element={<Cart/>}></Route>
            <Route exact path="/edit/:id" element={<Edit/>}></Route>
            <Route exact path="/dashborad" element={<Dashboard/>}></Route>
            <Route exact path="/add" element={<AddProduct/>}></Route>
          </Routes>
          <Footer />
        </Router>
      </div>
    </ProductsContext.Provider>
  );
}

export default App;

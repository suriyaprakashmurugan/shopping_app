import React, { useState, useContext, useEffect } from "react";
import { ProductsContext } from "../../App";
import axios from "axios";

const WishList = () => {
  const { userAuth, setUserAuth } = useContext(ProductsContext);
  const userId = userAuth;

  useEffect(() => {
    const wishListData = async () => {
      try {
        const val = await axios.post("http://localhost:8080/wishlist", userId);
        console.log(JSON.parse(val.data[0]));
      } catch (error) {
        console.log(error);
      }
    };
    wishListData();
  });

  return <div>hello</div>;
};

export default WishList;

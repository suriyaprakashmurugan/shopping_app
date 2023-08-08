import React, { useContext, useState, useEffect } from "react";
import "./product.css";
import axios from "axios";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8080/products");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container-fluid" style={{ backgroundColor: "white" }}>
      <div className="container row my-3 mx-auto">
        {data &&
          data.map((item) => {
            return (
              <div className="col-3">
                <div
                  class="card pro_card my-3"
                  style={{ width: "240px", cursor: "pointer" }}
                  key={item.productid}
                >
                  <img
                    src={item.img}
                    className="card-img-top pro_Img "
                    alt="..."
                  />
                  <div class="card-body" style={{ padding: "5px 16px" }}>
                    <p
                      class="card-title pro-title"
                    >
                      {item.productName}
                    </p>
                    <span className="badge bg-secondary rounded p-1 bg-warning">
                      {item.rating} <i class="fa-solid fa-star"></i>
                    </span>
                    <br />
                    <h5 className="rate">${item.rate}<small className="text-success"> {item.discount}%off</small></h5>
                  </div>
                  <button
                    className="btn m-2"
                    style={{
                      backgroundColor: "#ff7b7b",
                    }}
                    onClick={() => {
                      "addToCart(item)";
                    }}
                  >
                    Add Item
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Products;

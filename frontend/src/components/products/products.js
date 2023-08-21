import React, { useContext, useState, useEffect } from "react";
import "./product.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const cate = location.pathname.split("/")[2];

  useEffect(() => {
    handleGetProducts();
  }, []);

  const handleGetProducts = async () => {
    try {
      const res = await axios.post("http://localhost:8080/products/" + cate);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-fluid p-0" style={{ backgroundColor: "white" }}>
      <div className="cate-details p-3">
        <span className="fs-5 fw-bold text-secondary text-uppercase">
          {cate}
        </span>
        <br />
        <span className="fs-6 fw-bold text-secondary text-uppercase">
          Collection - {data.length}
        </span>
        <br />
        <br />
      </div>
      <div className="row my-3 mx-auto">
        <div className="col-2 pro-filter">
        <span className="fs-6 fw-bold text-secondary text-uppercase">
          FILTERS
        </span>
          <div className="pt-3">
            <span>CATEGORY</span>
            <br />
            <ul className="filter-cate">
              <li className="pt-2 d-flex align-middle"><input type="radio" value="analog"/> Analog</li>
              <li className="pt-2 d-flex align-middle"><input type="radio" value="analog"/> Smart Watch</li>
              <li className="pt-2 d-flex align-middle"><input type="radio" value="analog"/> Fitness Bands</li>
            </ul>
          </div>
          <div>
          <span>PRICE</span>
          <br />
          <ul className="filter-cate">
            <li className="pt-2 d-flex align-middle"><input type="checkbox" value="1000"/> below 1000</li>
            <li className="pt-2 d-flex align-middle"><input type="checkbox" value="1000"/> 1000-2000</li>
            <li className="pt-2 d-flex align-middle"><input type="checkbox" value="1000"/> 2000-3000</li>
            <li className="pt-2 d-flex align-middle"><input type="checkbox" value="1000"/> above 3000</li>
          </ul>
          </div>
          <div>
          <span>COLOR</span>
          <br />
          <ul className="filter-cate">
            <li className="pt-2 d-flex align-middle"><input type="radio" value="analog"/> Black</li>
            <li className="pt-2 d-flex align-middle"><input type="radio" value="analog"/> Red</li>
            <li className="pt-2 d-flex align-middle"><input type="radio" value="analog"/> Yellow</li>
            <li className="pt-2 d-flex align-middle"><input type="radio" value="analog"/> White</li>
            <li className="pt-2 d-flex align-middle"><input type="radio" value="analog"/> Blue</li>
            <li className="pt-2 d-flex align-middle"><input type="radio" value="analog"/> Gold</li>
          </ul>
          </div>
        </div>
        <div className="col-10 row pro">
          {data &&
            data.map((item) => {
              return (
                <div className="col-3">
                  <div
                    class="card pro_card my-3"
                    style={{ width: "200px", cursor: "pointer" }}
                    key={item.productid}
                  >
                    <img
                      src={`http://localhost:8080/${item.img}`}
                      className="card-img-top pro_Img "
                      alt="..."
                    />
                    <div class="card-body" style={{ padding: "5px 16px" }}>
                      <p class="card-title pro-title">{item.productName}</p>
                      <span className="badge bg-secondary rounded p-1 bg-warning">
                        {item.rating} <i class="fa-solid fa-star"></i>
                      </span>
                      <br />
                      <h5 className="rate">
                        Rs.{item.rate}
                        <small className="text-success">
                          {" "}
                          ({item.discount}%off)
                        </small>
                      </h5>
                    </div>
                    <button
                      className="btn m-2 text-light"
                      style={{
                        backgroundColor: "#ff7b7b",
                      }}
                      onClick={() => {
                        "addToCart(item)";
                      }}
                    >
                      Add to wishlist
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Products;

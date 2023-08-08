import React, { useContext, useEffect, useState } from "react";
import "./content.css";
import { ProductsContext } from "../../App";
import axios from "axios";

function Content() {
  const { dispatch, width } = useContext(ProductsContext);
  const [banner, setBanner] = useState([]);

  const categories = [
    {
      name: "Electronics",
      img: "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
    },
    {
      name: "Grocery",
      img: "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
    },
    {
      name: "Mobiles",
      img: "https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
    },
    {
      name: "Fasion",
      img: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100",
    },
    {
      name: "Home & Furniture",
      img: "https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100",
    },
    {
      name: "Appliances",
      img: "https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100",
    },
  ];
  const handleGetProducts = async (cate) => {
    try {
      const res = await axios.post("http://localhost:8080/products/" + cate);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const handleSetBanner = async () => {
      try {
        const ban = await axios.get("http://localhost:8080/panners");
        setBanner(ban.data);
      } catch (error) {
        console.log(error);
      }
    };
    handleSetBanner();
  }, []);
  return (
    <>
      <div className="content-top container-fluid">
        {width > "992" ? (
          <div className="d-flex container justify-content-between pt-3 pb-5 mb-3">
            {categories &&
              categories.map((cate) => {
                return (
                  <div
                    class="card text-white text-center card_cate"
                    onClick={() => handleGetProducts(cate.name)}
                  >
                    <img src={cate.img} class="card-img" alt="..." />
                    <h6 class="card-title card_cate_title">{cate.name}</h6>
                  </div>
                );
              })}
          </div>
        ) : (
          <br />
        )}
      </div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide mx-auto banner"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            class="indBtn active"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            className="indBtn"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            className="indBtn"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          {banner &&
            banner.map((item) => {
              return (
                <div class="carousel-item active">
                  <img src={item.img} class="d-block w-100" alt="no 1" />
                  <span>{item.id}</span>
                </div>
              );
            })}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Content;

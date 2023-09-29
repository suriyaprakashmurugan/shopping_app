import React from "react";

const Modal = ({proDetails, setModal, addToCart}) => {
  return (
    <div>
      <div className="modalBack">
        <div className="myModal">
          <div className="">
            <img
              src={`http://localhost:8080/${proDetails.img}`}
              className="proDetailsImg"
              alt=""
            />
          </div>
          <div className="px-3 py-4 w-100">
            <div className="d-flex justify-content-between">
              <span className="fs-3 text-secondary fw-bold">
                {proDetails.productName}
              </span>
              <button
                className="btn-close"
                type="button"
                onClick={() => setModal(false)}
              ></button>
            </div>
            <div>
              <span className="badge bg-secondary rounded p-1 bg-warning">
                {proDetails.rating} <i class="fa-solid fa-star"></i>
              </span>
              <br />
              <h5 className="rate">
                Rs.{proDetails.rate}
                <small className="text-success">
                  {" "}
                  ({proDetails.discount}%off)
                </small>
              </h5>
              <p>{proDetails.discription}</p>
            </div>
            <div className="modalBottom">
              <button
                className="btn m-2 text-light"
                style={{
                  backgroundColor: "#ff7b7b",
                }}
                onClick={() => {
                  addToCart(proDetails);
                }}
              >
                Add to wishlist
              </button>
              <button
                className="btn m-2 text-light"
                style={{
                  backgroundColor: "#ff7b7b",
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

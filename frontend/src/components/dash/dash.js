import React, { useState } from "react";
import axios from "axios";
import "./dash.css";
import { useNavigate, Link } from "react-router-dom";

const Dash = () => {
  const navigate = useNavigate();
  const [cate, setCate] = useState(null);
  const handleSelect = async (e) => {
    const cat = e.target.value;
    try {
      const { data } = await axios.post(
        "http://localhost:8080/products/" + cat
      );
      setCate(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit=(id)=>{
    navigate(`/edit/${id}`)
  }

  const handleDelete = async(id)=>{
    try {
        await axios.delete("http://localhost:8080/dashborad/" + id);
        // window.location.reload();
        // handleSelect()
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div>
      <div className="container p-5 bg-light">
        <div className="row align-middle">
          <div className="col-1 text-end">
            <label className="">Category</label>
          </div>
          <div className="col-6">
            <select
              class="form-select"
              aria-label="Default select example"
              onChange={(e) => handleSelect(e)}
            >
              <option selected className="text-info">
                Open this select Category
              </option>
              <option value="electronics">Electronics</option>
              <option value="grocery">Grocery</option>
              <option value="mobile">Mobiles</option>
            </select>
          </div>
          <div className="col-5 d-flex justify-content-end">
            <button className="btn btn-primary ">
              <Link className="text-light text-decoration-none" to={"/add"}>
                Add Product
              </Link>
            </button>
          </div>
        </div>
        <table class="table table-bordered border-secondary mt-5 table-hover">
          <thead>
            <tr>
              <th scope="col">Product Id</th>
              <th scope="col">Product Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {cate &&
              cate.map((item) => {
                return (
                  <tr>
                    <td>{item.productid}</td>
                    <td>{item.productName}</td>
                    <td className="d-flex justify-content-center">
                      <button className="btn btn-success mx-2" onClick={()=>handleEdit(item.productid)}>
                        <i class="fa-solid fa-pen-to-square"></i>
                      </button>
                      <button className="btn btn-danger mx-2" onClick={()=>handleDelete(item.productid)}>
                        <i class="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dash;

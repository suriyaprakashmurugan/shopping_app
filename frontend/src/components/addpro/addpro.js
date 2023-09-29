import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Upload from "../upload/upload";
import axios from "axios";

const AddPro = ({ isEdit }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = parseInt(location.pathname.split("/")[2]);
  const [edited, setEdited] = useState(null);
  const [upImage, setUpImage] = useState("");
  const [product, setProduct] = useState({
    productName: "",
    img: "",
    count: null,
    category: "",
    discription: "",
    rating: null,
    rate: null,
    discount: null,
  });

  const handleChange = (e) => {
    if (isEdit) {
      setEdited((pre) => ({ ...pre, [e.target.name]: e.target.value }));
    }
    setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEdit) {
      edited.img = upImage;
      try {
        const res = await axios.put("http://localhost:8080/edit/" + id, edited);
        if (res.data === "updated successfully") {
          setEdited({
            productName: "",
            img: "",
            count: null,
            category: "",
            discription: "",
            rating: null,
            rate: null,
            discount: null,
          });
          navigate('/dashborad')
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      product.img = upImage;
      try {
        await axios.post("http://localhost:8080/add", product);
      } catch (error) {
        console.log(error);
      }
      navigate('/dashborad')
    }
  };

  useEffect(() => {
    if (isEdit) {
      getEditData();
    }
  }, []);

  const getEditData = async () => {
    try {
      const res = await axios.post("http://localhost:8080/edit/" + id);
      setEdited(res.data[0]);
      setUpImage(res.data[0].img);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container card my-5">
      {isEdit ? (
        <h4 className="py-3">Edit Product</h4>
      ) : (
        <h4 className="py-3">Add Product</h4>
      )}
      <form
        class="row g-3 needs-validation"
        onSubmit={(e) => handleSubmit(e)}
        encType="multipart/form-data"
      >
        <div class="col-md-6">
          <label class="form-label">Product name</label>
          <input
            value={edited?.productName}
            type="text"
            class="form-control"
            name="productName"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div class="col-md-6">
          <Upload setImage={setUpImage} editImage={upImage} fieldName={"img"} />
        </div>
        <div class="col-md-6">
          <label class="form-label">Category</label>
          <input
            value={edited?.category}
            type="text"
            class="form-control"
            name="category"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div class="col-md-6">
          <label class="form-label">Discription</label>
          <input
            value={edited?.discription}
            type="text"
            class="form-control"
            name="discription"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div class="col-md-3">
          <label class="form-label">Rating</label>
          <input
            value={edited?.rating}
            type="number"
            class="form-control"
            name="rating"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div class="col-md-3">
          <label class="form-label">Rate</label>
          <input
            value={edited?.rate}
            type="number"
            class="form-control"
            name="rate"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div class="col-md-3">
          <label class="form-label">Discount</label>
          <input
            value={edited?.discount}
            type="number"
            class="form-control"
            name="discount"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div class="col-md-3">
          <label class="form-label">No of Items</label>
          <input
            value={edited?.count}
            type="number"
            class="form-control"
            name="count"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div class="col-4 offset-8 d-flex justify-content-end">
          <button class="btn btn-primary me-3 w-25 my-2" type="submit">
            {isEdit ? "Ok" : "Add"}
          </button>
          <button class="btn btn-primary w-25 my-2" type="reset">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPro;

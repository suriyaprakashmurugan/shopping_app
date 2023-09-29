import React from "react";
import axios from "axios";

const Upload = ({ setImage, editImage }) => {
  const uploadImage = async (x) => {
    let formData = new FormData();
    formData.append("image", x);
    try {
      const resPath = await axios.post(
        "http://localhost:8080/upload",
        formData
      );
      setImage(resPath.data.toString());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {editImage !== "" ? (
        <div className="d-flex justify-content-center">
            <img src={`http://localhost:8080/${editImage}`} style={{height:'70px'}} alt='image'/>
            <button className="btn" onClick={()=>setImage('')}><i class="fa-solid fa-trash text-danger fs-3"></i></button>
        </div>
      ) : (
        <div>
          <label class="form-label">Image URL</label>
          <input
            type="file"
            class="form-control"
            name="image"
            onChange={(e) => {
              uploadImage(e.target.files[0]);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Upload;

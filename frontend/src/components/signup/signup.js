import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./sign.css";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/signin", user).then((res) => {
        if (res.data.Login) {
          navigate("/home");
        } else {
          alert("Not user fount You have to register");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="sign">
      <div className="container w-25 py-5 signbg">
        <form onSubmit={(e) => handleLogin(e)}>
          <div class="text-center mb-3">
            <p>Sign in with:</p>
            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-facebook-f"></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-google"></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-twitter"></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-github"></i>
            </button>
          </div>

          <p class="text-center text-secoundary">- OR -</p>

          <div class="form-outline mb-3">
            <label class="form-label">Email or username</label>
            <input
              onChange={(e) => handleChange(e)}
              type="email"
              name="userName"
              class="form-control"
            />
          </div>

          <div class="form-outline mb-3">
            <label class="form-label">Password</label>
            <input
              onChange={(e) => handleChange(e)}
              type="password"
              name="userPassword"
              class="form-control"
            />
          </div>

          <div class="row mb-3">
            <div class="col-md-6 d-flex justify-content-center">
              <div class="form-check mb-3 mb-md-0">
                <input
                  onChange={(e) => handleChange(e)}
                  class="form-check-input"
                  type="checkbox"
                />
                <label class="form-check-label"> Remember me </label>
              </div>
            </div>

            <div class="col-md-6 d-flex justify-content-center">
              <Link href="#!">Forgot password?</Link>
            </div>
          </div>

          <button type="submit" class="btn btn-primary btn-block my-3">
            Sign in
          </button>

          <div class="text-center">
            <p>
              Not a member? <Link to="/register">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

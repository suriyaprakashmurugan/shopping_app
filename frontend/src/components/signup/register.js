import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigation = useNavigate();
  const [regUser, setRegUser] = useState({});
  const [conPassword, setConPassword] = useState("");
  const handleChange = (e) => {
    setRegUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    if (conPassword === regUser.userPassword) {
      try {
        const res = await axios.post("http://localhost:8080/register", regUser);
        if (res.data == "Registered successfully") {
          navigation("/signin");
        } else {
          alert(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Your password are not same");
    }
  };
  return (
    <div className="sign">
      <div className="container w-25 pt-5">
        <form onSubmit={(e) => handleRegister(e)}>
          <div class="text-center mb-3">
            <p>Sign up with:</p>
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

          <p class="text-center text-secondary">- OR -</p>

          <div class="form-outline mb-2">
            <label class="form-label" for="registerName">
              Name
            </label>
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              name="userName"
              class="form-control"
            />
          </div>

          <div class="form-outline mb-2">
            <label class="form-label" for="registerEmail">
              Email
            </label>
            <input
              onChange={(e) => handleChange(e)}
              type="email"
              name="userEmail"
              class="form-control"
            />
          </div>

          <div class="form-outline mb-2">
            <label class="form-label" for="registerPassword">
              Password
            </label>
            <input
              onChange={(e) => handleChange(e)}
              type="password"
              name="userPassword"
              class="form-control"
            />
          </div>

          <label class="form-label" for="registerRepeatPassword">
            Conform password
          </label>
          <div class="form-outline mb-2">
            <input
              onChange={(e) => setConPassword(e.target.value)}
              type="password"
              name="conformPassword"
              class="form-control"
            />
          </div>

          <div class="form-check d-flex justify-content-center mb-2">
            <input
              // onChange={(e)=>handleChange(e)}
              class="form-check-input me-2"
              type="checkbox"
              value=""
              id="registerCheck"
              // checked
            />
            <label class="form-check-label" for="registerCheck">
              I have read and agree to the terms
            </label>
          </div>

          <button type="submit" class="btn btn-primary btn-block mb-3 mt-3">
            Sign in
          </button>
          <div class="text-center">
            <p>
              Already a member? <Link to="/signin">signin</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

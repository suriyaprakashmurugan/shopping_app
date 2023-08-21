import React from "react";
import "./footer.css";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  return (
    <>
      {location.pathname == "/signin" ||
      location.pathname == "/register" ? null : (
        <div className="container-fluid footer">
          <div className="container footer_top">
            <div className="d-flex justify-content-around">
              <div className="">
                <span className="footer_head">ABOUT</span>
                <ul className="footer_list pt-2">
                  <li>Contact us</li>
                  <li>About us</li>
                  <li>Careers</li>
                  <li>Press</li>
                  <li>Wholesale</li>
                </ul>
              </div>
              <div className="">
                <span className="footer_head">HELP</span>
                <ul className="footer_list pt-2">
                  <li>Payment</li>
                  <li>Shipping</li>
                  <li>FAQ</li>
                  <li>Prepot</li>
                </ul>
              </div>
              <div className="">
                <span className="footer_head">Consumer Policy</span>
                <ul className="footer_list pt-2">
                  <li>Return Policy</li>
                  <li>Terms of use</li>
                  <li>Security</li>
                  <li>Privacy</li>
                  <li>Site map</li>
                </ul>
              </div>
              <hr />
              <div className="">
                <span className="footer_head">Mail us</span>
                <ul className="footer_list pt-2">
                  <li>Joy internet pvt</li>
                  <li>Komarapalyam</li>
                  <li>Namakkal</li>
                  <li>TamilNadu</li>
                  <li>Indian</li>
                </ul>
              </div>
              <div className="">
                <span className="footer_head">Registered Address</span>
                <ul className="footer_list pt-2">
                  <li>WhiteField</li>
                  <li>Nallur hulli ITPL</li>
                  <li>Bangalor urban</li>
                  <li>Karnataka</li>
                  <li>India</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container">
            <ul className="d-flex justify-content-around footer_soc">
              <li className="">
                <i class="fa-solid fa-user"> </i> Become Seller
              </li>
              <li className="">
                <i class="fa-solid fa-handshake-angle"> </i>Help Center
              </li>
              <li className="">
                <i class="fa-brands fa-facebook"></i>{" "}
                <i class="fa-brands fa-twitter"></i>
              </li>
              <li className="">
                <i class="fa-solid fa-gift"> </i>Gift Card
              </li>
              <li className="">
                <i class="fa-solid fa-shop"> </i>Joy.com
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;

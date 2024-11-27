import React from 'react'
import Foot from "../assets/Footimg.png"
import ActionBtn from './ActionBtn';
import { Link } from 'react-router-dom';
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { LuYoutube } from "react-icons/lu";


const Footer = () => {
  const quicklinks = [
    {
      id: 1,
      content: "Home",
      to: "/",
    },
    {
      id: 2,
      content: "Event",
      to: "/events",
    },
    {
      id: 3,
      content: "About",
      to: "/error",
    },
    {
      id: 4,
      content: "Contact",
      to: "/error",
    },
  ];
  return (
    <footer className="bg-dark py-5 text-white">
      <div className="container">
        <div>
          <img src={Foot} alt="img" />
        </div>
        <div className="row mt-4 justify-content-between">
          <div className="col-lg-4">
            <p>
              Stay connected and informed with our updates Subscribe to our
              newsletter for the latest updates on mental health tips, app
              features, and exclusive offers. Join our community to receive
              valuable insights and support right in your inbox
            </p>
            <form
              className="form-control d-flex mt-2"
              style={{ maxWidth: "434px" }}
            >
              <input
                type="email"
                placeholder="Email"
                className="border-0 form-control shadow-none "
              />
              <ActionBtn
                content="Subcribe"
                width="169px"
                type="submit"
                className="mybtn border-0"
              />
            </form>
          </div>
          <div className="col-lg-3">
            <h3 className="mb-2 mt-3 mt-lg-0 fs-3"> Quick Links</h3>
            <div className="d-flex flex-column gap-3">
              {quicklinks.map((link) => {
                return (
                  <Link
                    key={link.id}
                    to={link.to}
                    className="text-white text-decoration-none"
                  >
                    {link.content}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="col-lg-3">
            <h3 className="mb-2 mt-3 mt-lg-0 fs-3">Socials</h3>
            <div className='d-flex gap-3 fs-5'>
              <FiFacebook />
              <FaInstagram />
              <FiTwitter />
              <LuYoutube />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
import React, { useState } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import Head from "../assets/Head.png";
import { Link, useLocation } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { links } from "../data";
import ActionBtn from "./ActionBtn";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import UserProfileMenu from "./UserProfileMenu";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showMenu, setShowMenu]=useState(false)

  return (
    <header className="header  position-sticky top-0">
      <Navbar expand="lg" className="bg-white py3">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img src={Head} alt="" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-lg-flex gap-2 gap-lg-5 links">
              {links.map((link) => {
                return (
                  <Link
                    to={link.to}
                    key={link.id}
                    className={
                      location.pathname === link.to
                        ? "fs-5 nav-link fw-medium mylinks action"
                        : "fs-5 nav-link fw-medium mylinks"
                    }
                  >
                    {link.content}
                  </Link>
                );
              })}
            </Nav>

            {isLoggedIn ? (
              <Nav className="ms-lg-auto d-flex flex-row gap-3 position-relative">
                <div className="rounded-circle profile d-flex align-items-center justify-content-center">
                  <h1>JD</h1>
                </div>
                <button
                  className="border-0 bg-transparent "
                  onClick={() => setShowMenu(!showMenu)}
                >
                  {showMenu ? (
                    <RiArrowDropUpLine size={28} />
                  ) : (
                    <RiArrowDropDownLine size={28} />
                  )}
                </button>
                {showMenu && (
                  <div
                    className="position-absolute"
                    style={{ top: "80px", left: "-10px" }}
                  >
                    <UserProfileMenu />
                  </div>
                )}
              </Nav>
            ) : (
              <Nav className="ms-auto d-lg-flex gap-3">
                <Link to="/register">
                  <ActionBtn
                    content="Sign up"
                    width="146px"
                    className="mybtn fs-5 fw-medium"
                  />
                </Link>

                <Link to="/login">
                  <Button
                    className="btn bg-transparent text-dark border-dark border-2 fs-5 fw-medium"
                    style={{ width: "146px", height: "50px" }}
                  >
                    Sign In
                  </Button>
                </Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

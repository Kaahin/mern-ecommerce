import axios from "axios";
import React, { useState, useEffect } from "react";
import { BsWindowSidebar } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles.js";

import {
  Nav,
  NavbarContainer,
  NavBtnIcon,
  NavBtnLink,
  NavLogo,
  NavIcon,
  HamburgerIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
} from "./Navbar.elements";


const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const [values, setValues] = useState({
    first: "",
    last: "",
    email: "",
    password: "",
  });


  useEffect(() => {
    axios
      .get("http://localhost:4000/user", { withCredentials: true })
      .then((response) => {
        setValues({
          ...values,
          email: response.data.email,
        });
        
      });
  }, []);

  return (
    <>
        <IconContext.Provider value={{ color: "#fff" }}>
          <Nav>
            <NavbarContainer>
              <NavLogo to="/">
                <NavIcon />
                Kaahin <br /> Dynamic
              </NavLogo>
              <HamburgerIcon onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
              </HamburgerIcon>
              <NavMenu onClick={handleClick} click={click}>
                <NavItem>
                  <NavLinks to="/">Home</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="/services">Services</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="/products">Products</NavLinks>
                </NavItem>
                <NavItemBtn>
                  {button ? (
                    <NavBtnLink to="/account">
                      <NavBtnIcon />
                    </NavBtnLink>
                  ) : (
                    <NavBtnLink to="/account">
                      {!values.email && (
                        <Button onClick={closeMobileMenu} fontBig primary>
                          Log in
                        </Button>
                      )}
                      {!!values.email && (
                        <Button onClick={closeMobileMenu} fontBig primary>
                          Account
                        </Button>
                      )}
                    </NavBtnLink>
                  )}
                </NavItemBtn>
              </NavMenu>
            </NavbarContainer>
          </Nav>
        </IconContext.Provider>
    </>
  );
};

export default Navbar;

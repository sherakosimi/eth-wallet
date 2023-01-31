import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle, auth }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const history = useNavigate();
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  async function handleLogout() {
    setError("");
    try {
      await logout();
    } catch {
      setError("Failed to log out");
    }
  }

  function handleSignIn() {
    history("/signin");
  }

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo
              onClick={toggleHome}
              style={{ textDecoration: "none" }}
              to="/"
            >
              EZ Wallet
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {auth ? "Transfer" : "About"}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="discover"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {auth ? "Transactions" : "Discover"}
                </NavLinks>
              </NavItem>

              {auth ? null : (
                <NavItem>
                  <NavLinks
                    to="signup"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    Sign Up
                  </NavLinks>
                </NavItem>
              )}
            </NavMenu>
            {auth ? (
              <NavBtn>
                <NavBtnLink onClick={handleLogout}>Log out</NavBtnLink>
              </NavBtn>
            ) : (
              <NavBtn>
                <NavBtnLink onClick={handleSignIn}>Sign In</NavBtnLink>
              </NavBtn>
            )}
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;

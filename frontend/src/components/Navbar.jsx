import React, { useState, useEffect } from "react";
import { data } from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FaUtensils, FaCalendarAlt } from "react-icons/fa";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setShow(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <Link to="heroSection" spy={true} smooth={true} duration={500} className="logo" onClick={closeMenu}>
          <span className="logo-icon">
            <FaUtensils />
          </span>
          <span className="logo-text">
            FUN<span className="logo-accent">FOOD</span>
          </span>
        </Link>

        <div className={`navLinks ${show ? "showmenu" : ""}`}>
          <div className="mobileHeader">
            <div className="logo mobileLogo">
              <FaUtensils className="logo-icon" />
              <span>FUN<span className="logo-accent">FOOD</span></span>
            </div>
            <button className="closeBtn" onClick={closeMenu} aria-label="Close menu">
              <IoClose />
            </button>
          </div>

          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                activeClass="active"
                key={element.id}
                onClick={closeMenu}
              >
                {element.title}
              </Link>
            ))}
          </div>

          <div className="navActions">
            <Link
              to="reservation"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              className="menuBtn"
              onClick={closeMenu}
            >
              <FaCalendarAlt className="btn-icon" />
              <span>BOOK TABLE</span>
            </Link>
          </div>
        </div>

        {show && <div className="navOverlay" onClick={closeMenu}></div>}

        <div
          className="hamburger"
          onClick={() => setShow(!show)}
          aria-label="Toggle navigation menu"
        >
          {show ? <IoClose /> : <GiHamburgerMenu />}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

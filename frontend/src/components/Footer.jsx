import React from "react";
import { Link } from "react-scroll";
import { FaUtensils, FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerGrid">
          <div className="footerCol brandCol">
            <div className="footerLogo">
              <FaUtensils className="logoIcon" />
              <span>FUN<span className="logoAccent">FOOD</span></span>
            </div>
            <p className="footerBio">
              Crafting unforgettable culinary memories since 2012. We serve the freshest authentic delicacies, artisanal desserts, and fine wine in an ambiance of pure luxury.
            </p>
            <div className="footerSocials">
              <a href="#heroSection" className="socialBtn" aria-label="Instagram"><FaInstagram /></a>
              <a href="#heroSection" className="socialBtn" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#heroSection" className="socialBtn" aria-label="Twitter"><FaTwitter /></a>
              <a href="#heroSection" className="socialBtn" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>

          <div className="footerCol linksCol">
            <h4 className="footerColTitle">Quick Links</h4>
            <ul className="footerLinksList">
              <li>
                <Link to="heroSection" spy={true} smooth={true} duration={500} offset={-80}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" spy={true} smooth={true} duration={500} offset={-80}>
                  About Our Restaurant
                </Link>
              </li>
              <li>
                <Link to="qualities" spy={true} smooth={true} duration={500} offset={-80}>
                  Our Services & Qualities
                </Link>
              </li>
              <li>
                <Link to="menu" spy={true} smooth={true} duration={500} offset={-80}>
                  Gourmet Menu
                </Link>
              </li>
              <li>
                <Link to="team" spy={true} smooth={true} duration={500} offset={-80}>
                  Culinary Team
                </Link>
              </li>
              <li>
                <Link to="testimonials" spy={true} smooth={true} duration={500} offset={-80}>
                  Guest Reviews
                </Link>
              </li>
              <li>
                <Link to="reservation" spy={true} smooth={true} duration={500} offset={-80}>
                  Table Reservation
                </Link>
              </li>
            </ul>
          </div>

          <div className="footerCol contactCol">
            <h4 className="footerColTitle">Contact & Hours</h4>
            <div className="contactItem">
              <FaMapMarkerAlt className="contactIcon" />
              <span>Model Town, Gourmet Street, Hoshiarpur, Punjab</span>
            </div>
            <div className="contactItem">
              <FaPhoneAlt className="contactIcon" />
              <span>+91 98765 43210 / +91 1882 234567</span>
            </div>
            <div className="contactItem">
              <FaEnvelope className="contactIcon" />
              <span>reservations@funfood.com</span>
            </div>
            <div className="contactItem">
              <FaClock className="contactIcon" />
              <span>Mon – Sun: 05:00 PM – 12:00 AM</span>
            </div>
          </div>
        </div>

        <div className="footerBottom">
          <p className="copyrightText">
            © {new Date().getFullYear()} Fun Food Restaurant. All Rights Reserved.
          </p>
          <p className="devCredit">
            Crafted with <FaHeart className="heartIcon" /> by <strong>Sukhjot Singh</strong>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
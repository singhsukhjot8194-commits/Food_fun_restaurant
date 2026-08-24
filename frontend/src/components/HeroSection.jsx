import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-scroll";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaUtensils, FaStar, FaFire, FaLeaf, FaClock } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="heroContainer">
        <div className="heroContent">
          <div className="heroBadge">
            <span className="badgeDot"></span>
            <span>Exquisite Culinary Experience</span>
          </div>

          <h1 className="heroTitle">
            Savor The Art of <span className="highlight">Delicious</span> Dishes & Dining
          </h1>

          <p className="heroSubtitle">
            Indulge in a symphony of authentic culinary masterpieces, prepared with the freshest organic ingredients, passion, and time-honored recipes.
          </p>

          <div className="heroActions">
            <Link
              to="reservation"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              className="btnPrimary"
            >
              <span>Book A Table</span>
              <HiOutlineArrowNarrowRight className="btnIcon" />
            </Link>

            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              className="btnSecondary"
            >
              <FaUtensils className="btnIconLeft" />
              <span>Explore Menu</span>
            </Link>
          </div>

          <div className="heroStats">
            <div className="statItem">
              <div className="statNumber">4.9<FaStar className="starIcon" /></div>
              <div className="statLabel">2,500+ Reviews</div>
            </div>
            <div className="statDivider"></div>
            <div className="statItem">
              <div className="statNumber">50+</div>
              <div className="statLabel">Signature Dishes</div>
            </div>
            <div className="statDivider"></div>
            <div className="statItem">
              <div className="statNumber">100%</div>
              <div className="statLabel">Fresh & Organic</div>
            </div>
          </div>
        </div>

        <div className="heroShowcase">
          <div className="showcaseWrapper">
            <div className="mainImageCard">
              <img src="/hero1.png" alt="Delicious Gourmet Dish" className="heroImgMain" />
              <div className="floatingBadge badgeTop">
                <FaFire className="floatingIcon fire" />
                <div>
                  <span className="floatingTitle">Chef's Special</span>
                  <span className="floatingSub">Daily Handcrafted</span>
                </div>
              </div>
              <div className="floatingBadge badgeBottom">
                <FaStar className="floatingIcon star" />
                <div>
                  <span className="floatingTitle">Top Rated</span>
                  <span className="floatingSub">4.9/5 Dining Score</span>
                </div>
              </div>
            </div>

            <div className="secondaryImageCard">
              <img src="/hero2.png" alt="Exquisite Dessert" className="heroImgSecondary" />
              <div className="quickDeliveryBadge">
                <FaClock className="floatingIcon clock" />
                <span>Fast Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

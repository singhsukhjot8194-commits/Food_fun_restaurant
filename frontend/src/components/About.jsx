import React from "react";
import { Link } from "react-scroll";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaCheckCircle, FaAward, FaUtensils } from "react-icons/fa";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="aboutContainer">
        <div className="aboutContent">
          <div className="sectionBadge">
            <FaAward className="badgeIcon" />
            <span>Our Heritage & Passion</span>
          </div>

          <h2 className="sectionTitle">
            A Culinary Journey Crafted With <span className="highlight">Love & Artistry</span>
          </h2>

          <p className="aboutLead">
            The only thing we are genuinely serious about is exquisite food and the memorable moments created around our tables.
          </p>

          <p className="aboutDescription">
            Founded with an enduring love for gastronomy, Fun Food combines centuries-old cooking techniques with modern culinary innovation. Every dish is a celebration of taste, crafted meticulously using hand-selected organic ingredients and seasonal produce.
          </p>

          <div className="aboutFeatures">
            <div className="featureItem">
              <FaCheckCircle className="checkIcon" />
              <span>100% Fresh & Locally Sourced Ingredients</span>
            </div>
            <div className="featureItem">
              <FaCheckCircle className="checkIcon" />
              <span>Internationally Trained Master Chefs</span>
            </div>
            <div className="featureItem">
              <FaCheckCircle className="checkIcon" />
              <span>Enchanting Ambiance & Cozy Dining Spaces</span>
            </div>
            <div className="featureItem">
              <FaCheckCircle className="checkIcon" />
              <span>Handcrafted Signature Recipes & Drinks</span>
            </div>
          </div>

          <div className="aboutActions">
            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              className="btnPrimary"
            >
              <span>Explore Our Menu</span>
              <HiOutlineArrowNarrowRight className="btnIcon" />
            </Link>
          </div>
        </div>

        <div className="aboutVisual">
          <div className="imageWrapper">
            <img src="/about.png" alt="Chef preparing gourmet meal" className="aboutImg" />
            <div className="experienceBadge">
              <div className="expNumber">15+</div>
              <div className="expText">
                <strong>Years Of</strong>
                <span>Culinary Mastery</span>
              </div>
            </div>
            <div className="decorativeShape"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

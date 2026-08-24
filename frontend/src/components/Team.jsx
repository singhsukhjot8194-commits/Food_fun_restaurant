import React from "react";
import { data } from "../restApi.json";
import { FaUserTie, FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Team = () => {
  return (
    <section className="team" id="team">
      <div className="teamContainer">
        <div className="sectionHeader textCenter">
          <div className="sectionBadge">
            <FaUserTie className="badgeIcon" />
            <span>Master Artisans</span>
          </div>
          <h2 className="sectionTitle">
            Meet Our <span className="highlight">Culinary Masters</span>
          </h2>
          <p className="sectionSubtitle">
            Our award-winning chefs blend passion, creativity, and years of world-class culinary expertise into every recipe.
          </p>
        </div>

        <div className="teamGrid">
          {data[0].team.map((element) => {
            return (
              <div className="chefCard" key={element.id}>
                <div className="chefImgWrapper">
                  <img src={element.image} alt={element.name} className="chefImg" />
                  <div className="socialOverlay">
                    <a href="#team" className="socialIcon" aria-label="Instagram"><FaInstagram /></a>
                    <a href="#team" className="socialIcon" aria-label="Twitter"><FaTwitter /></a>
                    <a href="#team" className="socialIcon" aria-label="LinkedIn"><FaLinkedinIn /></a>
                  </div>
                </div>
                <div className="chefInfo">
                  <h3 className="chefName">{element.name}</h3>
                  <span className="chefRole">{element.designation}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;

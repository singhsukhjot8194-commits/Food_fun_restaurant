import React from 'react';
import { data } from '../restApi.json';
import { FaHeart } from 'react-icons/fa';

const Qualities = () => {
  return (
    <section className="qualities" id="qualities">
      <div className="qualitiesContainer">
        <div className="sectionHeader textCenter">
          <div className="sectionBadge">
            <FaHeart className="badgeIcon" />
            <span>Why Choose Us</span>
          </div>
          <h2 className="sectionTitle">
            Our Core <span className="highlight">Commitment</span> & Qualities
          </h2>
          <p className="sectionSubtitle">
            Every dish we serve is backed by our passion for freshness, unrivaled taste, and seamless dining excellence.
          </p>
        </div>

        <div className="qualitiesGrid">
          {data[0].ourQualities.map((element) => {
            return (
              <div className="qualityCard" key={element.id}>
                <div className="cardIconWrapper">
                  <img src={element.image} alt={element.title} />
                </div>
                <h3 className="cardTitle">{element.title}</h3>
                <p className="cardDescription">{element.description}</p>
                <div className="cardAccentLine"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Qualities;

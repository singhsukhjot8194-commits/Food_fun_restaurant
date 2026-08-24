import React from 'react';
import { data } from '../restApi.json';
import { FaBuilding, FaUserTie, FaHistory, FaUtensils, FaChartLine } from 'react-icons/fa';

const WhoAreWe = () => {
  const iconList = [
    <FaBuilding className="statCardIcon" />,
    <FaUserTie className="statCardIcon" />,
    <FaHistory className="statCardIcon" />,
    <FaUtensils className="statCardIcon" />,
  ];

  return (
    <section className="who_are_we" id="who_are_we">
      <div className="whoAreWeContainer">
        <div className="sectionHeader textCenter lightText">
          <div className="sectionBadge badgeDark">
            <FaChartLine className="badgeIcon" />
            <span>Our Milestones</span>
          </div>
          <h2 className="sectionTitle titleLight">
            Decades of <span className="highlight">Culinary Trust</span> & Numbers
          </h2>
          <p className="sectionSubtitle subLight">
            Our numbers reflect the love, devotion, and high standards we pour into every plate and dining experience.
          </p>
        </div>

        <div className="milestonesWrapper">
          <div className="statsSide leftStats">
            {data[0].who_we_are.slice(0, 2).map((element, index) => (
              <div className="statCard" key={element.id}>
                <div className="statIconBox">{iconList[index]}</div>
                <h3 className="statCount">{element.number}<span>+</span></h3>
                <p className="statName">{element.title}</p>
              </div>
            ))}
          </div>

          <div className="milestoneImageCenter">
            <div className="imageGlowRing"></div>
            <img src="/whoweare.png" alt="Culinary Presentation" className="centerDishImg" />
          </div>

          <div className="statsSide rightStats">
            {data[0].who_we_are.slice(2).map((element, index) => (
              <div className="statCard" key={element.id}>
                <div className="statIconBox">{iconList[index + 2]}</div>
                <h3 className="statCount">{element.number}<span>+</span></h3>
                <p className="statName">{element.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;

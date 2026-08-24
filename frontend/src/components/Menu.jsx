import React, { useState } from 'react';
import { data } from '../restApi.json';
import { Link } from 'react-scroll';
import { FaUtensils, FaStar, FaCalendarCheck } from 'react-icons/fa';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Breakfast', 'Lunch', 'Dinner'];

  const allDishes = data[0].dishes;

  const filteredDishes =
    activeCategory === 'All'
      ? allDishes
      : allDishes.filter(
          (dish) => dish.category.toLowerCase() === activeCategory.toLowerCase()
        );

  const priceMap = {
    1: '$28.50',
    2: '$32.00',
    3: '$18.99',
    4: '$14.50',
    5: '$22.00',
    6: '$26.50',
    7: '$21.00',
    8: '$29.99',
  };

  return (
    <section className="menu" id="menu">
      <div className="menuContainer">
        <div className="sectionHeader textCenter">
          <div className="sectionBadge">
            <FaUtensils className="badgeIcon" />
            <span>Culinary Masterpieces</span>
          </div>
          <h2 className="sectionTitle">
            Explore Our <span className="highlight">Signature Dishes</span>
          </h2>
          <p className="sectionSubtitle">
            Handcrafted with passion, authentic spices, and the freshest ingredients to deliver an extraordinary dining sensation.
          </p>

          <div className="categoryTabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`tabBtn ${activeCategory === cat ? 'activeTab' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="dishesGrid">
          {filteredDishes.map((element) => (
            <div className="dishCard" key={element.id}>
              <div className="dishImgWrapper">
                <img src={element.image} alt={element.title} className="dishImg" />
                <span className="categoryBadge">{element.category}</span>
                <span className="priceBadge">{priceMap[element.id] || '$24.99'}</span>
              </div>
              <div className="dishInfo">
                <div className="dishRating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="starIcon" />
                  ))}
                  <span className="ratingText">5.0</span>
                </div>
                <h3 className="dishTitle">{element.title}</h3>
                <p className="dishDesc">
                  Prepared fresh daily with signature herbs and chef-selected gourmet ingredients.
                </p>
                <div className="dishFooter">
                  <Link
                    to="reservation"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="orderLink"
                  >
                    <FaCalendarCheck className="orderIcon" />
                    <span>Reserve For This</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;

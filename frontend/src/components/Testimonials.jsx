import React from "react";
import { data } from "../restApi.json";
import { FaStar, FaQuoteLeft, FaCommentDots } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = data[0].testimonials || [];

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonialsContainer">
        <div className="sectionHeader textCenter">
          <div className="sectionBadge">
            <FaCommentDots className="badgeIcon" />
            <span>Guest Experiences</span>
          </div>
          <h2 className="sectionTitle">
            Loved By <span className="highlight">Food Enthusiasts</span>
          </h2>
          <p className="sectionSubtitle">
            Read what our esteemed diners have to say about our flavors, service, and magical ambiance.
          </p>
        </div>

        <div className="testimonialsGrid">
          {testimonials.map((element) => (
            <div className="testimonialCard" key={element.id}>
              <div className="cardHeader">
                <div className="userAvatarWrapper">
                  <img src={element.image} alt={element.userName} className="userAvatar" />
                </div>
                <div className="userInfo">
                  <h3 className="userName">{element.userName}</h3>
                  <span className="userTag">{element.tag || "Verified Guest"}</span>
                </div>
                <FaQuoteLeft className="quoteIcon" />
              </div>

              <div className="ratingStars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="starIcon" />
                ))}
              </div>

              <p className="testimonialText">"{element.description}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

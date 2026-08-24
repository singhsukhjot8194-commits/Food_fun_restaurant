import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaCompass } from "react-icons/fa";

const NotFound = () => {
  return (
    <section className="statusPage">
      <div className="statusCard notFoundCard">
        <div className="notFoundImgWrapper">
          <img src="/notFound.svg" alt="404 Page Not Found" className="notFoundSvg" />
        </div>
        <div className="statusBadge warningBadge">
          <FaCompass />
          <span>Error 404 • Page Not Found</span>
        </div>
        <h1 className="statusTitle">Looks Like You've Wandered Off</h1>
        <p className="statusDescription">
          The page or dish you're searching for might have been moved, renamed, or is temporarily unavailable. Let's get you back to the feast!
        </p>
        <Link to={"/"} className="statusBtn">
          <span>Return To Restaurant Home</span>
          <HiOutlineArrowNarrowRight className="btnIcon" />
        </Link>
      </div>
    </section>
  );
};

export default NotFound;

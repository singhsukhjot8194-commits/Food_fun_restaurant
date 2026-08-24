import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaCheckCircle, FaCalendarCheck } from "react-icons/fa";

const Success = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setCountdown((preCount) => {
        if (preCount === 1) {
          clearInterval(timeoutId);
          navigate("/");
        }
        return preCount - 1;
      });
    }, 1000);
    return () => clearInterval(timeoutId);
  }, [navigate]);

  return (
    <section className="statusPage">
      <div className="statusCard">
        <div className="statusIconWrapper successGlow">
          <FaCheckCircle className="statusIcon" />
        </div>
        <div className="statusBadge successBadge">
          <FaCalendarCheck />
          <span>Booking Received</span>
        </div>
        <h1 className="statusTitle">Table Reserved Successfully!</h1>
        <p className="statusDescription">
          Thank you for choosing Fun Food Restaurant. A confirmation email with your reservation details has been sent. We look forward to welcoming you!
        </p>

        <div className="countdownBox">
          Redirecting to home in <span className="countdownTimer">{countdown}s</span>
        </div>

        <Link to={"/"} className="statusBtn">
          <span>Back to Home Immediately</span>
          <HiOutlineArrowNarrowRight className="btnIcon" />
        </Link>
      </div>
    </section>
  );
};

export default Success;
import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import {
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaCheckCircle,
  FaSpinner,
} from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// Uses environment variable in production, falls back to live Render backend or localhost
const SERVER_URL =
  import.meta.env.VITE_SERVER_URL ||
  "https://food-fun-restaurant-backend.onrender.com";

const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleReservation = async (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !phone || !date || !time) {
      toast.error("Please fill all required fields");
      return;
    }

    setLoading(true);
    try {
      const { data } = await axios.post(
        `${SERVER_URL}/api/v1/reservation/send`,
        { firstName, lastName, email, phone, date, time },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message || "Reservation confirmed!");
      setFirstName("");
      setLastName("");
      setPhone("");
      setEmail("");
      setTime("");
      setDate("");
      navigate("/success");
    } catch (error) {
      const errorMsg =
        error.response?.data?.message ||
        "Failed to submit reservation. Please try again.";
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="reservation" id="reservation">
      <div className="reservationContainer">
        <div className="reservationInfoSide">
          <div className="sectionBadge badgeDark">
            <FaCalendarAlt className="badgeIcon" />
            <span>Table Booking</span>
          </div>
          <h2 className="sectionTitle titleLight">
            Reserve Your <span className="highlight">Dining Experience</span>
          </h2>
          <p className="subLight">
            Whether it's an intimate date, anniversary, or a lively family
            dinner, we ensure every moment is extraordinary.
          </p>

          <div className="reservationDetails">
            <div className="infoCard">
              <div className="infoIconBox">
                <FaClock />
              </div>
              <div>
                <h4>Operating Hours</h4>
                <p>Monday – Sunday: 05:00 PM – 12:00 AM</p>
              </div>
            </div>

            <div className="infoCard">
              <div className="infoIconBox">
                <FaPhoneAlt />
              </div>
              <div>
                <h4>Direct Phone Inquiries</h4>
                <p>+91 98765 43210 / +91 1882 234567</p>
              </div>
            </div>

            <div className="infoCard">
              <div className="infoIconBox">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4>Our Location</h4>
                <p>Model Town, Gourmet Street, Hoshiarpur, Punjab</p>
              </div>
            </div>
          </div>

          <div className="guaranteePill">
            <FaCheckCircle className="checkIcon" />
            <span>Instant Confirmation & Flexible Rescheduling</span>
          </div>

          <div className="reservationIllustration">
            <img src="/reservation.png" alt="Fine dining restaurant table" />
          </div>
        </div>

        <div className="reservationFormSide">
          <div className="reservationFormCard">
            <div className="formHeader">
              <h3>Book A Table</h3>
              <p>Please enter your details to reserve your table</p>
            </div>

            <form onSubmit={handleReservation}>
              <div className="formRow">
                <div className="inputGroup">
                  <label htmlFor="firstName">First Name</label>
                  <div className="inputWrapper">
                    <FaUser className="inputIcon" />
                    <input
                      id="firstName"
                      type="text"
                      placeholder="e.g. John"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="inputGroup">
                  <label htmlFor="lastName">Last Name</label>
                  <div className="inputWrapper">
                    <FaUser className="inputIcon" />
                    <input
                      id="lastName"
                      type="text"
                      placeholder="e.g. Doe"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="formRow">
                <div className="inputGroup">
                  <label htmlFor="resDate">Select Date</label>
                  <div className="inputWrapper">
                    <FaCalendarAlt className="inputIcon" />
                    <input
                      id="resDate"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="inputGroup">
                  <label htmlFor="resTime">Select Time</label>
                  <div className="inputWrapper">
                    <FaClock className="inputIcon" />
                    <input
                      id="resTime"
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="inputGroup fullWidth">
                <label htmlFor="email">Email Address</label>
                <div className="inputWrapper">
                  <FaEnvelope className="inputIcon" />
                  <input
                    id="email"
                    type="email"
                    placeholder="e.g. johndoe@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="inputGroup fullWidth">
                <label htmlFor="phone">Phone Number</label>
                <div className="inputWrapper">
                  <FaPhone className="inputIcon" />
                  <input
                    id="phone"
                    type="tel"
                    placeholder="e.g. 9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="submitBtn" disabled={loading}>
                {loading ? (
                  <>
                    <FaSpinner className="spinnerIcon" />
                    <span>Confirming Table...</span>
                  </>
                ) : (
                  <>
                    <span>RESERVE TABLE NOW</span>
                    <HiOutlineArrowNarrowRight className="btnIcon" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
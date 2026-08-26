// GOOD: Uses environment variable, falls back to live Render URL if undefined
const BACKEND_URL = import.meta.env.VITE_SERVER_URL || "https://food-fun-restaurant-backend.onrender.com";

const handleReservation = async (e) => {
  e.preventDefault();
  try {
    const { data } = await axios.post(
      `${BACKEND_URL}/api/v1/reservation/send`,
      { firstName, lastName, email, date, time, phone },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    toast.success(data.message);
  } catch (error) {
    const errorMessage = error.response?.data?.message || "Failed to submit reservation.";
    toast.error(errorMessage);
  }
};
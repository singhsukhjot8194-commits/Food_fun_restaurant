// Replace this URL with your actual deployed Render backend URL
const BACKEND_URL = "https://food-fun-restaurant-backend.onrender.com";

const handleReservation = async(e) => {
    e.preventDefault();
    try {
        const { data } = await axios.post(
            `${BACKEND_URL}/api/v1/reservation/send`, { firstName, lastName, email, date, time, phone }, {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
            }
        );
        toast.success(data.message);
        navigate("/success");
    } catch (error) {
        // FIX: Safely access error response to prevent "Cannot read properties of undefined (reading 'data')"
        const errorMessage = error.response ? .data ? .message || "Server error. Please try again later.";
        toast.error(errorMessage);
        console.error("Reservation failed:", error);
    }
};
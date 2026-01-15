import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SeatBooking = () => {
  const { movieid } = useParams();
  const navigate = useNavigate();

  // Generate seats A1–F6
  const seats = [];
  let id = 1;
  for (let row = 65; row <= 70; row++) {
    for (let num = 1; num <= 6; num++) {
      seats.push({
        id: id++,
        seat: `${String.fromCharCode(row)}${num}`,
      });
    }
  }

  const [selected, setSelected] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);
  const [seatCount, setSeatCount] = useState(1);
  const [showTicketModal, setShowTicketModal] = useState(true);

  // const [bookingID, setBookingID] = useState(1);

  // 🔹 Fetch booked seats from backend
  useEffect(() => {
    const fetchBookedSeats = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/TicketBookings?movieId=${movieid}`
        );

        const booked = res.data.flatMap((booking) => booking.seats);
        setBookedSeats(booked);
      } catch (error) {
        console.error("Error fetching seats", error);
      }
    };

    fetchBookedSeats();
  }, [movieid]);

  // 🔹 Select seat
  const selectSeat = (seatLabel) => {
    if (bookedSeats.includes(seatLabel)) return;

    if (selected.includes(seatLabel)) {
      setSelected(selected.filter((s) => s !== seatLabel));
      return;
    }

    if (selected.length >= seatCount) {
      alert(`You can select only ${seatCount} seats`);
      return;
    }

    setSelected([...selected, seatLabel]);
  };


  // 🔹 Book seats
  const bookSeats = async () => {
    try {
      const bookingID = Math.floor(Math.random() * 100000 + 1);

      const selectedSeatLabels = selected;

      let newID = JSON.parse(localStorage.getItem("LoginID"));
      await axios.post("http://localhost:3000/TicketBookings", {
        movieId: movieid,
        userId: newID, // replace with logged-in user id
        seats: selectedSeatLabels,
        bookingID,
        createdAt: new Date(),
      });

      setBookedSeats([...bookedSeats, ...selected]);
      setSelected([]);
      alert("Seats booked successfully 🎉");
      navigate(`/ticket/${bookingID}`, {
        state: { movieId: movieid },
      });
    } catch (error) {
      console.error("Booking failed", error);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ color: "white" }}>Seat Booking</h2>

      <button
        onClick={() => setShowTicketModal(true)}
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-semibold"
      >
        {seatCount} Ticket{seatCount > 1 ? "s" : ""}
      </button>
      {showTicketModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-[90%] max-w-md p-6">
            <h2 className="text-xl font-bold text-center mb-4">
              How many seats?
            </h2>

            <div className="flex justify-center gap-3 mb-6">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <button
                  key={num}
                  onClick={() => setSeatCount(num)}
                  className={`w-10 h-10 rounded-full font-semibold 
              ${
                seatCount === num
                  ? "bg-red-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
                >
                  {num}
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                setSelected([]); // reset seats
                setShowTicketModal(false);
              }}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md font-semibold"
            >
              Select Seats
            </button>
          </div>
        </div>
      )}

      <p style={{ color: "white" }}>
        Selected {selected.length} / {seatCount}
      </p>

      <div style={{ marginTop: 15 }}>
        {seats.map((seat) => {
          const isBooked = bookedSeats.includes(seat.seat);
          const isSelected = selected.includes(seat.seat);

          return (
            <button
              key={seat.id}
              onClick={() => selectSeat(seat.seat)}
              disabled={isBooked}
              style={{
                margin: 6,
                padding: "10px 12px",
                backgroundColor: isBooked
                  ? "#e53935"
                  : isSelected
                  ? "#43a047"
                  : "#e0e0e0",
                color: isBooked ? "white" : "black",
                border: "none",
                borderRadius: 4,
                cursor: isBooked ? "not-allowed" : "pointer",
              }}
            >
              {seat.seat}
            </button>
          );
        })}
      </div>

      <button
        onClick={bookSeats}
        disabled={selected.length !== seatCount}
        style={{
          marginTop: 20,
          padding: "12px 20px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Book Now
      </button>
    </div>
  );
};

export default SeatBooking;

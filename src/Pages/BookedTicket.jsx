import React, { useEffect, useState } from "react";
import "../styles/BookedTicket.css";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import movieExtraInfo from "./movieExtraInfo";
const BookedTicket = () => {
  const location = useLocation();
  const { movieId } = location.state || {};
  let { bookingID } = useParams();
  // const [bookingIDs, setBookingIDs] = useState(bookingID);

  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const fetchingData = async () => {
      if (!movieId) return;

      let api = `http://localhost:3000/TicketBookings?bookingID=${bookingID}`;
      let res = await axios.get(api);
      // let bookingIDFInd = res.data.bookingID((e)=>e.bookingID == bookingID)
setBooking(res.data[0]);
      // const bookingData = bookingRes.data.find((e) => e.movieId == movieId);
      // const bookingIDs = bookingRes.data.find((e) => e.bookingID == bookingID);
      // setBooking(bookingData);
      // setBookingIDs(bookingIDs);
      // console.log("Booking ID", bookingIDs);
    };
    fetchingData();
  }, [movieId, bookingID]);

  const deleteBooking = async (id) => {
    const api = `http://localhost:3000/TicketBookings/${id}`;

    // const findID = api.data.find((e)=>e.bookingID == bookingID)
    await axios.delete(api);
    console.log(id)
    alert("Booking cancelled");

    window.location.href = "/";
  };

  const movie = movieExtraInfo[movieId] || movieExtraInfo.default;

  if (!booking || !movie) {
    return "...Ticket";
  }
  return (
    <div className="ticket-shape text-center">
      <h1>Your Ticket</h1>

      <div className="TicketContainerJr">
        {/* Movie Info */}
        <div>
          <img
            src={movie.image}
            className="image-poster mx-auto mb-3 rounded-lg w-36 h-40 "
            alt={movie.name}
          />
          <h4>{movie.name}</h4>
          <p>
            {movie.languages.join(", ")} • {movie.formats.join(", ")}
          </p>
          <p>Date • Time</p>
          <p>{movie.location}</p>
        </div>

        {/* Barcode + Seats */}
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
            alt="barcode"
          />
          <p>Tickets: {booking.seats.length}</p>
          <h5>Screen 1</h5>
          <p>Seat No: {booking.seats.join(", ")}</p>
          <p className="bold">{booking.bookingID}</p>
          <p>Tap to see more</p>
        </div>

        {/* Actions */}
        <div>
          <p>Confirmation sent on Email / WhatsApp</p>
          <button onClick={()=>deleteBooking(booking.id)}>Cancel Booking</button>
          <button>Contact Support</button>
        </div>

        {/* Price */}
        <div>
          <p>Total Amount</p>
          <p>₹{booking.seats.length * 600}</p>
        </div>
      </div>
    </div>
  );
};

export default BookedTicket;

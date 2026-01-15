// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";
import Home from "./Pages/Home";
import Layout from "./Layout";
import OpenPage from "./Pages/OpenPage";
import SeatBooking from "./Pages/SeatBooking";
import PageNotFound from "./Pages/PageNotFound";
import DataShow from "./Pages/DataShow";
import About from "./Pages/About";
import BookedTicket from "./Pages/BookedTicket";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="openpage/:movieid" element={<OpenPage />} />
            <Route path="seatbooking/:movieid" element={<SeatBooking />} />
            <Route path="display" element={<DataShow />} />
            <Route path="ticket/:bookingID" element={<BookedTicket />} />

            <Route path="*" element={<PageNotFound />} />
          </Route>
          {/* <Route index element={<Login/>} /> */}

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

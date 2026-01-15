// import React, { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import gsap from "gsap";
// import "../styles/Navbar.css";

// const Navbar = () => {
//   const navRef = useRef(null);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     gsap.from(navRef.current, {
//       y: -30,
//       opacity: 0,
//       duration: 0.6,
//       ease: "power2.out",
//     });
    
//   }, []);

//   return (
//     <header  className="navbar">
//       <div className="nav-grid">
//         {/* LOGO */}
//         <Link to="/" className="logo">
//           <img src="../../movie_logo.png" alt="logo" />
//         </Link>

//         {/* SEARCH */}
//         <input
//           type="search"
//           placeholder="Search movies, events, sports"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="search"
//         />

//         {/* ACTIONS */}
//         <div className="actions">
//           <select>
//             <option>Bhopal</option>
//             <option>Indore</option>
//             <option>Hyderabad</option>
//           </select>
//           <Link to="/login" className="btn">
//             Logout
//           </Link>
//         </div>
//       </div>

//       {/* SECOND ROW */}
//       <nav className="sub-nav">
//         <ul className="left">
//           <li>
//             <Link to="">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="">Services</Link>
//           </li>
//           <li>
//             <Link to="">Display</Link>
//           </li>
//           <li>
//             <Link to="">EditTicket</Link>
//           </li>
//         </ul>

//         <ul className="right">
//           <li>
//             <Link to="">ListYourShow</Link>
//           </li>
//           <li>
//             <Link to="">Corporates</Link>
//           </li>
//           <li>
//             <Link to="">Offers</Link>
//           </li>
//           <li>
//             <Link to="">GiftCards</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import LocationDropdown from "./LocationDropDown";

const Navbar = () => {
  const navRef = useRef(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -40,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });
  }, []);

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 bg-[#0f172a] text-white shadow-lg "
    >
      {/* TOP BAR */}
      <div className="flex items-center justify-between px-6 md:px-12 py-3 h-20 text-2xl ">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 ">
          <img
            src="data:image/png;base64,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"
            alt="BookingTell"
            className=" w-24 h-20 rounded-lg object-cover"
          />
          <span className="text-xl font-bold tracking-wide">
            Booking<span className="text-yellow-400">Tell</span>
          </span>
        </Link>

        {/* SEARCH */}
        <div className="hidden md:block w-1/3 ">
          <input
            type="search"
            placeholder="Search movies, events, sports"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-slate-800 text-sm
                       placeholder-gray-400 focus:outline-none focus:ring-2
                       focus:ring-yellow-400 h-10 text-center"
          />
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-4">
          {/* <select className="bg-slate-800 text-sm px-3 py-2 rounded-md focus:outline-none">
            <option>Bhopal</option>
            <option>Indore</option>
            <option>Hyderabad</option>
          </select> */}
          .
          <LocationDropdown />
          <Link
            to="/login"
            className="bg-yellow-600 text-black px-4 py-2 rounded-md
                        hover:bg-yellow-300 transition w-24 text-center font-bold"
          >
            Logout
          </Link>
        </div>
      </div>
      <br />
      {/* BOTTOM NAV */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-2 bg-slate-900 text-l ">
        <ul className="flex gap-6">
          <li>
            <Link className="hover:text-yellow-400" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-400" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-400" to="">
              Services
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-400" to="">
              Display
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-400" to="">
              Edit Ticket
            </Link>
          </li>
        </ul>

        <ul className="hidden md:flex gap-6 text-gray-300">
          <li>
            <Link className="hover:text-yellow-400" to="">
              List Your Show
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-400" to="">
              Corporates
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-400" to="">
              Offers
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-400" to="">
              Gift Cards
            </Link>
          </li>
        </ul>
      </nav>
      <br />
    </header>
  );
};

export default Navbar;

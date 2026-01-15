import React from "react";
import "../styles/OpenPage.css";
import { Link, useParams } from "react-router-dom";
import Balls from "../ExtrasPages/Balls"
import  movieExtraInfo  from "./movieExtraInfo";
const OpenPage = () => {
 
  let { movieid } = useParams();
  const movieId = movieid;
 
  // 🔹 Pick the correct movie
  const movie = movieExtraInfo[movieId] || movieExtraInfo.default;

  return (
    <>
      <br />
      <br />
      <Balls />
      <div
        className="containr w-full h-[480px] bg-black text-white px-10 py-16   inset-0 
"
        style={{
          backgroundImage: `
      linear-gradient(
        to left,
        rgba(0,0,0,0) 0%,
        rgba(0,0,0,0.2)10%,
        rgba(0,0,0,0.85) 30%,
        rgba(0,0,0,1) 100%
      ),
      url(${movie.image})
    `,
          backgroundSize: "contain",
          // backgroundRepeat:"no-repeat",

          backgroundPosition: "left center",
        }}
      >
        <div className="flex DataCard gap-24 items-start  ">
          <img
            src={movie.image}
            alt={movie.image}
            className="w-[300px] h-[450px]  object-cover rounded-xl"
          />
          <div className="DataInfo lg:max-w-xl ">
            {" "}
            <h2 className="text-4xl font-bold ">{movie.name}</h2>
            <div className="ratingBox">
              <div className="ratingLeft">
                <span className="star">⭐</span>
                <span className="score">{movie.rating}/10</span>
                <span className="votes">(79k+ Votes)</span>
              </div>

              <button className="rating-btn ">Rate Now</button>
            </div>
            <br />
            {/* <p className="mt-4 text-gray-300">{movie.description}</p> */}
            <div className="flex  gap-6 mt-6 text-xl text-gray-300">
              <p>{movie.runtime}</p>
              <p>{movie.genre}</p>
              <p>{movie.certificate}</p>
              <p>{movie.releaseDate}</p>
            </div>
            <div className=" flex gap-6 mt-4 text-sm">
              <p className="formatLang ">{movie.formats.join(", ")}</p>
              <p className="formatLang">{movie.languages.join(", ")}</p>
            </div>
            <button className="bookingbtn  text-2xl font-semibold w-5/6 h-14 bg-red-600 px-6 py-3 rounded-lg hover:bg-red-500 transition">
              <Link to={`/seatbooking/${movieid}`}>Book Ticket</Link>
            </button>
          </div>
        </div>
        {/* ))} */}
      </div>
      <Balls />
    </>
  );
};

export default OpenPage;

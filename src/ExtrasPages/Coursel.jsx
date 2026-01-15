import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// ✅ REQUIRED CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../styles/Coursel.css'
// Optional modules
import {Autoplay, Pagination, Navigation } from "swiper/modules";

const Coursel = () => {

  const banner = [
    {
      id: 1,
      image:
        "https://assets-in.bmscdn.com/nmcms/desktop/media-desktop-kisi-ko-batana-mat-ft-anubhav-singh-bassi--2025-12-1-t-8-9-11.jpg",
    },
    {
      id: 2,
      image:
        "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-daily-ka-kaam-hai-by-aakash-gupta-bhopal-0-2025-10-24-t-12-59-9.jpg",
    },
    {
      id: 3,
      image:
        "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-solve-rubik-cube-in-6-steps-0-2024-5-23-t-8-18-52.jpg",
    },
    {
      id: 4,
      image:
        "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-aaloknama-sapno-ka-safar-0-2025-12-3-t-6-6-5.jpg",
    },
    {
      id: 5,
      image:
        "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-feed-play-a-kids-farm-fun-day-0-2025-7-25-t-8-36-37.jpg",
    },
    {
      id: 6,
      image:
        "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-parmish-verma-live-in-bhopal-0-2025-12-25-t-7-46-54.jpg",
    },
  ];


  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={10}
      slidesPerView={1.8}
      pagination={{ clickable: true }}
      centeredSlides={true}
      loop={true}
      navigation
      autoplay={{
        delay: 2500,
        disableOnInteraction: false, // 👈 keeps autoplay after click
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="w-full h-96"
    >
      {banner.map((e) => {
       return  <SwiperSlide className="slide  text-white" key={e.id}>
          <img
            src={e.image}
            alt="banner"
            className="w-full h-full object-cover rounded-xl"
          />
        </SwiperSlide>;
      })}
      {/* <SwiperSlide className="slide bg-blue-400 text-white">
        Slide 2
      </SwiperSlide>
      <SwiperSlide className="slide bg-green-400 text-white">
        Slide 3
      </SwiperSlide>
      <SwiperSlide className="slide bg-purple-400 text-white">
        Slide 4
      </SwiperSlide> */}
    </Swiper>
  );
};

export default Coursel;

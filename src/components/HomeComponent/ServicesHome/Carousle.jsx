import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import ServiceCard from "./ServiceCard";
import ServiceImage1 from "../../../assets/Home/AgmentServices1.png";
import ServiceImage2 from "../../../assets/Home/AgmentServices2.png";
import ServiceImage3 from "../../../assets/Home/AgmentServices3.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "./Carousel.css";

const Carousel = () => {
  return (
    <Swiper
      className="swiper Border"
      modules={[Navigation, EffectCoverflow]}
      effect="coverflow"
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 50,
        modifier: 1,
        slideShadows: true,
      }}
      spaceBetween={0}
      slidesPerView={3}
      centeredSlides
      navigation
      breakpoints={{
        // Breakpoint for tablets
        768: {
          slidesPerView: 2, // Show 2 slides
          spaceBetween: 20,
        },
        // Breakpoint for mobile
        576: {
          slidesPerView: 1, // Show 1 slide
          spaceBetween: 10,
        },
      }}
    >
      {[ServiceImage1, ServiceImage2, ServiceImage3].map((image, index) => (
        <SwiperSlide className="swiper-slide" key={index} style={{height:'auto'}}>
          <ServiceCard image={image} />
        </SwiperSlide>
      ))}
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default Carousel;

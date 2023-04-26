import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';
import 'swiper/css/autoplay';
import "swiper/css";
import { themeContext } from "../../Context";
import portfolio from "../../img/portfolio.png";
import SocialMedia from "../../img/socialmedia.png";
import SocialMedia1 from "../../img/socialmedia1.png";
import Webcloning from "../../img/webcloning.png";
import Webcloning1 from "../../img/webcloning1.png";
import Webcloning2 from "../../img/webcloning2.png";
import Webcloning3 from "../../img/webcloning3.png";
export default function Portfolio() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="Portfolio">
      {/* Heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* Swiper */}
      <Swiper
        modules={[Autoplay]}
        data-swiper-autoplay="5000"
        spaceBetween={30}
        autoplay={true}
        slidesPerView={4}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        
        grabCursor={true}
        className="portfolio-slider"
        loop={true}
      >
        <SwiperSlide>
          <img src={portfolio} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SocialMedia} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SocialMedia1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Webcloning} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Webcloning1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Webcloning2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Webcloning3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

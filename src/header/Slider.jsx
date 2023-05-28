import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import headerdata from "../assets/headerdata";

import img2 from "../assets/img/header-slide2.jpg";
import img3 from "../assets/img/header-slide3.jpg";
import img5 from "../assets/img/5.jpg";
import img6 from "../assets/img/6.jpg";
import img7 from "../assets/img/7.jpg";
import img8 from "../assets/img/8.jpg";

// import required modules
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper";

const Slider = () => {
  return (
    <div className="header">
      <Swiper
        style={{ height: "500px" }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} />
        </SwiperSlide>
      </Swiper>

      <div className="top-slider">
        <Swiper
          style={{ width: "600px", borderRadius: "10px" }}
          effect={"coverflow"}
          grabCursor={true}
          loop={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          autoplay={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          // pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {headerdata.map((item, index) => (
            <SwiperSlide
              style={{
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: "250px",
                borderRadius: "20px",
                boxShadow: "0px 15px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                style={{
                  borderTopRightRadius: "15px",
                  borderTopLeftRadius: "15px",
                }}
                src={item.img}
                alt={item.title}
              />
              <span className="toptitle">{item.title}</span>
              <br />
              <span className="toptitle">{item.neme}</span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default Slider;

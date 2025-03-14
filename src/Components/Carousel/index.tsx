import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./index.scss";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Carousel() {
  return (
    <>
      <div className="session">
        <div className="line"></div>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="swiper"
      >
        <SwiperSlide>
          <img
            src="https://ik.imagekit.io/tvlk/image/imageResource/2024/09/09/1725851891803-f3c888664c5d10ee45d31cbfac375c2c.jpeg?tr=q-75"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://ik.imagekit.io/tvlk/image/imageResource/2024/10/28/1730105135557-1e591d7bd9f5cc5aec02b574e18f1f77.jpeg?tr=q-75,w-1280"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://ik.imagekit.io/tvlk/image/imageResource/2024/12/12/1733986401472-89e059ce0c3a157a57f83706eac37b37.jpeg?tr=q-75,w-1280"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

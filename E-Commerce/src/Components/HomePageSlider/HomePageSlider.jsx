import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "./styles.css";

import autoSlider from "../../Assets/autoSlider.json";

export default function HomePageSlider() {
  return (
    <div className="mt-0 w-[100%] bg-slate-100">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, EffectFade]}
        className="w-[100%]"
      >
        {autoSlider.map((img) => (
          <SwiperSlide key={img.id} className="bg-contain w-[100%]">
            <img src={img.src} alt={`Slide ${img.id}`} className="w-[100%]" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

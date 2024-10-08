import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { A11y, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { Link } from 'react-router-dom';

const SwiperPortfolio = () => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
        modules={[Navigation, Pagination, A11y, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        //   effect="fade"
        //   zoom={true}
        loop="true"
        className="w-[90%] h-96"
      >
        <SwiperSlide className="text-[--color] h-80 backdrop-blur-2xl">
          <a href="#asda" className="cursor-pointer w-full h-full">
            slide
          </a>
        </SwiperSlide>
        <SwiperSlide className="text-[--color] h-80 backdrop-blur-2xl">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="text-[--color] h-80 backdrop-blur-2xl">
          Slide 3
        </SwiperSlide>
        <SwiperSlide className="text-[--color] h-80 backdrop-blur-2xl">
          Slide 4
        </SwiperSlide>
        <SwiperSlide className="text-[--color] h-80 backdrop-blur-2xl">
          Slide 5
        </SwiperSlide>
        <SwiperSlide className="text-[--color] h-80 backdrop-blur-2xl">
          Slide 6
        </SwiperSlide>
        <SwiperSlide className="text-[--color] h-80 backdrop-blur-2xl">
          Slide 7
        </SwiperSlide>
        <SwiperSlide className="text-[--color] h-80 backdrop-blur-2xl">
          Slide 8
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperPortfolio;

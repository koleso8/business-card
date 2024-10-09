import { Swiper, SwiperSlide } from 'swiper/react';
import {
  A11y,
  Pagination,
  Navigation,
  EffectCoverflow,
  Mousewheel,
} from 'swiper/modules';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

import 'swiper/swiper-bundle.css';
import { useScreenWidth } from '../../hooks/useScreenWidth';

const SwiperPortfolio = () => {
  const { isDesktop } = useScreenWidth();

  return (
    <section className="flex flex-col justify-center relative">
      <Swiper
        spaceBetween={50}
        // slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
        modules={[Navigation, Pagination, A11y, EffectCoverflow, Mousewheel]}
        mousewheel={true}
        navigation={{
          nextEl: '.swiper-button-nex',
          prevEl: '.swiper-button-pre',
          clickable: true,
        }}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: -30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        //   zoom={true}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        className="w-full h-96 "
      >
        <SwiperSlide className="p-2 text-[--color] flex flex-col h-80 backdrop-blur-2xl ">
          <img src="" alt="" className="w-full h-56 mb-2" />
          <h3 className="text-center">Slide 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nobis!
          </p>
        </SwiperSlide>
        <SwiperSlide className="p-2 text-[--color] flex flex-col h-80 backdrop-blur-2xl">
          <img src="" alt="" className="w-full h-56 mb-2" />
          <h3 className="text-center">Slide 2</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nobis!
          </p>
        </SwiperSlide>
        <SwiperSlide className="p-2 text-[--color] flex flex-col h-80 backdrop-blur-2xl">
          <img src="" alt="" className="w-full h-56 mb-2" />
          <h3 className="text-center">Slide 3</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nobis!
          </p>
        </SwiperSlide>
        <SwiperSlide className="p-2 text-[--color] flex flex-col h-80 backdrop-blur-2xl">
          <img src="" alt="" className="w-full h-56 mb-2" />
          <h3 className="text-center">Slide 4</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nobis!
          </p>
        </SwiperSlide>
        <SwiperSlide className="p-2 text-[--color] flex flex-col h-80 backdrop-blur-2xl">
          <img src="" alt="" className="w-full h-56 mb-2" />
          <h3 className="text-center">Slide 5</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nobis!
          </p>
        </SwiperSlide>
        <SwiperSlide className="p-2 text-[--color] flex flex-col h-80 backdrop-blur-2xl">
          <img src="" alt="" className="w-full h-56 mb-2" />
          <h3 className="text-center">Slide 6</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nobis!
          </p>
        </SwiperSlide>
        <SwiperSlide className="p-2 text-[--color] flex flex-col h-80 backdrop-blur-2xl">
          <img src="" alt="" className="w-full h-56 mb-2" />
          <h3 className="text-center">Slide 7</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nobis!
          </p>
        </SwiperSlide>
        <SwiperSlide className="p-2 text-[--color] flex flex-col h-80 backdrop-blur-2xl">
          <img src="" alt="" className="w-full h-56 mb-2" />
          <h3 className="text-center">Slide 8</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nobis!
          </p>
        </SwiperSlide>
      </Swiper>
      {isDesktop && (
        <div className="slider-controler mx-auto text-[--red] text-5xl flex gap-52">
          <button className="swiper-button-pre absolute bottom-0 left-[20%] z-10">
            <FaArrowAltCircleLeft />
          </button>
          <button className="swiper-button-nex absolute bottom-0 right-[20%] z-10">
            <FaArrowAltCircleRight />
          </button>
        </div>
      )}
    </section>
  );
};

export default SwiperPortfolio;

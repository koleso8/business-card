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
import { images } from '../../images/images';

const SwiperPortfolio = () => {
  const { isDesktop } = useScreenWidth();

  return (
    <section id="portfolio" className="flex flex-col justify-center relative">
      <Swiper
        spaceBetween={50}
        // slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
        modules={[Navigation, Pagination, A11y, EffectCoverflow, Mousewheel]}
        // mousewheel={true}
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
        <SwiperSlide className="text-center p-2 text-[--color] flex flex-col h-80 backdrop-blur-2xl ">
          {/* 1 Slide */}
          <a href="https://lox-local-offers-exchange.vercel.app/">
            <img
              src={images.lox}
              alt=""
              className="w-full h-56 mb-2 object-cover"
            />
          </a>
          <h3>Local Offers Exchange</h3>
          <p>Сайт для пошуку юриста, та надання юридичних послуг.</p>
        </SwiperSlide>
        <SwiperSlide className="text-center p-2 text-[--color] flex flex-col h-80 backdrop-blur-2xl">
          {/* 2 Slide */}
          <a href="https://koleso8.github.io/js2team_proj/">
            <img
              src={images.bussinesCard}
              alt="site"
              className="w-full h-56 mb-2 object-cover"
            />
          </a>
          <h3>Сайт - візитівка</h3>
          <p>Сайт - візитівка для фулстек розробника.</p>
        </SwiperSlide>
        <SwiperSlide className="text-center p-2 text-[--color] flex flex-col h-80 backdrop-blur-2xl">
          {/* 3 Slide */}
          <a href="https://money-guard-2.vercel.app/">
            <img
              src={images.moneyGuard}
              alt="moneyGuard"
              className="w-full h-56 mb-2 object-cover"
            />
          </a>
          <h3>Money Guard</h3>
          <p>Додаток для обліку фінансів</p>
        </SwiperSlide>
        <SwiperSlide className="text-center p-2 text-[--color] flex flex-col h-80 backdrop-blur-2xl">
          {/* 4 Slide */}
          <a href="https://koleso8.github.io/Sweet_Candy/">
            <img
              src={images.sweetCandy}
              alt="sweetCandy"
              className="w-full h-56 mb-2 object-cover"
            />
          </a>
          <h3>Sweet Candy Legend</h3>
          <p>Волонтерський проєкт для розробників ігор для мобільних</p>
        </SwiperSlide>
        <SwiperSlide className="text-center p-2 text-[--color] flex flex-col h-80 backdrop-blur-2xl">
          {/* 5 Slide */}
          <a href="https://koleso8.github.io/project-html-css-team-1/">
            <img
              src={images.watch}
              alt="watch"
              className="w-full h-56 mb-2 object-cover"
            />
          </a>
          <h3>WatchCharm</h3>
          <p>Сайт для продажу годинників.</p>
        </SwiperSlide>
        <SwiperSlide className="text-center p-2 text-[--color] flex flex-col h-80 backdrop-blur-2xl">
          {/* 6 Slide */}
          <img src="" alt="" className="w-full h-56 mb-2" />
          <h3>Slide 6</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nobis!
          </p>
        </SwiperSlide>
        <SwiperSlide className="text-center p-2 text-[--color] flex flex-col h-80 backdrop-blur-2xl">
          {/* 7 Slide */}
          <img src="" alt="" className="w-full h-56 mb-2" />
          <h3>Slide 7</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nobis!
          </p>
        </SwiperSlide>
        <SwiperSlide className="text-center p-2 text-[--color] flex flex-col h-80 backdrop-blur-2xl">
          {/* 8 Slide */}
          <a href="https://koleso8.github.io/goit-markup-hw-06/">
            <img
              src={images.webLand}
              alt=""
              className="w-full h-56 mb-2 object-cover"
            />
          </a>
          <h3>Web Studio</h3>
          <p>Лендінг для веб-студії</p>
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

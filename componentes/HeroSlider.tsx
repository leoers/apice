"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import NextImage from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    title: "A melhor empresa em que você pode confiar",
    subtitle: "SOLUÇÕES PARA TODOS OS NEGÓCIOS",
    image: "/images/slider-11-min.jpg",
    buttonText: "Faça um orçamento",
    link: "/contato",
  },
  {
    id: 2,
    title: "Segurança e Eficiência para seu Condomínio",
    subtitle: "ADMINISTRAÇÃO DE EXCELÊNCIA",
    image: "/images/slider-31.jpg",
    buttonText: "Conheça Nossos Serviços",
    link: "/servicos",
  },
];

export function HeroSlider() {
  return (
    // A classe 'full-screen-slider' agora controla a altura via globals.css
    <section className="relative w-full overflow-hidden bg-[#1A1F2C] full-screen-slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        navigation={{
          nextEl: ".hero-next",
          prevEl: ".hero-prev",
        }}
        pagination={{
          clickable: true,
          el: ".hero-pagination",
        }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        className="w-full group"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="relative w-full flex items-center justify-center">
            <div className="absolute inset-0 z-0">
              <NextImage
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-[#496c8a]/70 mix-blend-multiply z-[1]" />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
              <div className="max-w-[1200px] mx-auto text-white">
                <span className="text-sm md:text-base font-bold tracking-[3px] uppercase mb-4 block opacity-0 translate-y-8 transition-all duration-700 ease-out delay-300 [.swiper-slide-active_&]:opacity-100 [.swiper-slide-active_&]:translate-y-0">
                  {slide.subtitle}
                </span>

                <h1 className="text-4xl md:text-7xl font-bold mb-10 leading-tight opacity-0 translate-y-8 transition-all duration-700 ease-out delay-500 [.swiper-slide-active_&]:opacity-100 [.swiper-slide-active_&]:translate-y-0">
                  {slide.title}
                </h1>

                <div className="opacity-0 translate-y-8 transition-all duration-700 ease-out delay-700 [.swiper-slide-active_&]:opacity-100 [.swiper-slide-active_&]:translate-y-0">
                  <Link
                    href={slide.link}
                    className="inline-block border-2 border-white text-white font-bold py-3 px-10 hover:bg-white hover:text-[#4054B2] transition-all duration-300 uppercase text-sm tracking-wider"
                  >
                    {slide.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="hero-prev swiper-button-prev !absolute !left-4 md:!left-8 !text-white !scale-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 cursor-pointer"></div>
        <div className="hero-next swiper-button-next !absolute !right-4 md:!right-8 !text-white !scale-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 cursor-pointer"></div>
        <div className="hero-pagination !absolute !bottom-10 !left-1/2 !-translate-x-1/2 !w-auto z-30 flex items-center justify-center gap-1"></div>
      </Swiper>
    </section>
  );
}
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Banner {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

interface HeroProps {
  banners: Banner[];
}

export function ServiceHero({ banners }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  // --- ANIMAÇÃO SIMPLES DE FADE-IN ---
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    // Pega as seções e os boxes (elementos com classes comuns do Elementor/Tailwind)
    const elements = document.querySelectorAll("section, .elementor-widget-container, .e-con");
    
    elements.forEach((el, index) => {
      // Pula apenas o Hero (primeira section)
      if (index === 0 && el.tagName === 'SECTION') return;
      
      el.classList.add("fade-in-hidden");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* CSS ultra leve - sem transform, sem barra de rolagem */}
      <style jsx global>{`
        .fade-in-hidden {
          opacity: 0;
          transition: opacity 1.2s ease-in-out;
        }
        .fade-in-visible {
          opacity: 1 !important;
        }
      `}</style>

      <section className="relative h-[680px] w-full bg-[#1B1F2E] overflow-hidden">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={banner.backgroundImage}
              alt={banner.title}
              fill
              className="object-cover brightness-[0.4]"
              priority={index === 0}
            />

            <div className="relative z-20 max-w-[1200px] mx-auto px-4 h-full flex flex-col items-center justify-center text-center text-white">
              <h1 className="text-[36px] md:text-[48px] font-bold uppercase tracking-[2px] mb-4 leading-tight">
                {banner.title}
              </h1>
              <p className="text-[14px] md:text-[18px] font-normal tracking-[0.5px] max-w-[700px] opacity-90">
                {banner.subtitle}
              </p>
            </div>
          </div>
        ))}

        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 text-white opacity-50 hover:opacity-100 transition-opacity p-2">
          <FaChevronLeft size={30} />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 text-white opacity-50 hover:opacity-100 transition-opacity p-2">
          <FaChevronRight size={30} />
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentSlide ? "bg-[#6EC1E4] w-6" : "bg-white opacity-50"
              }`}
            />
          ))}
        </div>
      </section>
    </>
  );
}
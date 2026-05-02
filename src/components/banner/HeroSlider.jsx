"use client";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { bannerData } from "@/data/BannerData";


export default function HeroSlider() {
  return (
    <section className="w-full py-5">
    
      <div className="max-w-screen-2xl mx-auto px-4 md:px-12 h-[350px] md:h-[500px] lg:h-[600px]">
        <Swiper
          spaceBetween={10}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-full rounded-3xl shadow-xl border border-gray-100"
        >
          {bannerData.map((banner, index) => (
            <SwiperSlide key={banner.id}>
              <div className="relative w-full h-full">
                <Image
                  src={banner.image}
                  alt={banner.title}
                  fill
                  priority={index === 0}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/45 flex flex-col items-center justify-center text-center px-4 md:px-12">
                  <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 drop-shadow-2xl leading-tight">
                    {banner.title}
                  </h1>
                  <p className="text-base md:text-xl text-gray-100 mb-6 md:mb-10 max-w-3xl font-medium drop-shadow-md">
                    {banner.subTitle}
                  </p>
                  <Link
                    href="/"
                    className="btn bg-orange-500 hover:bg-orange-600 border-none text-white text-sm md:text-lg px-8 md:px-12 rounded-full transition-all shadow-2xl transform hover:scale-105 active:scale-95"
                  >
                    Explore Courses
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

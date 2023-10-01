import React, { useCallback } from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import { landingResponsive, slideData } from "../home-data";
import "react-multi-carousel/lib/styles.css";

export default function HomeCarousel() {
  const carouselMapper = useCallback(function mapper(data: any, index: number) {
    return (
      <div className="carousel-slide" key={index}>
        <div className="img-container slide-img-container">
          <Image
            src={`/assets/images/${data.slideBackground}`}
            fill
            sizes="100%"
            alt={data.imageAlt}
            priority
            className="slide-bg"
          />
        </div>
      </div>
    );
  }, []);
  return (
    <Carousel
      className="home-carousel"
      responsive={landingResponsive}
      swipeable={false}
      draggable={false}
      pauseOnHover={false}
      ssr={true}
      infinite={true}
      autoPlay={true}
      showDots={false}
      autoPlaySpeed={2500}
      keyBoardControl={true}
      arrows={false}
    >
      {slideData.map(carouselMapper)}
    </Carousel>
  );
}

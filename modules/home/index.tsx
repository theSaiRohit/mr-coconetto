import React, { useRef } from "react";
import CarouselContainer from "./carousel/carousel-container";
import HomeAbout from "./home-about";
import HomeChoose from "./home-choose";
import HomeGallery from "./home-gallery";
import HomeService from "./home-services";

export default function HomeContainer() {
  const aboutRef = useRef(null);
  return (
    <>
      <CarouselContainer aboutRef={aboutRef} />
      <HomeAbout ref={aboutRef} />
      <HomeService />
      <HomeChoose />
      <HomeGallery />
    </>
  );
}

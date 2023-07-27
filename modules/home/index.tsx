import React, { useRef } from "react";
import HomeAbout from "./home-about";
import HomeChoose from "./home-choose";
import HomeGallery from "./home-gallery";
import CarouselContainer from "./carousel/carousel-container";

export default function HomeContainer() {
  const aboutRef = useRef(null);
  return (
    <>
      <CarouselContainer aboutRef={aboutRef} />
      <HomeAbout ref={aboutRef} />
      <HomeChoose />
      <HomeGallery />
    </>
  );
}

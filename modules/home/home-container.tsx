import React from "react";
import HomeAbout from "./home-about";
import HomeChoose from "./home-choose";
import HomeGallery from "./home-gallery";
import CarouselContainer from "./carousel/carousel-container";

export default function HomeContainer() {
  return (
    <section id="home" aria-label="home">
      <CarouselContainer />
      <HomeAbout />
      <HomeChoose />
      <HomeGallery />
    </section>
  );
}

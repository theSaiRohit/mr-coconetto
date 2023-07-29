import { RefObject, useCallback, useEffect, useRef } from "react";
import HomeCarousel from "./home-carousel";
import DefaultButton from "@/components/default-button";

export default function CarouselContainer({
  aboutRef,
}: {
  aboutRef: RefObject<HTMLDivElement>;
}) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCallback = useCallback(function scrollerFunction() {
    const scrollPos = window.scrollY;
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateY(${scrollPos / 2.6}px)`;
    }
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", scrollCallback, { passive: true });
    return () => {
      document.removeEventListener("scroll", scrollCallback);
    };
  }, [scrollCallback]);

  const clickHandler = useCallback(function clickFunction() {
    const target = aboutRef?.current;
    target?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="carousel">
      <main className="info-container">
        <h1 className="slide-heading">
          <span className="slide-sub-heading _1">We are the greatest</span>
          <span className="slide-sub-heading _2">Mr Coconetto</span>
        </h1>
        <div className="slide-cta">
          <DefaultButton className="about-btn" onClick={clickHandler}>
            About Us
          </DefaultButton>
          <DefaultButton className="buy-now-btn" href="/products">
            Buy now
          </DefaultButton>
        </div>
      </main>
      <div className="carousel-container" ref={carouselRef}>
        <HomeCarousel />
      </div>
    </div>
  );
}

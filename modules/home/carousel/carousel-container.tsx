import { RefObject, useCallback, useEffect, useRef } from "react";
import HomeCarousel from "./home-carousel";

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
      <div className="info-container">
        <h1 className="slide-heading">
          <span className="slide-sub-heading _1">Mr Coconetto</span>
          <span className="slide-sub-heading _2">We are the greatest</span>
        </h1>
        <div className="slide-cta">
          <button
            className="about-btn default-btn"
            type="button"
            onClick={clickHandler}
          >
            About Us
          </button>
        </div>
      </div>
      <div className="carousel-container" ref={carouselRef}>
        <HomeCarousel />
      </div>
    </div>
  );
}

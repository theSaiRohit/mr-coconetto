import { useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import HomeCarousel from "./home-carousel";

export default function CarouselContainer() {
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
    const target = document.querySelector(".home-about");
    const scrollElem = target?.scrollIntoView({ behavior: "smooth" });
    return scrollElem;
  }, []);

  return (
    <div className="carousel">
      <div className="info-container">
        <h1 className="slide-heading">Mr Coconetto</h1>
        <h2 className="slide-sub-heading">Book now for an extravagenza</h2>
        <div className="slide-cta">
          <Link href="/" className="book-btn">
            Book Now
          </Link>
          <button className="about-btn" type="button" onClick={clickHandler}>
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

import { useCallback } from "react";
import Image from "next/image";
import { MdFormatQuote } from "react-icons/md";
import Carousel from "react-multi-carousel";
import { testimonialData, testimonialResponsive } from "./about-data";
import "react-multi-carousel/lib/styles.css";

export default function AboutTestimonials() {
  const testimonialMapper = useCallback((data: any, index: number) => {
    return (
      <div className="testimonial-slide" key={index}>
        <div className="img-container profile-img-container">
          <Image
            src={`/assets/images/${data.src}`}
            fill
            sizes="100%"
            alt={data.alt}
            priority
            className="profile-img"
          />
        </div>
        <span className="profile-user">{data.username}</span>
        <div className="rating">{data.rating}</div>
        <p className="testimonial-desc">
          <MdFormatQuote className="quotes" />
          {data.para}
        </p>
      </div>
    );
  }, []);
  return (
    <section className="about-testimonials">
      <div className="img-container testimonial-img-container">
        <Image
          src="/assets/images/main.jpg"
          fill
          sizes="100%"
          alt="alt"
          priority
          className="testimonial-img"
        />
      </div>
      <Carousel
        className="testimonails-carousel"
        responsive={testimonialResponsive}
        swipeable
        draggable
        pauseOnHover
        ssr={true}
        infinite
        // autoPlay
        showDots
        arrows
        autoPlaySpeed={2500}
      >
        {testimonialData.map(testimonialMapper)}
      </Carousel>
    </section>
  );
}

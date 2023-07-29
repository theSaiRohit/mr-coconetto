import { forwardRef, type Ref } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { homeAboutData } from "./home-data";
import DefaultButton from "@/components/default-button";

function HomeAbout(_: unknown, ref: Ref<HTMLDivElement>) {
  return (
    <section
      className="home-about"
      id="about-us"
      ref={ref}
      aria-label="About us"
    >
      <div className="img-container home-about-img-container">
        <Image
          src="/assets/images/crowd.jpg"
          fill
          sizes="100%"
          alt="About image"
          priority
          className="about-img"
        />
      </div>
      <div className="about-info">
        <h3 className="about-heading">{homeAboutData.aboutHeading}</h3>
        <p className="about-description">{homeAboutData.aboutDesc}</p>
        <DefaultButton href="/about" className="about-btn">
          Know More
        </DefaultButton>
      </div>
    </section>
  );
}

export default forwardRef<HTMLDivElement, unknown>(HomeAbout);

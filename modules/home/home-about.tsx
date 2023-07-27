import { forwardRef, type Ref } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { homeAboutData } from "./home-data";

function HomeAbout(_: unknown, ref: Ref<HTMLDivElement>) {
  return (
    <div className="home-about" id="about-us" ref={ref}>
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
        <Link href="/about" className="about-btn default-btn">
          <span className="btn-span">Know More</span>
          <FaChevronRight className="arrow-right" />
        </Link>
      </div>
    </div>
  );
}

export default forwardRef<HTMLDivElement, unknown>(HomeAbout);

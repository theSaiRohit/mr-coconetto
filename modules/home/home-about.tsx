import Image from "next/image";
import Link from "next/link";
import { homeAboutData } from "./home-data";

export default function HomeAbout() {
  return (
    <div className="home-about">
      <div className="img-container home-about-img-container">
        <Image
          src="/assets/images/background.jpg"
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
        <Link href="/about" className="about-btn">
          Know More
        </Link>
      </div>
    </div>
  );
}

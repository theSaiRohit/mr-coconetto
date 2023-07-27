import Image from "next/image";
import Link from "next/link";
import { galleryText } from "./home-data";
export default function HomeGallery() {
  return (
    <div className="home-gallery">
      <div className="img-container gallery-img-container">
        <Image
          src="/assets/images/background.jpg"
          fill
          sizes="100%"
          alt="Header logo"
          priority
          className="gallery-bg"
        />
      </div>
      <div className="gallery-text-container">
        <span className="gallery-span">{galleryText.span}</span>
        <h2 className="gallery-heading">{galleryText.h2Content}</h2>
        <Link href="/" className="gallery-btn">
          {galleryText.galleryBtn}
        </Link>
      </div>
    </div>
  );
}

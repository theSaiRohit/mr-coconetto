import Link from "next/link";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";

export default function Footer() {
  return (
    <footer id="footer">
      <span className="company-name">Mr Coconetto</span>
      <div className="sitemap-links">
        <Link href="/" className="home-link site-links">
          Home
        </Link>
        <Link href="/about" className="about-link site-links">
          About
        </Link>
        <Link href="/gallery" className="gallery-link site-links">
          Gallery
        </Link>
        <Link href="/products" className="products-link site-links">
          Products
        </Link>
        <Link href="/contact" className="contact-link site-links">
          Contact
        </Link>
      </div>
      <div className="text-links-container">
        <Link
          href="mailto:mrcoconetto@gmail.com"
          className="home-link text-link"
        >
          <AiOutlineMail className="helper-svg" />
          <span className="helper-text">mrcoconetto@gmail.com</span>
        </Link>
        <Link href="tel:+918700331212" className="about-link text-link">
          <AiOutlinePhone className="helper-svg" />
          <span className="helper-text">+91-870-033-1212</span>
        </Link>
        <Link
          href="https://goo.gl/maps/mCZ5vWRKrKNwDV8u9"
          className="gallery-link text-link"
        >
          <MdLocationPin className="helper-svg" />
          <span className="helper-text">
            227, Pocket 19, Sector-24, Rohini, Delhi, 110085
          </span>
        </Link>
      </div>
      <div className="visual-links">
        <span className="span-text">Contact Us</span>
        <div className="link-grid">
          <Link
            href="https://www.instagram.com/mr.coconetto/"
            className="link-svg"
          >
            <AiOutlineInstagram />
          </Link>
          <Link
            href="https://www.facebook.com/MR.COCONETTO/"
            className="link-svg"
          >
            <AiOutlineFacebook />
          </Link>
          <Link href="mailto:mrcoconetto@gmail.com" className="link-svg">
            <AiOutlineMail />
          </Link>
          <Link href="tel:+918700331212" className="link-svg">
            <AiOutlinePhone />
          </Link>
        </div>
      </div>
    </footer>
  );
}

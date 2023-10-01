import { Ref, forwardRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";

function Footer(_: unknown, ref: Ref<HTMLDivElement>) {
  return (
    <footer id="footer" ref={ref}>
      <div className="company-attributes">
        <div className="img-container">
          <Image
            src="/assets/images/logo.png"
            alt="footer logo"
            fill
            sizes="100%"
          />
        </div>
        <span className="company-name">Mr Coconetto</span>
        <p className="company-desc">
          We do customized printing of your pictures, logos, names and such...
          on fresh coconuts.
        </p>
      </div>
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

export default forwardRef(Footer);

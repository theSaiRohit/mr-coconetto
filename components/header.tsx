import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileView, setMobileView] = useState<boolean>(false);

  return (
    <header id="main-header">
      <Link href="/" className="logo-container">
        MrCoconetto
      </Link>
      <nav className={`${mobileView ? "active" : "inactive"} stuff-container`}>
        <Link
          href="/"
          className="link"
          onClick={() => {
            setMobileView(!mobileView);
          }}
        >
          Home
        </Link>
        <Link
          href="/about"
          className="link"
          onClick={() => {
            setMobileView(!mobileView);
          }}
        >
          About
        </Link>
        <Link
          href="/products"
          className="link"
          onClick={() => {
            setMobileView(!mobileView);
          }}
        >
          Products
        </Link>
        <Link
          href="/gallery"
          className="link"
          onClick={() => {
            setMobileView(!mobileView);
          }}
        >
          Gallery
        </Link>
        <Link
          href="/contact"
          className="link"
          onClick={() => {
            setMobileView(!mobileView);
          }}
        >
          Contact
        </Link>
      </nav>
      <div
        className={`${mobileView ? "open" : "close"} burger`}
        onClick={() => setMobileView(!mobileView)}
      >
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </div>
    </header>
  );
}

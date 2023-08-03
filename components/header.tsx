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
        <Link href="/" className="link">
          Home
        </Link>
        <Link href="/" className="link">
          About
        </Link>
        <Link href="/" className="link">
          Products
        </Link>
        <Link href="/gallery" className="link">
          Gallery
        </Link>
        <Link href="/contact" className="link">
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

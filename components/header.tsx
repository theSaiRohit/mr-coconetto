import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <header id="header" ref={headerRef}>
      <div className="img-container logo-container">
        <Image
          src="/assets/images/background.jpg"
          fill
          sizes="100%"
          alt="Header logo"
          priority
          className="logo"
        />
      </div>
      <nav className="nav">
        <Link href="/" onClick={() => setOpen(!open)}>
          Home
        </Link>
        <Link href="/about" onClick={() => setOpen(!open)}>
          About
        </Link>
        <Link href="/gallery" onClick={() => setOpen(!open)}>
          Gallery
        </Link>
        <Link href="/shop" onClick={() => setOpen(!open)}>
          Shop
        </Link>
        <Link href="/contact" onClick={() => setOpen(!open)}>
          Contact
        </Link>
      </nav>
      <div
        className={`hamburger ${open ? "active" : "inactive"}`}
        onClick={toggleOpen}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </header>
  );
}

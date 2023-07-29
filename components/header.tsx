import { useRef } from "react";

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  return (
    <header id="main-header" ref={headerRef}>
      <a href="">hello world</a>
    </header>
  );
}

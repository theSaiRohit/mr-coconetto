import Image from "next/image";

export default function AboutMain() {
  return (
    <section className="about-main">
      <div className="img-container about-img-container">
        <Image
          src="/assets/images/misc.jpg"
          fill
          sizes="100%"
          alt="Header logo"
          priority
          className="about-bg"
        />
      </div>
      <h2 className="about-tagline">Mr Coconetto Zindabad!</h2>
      <h1 className="about-heading">About Us</h1>
    </section>
  );
}

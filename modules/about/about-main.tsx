import Image from "next/image";

export default function AboutMain({ url }: { url: string }) {
  return (
    <section className="about-main">
      <div className="img-container about-img-container">
        <Image
          src={url}
          fill
          sizes="100%"
          alt="Header logo"
          priority
          className="about-bg"
        />
      </div>
      <h1 className="about-heading">About Us</h1>
    </section>
  );
}

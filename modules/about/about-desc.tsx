import Image from "next/image";

export default function AboutDesc() {
  return (
    <main className="about-desc">
      <div className="img-container desc-img-container">
        <Image
          src="/assets/images/car-three.webp"
          fill
          sizes="100%"
          alt="Header logo"
          priority
          className="desc-bg"
        />
      </div>
      <p className="desc">
        Our team at Mr. Coconetto takes immense pride in curating a wedding that
        transports you and your guests to a tropical paradise. We pay meticulous
        attention to every detail, ensuring that the coconut theme is seamlessly
        woven throughout your event. Whether it is the vibrant colors and
        decorations or the coconut-infused cocktails and cuisine, our commitment
        to excellence shines through. Explore our handpicked collection of
        coconut-themed products, from bespoke wedding favors to decorative
        accents, all designed to elevate your celebration. Trust Mr. Coconetto
        to transform your wedding day into an unforgettable and truly unique
        coconut-filled experience that you and your loved ones will cherish
        forever.
      </p>
    </main>
  );
}

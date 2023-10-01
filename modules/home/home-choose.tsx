import Image from "next/image";
import DefaultButton from "@/components/default-button";

export default function HomeChoose() {
  return (
    <div className="home-choose">
      <div className="img-container choose-img-container">
        <Image src="/assets/images/logo.png" alt="" fill sizes="100%" />
      </div>
      <div className="content-container">
        <h2 className="choose-heading">
          Why Choose <br />
          Mr. Coconetto
        </h2>
        <p className="choose-text">
          Choosing Mr. Coconetto guarantees an unparalleled experience with our
          coconut-themed events. Our customized coconut printing adds a touch of
          exclusivity and personalization, making each celebration truly
          one-of-a-kind. With our expertise and attention to detail, we
          transform ordinary gatherings into unforgettable tropical escapes,
          leaving guests in awe.
        </p>
        <DefaultButton href="/contact">Contact us</DefaultButton>
      </div>
    </div>
  );
}

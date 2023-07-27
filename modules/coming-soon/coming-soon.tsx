import Image from "next/image";
import { PartyLottie } from "./party-lottie";

export default function ComingSoon() {
  return (
    <section id="homes" aria-label="home">
      <div className="img-container">
        <Image
          src="/assets/images/background.jpg"
          priority
          sizes="100%"
          fill
          alt="bg"
        />
      </div>
      <main className="main">
        <PartyLottie className="lottie" />
        <span className="span-message">
          We will be back with something exciting!
        </span>
      </main>
    </section>
  );
}

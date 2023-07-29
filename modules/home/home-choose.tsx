import { useCallback } from "react";
import DefaultButton from "@/components/default-button";
import Image from "next/image";
import beachAni from "@images/beach-ani.gif";

export default function HomeChoose() {
  return (
    <div className="home-choose">
      <div className="img-container">
        <Image src={beachAni} alt="" fill sizes="100%" />
      </div>
      <div className="content-container">
        <h2 className="choose-heading">
          Why Choose <br />
          Mr. Coconetto
        </h2>
        <p className="choose-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
          accusamus tenetur minus exercitationem libero expedita, quae, esse
          quidem ipsam, assumenda modi adipisci culpa delectus praesentium
          consectetur quod ab aspernatur mollitia? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit.
        </p>
        <DefaultButton href="/contact">Contact us</DefaultButton>
      </div>
    </div>
  );
}

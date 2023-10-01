import { useState } from "react";
import Image from "next/image";
import ServiceInfo from "./service-info";
import ServiceCardsWrapper from "./services-card";
import { serviceCardData } from "../home-data";

export default function HomeService() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="home-service img-container"
      aria-label="Services we offer"
    >
      <Image
        src={`/assets/images/${serviceCardData[activeIndex]?.imgUrl}`}
        alt="takatvar"
        fill
        sizes="100%"
        priority
        className="services-img"
      />
      <ServiceCardsWrapper
        dataArr={serviceCardData}
        indexState={[activeIndex, setActiveIndex]}
      />
      <ServiceInfo dataArr={serviceCardData} activeIndex={activeIndex} />
    </section>
  );
}

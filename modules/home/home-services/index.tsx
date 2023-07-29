import { useState } from "react";
import Image from "next/image";

import { serviceCardData } from "../home-data";
import ServiceInfo from "./service-info";
import ServiceCardsWrapper from "./services-card";

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
      <ServiceInfo dataArr={serviceCardData} activeIndex={activeIndex} />
      <ServiceCardsWrapper
        dataArr={serviceCardData}
        indexState={[activeIndex, setActiveIndex]}
      />
    </section>
  );
}

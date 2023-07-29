import { useRef, useState } from "react";
import Image from "next/image";

import { serviceCardData } from "../home-data";
import ServiceInfo from "./service-info";
import ServiceCardsWrapper from "./services-card";

export default function HomeService() {
  const backgroundRef = useRef(null);
  const defaultService = serviceCardData[0];
  const [serviceObj, setServiceObj] = useState(defaultService);

  return (
    <div className="home-service img-container">
      <Image
        src={`/assets/images/${serviceObj?.imgUrl}`}
        alt="takatvar"
        fill
        sizes="100%"
        priority
        className="services-img"
        ref={backgroundRef}
      />
      <ServiceInfo dataObj={serviceObj} />
      <ServiceCardsWrapper setterFunc={setServiceObj} />
    </div>
  );
}

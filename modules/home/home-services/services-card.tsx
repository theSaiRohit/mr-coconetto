import { Dispatch, SetStateAction, useCallback, useState } from "react";
import Image from "next/image";
import { serviceCardData } from "../home-data";

export default function ServiceCardsWrapper({
  setterFunc,
}: {
  setterFunc: Dispatch<SetStateAction<any | undefined>>;
}) {
  const [indexNum, setIndexNum] = useState<number>(0);
  const serviceCardMapper = useCallback(
    function cardMapper(data: any, index: number) {
      return (
        <div
          className={`service-card img-container ${
            indexNum === index ? "active" : ""
          }`}
          key={index}
        >
          <Image
            src={`/assets/images/${data.imgUrl}`}
            alt="takatvar"
            fill
            sizes="100%"
            priority
            className="services-img"
            onClick={() => {
              setIndexNum(index);
              setterFunc(data);
            }}
          />
          <h3 className="card-heading">
            {index + 1}. {data.cardHeading}
          </h3>
        </div>
      );
    },
    [setterFunc, indexNum]
  );
  return (
    <div className="service-cards-wrapper">
      <span className="wrapper-heading">Services We Offer</span>
      <div className="service-cards-container">
        {serviceCardData.map(serviceCardMapper)}
      </div>
    </div>
  );
}

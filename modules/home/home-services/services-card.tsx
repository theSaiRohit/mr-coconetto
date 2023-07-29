import { Dispatch, SetStateAction, useCallback } from "react";
import Image from "next/image";

export default function ServiceCardsWrapper({
  indexState,
  dataArr,
}: {
  dataArr: any[];
  indexState: [number, Dispatch<SetStateAction<number>>];
}) {
  const [indexNum, setIndexNum] = indexState;
  const serviceCardMapper = useCallback(
    function cardMapper(data: any, index: number) {
      return (
        <div
          className={`service-card img-container ${
            indexNum === index ? "active" : ""
          }`}
          key={index}
          onClick={() => {
            setIndexNum(index);
          }}
        >
          <Image
            src={`/assets/images/${data.imgUrl}`}
            alt="takatvar"
            fill
            sizes="100%"
            priority
            className="services-img"
          />
          <h3 className="card-heading">
            {index + 1}. {data.cardHeading}
          </h3>
        </div>
      );
    },
    [setIndexNum, indexNum]
  );
  return (
    <div className="service-cards-wrapper">
      <h2 className="wrapper-heading">Services We Offer</h2>
      <div className="service-cards-container">
        {dataArr.map(serviceCardMapper)}
      </div>
    </div>
  );
}

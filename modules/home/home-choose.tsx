import { useCallback } from "react";
import { chooseCardData } from "./home-data";

export default function HomeChoose() {
  const chooseCardsMapper = useCallback(function cardMapper(
    data: any,
    index: number
  ) {
    const { Icon } = data;
    return (
      <div className="choose-card" key={index}>
        <Icon className="card-icon" />
        <span className="choose-brief">{data.chooseCardBrief}</span>
      </div>
    );
  },
  []);
  return (
    <div className="home-choose">
      <h2 className="choose-heading">Why Choose Mr. Coconetto</h2>
      <div className="choose-cards-container">
        {chooseCardData.map(chooseCardsMapper)}
      </div>
    </div>
  );
}

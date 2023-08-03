import { useCallback } from "react";
import Image from "next/image";
import { memberDetails } from "./about-data";

export default function Team() {
  const memberMapper = useCallback((data: any, index: number) => {
    return (
      <div className="member-card" key={index}>
        <div className="img-container member-img-container">
          <Image
            src={`/assets/images/${data.src}`}
            fill
            sizes="100%"
            alt={data.memberName}
            priority
            className="member-img"
          />
        </div>
        <span className="member-name">{data.memberName}</span>
        <span className="member-position">{data.memberJob}</span>
      </div>
    );
  }, []);
  return (
    <div id="team">
      <div className="team-heading-container">
        <span className="team-header-span">The Coconetto Tree</span>
        <h2 className="team-heading">Meet our Team</h2>
      </div>
      <div className="team-card-container">
        {memberDetails.map(memberMapper)}
      </div>
    </div>
  );
}

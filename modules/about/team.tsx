import Image from "next/image";
import { FoundersDesc } from "./about-interface";

export default function Team({ teamData }: { teamData: FoundersDesc[] }) {
  return (
    <div id="team">
      <h2 className="team-heading">Founders</h2>

      {teamData.map((foundersData, index: number) => {
        return (
          <div className="member-card" key={index}>
            <div className="member-info">
              <h4 className="member-name">{foundersData.name}</h4>
              <span className="member-job">
                {foundersData.position}, Mr Coconetto
              </span>
              <p className="info">{foundersData.description}</p>
            </div>
            <div className="img-container member-img-container">
              <Image
                src={foundersData.profilePicture.url}
                fill
                sizes="100%"
                alt="About image"
                priority
                className="member-img"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

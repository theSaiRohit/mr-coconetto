import Image from "next/image";

export default function Team() {
  return (
    <div id="team">
      <h2 className="team-heading">Founders</h2>
      <div className="member-card">
        <div className="member-info">
          <h4 className="member-name">Rupesh Gaur</h4>
          <span className="member-job">CEO, Mr Coconetto</span>
          <p className="info">
            {`
            Mr Rupesh Gaur started Mr Coconetto in 2021 along with his close friends and family.\
            He is the driving force behind Mr Coconetto's success. Ever since he has attended\
            several national and international events for entrepreneurial purposes.`}
          </p>
        </div>
        <div className="img-container member-img-container">
          <Image
            src="/assets/images/man.jpg"
            fill
            sizes="100%"
            alt="About image"
            priority
            className="member-img"
          />
        </div>
      </div>
      <div className="member-card">
        <div className="member-info">
          <h4 className="member-name">Radha Gaur</h4>
          <span className="member-job">MD, Mr Coconetto</span>
          <p className="info">
            {`
            Mrs Radha Gaur along with Rupesh started Mr Coconetto in 2021 along with their close friends and family.\
            She has helped make several important key decisions to help thrive the business in the community.\
            `}
          </p>
        </div>
        <div className="img-container member-img-container">
          <Image
            src="/assets/images/woman.jpg"
            fill
            sizes="100%"
            alt="About image"
            priority
            className="member-img"
          />
        </div>
      </div>
    </div>
  );
}

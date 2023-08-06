import Image from "next/image";

export default function Team() {
  return (
    <div id="team">
      <h2 className="team-heading">Founders</h2>
      <div className="member-card">
        <div className="member-info">
          <h4 className="member-name">John Doe</h4>
          <span className="member-job">Chief Comedy Officer</span>
          <p className="info">
            {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptate aperiam blanditiis corporis\
          quae alias quasi. Laborum ipsa amet tenetur porro nulla odio cum vitae, sunt dolor, beatae\
          doloremque quaerat ipsum molestias eligendi officiis inventore nobis ratione culpa, hic magni.\
          Voluptas harum quibusdam officiis, soluta asperiores mollitia distinctio culpa sit!`}
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
          <h4 className="member-name">John Doe</h4>
          <span className="member-job">Chief Comedy Officer</span>
          <p className="info">
            {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptate aperiam blanditiis corporis\
          quae alias quasi. Laborum ipsa amet tenetur porro nulla odio cum vitae, sunt dolor, beatae\
          doloremque quaerat ipsum molestias eligendi officiis inventore nobis ratione culpa, hic magni.\
          Voluptas harum quibusdam officiis, soluta asperiores mollitia distinctio culpa sit!`}
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

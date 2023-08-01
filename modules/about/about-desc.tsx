import Image from "next/image";

export default function AboutDesc() {
  return (
    <main className="about-desc">
      <div className="img-container desc-img-container">
        <Image
          src="/assets/images/wedding.jpg"
          fill
          sizes="100%"
          alt="Header logo"
          priority
          className="desc-bg"
        />
      </div>
      <p className="desc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. In veritatis,
        perspiciatis laboriosam debitis nam\ reiciendis nostrum hic. Odio
        doloribus dolor soluta nobis eius. Ea deserunt perferendis eligendi
        architecto\ totam minima adexplicabo quod laboriosam!Accusantium ad
        ullam optio impedit deserunt.\ Eius cupiditate nesciunt quia cum
        similique corporis modi, assumenda quas?\ Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Corrupti, consectetur et ipsum repellat
        nesciunt\ cupiditate blanditiis eos alias dolorum! Recusandae.
      </p>
    </main>
  );
}

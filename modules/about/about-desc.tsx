import Image from "next/image";

export default function AboutDesc({ desc }: { desc: string[] }) {
  return (
    <main className="about-desc">
      <div className="img-container desc-img-container">
        <Image
          src={desc[1] ?? ""}
          fill
          sizes="100%"
          alt="Header logo"
          priority
          className="desc-bg"
        />
      </div>
      <p className="desc">{desc[0] ?? ""}</p>
    </main>
  );
}

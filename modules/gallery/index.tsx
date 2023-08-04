import Image from "next/image";

export default function Gallery() {
  const galImages = [
    {
      src: "/assets/images/coconut.png",
      alt: "Image 1",
    },
    {
      src: "/assets/images/coconut.png",
      alt: "Image 2",
    },
    {
      src: "/assets/images/coconut.png",
      alt: "Image 3",
    },
    {
      src: "/assets/images/coconut.png",
      alt: "Image 4",
    },
    {
      src: "/assets/images/coconut.png",
      alt: "Image 5",
    },
    {
      src: "/assets/images/coconut.png",
      alt: "Image 6",
    },
  ];
  const mapper = (
    item: {
      src: string;
      alt: string;
    },
    index: number
  ) => {
    return (
      <div className={`img-container _${index + 1}`} key={index}>
        <Image src={item.src} alt={item.alt} fill sizes="100%" />
      </div>
    );
  };
  return (
    <section aria-label="gallery" id="gallery-main">
      <h1 className="gal-heading">GALLERY</h1>
      <p className="gal-subheading">Peruse at your will</p>
      <div className="gallery-items">{galImages.map(mapper)}</div>
    </section>
  );
}

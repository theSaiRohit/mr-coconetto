import Image from "next/image";
import { galImageData } from "./gallery-interface";

const imageMapper = (
  item: galImageData["imagesCollection"]["items"][0],
  index: number
) => {
  return (
    <div className={`img-container _${index + 1}`} key={index}>
      <Image src={item.url} alt="xyz" fill sizes="100%" />
    </div>
  );
};

const sectionMapper = (elem: galImageData, ind: number) => {
  return (
    <div className="gallery-section" key={ind}>
      <p className="gal-subheading">{elem.heading}</p>
      <div className="gallery-items">
        {elem.imagesCollection.items.map(imageMapper)}
      </div>
    </div>
  );
};

export default function Gallery({ gdata }: { gdata: galImageData[] }) {
  return (
    <section aria-label="gallery" id="gallery-main">
      <h1 className="gal-heading">GALLERY</h1>
      <div className="gallery-sections">{gdata.map(sectionMapper)}</div>
    </section>
  );
}

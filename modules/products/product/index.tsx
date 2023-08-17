import Image from "next/image";
import DefaultButton from "@/components/default-button";

export default function ProductContainer({ data }: { data: any }) {
  return (
    <section id="single-product-container">
      {data.map((item: any, index: number) => {
        return (
          <>
            <div className="product-img-container img-container">
              <Image
                src={item.productImage.url}
                fill
                sizes="100%"
                alt={item.productName}
                className="product-img"
              />
            </div>
            <div className="product-info">
              <h1 className="product-name">{item.productName}</h1>
              <div className="qr-img-container img-container">
                <Image
                  src={item.productImage.url}
                  fill
                  sizes="100%"
                  alt={item.productName}
                  className="qr-img"
                />
              </div>
              <p className="product-description">{item.productDescription}</p>
              <DefaultButton>Message Us</DefaultButton>
            </div>
          </>
        );
      })}
    </section>
  );
}

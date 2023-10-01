import Head from "next/head";
import Image from "next/image";
import DefaultButton from "@/components/default-button";
import { ProductDataType } from "../types";

export default function ProductContainer({
  data,
}: {
  data: ProductDataType[];
}) {
  return (
    <>
      {data.map((item, index: number) => {
        return (
          <section
            id="single-product-container"
            aria-label={item.productName}
            key={index}
          >
            <Head>
              <title>Mr Coconetto | {item.productName}</title>
              <meta name="description" content="hello world" />
            </Head>
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
              <div className="qr-container">
                <div className="qr-img-container img-container">
                  <Image
                    src="/assets/images/qr code.jpg"
                    fill
                    sizes="100%"
                    alt={item.productName}
                    className="qr-img"
                  />
                </div>
                <span className="product-price">₹ {item.productPrice}</span>
                <span className="qr-msg">Scan QR code</span>
              </div>
              <p className="product-description">{item.productDescription}</p>
              <DefaultButton className="msg-btn">Message Us</DefaultButton>
            </div>
          </section>
        );
      })}
    </>
  );
}

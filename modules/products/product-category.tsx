import Image from "next/image";
import DefaultButton from "@/components/default-button";

export default function ProductCategory() {
  return (
    <div className="product-category" id="product-category">
      <h2 className="product-category-heading">Category One</h2>
      <div className="category-items">
        <div className="product">
          <div className="img-container product-img-container">
            <Image
              src="/assets/images/wedding.jpg"
              fill
              sizes="100%"
              alt="Header logo"
              priority
              className="product-img"
            />
          </div>
          <span className="product-name">Product Name</span>
          <span className="product-price">$ 500</span>
          <DefaultButton className="buy-btn" href="/">
            Buy Now
          </DefaultButton>
        </div>
        <div className="product">
          <div className="img-container product-img-container">
            <Image
              src="/assets/images/wedding.jpg"
              fill
              sizes="100%"
              alt="Header logo"
              priority
              className="product-img"
            />
          </div>
          <span className="product-name">Product Name</span>
          <span className="product-price">$ 500</span>
          <DefaultButton className="buy-btn" href="/">
            Buy Now
          </DefaultButton>
        </div>
        <div className="product">
          <div className="img-container product-img-container">
            <Image
              src="/assets/images/wedding.jpg"
              fill
              sizes="100%"
              alt="Header logo"
              priority
              className="product-img"
            />
          </div>
          <span className="product-name">Product Name</span>
          <span className="product-price">$ 500</span>
          <DefaultButton className="buy-btn" href="/">
            Buy Now
          </DefaultButton>
        </div>
      </div>
    </div>
  );
}

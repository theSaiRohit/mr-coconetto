import Image from "next/image";
import DefaultButton from "@/components/default-button";
import { ProductCategoryType, ProductDataType } from "./types";

export default function ProductCategory({
  productData,
}: {
  productData: ProductCategoryType[];
}) {
  return (
    <>
      {productData.map((data, index: number) => {
        const singleProductData = data.allProductsCollection.items;
        return (
          <div className="product-category" key={index}>
            <h2 className="product-category-heading">{data.heading}</h2>
            <div className="category-items">
              {singleProductData.map(
                (product: ProductDataType, indx: number) => {
                  return (
                    <div className="product" key={indx}>
                      <div className="img-container product-img-container">
                        <Image
                          src={product.productImage.url}
                          fill
                          sizes="100%"
                          alt={product.productName}
                          priority
                          className="product-img"
                        />
                      </div>
                      <span className="product-name">
                        {product.productName}
                      </span>
                      <span className="product-price">
                        $ {product.productPrice}
                      </span>
                      <DefaultButton
                        className="buy-btn"
                        href={`/products/${product.productName
                          .replaceAll(" ", "-")
                          .toLowerCase()}`}
                      >
                        Buy Now
                      </DefaultButton>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}

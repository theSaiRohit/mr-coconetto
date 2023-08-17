import Head from "next/head";
import ProductCategory from "./product-category";
import { ProductCategoryType } from "./types";

export default function ProductsContainer({
  allProductsData,
}: {
  allProductsData: ProductCategoryType[];
}) {
  return (
    <section id="products" aria-label="products">
      <Head>
        <title>Mr Coconetto | Products</title>
        <meta name="description" content="hello world" />
      </Head>
      <ProductCategory productData={allProductsData} />
    </section>
  );
}

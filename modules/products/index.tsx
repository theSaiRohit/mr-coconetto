import Head from "next/head";
import ProductCategory from "./product-category";

export default function ProductsContainer({
  allProductsData,
}: {
  allProductsData: any;
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

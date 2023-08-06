import Head from "next/head";
import ProductCategory from "./product-category";

export default function ProductsContainer() {
  return (
    <section id="home" aria-label="home">
      <Head>
        <title>Mr Coconetto | Products</title>
        <meta name="description" content="hello world" />
      </Head>
      <ProductCategory />
    </section>
  );
}

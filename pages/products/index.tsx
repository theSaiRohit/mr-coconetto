// import type { GetStaticProps } from "next";
import { GQLClient } from "@/clients";
import { products } from "@/gql/queries";
import ProductsContainer from "@/modules/products";

export const getStaticProps = async () => {
  const productQuery: any = await GQLClient.request(products);
  const productData = productQuery;
  return {
    props: { productData },
    revalidate: 6 * 60 * 60,
  };
};

export default function Products(props: any) {
  const { productData } = props;
  const data = productData.productsCategoryCollection.items;
  return <ProductsContainer allProductsData={data} />;
}

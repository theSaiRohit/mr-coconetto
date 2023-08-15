// import type { GetStaticProps } from "next";
import { GQLClient } from "@/clients";
import { products } from "@/gql/queries";
import ProductsContainer from "@/modules/products";

export const getStaticProps = async () => {
  const productQuery: any = await GQLClient.request(products);
  const productData = productQuery;
  return {
    props: { data: productData.productsCategoryCollection.items },
    revalidate: 6 * 60 * 60,
  };
};

export default function Products(props: any) {
  const { data } = props;
  return <ProductsContainer allProductsData={data} />;
}

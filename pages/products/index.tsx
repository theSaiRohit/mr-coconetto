import type { GetStaticProps } from "next";
import { GQLClient } from "@/clients";
import { products } from "@/gql/queries";
import ProductsContainer from "@/modules/products";
import {
  ProductCategoryQueryType,
  ProductCategoryType,
} from "@/modules/products/types";

export const getStaticProps: GetStaticProps = async () => {
  const productQuery: ProductCategoryQueryType = await GQLClient.request(
    products
  );
  const productData = productQuery.productsCategoryCollection.items;
  return {
    props: { productData },
    revalidate: 6 * 60 * 60,
  };
};

export default function Products({
  productData,
}: {
  productData: ProductCategoryType[];
}) {
  return <ProductsContainer allProductsData={productData} />;
}

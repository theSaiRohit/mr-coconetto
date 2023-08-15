import { GQLClient } from "@/clients";
import { singleProduct } from "@/gql/queries";

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { product: "coconut-one" } }],
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const { params } = context;
  const url = params?.product;

  const productQuery = (await GQLClient.request(singleProduct, {
    productName: "coconut one",
  })) as any;
  const productData = productQuery.productsCollection.items;
  return {
    props: { productData },
    revalidate: 6 * 6 * 60,
  };
};

export default function Product(props: any) {
  return <div>[product]</div>;
}

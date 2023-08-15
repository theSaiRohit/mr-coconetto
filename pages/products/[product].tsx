import { GQLClient } from "@/clients";
import { products, singleProduct } from "@/gql/queries";

export const getStaticPaths = async () => {
  // const a = await GQLClient.request(products);
  // const b = a.productsCategoryCollection.items;
  // let d;
  // const c = b.map((data) => {
  //   d = data.allProductsCollection.items;
  //   console.log(d);
  // });
  // d.map((data) => {
  // });
  return {
    paths: [{ params: { product: "coconut-one" } }],
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  // console.log(context);
  const { params }: any = context;
  console.log("this ", params);
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
  console.log(props);
  return <div>[product]</div>;
}

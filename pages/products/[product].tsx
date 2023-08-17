import { GQLClient } from "@/clients";
import { products, singleProduct } from "@/gql/queries";
import ProductContainer from "@/modules/products/product";

export const getStaticPaths = async () => {
  const allProductsQuery: any = await GQLClient.request(products);
  const allProductsData: any =
    allProductsQuery.productsCategoryCollection.items;
  let categoryData: any[] = [];
  allProductsData.forEach((categoryProducts: any) => {
    const a = categoryProducts.allProductsCollection.items.map((data: any) => {
      return {
        params: {
          product: (data.productName as string)
            .replace(/\s/gm, "-")
            .toLowerCase(),
        },
      };
    });
    categoryData = [...categoryData, ...a];
  });
  return {
    paths: categoryData,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const { params }: any = context;
  const url = params?.product;

  const productQuery = (await GQLClient.request(singleProduct, {
    productName: url.replaceAll("-", " "),
  })) as any;
  const productData = productQuery.productsCollection.items;
  return {
    props: { productData },
    revalidate: 6 * 6 * 60,
  };
};

export default function Product({ productData }: { productData: any }) {
  return <ProductContainer data={productData} />;
}

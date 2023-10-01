import { GQLClient } from "@/clients";
import { products, singleProduct } from "@/gql/queries";
import ProductContainer from "@/modules/products/product";
import {
  ProductCategoryQueryType,
  ProductCategoryType,
  ProductDataType,
  SingleProductQueryType,
} from "@/modules/products/types";

export const getStaticPaths = async () => {
  const allProductsQuery: ProductCategoryQueryType = await GQLClient.request(
    products
  );
  const allProductsData = allProductsQuery.productsCategoryCollection.items;
  let categoryData: {
    params: {
      product: string;
    };
  }[] = [];
  allProductsData.forEach((categoryProducts: ProductCategoryType) => {
    const a = categoryProducts.allProductsCollection.items.map((data) => {
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

export const getStaticProps = async (context: {
  params: {
    product: string;
  };
}) => {
  const { params } = context;
  const url = params?.product;

  const productQuery: SingleProductQueryType = await GQLClient.request(
    singleProduct,
    {
      productName: url.replaceAll("-", " "),
    }
  );
  const productData = productQuery.productsCollection.items;
  return {
    props: { productData },
    revalidate: 6 * 6 * 60,
  };
};

export default function Product({
  productData,
}: {
  productData: ProductDataType[];
}) {
  return <ProductContainer data={productData} />;
}

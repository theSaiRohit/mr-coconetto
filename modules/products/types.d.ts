export interface ProductCategoryQueryType {
  productsCategoryCollection: {
    items: ProductCategoryType[];
  };
}
[];

export interface ProductCategoryType {
  heading: string;
  allProductsCollection: {
    items: ProductDataType[];
  };
}
[];
export interface ProductDataType {
  productName: string;
  productPrice: string | number;
  productDescription?: string;
  productImage: {
    url: string;
  };
}
[];

export interface SingleProductQueryType {
  productsCollection: {
    items: ProductDataType[];
  };
}
[];

import { gql } from "graphql-request";

export const galleryItems = gql`
  query {
    galleryCollection {
      items {
        heading
        imagesCollection(limit: 6) {
          items {
            url
          }
        }
      }
    }
  }
`;

export const products = gql`
  query {
    productsCategoryCollection(limit: 10) {
      items {
        heading
        allProductsCollection {
          items {
            productName
            productPrice
            productImage {
              url
            }
          }
        }
      }
    }
  }
`;

export const singleProduct = gql`
  query ($productName: String!) {
    productsCollection(
      where: { productName_contains: $productName }
      limit: 1
    ) {
      items {
        productName
        productPrice
        productDescription
        productImage {
          url
        }
      }
    }
  }
`;

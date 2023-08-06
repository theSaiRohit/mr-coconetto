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

import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient(process.env.GRAPHQL_ENDPOINT as string, {
  headers: {
    authorization: `Bearer ${process.env.GQL_PREVIEW_TOKEN}`,
  },
});

export default client;

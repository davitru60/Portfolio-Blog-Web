// src/apolloClient.ts
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://gql.hashnode.com",
  cache: new InMemoryCache(),
});

export default client;

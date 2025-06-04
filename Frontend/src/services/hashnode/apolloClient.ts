import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://gql.hashnode.com",
  }),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache",   // para queries reactivas (useQuery)
      errorPolicy: "ignore",
    },
    query: {
      fetchPolicy: "no-cache",   // para queries simples
      errorPolicy: "all",
    },
  },
});

export default client;

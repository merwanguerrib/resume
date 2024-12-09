import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

// Create Apollo Client instance
export const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT || 'YOUR_GRAPHQL_ENDPOINT',
  cache: new InMemoryCache(),
});

// GraphQL Queries
export const GET_ARTICLES_QUERY = gql`
  query GetArticles {
    articles {
      id
      title
      slug
      content
      createdAt
    }
  }
`;

export const GET_ARTICLE_BY_SLUG_QUERY = gql`
  query GetArticleBySlug($slug: String!) {
    article(slug: $slug) {
      id
      title
      slug
      content
      createdAt
    }
  }
`;

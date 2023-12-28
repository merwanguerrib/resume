import { ApolloClient, InMemoryCache, HttpLink, gql } from '@apollo/client';

// Create an HTTP link to your Strapi endpoint
const httpLink = new HttpLink({
  uri: process.env.REACT_APP_STRAPI_APP_URL
    ? `${process.env.REACT_APP_STRAPI_APP_URL}/graphql`
    : 'http://localhost:1337/graphql',
});
// Create an Apollo Client instance
export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export const GET_ARTICLES_QUERY = gql`
  {
    articles {
      data {
        id
        attributes {
          slug
          title
          description
          content
          publishedAt
          image {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          author {
            data {
              id
              attributes {
                name
                picture {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
          category {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

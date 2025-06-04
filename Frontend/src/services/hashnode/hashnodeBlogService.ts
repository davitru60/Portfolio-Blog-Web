import { gql } from "@apollo/client";
import { GraphQLClient } from "graphql-request";
import {
  HashnodeAllPostsResponse,
  PostData
} from "../../interfaces/post";

const HASHNODE_HOST = "davitru60.hashnode.dev";

export const getClient = () => {
  return new GraphQLClient("https://gql.hashnode.com");
};

class HashnodeBlogService {
  static getBlogPosts = async (afterCursor?: string) => {
  const client = getClient();

  const query = gql`
    query allPosts($after: String) {
      publication(host: "${HASHNODE_HOST}") {
        id
        title
        posts(first: 3, after: $after) {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              id
              author {
                name
                profilePicture
              }
              title
              subtitle
              brief
              slug
              canonicalUrl
              coverImage {
                url
              }
              tags {
                name
                slug
              }
              series {
                name
                slug
              }
              publishedAt
              updatedAt
              readTimeInMinutes
              content {
                html
              }
              seo {
                description
              }
            }
          }
        }
      }
    }
  `;

  const variables = afterCursor ? { after: afterCursor } : {};

  const allPosts = await client.request<HashnodeAllPostsResponse>(query, variables);

  return allPosts;
};

  static getLatestThreePosts = async () => {
    const client = getClient();

    const query = gql`
      query latestPosts {
        publication(host: "${HASHNODE_HOST}") {
          id
          posts(first: 3) {
            edges {
              node {
                id
                author {
                  name
                  profilePicture
                }
                title
                subtitle
                brief
                slug
                canonicalUrl
                coverImage {
                  url
                }
                tags {
                  name
                  slug
                }
                series {
                  name
                  slug
                }
                publishedAt
                updatedAt
                readTimeInMinutes
                content {
                  html
                }
              }
            }
          }
        }
      }
    `;

    const data = await client.request<HashnodeAllPostsResponse>(query);

    return data.publication.posts.edges.map(edge => edge.node);
  }


   static getPostBySlug = async (slug: string) => {
    const client = getClient();

    const query = gql`
      query postDetails($slug: String!) {
        publication(host: "${HASHNODE_HOST}") {
          id
          post(slug: $slug) {
            id
            author {
              name
              profilePicture
            }
            publishedAt
            updatedAt
            title
            subtitle
            readTimeInMinutes
            slug
            content {
              html
              markdown
            }
            tags {
              name
              slug
            }
            series {
              name
              slug
            }
            coverImage {
              url
            }
            seo {
              description
            }
            features {
              tableOfContents {
                items {
                  id
                  level
                  slug
                  title
                  parentId
                }
              }
            }
          }
        }
      }
    `;

    const data = await client.request<PostData>(query, { slug });

    return data.publication.post;
  };
}

export { HashnodeBlogService };


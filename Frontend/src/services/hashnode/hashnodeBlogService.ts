/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql } from "@apollo/client";
import client from "./apolloClient";

const HASHNODE_HOST = "davitru60.hashnode.dev";

class HashnodeBlogService {
  static getBlogPosts = async () => {
    const { data } = await client.query({
      query: gql`
        query GetPosts($host: String!) {
          publication(host: $host) {
            posts(first: 10) {
              edges {
                node {
                  author {
                    name
                  }
                  title
                  slug
                  brief
                  publishedAt
                  coverImage {
                    url
                  }
                }
              }
            }
          }
        }
      `,
      variables: {
        host: HASHNODE_HOST,
      },
    });

    return data.publication.posts.edges.map((edge: any) => edge.node);
  };

  static getPostBySlug = async (slug: string) => {
    const { data } = await client.query({
      query: gql`
        query GetPostBySlug($host: String!, $slug: String!) {
          publication(host: $host) {
            post(slug: $slug) {
              title
              content {
                markdown
              }
              publishedAt
              coverImage {
                url
              }
            }
          }
        }
      `,
      variables: {
        host: HASHNODE_HOST,
        slug,
      },
    });

    return data.publication.post;
  };

  static getPostIdBySlug = async (slug: string) => {
    const { data } = await client.query({
      query: gql`
        query GetPostId($host: String!, $slug: String!) {
          publication(host: $host) {
            post(slug: $slug) {
              id
            }
          }
        }
      `,
      variables: {
        host: HASHNODE_HOST,
        slug,
      },
    });

    return data.publication.post.id;
  };

  static likePost = async (postId: string) => {
    const { data } = await client.mutate({
      mutation: gql`
        mutation LikePost($input: LikePostInput!) {
          likePost(input: $input) {
            post {
              id
              title
              reactionCount
              likedBy {
                totalCount
              }
            }
          }
        }
      `,
      variables: {
        input: { postId },
      },
    });

    return data.likePost.post;
  };
}

export { HashnodeBlogService };

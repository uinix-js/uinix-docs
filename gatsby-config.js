require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'uinix-docs',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md', '.mdx'],
        gatsbyRemarkPlugins: [
          'gatsby-remark-table-of-contents',
          'gatsby-remark-autolink-headers',
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'documents',
        path: 'src/documents',
      },
    },
    {
      resolve: 'gatsby-source-github-api',
      options: {
        token: process.env.GITHUB_API_TOKEN,
        variables: {
          query: 'user:uinix-js is:public archived:false sort:stars',
        },
        graphQLQuery: `
          query github($query: String!) {
            repos: search(query: $query, type: REPOSITORY, first: 100) {
              edges {
                node {
                  ... on Repository {
                    name
                    description
                    homepageUrl
                    url
                    pushedAt
                    repositoryTopics(first: 100) {
                      edges {
                        node {
                          topic {
                            name
                          }
                        }
                      }
                    }
                    stargazers {
                      totalCount
                    }
                    readme: object(expression: "main:readme.md") {
                      ... on Blob {
                        text
                      }
                    }
                    package: object(expression: "main:package.json") {
                      ... on Blob {
                        text
                      }
                    }
                  }
                }
              }
            }
          }
        `,
      },
    },
  ],
};

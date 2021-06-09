/**
 * Transforms GraphQL result to a map of repos
 * @template Query, Repo
 * @param {Query} graphql Gatsby graphql
 * @returns {Promise<Object<string, Repo>>} map of repos
 */
export const queryAllRepos = async (graphql) => {
  const result = await graphql(`
    query allRepos {
      githubData {
        data {
          repos {
            edges {
              node {
                description
                homepageUrl
                name
                package {
                  text
                }
                pushedAt
                readme {
                  text
                }
                repositoryTopics {
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
                url
              }
            }
          }
        }
      }
    }
  `);

  return result.data.githubData.data.repos.edges.reduce((acc, repoEdge) => {
    const {
      description,
      homepageUrl,
      name,
      package: pkg,
      pushedAt,
      readme,
      repositoryTopics,
      stargazers,
      url,
    } = repoEdge.node;
    const tags = repositoryTopics.edges.map((edge) => edge.node.topic.name);
    const repo = {
      description,
      homepageUrl,
      name,
      package: JSON.parse(pkg.text),
      pushedAt,
      readme: readme.text,
      stars: stargazers.totalCount,
      tags,
      url,
    };
    acc[name] = repo;
    return acc;
  }, {});
};

export const transformMdxResultToLinks = (data) =>
  data.allMdx.edges.map((edge) => {
    const {frontmatter, slug, timeToRead} = edge.node;
    const {description, tags, title} = frontmatter;
    return {
      description,
      tags: [`${timeToRead}min`, ...tags],
      text: title,
      to: `/${slug}`,
    };
  });

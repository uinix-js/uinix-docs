export const transformMdxResultToLinks = (data) => {
  return data.allMdx.edges.map((edge) => {
    const {frontmatter, slug, timeToRead} = edge.node;
    const {description, tags, title} = frontmatter;
    return {
      description,
      tags: [`${timeToRead}min`, ...tags],
      text: title,
      to: `/${slug}`,
    };
  });
};

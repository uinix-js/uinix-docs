module.exports = {
  siteMetadata: {
    title: 'uinix-docs',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md', '.mdx'],
      },
    },
  ],
};

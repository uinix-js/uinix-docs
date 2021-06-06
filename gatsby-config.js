module.exports = {
  siteMetadata: {
    title: 'uinix-docs',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/layouts/page-layout.js'),
        },
        extensions: ['.md', '.mdx'],
        gatsbyRemarkPlugins: [
          'gatsby-remark-table-of-contents',
          'gatsby-remark-autolink-headers',
        ],
      },
    },
  ],
};

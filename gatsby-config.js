module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          pages: require.resolve('./src/layouts/page-layout.js'),
        },
        extensions: ['.md', '.mdx'],
        gatsbyRemarkPlugins: [
          'gatsby-remark-autolink-headers',
          'gatsby-remark-table-of-contents',
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: 'src/pages',
      },
    },
  ],
};

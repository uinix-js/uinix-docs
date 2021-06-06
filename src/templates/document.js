import {graphql} from 'gatsby';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import React from 'react';

import PageLayout from '../layouts/page-layout.js';

const Document = ({data}) => {
  const {body, frontmatter} = data.mdx;
  return (
    <PageLayout>
      <MDXRenderer frontmatter={frontmatter}>{body}</MDXRenderer>
    </PageLayout>
  );
};

export const pageQuery = graphql`
  query DocumentQuery($id: String) {
    mdx(id: {eq: $id}) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`;

export default Document;

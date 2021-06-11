import {graphql} from 'gatsby';
import React from 'react';

import NavPageLayout from '../../layouts/nav-page-layout.js';
import {transformMdxResultToLinks} from '../../transforms/index.js';

const Page = ({data}) => {
  const description =
    'Guides, tutorials, and writings on building UIs easily with uinix-js.';
  const links = transformMdxResultToLinks(data);

  return <NavPageLayout description={description} links={links} />;
};

export const pageQuery = graphql`
  query allDocuments {
    allMdx(filter: {slug: {regex: "/^learn//"}}) {
      edges {
        node {
          frontmatter {
            description
            tags
            title
          }
          parent {
            ... on File {
              name
            }
          }
          slug
          timeToRead
        }
      }
    }
  }
`;

export default Page;

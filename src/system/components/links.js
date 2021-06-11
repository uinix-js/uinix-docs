import {Link} from 'gatsby';
import React from 'react';
import {Layout, Text} from 'uinix-ui';

import {coerceLinks} from '../../utils/index.js';
import BrandText from './brand-text.js';
import Chips from './chips.js';
import Markdown from './markdown.js';

const Links = ({links}) => {
  return (
    <nav>
      <Layout as="ul" direction="column">
        {coerceLinks(links).map((link) => {
          const {description, tags, text, to} = link;
          return (
            <li key={to}>
              <Layout align="flex-start" direction="column">
                <Link to={to}>
                  <BrandText text={text} />
                </Link>
                {description && (
                  <Text variant="description">
                    <Markdown content={description} />
                  </Text>
                )}
                {tags && <Chips chips={tags} />}
              </Layout>
            </li>
          );
        })}
      </Layout>
    </nav>
  );
};

export default Links;
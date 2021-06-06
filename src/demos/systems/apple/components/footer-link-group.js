import React from 'react';
import {Layout, Text} from 'uinix-ui';

const FooterLinkGroup = ({group}) => {
  const {name, links} = group;
  return (
    <Layout as="ul" direction="column" spacing="x1">
      <Text as="h3" variant="small">
        {name}
      </Text>
      {links.map(({title, href}) => (
        <li key={title}>
          <Text as="a" href={href} variant="textLink">
            {title}
          </Text>
        </li>
      ))}
    </Layout>
  );
};

export default FooterLinkGroup;

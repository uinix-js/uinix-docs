import React from 'react';
import {Icon, Layout, Text} from 'uinix-ui';

const IconText = ({href, icon, text, onClick}) => {
  return (
    <Text
      as={href ? 'a' : 'div'}
      href={href}
      variant="description"
      onClick={onClick}
    >
      <Layout align="center" spacing="xs">
        <Icon icon={icon} size="icon.s" title={text} />
        <span>{text}</span>
      </Layout>
    </Text>
  );
};

export default IconText;

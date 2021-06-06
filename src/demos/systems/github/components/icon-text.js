import React from 'react';
import {Icon, Layout, Text} from 'uinix-ui';

const IconText = ({as, icon, iconColor, text, textVariant, ...rest}) => {
  return (
    <Text as={as} variant={textVariant} {...rest}>
      <Layout align="center" spacing="s">
        {icon && <Icon color={iconColor} icon={icon} size="icon.m" />}
        <span>{text}</span>
      </Layout>
    </Text>
  );
};

export default IconText;

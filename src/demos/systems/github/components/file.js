import React from 'react';
import {Icon, Layout, Text, useStyles} from 'uinix-ui';

const File = ({file}) => {
  const styles = useStyles();

  const {type, name, commitMessage, at} = file;
  const href = `https://github.com/uinix-js/uinix-ui/tree/main/${name}`;
  const iconColor = type === 'directory' ? 'icon.directory' : 'icon.default';

  return (
    <Layout
      align="center"
      bb="bordered"
      px="m"
      py="s"
      spacing="m"
      styles={styles.hover}
    >
      <Icon color={iconColor} icon={type} size="icon.m" />
      <Text
        truncate
        as="a"
        flex="none"
        href={href}
        color="text.primary"
        variant="linkText"
        w="20%"
      >
        {name}
      </Text>
      <Text truncate as="a" flex="auto" href={href} variant="link">
        {commitMessage}
      </Text>
      <Text
        truncate
        color="text.secondary"
        flex="none"
        textAlign="right"
        w="20%"
      >
        {at}
      </Text>
    </Layout>
  );
};

export default File;

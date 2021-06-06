import React from 'react';
import {Icon, Layout, Text, useStyles} from 'uinix-ui';

const Button = ({
  count = null,
  icon,
  text,
  variant = 'default',
  onClick,
  onExpand,
}) => {
  const styles = useStyles();

  const hasCount = count !== null;

  return (
    <Layout
      as="button"
      px={hasCount ? 's' : 'm'}
      py="0"
      variant={`Button.${variant}`}
      onClick={onClick}
    >
      <Layout align="center" flex="none" spacing="s">
        {icon && <Icon icon={icon} size="icon.m" />}
        <Text
          pr={hasCount ? 's' : undefined}
          styles={onExpand ? styles.caret : null}
          variant="button"
        >
          {text}
        </Text>
      </Layout>
      {count && (
        <Layout align="center" bl="bordered" pl="s">
          <Text variant="button">{count}</Text>
        </Layout>
      )}
    </Layout>
  );
};

export default Button;

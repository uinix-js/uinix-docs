import React from 'react';
import {Layout, Text, useStyles} from 'uinix-ui';

import User from '../user.js';

const Message = ({message}) => {
  const styles = useStyles();

  const {at, text, user} = message;

  return (
    <Layout
      align="flex-start"
      justify="space-between"
      px="l"
      py="s"
      spacing="s"
      styles={styles.hover}
    >
      <Layout align="center" flex="none" spacing="s">
        <Text variant="messageTime">{at}</Text>
        <User isConcise size="s" user={user} />
      </Layout>
      <Text flex="auto" variant="message">
        {text}
      </Text>
    </Layout>
  );
};

export default Message;

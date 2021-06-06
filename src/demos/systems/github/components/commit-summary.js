import React from 'react';
import {Layout, Text} from 'uinix-ui';

import {commitSummary} from '../data.js';
import IconText from './icon-text.js';
import User from './user.js';

const CommitSummary = () => {
  const {at, hash, isVerified, message, user} = latest;
  return (
    <Layout align="center" justify="space-between" spacing="s">
      <Layout align="center" spacing="m">
        <User user={user} />
        <Text
          truncate
          as="a"
          color="text.primary"
          href="#top"
          variant="linkText"
        >
          {message}
        </Text>
      </Layout>
      <Layout align="center" spacing="m">
        <IconText
          as="a"
          href="#top"
          icon={isVerified ? 'check' : null}
          text={hash}
          iconColor="tone.success"
          textVariant="link"
        />
        <Text as="a" href="#top" variant="link">
          {at}
        </Text>
        <IconText
          icon="history"
          text={
            <>
              <strong>{total}</strong> commits
            </>
          }
          textVariant="linkText"
        />
      </Layout>
    </Layout>
  );
};

const {latest, total} = commitSummary;

export default CommitSummary;

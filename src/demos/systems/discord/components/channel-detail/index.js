import React, {useState} from 'react';
import {Layout, useStyles} from 'uinix-ui';

import Header from './header.js';
import MembersSidebar from './members-sidebar.js';
import Messages from './messages.js';

const ChannelDetail = () => {
  const styles = useStyles();
  const [shouldShowMembers, setShouldShowMembers] = useState(true);

  return (
    <Layout
      bg="background.primary"
      direction="column"
      flex="auto"
      styleProps={{scrollbarWidth: 'none'}}
      styles={styles.scrollable}
    >
      <Header
        shouldShowMembers={shouldShowMembers}
        onToggleMembers={() => setShouldShowMembers(!shouldShowMembers)}
      />
      <Layout>
        <Messages />
        {shouldShowMembers && <MembersSidebar />}
      </Layout>
    </Layout>
  );
};

export default ChannelDetail;

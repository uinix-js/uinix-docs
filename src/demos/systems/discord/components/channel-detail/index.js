import React, {useState} from 'react';
import {Layout} from 'uinix-ui';

import Header from './header.js';
import MembersSidebar from './members-sidebar.js';
import Messages from './messages.js';

const ChannelDetail = () => {
  const [shouldShowMembers, setShouldShowMembers] = useState(true);

  return (
    <Layout bg="background.primary" direction="column" flex="auto">
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

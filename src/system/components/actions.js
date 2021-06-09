import React from 'react';
import {Layout} from 'uinix-ui';

import IconText from './icon-text.js';

const Actions = ({actions}) => {
  return (
    <Layout wrap spacing="m" wrapSpacing="xs">
      {actions.map((action) => {
        const {href, icon, text} = action;
        return <IconText key={icon} href={href} icon={icon} text={text} />;
      })}
    </Layout>
  );
};

export default Actions;

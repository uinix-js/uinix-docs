import React from 'react';
import {noop} from 'uinix-fp';
import {Element, Icon, useStyles} from 'uinix-ui';

const Settings = () => {
  const styles = useStyles();
  return (
    <Element borderRadius="round" p="x2" styles={styles.hover}>
      <Icon
        color="icon.default"
        icon="settings"
        size="icon.l"
        title="Google apps"
        onClick={noop}
      />
    </Element>
  );
};

export default Settings;

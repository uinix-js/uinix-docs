import React from 'react';
import {Element, Layout} from 'uinix-ui';

const MacbookImage = ({src}) => {
  return (
    <Layout align="flex-end" h="macbookContainer">
      <Element as="img" src={src} styles={styles.fit} />
    </Layout>
  );
};

const styles = {
  fit: {
    height: 'auto',
    objectFit: 'contain',
    width: '100%',
  },
};

export default MacbookImage;
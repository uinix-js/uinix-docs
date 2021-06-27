import React, {useState} from 'react';
import {Icon, Layout, useStyles} from 'uinix-ui';

import {pages} from '../data.js';
import Alphabet from './alphabet.js';

const Pagination = () => {
  const [activePageIndex, setActivePageIndex] = useState(1);
  const styles = useStyles();

  return (
    <Layout styles={styles.selfCentered}>
      <Alphabet color="blue" value="G" />
      {pages.map((pageIndex) => (
        <a key={pageIndex} href="#top">
          <Layout
            align="center"
            direction="column"
            spacing="x1"
            onClick={() => setActivePageIndex(pageIndex)}
          >
            <Alphabet
              color={activePageIndex === pageIndex ? 'red' : 'yellow'}
              value="o"
            />
            <span>{pageIndex + 1}</span>
          </Layout>
        </a>
      ))}
      <Alphabet color="blue" value="g" />
      <Alphabet color="green" value="l" />
      <Alphabet color="red" value="e" />
      <a href="#top">
        <Layout direction="column" px="x4" py="x3" spacing="x2">
          <Icon
            color="brand.blue"
            icon="chevronRight"
            size="icon.m"
            title="Next page"
          />
          <span>Next</span>
        </Layout>
      </a>
    </Layout>
  );
};

export default Pagination;

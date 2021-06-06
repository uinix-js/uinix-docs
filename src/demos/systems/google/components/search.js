import React, {useState} from 'react';
import {Icon, Layout} from 'uinix-ui';

import {LOREM_IPSUM} from '../data.js';
import Divider from './divider.js';

const Search = () => {
  const [query, setQuery] = useState(LOREM_IPSUM);

  return (
    <Layout align="center" px="x6" py="x1" spacing="x4" styles={styles.search}>
      <Layout
        as="input"
        flex="auto"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <Layout align="center" spacing="x4">
        {query && (
          <>
            <Icon
              color="icon.default"
              icon="x"
              size="icon.m"
              title="Clear"
              onClick={() => setQuery('')}
            />
            <Divider isVertical />
          </>
        )}
        <Icon
          color="brand.primary"
          icon="search"
          size="icon.m"
          title="Search"
        />
      </Layout>
    </Layout>
  );
};

const styles = {
  search: {
    borderRadius: 'pill',
    boxShadow: 'search.default',
    width: 'width.search',
    ':hover': {
      boxShadow: 'search.hovered',
    },
  },
};

export default Search;

import React from 'react';
import {Layout} from 'uinix-ui';

import Aside from './aside.js';
import Container from './container.js';
import Pagination from './pagination.js';
import RelatedSearches from './related-searches.js';
import Results from './results.js';
import ResultStats from './result-stats.js';

const Main = () => {
  return (
    <Layout as="main" direction="column">
      <Container>
        <ResultStats />
      </Container>
      <Layout flex="none" spacing="x15">
        <Container>
          <Layout direction="column" spacing="x10">
            <Results />
            <RelatedSearches />
            <Pagination />
          </Layout>
        </Container>
        <Aside />
      </Layout>
    </Layout>
  );
};

export default Main;

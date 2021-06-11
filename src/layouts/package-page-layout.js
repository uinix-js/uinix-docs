import React from 'react';
import {Layout, Text} from 'uinix-ui';

import PageLayout from '../layouts/page-layout.js';
import {BrandText, Card, Chips, Links} from '../system/components/index.js';
import {getRepoLink} from '../utils/index.js';

const PackagePageLayout = ({links = [], pkg}) => {
  const {name, description, keywords, version} = pkg;

  const stats = (
    <Card>
      <Layout direction="column" spacing="s">
        <Text as="h3" variant="headingLink">
          <Text as="a" href={getRepoLink(name)}>
            <BrandText text={name} />
          </Text>
          <Text
            as="a"
            color="text.light"
            href={`https://www.npmjs.com/package/${name}/v/${version}`}
          >
            @{version}
          </Text>
        </Text>
        <Text variant="description">{description}</Text>
        <Chips chips={keywords} />
      </Layout>
    </Card>
  );

  return (
    <PageLayout>
      {stats}
      <Links links={links} />
    </PageLayout>
  );
};

export default PackagePageLayout;

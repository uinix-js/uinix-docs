import {Link} from 'gatsby';
import React from 'react';
import {Layout, Text} from 'uinix-ui';

import PageLayout from '../layouts/page-layout.js';
import {BrandText, Card, Chips, Links} from '../system/components/index.js';
import {getRepoLink} from '../utils/index.js';

const PackagePageLayout = ({pkg, resources = []}) => {
  const {name, description, keywords, version} = pkg;

  const stats = (
    <Card>
      <Layout direction="column" spacing="m">
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
        <Link to="readme">
          <h4>Readme</h4>
        </Link>
      </Layout>
    </Card>
  );

  return (
    <PageLayout>
      <Layout direction="column" spacing="m">
        <div />
        {stats}
        {resources.map(({name, links}) => (
          <div key={name}>
            <h4>{name}</h4>
            <Links links={links} />
          </div>
        ))}
      </Layout>
    </PageLayout>
  );
};

export default PackagePageLayout;

import React from 'react';
import {Layout, Text} from 'uinix-ui';

import PageLayout from '../layouts/page-layout.js';
import {
  Actions,
  BrandText,
  Card,
  Chips,
  Markdown,
} from '../system/components/index.js';

const Package = ({pageContext}) => {
  const {
    name,
    package: pkg,
    pushedAt,
    readme,
    stars,
    tags,
    url,
  } = pageContext.data;
  const {license, version} = pkg;

  const actions = [
    {
      href: `https://opensource.org/licenses/${license}`,
      icon: 'license',
      text: license,
    },
    {
      href: `${url}/stargazers`,
      icon: 'star',
      text: stars,
    },
    {
      href: `${url}/commits`,
      icon: 'commit',
      text: new Date(pushedAt).toLocaleDateString(),
    },
  ];

  const stats = (
    <Card>
      <Layout direction="column" spacing="s">
        <Layout
          wrap
          align="center"
          justify="space-between"
          spacing="l"
          wrapSpacing="xs"
        >
          <Text as="h3" fontWeight="bold" variant="unset">
            <Text as="a" href={url}>
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
          <Actions actions={actions} />
        </Layout>
        <Chips chips={tags} />
      </Layout>
    </Card>
  );

  return (
    <PageLayout>
      <Layout direction="column" spacing="l">
        {stats}
        <section>
          <Markdown content={readme} />
        </section>
      </Layout>
    </PageLayout>
  );
};

export default Package;

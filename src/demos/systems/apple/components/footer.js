import React from 'react';
import {Element, Layout, Text} from 'uinix-ui';

import Breadcrumbs from './breadcrumbs.js';
import Container from './container.js';
import Footnotes from './footnotes.js';
import FooterLinkGroups from './footer-link-groups.js';

const Footer = () => (
  <Element
    as="footer"
    bg="background.footer"
    color="text.secondary"
    pb="x8"
    pt="x5"
  >
    <Container direction="column" spacing="x10">
      <Layout direction="column" spacing="x4">
        <Footnotes />
        <hr />
        <Breadcrumbs />
        <FooterLinkGroups />
      </Layout>
      <Layout direction="column" spacing="x2">
        <Text color="text.light" variant="small">
          More ways to shop:{' '}
          <a href="https://www.apple.com/retail/">Find an Apple Store</a> or{' '}
          <a href="https://locate.apple.com/">other retailer</a> near you. Or
          call 1-800-MY-APPLE.
        </Text>
        <hr />
        <Layout align="center" justify="space-between" spacing="x4">
          <Layout align="center" spacing="x8">
            <Text color="text.light" variant="small">
              Copyright © 2021 Apple Inc. All rights reserved.
            </Text>
            <Layout align="center" spacing="x3">
              {siteLinks.map(({title, href}, i) => (
                <Text
                  key={title}
                  as="a"
                  br={i < siteLinks.length - 1 ? 'dark' : undefined}
                  href={href}
                  pr="x3"
                  variant="textLink"
                >
                  {title}
                </Text>
              ))}
            </Layout>
          </Layout>
          <Text
            as="a"
            href="https://www.apple.com/choose-country-region/"
            variant="textLink"
          >
            United States
          </Text>
        </Layout>
      </Layout>
    </Container>
  </Element>
);

const siteLinks = [
  {title: 'Privacy Policy', href: 'https://www.apple.com/legal/privacy/'},
  {
    title: 'Terms of Use',
    href: 'https://www.apple.com/legal/internet-services/terms/site.html',
  },
  {
    title: 'Sales and Refunds',
    href: 'https://www.apple.com/shop/browse/open/salespolicies',
  },
  {title: 'Legal', href: 'https://www.apple.com/legal/'},
  {title: 'Site Map', href: 'https://www.apple.com/sitemap/'},
];

export default Footer;

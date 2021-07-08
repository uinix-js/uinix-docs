import React from 'react';
import {Layout, Text} from 'uinix-ui';

const Footer = () => (
  <Layout as="footer" align="center" direction="column" py="xl" spacing="s">
    <Layout as="ul" align="center" spacing="m">
      <li>
        <Text variant="small">© 2021 GitHub, Inc</Text>
      </li>
      {links.slice(0, 5).map(({href, label}) => (
        <Text key={label} as="li" variant="small">
          <a href={href}>{label}</a>
        </Text>
      ))}
    </Layout>
    <Layout as="ul" spacing="m">
      {links.slice(5).map(({href, label}) => (
        <Text key={label} as="li" variant="small">
          <a href={href}>{label}</a>
        </Text>
      ))}
    </Layout>
  </Layout>
);

const links = [
  {
    label: 'Terms',
    href: 'https://docs.github.com/en/github/site-policy/github-terms-of-service',
  },
  {
    label: 'Privacy',
    href: 'https://docs.github.com/en/github/site-policy/github-privacy-statement',
  },
  {
    label: 'Security',
    href: 'https://github.com/security',
  },
  {
    label: 'Status',
    href: 'https://www.githubstatus.com/',
  },
  {
    label: 'Docs',
    href: 'https://docs.github.com/en',
  },
  {
    label: 'Contact Github',
    href: 'https://support.github.com/',
  },
  {
    label: 'Pricing',
    href: 'https://github.com/pricing',
  },
  {
    label: 'API',
    href: 'https://docs.github.com/en',
  },
  {
    label: 'Training',
    href: 'https://services.github.com/',
  },
  {
    label: 'Blog',
    href: 'https://github.blog/',
  },
  {
    label: 'About',
    href: 'https://github.com/about',
  },
];

export default Footer;

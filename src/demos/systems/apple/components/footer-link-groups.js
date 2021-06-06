import React from 'react';
import {Layout} from 'uinix-ui';

import {footerLinkGroups} from '../data.js';
import FooterLinkGroup from './footer-link-group.js';

const {
  account,
  about,
  business,
  education,
  healthcare,
  government,
  services,
  shop,
  store,
  values,
} = footerLinkGroups;

const FooterLinkGroups = () => {
  return (
    <Layout spacing="x8">
      <FooterLinkGroup group={shop} />
      <Layout direction="column" spacing="x8">
        <FooterLinkGroup group={services} />
        <FooterLinkGroup group={account} />
      </Layout>
      <FooterLinkGroup group={store} />
      <Layout direction="column" spacing="x8">
        <FooterLinkGroup group={business} />
        <FooterLinkGroup group={education} />
        <FooterLinkGroup group={healthcare} />
        <FooterLinkGroup group={government} />
      </Layout>
      <Layout direction="column" spacing="x8">
        <FooterLinkGroup group={values} />
        <FooterLinkGroup group={about} />
      </Layout>
    </Layout>
  );
};

export default FooterLinkGroups;

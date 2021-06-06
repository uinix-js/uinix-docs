import React, {useState} from 'react';
import {noop} from 'uinix-fp';
import {Element, Icon, Layout, Text, useStyles} from 'uinix-ui';

import Container from './container.js';

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const styles = useStyles();

  return (
    <Element bb="bordered" color="text.gray2">
      <Container>
        <Layout align="center" justify="space-between">
          <Layout spacing="x6">
            {tabs.map((tab) => {
              const {icon} = tabsData[tab];
              return (
                <Layout
                  key={tab}
                  align="center"
                  py="x2"
                  spacing="x1"
                  styleProps={{isSelected: selectedTab === tab}}
                  styles={styles.selectedTab}
                  onClick={() => setSelectedTab(tab)}
                >
                  <Icon icon={icon} size="icon.s" />
                  <Text variant="google">{tab}</Text>
                </Layout>
              );
            })}
          </Layout>
          <Layout spacing="x6" styles={styles.selectedTab}>
            <Text variant="google" onClick={noop}>
              Settings
            </Text>
            <Text variant="google" onClick={noop}>
              Tools
            </Text>
          </Layout>
        </Layout>
      </Container>
    </Element>
  );
};

const tabsData = {
  All: {
    icon: 'search',
  },
  Images: {
    icon: 'images',
  },
  News: {
    icon: 'news',
  },
  Books: {
    icon: 'books',
  },
  Videos: {
    icon: 'videos',
  },
  More: {
    icon: 'more',
  },
};

const tabs = ['All', 'Images', 'News', 'Books', 'Videos', 'More'];

export default Tabs;

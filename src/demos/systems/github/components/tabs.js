import React, {useState} from 'react';
import {Icon, Layout, Text} from 'uinix-ui';

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState('code');

  return (
    <Layout as="ul" variant="nav.unset">
      {Object.entries(tabsData).map(([tab, {icon, label}]) => {
        const isSelected = selectedTab === tab;
        return (
          <Layout
            key={tab}
            as="li"
            align="center"
            flex="none"
            px="m"
            py="s"
            spacing="s"
            styleProps={{isSelected}}
            styles={styles.tab}
            onClick={() => setSelectedTab(tab)}
          >
            <Icon
              color={isSelected ? 'currentColor' : 'icon.default'}
              icon={icon}
              size="icon.m"
            />
            <Text fontWeight={isSelected ? 'bold' : 'normal'} variant="navItem">
              {label}
            </Text>
          </Layout>
        );
      })}
    </Layout>
  );
};

const styles = {
  tab: ({isSelected}) => ({
    borderBottom: 'bordered',
    borderColor: isSelected ? 'tone.attention' : 'transparent',
    borderWidth: 'm',
    cursor: 'pointer',
    ':hover': {
      borderColor: isSelected ? 'tone.attention' : 'border.default',
    },
  }),
};

const tabsData = {
  code: {
    icon: 'code',
    label: 'Code',
  },
  issues: {
    icon: 'issue',
    label: 'Issues',
  },
  pullRequests: {
    icon: 'pullRequest',
    label: 'Pull requests',
  },
  actions: {
    icon: 'play',
    label: 'Actions',
  },
  projects: {
    icon: 'project',
    label: 'Projects',
  },
  wiki: {
    icon: 'book',
    label: 'Wiki',
  },
  security: {
    icon: 'shield',
    label: 'Security',
  },
  insights: {
    icon: 'graph',
    label: 'Insights',
  },
};

export default Tabs;

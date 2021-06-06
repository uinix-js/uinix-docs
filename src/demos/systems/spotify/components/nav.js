import React, {useState} from 'react';
import {Layout} from 'uinix-ui';

import Logo from './logo.js';
import NavItem from './nav-item.js';

const Nav = () => {
  const [selectedItem, setSelectedItem] = useState(items[0]);
  return (
    <Layout bg="black" direction="column" flex="none" w="width.nav">
      <Layout
        as="nav"
        direction="column"
        position="sticky"
        px="m"
        py="l"
        spacing="l"
        top={0}
      >
        <Logo />
        <Layout direction="column" as="ul">
          {items.map((item) => (
            <NavItem
              key={item.icon}
              item={item}
              isSelected={selectedItem === item}
              onSelect={setSelectedItem}
            />
          ))}
        </Layout>
      </Layout>
    </Layout>
  );
};

const items = [
  {icon: 'home', label: 'Home'},
  {icon: 'search', label: 'Search'},
  {icon: 'library', label: 'Your Library'},
  {icon: 'create', label: 'Create Playlist'},
  {icon: 'heart', label: 'Liked Songs'},
];

export default Nav;

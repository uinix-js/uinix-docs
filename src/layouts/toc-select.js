import useInterval from '@use-it/interval';
import {navigate} from 'gatsby';
import React, {useEffect, useState} from 'react';
import Select, {components} from 'react-select';
import {Element, Icon, Layout, Text} from 'uinix-ui';

const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const scrollTolerancePx = 20;

const TocSelect = () => {
  const [canScrollTop, setCanScrollTop] = useState(false);
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setCanScrollTop(document.documentElement.scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useInterval(() => {
    const selectors = headings.map((heading) => `${heading}[id]`).join(',');
    const headingNodes = document.querySelectorAll(selectors);

    let previousActiveId;
    let previousLevel = 0;
    const keys = [];
    let key = 0;
    const toc = Array.from(headingNodes).map((node) => {
      const {id, nodeName, textContent} = node;
      const {y} = node.getBoundingClientRect();
      const level = Number(nodeName[1]);

      if (!previousActiveId || y < scrollTolerancePx) {
        previousActiveId = id;
      }

      if (level > previousLevel) {
        key = 1;
        keys.push(key);
      } else if (level === previousLevel) {
        key++;
        keys.push(keys.pop() + 1);
      } else if (level < previousLevel) {
        keys.pop();
        keys.push(keys.pop() + 1);
      }

      previousLevel = level;

      return {
        value: id,
        keys: [...keys],
        label: textContent,
      };
    });

    setValue(previousActiveId);
    setOptions(toc);
  }, 1000);

  if (options.length === 0) {
    return null;
  }

  const handleChange = ({value}) => {
    setValue(value);
    navigate(`${window.location.pathname}#${value}`);
  };

  const activeOption = options.find((option) => option.value === value);

  return (
    <Element styles={styles.container}>
      <Element styles={styles.select}>
        <Select
          components={{
            IndicatorsContainer,
            MenuList,
            NoOptionsMessage,
            Option,
            ValueContainer,
          }}
          options={options}
          placeholder="View section..."
          value={activeOption}
          onChange={handleChange}
        />
        {canScrollTop && (
          <Icon
            color="icon.light"
            icon="up"
            size="icon.m"
            styles={styles.scrollTop}
            title="Back to top"
            onClick={() => window.scrollTo(0, 0)}
          />
        )}
      </Element>
    </Element>
  );
};

const OptionText = ({enableIndent, label: overrideLabel, option}) => {
  const {keys, label} = option;
  const pl = enableIndent ? (keys.length - 1) * 24 : undefined;
  return (
    <Layout align="center" pl={pl} spacing="xs">
      <Text variant="chip.primary">{keys.join('.')}</Text>
      <Text fontSize="s">{overrideLabel || label}</Text>
    </Layout>
  );
};

const IndicatorsContainer = () => null;

const MenuList = (props) => (
  <components.MenuList {...props}>
    <Element bg="background.primary">{props.children}</Element>
  </components.MenuList>
);

const NoOptionsMessage = (props) => (
  <components.NoOptionsMessage {...props}>
    <Text fontSize="xs">No match.</Text>
  </components.NoOptionsMessage>
);

const Option = (props) => (
  <components.Option {...props}>
    <OptionText enableIndent option={props.data} />
  </components.Option>
);

const ValueContainer = (props) => (
  <components.ValueContainer {...props}>
    <OptionText label={props.children} option={props.getValue()[0]} />
  </components.ValueContainer>
);

const styles = {
  container: {
    backgroundColor: 'background.primary',
    position: 'fixed',
    right: 'l',
    top: 'm',
  },
  scrollTop: {
    position: 'absolute',
    right: 's',
    top: '50%',
    transform: 'translateYHalf',
  },
  select: {
    maxWidth: '90vw',
    opacity: 'defocused',
    position: 'relative',
    width: 'width.toc',
    ':hover': {
      opacity: 'visible',
    },
    ':focus': {
      opacity: 'visible',
    },
  },
};

export default TocSelect;

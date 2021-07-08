import React from 'react';
import {Element, Layout} from 'uinix-ui';

const indicatorClassName = 'indicator';

const IndicatorLayout = ({
  align,
  children,
  enableHover,
  justify,
  hasIndicator,
  isActive,
  ...rest
}) => (
  <Layout
    {...rest}
    align={align}
    justify={justify}
    position="relative"
    w="100%"
    styleProps={{isActive}}
    styles={enableHover ? styles.hover : null}
  >
    {children}
    <Element
      className={indicatorClassName}
      styleProps={{hasIndicator, isActive}}
      styles={styles.indicator}
    />
  </Layout>
);

const styles = {
  hover: ({isActive}) => ({
    [`:hover .${indicatorClassName}`]: {
      height: isActive ? '75%' : '50%',
    },
  }),
  indicator: ({hasIndicator, isActive}) => ({
    backgroundColor: 'interactive.active',
    borderBottomRightRadius: 'l',
    borderTopRightRadius: 'l',
    height: isActive ? '75%' : hasIndicator ? '15%' : undefined,
    left: 0,
    paddingLeft: 'xxs',
    paddingRight: 'xxs',
    position: 'absolute',
    transition: 'all.default',
  }),
};

export default IndicatorLayout;

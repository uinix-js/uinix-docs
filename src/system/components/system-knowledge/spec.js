import React from 'react';
import {isPlainObject} from 'uinix-fp';
import {Element, Layout, Text} from 'uinix-ui';

import Js from '../js.js';
import Json from '../json.js';

const isFunction = (x) => typeof x === 'function';

const Spec = ({name, value, render}) => {
  let previewValue;
  if (isPlainObject(value)) {
    previewValue = <Json value={value} />;
  } else if (isFunction(value)) {
    previewValue = <Js value={value} />;
  } else {
    previewValue = value;
  }

  return (
    <Layout align="center" spacing="l">
      <Element flex="none" minW="width.spec">
        <Text variant="chip.primary">{name}</Text>
      </Element>
      <Element flex="none">{render(value, name)}</Element>
      <Text variant="spec">{previewValue}</Text>
    </Layout>
  );
};

export default Spec;

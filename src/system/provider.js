import {MDXProvider} from '@mdx-js/react';
import React, {createElement as h} from 'react';
import {load} from 'uinix-ui';

import config from '../system/config.js';
import system from '../system/index.js';
import {LiveCode} from './components/index.js';

load({config, h, system});

const Provider = ({children}) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);

const pre = (props) => {
  const {children: code, className = '', live, ...rest} = props.children.props;

  return (
    <LiveCode
      code={code}
      language={className.replace('language-', '')}
      live={live}
      {...rest}
    />
  );
};

const components = {
  pre,
};

export default Provider;

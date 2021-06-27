import {MDXProvider} from '@mdx-js/react';
import React, {createElement as h} from 'react';
import {load} from 'uinix-ui';

import {LiveCode} from './components/index.js';
import config from './config.js';
import system from './index.js';

const Provider = ({children}) => {
  load(h, system, config);
  return <MDXProvider components={components}>{children}</MDXProvider>;
};

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

import {MDXProvider} from '@mdx-js/react';
import React from 'react';
import {SystemProvider} from 'uinix-ui';

import {LiveCode} from './components/index.js';
import system from './index.js';

const Provider = ({children}) => {
  return (
    <SystemProvider system={system}>
      <MDXProvider components={components}>{children}</MDXProvider>
    </SystemProvider>
  );
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

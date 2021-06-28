import {MDXProvider} from '@mdx-js/react';
import React from 'react';

import {LiveCode} from './components/index.js';

const Provider = ({children}) => {
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

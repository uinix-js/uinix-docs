import Highlight, {defaultProps} from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/github/index.js';
import React from 'react';
import {LiveEditor, LiveError, LiveProvider, LivePreview} from 'react-live';
import * as fp from 'uinix-fp';
import * as ui from 'uinix-ui';

import CopyClipboard from './copy-clipboard.js';
import Window from './window.js';

const {Element, Layout, Text} = ui;

const scopes = {
  fp,
  ui,
};

const getScope = (scope) => scopes[scope] || {};

const EDITOR_MAX_HEIGHT = 1000;

// https://mdxjs.com/guides/live-code
const LiveCode = ({code, language, live, scope}) => {
  let content;
  if (live) {
    content = (
      <LiveProvider code={code} scope={getScope(scope)} theme={theme}>
        <Window>
          <Layout direction="column">
            <Layout align="flex-start" direction="column" p="m">
              <LivePreview />
            </Layout>
            <Text fontSize="s" maxH={EDITOR_MAX_HEIGHT} overflow="auto">
              <LiveEditor />
            </Text>
          </Layout>
          <Text color="text.tones.error" fontSize="s">
            <LiveError />
          </Text>
        </Window>
      </LiveProvider>
    );
  } else {
    content = (
      <Highlight
        {...defaultProps}
        code={code}
        language={language}
        theme={theme}
      >
        {({tokens, getLineProps, getTokenProps}) => (
          <Element as="pre">
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({line, key: i})}>
                {line.map(
                  (token, j) =>
                    j < line.length - 1 && (
                      <span key={j} {...getTokenProps({token, key: j})} />
                    ),
                )}
              </div>
            ))}
          </Element>
        )}
      </Highlight>
    );
  }

  return (
    <Element position="relative">
      {content}
      <Layout
        align="center"
        bottom="xs"
        position="absolute"
        right="xs"
        spacing="m"
      >
        {live && (
          <Text textTransform="uppercase" variant="spec">
            Editable
          </Text>
        )}
        <CopyClipboard text={code} />
      </Layout>
    </Element>
  );
};

export default LiveCode;

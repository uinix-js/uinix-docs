import Highlight, {defaultProps} from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/github/index.js';
import React from 'react';
import {LiveEditor, LiveError, LiveProvider, LivePreview} from 'react-live';
import * as fp from 'uinix-fp';
import * as ui from 'uinix-ui';

import Window from './window.js';

const {Element, Layout, Text} = ui;

const scope = {
  ...fp,
  ...ui,
};

const EDITOR_MAX_HEIGHT = 1000;

// https://mdxjs.com/guides/live-code
const LiveCode = ({code, language, live}) => {
  if (live) {
    return (
      <LiveProvider code={code} scope={scope} theme={theme}>
        <Window>
          <Layout direction="column">
            <Layout align="flex-start" bb="default" direction="column" p="m">
              <LivePreview />
            </Layout>
            <Text
              bg="background.tones.faded"
              fontSize="s"
              maxH={EDITOR_MAX_HEIGHT}
              overflow="auto"
              p="m"
            >
              <LiveEditor />
            </Text>
          </Layout>
          <Text color="text.tones.error" fontSize="s">
            <LiveError />
          </Text>
        </Window>
      </LiveProvider>
    );
  }

  return (
    <Highlight {...defaultProps} code={code} language={language} theme={theme}>
      {({tokens, getLineProps, getTokenProps}) => (
        <Element as="pre">
          {tokens.map((line, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={i} {...getLineProps({line, key: i})}>
              {line.map((token, key) => (
                // eslint-disable-next-line react/no-array-index-key
                <span key={key} {...getTokenProps({token, key})} />
              ))}
            </div>
          ))}
        </Element>
      )}
    </Highlight>
  );
};

export default LiveCode;

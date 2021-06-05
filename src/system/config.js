const elementShorthandPropsMapping = {
  color: ['color'],
  height: ['h'],
  margin: ['m'],
  marginBottom: ['mb', 'my', 'm'],
  marginLeft: ['ml', 'mx', 'm'],
  marginRight: ['mr', 'mx', 'm'],
  marginTop: ['mt', 'my', 'm'],
  padding: ['p'],
  paddingBottom: ['pb', 'py', 'p'],
  paddingLeft: ['pl', 'px', 'p'],
  paddingRight: ['pr', 'px', 'p'],
  paddingTop: ['pt', 'py', 'p'],
  width: ['w'],
};

const elementStyles = [];

const responsiveCssProperties = [
  'display',
  'flexDirection',
  'margin',
  'marginBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'padding',
  'width',
];

const config = {
  elementShorthandPropsMapping,
  elementStyles,
  isAtomicCss: false,
  responsiveCssProperties,
};

export default config;

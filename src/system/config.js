import styles from './styles.js';

const elementShorthandPropsMapping = {
  color: ['color'],
  // Margin
  margin: ['m'],
  marginBottom: ['mb', 'my', 'm'],
  marginLeft: ['ml', 'mx', 'm'],
  marginRight: ['mr', 'mx', 'm'],
  marginTop: ['mt', 'my', 'm'],
  // Padding
  padding: ['p'],
  paddingBottom: ['pb', 'py', 'p'],
  paddingLeft: ['pl', 'px', 'p'],
  paddingRight: ['pr', 'px', 'p'],
  paddingTop: ['pt', 'py', 'p'],
  width: ['w'],
  // Size
  height: ['h'],
  // Position
  position: ['position'],
  bottom: ['bottom'],
  left: ['left'],
  right: ['right'],
  top: ['top'],
};

const elementStyles = [styles.interactive];

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

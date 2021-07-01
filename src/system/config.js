import styles from './styles.js';

const elementShorthandPropsMapping = {
  // Visual,
  backgroundColor: ['bg'],
  borderRadius: ['borderRadius'],
  border: ['b'],
  borderBottom: ['bb', 'by', 'b'],
  borderLeft: ['bl', 'bx', 'b'],
  borderRight: ['br', 'bx', 'b'],
  borderTop: ['bt', 'by', 'b'],
  boxShadow: ['boxShadow'],
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
  // Size
  height: ['h'],
  minHeight: ['minH'],
  maxHeight: ['maxH'],
  width: ['w'],
  minWidth: ['minW'],
  maxWidth: ['maxW'],
  // Position, overflow
  overflow: ['overflow'],
  position: ['position'],
  bottom: ['bottom'],
  left: ['left'],
  right: ['right'],
  top: ['top'],
  zIndex: ['z'],
  // Display
  display: ['display'],
  flex: ['flex'],
};

const elementStyles = [styles.disabled, styles.interactive, styles.truncate];

const responsiveCssProperties = [
  'display',
  'flexDirection',
  'margin',
  'marginBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'padding',
];

const config = {
  elementShorthandPropsMapping,
  elementStyles,
  enableAtomicCss: false,
  responsiveCssProperties,
};

export default config;

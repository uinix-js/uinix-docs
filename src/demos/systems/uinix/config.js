import styles from './styles.js';

const config = {
  elementShorthandPropsMapping: {
    backgroundColor: ['bg'],
    border: ['b'],
    borderBottom: ['bb'],
    borderLeft: ['bl'],
    borderRight: ['br'],
    borderTop: ['bt'],
    borderRadius: ['borderRadius'],
    bottom: ['bottom'],
    boxShadow: ['boxShadow'],
    color: ['color'],
    flex: ['flex'],
    height: ['h'],
    left: ['left'],
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
    position: ['position'],
    right: ['right'],
    top: ['top'],
    width: ['w'],
  },
  elementStyles: [
    ({disabled}) => (disabled ? styles.disabled : null),
    styles.interactive,
  ],
};

export default config;

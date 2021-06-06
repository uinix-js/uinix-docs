import React from 'react';

import {results} from '../data.js';
import Result from './result.js';

const Results = () => {
  return results.map((key) => <Result key={key} />);
};

export default Results;

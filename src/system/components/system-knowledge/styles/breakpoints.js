import React from 'react';

import Bar from '../../bar.js';
import Spec from '../spec.js';
import SpecList from '../spec-list.js';

const Breakpoints = ({breakpoints}) => {
  return (
    <SpecList name="breakpoints">
      {breakpoints.map((breakpoint) => {
        return (
          <Spec
            key={breakpoint}
            name={breakpoint}
            value={`@media screen and (min-width: ${breakpoint})`}
          >
            <Bar w={breakpoint} />
          </Spec>
        );
      })}
    </SpecList>
  );
};

export default Breakpoints;

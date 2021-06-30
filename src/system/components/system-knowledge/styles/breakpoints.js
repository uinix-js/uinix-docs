import React from 'react';

const Breakpoints = ({breakpoints}) => {
  return (
    <div>
      <h4>Breakpoints</h4>
      {breakpoints.map((breakpoint) => {
        return breakpoint;
      })}
    </div>
  );
};

export default Breakpoints;

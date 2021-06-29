import React from 'react';

const SpecDefinitions = ({definitions, render}) => {
  console.log(render);
  return <pre>{JSON.stringify(definitions, null, 2)}</pre>;
};

export default SpecDefinitions;

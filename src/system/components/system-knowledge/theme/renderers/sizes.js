import React from 'react';

const render = (value) => {
  return <pre>{JSON.stringify(value, null, 2)}</pre>;
};

export default render;

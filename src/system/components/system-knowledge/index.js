import React from 'react';

const SystemKnowledge = ({system}) => {
  return <pre>{JSON.stringify(system, null, 2)}</pre>;
};

export default SystemKnowledge;

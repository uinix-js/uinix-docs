import React from 'react';

import PageLayout from '../layouts/page-layout.js';

const Default = ({name, description}) => {
  return (
    <PageLayout>
      {name && <h2>{name}</h2>}
      {description && <p>{description}</p>}
    </PageLayout>
  );
};

export default Default;

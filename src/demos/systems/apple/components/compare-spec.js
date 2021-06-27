import React, {Fragment} from 'react';
import {Layout} from 'uinix-ui';

const CompareSpec = ({model, spec}) => {
  const specData = Object.values(model.specs[spec]);
  return (
    <Layout direction="column" spacing="x10" w="33%">
      {specData.map((d) => {
        let details = [];
        let title = null;
        if (Array.isArray(d)) {
          details = d;
        } else {
          details = d.details;
          title = d.title;
        }

        return (
          <Layout key={title} direction="column">
            {title && <strong>{title}</strong>}
            <span>
              {details.map((detail) => (
                <Fragment key={detail}>
                  {detail}
                  <br />
                </Fragment>
              ))}
            </span>
          </Layout>
        );
      })}
    </Layout>
  );
};

export default CompareSpec;

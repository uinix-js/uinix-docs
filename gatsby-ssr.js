import React from 'react';

import Provider from './src/system/provider.js';

export const wrapRootElement = ({element}) => <Provider>{element}</Provider>;

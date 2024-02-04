import React from 'react';

import { Box } from './styled';
import { IContainer } from './types';

function Container({ children }: IContainer) {
  return children ? <Box>{children}</Box> : null;
}

export { Container };

import React, { useMemo } from 'react';

import { COLPYRIGHT_TEXT_1, COLPYRIGHT_TEXT_2 } from './constants';
import { Text } from './styled';

function Copyright() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return <Text>{`${COLPYRIGHT_TEXT_1}${year}${COLPYRIGHT_TEXT_2}`}</Text>;
}

export { Copyright };

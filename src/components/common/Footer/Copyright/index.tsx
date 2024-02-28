import React from 'react';

import { COLPYRIGHT_TEXT_1, COLPYRIGHT_TEXT_2, YEAR } from './constants';
import { Text } from './styled';

function Copyright() {
  return <Text>{`${COLPYRIGHT_TEXT_1}${YEAR}${COLPYRIGHT_TEXT_2}`}</Text>;
}

export { Copyright };

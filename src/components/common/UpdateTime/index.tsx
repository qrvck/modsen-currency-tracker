import React from 'react';

import { Container } from '../Container';
import { ERROR_MESSAGE, SUCCESS_MESSAGE, UPDATE_MESSAGE } from './constants';
import { StatusCircle, StatusText, Wrapper } from './styles';

function UpdateTime() {
  const time = '11:59pm';
  // eslint-disable-next-line prefer-const
  let status = 'success';

  return (
    <section>
      <Container>
        <Wrapper>
          <StatusCircle $status={'success'} />
          <StatusText>
            {status === 'success' && `${SUCCESS_MESSAGE}${time}`}
            {status === 'update' && UPDATE_MESSAGE}
            {status === 'error' && ERROR_MESSAGE}
          </StatusText>
        </Wrapper>
      </Container>
    </section>
  );
}

export { UpdateTime };

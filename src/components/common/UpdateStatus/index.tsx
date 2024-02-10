import React from 'react';

import { Container } from '../Container';
import { ERROR_MESSAGE, UPDATE_MESSAGE, UPDATED_MESSAGE } from './constants';
import { StatusCircle, StatusText, Wrapper } from './styles';
import { IUpdateStatus } from './types';

function UpdateStatus({ status, time }: IUpdateStatus) {
  return (
    <section>
      <Container>
        <Wrapper>
          <StatusCircle $status={status} />
          <StatusText>
            {status === 'updated' && `${UPDATED_MESSAGE}${time}`}
            {status === 'updating' && UPDATE_MESSAGE}
            {status === 'error' && ERROR_MESSAGE}
          </StatusText>
        </Wrapper>
      </Container>
    </section>
  );
}

export { UpdateStatus };

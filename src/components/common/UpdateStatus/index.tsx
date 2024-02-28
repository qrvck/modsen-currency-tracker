import React, { memo, useMemo } from 'react';

import { Container } from '../Container';
import { EMPTY_UPDATE_TIME_PLACEHOLDER, ERROR_MESSAGE, UPDATE_MESSAGE, UPDATED_MESSAGE } from './constants';
import { StatusCircle, StatusText, Wrapper } from './styles';
import { IUpdateStatus } from './types';

const UpdateStatus = memo(function UpdateStatus({ status, timestamp }: IUpdateStatus) {
  const time = useMemo(() => {
    if (timestamp) {
      const updateTime = new Date(timestamp);
      const minutes = updateTime.getMinutes() > 9 ? updateTime.getMinutes() : `0${updateTime.getMinutes()}`;

      return `${updateTime.getHours()}:${minutes}`;
    } else {
      return EMPTY_UPDATE_TIME_PLACEHOLDER;
    }
  }, [timestamp]);

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
});

export { UpdateStatus };

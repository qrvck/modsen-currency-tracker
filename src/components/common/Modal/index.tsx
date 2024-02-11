import React from 'react';

import { Background, CloseButton, InnerBackground, ModalWrapper, Window } from './styled';
import { IModal } from './types';

function Modal({ children, onClose }: IModal) {
  return (
    <Background onClick={onClose}>
      <InnerBackground>
        <ModalWrapper>
          <CloseButton />
          <Window onClick={(e) => e.stopPropagation()}>{children}</Window>
        </ModalWrapper>
      </InnerBackground>
    </Background>
  );
}

export { Modal };

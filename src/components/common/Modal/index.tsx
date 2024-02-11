import React, { useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom';

import { Background, CloseButton, InnerBackground, ModalWrapper, Window } from './styled';
import { IModal } from './types';

function Modal({ isOpen, children, onClose }: IModal) {
  const [isFullView, setIsFullView] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsFullView(true);
    } else {
      setIsFullView(false);
    }
  }, [isOpen]);

  const appRoot = useMemo(() => document.querySelector('#root')!, []);

  const modalElements = (
    <Background onClick={onClose}>
      <InnerBackground className={isFullView ? 'fullView' : ''} />
      <ModalWrapper className={isFullView ? 'fullView' : ''}>
        <CloseButton />
        <Window onClick={(e) => e.stopPropagation()}>{children}</Window>
      </ModalWrapper>
    </Background>
  );

  if (isOpen) {
    return ReactDOM.createPortal(modalElements, appRoot);
  } else {
    null;
  }
}

export { Modal };

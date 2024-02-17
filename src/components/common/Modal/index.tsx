import React, { useEffect, useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import { useClickOutside } from '@/utils/hooks';
import { blockPageScrolling, unblockPageScrolling } from '@/utils/index';

import { Background, CloseButton, InnerBackground, ModalWrapper, Window } from './styled';
import { IModal } from './types';

function Modal({ children, onClose }: IModal) {
  const [isFullView, setIsFullView] = useState(false);
  const windowRef = useRef<HTMLDivElement>(null);
  useClickOutside(windowRef, onClose);

  useEffect(() => {
    setIsFullView(true);
    blockPageScrolling();

    return unblockPageScrolling;
  }, []);

  const appRoot = useMemo(() => document.querySelector('#root')!, []);

  const modalElements = (
    <Background>
      <InnerBackground className={isFullView ? 'fullView' : ''} />
      <ModalWrapper className={isFullView ? 'fullView' : ''}>
        <CloseButton />
        <Window ref={windowRef}>{children}</Window>
      </ModalWrapper>
    </Background>
  );

  return ReactDOM.createPortal(modalElements, appRoot);
}

export { Modal };

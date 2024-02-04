import React, { useRef } from 'react';

import { ChildrenWrapper, Title } from './styled';
import { IAccordion } from './types';

function Accordion({ title, children }: IAccordion) {
  const childrenWrapperRef = useRef<HTMLDivElement>(null);

  const handleClickOnTitle = () => {
    const childrenWrapper = childrenWrapperRef.current;

    if (childrenWrapper) {
      const { height } = childrenWrapper.style;

      if (height) {
        childrenWrapper.style.height = `${childrenWrapper.scrollHeight}px`;
        setTimeout(() => (childrenWrapper.style.height = ''), 0);
      } else {
        childrenWrapper.style.height = `${childrenWrapper.scrollHeight}px`;
      }
    }
  };

  const handleTransitionEnd = () => {
    const childrenWrapper = childrenWrapperRef.current;

    if (childrenWrapper) {
      const { height } = childrenWrapper.style;
      if (height) childrenWrapper.style.height = 'auto';
    }
  };

  return (
    <div>
      <Title onClick={handleClickOnTitle}>{title}</Title>
      <ChildrenWrapper onTransitionEnd={handleTransitionEnd} ref={childrenWrapperRef}>
        {children}
      </ChildrenWrapper>
    </div>
  );
}

export { Accordion };

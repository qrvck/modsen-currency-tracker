import React, { useRef, useState } from 'react';

import sprite from '@/assets/icons/sprite.svg';

import { ArrowIcon, ChildrenWrapper, Title, Wrapper } from './styled';
import { IAccordion } from './types';

function Accordion({ title, animationDuration = 0.3, children }: IAccordion) {
  const childrenWrapperRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

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

      setIsOpen((prevState) => !prevState);
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
    <Wrapper>
      <Title $isOpen={isOpen} onClick={handleClickOnTitle}>
        {title}
        <ArrowIcon $animationDuration={animationDuration} $isRotate={isOpen}>
          <use href={sprite + '#arrow'} />
        </ArrowIcon>
      </Title>
      <ChildrenWrapper
        $animationDuration={animationDuration}
        onTransitionEnd={handleTransitionEnd}
        ref={childrenWrapperRef}
      >
        {children}
      </ChildrenWrapper>
    </Wrapper>
  );
}

export { Accordion };

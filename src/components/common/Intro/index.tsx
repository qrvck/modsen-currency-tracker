import React from 'react';

import logo from '@/assets/icons/logo.svg';
import { Container } from '@/components/common/Container';

import { SUBTITLE_TEXT_1, SUBTITLE_TEXT_2, TITLE_TEXT_1, TITLE_TEXT_2 } from './constants';
import { Img, Section, SubTitle, TextWrapper, Title, TitleSpan, Wrapper } from './styled';

function Intro() {
  return (
    <Section>
      <Container>
        <Wrapper>
          <TextWrapper>
            <Title>
              {TITLE_TEXT_1} <br /> <TitleSpan>{TITLE_TEXT_2}</TitleSpan>
            </Title>
            <SubTitle>
              {SUBTITLE_TEXT_1} <br /> {SUBTITLE_TEXT_2}
            </SubTitle>
          </TextWrapper>

          <Img src={logo} alt="Currency Tracker" />
        </Wrapper>
      </Container>
    </Section>
  );
}

export { Intro };

import { styled } from 'styled-components';

const Section = styled.section`
  padding: 10px 0 80px;

  @media (${({ theme }) => theme.media.medium}) {
    padding: 15px 0 140px;
  }
`;

export { Section };

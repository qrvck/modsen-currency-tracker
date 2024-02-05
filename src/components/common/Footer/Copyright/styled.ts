import { styled } from 'styled-components';

const Text = styled.p`
  margin-top: 36px;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.inverted.sixth};

  @media (${({ theme }) => theme.media.small}) {
    text-align: center;
  }

  @media (${({ theme }) => theme.media.medium}) {
    margin-top: 50px;
    font-size: 24px;
  }

  @media (${({ theme }) => theme.media.extraLarge}) {
    width: 100%;
  }
`;

export { Text };

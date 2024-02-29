import { styled } from 'styled-components';

const Card = styled.button`
  padding: 7px 12px;
  display: flex;
  align-items: center;
  width: 100%;

  text-align: left;
  cursor: pointer;

  background-color: ${({ theme }) => theme.colors.inverted.ninth};
  border: 1px solid ${({ theme }) => theme.colors.inverted.fourth};
  border-radius: ${({ theme }) => theme.sizes.borderRadius.sm};

  &:hover {
    opacity: 0.7;
  }

  &:not(:first-child) {
    margin-top: 17px;
  }

  @media (${({ theme }) => theme.media.small}) {
    width: 46%;

    &:nth-child(2) {
      margin-top: 0;
    }
  }

  @media (${({ theme }) => theme.media.medium}) {
    width: 100%;
    border-radius: ${({ theme }) => theme.sizes.borderRadius.md};

    &:not(:first-child) {
      margin-top: 56px;
    }
  }

  @media (${({ theme }) => theme.media.extraLarge}) {
    width: 42%;

    &:nth-child(2) {
      margin-top: 0;
    }
  }
`;

const TextWrapper = styled.div`
  margin-left: 11px;

  @media (${({ theme }) => theme.media.medium}) {
    margin-left: 30px;
  }
`;

const CardTitle = styled.p`
  font-size: 13px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.inverted.third};

  @media (${({ theme }) => theme.media.medium}) {
    font-size: 35px;
    line-height: 49px;
  }
`;

const Rate = styled.p`
  font-weight: 300;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.inverted.fifth};

  @media (${({ theme }) => theme.media.medium}) {
    font-size: 32px;
    line-height: 41px;
  }
`;

const Icon = styled.svg`
  width: 30px;
  height: 30px;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.sm};

  @media (${({ theme }) => theme.media.medium}) {
    width: 80px;
    height: 80px;
    border-radius: ${({ theme }) => theme.sizes.borderRadius.md};
  }
`;

export { Card, CardTitle, Icon, Rate, TextWrapper };

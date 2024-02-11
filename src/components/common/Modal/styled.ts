import { styled } from 'styled-components';

const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const InnerBackground = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.inverted.first};
  opacity: 0;
  transition: opacity 0.3s ease;

  &.fullView {
    opacity: 0.85;
  }
`;

const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  max-width: 1050px;
  width: 100%;

  transform: translate(-50%, -50%) scale(0.9);
  opacity: 0;
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;

  &.fullView {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

const Window = styled.div`
  position: relative;
  padding-bottom: 50%;
  margin: 25px;
  background-color: ${({ theme }) => theme.colors.darkGreen};

  @media (${({ theme }) => theme.media.medium}) {
    margin: 35px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1px;
  right: 1px;
  width: 26px;
  height: 26px;

  background-color: ${({ theme }) => theme.colors.red};
  border-radius: 50%;

  @media (${({ theme }) => theme.media.medium}) {
    top: 3px;
    right: 3px;
    width: 36px;
    height: 36px;
  }

  &:hover {
    opacity: 0.9;
  }

  &::before,
  &::after {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;

    width: 39%;
    height: 4px;

    background-color: ${({ theme }) => theme.colors.orange};
    border-radius: 3px;

    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }

  &:hover::before,
  &:hover::after {
    width: 41%;
  }
`;

export { Background, CloseButton, InnerBackground, ModalWrapper, Window };

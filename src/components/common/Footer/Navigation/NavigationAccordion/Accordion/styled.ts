import { styled } from 'styled-components';

const Wrapper = styled.div`
  border-bottom: 1px solid #607d94;
`;

const Title = styled.button<{ $isOpen: boolean }>`
  position: relative;
  width: 100%;
  padding-right: 20px;

  background-color: transparent;
  border: none;
`;

const ArrowIcon = styled.svg<{ $animationDuration: number; $isRotate: boolean }>`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  width: 20px;
  height: 20px;

  color: ${({ theme }) => theme.colors.inverted.first};

  transform: rotate(${({ $isRotate }) => ($isRotate ? '180deg' : '0deg')});
  transition: transform ease;
  transition-duration: ${({ $animationDuration }) => `${$animationDuration}s`};
`;

const ChildrenWrapper = styled.div<{ $animationDuration: number }>`
  height: 0;
  overflow: hidden;
  transition: height ease;
  transition-duration: ${({ $animationDuration }) => `${$animationDuration}s`};
`;

export { ArrowIcon, ChildrenWrapper, Title, Wrapper };

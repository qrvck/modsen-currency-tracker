import { styled } from 'styled-components';

const Wrapper = styled.div`
  border-bottom: 1px solid #607d94;
`;

const Title = styled.button<{ $isOpen: boolean }>`
  width: 100%;
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: -0.01em;
`;

const ArrowIcon = styled.svg<{ $animationDuration: number; $isRotate: boolean }>`
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

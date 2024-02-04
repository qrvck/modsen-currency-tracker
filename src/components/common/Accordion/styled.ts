import { styled } from 'styled-components';

const Title = styled.button`
  width: 100%;
  padding: 15px 0;
  text-align: left;
`;

const ChildrenWrapper = styled.div`
  height: 0;
  overflow: hidden;
  transition: height 0.3s ease;
`;

export { ChildrenWrapper, Title };

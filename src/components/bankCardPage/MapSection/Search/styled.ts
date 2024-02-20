import { styled } from 'styled-components';

const Wrapper = styled.div`
  padding: 12px 0 30px;
  text-align: center;

  @media (${({ theme }) => theme.media.medium}) {
    padding: 25px 0 65px;
    margin-top: 16px;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  max-width: 450px;
  margin: auto;
  margin-top: 8px;
  display: flex;

  @media (${({ theme }) => theme.media.medium}) {
    margin-top: 16px;
  }
`;

const SearchInput = styled.input.attrs({ type: 'text', placeholder: 'Сurrency search...' })`
  padding: 10px;
  padding-right: 50px;
  flex-grow: 1;

  font-size: 18px;
  color: ${({ theme }) => theme.colors.inverted.seventh};
  background-color: ${({ theme }) => theme.colors.inverted.eighth};
  border-radius: 8px;
  border: none;

  @media (${({ theme }) => theme.media.medium}) {
    padding: 18px;
    padding-right: 50px;
  }
`;

const Svg = styled.svg`
  position: absolute;
  right: 20px;
  top: 0;
  bottom: 0;
  margin: auto;

  width: 24px;
  height: 25px;
  color: ${({ theme }) => theme.colors.inverted.seventh};
`;

const TipList = styled.ul`
  position: absolute;
  left: 0;
  right: 0;
  top: 40px;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.inverted.eighth};
  box-shadow: 0px 7px 8px 0px ${({ theme }) => theme.colors.inverted.fourth};
  z-index: 5;

  @media (${({ theme }) => theme.media.medium}) {
    top: 56px;
  }
`;

const TipItem = styled.li`
  padding: 14px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.inverted.fourth};
  }
`;

export { InputWrapper, SearchInput, Svg, TipItem, TipList, Wrapper };

import { styled } from 'styled-components';

const Label = styled.label`
  display: block;
  position: relative;
  width: 30px;
  height: 16px;

  border-radius: 50%;

  @media (${({ theme }) => theme.media.medium}) {
    width: 50px;
    height: 30px;
  }
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

const Slider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  border: 1px solid ${({ theme }) => theme.colors.inverted.first};
  border-radius: 34px;
  cursor: pointer;
  transition: border-color 0.4s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.lime};
  }

  @media (${({ theme }) => theme.media.medium}) {
    border: 2px solid ${({ theme }) => theme.colors.inverted.first};
  }

  &::before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: -1px;
    top: -1px;
    bottom: -1px;
    margin: auto 0;

    border: 1px solid ${({ theme }) => theme.colors.inverted.first};
    border-radius: 50%;
    transition: transform 0.4s;

    @media (${({ theme }) => theme.media.medium}) {
      width: 30px;
      height: 30px;
      left: -2px;
      top: -2px;
      bottom: -2px;

      border: 2px solid ${({ theme }) => theme.colors.inverted.first};
    }
  }

  ${Checkbox}:checked + &::before {
    transform: translateX(14px);

    @media (${({ theme }) => theme.media.medium}) {
      transform: translateX(20px);
    }
  }
`;

export { Checkbox, Label, Slider };

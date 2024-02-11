import { styled } from 'styled-components';

const Wrapper = styled.div`
  padding: 34px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (${({ theme }) => theme.media.medium}) {
    padding: 64px 0;
  }
`;

const StatusCircle = styled.div<{ $status: 'updated' | 'updating' | 'error' }>`
  position: relative;
  width: 17px;
  height: 17px;
  border-radius: 50%;

  @media (${({ theme }) => theme.media.medium}) {
    width: 34px;
    height: 34px;
  }

  &::before,
  &::after {
    background-color: ${({ theme, $status }) =>
      ($status === 'updated' && theme.colors.darkGreen) ||
      ($status === 'updating' && theme.colors.orange) ||
      ($status === 'error' && theme.colors.red)};

    border-radius: 50%;
  }

  &::before {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    opacity: 0.35;
  }

  &::after {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 50%;
    height: 50%;

    opacity: 0.7;
  }
`;

const StatusText = styled.p`
  margin-left: 15px;

  font-weight: 300;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.inverted.third};

  @media (${({ theme }) => theme.media.medium}) {
    margin-left: 26px;
    font-size: 32px;
    line-height: 41px;
  }
`;

export { StatusCircle, StatusText, Wrapper };

import { styled } from 'styled-components';

const MapContainer = styled.div`
  height: 500px;
  width: 100%;

  color: ${({ theme }) => theme.colors.black};

  & .mapboxgl-popup-close-button {
    padding: 0 6px;
    color: ${({ theme }) => theme.colors.black};
  }
`;

export { MapContainer };

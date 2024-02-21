import { styled } from 'styled-components';

const Section = styled.section`
  padding: 25px 0;

  @media (${({ theme }) => theme.media.medium}) {
    padding: 70px 0;
  }
`;

const Title = styled.p`
  padding: 20px 0;
  text-align: center;
  font-weight: 600;
`;

const Image = styled.img`
  width: 70%;
  display: block;
  margin: auto;

  @media (${({ theme }) => theme.media.medium}) {
    width: 50%;
  }
`;

const ContactItem = styled.p`
  margin-top: 20px;
  text-align: center;
`;

export { ContactItem, Image, Section, Title };

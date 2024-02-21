import React from 'react';

import contactImage from '@/assets/images/contact_image.jpg';
import { Container } from '@/components/common/Container';

import { ContactItem, Image, Section, Title } from './styled';

function ContactsPage() {
  return (
    <Section>
      <Container>
        <Title>Do you want it too? Then write and call us</Title>
        <Image src={contactImage} alt="" />
        <ContactItem>
          Phone: <a href="tel:+48501157180">+48501157180</a>
        </ContactItem>

        <ContactItem>
          Email: <a href="http://contact@modsen-software.com">contact@modsen-software.com</a>
        </ContactItem>
      </Container>
    </Section>
  );
}

export { ContactsPage };

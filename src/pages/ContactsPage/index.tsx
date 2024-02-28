import React from 'react';

import contactImage from '@/assets/images/contact_image.jpg';
import { Container } from '@/components/common/Container';

import { CONTACTS, TITLE_TEXT } from './constants';
import { ContactItem, Image, Section, Title } from './styled';

function ContactsPage() {
  return (
    <Section>
      <Container>
        <Title>{TITLE_TEXT}</Title>
        <Image src={contactImage} alt="Scrooge McDuck" />

        {CONTACTS.map(({ type, href, text }) => (
          <ContactItem key={type}>
            {`${type}: `}
            <a href={href}>{text}</a>
          </ContactItem>
        ))}
      </Container>
    </Section>
  );
}

export { ContactsPage };

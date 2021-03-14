import React from 'react';
import tw from 'twin.macro';

import DiagonalHeader from '../components/diagonal-header';
import { BlueBackground, Container, LightGray, PglBlue, Section } from '../components/styles';

const Contact = () => {
  const Form = tw.form`w-full max-w-lg`;
  const FlexWrap = tw.div`flex flex-wrap -mx-3`;
  const HalfFormField = tw.div`w-full md:w-1/2 px-3 mb-6 md:mb-0`;
  const FullFormField = tw.div`w-full px-3`;
  const Label = tw.label`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2`;
  const Input = tw.input`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none`;
  const Button = tw.button`bg-blue-500 hover:bg-blue-800 text-white font-bold my-4 py-2 px-4 rounded focus:outline-none`;

  return (
    <Section id="contact">
      <DiagonalHeader color={PglBlue} background={LightGray} title="Kontakt" />
      <BlueBackground>
        <Container>
          <Form action="https://getform.io/f/5db4d203-9a89-479f-a9e5-26c6974bbd50" method="POST">
            <FlexWrap>
              <HalfFormField>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email"></Input>
              </HalfFormField>
              <HalfFormField>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" type="text"></Input>
              </HalfFormField>
              <FullFormField>
                <Label htmlFor="message">Nachricht</Label>
                <Input id="message" name="message" type="text"></Input>
              </FullFormField>
              <Button type="submit">Senden</Button>
            </FlexWrap>
          </Form>
        </Container>
      </BlueBackground>
    </Section>
  );
};

export default Contact;

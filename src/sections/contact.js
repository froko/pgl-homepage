import React, { useState } from 'react';
import tw from 'twin.macro';

import { BlueBackground } from '../components/styles';

const Contact = () => {
  const [formData, updateFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [thankYou, setThankYou] = useState(false);

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    formData[fieldName] = fieldValue;
    updateFormData(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = 'http://localhost:3000/api/contact';

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    };

    fetch(url, requestOptions).then(() => {
      setThankYou(true);
    });
  };

  const MaxWidthContainer = tw.div`max-w-lg mx-auto px-2`;
  const Text = tw.p`text-white mb-8`;
  const Form = tw.form`w-full max-w-lg -mx-2`;
  const FlexWrap = tw.div`flex flex-wrap`;
  const HalfFormField = tw.div`w-full md:w-1/2 mb-2 px-2`;
  const FullFormField = tw.div`w-full mb-2 px-2`;
  const Label = tw.label`block uppercase tracking-wide text-white text-xs font-bold ml-1 mb-1 mt-2`;
  const Input = tw.input`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none`;
  const MultilineInput = tw.textarea`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none`;
  const Center = tw.div`w-full text-center mt-4`;
  const Button = tw.button`items-center px-4 py-2 border border-white font-medium rounded-md text-white bg-pgl-blue hover:bg-white hover:text-pgl-blue`;

  return (
    <BlueBackground id="contact" title="Kontakt">
      <MaxWidthContainer>
        <Text>
          Nutze das unten stehende Formular um direkt mit uns in Kontakt zu treten. Gerne darfst du uns auch eine Email
          an <a href="mailto:info@pgl.ch">info(at)pgl.ch</a> senden.
        </Text>
        <Form onSubmit={handleSubmit}>
          <FlexWrap>
            <HalfFormField>
              <Label htmlFor="name">Name*</Label>
              <Input id="name" name="name" type="text" required onChange={handleChange}></Input>
            </HalfFormField>
            <HalfFormField>
              <Label htmlFor="email">Email*</Label>
              <Input id="email" name="email" type="email" required onChange={handleChange}></Input>
            </HalfFormField>
            <FullFormField>
              <Label htmlFor="message">Nachricht*</Label>
              <MultilineInput
                id="message"
                name="message"
                type="text"
                rows="5"
                required
                onChange={handleChange}
              ></MultilineInput>
            </FullFormField>
            <Center>
              {thankYou ? <Text>Vielen Dank für deine Nachricht!</Text> : <Button type="submit">Senden</Button>}
            </Center>
          </FlexWrap>
        </Form>
      </MaxWidthContainer>
    </BlueBackground>
  );
};

export default Contact;

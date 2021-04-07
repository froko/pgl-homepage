import React from 'react';
import axios from 'axios';
import tw from 'twin.macro';

import CustomerMessage from './message';

const Form = ({ articles, totalCost, onFormSubmit }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const method = 'post';
    const url = 'https://getform.io/f/d9012aba-ea6c-4b15-87e6-bebd6456f982';
    const data = new FormData(form);

    axios({ method, url, data }).then(() => {
      onFormSubmit();
    });
  };

  const Text = tw.p``;
  const BoldText = tw.p`font-bold`;
  const LineBreak = tw.br``;

  const Form = tw.form`w-full max-w-lg`;
  const FlexWrap = tw.div`flex flex-wrap`;
  const HalfFormField = tw.div`w-full md:w-1/2 mb-2 md:px-2`;
  const FullFormField = tw.div`w-full mb-2 md:px-2`;
  const Label = tw.label`block uppercase tracking-wide text-gray-700 text-xs font-bold ml-1 mb-1 mt-2`;
  const Input = tw.input`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none`;
  const Button = tw.button`bg-pgl-blue hover:bg-blue-800 text-white font-bold my-4 py-2 px-4 rounded focus:outline-none`;

  return (
    <Form onSubmit={handleOnSubmit}>
      <Text>
        Füllen Sie das unten stehende Formular aus und teilen Sie uns mit, wie wir Sie bei Fragen erreichen können.
      </Text>
      <Text>
        Sämtliche Produktpreise verstehen sich inkl. Verpackungs- und Versandspesen. Für den Versand ins Ausland können
        zusätzliche Kosten entstehen.
      </Text>
      <Text>Versand nur gegen Vorauszahlung. Unsere Bankverbindung lautet:</Text>

      <LineBreak />
      <BoldText>IBAN: CH55 0900 0000 6050 6507 7</BoldText>
      <BoldText>Guggenmusig Pilatusgeister</BoldText>
      <BoldText>6000 Luzern</BoldText>
      <LineBreak />

      <FlexWrap>
        <HalfFormField>
          <Label htmlFor="name">Name*</Label>
          <Input id="name" name="name" type="text"></Input>
        </HalfFormField>
        <HalfFormField>
          <Label htmlFor="vorname">Vorname*</Label>
          <Input id="vorname" name="vorname" type="text"></Input>
        </HalfFormField>
        <FullFormField>
          <Label htmlFor="adresse">Adresse*</Label>
          <Input id="adresse" name="adresse" type="text"></Input>
        </FullFormField>
        <HalfFormField>
          <Label htmlFor="plz">PLZ*</Label>
          <Input id="plz" name="plz" type="number"></Input>
        </HalfFormField>
        <HalfFormField>
          <Label htmlFor="ort">Ort*</Label>
          <Input id="ort" name="ort" type="text"></Input>
        </HalfFormField>
        <HalfFormField>
          <Label htmlFor="email">Email*</Label>
          <Input id="email" name="email" type="email"></Input>
        </HalfFormField>
        <HalfFormField>
          <Label htmlFor="phone">Telefon</Label>
          <Input id="phone" name="phone" type="text"></Input>
        </HalfFormField>
        <Input
          hidden
          readOnly
          id="message"
          name="message"
          type="text"
          value={CustomerMessage(articles, totalCost)}
        ></Input>
        <Button type="submit">Bestellen</Button>
      </FlexWrap>
    </Form>
  );
};

export default Form;

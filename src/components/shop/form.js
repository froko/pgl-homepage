import React, { useState } from 'react';
import tw from 'twin.macro';

import Button from '../button';
import { CustomerMessage, ShopMessage } from './message';

const Form = ({ articles, totalCost, onFormSubmit }) => {
  const [formData, updateFormData] = useState({
    vorname: '',
    name: '',
    adresse: '',
    plz: 0,
    ort: '',
    eamil: '',
    phone: ''
  });

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    formData[fieldName] = fieldValue;
    updateFormData(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = 'https://pgl-form-api.vercel.app/api/shop';
    const data = formData;
    data['customerMessage'] = CustomerMessage(articles, totalCost, formData.vorname);
    data['shopMessage'] = ShopMessage(articles, totalCost, formData);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };

    fetch(url, requestOptions).then(() => {
      onFormSubmit();
    });
  };

  const Text = tw.p``;
  const BoldText = tw.p`font-bold`;
  const LineBreak = tw.br``;
  const Center = tw.div`w-full mt-4 text-center`;

  const Form = tw.form`w-full -mx-2`;
  const FlexWrap = tw.div`flex flex-wrap`;
  const HalfFormField = tw.div`w-full md:w-1/2 mb-2 px-2`;
  const FullFormField = tw.div`w-full mb-2 px-2`;
  const Label = tw.label`block uppercase tracking-wide text-gray-700 text-xs font-bold ml-1 mb-1 mt-2`;
  const Input = tw.input`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none`;

  return (
    <>
      <Text>
        Bitte fülle das unten stehende Formular aus und teile uns mit, wie wir dich bei Fragen erreichen können.
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
      <Text>
        Die Liste der bestellten Artikel sowie die Zahlungsinformationen stellen wir dir zusätzlich per Email zu.
      </Text>
      <LineBreak />

      <Form onSubmit={handleSubmit}>
        <FlexWrap>
          <HalfFormField>
            <Label htmlFor="vorname">Vorname*</Label>
            <Input id="vorname" name="vorname" type="text" required onChange={handleChange}></Input>
          </HalfFormField>
          <HalfFormField>
            <Label htmlFor="name">Name*</Label>
            <Input id="name" name="name" type="text" required onChange={handleChange}></Input>
          </HalfFormField>
          <FullFormField>
            <Label htmlFor="adresse">Adresse*</Label>
            <Input id="adresse" name="adresse" type="text" required onChange={handleChange}></Input>
          </FullFormField>
          <HalfFormField>
            <Label htmlFor="plz">PLZ*</Label>
            <Input id="plz" name="plz" type="number" required onChange={handleChange}></Input>
          </HalfFormField>
          <HalfFormField>
            <Label htmlFor="ort">Ort*</Label>
            <Input id="ort" name="ort" type="text" required onChange={handleChange}></Input>
          </HalfFormField>
          <HalfFormField>
            <Label htmlFor="email">Email*</Label>
            <Input id="email" name="email" type="email" required onChange={handleChange}></Input>
          </HalfFormField>
          <HalfFormField>
            <Label htmlFor="phone">Telefon</Label>
            <Input id="phone" name="phone" type="text" onChange={handleChange}></Input>
          </HalfFormField>
          <Center>
            <Button type="submit">Bestellen</Button>
          </Center>
        </FlexWrap>
      </Form>
    </>
  );
};

export default Form;

import React from 'react';
import tw from 'twin.macro';

const Shop = () => {
  const Form = tw.form`w-full max-w-lg pt-8 mx-2 md:mx-0`;
  const FlexWrap = tw.div`flex flex-wrap`;
  const HalfFormField = tw.div`w-full md:w-1/2 px-3 mb-6 md:mb-0`;
  const FullFormField = tw.div`w-full px-3`;
  const Label = tw.label`block uppercase tracking-wide text-gray-700 text-xs font-bold ml-1 mb-1 mt-2`;
  const Input = tw.input`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none`;

  return (
    <>
      <div className="mx-2 md:mx-0">
        <p>Treffen Sie Ihre Wahl und teilen Sie uns mit, wie wir Sie bei Fragen erreichen können.</p>
        <p>Sämtliche Produktpreise verstehen sich inkl. Verpackungs- und Versandspesen.</p>
        <p>Versand nur gegen Vorauszahlung. Unsere Bankverbindung lautet:</p>

        <br />
        <p className="font-bold">IBAN: CH55 0900 0000 6050 6507 7</p>
        <p className="font-bold">Guggenmusig Pilatusgeister</p>
        <p className="font-bold">6000 Luzern</p>
      </div>

      <Form>
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
        </FlexWrap>
      </Form>
    </>
  );
};

export default Shop;

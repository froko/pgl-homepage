import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import tw from 'twin.macro';

import DiagonalHeader from '../components/diagonal-header';
import { Container, LightGray, PglBlue, Section } from '../components/styles';

const Shop = () => {
  const Form = tw.form`w-full max-w-lg pt-8 mx-2 md:mx-0`;
  const FlexWrap = tw.div`flex flex-wrap`;
  const HalfFormField = tw.div`w-full md:w-1/2 px-3 mb-6 md:mb-0`;
  const FullFormField = tw.div`w-full px-3`;
  const Label = tw.label`block uppercase tracking-wide text-gray-700 text-xs font-bold ml-1 mb-1 mt-2`;
  const Input = tw.input`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none`;

  return (
    <Section id="shop">
      <DiagonalHeader color={LightGray} background={PglBlue} title="Shop" />
      <Container>
        <div class="pb-8">
          <div className="w-full flex bg-pgl-blue text-gray-100 font-bold p-2">
            <span>Halleluja</span>
            <div className="flex-1"></div>
            <StaticImage src="../images/basket.png" alt="basket" layout="fixed" width={20} className="mr-2" />
            <span>In den Warenkorb</span>
          </div>
          <div className="mx-2 md:mx-0 md:flex pt-2">
            <StaticImage src="../images/halleluja.jpg" alt="halleluja" layout="constrained" width={450} />
            <div className="md:ml-8">
              <p>01. Halleluja</p>
              <p>02. Mein Heimatland</p>
              <p>03. Highland Cathedral</p>
              <p>04. Sweet Caroline</p>
              <p>05. Unter den Kastanien</p>
              <p>06. Böhmischer Traum</p>
              <p>07. Trompeten Echo</p>
              <p>08. Sierra Nevada</p>
              <p>09. Mein Herz es brennt</p>
              <p>10. Ich sing ein Lied für dich</p>
              <p>11. CH-Potpourri</p>
              <p>12. Fernando</p>
              <p>13. Und morgen früh küss ich dich wach</p>
              <p>14. Gilberte</p>
              <p>15. Maastricht</p>
              <p>16. Atemlos</p>
              <p>17. Im Örgelihuus</p>
              <p>18. Das Spatzenlied</p>
            </div>
          </div>
        </div>
        <div class="pb-8">
          <div className="w-full flex bg-pgl-blue text-gray-100 font-bold p-2">
            <span>Jubilatus</span>
            <div className="flex-1"></div>
            <StaticImage src="../images/basket.png" alt="basket" layout="fixed" width={20} className="mr-2" />
            <span>In den Warenkorb</span>
          </div>
          <div className="mx-2 md:mx-0 md:flex pt-2">
            <StaticImage src="../images/jubilatus.jpg" alt="jubilatus" layout="constrained" width={450} />
            <div className="md:ml-8">
              <p>01. Gruss an Bern</p>
              <p>02. Der alte Jäger</p>
              <p>03. Everest</p>
              <p>04. Mexico</p>
              <p>05. Komplimänt</p>
              <p>06. Oh when the saints</p>
              <p>07. Chiquitita</p>
              <p>08. Eugschter-Medley</p>
              <p>09. Kali Nichta</p>
              <p>10. Rock'n'roll</p>
              <p>11. Rot sind die Rosen</p>
              <p>12. Optimisten</p>
              <p>13. Gloria alla Montagna</p>
              <p>14. Aber dich vergess ich nie</p>
              <p>15. Marie der letzte Tanz</p>
              <p>16. Ein Lied zieht hinaus</p>
              <p>17. Einen Stern</p>
            </div>
          </div>
        </div>
        <div class="pb-8">
          <div className="w-full flex bg-pgl-blue text-gray-100 font-bold p-2">
            <span>Chianti</span>
            <div className="flex-1"></div>
            <StaticImage src="../images/basket.png" alt="basket" layout="fixed" width={20} className="mr-2" />
            <span>In den Warenkorb</span>
          </div>
          <div className="mx-2 md:mx-0 md:flex pt-2">
            <StaticImage src="../images/chianti.jpg" alt="chianti" layout="constrained" width={450} />
            <div className="md:ml-8">
              <p>01. Chianti Wein</p>
              <p>02. Alls was bruchsch esch Liebi</p>
              <p>03. Lauchdorfer</p>
              <p>04. Cia Amore</p>
              <p>05. Chris Roberts-Medly</p>
              <p>06. Eleni</p>
              <p>07. Mariachi</p>
              <p>08. Der Holzknecht</p>
              <p>09. Nora gib Gas</p>
              <p>10. Udo-Medly</p>
              <p>11. Hansi-Medly</p>
              <p>12. Elvis-Medly</p>
              <p>13. Wandersmann</p>
              <p>14. Oh Katharina</p>
              <p>15. Zeig mir die Berge</p>
              <p>16. Krainerli</p>
              <p>17. Hans Spielmann</p>
            </div>
          </div>
        </div>

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
      </Container>
    </Section>
  );
};

export default Shop;

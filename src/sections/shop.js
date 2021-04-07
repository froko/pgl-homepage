import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { FaShoppingBasket } from 'react-icons/fa';
import tw from 'twin.macro';

import { WhiteBackground } from '../components/styles';

const Pin = ({ article, price, addToBasket, children }) => {
  const Container = tw.div`pb-8`;
  const BlueBanner = tw.div`p-2 w-full flex bg-pgl-blue text-gray-100 font-bold`;
  const Spacer = tw.div`flex-1`;
  const Title = tw.span``;
  const Price = tw.span`mr-6`;
  const ShoppingBasket = tw(FaShoppingBasket)`h-5 w-auto mr-2`;
  const BasketText = tw.span`hidden md:block`;
  const ProductView = tw.div`mx-2 md:mx-0 md:flex pt-2`;

  return (
    <Container>
      <BlueBanner>
        <Title>{article}</Title>
        <Spacer />
        <Price>CHF {price.toFixed(2)}</Price>
        <button className="flex" onClick={() => addToBasket({ article, price })}>
          <ShoppingBasket />
          <BasketText>In den Warenkorb</BasketText>
        </button>
      </BlueBanner>
      <ProductView>{children}</ProductView>
    </Container>
  );
};

const CompactDisc = ({ article, price, addToBasket, children }) => {
  const Container = tw.div`pb-8`;
  const BlueBanner = tw.div`p-2 w-full flex bg-pgl-blue text-gray-100 font-bold`;
  const Spacer = tw.div`flex-1`;
  const Title = tw.span``;
  const Price = tw.span`mr-6`;
  const ShoppingBasket = tw(FaShoppingBasket)`h-5 w-auto mr-2`;
  const BasketText = tw.span`hidden md:block`;
  const ProductView = tw.div`mx-2 md:mx-0 md:flex pt-2`;

  return (
    <Container>
      <BlueBanner>
        <Title>{article}</Title>
        <Spacer />
        <Price>CHF {price.toFixed(2)}</Price>
        <button className="flex" onClick={() => addToBasket({ article, price })}>
          <ShoppingBasket />
          <BasketText>In den Warenkorb</BasketText>
        </button>
      </BlueBanner>
      <ProductView>{children}</ProductView>
    </Container>
  );
};

const ShopItems = ({ addToBasket }) => {
  const TableOfContents = tw.div`bg-white w-full md:ml-4 pl-2`;
  const Song = tw.p``;

  return (
    <WhiteBackground id="shop" title="Shop">
      <Pin article="PGL-Pin (limmitierte Auflage)" price={10} addToBasket={(item) => addToBasket(item)}>
        <StaticImage src="../images/pgl-pin.jpg" alt="pin" height={300} />
        <TableOfContents>
          <Song>25 x 21 mm</Song>
          <Song>Silber</Song>
        </TableOfContents>
      </Pin>
      <CompactDisc article='CD "Halleluja" (2016)' price={30} addToBasket={(item) => addToBasket(item)}>
        <StaticImage src="../images/halleluja.jpg" alt="halleluja" width={520} />
        <TableOfContents>
          <Song>01. Halleluja</Song>
          <Song>02. Mein Heimatland</Song>
          <Song>03. Highland Cathedral</Song>
          <Song>04. Sweet Caroline</Song>
          <Song>05. Unter den Kastanien</Song>
          <Song>06. Böhmischer Traum</Song>
          <Song>07. Trompeten Echo</Song>
          <Song>08. Sierra Nevada</Song>
          <Song>09. Mein Herz es brennt</Song>
          <Song>10. Ich sing ein Lied für dich</Song>
          <Song>11. CH-Potpourri</Song>
          <Song>12. Fernando</Song>
          <Song>13. Und morgen früh küss ich dich wach</Song>
          <Song>14. Gilberte</Song>
          <Song>15. Maastricht</Song>
          <Song>16. Atemlos</Song>
          <Song>17. Im Örgelihuus</Song>
          <Song>18. Das Spatzenlied</Song>
        </TableOfContents>
      </CompactDisc>
      <CompactDisc article='CD "Jubilatus" (2011)' price={30} addToBasket={(item) => addToBasket(item)}>
        <StaticImage src="../images/jubilatus.jpg" alt="jubilatus" width={520} />
        <TableOfContents>
          <Song>01. Gruss an Bern</Song>
          <Song>02. Der alte Jäger</Song>
          <Song>03. Everest</Song>
          <Song>04. Mexico</Song>
          <Song>05. Komplimänt</Song>
          <Song>06. Oh when the saints</Song>
          <Song>07. Chiquitita</Song>
          <Song>08. Eugschter-Medley</Song>
          <Song>09. Kali Nichta</Song>
          <Song>10. Rock'n'roll</Song>
          <Song>11. Rot sind die Rosen</Song>
          <Song>12. Optimisten</Song>
          <Song>13. Gloria alla Montagna</Song>
          <Song>14. Aber dich vergess ich nie</Song>
          <Song>15. Marie der letzte Tanz</Song>
          <Song>16. Ein Lied zieht hinaus</Song>
          <Song>17. Einen Stern</Song>
        </TableOfContents>
      </CompactDisc>
      <CompactDisc article='CD "Chianti" (2006)' price={30} addToBasket={(item) => addToBasket(item)}>
        <StaticImage src="../images/chianti.jpg" alt="chianti" width={520} />
        <TableOfContents>
          <Song>01. Chianti Wein</Song>
          <Song>02. Alls was bruchsch esch Liebi</Song>
          <Song>03. Lauchdorfer</Song>
          <Song>04. Cia Amore</Song>
          <Song>05. Chris Roberts-Medly</Song>
          <Song>06. Eleni</Song>
          <Song>07. Mariachi</Song>
          <Song>08. Der Holzknecht</Song>
          <Song>09. Nora gib Gas</Song>
          <Song>10. Udo-Medly</Song>
          <Song>11. Hansi-Medly</Song>
          <Song>12. Elvis-Medly</Song>
          <Song>13. Wandersmann</Song>
          <Song>14. Oh Katharina</Song>
          <Song>15. Zeig mir die Berge</Song>
          <Song>16. Krainerli</Song>
          <Song>17. Hans Spielmann</Song>
        </TableOfContents>
      </CompactDisc>
    </WhiteBackground>
  );
};

export default ShopItems;

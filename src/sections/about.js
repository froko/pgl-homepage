import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import tw from 'twin.macro';
import styled from '@emotion/styled';

import { WhiteBackground } from '../components/styles';

const Title = tw.h3`text-pgl-blue text-lg lg:text-xl font-bold text-center border-b border-pgl-blue mx-2 mb-2`;
const Background = tw.div`bg-white mt-4 px-2 lg: px-4 py-4 mx-2 md:mx-0`;

const FliesstextMitSpalten = ({ title, children }) => {
  const Paragraph = styled.div`
    background-color: white;
    padding: 0.5rem;

    @media (min-width: 1024px) {
      margin: 0;
      column-count: 2;
      column-gap: 40px;
      text-align: justify;
    }

    @media (min-width: 1280px) {
      margin: 0;
      column-count: 3;
      column-gap: 40px;
      text-align: justify;
    }
  `;

  return (
    <Background>
      <Title>{title}</Title>
      <Paragraph>{children}</Paragraph>
    </Background>
  );
};

const Fliesstext = ({ title, children }) => {
  const Paragraph = styled.div`
    background-color: white;
    padding: 0.5rem;
  `;

  return (
    <Background>
      <Title>{title}</Title>
      <Paragraph>{children}</Paragraph>
    </Background>
  );
};

const GoetticlubMitglieder = ({ title, children }) => {
  const Paragraph = styled.div`
    background-color: white;
    column-count: 2;
    column-gap: 8px;
    margin: 0;

    @media (min-width: 1280px) {
      column-count: 3;
      column-gap: 40px;
      margin: 0.5rem;
      padding: 0.5rem;
    }
  `;

  return (
    <Background>
      <Title>{title}</Title>
      <Paragraph>{children}</Paragraph>
    </Background>
  );
};

const Portrait = (props) => {
  const { name, eintrittsjahr, portrait } = props;

  const Card = tw.div`w-24 md:w-32 flex flex-col items-center m-2`;
  const Name = tw.h2`text-xs md:text-base text-pgl-blue text-center font-bold`;
  const Info = tw.p`text-xs md:text-base text-center text-gray-700`;

  const image = getImage(portrait);

  return (
    <Card>
      <div>
        <GatsbyImage image={image} alt={name} className="rounded-full" />
      </div>
      <div>
        <Name>{name}</Name>
        {eintrittsjahr ? <Info>dabei seit {eintrittsjahr}</Info> : <Info>Anw??rter</Info>}
      </div>
    </Card>
  );
};

const Register = ({ title, mitglieder }) => {
  const Background = tw.div`bg-white mt-4 pt-4 mx-2 md:mx-0`;
  const FlexBox = tw.div`flex flex-wrap justify-center`;

  return (
    <Background>
      <Title>{title}</Title>
      <FlexBox>
        {mitglieder.map(({ node }) => (
          <Portrait {...node} key={node.id} />
        ))}
      </FlexBox>
    </Background>
  );
};

const byName = (a, b) => {
  if (a.node.name < b.node.name) {
    return -1;
  }

  if (a.node.name > b.node.name) {
    return 1;
  }

  return 0;
};

const About = () => {
  const Title = tw.h1`text-4xl text-center font-bold text-pgl-blue mt-8`;
  const Absatz = tw.p`mb-4`;
  const Text = tw.p``;
  const List = tw.ul`list-disc ml-5`;
  const Vorstand = tw.li``;
  const Goetti = tw.li`text-xs lg:text-base`;

  const data = useStaticQuery(graphql`
    query MitgliederQuery {
      mitglieder: allContentfulMitglieder {
        edges {
          node {
            id
            name
            instrument
            eintrittsjahr
            funktion
            portrait {
              gatsbyImageData(quality: 80, width: 220, height: 220)
            }
          }
        }
      }
    }
  `);

  const majoren = data.mitglieder.edges.filter(({ node }) => node.instrument === 'Tambourmajor').sort(byName);
  const cinellen = data.mitglieder.edges.filter(({ node }) => node.instrument === 'Cinelle').sort(byName);
  const drums = data.mitglieder.edges.filter(({ node }) => node.instrument === 'Drums').sort(byName);
  const pauken = data.mitglieder.edges.filter(({ node }) => node.instrument === 'Pauke').sort(byName);
  const lyras = data.mitglieder.edges.filter(({ node }) => node.instrument === 'Lyra').sort(byName);
  const klarinetten = data.mitglieder.edges.filter(({ node }) => node.instrument === 'Klarinette').sort(byName);
  const trompeten = data.mitglieder.edges.filter(({ node }) => node.instrument === 'Trompete').sort(byName);
  const posaunen = data.mitglieder.edges.filter(({ node }) => node.instrument === 'Posaune').sort(byName);
  const baesse = data.mitglieder.edges.filter(({ node }) => node.instrument === 'Bass').sort(byName);

  return (
    <WhiteBackground id="about" title="??ber uns">
      <FliesstextMitSpalten title="Fasnacht im Herzen. Seit 1961.">
        <Absatz>
          Seit 1961 sind die Pilatusgeister fester Bestandteil der Loz??rner Fasnacht. Und wo immer sie sind, ist
          Schunkelstimmung angesagt. Die Kl??nge der PGL, so das K??rzel der Pilatusgeister Luzern, zielen mitten ins
          Herz. Melodien von Evergreens, Oberkrainer- und Tessinermusik, s??damerikanische Rhythmen, klassische
          Ohrw??rmer, aktuelle Hits und ab und zu ein figulanter Marsch f??llen den musikalischen K??cher der PGL. Viele
          dieser Titel sind auf Tontr??gern verewigt. Ob Polka oder Tango, Walzer oder Sirtaki ??? Vielfalt hat bei den
          Pilatusgeistern Tradition. Und manch anderes auch noch.
        </Absatz>
        <Absatz>
          Die PGL-Matin??en, die jeweils an den beiden Samstagen vor der Fasnacht im Stadtkeller ??ber die B??hne gehen,
          sind legend??r. Nicht wenige der Besucher*innen stehen schon morgens um f??nf Uhr (!) vor der Stadtkeller-T??r,
          um sich einen guten Platz zu sichern. Ebenfalls im Stadtkeller findet der von den Pilatusgeistern initiierte
          und organisierte Ch??bu-Samschtig statt. Seit Jahren ist dieser Anlass fester Bestandteil in der Agenda
          eingefleischter PGL-Fans. Ein ganz besonderes PGL-Schmankerl ist f??r Insider die offene Probe in der Halle des
          FC Kickers Boccia-Sektion Luzern. Am letzten Probemittwoch vor der Fasnacht sagen die PGL mit diesem Anlass
          ihrem Gastgeber Dankesch??n. Die Halle ist dabei jeweils zum Bersten voll.
        </Absatz>
        <Absatz>
          So traditionsreich wie die PGL-Anl??sse sind, so urspr??nglich zeigt sich eine der ??ltesten Guggenmusigen
          Luzerns in ihrem Auftritt. Die Sujets werden allj??hrlich von befreundeten K??nstlern entworfen. Beim Basteln
          legen die Mitglieder selbst Hand an. Traditionell kommt die reine M??nnerformation auch immer im klassischen
          Gewand mit Rock daher. Ab und zu h??rt man munkeln, dies werde nur so beibehalten, weil die R??cke so sch??n
          schwingen, wenn die Pilatusgeister in ihrem typischen Schunkelschritt daherkommen. Doch wer die PGL kennt,
          weiss: Die k??nnen einfach nicht anders. Denn wenn sie einmal zu marschieren beginnen, dann schlagen die Herzen
          der begeisterten Mitglieder meistens im Dreivierteltakt. Und jene der vielen Zuh??rerinnen und Zuh??rer meistens
          etwas h??her. Und ??berhaupt: Die PGL und ihre Fans m??gen, lieben und pflegen die Harmonie. Dass dem so ist,
          beweist auch die Tatsache, dass die Pilatusgeister in ihrer 60-j??hrigen Vereinsgeschichte erst den dritten
          Pr??sidenten haben.
        </Absatz>
      </FliesstextMitSpalten>

      <Fliesstext title="PGL Facts in K??rze">
        <Text>Die Pilatusgeister sind eine der wenigen klassischen M??nnermusigen Luzerns.</Text>
        <Text>
          Gegr??ndet wurden die Pilatusgeister Luzern 1961 von Heinz Gloor, Sigi Widmer, Noldi Torricelli und Fritz
          Winteler.
        </Text>
        <Text>Wir sind Mitglied der "Vereinigte" seit deren Gr??ndung im Jahr 1964.</Text>
        <Text>Der aktuelle Vorstand besteht aus:</Text>
        <List>
          <Vorstand>
            <b>Beat Thalmann</b> - Pr??sident
          </Vorstand>
          <Vorstand>
            <b>Andi Felber</b> - Tambourmajor und Vize-Pr??sident
          </Vorstand>
          <Vorstand>
            <b>Markus Helfenstein</b> - Kassier
          </Vorstand>
          <Vorstand>
            <b>Manuel Brun</b> - Beisitzer
          </Vorstand>
          <Vorstand>
            <b>Ren?? Sidler</b> - Aktuar
          </Vorstand>
        </List>
      </Fliesstext>

      <Title>Aktivmitglieder</Title>
      <Register title="Tambourmajor" mitglieder={majoren} />
      <Register title="Cinellen" mitglieder={cinellen} />
      <Register title="Drums" mitglieder={drums} />
      <Register title="Pauken" mitglieder={pauken} />
      <Register title="Lyras" mitglieder={lyras} />
      <Register title="Klarinetten" mitglieder={klarinetten} />
      <Register title="Trompeten" mitglieder={trompeten} />
      <Register title="Posaunen" mitglieder={posaunen} />
      <Register title="B??sse" mitglieder={baesse} />

      <FliesstextMitSpalten title="G??tticlub">
        Sie haben ihre Instrumente zwar an den ber??hmten Nagel geh??ngt, dennoch bleiben ehemalige Mitglieder eng mit den
        PGL verbunden. Im 2003 von Turi Balzarini und Fritz Winteler ins Leben gerufenen G??tticlub kann Mitglied werden,
        wer mindestens f??nf Jahre lang aktiver Pilatusgeist war. Im G??tticlub pflegen sie weiterhin die Freundschaft und
        unterst??tzen die aktiven Pilatusgeister in vielen Belangen. Der traditionelle G??ttibatzen ist jedes Jahr ein
        willkommener Zustupf in die PGL-Kasse. ??bergeben wird dieser jeweils am PGL-Ausflug, an dem die meisten G??ttis
        jedes Jahr teilnehmen. Viele von ihnen sind auch regelm??ssig an weiteren PGL-Anl??ssen mit dabei. An den
        PGL-Matin??en ??bernehmen sie die Einlasskontrollen und bei grossen PGL-Jubil??en bilden sie den Vortrab am
        Monsterkonzert. Jeweils am Morgen des G??diszischtig organisieren sie ihren mittlerweile legend??ren G??ttiap??ro
        auf dem Kapellplatz. Dort servieren sie den zahlreichen PGL-Fans und -Aktivmitgliedern Campari Orange, C??pli,
        Bier und heisse Bouillon und beweisen damit auf ihre typische Art, dass Harmonie bei den PGL weit ??ber das
        Guggenmusikalische hinausgeht.
      </FliesstextMitSpalten>

      <GoetticlubMitglieder title="G??tticlub-Mitglieder (nach Eintrittsjahr)">
        <List>
          <Goetti>Rolf Albisser</Goetti>
          <Goetti>Renato Amado</Goetti>
          <Goetti>Erwin "Wini" B??chler</Goetti>
          <Goetti>Peter Bachmann</Goetti>
          <Goetti>Turi Balzarini</Goetti>
          <Goetti>Walter Burckhard (???)</Goetti>
          <Goetti>Peter Fleischli</Goetti>
          <Goetti>Erich Hunkeler</Goetti>
          <Goetti>Remo Moor</Goetti>
          <Goetti>Hans Odermatt</Goetti>
          <Goetti>Anton A. Oetterli (???)</Goetti>
          <Goetti>Hugo "St??ge" Stocker</Goetti>
          <Goetti>Arnold "Noldi" Torricelli</Goetti>
          <Goetti>Charles "Charly" V??geli (???)</Goetti>
          <Goetti>Fritz Winteler</Goetti>
          <Goetti>Hans-Ruedi Zai (Fahneng??tti)</Goetti>
          <Goetti>Bruno Piemontesi</Goetti>
          <Goetti>Beat Stauffer</Goetti>
          <Goetti>Tobias Widmer</Goetti>
          <Goetti>Renato Bertelle (???)</Goetti>
          <Goetti>Armin "B??su" Suppiger</Goetti>
          <Goetti>Thomas Tr??ger</Goetti>
          <Goetti>Christoph Tr??ger</Goetti>
          <Goetti>Hansruedi Jossi</Goetti>
          <Goetti>Beat "M??psu" Kunz</Goetti>
          <Goetti>Albert "B??rti" Felber (???)</Goetti>
          <Goetti>Andy B??hlmann</Goetti>
          <Goetti>Kurt Maurer</Goetti>
          <Goetti>Othmar Sch??tz</Goetti>
          <Goetti>Hans Fleischli</Goetti>
          <Goetti>Patrick Kunz</Goetti>
          <Goetti>Daniel Renggli</Goetti>
          <Goetti>Daniel Haas</Goetti>
        </List>
      </GoetticlubMitglieder>
    </WhiteBackground>
  );
};

export default About;

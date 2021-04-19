import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import tw from 'twin.macro';
import styled from '@emotion/styled';

import { WhiteBackground } from '../components/styles';

const Title = tw.h3`text-pgl-blue text-lg lg:text-xl font-bold text-center border-b border-pgl-blue mx-2 mb-2`;
const Background = tw.div`bg-white mt-4 px-2 lg: px-4 py-4 mx-2 md:mx-0`;

const FliesstextMitSpalten = ({ title, children }) => {
  const Paragraph = styled.p`
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
  const Paragraph = styled.p`
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
  const Paragraph = styled.p`
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
        {eintrittsjahr ? <Info>dabei seit {eintrittsjahr}</Info> : <Info>Anwärter</Info>}
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
    <WhiteBackground id="about" title="Über uns">
      <FliesstextMitSpalten title="Fasnacht im Herzen. Seit 1961.">
        <Absatz>
          Seit 1961 sind die Pilatusgeister fester Bestandteil der Lozärner Fasnacht. Und wo immer sie sind, ist
          Schunkelstimmung angesagt. Die Klänge der PGL, so das Kürzel der Pilatusgeister Luzern, zielen mitten ins
          Herz. Melodien von Evergreens, Oberkrainer- und Tessinermusik, südamerikanische Rhythmen, klassische
          Ohrwürmer, aktuelle Hits und ab und zu ein figulanter Marsch füllen den musikalischen Köcher der PGL. Viele
          dieser Titel sind auf Tonträgern verewigt. Ob Polka oder Tango, Walzer oder Sirtaki – Vielfalt hat bei den
          Pilatusgeistern Tradition. Und manch anderes auch noch.
        </Absatz>
        <Absatz>
          Die PGL-Matinées, die jeweils an den beiden Samstagen vor der Fasnacht im Stadtkeller über die Bühne gehen,
          sind legendär. Nicht wenige der Besucher*innen stehen schon morgens um fünf Uhr (!) vor der Stadtkeller-Tür,
          um sich einen guten Platz zu sichern. Ebenfalls im Stadtkeller findet der von den Pilatusgeistern initiierte
          und organisierte Chöbu-Samschtig statt. Seit Jahren ist dieser Anlass fester Bestandteil in der Agenda
          eingefleischter PGL-Fans. Ein ganz besonderes PGL-Schmankerl ist für Insider die offene Probe in der
          Bocciahalle des FC Kickers. Am letzten Probemittwoch vor der Fasnacht sagen die PGL mit diesem Anlass ihrem
          Gastgeber Dankeschön. Die Halle ist dabei jeweils zum Bersten voll.
        </Absatz>
        <Absatz>
          So traditionsreich wie die PGL-Anlässe sind, so ursprünglich zeigt sich eine der ältesten Guggenmusigen
          Luzerns in ihrem Auftritt. Die Sujets werden alljährlich von befreundeten Künstlern entworfen. Beim Basteln
          legen die Mitglieder selbst Hand an. Traditionell kommt die reine Männermusig auch immer im klassischen Gewand
          mit Rock daher. Ab und zu hört man munkeln, dies werde nur so beibehalten, weil die Röcke so schön schwingen,
          wenn die Pilatusgeister in ihrem typischen Schunkelschritt daherkommen. Doch wer die PGL kennt, weiss: Die
          können einfach nicht anders. Denn wenn sie einmal zu marschieren beginnen, dann schlagen die Herzen der
          begeisterten Mitglieder meistens im Dreivierteltakt. Und jene der vielen Zuhörerinen und Zuhörer meistens
          etwas höher. Und überhaupt: Die PGL und ihre Fans mögen, lieben und pflegen die Harmonie. Dass dem so ist,
          beweist auch die Tatsache, dass die Pilatusgeister in ihrer 60-jährigen Vereinsgeschichte erst den dritten
          Präsidenten haben.
        </Absatz>
      </FliesstextMitSpalten>

      <Fliesstext title="PGL Facts in Kürze">
        <Text>Die Pilatusgeister sind eine der wenigen klassischen Männermusigen Luzerns.</Text>
        <Text>
          Gegründet wurden die Pilatusgeister Luzern 1961 von Heinz Gloor, Sigi Widmer, Noldi Torricelli und Fritz
          Winteler.
        </Text>
        <Text>Wir sind Mitglied der "Vereinigte" seit deren Gründung im Jahr 1964.</Text>
        <Text>Der aktuelle Vorstand besteht aus:</Text>
        <List>
          <Vorstand>
            <b>Beat Thalmann</b> - Präsident
          </Vorstand>
          <Vorstand>
            <b>Andi Felber</b> - Tambourmajor und Vize-Präsident
          </Vorstand>
          <Vorstand>
            <b>Markus Helfenstein</b> - Kassier
          </Vorstand>
          <Vorstand>
            <b>Manuel Brun</b> - Beisitzer
          </Vorstand>
          <Vorstand>
            <b>René Sidler</b> - Aktuar
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
      <Register title="Bässe" mitglieder={baesse} />

      <FliesstextMitSpalten title="Götticlub">
        Sie haben ihr Instrument zwar an den berühmten Nagel gehängt, dennoch bleiben ehemalige Mitglieder eng mit den
        PGL verbunden. Im 2003 von Turi Balzarini und Fritz Winteler ins Leben gerufenen Götticlub kann Mitglied werden,
        wer mindestens fünf Jahre lang aktiver Pilatusgeist war. Im Götticlub pflegen sie weiterhin die Freundschaft und
        unterstützen die aktiven Pilatusgeister in vielen Belangen. Der traditionelle Göttibatzen ist jedes Jahr ein
        willkommener Zustupf in die PGL-Kasse. Übergeben wird er jeweils am PGL-Ausflug, an dem die meisten Göttis jedes
        Jahr dabei sind. Viele von ihnen sind auch regelmässig an weiteren PGL-Anlässen mit dabei. An den PGL-Matineen
        übernehmen sie die Einlasskontrolle und bei grossen PGL-Jubiläen bilden sie den Vortrab am Monsterkonzert.
        Jeweils am Morgen des Güdiszischtig organisieren sie den ihren mittlerweilse legendären Göttiapéro auf dem
        Kapellplatz. Dort servieren sie den zahlreichen PGL-Fans und -Aktivmitgliedern Campari Orange, Cüpli, Bier und
        heisse Bouillon und beweisen damit auf ihre typische Art, dass Harmonie bei den PGL weit übers
        guggenmusikalische hinausgeht.
      </FliesstextMitSpalten>

      <GoetticlubMitglieder title="Götticlub-Mitglieder (nach Eintrittsjahr)">
        <List>
          <Goetti>Rolf Albisser</Goetti>
          <Goetti>Renato Amado</Goetti>
          <Goetti>Erwin "Wini" Bächler</Goetti>
          <Goetti>Peter Bachmann</Goetti>
          <Goetti>Turi Balzarini</Goetti>
          <Goetti>Walter Burckhard (†)</Goetti>
          <Goetti>Peter Fleischli</Goetti>
          <Goetti>Erich Hunkeler</Goetti>
          <Goetti>Remo Moor</Goetti>
          <Goetti>Hans Odermatt</Goetti>
          <Goetti>Anton A. Oetterli (†)</Goetti>
          <Goetti>Hugo "Stöge" Stocker</Goetti>
          <Goetti>Arnold "Noldi" Torricelli</Goetti>
          <Goetti>Charles "Charly" Vögeli (†)</Goetti>
          <Goetti>Fritz Winteler</Goetti>
          <Goetti>Hans-Ruedi Zai (Fahnengötti)</Goetti>
          <Goetti>Bruno Piemontesi</Goetti>
          <Goetti>Beat Stauffer</Goetti>
          <Goetti>Tobias Widmer</Goetti>
          <Goetti>Renato Bertelle (†)</Goetti>
          <Goetti>Armin "Büsu" Suppiger</Goetti>
          <Goetti>Thomas Träger</Goetti>
          <Goetti>Christoph Träger</Goetti>
          <Goetti>Hansruedi Jossi</Goetti>
          <Goetti>Beat "Möpsu" Kunz</Goetti>
          <Goetti>Albert "Bärti" Felber (†)</Goetti>
          <Goetti>Andy Bühlmann</Goetti>
          <Goetti>Kurt Maurer</Goetti>
          <Goetti>Othmar Schütz</Goetti>
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

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import tw from 'twin.macro';
import styled from '@emotion/styled';

import { WhiteBackground } from '../components/styles';

const Title = tw.h3`text-pgl-blue text-xl font-bold text-center border-b border-pgl-blue mx-2 mb-2`;

const Fliesstext = ({ title, children }) => {
  const Background = tw.div`bg-white mt-4 py-4 mx-2 md:mx-0`;
  const Paragraph = styled.p`
    background-color: white;
    padding: 0.5rem;
    margin: 0.5rem;

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

const Portrait = (props) => {
  const { name, eintrittsjahr, portrait } = props;

  const Card = tw.div`w-24 md:w-44 flex flex-col items-center m-2`;
  const Name = tw.h2`text-xs md:text-base text-pgl-blue text-center font-bold`;
  const Info = tw.p`text-xs md:text-base text-center text-gray-700`;

  const image = getImage(portrait);

  let info;
  if (eintrittsjahr) {
    info = <Info>dabei seit {eintrittsjahr}</Info>;
  } else {
    info = <Info>Anwärter</Info>;
  }

  return (
    <Card>
      <div>
        <GatsbyImage image={image} alt={name} className="rounded-full" />
      </div>
      <div>
        <Name>{name}</Name>
        {info}
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
              gatsbyImageData(width: 140, height: 140)
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
      <Fliesstext title="Fasnacht im Herzen. Seit 1961.">
        Seit 1961 sind die Pilatusgeister fester Bestandteil der Lozärner Fasnacht. Und wo immer sie sind, ist
        Schunkelstimmung angesagt. Die Klänge der PGL, so das Kürzel der Pilatusgeister Luzern, zielen mitten ins Herz.
        Melodien von Evergreens, Oberkrainer- und Tessinermusik, südamerikanische Rhythmen, klassische Ohrwürmer,
        aktuelle Hits und ab und zu ein figulanter Marsch füllen den musikalischen Köcher der PGL. Das Repertoire
        umfasst mittlerweile weit über 100 Titel. Viele davon sind auf Tonträgern verewigt. Ob Polka oder Tango, Walzer
        oder Sirtaki – Vielfalt hat bei den Pilatusgeistern Tradition. Und manch anderes auch noch. <br /> <br /> Die
        PGL-Matinées, die jeweils an den beiden Samstagen vor der Fasnacht im Stadtkeller über die Bühne gehen, sind
        legendär. Nicht wenige der Besucher*innen stehen schon morgens um fünf Uhr (!) vor der Stadtkeller-Tür, um sich
        einen guten Platz zu sichern. Ebenfalls im Stadtkeller findet der von den Pilatusgeistern initiierte und
        organisierte Chöbu-Samschtig statt. Seit Jahren ist dieser Anlass fester Bestandteil in der Agenda
        eingefleischter PGL-Fans. Ein ganz besonderes PGL-Schmankerl ist für Insider die offene Probe in der Bocciahalle
        des FC Kickers. Am letzten Probemittwoch vor der Fasnacht sagen die PGL mit diesem Anlass ihrem Gastgeber
        Dankeschön. Die Halle ist dabei jeweils zum Bersten voll. <br /> <br /> So traditionsreich wie die PGL-Anlässe
        sind, so ursprünglich zeigt sich eine der ältesten Guggenmusigen Luzerns in ihrem Auftritt. Die Sujets werden
        alljährlich von befreundeten Künstlern entworfen. Beim Basteln legen die Mitglieder selbst Hand an. Traditionell
        kommt die reine Männermusig auch immer im klassischen Gewand mit Rock daher. Ab und zu hört man munkeln, dies
        werde nur so beibehalten, weil die Röcke so schön schwingen, wenn die Pilatusgeister in ihrem typischen
        Schunkelschritt daherkommen. Doch wer die PGL kennt, weiss: Die können einfach nicht anders. Denn wenn sie
        einmal zu marschieren beginnen, dann schlagen die Herzen der begeisterten Mitglieder meistens im
        Dreivierteltakt. Und jene der vielen Zuhörerinen und Zuhörer meistens etwas höher. Und überhaupt: Die PGL und
        ihre Fans mögen, lieben und pflegen die Harmonie. Dass dem so ist, beweist auch die Tatsache, dass die
        Pilatusgeister in ihrer 60-jährigen Vereinsgeschichte erst den dritten Präsidenten haben.
      </Fliesstext>

      <Register title="Tambourmajor" mitglieder={majoren} />
      <Register title="Cinellen" mitglieder={cinellen} />
      <Register title="Drums" mitglieder={drums} />
      <Register title="Pauken" mitglieder={pauken} />
      <Register title="Lyras" mitglieder={lyras} />
      <Register title="Klarinetten" mitglieder={klarinetten} />
      <Register title="Trompeten" mitglieder={trompeten} />
      <Register title="Posaunen" mitglieder={posaunen} />
      <Register title="Bässe" mitglieder={baesse} />

      <Fliesstext title="Götticlub">
        Sie haben ihr Instrument zwar an den berühmten Nagel gehängt, dennoch bleiben ehemalige Mitglieder eng mit den
        PGL verbunden. Im von Turi Balzarini und Fritz Winteler ins Leben gerufenen Götticlub kann Mitglied werden, wer
        mindestens fünf Jahre lang aktiver Pilatusgeist war. Im Götticlub pflegen sie weiterhin die Freundschaft und
        unterstützen die aktiven Pilatusgeister in vielen Belangen. Der traditionelle Göttibatzen ist jedes Jahr ein
        willkommener Zustupf in die PGL-Kasse. Übergeben wird er jeweils am PGL-Ausflug, an dem die meisten Göttis jedes
        Jahr dabei sind. Viele von ihnen sind auch regelmässig an weiteren PGL-Anlässen mit dabei. An den PGL-Matineen
        übernehmen sie die Einlasskontrolle und bei grossen PGL-Jubiläen bilden sie den Vortrab am Monsterkonzert.
        Jeweils am Morgen des Güdiszischtig organisieren sie den ihren mittlerweilse legendären Göttiapéro auf dem
        Kapellplatz. Dort servieren sie den zahlreichen PGL-Fans und -Aktivmitgliedern Campari Orange, Cüpli, Bier und
        heisse Bouillon und beweisen damit auf ihre typische Art, dass Harmonie bei den PGL weit übers
        guggenmusikalische hinausgeht.
      </Fliesstext>
    </WhiteBackground>
  );
};

export default About;

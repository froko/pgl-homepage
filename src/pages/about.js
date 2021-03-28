import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import tw from 'twin.macro';

import { WhiteBackground } from '../components/styles';

const Portrait = (props) => {
  const { name, eintrittsjahr, funktion, portrait } = props;

  const Card = tw.div`w-40 bg-white shadow-sm rounded-md flex flex-col justify-center items-center m-2 p-2`;
  const Name = tw.h2`text-pgl-blue text-center font-bold`;
  const Info = tw.p`text-center text-gray-700`;

  const image = getImage(portrait);

  let info;
  if (eintrittsjahr) {
    info = <Info>Eintrittsjahr: {eintrittsjahr}</Info>
  } else {
    info = <Info>Anwärter</Info>
  }

  return (
    <Card>
      <div>
        <GatsbyImage image={image} alt={name} className="rounded-full" />
      </div>
      <div>
        <Name>{name}</Name>
        <Info>{funktion}</Info>
        {info}
      </div>
    </Card>
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
  const FlexBox = tw.div`container mx-auto flex flex-wrap justify-center`;

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
      <FlexBox>
        {majoren.map(({ node }) => (
          <Portrait {...node} key={node.id} />
        ))}
      </FlexBox>
      <FlexBox>
        {cinellen.map(({ node }) => (
          <Portrait {...node} key={node.id} />
        ))}
      </FlexBox>
      <FlexBox>
        {drums.map(({ node }) => (
          <Portrait {...node} key={node.id} />
        ))}
      </FlexBox>
      <FlexBox>
        {pauken.map(({ node }) => (
          <Portrait {...node} key={node.id} />
        ))}
      </FlexBox>
      <FlexBox>
        {lyras.map(({ node }) => (
          <Portrait {...node} key={node.id} />
        ))}
      </FlexBox>
      <FlexBox>
        {klarinetten.map(({ node }) => (
          <Portrait {...node} key={node.id} />
        ))}
      </FlexBox>
      <FlexBox>
        {trompeten.map(({ node }) => (
          <Portrait {...node} key={node.id} />
        ))}
      </FlexBox>
      <FlexBox>
        {posaunen.map(({ node }) => (
          <Portrait {...node} key={node.id} />
        ))}
      </FlexBox>
      <FlexBox>
        {baesse.map(({ node }) => (
          <Portrait {...node} key={node.id} />
        ))}
      </FlexBox>
    </WhiteBackground>
  );
};

export default About;

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import tw from 'twin.macro';

import { Section, List, ListItem, Download } from './styles';

const Item = (props) => {
  const { titel, dokument } = props;

  return (
    <ListItem>
      {titel} (<Download link={dokument.file.url} />)
    </ListItem>
  );
};

const byName = (a, b) => {
  if (a.node.titel < b.node.titel) {
    return -1;
  }

  if (a.node.titel > b.node.titel) {
    return 1;
  }

  return 0;
};

const Noten = () => {
  const Register = tw.h2`text-pgl-blue text-2xl ml-3 mt-4 font-bold`;
  const data = useStaticQuery(graphql`
    query InternNotenQuery {
      noten: allContentfulInternNoten {
        edges {
          node {
            id
            titel
            register
            dokument {
              file {
                url
              }
            }
          }
        }
      }
    }
  `);

  const trompete1 = data.noten.edges.filter(({ node }) => node.register === 'Trompete1').sort(byName);
  const trompete2 = data.noten.edges.filter(({ node }) => node.register === 'Trompete2').sort(byName);
  const posaune1 = data.noten.edges.filter(({ node }) => node.register === 'Posaune1').sort(byName);
  const posaune2 = data.noten.edges.filter(({ node }) => node.register === 'Posaune2').sort(byName);
  const bass = data.noten.edges.filter(({ node }) => node.register === 'Bass').sort(byName);

  return (
    <Section title="Noten">
      <Register>Trompete 1</Register>
      <List>
        {trompete1.map(({ node }) => (
          <Item key={node.id} {...node} />
        ))}
      </List>
      <Register>Trompete 2</Register>
      <List>
        {trompete2.map(({ node }) => (
          <Item key={node.id} {...node} />
        ))}
      </List>
      <Register>Posaune 1</Register>
      <List>
        {posaune1.map(({ node }) => (
          <Item key={node.id} {...node} />
        ))}
      </List>
      <Register>Posaune 2</Register>
      <List>
        {posaune2.map(({ node }) => (
          <Item key={node.id} {...node} />
        ))}
      </List>
      <Register>Bass</Register>
      <List>
        {bass.map(({ node }) => (
          <Item key={node.id} {...node} />
        ))}
      </List>
    </Section>
  );
};

export default Noten;

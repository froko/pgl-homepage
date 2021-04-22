import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Section, List, ListItem, Download } from './styles';

const Item = (props) => {
  const { titel, dokument } = props;

  return (
    <ListItem>
      {titel} (<Download link={dokument.file.url} />)
    </ListItem>
  );
};

const Einladungen = () => {
  const data = useStaticQuery(graphql`
    query InternEinladungenQuery {
      einladungen: allContentfulInternEinladungen {
        edges {
          node {
            id
          }
        }
      }
    }
  `);

  return (
    <Section title="Einladungen">
      <List>
        {data.einladungen.edges.map(({ node }) => (
          <Item key={node.id} {...node} />
        ))}
      </List>
    </Section>
  );
};

export default Einladungen;

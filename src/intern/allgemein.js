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

const Allgemein = () => {
  const data = useStaticQuery(graphql`
    query InternAllgemeinQuery {
      allgemein: allContentfulInternAllgemein {
        edges {
          node {
            id
            titel
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

  return (
    <Section title="Allgemein">
      <List>
        {data.allgemein.edges.map(({ node }) => (
          <Item key={node.id} {...node} />
        ))}
      </List>
    </Section>
  );
};

export default Allgemein;

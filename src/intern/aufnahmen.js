import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Section, List, ListItem, Download } from './styles';

const Item = (props) => {
  const { titel, audiofile } = props;

  return (
    <ListItem>
      {titel} (<Download link={audiofile.file.url} />)
    </ListItem>
  );
};

const Aufnahmen = () => {
  const data = useStaticQuery(graphql`
    query InternAufnahmenQuery {
      aufnahmen: allContentfulInternAufnahmen {
        edges {
          node {
            id
            titel
            audiofile {
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
    <Section title="Aufnahmen">
      <List>
        {data.aufnahmen.edges.map(({ node }) => (
          <Item key={node.id} {...node} />
        ))}
      </List>
    </Section>
  );
};

export default Aufnahmen;

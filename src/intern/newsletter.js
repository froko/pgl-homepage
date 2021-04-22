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

const Newsletter = () => {
  const data = useStaticQuery(graphql`
    query InternNewsletterQuery {
      newsletter: allContentfulInternNewsletter {
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
    <Section title="Newsletter">
      <List>
        {data.newsletter.edges.map(({ node }) => (
          <Item key={node.id} {...node} />
        ))}
      </List>
    </Section>
  );
};

export default Newsletter;

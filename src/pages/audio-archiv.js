import React from 'react';
import { graphql, navigate, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import tw from 'twin.macro';

import Layout from '../components/layout';
import Seo from '../components/seo';
import Button from '../components/button';
import { Parallax, WhiteBackground, HeaderMargin } from '../components/styles';

const byName = (a, b) => {
  if (a.description < b.description) {
    return -1;
  }

  if (a.description > b.description) {
    return 1;
  }

  return 0;
};

const Album = (props) => {
  const AlbumContainer = tw.div`my-8`;
  const Title = tw.h2`text-pgl-blue text-2xl font-bold mb-4`;
  const FlexBox = tw.div`flex flex-row`;
  const CoverContainer = tw.div`w-2/5 lg:w-2/4`;
  const ContentContainer = tw.div`w-3/5 lg:w-2/4 pl-4`;
  const List = tw.ul``;
  const ListItem = tw.li``;
  const Link = tw.a`lg:leading-7`;

  const { titel, coverFront, coverBack, audioFiles } = props;

  return (
    <AlbumContainer>
      <Title>{titel}</Title>
      <FlexBox>
        <CoverContainer>
          <GatsbyImage image={getImage(coverFront)} alt={coverFront.title} />
          <GatsbyImage image={getImage(coverBack)} alt={coverBack.title} />
        </CoverContainer>
        <ContentContainer>
          <List>
            {audioFiles.sort(byName).map((af) => (
              <ListItem>
                <Link key={af.id} href={af.file.url}>
                  {af.description}
                </Link>
              </ListItem>
            ))}
          </List>
        </ContentContainer>
      </FlexBox>
    </AlbumContainer>
  );
};

const AudioArchiv = () => {
  const ArchivContent = tw.div`bg-white max-w-xl md:mx-auto p-2 min-h-remaining-screen`;
  const Center = tw.div`text-center`;
  const Hinweis = tw.p`mt-8`;

  const data = useStaticQuery(graphql`
    query AudioArchivQuery {
      archiv: allContentfulAudioArchiv {
        edges {
          node {
            id
            titel
            coverFront {
              title
              gatsbyImageData(width: 280)
            }
            coverBack {
              title
              gatsbyImageData(width: 280)
            }
            audioFiles {
              id
              description
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
    <Layout>
      <Seo title="Archiv" />
      <Parallax>
        <HeaderMargin>
          <WhiteBackground title="Alte Tonträger">
            <ArchivContent>
              <Center>
                <Button onClick={() => navigate('/#media')}>Zurück zum Archiv</Button>
                <Hinweis>Einelne Stücke können durch Klick auf den Titel heruntergeladen werden.</Hinweis>
              </Center>
              {data.archiv.edges.map(({ node }) => (
                <Album key={node.id} {...node} />
              ))}
              <Center>
                <Button onClick={() => navigate('/#media')}>Zurück zum Archiv</Button>
              </Center>
            </ArchivContent>
          </WhiteBackground>
        </HeaderMargin>
        <Parallax />
      </Parallax>
    </Layout>
  );
};

export default AudioArchiv;

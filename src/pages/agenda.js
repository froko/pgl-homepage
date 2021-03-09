import React from 'react';
import tw from 'twin.macro';

import DiagonalHeader from '../components/diagonal-header';
import { BlueBackground, Container, LightGray, PglBlue, Section } from '../components/styles';

const Agenda = () => {
  const EventContainer = tw.div`p-4 text-center`;
  const Event = tw.h2`text-white text-xl font-bold`;
  const Datum = tw.p`text-white`;
  const Location = tw.p`text-white`;

  return (
    <Section id="agenda">
      <DiagonalHeader color={PglBlue} background={LightGray} title="Agenda" />
      <BlueBackground>
        <Container>
          <EventContainer>
            <Event>1. Matinéekonzert</Event>
            <Event>(Abgesagt)</Event>
            <Datum>am 30.01.2021 um 09:45</Datum>
            <Location>@ Stadtkeller Luzern</Location>
          </EventContainer>
          <EventContainer>
            <Event>Offene Probe</Event>
            <Event>(Abgesagt)</Event>
            <Datum>am 03.02.2021 um 19:45</Datum>
          </EventContainer>
          <EventContainer>
            <Event>2. Matinéekonzert</Event>
            <Event>(Abgesagt)</Event>
            <Datum>am 06.02.2021 um 09:45</Datum>
            <Location>@ Stadtkeller Luzern</Location>
          </EventContainer>
          <EventContainer>
            <Event>Schmutziger Donnerstag</Event>
            <Event>(Abgesagt)</Event>
            <Datum>am 11.02.2021</Datum>
            <Location>@ Luzern</Location>
          </EventContainer>
          <EventContainer>
            <Event>Chöbusamschtig</Event>
            <Event>(Verschoben auf 2022)</Event>
            <Datum>am 13.02.2021 um 18:00</Datum>
            <Location>@ Stadtkeller Luzern</Location>
          </EventContainer>
          <EventContainer>
            <Event>PGL - 60 Jahre Jubiläumsabend</Event>
            <Event>(Verschoben auf 2022)</Event>
            <Datum>am 20.03.2021</Datum>
          </EventContainer>
        </Container>
      </BlueBackground>
    </Section>
  );
};

export default Agenda;

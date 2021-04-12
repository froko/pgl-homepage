import React from 'react';
import tw from 'twin.macro';

import { BlueBackground } from '../components/styles';

const Agenda = () => {
  const EventContainer = tw.div`p-4 text-center`;
  const Event = tw.h2`text-white text-xl font-bold`;
  const Datum = tw.p`text-white`;
  const Location = tw.p`text-white`;

  return (
    <BlueBackground id="agenda" title="Agenda">
      <EventContainer>
        <Event>1. Matinéekonzert</Event>
        <Datum>am 12.02.2022 um 09:45</Datum>
        <Location>@ Stadtkeller Luzern</Location>
      </EventContainer>
      <EventContainer>
        <Event>Offene Probe</Event>
        <Datum>am 17.02.2022 um 19:45</Datum>
      </EventContainer>
      <EventContainer>
        <Event>2. Matinéekonzert</Event>
        <Datum>am 19.02.2022 um 09:45</Datum>
        <Location>@ Stadtkeller Luzern</Location>
      </EventContainer>
      <EventContainer>
        <Event>Schmutziger Donnerstag</Event>
        <Datum>am 24.02.2022</Datum>
        <Location>@ Luzern</Location>
      </EventContainer>
      <EventContainer>
        <Event>Chöbusamschtig</Event>
        <Datum>am 26.02.2022 um 18:00</Datum>
        <Location>@ Stadtkeller Luzern</Location>
      </EventContainer>
      <EventContainer>
        <Event>PGL - 60 Jahre Jubiläumsabend</Event>
        <Datum>im Frühjahr 2022</Datum>
      </EventContainer>
    </BlueBackground>
  );
};

export default Agenda;

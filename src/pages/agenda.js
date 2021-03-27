import React from 'react';
import tw from 'twin.macro';

import { BlueBackground } from '../components/styles';

const Agenda = () => {
  const EventContainer = tw.div`p-4 text-center`;
  const Event = tw.h2`text-white text-xl font-bold`;

  return (
    <BlueBackground id="agenda" title="Agenda">
      <EventContainer>
        <Event>Zur Zeit sind keine Anlässe geplant.</Event>
      </EventContainer>
    </BlueBackground>
  );
};

export default Agenda;

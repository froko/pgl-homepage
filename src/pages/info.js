import React from 'react';
import tw from 'twin.macro';

import { BlueBackground } from '../components/styles';

const Info = () => {
  const Text = tw.p`text-white mx-2`;
  return (
    <BlueBackground id="info" title="Aktuelles">
      <div className="flex">
        <div className="flex-1" />
        <Text>
          <b className="font-bold">Du möchtest gerne bei den PGL mitmachen?</b>
          <br />
          Dann zögere nicht und wende dich via Kontaktformular direkt an uns.
          <br />
          Das musikalische Gremium wird sich mit dir in Verbindung setzen.
          <br />
          <br />
          Zum Kontaktformular.
        </Text>
        <div className="flex-1" />
      </div>
    </BlueBackground>
  );
};

export default Info;

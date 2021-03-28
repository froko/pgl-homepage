import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import tw from 'twin.macro';

import { BlueBackground } from '../components/styles';

const Info = () => {
  const Text = tw.p`text-white ml-8`;
  return (
    <BlueBackground id="info" title="Aktuelles">
      <div className="flex">
        <StaticImage
          src="../images/mitgliedersuche.jpg"
          alt="mitgliedersuche"
          layout="constrained"
          width={120}
          className="hidden md:block rounded-full"
        />
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
      </div>
    </BlueBackground>
  );
};

export default Info;

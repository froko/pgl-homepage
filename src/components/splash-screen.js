import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const SplashScreen = React.forwardRef((props, ref) => {
  return (
    <div className="h-screen w-screen flex flex-col" ref={ref}>
      <StaticImage
        src="../images/logo.png"
        alt="logo"
        layout="constrained"
        width={600}
        placeholder="dominantColor"
        className="mx-auto mt-auto"
      />
      <StaticImage
        src="../images/lettering-start.png"
        alt="lettering-start"
        layout="constrained"
        width={1000}
        placeholder="dominantColor"
        className="mx-auto mb-auto mt-8"
      />
    </div>
  );
});

export default SplashScreen;

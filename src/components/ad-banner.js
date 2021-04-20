import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import tw from 'twin.macro';

const AdBanner = () => {
  const WhiteBackground = tw.div`w-full bg-white`;
  const FlexBox = tw.div`flex flex-wrap mx-2 justify-center text-center`;
  const ImageContainer = tw.div`py-2 w-1/2 lg:w-1/5`;

  const quality = 90;
  const height = 44;
  const placeholder = 'tracedSVG';

  return (
    <WhiteBackground>
      <FlexBox>
        <ImageContainer>
          <Link to="https://www.stadtkeller.ch/">
            <StaticImage
              src="../images/ads/stadtkeller.png"
              alt="stadtkeller"
              quality={quality}
              height={height}
              placeholder={placeholder}
            />
          </Link>
        </ImageContainer>
        <ImageContainer>
          <Link to="http://www.hotel-waldstaetterhof.ch/">
            <StaticImage
              src="../images/ads/waldstaetterhof.png"
              alt="waldstaetterhof"
              quality={quality}
              height={height}
              placeholder={placeholder}
            />
          </Link>
        </ImageContainer>
        <ImageContainer>
          <Link to="https://www.motelbrueggli.ch/">
            <StaticImage
              src="../images/ads/brueggli.png"
              alt="brueggli"
              quality={quality}
              height={height}
              placeholder={placeholder}
            />
          </Link>
        </ImageContainer>
        <ImageContainer>
          <Link to="https://www.schubiger-nw.ch/">
            <StaticImage
              src="../images/ads/schubiger.png"
              alt="schubiger"
              quality={quality}
              height={height}
              placeholder={placeholder}
            />
          </Link>
        </ImageContainer>
      </FlexBox>
    </WhiteBackground>
  );
};

export default AdBanner;

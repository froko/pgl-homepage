import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ad-carousel.css';

const AdCarousel = ({ images }) => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <span />
  };

  return (
    <Slider className="header-slider" {...settings}>
      {images.map((image) => {
        const slideImage = getImage(image.childImageSharp.gatsbyImageData);
        return <GatsbyImage image={slideImage} alt={image.name} key={image.name} />;
      })}
    </Slider>
  );
};

AdCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default AdCarousel;

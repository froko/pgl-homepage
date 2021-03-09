import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css';

const Carousel = ({ images }) => {
  const settings = {
    speed: 500,
    variableWidth: true
  };

  return (
    <Slider {...settings}>
      {images.map((image) => {
        const slideImage = getImage(image.gatsbyImageData);
        return (
          <div className="mx-1" key={image.id}>
            <GatsbyImage image={slideImage} alt={image.title} />
          </div>
        );
      })}
    </Slider>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Carousel;

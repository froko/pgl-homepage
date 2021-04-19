import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Lightbox from 'react-image-lightbox';

import Row from './row';
import Col from './column';
import ImgWrapper from './img-wrapper';

import 'react-image-lightbox/style.css';

const byName = (a, b) => {
  if (a.file.fileName < b.file.fileName) {
    return -1;
  }

  if (a.file.fileName > b.file.fileName) {
    return 1;
  }

  return 0;
};

const Gallery = ({ images = [] }) => {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const prevIndex = (index + images.length - 1) % images.length;
  const nextIndex = (index + images.length + 1) % images.length;

  const onCloseLightbox = () => {
    setIsOpen(false);
  };

  return (
    <React.Fragment>
      <Row>
        {images.sort(byName).map((img, imgIndex) => {
          const thumb = getImage(img.thumb);

          return (
            <Col
              key={imgIndex}
              onClick={() => {
                setIsOpen(true);
                setIndex(imgIndex);
              }}
            >
              <ImgWrapper margin="0.25rem">
                <GatsbyImage image={thumb} alt={img.file.fileName} />
              </ImgWrapper>
            </Col>
          );
        })}
      </Row>
      {isOpen && (
        <Lightbox
          mainSrc={images[index].file.url}
          nextSrc={images[nextIndex].file.url}
          prevSrc={images[prevIndex].file.url}
          onCloseRequest={onCloseLightbox}
          onMovePrevRequest={() => setIndex(prevIndex)}
          onMoveNextRequest={() => setIndex(nextIndex)}
          imageTitle={images[index].title}
          imageCaption={images[index].caption}
        />
      )}
    </React.Fragment>
  );
};

export default Gallery;

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      file: PropTypes.object,
      thumb: PropTypes.object,
      thumbAlt: PropTypes.string,
      title: PropTypes.node,
      caption: PropTypes.node
    })
  )
};

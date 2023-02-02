import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function DarkVariantCarousel() {
  return (
    <Carousel >
      <Carousel.Item>
        <img
          className="carousel-image d-block w-100"
          src='/images/hero.jpg'
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 className='carousel-caption-title' >Our Top Hotels</h5>
          <p className='carousel-caption-para' >Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-image d-block w-100"
          src='/images/hero.jpg'
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 className='carousel-caption-title' >Our Top Hotels</h5>
          <p className='carousel-caption-para' >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-image d-block w-100"
          src='/images/hero.jpg'
          alt="Third slide"
        />
        <Carousel.Caption>
        <h5 className='carousel-caption-title' >Our Top Hotels</h5>
        <p className='carousel-caption-para' >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantCarousel;
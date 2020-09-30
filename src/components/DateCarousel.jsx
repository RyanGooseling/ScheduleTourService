import React, {useState} from 'react';
import styled from 'styled-components';

const DateCarousel = (props) => {
  console.log('Dates: ', props.dates);
  // override dates with indices for the time deings
  const fakeDates = [1, 2, 3, 4, 5];
  const [activeIndex, setIndex] = useState(0);

  // NOTE: The tourDate is NOT the same as the active Index
  const [tourDate, setDate] = useState('');

  const CarouselExample = styled.div`
    position: relative;
    `;

  const CarouselSlide = styled.ul`
    margin-right: auto;
    margin-left: auto;
    display: none;
    max-width: 900px;
    list-style-type: none;
    text-align: center;
    `;

  const goToSlide = function(input) {
    setIndex(input);
  };

  const goToPrevSlide = function(e) {
    e.preventDefault();

    let index = activeIndex;
    let {slides} = fakeDates;
    let slidesLength = slides.length;
    if (index < 1) {
      index = slidesLength;
    }
    --index;
    setIndex(index);
  };

  const goToNextSlide = function(e) {
    e.preventDefault();

    let index = activeIndex;
    let {slides} = fakeDates;
    let slidesLength = slides.length - 1;
    if (index === slidesLength) {
      index = -1;
    }
    ++index;
    setIndex(index);
  };

  return (
    <div> Go tour this home
      <br></br>
      <CarouselExample>
        <a
          href="#"
          className="carousel__arrow carousel__arrow--left"
          onClick={e => this.goToPrevSlide(e)}
        >
          <span className="fa fa-2x fa-angle-left"/>
        </a>
        <CarouselSlide>
          {fakeDates.map((index) => {
            return (
              <li
                className={index === activeIndex ? 'carouselSlide carouselSlide--active' : 'carouselSlide'}
                key={index}
              >
                <p>Content: {index}</p>
              </li>
            );
          })}
        </CarouselSlide>
        <a
          href="#"
          className="carousel__arrow carousel__arrow--right"
          onClick={e => this.goToNextSlide(e)}
        >
          <span className="fa fa-2x fa-angle-right"/>
        </a>


      </CarouselExample>
    </div>
  );
};

export default DateCarousel;

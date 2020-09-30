import React, {useState} from 'react';
import styled from 'styled-components';
import LeftArrow from './LeftArrow.jsx';
import RightArrow from './RightArrow.jsx';
import Slide from './Slide.jsx';

const DateCarousel = (props) => {
  console.log('Dates: ', props.dates);
  // override dates with indices for the time deings
  const fakeDates = [1, 2, 3, 4, 5];
  const [activeIndex, setIndex] = useState(1);

  // NOTE: The tourDate is NOT the same as the active Index
  const [tourDate, setDate] = useState('');

  const goToSlide = function(input) {
    setIndex(input);
  };

  const goToPrevSlide = function(e) {
    e.preventDefault();

    let index = activeIndex;
    let slides = fakeDates;
    let slidesLength = slides.length - 1;
    if (index < 1) {
      index = slidesLength;
    } else {
      index--;
    }
    setIndex(index);
  };

  const goToNextSlide = function(e) {
    e.preventDefault();

    let index = activeIndex;
    let slides = fakeDates;
    let slidesLength = slides.length - 1;
    if (index === slidesLength) {
      index = 0;
    } else {
      index++;
    }
    setIndex(index);
  };



  return (
    <div> Go tour this home
      <br></br>
      <div className='slider'>
        <div className='slider-items'>
          <LeftArrow
            goToPrevSlide={(e) => goToPrevSlide(e)}
          />
          <div className='slider-text'>
            <Slide
              activeIndex={activeIndex}
            />
          </div>
          <RightArrow
            goToNextSlide={(e) => goToNextSlide(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default DateCarousel;

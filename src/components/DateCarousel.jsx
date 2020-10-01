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
  const [tourDate, setDate] = useState(3);

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

  const SlideContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: space-between;
  `;

  return (
    <div> Go tour this home
      <br></br>
      <span className='slider'>
        <SlideContainer>
          <LeftArrow
            goToPrevSlide={(e) => goToPrevSlide(e)}
          />
          <div className='inner-Container'>
            <Slide
              activeIndex={activeIndex}
              tourDate={tourDate}
              setDate={setDate}
            />
          </div>
          <RightArrow
            goToNextSlide={(e) => goToNextSlide(e)}
          />
        </SlideContainer>
      </span>
    </div>
  );
};

export default DateCarousel;

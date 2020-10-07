import React, {useState} from 'react';
import styled from 'styled-components';
import LeftArrow from './LeftArrow.jsx';
import RightArrow from './RightArrow.jsx';
import Slide from './Slide.jsx';

const DateCarousel = (props) => {

  const [fakeDates, setDates] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [activeIndex, setIndex] = useState(fakeDates[1]);
  const [tourDate, setDate] = useState(fakeDates[1]);

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
      <SlideContainer>
        <LeftArrow
          goToPrevSlide={(e) => goToPrevSlide(e)}
          activeIndex={activeIndex}
          fakeDates={fakeDates}
        />
        <span>
          <Slide
            activeIndex={activeIndex}
            tourDate={tourDate}
            setDate={setDate}
            fakeDates={fakeDates}
          />
        </span>
        <RightArrow
          goToNextSlide={(e) => goToNextSlide(e)}
          activeIndex={activeIndex}
          fakeDates={fakeDates}
        />
      </SlideContainer>
    </div>
  );
};

export default DateCarousel;

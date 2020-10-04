import React, {useState} from 'react';
import styled from 'styled-components';
import LeftArrowTime from './LeftArrowTime.jsx';
import RightArrowTime from './RightArrowTime.jsx';
import TimeBooker from './TimeBooker.jsx';

const TimeCarousel = (props) => {

  const goToPrevTime = function(e) {
    e.preventDefault();
    let index = props.activeTimeIndex;
    let slides = props.times;
    let slidesLength = slides.length - 1;
    if (index < 1) {
      index = slidesLength;
    } else {
      index--;
    }
    props.setTimeIndex(index);
  };

  const goToNextTime = function(e) {
    e.preventDefault();
    let index = props.activeTimeIndex;
    let slides = props.times;
    let slidesLength = slides.length - 1;
    if (index === slidesLength) {
      index = 0;
    } else {
      index++;
    }
    props.setTimeIndex(index);
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
        <LeftArrowTime
          goToPrevSlide={(e) => goToPrevTime(e)}
          activeIndex={props.activeTimeIndex}
          openings={props.times}
        />
        <div className='inner-Container'>
          <TimeBooker
            activeIndex={props.activeTimeIndex}
            timeWindow={props.timeWindow}
            settimeWindow={props.settimeWindow}
            openings={props.times}
          />
        </div>
        <RightArrowTime
          goToNextSlide={(e) => goToNextTime(e)}
          activeIndex={props.activeTimeIndex}
          openings={props.times}
        />
      </SlideContainer>
    </div>
  );
};

export default TimeCarousel;

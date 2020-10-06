import React, {useState} from 'react';
import styled from 'styled-components';
import LeftArrow from './LeftArrow.jsx';
import RightArrow from './RightArrow.jsx';
import Slide from './Slide.jsx';

const DateCarousel = (props) => {

  const goToPrevSlide = function(e) {
    e.preventDefault();
    let index = props.activeIndex;
    let slides = props.dates;
    let slidesLength = slides.length - 1;
    if (index < 1) {
      index = slidesLength;
    } else {
      index--;
    }
    props.setStateProp('activeIndex', index);
  };

  const goToNextSlide = function(e) {
    e.preventDefault();
    let index = props.activeIndex;
    let slides = props.dates;
    let slidesLength = slides.length - 1;
    if (index === slidesLength) {
      index = 0;
    } else {
      index++;
    }
    props.setStateProp('activeIndex', index);
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
          activeIndex={props.activeIndex}
          openings={props.dates}
          modal={props.modal}
        />
        <div className='inner-Container'>
          <Slide
            activeIndex={props.activeIndex}
            tourDate={props.tourDate}
            setStateProp={props.setStateProp}
            openings={props.dates}
            modal={props.modal}
          />
        </div>
        <RightArrow
          goToNextSlide={(e) => goToNextSlide(e)}
          activeIndex={props.activeIndex}
          openings={props.dates}
          modal={props.modal}
        />
      </SlideContainer>
    </div>
  );
};

export default DateCarousel;

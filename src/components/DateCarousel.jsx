import React, {useState} from 'react';
import styled from 'styled-components';
import LeftArrow from './LeftArrow.jsx';
import RightArrow from './RightArrow.jsx';
import Slide from './Slide.jsx';
import LeftArrowBooker from './modalWindow/LeftArrowBooker.jsx';
import RightArrowBooker from './modalWindow/RightArrowBooker.jsx';
import SlideBooker from './modalWindow/SlideBooker.jsx';

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
    props.setIndex(index);
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
    props.setIndex(index);
  };

  const SlideContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: space-between;
  `;

  if (props.modal === false) {
    return (
      <div> Go tour this home
        <br></br>
        <SlideContainer>
          <LeftArrow
            goToPrevSlide={(e) => goToPrevSlide(e)}
            activeIndex={props.activeIndex}
            openings={props.dates}
          />
          <div className='inner-Container'>
            <Slide
              activeIndex={props.activeIndex}
              tourDate={props.tourDate}
              setDate={props.setDate}
              openings={props.dates}
            />
          </div>
          <RightArrow
            goToNextSlide={(e) => goToNextSlide(e)}
            activeIndex={props.activeIndex}
            openings={props.dates}
          />
        </SlideContainer>
      </div>
    );
  } else {
    return (
      <div> Go tour this home
        <br></br>
        <SlideContainer>
          <LeftArrowBooker
            goToPrevSlide={(e) => goToPrevSlide(e)}
            activeIndex={props.activeIndex}
            openings={props.dates}
          />
          <div className='inner-Container'>
            <SlideBooker
              activeIndex={props.activeIndex}
              tourDate={props.tourDate}
              setDate={props.setDate}
              openings={props.dates}
            />
          </div>
          <RightArrowBooker
            goToNextSlide={(e) => goToNextSlide(e)}
            activeIndex={props.activeIndex}
            openings={props.dates}
          />
        </SlideContainer>
      </div>
    );
  }
};

export default DateCarousel;

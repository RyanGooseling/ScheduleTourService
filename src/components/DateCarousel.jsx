import React, {useState} from 'react';
import styled from 'styled-components';
import LeftArrow from './LeftArrow.jsx';
import RightArrow from './RightArrow.jsx';
import Slide from './Slide.jsx';
import LeftArrowBooker from './modalWindow/LeftArrowBooker.jsx';
import RightArrowBooker from './modalWindow/RightArrowBooker.jsx';
import SlideBooker from './modalWindow/SlideBooker.jsx';

const DateCarousel = (props) => {

  const [dates, setDates] = useState(['2020-10-03', '2020-10-04', '2020-10-05', '2020-10-06', '2020-10-07', '2020-10-08', '2020-10-09', '2020-10-10', '2020-10-11', '2020-10-12', '2020-10-13', '2020-10-14', '2020-10-15', '2020-10-16', '2020-10-17', '2020-10-18', '2020-10-19', '2020-10-20', '2020-10-21', '2020-10-22', '2020-10-23', '2020-10-24', '2020-10-25', '2020-10-26', '2020-10-27', '2020-10-28', '2020-10-29', '2020-10-30', '2020-10-31', '2020-11-01', '2020-11-02']);
  const [activeIndex, setIndex] = useState(1);
  const [tourDate, setDate] = useState(dates[1]);

  const goToPrevSlide = function(e) {
    e.preventDefault();
    let index = activeIndex;
    let slides = dates;
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
    let slides = dates;
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

  if (props.modal === false) {
    return (
      <div> Go tour this home
        <br></br>
        <SlideContainer>
          <LeftArrow
            goToPrevSlide={(e) => goToPrevSlide(e)}
            activeIndex={activeIndex}
            openings={dates}
          />
          <div className='inner-Container'>
            <Slide
              activeIndex={activeIndex}
              tourDate={tourDate}
              setDate={setDate}
              openings={dates}
            />
          </div>
          <RightArrow
            goToNextSlide={(e) => goToNextSlide(e)}
            activeIndex={activeIndex}
            openings={dates}
          />
        </SlideContainer>
      </div>
    );
  } else {
    console.log('active index: ', activeIndex);
    return (
      <div> Go tour this home
        <br></br>
        <SlideContainer>
          <LeftArrowBooker
            goToPrevSlide={(e) => goToPrevSlide(e)}
            activeIndex={activeIndex}
            openings={dates}
          />
          <div className='inner-Container'>
            <SlideBooker
              activeIndex={activeIndex}
              tourDate={tourDate}
              setDate={setDate}
              openings={dates}
            />
          </div>
          <RightArrowBooker
            goToNextSlide={(e) => goToNextSlide(e)}
            activeIndex={activeIndex}
            openings={dates}
          />
        </SlideContainer>
      </div>
    );
  }
};

export default DateCarousel;

import React, {useState} from 'react';
import styled from 'styled-components';
import LeftArrowTime from './LeftArrowTime.jsx';
import RightArrowTime from './RightArrowTime.jsx';
import TimeBooker from './TimeBooker.jsx';

const TimeCarousel = (props) => {

  const [times, setTimes] = useState(['09:00 - 09:30', '09:30 - 10:00', '10:00 - 10:30', '10:30 - 11:00', '11:00 - 11:30', '12:30 - 13:00', '13:00 - 13:30', '13:30 - 14:00', '14:00 - 14:30', '14:30 - 15:00', '15:00 - 15:30', '15:30 - 16:00', '16:00 - 16:30', '16:30 - 17:00', '17:00 - 17:30', '17:30 - 18:00']);

  const [activeTimeIndex, setTimeIndex] = useState(1);

  const [timeWindow, setTimeWindow] = useState(times[2]);

  const goToPrevTime = function(e) {
    e.preventDefault();
    let index = activeTimeIndex;
    let slides = times;
    let slidesLength = slides.length - 1;
    if (index < 1) {
      index = slidesLength;
    } else {
      index--;
    }
    setTimeIndex(index);
  };

  const goToNextTime = function(e) {
    e.preventDefault();
    let index = activeTimeIndex;
    let slides = times;
    let slidesLength = slides.length - 1;
    if (index === slidesLength) {
      index = 0;
    } else {
      index++;
    }
    setTimeIndex(index);
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
          activeIndex={activeTimeIndex}
          openings={times}
        />
        <div className='inner-Container'>
          <TimeBooker
            activeIndex={activeTimeIndex}
            timeWindow={timeWindow}
            setTimeWindow={setTimeWindow}
            openings={times}
          />
        </div>
        <RightArrowTime
          goToNextSlide={(e) => goToNextTime(e)}
          activeIndex={activeTimeIndex}
          openings={times}
        />
      </SlideContainer>
    </div>
  );
};

export default TimeCarousel;

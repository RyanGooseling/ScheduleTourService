import React, {useState} from 'react';
import styled from 'styled-components';

const TimeBooker = (props) => {

  const renderView = function(input) {
    let currentDate = [props.tourDate + 'T00:00:00.000Z'];

    let currentIndex = props.openings.indexOf(input);
    let newClassName;
    if (currentIndex <= props.activeIndex + 2 && currentIndex >= props.activeIndex - 2) {
      if (props.tourSched[currentDate].includes(input)) {
        newClassName = 'carouselButtons-Time disabled';
      } else if (input === props.timeWindow) {
        newClassName = 'carouselButtons-Time selected';
      } else {
        newClassName = 'carouselButtons-Time unselected';
      }
    } else {
      if (input === props.timeWindow) {
        newClassName = 'inactive selected';
      } else {
        newClassName = 'inactive unselected';
      }
    }
    return newClassName;
  };

  const Time = styled.div`
    font-size: 16px;
    text-align: top;
    justify-content: space-around;
    align-items: center;
    margin: 0;
  `;

  return (
    <section>
      {props.openings.map((time) => {
        return (
          <div
            className={renderView(time)}
            onClick={() => props.settimeWindow(time)}
          >
            <Time>{time.slice(0, 5)}</Time>
          </div>
        );
      })}
    </section>
  );
};

export default TimeBooker;

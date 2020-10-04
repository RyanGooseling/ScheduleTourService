import React, {useState} from 'react';
import styled from 'styled-components';

const TimeBooker = (props) => {

  const renderView = function(input) {
    let currentIndex = props.openings.indexOf(input);
    let newClassName;
    if (currentIndex <= props.activeIndex + 2 && currentIndex >= props.activeIndex - 2) {
      if (input === props.timeWindow) {
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

  return (
    <section>
      {props.openings.map((time) => {
        return (
          <div
            className={renderView(time)}
            onClick={() => props.settimeWindow(time)}
          >
            <h1>{time}</h1>
          </div>
        );
      })}
    </section>
  );
};

export default TimeBooker;

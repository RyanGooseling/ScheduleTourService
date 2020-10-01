import React, {useState} from 'react';
import styled from 'styled-components';

const Slide = (props) => {

  const renderView = function(input) {
    let newClassName;
    if (input <= props.activeIndex + 1 && input >= props.activeIndex - 1) {
      if (input === props.tourDate) {
        newClassName = 'carouselButton selected';
      } else {
        newClassName = 'carouselButton unselected';
      }
    } else {
      if (input === props.tourDate) {
        newClassName = 'inactive selected';
      } else {
        newClassName = 'inactive unselected';
      }
    }
    return newClassName;
  };

  return (
    <section>
      {props.fakeDates.map((date) => {
        return (
          <div
            className={renderView(date)}
            onClick={() => props.setDate(date)}
          >
            <h1>{date}</h1>
          </div>
        );
      })}
    </section>
  );
};

export default Slide;

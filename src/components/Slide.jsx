import React, {useState} from 'react';
import styled from 'styled-components';

const Slide = (props) => {

  // override dates with indices for the time deings
  const fakeDates = [1, 2, 3, 4, 5];

  // all buttons should be defined in every other manner (spacing, etc) and this should only ADD whether it renders or not
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

    console.log(newClassName);
    console.log(props.tourDate);
    return newClassName;
  };

  return (
    <section>
      {fakeDates.map((date) => {
        return (
          <div
            className={renderView(date)}
            onClick={() => props.setDate(date)}
          >
            {/* onClick, set this class to the "selected" version ie just override the border */}
            <h1>{date}</h1>
          </div>
        );
      })}
    </section>
  );
};

export default Slide;

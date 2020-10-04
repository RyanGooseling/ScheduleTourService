import React, {useState} from 'react';
import styled from 'styled-components';

const SlideBooker = (props) => {

  console.log(props.activeIndex);
  const renderView = function(input) {
    let currentIndex = props.openings.indexOf(input);
    let newClassName;
    if (currentIndex <= props.activeIndex + 2 && currentIndex >= props.activeIndex - 2) {
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
      {props.openings.map((date) => {
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

export default SlideBooker;

import React, {useState} from 'react';
import styled from 'styled-components';

const Slide = (props) => {

  const renderView = function(input) {
    let currentIndex = props.openings.indexOf(input);
    let newClassName;
    let adjacentSlides;
    if (props.modal === false) {
      adjacentSlides = 1;
    } else {
      adjacentSlides = 2;
    }
    if (currentIndex <= props.activeIndex + adjacentSlides && currentIndex >= props.activeIndex - adjacentSlides) {
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

  const getMonth = function(input) {
    let month = input.slice(5, 7);
    let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    return months[month - 1];
  };

  const DayTile = styled.div`
    vertical-align: center;
    margin: 12px;
    font-size: 24px
  `;
  const MonthTile = styled.div`
    vertical-align: baseline
  `;

  return (
    <section>
      {props.openings.map((date) => {
        return (
          <div
            className={renderView(date)}
            onClick={() => props.setStateProp('tourDate', date)}
          >
            <DayTile>{date.slice(-2)}</DayTile>
            <MonthTile>{getMonth(date)}</MonthTile>
          </div>
        );
      })}
    </section>
  );
};

export default Slide;

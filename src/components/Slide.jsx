import React, {useState} from 'react';
import styled from 'styled-components';

const Slide = (props) => {

  const CarouselButton = styled.div`
    display: inline-block;
    text-align: center;
    justify-content: center;
    width: 86.33px;
    height: 86.33px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-right: 0.25rem;
    margin-left: 0.25rem;
    box-sizing: border-box;
    border-radius: 2px 2px 2px 2px;
    cursor: pointer;
  `;

  const CarouselButtonSelected = styled(CarouselButton)`
  border: 2px solid;
  box-shadow: 0 3px 4px 0 #ccc;
  `;
  const CarouselButtonUnselected = styled(CarouselButton)`
  border: 1px solid #ccc;
  border-radius: 2px 2px 2px 2px;
  &:hover {
    border: 1px solid darkgray;
  }
  `;

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
      newClassName = 'inactive';
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
    font-size: 24px;
  `;
  const MonthTile = styled.div`
    vertical-align: baseline;
  `;

  const Inactive = styled.div`
    display: none;
  `;

  return (
    <section>
      {props.openings.map((date) => {
        if (renderView(date) === 'carouselButton selected') {
          return (
            <CarouselButtonSelected
              onClick={() => props.setStateProp('tourDate', date)}
            >
              <DayTile>{date.slice(-2)}</DayTile>
              <MonthTile>{getMonth(date)}</MonthTile>
            </CarouselButtonSelected>
          );
        } else if (renderView(date) === 'carouselButton unselected') {
          return (
            <CarouselButtonUnselected
              onClick={() => props.setStateProp('tourDate', date)}
            >
              <DayTile>{date.slice(-2)}</DayTile>
              <MonthTile>{getMonth(date)}</MonthTile>
            </CarouselButtonUnselected>
          );
        } else {
          return (
            <Inactive
              onClick={() => props.setStateProp('tourDate', date)}
            >
              <DayTile>{date.slice(-2)}</DayTile>
              <MonthTile>{getMonth(date)}</MonthTile>
            </Inactive>
          );
        }
      })}
    </section>
  );
};

export default Slide;

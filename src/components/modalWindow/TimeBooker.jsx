import React, {useState} from 'react';
import styled from 'styled-components';

const TimeBooker = (props) => {

  const CarouselButtonTime = styled.div`
    display: inline-block;
    font-size: xx-small;
    text-align: center;
    justify-content: center;
    width: 108px;
    height: 60px;
    padding: 21px 9px 21px 9px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-right: 0.25rem;
    margin-left: 0.25rem;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 2px 2px 2px 2px;
    cursor: pointer;
  `;

  const CarouselButtonTimeDisabled = styled(CarouselButtonTime)`
    opacity: 0.3;
    cursor: unset;
  `;

  const CarouselButtonTimeSelected = styled(CarouselButtonTime)`
    border: 2px solid;
    box-shadow: 0 3px 4px 0 #ccc;
  `;
  const CarouselButtonTimeUnselected = styled(CarouselButtonTime)`
    border: 1px solid #ccc;
    border-radius: 2px 2px 2px 2px;
    &:hover {
      border: 1px solid darkgray;
    }
  `;

  const renderView = function(input) {
    let currentDate = [props.tourDate + 'T00:00:00.000Z'];
    let currentIndex = props.openings.indexOf(input);
    let newClassName;
    console.log(props.tourSched);
    console.log(props.tourSched[currentDate]);
    if (currentIndex <= props.activeIndex + 2 && currentIndex >= props.activeIndex - 2) {
      if (props.tourSched[currentDate].includes(input)) {
        newClassName = 'carouselButtons-Time disabled';
      } else if (input === props.timeWindow) {
        newClassName = 'carouselButtons-Time selected';
      } else {
        newClassName = 'carouselButtons-Time unselected';
      }
    } else {
      newClassName = 'inactive';
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

  const Inactive = styled.div`
    display: none;
  `;

  return (
    <section>
      {props.openings.map((time) => {
        if (renderView(time) === 'carouselButtons-Time unselected') {
          return (
            <CarouselButtonTimeUnselected
              onClick={() => props.setStateProp('timeWindow', time)}
            >
              <Time>{time.slice(0, 5)}</Time>
            </CarouselButtonTimeUnselected>
          );
        } else if ((renderView(time) === 'carouselButtons-Time selected')) {
          return (
            <CarouselButtonTimeSelected
              onClick={() => props.setStateProp('timeWindow', time)}
            >
              <Time>{time.slice(0, 5)}</Time>
            </CarouselButtonTimeSelected>
          );
        } else if ((renderView(time) === 'carouselButtons-Time disabled')) {
          return (
            <CarouselButtonTimeDisabled
              onClick={() => props.setStateProp('timeWindow', time)}
            >
              <Time>{time.slice(0, 5)}</Time>
            </CarouselButtonTimeDisabled>
          );
        } else {
          return (
            <Inactive
              onClick={() => props.setStateProp('timeWindow', time)}
            >
              <Time>{time.slice(0, 5)}</Time>
            </Inactive>
          );
        }
      })}
    </section>
  );
};

export default TimeBooker;

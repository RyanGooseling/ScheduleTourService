import React, {useState} from 'react';
import TourType from '../TourType.jsx';
import DateCarousel from '../DateCarousel.jsx';
import TimeCarousel from './timeCarousel/TimeCarousel.jsx';
import styled from 'styled-components';

const Booker = (props) => {

  const Modal = styled.div`
    width: 100% px;
    height: 100% px;
    background: white;
    border: 1px solid #ccc;
    transition: 1.1s ease-out;
    box-shadow: -2rem 2rem 2rem rgba(black, 0.2);
    filter: blur(0);
    transform: scale(1);
    opacity: 1;
    visibility: visible;
  `;

  const Content = styled.div`
    padding: 1rem;
  `;

  const SubmitReturn = styled.button`
    width: 100%;
    color: white;
    background-color: blue;
    position: relative;
    box-sizing: border-box;
    display: inline-block;
    height: 40px;
    padding: 12px 1.5rem;
    border-radius: 2px 2px 2px 2px;

    &:hover {
      background-color: cornflowerblue;
    }
  `;

  if (props.modal) {
    return (
      <Modal id="modal">
        <h2>Pick a date</h2>
        <DateCarousel
          modal={props.modal}
          tourDate={props.tourDate}
          setDate={props.setDate}
          dates={props.dates}
          activeIndex={props.activeIndex}
          setIndex={props.setIndex}
        />
        <h2>How would you like to tour?</h2>
        <TourType
          settourType={props.settourType}
          tourType={props.tourType}
        />
        <h2>Pick a time</h2>
        <TimeCarousel
          times={props.times}
          timeWindow={props.timeWindow}
          settimeWindow={props.settimeWindow}
          activeTimeIndex={props.activeTimeIndex}
          setTimeIndex={props.setTimeIndex}
          tourSched={props.tourSched}
          tourDate={props.tourDate}
        />
        <div class="actions">
          <SubmitReturn
            onClick={() => props.handleTour()}
          >
            Book and Return
          </SubmitReturn>
        </div>
      </Modal>
    );
  } else {
    return null;
  }
};

export default Booker;

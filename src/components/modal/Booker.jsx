import React, {useState} from 'react';
import TourType from '../TourType.jsx';
import ExtendedDateCarousel from './ExtendedDateCarousel.jsx';
import TimeCarousel from './TimeCarousel.jsx';
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

  if (props.modal) {
    return (
      <Modal id="modal">
        <h2>Pick a date</h2>
        <ExtendedDateCarousel />
        <h2>How would you like to tour?</h2>
        <TourType />
        <h2>Pick a time</h2>
        <TimeCarousel />
        <div class="actions">
          <button class="toggle-button"
            onClick={() => props.handleTour()}
          >
            Book and Return
          </button>
        </div>
      </Modal>
    );
  } else {
    return null;
  }
};

export default Booker;

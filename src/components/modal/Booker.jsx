import React, {useState} from 'react';
import TourType from '../TourType.jsx';
import TimeCarousel from './TimeCarousel.jsx';
import styled from 'styled-components';

const Booker = (props) => {

  const Modal = styled.div`
    width: 100%;
    height:100%;
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

  if (!props.modal) {
    return null;
  } else {
    return (
      <Modal id="modal">
        <h2>Pick a date</h2>
        <Content>{'Date Carousel 6'}</Content>
        <h2>How would you like to tour?</h2>
        <TourType />
        <h2>Pick a time</h2>
        <Content>{'Time Carousel 5'}</Content>
        <div class="actions">
          <button class="toggle-button" onClick={() => props.onClose()}>
            Book and Return
          </button>
        </div>
      </Modal>
    );
  }
};

export default Booker;

import React, {useState} from 'react';
import styled from 'styled-components';

const RightArrow = (props) => {


  const renderArrow = function() {
    if (props.modal === false) {
      if (props.activeIndex < props.openings.length - 2) {
        return '>';
      } else {
        return '';
      }
    } else {
      if (props.activeIndex < props.openings.length - 3) {
        return '>';
      } else {
        return '';
      }
    }
  };

  return (
    <div className= 'forwardArrow' onClick={props.goToNextSlide}>
      <i>{renderArrow()}</i>
    </div>
  );
};

export default RightArrow;

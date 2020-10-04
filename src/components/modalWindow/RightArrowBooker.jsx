import React, {useState} from 'react';
import styled from 'styled-components';

const RightArrowBooker = (props) => {

  const renderArrow = function() {
    if (props.activeIndex < props.openings.length - 3) {
      return '>';
    } else {
      return '';
    }
  };

  return (
    <div className= 'forwardArrow' onClick={props.goToNextSlide}>
      <i>{renderArrow()}</i>
    </div>
  );
};

export default RightArrowBooker;

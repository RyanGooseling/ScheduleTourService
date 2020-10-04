import React, {useState} from 'react';
import styled from 'styled-components';

const RightArrowBooker = (props) => {
  console.log(props.activeIndex);
  console.log(props.openings);
  console.log((props.activeIndex < props.openings.length - 3));

  const renderArrow = function() {
    if (props.activeIndex < props.openings.length - 3) {
      console.log('should be here');
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

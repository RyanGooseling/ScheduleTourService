import React, {useState} from 'react';
import styled from 'styled-components';

const RightArrow = (props) => {

  const renderArrow = function() {
    console.log(props.activeIndex);
    console.log(props.fakeDates);
    console.log(props.fakeDates[props.fakeDates.length - 1]);
    if (props.activeIndex < props.fakeDates[props.fakeDates.length - 1] - 1) {
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

export default RightArrow;

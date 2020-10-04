import React, {useState} from 'react';
import styled from 'styled-components';

const RightArrow = (props) => {


  const renderArrow = function() {
    if (props.activeIndex < props.openings.length - 2) {
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

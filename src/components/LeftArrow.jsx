import React, {useState} from 'react';
import styled from 'styled-components';

const LeftArrow = (props) => {

  const renderArrow = function() {
    if (props.activeIndex > props.fakeDates[0] + 1) {
      return '<';
    } else {
      return '';
    }
  };

  return (
    <div className= 'backArrow' onClick={props.goToPrevSlide}>
      <i>{renderArrow()}</i>
    </div>
  );
};

export default LeftArrow;

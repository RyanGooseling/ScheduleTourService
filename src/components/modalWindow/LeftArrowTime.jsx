import React, {useState} from 'react';
import styled from 'styled-components';

const LeftArrowTime = (props) => {

  const renderArrow = function() {
    if (props.activeIndex > 2) {
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

export default LeftArrowTime;

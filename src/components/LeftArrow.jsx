import React, {useState} from 'react';
import styled from 'styled-components';

const LeftArrow = (props) => {

  const renderArrow = function() {
    console.log(props.activeIndex);
    if (props.activeIndex > 1) {
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

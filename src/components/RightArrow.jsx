import React, {useState} from 'react';
import styled from 'styled-components';

const RightArrow = (props) => {


  return (
    <div className= 'forwardArrow' onClick={props.goToNextSlide}>
      <i>{'>'}</i>
    </div>
  );
};

export default RightArrow;

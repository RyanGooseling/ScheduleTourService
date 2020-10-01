import React, {useState} from 'react';
import styled from 'styled-components';

const LeftArrow = (props) => {


  return (
    <div className= 'backArrow' onClick={props.goToPrevSlide}>
      <i>{'<'}</i>
    </div>
  );
};

export default LeftArrow;

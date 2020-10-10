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

  const ForwardArrow = styled.div`
    cursor: pointer;
  `;
  const ForwardArrowDisabled = styled(ForwardArrow)`
    opacity: 0.3
  `;

  return (
    <ForwardArrow onClick={props.goToNextSlide}>
      <i>{renderArrow()}</i>
    </ForwardArrow>
  );
};

export default RightArrow;

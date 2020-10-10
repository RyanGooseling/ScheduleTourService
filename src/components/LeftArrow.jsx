import React, {useState} from 'react';
import styled from 'styled-components';

const LeftArrow = (props) => {

  const renderArrow = function() {
    if (props.modal === false) {
      if (props.activeIndex > 1) {
        return '<';
      } else {
        return '';
      }
    } else {
      if (props.activeIndex > 2) {
        return '<';
      } else {
        return '';
      }
    }
  };

  const BackArrow = styled.div`
  cursor: pointer;
  `;
  const BackArrowDisabled = styled(BackArrow)`
    opacity: 0.3;
  `;

  return (
    <BackArrow onClick={props.goToPrevSlide}>
      <i>{renderArrow()}</i>
    </BackArrow>
  );
};

export default LeftArrow;

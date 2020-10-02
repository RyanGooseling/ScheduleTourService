import React, {useState} from 'react';
import styled from 'styled-components';

const TourType = (props) => {

  const Input = styled.div`
    display: flex;
    flex-direction: row;
    cursor: pointer;
    height: 48px;
    `;

  const TourPerson = styled.div`
    display: flex;
    width: 144px;
    justify-content: center;
    align-items: center;
    padding: 0;
    border: 1px solid;
    text-align: center;
    box-sizing: border-box;
    border-radius: 2px 2px 2px 2px;
    `;
  const TourPersonSelected = styled(TourPerson)`
    border: 2px solid;
    `;
  const TourVideo = styled(TourPerson)`
    width: 168px;
    `;
  const TourVideoSelected = styled(TourVideo)`
    border: 2px solid;
    `;

  if (props.TourType === 'In-person') {
    return (
      <span>
        <Input>
          <TourPersonSelected onClick={() => props.setTourType('In-person')}> Tour in Person </TourPersonSelected>
          <TourVideo onClick={() => props.setTourType('Video')}> Tour via Video</TourVideo>
        </Input>
      </span>
    );
  } else {
    return (
      <span>
        <Input>
          <TourPerson onClick={() => props.setTourType('In-person')}> Tour in Person </TourPerson>
          <TourVideoSelected onClick={() => props.setTourType('Video')}> Tour via Video</TourVideoSelected>
        </Input>
      </span>
    );
  }
};


export default TourType;
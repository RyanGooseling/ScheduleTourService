import React, {useState} from 'react';
import styled from 'styled-components';

const TourType = (props) => {


  const Input = styled.div`
    display: flex;
    flex-direction: row;
    height: 48px;
    `;

  const TourPerson = styled.div`
    display: flex;
    cursor: pointer;
    width: 144px;
    justify-content: center;
    align-items: center;
    padding: 0;
    border: 1px solid;
    text-align: center;
    box-sizing: border-box;
    border-radius: 2px 2px 2px 2px;
    border: 1px solid #ccc;

    &:hover {
      border: 1px solid darkgray;
    }
    `;
  const TourPersonSelected = styled(TourPerson)`
    border: 2px solid;
    &:hover {
      border: 2px solid;
    }
    `;
  const TourVideo = styled(TourPerson)`
    width: 168px;
    `;
  const TourVideoSelected = styled(TourVideo)`
    border: 2px solid;
    &:hover {
      border: 2px solid;
    }
    `;

  if (props.tourType === 'In-person') {
    return (
      <span>
        <Input>
          <TourPersonSelected onClick={() => props.settourType('In-person')}> Tour in Person </TourPersonSelected>
          <TourVideo onClick={() => props.settourType('Video')}> Tour via Video Chat</TourVideo>
        </Input>
      </span>
    );
  } else {
    return (
      <span>
        <Input>
          <TourPerson onClick={() => props.settourType('In-person')}> Tour in Person </TourPerson>
          <TourVideoSelected onClick={() => props.settourType('Video')}> Tour via Video Chat</TourVideoSelected>
        </Input>
      </span>
    );
  }
};


export default TourType;
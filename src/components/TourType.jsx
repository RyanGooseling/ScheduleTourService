import React, {useState} from 'react';
import styled from 'styled-components';

const TourType = (props) => {

  const [tourType, setType] = useState('In-person');

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

  if (tourType === 'In-person') {
    return (
      <span>
        <div class='input'>
          <TourPersonSelected onClick={() => setType('In-person')}> Tour in Person </TourPersonSelected>
          <TourVideo onClick={() => setType('Video')}> Tour via Video</TourVideo>
        </div>
      </span>
    );
  } else {
    return (
      <span>
        <div class='input'>
          <TourPerson onClick={() => setType('In-person')}> Tour in Person </TourPerson>
          <TourVideoSelected onClick={() => setType('Video')}> Tour via Video</TourVideoSelected>
        </div>
      </span>
    );
  }
};


export default TourType;
import React from 'react';


const TourType = (props) => {
  return (
    <span class='tourCountainer'>
      <div class='input'>
        <div class='tour-person' onClick={() => (props.handleClick(), console.log('In-Person Tour'))}> Tour in Person </div>
        <div class='tour-video' onClick={() => (props.handleClick(), console.log('Video Tour'))}> Tour via Video</div>
      </div>
    </span>
  );
};


export default TourType;
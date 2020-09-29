import React from 'react';


const TourType = (props) => {
  return (
    <span class='tourCountainer'>
      <div class='input'>
        <div class='tour-person' onClick={() => console.log('Clicked for in-person!')}> Tour in Person </div>
        <div class='tour-video' onClick={() => console.log('Clicked for video!')}> Tour via Video</div>
      </div>
    </span>
  );
};


export default TourType;
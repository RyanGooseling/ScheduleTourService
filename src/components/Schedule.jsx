import React from 'react';


const Schedule = (props) => {


  return (
    <div>
      <button class='button' onClick={() => props.showModal()}> Schedule with this button </button>
      <br></br>
      <span class='subscript'> It's free, with no obligation - cancel anytime</span>
    </div>
  );
};

export default Schedule;

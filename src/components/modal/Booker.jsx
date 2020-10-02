import React from 'react';


const Booker = (props) => {


  if (props.modal) {
    return (
      <span>
        <br></br>
        <div>BOOKING MODAL WINDOW TO GO HERE!</div>
      </span>
    );
  } else {
    return null;
  }
};

export default Booker;
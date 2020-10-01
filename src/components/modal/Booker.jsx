import React from 'react';


const Booker = (props) => {

  console.log('Booker props: ', props.modal);

  if (props.modal) {
    return null;
  } else {
    return (
      <span>
        <div>Let's Book</div>
        <button onClick={() => this.onClose()}>
          Close
        </button>
      </span>
    );
  }
};


export default Booker;

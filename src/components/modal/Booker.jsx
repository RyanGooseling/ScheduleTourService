import React from 'react';


const Booker = (props) => {

  const onClose = function() {
    props.setState({
      modal: false
    });
  };

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

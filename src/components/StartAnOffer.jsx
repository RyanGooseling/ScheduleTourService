import React from 'react';


const StartAnOffer = (props) => {
  return (
    <div>
      <span> --- OR --- </span>
      <br></br>
      <button class='button' onClick={() => console.log('Offer button submitted')}> Start an offer </button>
      <br></br>
      <span class='subscript'> Buy with a Redfin Agent and get cash back</span>
    </div>
  );
};

export default StartAnOffer;

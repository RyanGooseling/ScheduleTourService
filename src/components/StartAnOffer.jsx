import React from 'react';
import styled from 'styled-components';


const StartAnOffer = (props) => {

  const Subscript = styled.span`
    text-align: left;
    font-size: 12px;
  `;

  const OrSpan = styled.span`
    width: 100%;
    position: relative;
    display: inline-block;
    text-align: center;
  `;

  const Submit = styled.button`
    width: 100%;
    position: relative;
    box-sizing: border-box;
    display: inline-block;
    height: 40px;
    padding: 12px 1.5rem;
    border-radius: 2px 2px 2px 2px;
    border: 1px solid #ccc;

    &:hover {
      background-color: darkgray;
    }
  `;


  return (
    <div>
      <OrSpan> --- OR --- </OrSpan>
      <br></br>
      <Submit onClick={() => console.log('Offer button submitted')}> Start an offer </Submit>
      <br></br>
      <Subscript> Buy with a Redfin Agent and get cash back</Subscript>
    </div>
  );
};

export default StartAnOffer;

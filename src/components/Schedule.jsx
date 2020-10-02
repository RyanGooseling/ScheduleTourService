import React from 'react';
import styled from 'styled-components';

const Schedule = (props) => {

<<<<<<< HEAD
=======
  const Subscript = styled.span`
    text-align: left;
    font-size: 12px;
    `;

  const SubmitSchedule = styled.button`
    width: 100%;
    color: white;
    background-color: blue;
    position: relative;
    box-sizing: border-box;
    display: inline-block;
    height: 40px;
    padding: 12px 1.5rem;
    border-radius: 2px 2px 2px 2px;

    &:hover {
      background-color: cornflowerblue;
    }
    `;

>>>>>>> master
  return (
    <div>
      <SubmitSchedule onClick={() => props.showModal()}> Schedule Tour </SubmitSchedule>
      <br></br>
      <Subscript> It's free, with no obligation - cancel anytime</Subscript>
    </div>
  );
};

export default Schedule;

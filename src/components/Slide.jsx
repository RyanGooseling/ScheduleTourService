import React, {useState} from 'react';
import styled from 'styled-components';

const Slide = (props) => {

  console.log('Dates: ', props.dates);
  // override dates with indices for the time deings
  const fakeDates = [1, 2, 3, 4, 5];

  const [tourDate, setDate] = useState('');

  return (
    <section>
      {fakeDates.map((date, index) => {
        return (
          <div className={
            index === props.activeIndex ? 'active' : 'inactive'}
          key={index}>
            <h1>Stuff{date}</h1>
            <p>MoreStuff{date}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Slide;

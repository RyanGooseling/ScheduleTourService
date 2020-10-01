import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import DateCarousel from './components/DateCarousel.jsx';
import Schedule from './components/Schedule.jsx';
import TourType from './components/TourType.jsx';
import StartAnOffer from './components/StartAnOffer.jsx';

class Scheduler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // place holders
      dates: [],
    };

  }

  componentDidMount() {
    console.log('sending get');
    axios({
      method: 'get',
      url: '/house/1'
    })
      .then((newData) => {
        console.log('New Data: ', newData.data);
        this.setState({
          dates: newData.data,
        });
      })
      .catch((err) => {
        console.log('Error', err);
      });
  }

  render() {
    return (
      <div>
        <div>
          <DateCarousel
            dates={this.state.dates}
          />
        </div>
        <div>
          <TourType/>
        </div>
        <div>
          <Schedule
            state={this.state}
            // I need to pass in the type of tour as well as the date of tour...
            // Those are both defined further down into the nested components
            // any point of react hooks for this
          />
        </div>
        <div>
          <StartAnOffer/>
        </div>
      </div>
    );
  }
}

export default Scheduler;

import React from 'react';
import ReactDOM from 'react-dom';
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
      dates: ['2020-10-01, 2020-10-02, 2020-10-03, 2020-10-04, 2020-10-05'],
    };

  }

  componentDidMount() {
    axios({
      method: 'get',
      url: '/house'
    })
      .then((newData) => {
        // this.setState({
        //   dates: newData,
        // });
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
          <Schedule/>
        </div>
        <div>
          <StartAnOffer/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Scheduler/>, document.getElementById('scheduler'));
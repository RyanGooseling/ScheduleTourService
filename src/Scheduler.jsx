import React from 'react';
import axios from 'axios';

import DateCarousel from './components/DateCarousel.jsx';
import Schedule from './components/Schedule.jsx';
import TourType from './components/TourType.jsx';
import StartAnOffer from './components/StartAnOffer.jsx';

class Scheduler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: '',
      tourType: 'In-person',
    };
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: '/house'
    })
      .then((newData) => {
        this.setState({
          dates: newData
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
          <DateCarousel/>
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

export default Scheduler;
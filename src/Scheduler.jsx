import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import DateCarousel from './components/DateCarousel.jsx';
import Schedule from './components/Schedule.jsx';
import TourType from './components/TourType.jsx';
import StartAnOffer from './components/StartAnOffer.jsx';
import Booker from './components/Modal/Booker.jsx';

class Scheduler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [],
      TourType: 'In-person',
      modal: false
    };

    this.setTourType = this.setTourType.bind(this);
    this.showModal = this.showModal.bind(this);
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

  setTourType(string) {
    this.setState({
      TourType: string
    });
    console.log(this.state);
  }

  showModal() {
    if (this.state.modal) {
      this.setState({
        modal: false
      });
    } else {
      this.setState({
        modal: true
      });
    }
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
          <TourType
            TourType={this.state.TourType}
            setTourType={(input) => this.setTourType(input)}
          />
        </div>
        <div>
          <Schedule
            showModal={this.showModal}
            modal={this.state.modal}
          />
        </div>
        <div>
          <StartAnOffer/>
        </div>
        <div>
          <Booker
            modal={this.state.modal}
          />
        </div>
      </div>
    );
  }
}

export default Scheduler;

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
      data: '',
      tourType: 'In-person',
      tourSched: {},
      modal: false
    };

    this.setTourType = this.setTourType.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: `/homes/${this.props.homeID}/schedule`
    })
      .then((newData) => {
        let rawData = newData.data;
        let fullSched = {};
        rawData.forEach(element => {
          let tourDate = element.schedule.date;
          if (fullSched[tourDate] === undefined) {
            fullSched[tourDate] = [element.schedule.timeWindow];
          } else {
            fullSched[tourDate].push(element.schedule.timeWindow);
          }
        });
        this.setState({
          data: rawData,
          tourSched: fullSched,
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

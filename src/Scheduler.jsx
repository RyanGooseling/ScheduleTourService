import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import DateCarousel from './components/DateCarousel.jsx';
import Schedule from './components/Schedule.jsx';
import TourType from './components/TourType.jsx';
import StartAnOffer from './components/StartAnOffer.jsx';
import Booker from './components/Modal/Booker.jsx';
import TimeCarousel from './components/Modal/TimeCarousel.jsx';
import ExtendedDateCarousel from './components/Modal/ExtendedDateCarousel.jsx';

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
    this.onClose = this.onClose.bind(this);
    this.handleTour = this.handleTour.bind(this);
  }

  componentDidMount() {
    console.log('sending get');
    axios({
      method: 'get',
      url: '/house/1'
    })
      .then((newData) => {
        let rawData = newData.data;
        console.log(rawData);
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
        console.log(this.state.tourSched);
      })
      .catch((err) => {
        console.log('Error', err);
      });
  }

  handleTour() {
    let newTour = {
      houseId: 1,
      schedule: {
        date: '',
        timeWindow: '',
        walkThrough: this.state.TourType,
        booking: true
      }
    };
    axios({
      method: 'post',
      url: '/house/1',
      data: newTour
    })
      .then((newData) => {
        console.log('Succesful submission returned');
        this.setState({
          dates: newData.data,
        });
      })
      .then(() => {
        this.setState({
          modal: false
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

  onClose() {
    this.setState({
      modal: false
    });
  }

  render() {
    if (!this.state.modal) {
      return (
        <div className="sm-container">
          <div>
            <DateCarousel/>
          </div>
          <div>
            <TourType/>
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
        </div>
      );
    } else {
      return (
        <div className="lrg-container">
          <Booker
            modal={this.state.modal}
            onClose={this.onClose}
            handleTour={this.handleTour}
          />
        </div>
      );
    }
  }
}

export default Scheduler;

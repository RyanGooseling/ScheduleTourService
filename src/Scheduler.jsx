import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import DateCarousel from './components/DateCarousel.jsx';
import Schedule from './components/Schedule.jsx';
import TourType from './components/TourType.jsx';
import StartAnOffer from './components/StartAnOffer.jsx';
import Booker from './components/modalWindow/Booker.jsx';
import TimeCarousel from './components/modalWindow/timeCarousel/TimeCarousel.jsx';

class Scheduler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      tourSched: {},
      modal: false,
      dates: ['2020-10-03', '2020-10-04', '2020-10-05', '2020-10-06', '2020-10-07', '2020-10-08', '2020-10-09', '2020-10-10', '2020-10-11', '2020-10-12', '2020-10-13', '2020-10-14', '2020-10-15', '2020-10-16', '2020-10-17', '2020-10-18', '2020-10-19', '2020-10-20', '2020-10-21', '2020-10-22', '2020-10-23', '2020-10-24', '2020-10-25', '2020-10-26', '2020-10-27', '2020-10-28', '2020-10-29', '2020-10-30', '2020-10-31', '2020-11-01', '2020-11-02'],
      tourDate: '2020-10-04',
      tourType: 'In-person',
      times: ['09:00 - 09:30', '09:30 - 10:00', '10:00 - 10:30', '10:30 - 11:00', '11:00 - 11:30', '12:30 - 13:00', '13:00 - 13:30', '13:30 - 14:00', '14:00 - 14:30', '14:30 - 15:00', '15:00 - 15:30', '15:30 - 16:00', '16:00 - 16:30', '16:30 - 17:00', '17:00 - 17:30', '17:30 - 18:00'],
      timeWindow: '',
      activeIndex: 1,
      activeTimeIndex: 2
    };

    this.showModal = this.showModal.bind(this);
    this.onClose = this.onClose.bind(this);
    this.handleTour = this.handleTour.bind(this);
    this.setDate = this.setDate.bind(this);
    this.settourType = this.settourType.bind(this);
    this.settimeWindow = this.settimeWindow.bind(this);
    this.setIndex = this.setIndex.bind(this);
    this.setTimeIndex = this.setTimeIndex.bind(this);
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
        console.log('On Mount Full Schedule: ', fullSched);
        this.setState({
          data: rawData,
          tourSched: fullSched,
        });
      })
      .catch((err) => {
        console.log('Error', err);
      });
  }

  handleTour() {
    let newTour = {
      houseId: 1,
      schedule: {
        date: this.state.tourDate,
        timeWindow: this.state.timeWindow,
        walkthrough: this.state.tourType,
        booking: true
      }
    };
    console.log(newTour);
    axios({
      method: 'post',
      url: '/house/1',
      data: newTour
    })
      .then((newData) => {
        console.log('Succesful submission returned');
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
      .then(() => {
        this.setState({
          modal: false
        });
      })
      .catch((err) => {
        console.log('Error', err);
      });
  }

  setDate(input) {
    this.setState({
      tourDate: input
    });
  }

  settourType(input) {
    this.setState({
      tourType: input
    });
  }

  settimeWindow(input) {
    this.setState({
      timeWindow: input
    });
  }

  setIndex(input) {
    this.setState({
      activeIndex: input
    });
  }

  setTimeIndex(input) {
    this.setState({
      activeTimeIndex: input
    });
  }

  showModal() {
    if (this.state.modal) {
      this.setState({
        modal: false
      });
    } else {
      this.setState({
        modal: true,
        activeIndex: 2,
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
            <DateCarousel
              modal={this.state.modal}
              dates={this.state.dates}
              setDate={this.setDate}
              tourDate={this.state.tourDate}
              activeIndex={this.state.activeIndex}
              setIndex={this.setIndex}
            />
          </div>
          <div>
            <TourType
              settourType={this.settourType}
              tourType={this.state.tourType}
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
        </div>
      );
    } else {
      return (
        <div className="lrg-container">
          <Booker
            modal={this.state.modal}
            onClose={this.onClose}
            handleTour={this.handleTour}
            dates={this.state.dates}
            setDate={this.setDate}
            tourDate={this.state.tourDate}
            settourType={this.settourType}
            tourType={this.state.tourType}
            times={this.state.times}
            timeWindow={this.state.timeWindow}
            settimeWindow={this.settimeWindow}
            activeIndex={this.state.activeIndex}
            setIndex={this.setIndex}
            activeTimeIndex={this.state.activeTimeIndex}
            setTimeIndex={this.setTimeIndex}
            tourSched={this.state.tourSched}
          />
        </div>
      );
    }
  }
}

export default Scheduler;

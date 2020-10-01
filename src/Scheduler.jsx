import React from 'react';
import axios from 'axios';

import DateCarousel from './components/DateCarousel.jsx';
import Schedule from './components/Schedule.jsx';
import TourType from './components/TourType.jsx';
import StartAnOffer from './components/StartAnOffer.jsx';
import Booker from './components/Modal/Booker.jsx';

class Scheduler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: '',
      tourType: 'In-person',
      modal: false
    };

    this.showModal = this.showModal.bind(this);
    this.onClose = this.onClose.bind(this);
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
    return (
      <div>
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
        <div>
          <Booker
            modal={this.state.modal}
            onClose={this.onClose}
          />
        </div>
      </div>
    );
  }
}

export default Scheduler;

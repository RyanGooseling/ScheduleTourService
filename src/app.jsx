import React from 'react';
import ReactDOM from 'react-dom';
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

    this.changeTourType = this.changeTourType.bind(this);
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: '/house'
    })
      .then((newData) => {
        this.setState({
          dates: newData,
          tourType: 'In-person'
        });
      })
      .catch((err) => {
        console.log('Error', err);
      });
  }

  changeTourType(selection) {
    this.setState({
      tourType: selection
    });
  }

  render() {
    return (
      <div>
        <div>
          <DateCarousel/>
        </div>
        <div>
          <TourType
            handleClick={(e) => this.changeTourType(e)}/>
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
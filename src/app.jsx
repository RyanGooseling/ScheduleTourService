import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import DateCarousel from './components/DateCarousel.jsx';

class App extends React.Component {
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
      url: '/'
    })
      .then((newData) => {
        this.setState({
          dates: newDates
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
          <Schedule/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
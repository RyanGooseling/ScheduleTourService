import React from 'react';
import ReactDOM from 'react-dom';
import Scheduler from './Scheduler.jsx';

const houseId = window.location.pathname.slice(7, -1);

ReactDOM.render(<Scheduler houseId={houseId}/>, document.getElementById('Scheduler'));
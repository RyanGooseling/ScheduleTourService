import React from 'react';
import ReactDOM from 'react-dom';
import Scheduler from './Scheduler.jsx';

const homeId = window.location.pathname.slice(7, -1);

ReactDOM.render(<Scheduler homeId={homeId}/>, document.getElementById('Scheduler'));
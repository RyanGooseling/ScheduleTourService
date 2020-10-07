"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _axios = _interopRequireDefault(require("axios"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _DateCarousel = _interopRequireDefault(require("./components/DateCarousel.jsx"));

var _Schedule = _interopRequireDefault(require("./components/Schedule.jsx"));

var _TourType = _interopRequireDefault(require("./components/TourType.jsx"));

var _StartAnOffer = _interopRequireDefault(require("./components/StartAnOffer.jsx"));

var _Booker = _interopRequireDefault(require("./components/modalWindow/Booker.jsx"));

var _TimeCarousel = _interopRequireDefault(require("./components/modalWindow/TimeCarousel.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Scheduler extends _react.default.Component {
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
    this.setStateProp = this.setStateProp.bind(this);
  }

  componentDidMount() {
    (0, _axios.default)({
      method: 'get',
      url: 'http://localhost:3004/house/1'
    }).then(newData => {
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
        tourSched: fullSched
      });
    }).catch(err => {
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
    (0, _axios.default)({
      method: 'post',
      url: 'http://localhost:3004/house/1',
      data: newTour
    }).then(newData => {
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
        tourSched: fullSched
      });
    }).then(() => {
      this.setState({
        modal: false
      });
    }).catch(err => {
      console.log('Error', err);
    });
  }

  setStateProp(stateName, value) {
    this.setState({
      [stateName]: value
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
        activeIndex: 2
      });
    }
  }

  onClose() {
    this.setState({
      modal: false
    });
  }

  render() {
    const SmContainer = _styledComponents.default.div`
      width: 313px
    `;
    const LrgContainer = _styledComponents.default.div`
      width: 618px
    `;

    if (!this.state.modal) {
      return /*#__PURE__*/_react.default.createElement(SmContainer, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_DateCarousel.default, {
        modal: this.state.modal,
        dates: this.state.dates,
        setStateProp: this.setStateProp,
        tourDate: this.state.tourDate,
        activeIndex: this.state.activeIndex
      })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_TourType.default, {
        setStateProp: this.setStateProp,
        tourType: this.state.tourType
      })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Schedule.default, {
        showModal: this.showModal,
        modal: this.state.modal
      })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_StartAnOffer.default, null)));
    } else {
      return /*#__PURE__*/_react.default.createElement(LrgContainer, null, /*#__PURE__*/_react.default.createElement(_Booker.default, {
        state: this.state,
        onClose: this.onClose,
        handleTour: this.handleTour,
        setStateProp: this.setStateProp
      }));
    }
  }

}

var _default = Scheduler;
exports.default = _default;
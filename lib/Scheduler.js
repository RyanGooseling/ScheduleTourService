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

var _Booker = _interopRequireDefault(require("./components/Modal/Booker.jsx"));

var _TimeCarousel = _interopRequireDefault(require("./components/Modal/TimeCarousel.jsx"));

var _ExtendedDateCarousel = _interopRequireDefault(require("./components/Modal/ExtendedDateCarousel.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Scheduler extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      dates: '',
      tourType: 'In-person',
      tourSched: {},
      modal: false
    };
    this.showModal = this.showModal.bind(this);
    this.onClose = this.onClose.bind(this);
    this.handleTour = this.handleTour.bind(this);
=======
      dates: [],
      TourType: 'In-person',
      modal: false
    };
    this.setTourType = this.setTourType.bind(this);
    this.showModal = this.showModal.bind(this);
>>>>>>> master
  }

  componentDidMount() {
    console.log('sending get');
    (0, _axios.default)({
      method: 'get',
      url: '/house/1'
    }).then(newData => {
      console.log('New Data: ', newData.data);
      this.setState({
        dates: newData.data
      });
    }).catch(err => {
      console.log('Error', err);
    });
  }

<<<<<<< HEAD
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
    (0, _axios.default)({
      method: 'post',
      url: '/house',
      data: newTour
    }).then(newData => {
      console.log('Succesful submission returned');
      this.setState({
        dates: newData.data
      });
    }).then(() => {
      this.setState({
        modal: false
      });
    }).catch(err => {
      console.log('Error', err);
    });
=======
  setTourType(string) {
    this.setState({
      TourType: string
    });
    console.log(this.state);
>>>>>>> master
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

<<<<<<< HEAD
  onClose() {
    this.setState({
      modal: false
    });
  }

  render() {
    if (!this.state.modal) {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "sm-container"
      }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_DateCarousel.default, null)), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_TourType.default, null)), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Schedule.default, {
        showModal: this.showModal,
        modal: this.state.modal
      })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_StartAnOffer.default, null)));
    } else {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "lrg-container"
      }, /*#__PURE__*/_react.default.createElement(_Booker.default, {
        modal: this.state.modal,
        onClose: this.onClose,
        handleTour: this.handleTour
      }));
    }
=======
  render() {
    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_DateCarousel.default, {
      dates: this.state.dates
    })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_TourType.default, {
      TourType: this.state.TourType,
      setTourType: input => this.setTourType(input)
    })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Schedule.default, {
      showModal: this.showModal,
      modal: this.state.modal
    })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_StartAnOffer.default, null)), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Booker.default, {
      modal: this.state.modal
    })));
>>>>>>> master
  }

}

var _default = Scheduler;
exports.default = _default;
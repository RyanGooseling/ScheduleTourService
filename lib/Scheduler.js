"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _axios = _interopRequireDefault(require("axios"));

var _DateCarousel = _interopRequireDefault(require("./components/DateCarousel.jsx"));

var _Schedule = _interopRequireDefault(require("./components/Schedule.jsx"));

var _TourType = _interopRequireDefault(require("./components/TourType.jsx"));

var _StartAnOffer = _interopRequireDefault(require("./components/StartAnOffer.jsx"));

var _Booker = _interopRequireDefault(require("./components/Modal/Booker.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Scheduler extends _react.default.Component {
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
    (0, _axios.default)({
      method: 'get',
      url: '/house'
    }).then(newData => {
      this.setState({
        dates: newData
      });
    }).catch(err => {
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
    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_DateCarousel.default, null)), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_TourType.default, null)), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Schedule.default, {
      showModal: this.showModal,
      modal: this.state.modal
    })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_StartAnOffer.default, null)), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Booker.default, {
      modal: this.state.modal,
      onClose: this.onClose
    })));
  }

}

var _default = Scheduler;
exports.default = _default;
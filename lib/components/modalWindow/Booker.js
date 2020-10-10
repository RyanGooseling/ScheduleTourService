"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _TourType = _interopRequireDefault(require("../TourType.jsx"));

var _DateCarousel = _interopRequireDefault(require("../DateCarousel.jsx"));

var _TimeCarousel = _interopRequireDefault(require("./TimeCarousel.jsx"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Booker = props => {
  const Modal = _styledComponents.default.div`
    width: 100% px;
    height: 100% px;
    background: white;
    border: 1px solid #ccc;
    transition: 1.1s ease-out;
    box-shadow: -2rem 2rem 2rem rgba(black, 0.2);
    filter: blur(0);
    transform: scale(1);
    opacity: 1;
    visibility: visible;
  `;
  const CancelSubmitBox = _styledComponents.default.div`
    display: flex;
  `;
  const SubmitReturn = _styledComponents.default.button`
    flex-grow: 3;
    color: white;
    background-color: red;
    position: relative;
    box-sizing: border-box;
    display: inline-block;
    height: 40px;
    padding: 12px 1.5rem;
    border-radius: 2px 2px 2px 2px;
    &:hover {
      background-color: lightcoral;
    }
  `;
  const CancelReturn = (0, _styledComponents.default)(SubmitReturn)`
    flex-grow: 1;
  `;

  if (props.state.modal) {
    return /*#__PURE__*/_react.default.createElement(Modal, {
      id: "modal"
    }, /*#__PURE__*/_react.default.createElement("h2", null, "Pick a date"), /*#__PURE__*/_react.default.createElement(_DateCarousel.default, {
      modal: props.state.modal,
      tourDate: props.state.tourDate,
      setStateProp: props.setStateProp,
      dates: props.state.dates,
      activeIndex: props.state.activeIndex
    }), /*#__PURE__*/_react.default.createElement("h2", null, "How would you like to tour?"), /*#__PURE__*/_react.default.createElement(_TourType.default, {
      setStateProp: props.setStateProp,
      tourType: props.state.tourType
    }), /*#__PURE__*/_react.default.createElement("h2", null, "Pick a time"), /*#__PURE__*/_react.default.createElement(_TimeCarousel.default, {
      times: props.state.times,
      timeWindow: props.state.timeWindow,
      setStateProp: props.setStateProp,
      activeTimeIndex: props.state.activeTimeIndex,
      tourSched: props.state.tourSched,
      tourDate: props.state.tourDate
    }), /*#__PURE__*/_react.default.createElement(CancelSubmitBox, null, /*#__PURE__*/_react.default.createElement(CancelReturn, {
      onClick: () => props.showModal()
    }, "Cancel and Return"), /*#__PURE__*/_react.default.createElement(SubmitReturn, {
      onClick: () => props.handleTour()
    }, "Book and Return")));
  } else {
    return null;
  }
};

var _default = Booker;
exports.default = _default;
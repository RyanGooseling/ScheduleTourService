"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _TourType = _interopRequireDefault(require("../TourType.jsx"));

var _ExtendedDateCarousel = _interopRequireDefault(require("./ExtendedDateCarousel.jsx"));

var _TimeCarousel = _interopRequireDefault(require("./TimeCarousel.jsx"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Booker = props => {
  const Modal = _styledComponents.default.div`
    width: 500 px;
    height: 500 px;
    margin: auto;
    background: white;
    border: 1px solid #ccc;
    transition: 1.1s ease-out;
    box-shadow: -2rem 2rem 2rem rgba(black, 0.2);
    filter: blur(0);
    transform: scale(1);
    opacity: 1;
    visibility: visible;
  `;
  const Content = _styledComponents.default.div`
    padding: 1rem;
  `;

  if (!props.modal) {
    return null;
  } else {
    return /*#__PURE__*/_react.default.createElement(Modal, {
      id: "modal"
    }, /*#__PURE__*/_react.default.createElement("h2", null, "Pick a date"), /*#__PURE__*/_react.default.createElement(_ExtendedDateCarousel.default, null), /*#__PURE__*/_react.default.createElement("h2", null, "How would you like to tour?"), /*#__PURE__*/_react.default.createElement(_TourType.default, null), /*#__PURE__*/_react.default.createElement("h2", null, "Pick a time"), /*#__PURE__*/_react.default.createElement(_TimeCarousel.default, null), /*#__PURE__*/_react.default.createElement("div", {
      class: "actions"
    }, /*#__PURE__*/_react.default.createElement("button", {
      class: "toggle-button",
      onClick: () => props.handleTour(),
      onClick: () => props.onClose()
    }, "Book and Return")));
  }
};

var _default = Booker;
exports.default = _default;
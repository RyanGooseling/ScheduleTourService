"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TimeCarousel = props => /*#__PURE__*/_react.default.createElement("div", null, " Go tour this home", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("ul", {
  class: "carousel"
}, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("li", {
  class: "carouselButtons"
}, "Time1"), /*#__PURE__*/_react.default.createElement("li", {
  class: "carouselButtons"
}, "Time2"), /*#__PURE__*/_react.default.createElement("li", {
  class: "carouselButtons"
}, "Time3"))));

var _default = TimeCarousel;
exports.default = _default;
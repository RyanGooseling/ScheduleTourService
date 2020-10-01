"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

<<<<<<< HEAD
var Schedule = function Schedule(props) {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
    "class": "submit"
  }, " Schedule with this button "), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("span", {
    "class": "subscript"
  }, " It's free, with no obligation - cancel anytime"));
};
=======
const Schedule = props => /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
  class: "button"
}, " Schedule with this button "), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("span", {
  class: "subscript"
}, " It's free, with no obligation - cancel anytime"));
>>>>>>> master

var _default = Schedule;
exports.default = _default;
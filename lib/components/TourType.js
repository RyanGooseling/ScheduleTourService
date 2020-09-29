"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TourType = function TourType(props) {
  return /*#__PURE__*/_react["default"].createElement("span", {
    "class": "tourCountainer"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    "class": "input"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    "class": "tour-person",
    onClick: function onClick() {
      return console.log('Clicked for in-person!');
    }
  }, " Tour in Person "), /*#__PURE__*/_react["default"].createElement("div", {
    "class": "tour-video",
    onClick: function onClick() {
      return console.log('Clicked for video!');
    }
  }, " Tour via Video")));
};

var _default = TourType;
exports["default"] = _default;
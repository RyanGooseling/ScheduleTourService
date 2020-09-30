"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TourType = function TourType(props) {
  console.log(props.tourType);

  var TourPerson = _styledComponents["default"].div.withConfig({
    displayName: "TourType__TourPerson",
    componentId: "xb4d30-0"
  })(["display:flex;width:144px;justify-content:center;align-items:center;padding:0;border:1px solid;text-align:center;box-sizing:border-box;border-radius:2px 2px 2px 2px;"]);

  var TourPersonSelected = (0, _styledComponents["default"])(TourPerson).withConfig({
    displayName: "TourType__TourPersonSelected",
    componentId: "xb4d30-1"
  })(["border:2px solid;"]);
  var TourVideo = (0, _styledComponents["default"])(TourPerson).withConfig({
    displayName: "TourType__TourVideo",
    componentId: "xb4d30-2"
  })(["width:168px;"]);
  var TourVideoSelected = (0, _styledComponents["default"])(TourVideo).withConfig({
    displayName: "TourType__TourVideoSelected",
    componentId: "xb4d30-3"
  })(["border:2px solid;"]);

  if (props.tourType === 'In-person') {
    return /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("div", {
      "class": "input"
    }, /*#__PURE__*/_react["default"].createElement(TourPersonSelected, {
      onClick: function onClick() {
        return props.handleClick('In-person');
      }
    }, " Tour in Person "), /*#__PURE__*/_react["default"].createElement(TourVideo, {
      onClick: function onClick() {
        return props.handleClick('Video');
      }
    }, " Tour via Video")));
  } else {
    return /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("div", {
      "class": "input"
    }, /*#__PURE__*/_react["default"].createElement(TourPerson, {
      onClick: function onClick() {
        return props.handleClick('In-person');
      }
    }, " Tour in Person "), /*#__PURE__*/_react["default"].createElement(TourVideoSelected, {
      onClick: function onClick() {
        return props.handleClick('Video');
      }
    }, " Tour via Video")));
  }
};

var _default = TourType;
exports["default"] = _default;
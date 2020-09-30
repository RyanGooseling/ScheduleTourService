"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DateCarousel = function DateCarousel(props) {
  var carousel = _styledComponents["default"].ul.withConfig({
    displayName: "DateCarousel__carousel",
    componentId: "owdg3d-0"
  })(["padding-right:0.75rem;padding-left:0.75rem;margin:0px;"]);

  var carouselButton = _styledComponents["default"].li.withConfig({
    displayName: "DateCarousel__carouselButton",
    componentId: "owdg3d-1"
  })(["display:inline-flex;text-align:center;justify-content:center;width:88.33px;height:88.33px;margin-top:1rem;margin-bottom:1rem;margin-right:0.25rem;margin-left:0.25rem;box-sizing:border-box;border:2px solid;border-radius:2px 2px 2px 2px;"]);

  return /*#__PURE__*/_react["default"].createElement("div", null, " Go tour this home", /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("carousel", null, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("carouselButton", null, "Day1"), /*#__PURE__*/_react["default"].createElement("li", {
    "class": "carouselButtons"
  }, "Day2"), /*#__PURE__*/_react["default"].createElement("li", {
    "class": "carouselButtons"
  }, "Day3"))));
};

var _default = DateCarousel;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _LeftArrowTime = _interopRequireDefault(require("./LeftArrowTime.jsx"));

var _RightArrowTime = _interopRequireDefault(require("./RightArrowTime.jsx"));

var _TimeBooker = _interopRequireDefault(require("./TimeBooker.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const TimeCarousel = props => {
  const goToPrevTime = function (e) {
    e.preventDefault();
    let index = props.activeTimeIndex;
    let slides = props.times;
    let slidesLength = slides.length - 1;

    if (index < 1) {
      index = slidesLength;
    } else {
      index--;
    }

    props.setTimeIndex(index);
  };

  const goToNextTime = function (e) {
    e.preventDefault();
    let index = props.activeTimeIndex;
    let slides = props.times;
    let slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = 0;
    } else {
      index++;
    }

    props.setTimeIndex(index);
  };

  const SlideContainer = _styledComponents.default.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: space-between;
  `;
  return /*#__PURE__*/_react.default.createElement("div", null, " Go tour this home", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(SlideContainer, null, /*#__PURE__*/_react.default.createElement(_LeftArrowTime.default, {
    goToPrevSlide: e => goToPrevTime(e),
    activeIndex: props.activeTimeIndex,
    openings: props.times
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "inner-Container"
  }, /*#__PURE__*/_react.default.createElement(_TimeBooker.default, {
    activeIndex: props.activeTimeIndex,
    timeWindow: props.timeWindow,
    settimeWindow: props.settimeWindow,
    openings: props.times
  })), /*#__PURE__*/_react.default.createElement(_RightArrowTime.default, {
    goToNextSlide: e => goToNextTime(e),
    activeIndex: props.activeTimeIndex,
    openings: props.times
  })));
};

var _default = TimeCarousel;
exports.default = _default;
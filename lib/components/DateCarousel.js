"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _LeftArrow = _interopRequireDefault(require("./LeftArrow.jsx"));

var _RightArrow = _interopRequireDefault(require("./RightArrow.jsx"));

var _Slide = _interopRequireDefault(require("./Slide.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const DateCarousel = props => {
  const goToPrevSlide = function (e) {
    e.preventDefault();
    let index = props.activeIndex;
    let slides = props.dates;
    let slidesLength = slides.length - 1;

    if (index < 1) {
      index = slidesLength;
    } else {
      index--;
    }

    props.setStateProp('activeIndex', index);
  };

  const goToNextSlide = function (e) {
    e.preventDefault();
    let index = props.activeIndex;
    let slides = props.dates;
    let slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = 0;
    } else {
      index++;
    }

    props.setStateProp('activeIndex', index);
  };

  const SlideContainer = _styledComponents.default.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: space-between;
  `;
  return /*#__PURE__*/_react.default.createElement("div", null, " Go tour this home", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(SlideContainer, null, /*#__PURE__*/_react.default.createElement(_LeftArrow.default, {
    goToPrevSlide: e => goToPrevSlide(e),
    activeIndex: props.activeIndex,
    openings: props.dates,
    modal: props.modal
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "inner-Container"
  }, /*#__PURE__*/_react.default.createElement(_Slide.default, {
    activeIndex: props.activeIndex,
    tourDate: props.tourDate,
    setStateProp: props.setStateProp,
    openings: props.dates,
    modal: props.modal
  })), /*#__PURE__*/_react.default.createElement(_RightArrow.default, {
    goToNextSlide: e => goToNextSlide(e),
    activeIndex: props.activeIndex,
    openings: props.dates,
    modal: props.modal
  })));
};

var _default = DateCarousel;
exports.default = _default;
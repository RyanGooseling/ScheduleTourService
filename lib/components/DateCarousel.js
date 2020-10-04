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

var _LeftArrowBooker = _interopRequireDefault(require("./modalWindow/LeftArrowBooker.jsx"));

var _RightArrowBooker = _interopRequireDefault(require("./modalWindow/RightArrowBooker.jsx"));

var _SlideBooker = _interopRequireDefault(require("./modalWindow/SlideBooker.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const DateCarousel = props => {
  const [dates, setDates] = (0, _react.useState)(['2020-10-03', '2020-10-04', '2020-10-05', '2020-10-06', '2020-10-07', '2020-10-08', '2020-10-09', '2020-10-10', '2020-10-11', '2020-10-12', '2020-10-13', '2020-10-14', '2020-10-15', '2020-10-16', '2020-10-17', '2020-10-18', '2020-10-19', '2020-10-20', '2020-10-21', '2020-10-22', '2020-10-23', '2020-10-24', '2020-10-25', '2020-10-26', '2020-10-27', '2020-10-28', '2020-10-29', '2020-10-30', '2020-10-31', '2020-11-01', '2020-11-02']);
  const [activeIndex, setIndex] = (0, _react.useState)(1);
  const [tourDate, setDate] = (0, _react.useState)(dates[1]);

  const goToPrevSlide = function (e) {
    e.preventDefault();
    let index = activeIndex;
    let slides = dates;
    let slidesLength = slides.length - 1;

    if (index < 1) {
      index = slidesLength;
    } else {
      index--;
    }

    setIndex(index);
  };

  const goToNextSlide = function (e) {
    e.preventDefault();
    let index = activeIndex;
    let slides = dates;
    let slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = 0;
    } else {
      index++;
    }

    setIndex(index);
  };

  const SlideContainer = _styledComponents.default.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: space-between;
  `;

  if (props.modal === false) {
    return /*#__PURE__*/_react.default.createElement("div", null, " Go tour this home", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(SlideContainer, null, /*#__PURE__*/_react.default.createElement(_LeftArrow.default, {
      goToPrevSlide: e => goToPrevSlide(e),
      activeIndex: activeIndex,
      openings: dates
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "inner-Container"
    }, /*#__PURE__*/_react.default.createElement(_Slide.default, {
      activeIndex: activeIndex,
      tourDate: tourDate,
      setDate: setDate,
      openings: dates
    })), /*#__PURE__*/_react.default.createElement(_RightArrow.default, {
      goToNextSlide: e => goToNextSlide(e),
      activeIndex: activeIndex,
      openings: dates
    })));
  } else {
    console.log('active index: ', activeIndex);
    return /*#__PURE__*/_react.default.createElement("div", null, " Go tour this home", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(SlideContainer, null, /*#__PURE__*/_react.default.createElement(_LeftArrowBooker.default, {
      goToPrevSlide: e => goToPrevSlide(e),
      activeIndex: activeIndex,
      openings: dates
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "inner-Container"
    }, /*#__PURE__*/_react.default.createElement(_SlideBooker.default, {
      activeIndex: activeIndex,
      tourDate: tourDate,
      setDate: setDate,
      openings: dates
    })), /*#__PURE__*/_react.default.createElement(_RightArrowBooker.default, {
      goToNextSlide: e => goToNextSlide(e),
      activeIndex: activeIndex,
      openings: dates
    })));
  }
};

var _default = DateCarousel;
exports.default = _default;
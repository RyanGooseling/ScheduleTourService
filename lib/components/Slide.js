"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Slide = props => {
  const CarouselButton = _styledComponents.default.div`
    display: inline-block;
    text-align: center;
    justify-content: center;
    width: 86.33px;
    height: 86.33px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-right: 0.25rem;
    margin-left: 0.25rem;
    box-sizing: border-box;
    border-radius: 2px 2px 2px 2px;
    cursor: pointer;
  `;
  const CarouselButtonSelected = (0, _styledComponents.default)(CarouselButton)`
  border: 2px solid;
  box-shadow: 0 3px 4px 0 #ccc;
  `;
  const CarouselButtonUnselected = (0, _styledComponents.default)(CarouselButton)`
  border: 1px solid #ccc;
  border-radius: 2px 2px 2px 2px;
  &:hover {
    border: 1px solid darkgray;
  }
  `;

  const renderView = function (input) {
    let currentIndex = props.openings.indexOf(input);
    let newClassName;
    let adjacentSlides;

    if (props.modal === false) {
      adjacentSlides = 1;
    } else {
      adjacentSlides = 2;
    }

    if (currentIndex <= props.activeIndex + adjacentSlides && currentIndex >= props.activeIndex - adjacentSlides) {
      if (input === props.tourDate) {
        newClassName = 'carouselButton selected';
      } else {
        newClassName = 'carouselButton unselected';
      }
    } else {
      newClassName = 'inactive';
    }

    return newClassName;
  };

  const getMonth = function (input) {
    let month = input.slice(5, 7);
    let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    return months[month - 1];
  };

  const DayTile = _styledComponents.default.div`
    vertical-align: center;
    margin: 12px;
    font-size: 24px;
  `;
  const MonthTile = _styledComponents.default.div`
    vertical-align: baseline;
<<<<<<< HEAD
  `;
  const Inactive = _styledComponents.default.div`
    display: none;
  `;
  return /*#__PURE__*/_react.default.createElement("section", null, props.openings.map(date => {
    if (renderView(date) === 'carouselButton selected') {
      return /*#__PURE__*/_react.default.createElement(CarouselButtonSelected, {
        onClick: () => props.setStateProp('tourDate', date)
      }, /*#__PURE__*/_react.default.createElement(DayTile, null, date.slice(-2)), /*#__PURE__*/_react.default.createElement(MonthTile, null, getMonth(date)));
    } else if (renderView(date) === 'carouselButton unselected') {
      return /*#__PURE__*/_react.default.createElement(CarouselButtonUnselected, {
        onClick: () => props.setStateProp('tourDate', date)
      }, /*#__PURE__*/_react.default.createElement(DayTile, null, date.slice(-2)), /*#__PURE__*/_react.default.createElement(MonthTile, null, getMonth(date)));
    } else {
      return /*#__PURE__*/_react.default.createElement(Inactive, {
        onClick: () => props.setStateProp('tourDate', date)
      }, /*#__PURE__*/_react.default.createElement(DayTile, null, date.slice(-2)), /*#__PURE__*/_react.default.createElement(MonthTile, null, getMonth(date)));
    }
=======
  `;
  return /*#__PURE__*/_react.default.createElement("section", null, props.openings.map(date => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: renderView(date),
      onClick: () => props.setStateProp('tourDate', date)
    }, /*#__PURE__*/_react.default.createElement(DayTile, null, date.slice(-2)), /*#__PURE__*/_react.default.createElement(MonthTile, null, getMonth(date)));
>>>>>>> master
  }));
};

var _default = Slide;
exports.default = _default;
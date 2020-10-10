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

const TimeBooker = props => {
  const CarouselButtonTime = _styledComponents.default.div`
    display: inline-block;
    font-size: xx-small;
    text-align: center;
    justify-content: center;
    width: 108px;
    height: 60px;
    padding: 21px 9px 21px 9px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-right: 0.25rem;
    margin-left: 0.25rem;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 2px 2px 2px 2px;
    cursor: pointer;
  `;
  const CarouselButtonTimeDisabled = (0, _styledComponents.default)(CarouselButtonTime)`
    opacity: 0.3;
    cursor: unset;
  `;
  const CarouselButtonTimeSelected = (0, _styledComponents.default)(CarouselButtonTime)`
    border: 2px solid;
    box-shadow: 0 3px 4px 0 #ccc;
  `;
  const CarouselButtonTimeUnselected = (0, _styledComponents.default)(CarouselButtonTime)`
    border: 1px solid #ccc;
    border-radius: 2px 2px 2px 2px;
    &:hover {
      border: 1px solid darkgray;
    }
  `;

  const renderView = function (input) {
    let currentDate = [props.tourDate + 'T00:00:00.000Z'];
    let currentIndex = props.openings.indexOf(input);
    let newClassName;

    if (currentIndex <= props.activeIndex + 2 && currentIndex >= props.activeIndex - 2) {
      if (props.tourSched[currentDate] !== undefined && props.tourSched[currentDate].includes(input)) {
        newClassName = 'carouselButtons-Time disabled';
      } else if (input === props.timeWindow) {
        newClassName = 'carouselButtons-Time selected';
      } else {
        newClassName = 'carouselButtons-Time unselected';
      }
    } else {
      newClassName = 'inactive';
    }

    return newClassName;
  };

  const Time = _styledComponents.default.div`
    font-size: 16px;
    text-align: top;
    justify-content: space-around;
    align-items: center;
    margin: 0;
  `;
  const Inactive = _styledComponents.default.div`
    display: none;
  `;
  return /*#__PURE__*/_react.default.createElement("section", null, props.openings.map(time => {
    if (renderView(time) === 'carouselButtons-Time unselected') {
      return /*#__PURE__*/_react.default.createElement(CarouselButtonTimeUnselected, {
        onClick: () => props.setStateProp('timeWindow', time)
      }, /*#__PURE__*/_react.default.createElement(Time, null, time.slice(0, 5)));
    } else if (renderView(time) === 'carouselButtons-Time selected') {
      return /*#__PURE__*/_react.default.createElement(CarouselButtonTimeSelected, {
        onClick: () => props.setStateProp('timeWindow', time)
      }, /*#__PURE__*/_react.default.createElement(Time, null, time.slice(0, 5)));
    } else if (renderView(time) === 'carouselButtons-Time disabled') {
      return /*#__PURE__*/_react.default.createElement(CarouselButtonTimeDisabled, {
        onClick: () => props.setStateProp('timeWindow', time)
      }, /*#__PURE__*/_react.default.createElement(Time, null, time.slice(0, 5)));
    } else {
      return /*#__PURE__*/_react.default.createElement(Inactive, {
        onClick: () => props.setStateProp('timeWindow', time)
      }, /*#__PURE__*/_react.default.createElement(Time, null, time.slice(0, 5)));
    }
  }));
};

var _default = TimeBooker;
exports.default = _default;
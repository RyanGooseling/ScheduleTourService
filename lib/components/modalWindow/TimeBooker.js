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
  const renderView = function (input) {
    let currentDate = [props.tourDate + 'T00:00:00.000Z'];
    let currentIndex = props.openings.indexOf(input);
    let newClassName;

    if (currentIndex <= props.activeIndex + 2 && currentIndex >= props.activeIndex - 2) {
      if (props.tourSched[currentDate].includes(input)) {
        newClassName = 'carouselButtons-Time disabled';
      } else if (input === props.timeWindow) {
        newClassName = 'carouselButtons-Time selected';
      } else {
        newClassName = 'carouselButtons-Time unselected';
      }
    } else {
      if (input === props.timeWindow) {
        newClassName = 'inactive selected';
      } else {
        newClassName = 'inactive unselected';
      }
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
  return /*#__PURE__*/_react.default.createElement("section", null, props.openings.map(time => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: renderView(time),
      onClick: () => props.setStateProp('timeWindow', time)
    }, /*#__PURE__*/_react.default.createElement(Time, null, time.slice(0, 5)));
  }));
};

var _default = TimeBooker;
exports.default = _default;
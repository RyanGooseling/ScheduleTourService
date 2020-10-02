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

const TourType = props => {
  const Input = _styledComponents.default.div`
    display: flex;
    flex-direction: row;
    cursor: pointer;
    height: 48px;
    `;
  const TourPerson = _styledComponents.default.div`
    display: flex;
    width: 144px;
    justify-content: center;
    align-items: center;
    padding: 0;
    border: 1px solid;
    text-align: center;
    box-sizing: border-box;
    border-radius: 2px 2px 2px 2px;
    `;
  const TourPersonSelected = (0, _styledComponents.default)(TourPerson)`
    border: 2px solid;
    `;
  const TourVideo = (0, _styledComponents.default)(TourPerson)`
    width: 168px;
    `;
  const TourVideoSelected = (0, _styledComponents.default)(TourVideo)`
    border: 2px solid;
    `;

  if (props.TourType === 'In-person') {
    return /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(Input, null, /*#__PURE__*/_react.default.createElement(TourPersonSelected, {
      onClick: () => props.setTourType('In-person')
    }, " Tour in Person "), /*#__PURE__*/_react.default.createElement(TourVideo, {
      onClick: () => props.setTourType('Video')
    }, " Tour via Video")));
  } else {
    return /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(Input, null, /*#__PURE__*/_react.default.createElement(TourPerson, {
      onClick: () => props.setTourType('In-person')
    }, " Tour in Person "), /*#__PURE__*/_react.default.createElement(TourVideoSelected, {
      onClick: () => props.setTourType('Video')
    }, " Tour via Video")));
  }
};

var _default = TourType;
exports.default = _default;
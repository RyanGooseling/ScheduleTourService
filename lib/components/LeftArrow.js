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

const LeftArrow = props => {
  const renderArrow = function () {
    if (props.modal === false) {
      if (props.activeIndex > 1) {
        return '<';
      } else {
        return '';
      }
    } else {
      if (props.activeIndex > 2) {
        return '<';
      } else {
        return '';
      }
    }
  };

  const BackArrow = _styledComponents.default.div`
  `;
  const BackArrowDisabled = (0, _styledComponents.default)(BackArrow)`
    opacity: 0.3;
  `;
  return /*#__PURE__*/_react.default.createElement(BackArrow, {
    onClick: props.goToPrevSlide
  }, /*#__PURE__*/_react.default.createElement("i", null, renderArrow()));
};

var _default = LeftArrow;
exports.default = _default;
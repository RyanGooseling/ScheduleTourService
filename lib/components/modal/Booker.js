"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Booker = props => {
  console.log('Booker props: ', props.modal);

  if (props.modal) {
    return /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("div", null, "BOOKING MODAL WINDOW TO GO HERE!"));
  } else {
    return null;
  }
};

var _default = Booker;
exports.default = _default;
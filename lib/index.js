"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Scheduler = _interopRequireDefault(require("./Scheduler.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const houseId = window.location.pathname.slice(7, -1);

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_Scheduler.default, {
  houseId: houseId
}), document.getElementById('Scheduler'));
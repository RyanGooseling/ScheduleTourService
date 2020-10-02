"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Schedule = props => {
  const Subscript = _styledComponents.default.span`
    text-align: left;
    font-size: 12px;
    `;
  const SubmitSchedule = _styledComponents.default.button`
    width: 100%;
    color: white;
    background-color: blue;
    position: relative;
    box-sizing: border-box;
    display: inline-block;
    height: 40px;
    padding: 12px 1.5rem;
    border-radius: 2px 2px 2px 2px;

    &:hover {
      background-color: cornflowerblue;
    }
    `;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(SubmitSchedule, {
    onClick: () => props.showModal()
  }, " Schedule Tour "), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(Subscript, null, " It's free, with no obligation - cancel anytime"));
};

var _default = Schedule;
exports.default = _default;
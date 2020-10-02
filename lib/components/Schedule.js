"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Schedule = props => {
  const showModal = function () {
    console.log(props.modal);

    if (props.modal) {
      props.modal = false;
    } else {
      props.modal = true;
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
    class: "button",
    onClick: () => showModal()
  }, " Schedule with this button "), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("span", {
    class: "subscript"
  }, " It's free, with no obligation - cancel anytime"));
};

var _default = Schedule;
exports.default = _default;
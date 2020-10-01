"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Booker = props => {
  if (!props.modal) {
    return null;
  } else {
    return /*#__PURE__*/_react.default.createElement("div", {
      class: "modal",
      id: "modal"
    }, /*#__PURE__*/_react.default.createElement("h2", null, "Let's Book"), /*#__PURE__*/_react.default.createElement("div", {
      class: "content"
    }, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus non fuga omnis a sed impedit explicabo accusantium nihil doloremque consequuntur.'), /*#__PURE__*/_react.default.createElement("div", {
      class: "actions"
    }, /*#__PURE__*/_react.default.createElement("button", {
      class: "toggle-button",
      onClick: () => props.onClose()
    }, "close")));
  }
};

var _default = Booker;
exports.default = _default;
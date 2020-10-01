"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Booker = props => {
  const Modal = styled.div`
  width: 500px;
  background: white;
  border: 1px solid #ccc;
  transition: 1.1s ease-out;
  box-shadow: -2rem 2rem 2rem rgba(black, 0.2);
  filter: blur(0);
  transform: scale(1);
  opacity: 1;
  visibility: visible;
  `;
  const Content = styled.div`
    padding: 1rem;
  `;

  if (!props.modal) {
    return null;
  } else {
    return /*#__PURE__*/_react.default.createElement(Modal, {
      id: "modal"
    }, /*#__PURE__*/_react.default.createElement("h2", null, "Let's Book"), /*#__PURE__*/_react.default.createElement(Content, null, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus non fuga omnis a sed impedit explicabo accusantium nihil doloremque consequuntur.'), /*#__PURE__*/_react.default.createElement("div", {
      class: "actions"
    }, /*#__PURE__*/_react.default.createElement("button", {
      class: "toggle-button",
      onClick: () => props.onClose()
    }, "close")));
  }
};

var _default = Booker;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const StartAnOffer = props => {
  const Subscript = _styledComponents.default.span`
    text-align: left;
    font-size: 12px;
  `;
  const OrSpan = _styledComponents.default.span`
    width: 100%;
    position: relative;
    display: inline-block;
    text-align: center;
  `;
  const Submit = _styledComponents.default.button`
    width: 100%;
    position: relative;
    box-sizing: border-box;
    display: inline-block;
    height: 40px;
    padding: 12px 1.5rem;
    border-radius: 2px 2px 2px 2px;
    border: 1px solid #ccc;

    &:hover {
      background-color: darkgray;
    }
  `;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(OrSpan, null, " --- OR --- "), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(Submit, {
    onClick: () => console.log('Offer button submitted')
  }, " Start an offer "), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(Subscript, null, " Buy with a Redfin Agent and get cash back"));
};

var _default = StartAnOffer;
exports.default = _default;
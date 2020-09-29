"use strict";

var _axios = _interopRequireDefault(require("axios"));

var _enzyme = require("enzyme");

var _TourTypes = _interopRequireDefault(require("./components/TourTypes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @jest-environment node
 */
describe('testing React components', function () {
  test('app changes Tour Type after click', function () {
    // Render a checkbox with label in the document
    var checkbox = (0, _enzyme.shallow)( /*#__PURE__*/_axios["default"].createElement(_TourTypes["default"], {
      labelOn: "On",
      labelOff: "Off"
    }));
    expect(checkbox.text()).toEqual('Off');
    checkbox.find('input').simulate('change');
    expect(checkbox.text()).toEqual('On');
  });
});
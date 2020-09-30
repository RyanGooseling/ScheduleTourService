"use strict";

var _axios = _interopRequireDefault(require("axios"));

var _enzyme = require("enzyme");

var _TourTypes = _interopRequireDefault(require("./components/TourTypes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @jest-environment node
 */
describe('testing React components', function () {
  test('app changes tourType state after click', function () {
    // Change tour type in state with click of the document
    var clickbox = (0, _enzyme.shallow)( /*#__PURE__*/_axios["default"].createElement(_TourTypes["default"], null));
    expect(clickbox.state().tourType).toEqual('In-person');
    clickbox.find('div.tour-video').simulate('change');
    expect(clickbox.state().tourType).toEqual('Video');
  });
});
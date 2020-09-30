"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DateCarousel = function DateCarousel(props) {
  console.log('Dates: ', props.dates); // override dates with indices for the time deings

  var fakeDates = [1, 2, 3, 4, 5];

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      activeIndex = _useState2[0],
      setIndex = _useState2[1]; // NOTE: The tourDate is NOT the same as the active Index


  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      tourDate = _useState4[0],
      setDate = _useState4[1];

  var CarouselExample = _styledComponents["default"].div.withConfig({
    displayName: "DateCarousel__CarouselExample",
    componentId: "owdg3d-0"
  })(["position:relative;"]);

  var CarouselSlide = _styledComponents["default"].ul.withConfig({
    displayName: "DateCarousel__CarouselSlide",
    componentId: "owdg3d-1"
  })(["margin-right:auto;margin-left:auto;display:none;max-width:900px;list-style-type:none;text-align:center;"]);

  var goToSlide = function goToSlide(input) {
    setIndex(input);
  };

  var goToPrevSlide = function goToPrevSlide(e) {
    e.preventDefault();
    var index = activeIndex;
    var slides = fakeDates.slides;
    var slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;
    setIndex(index);
  };

  var goToNextSlide = function goToNextSlide(e) {
    e.preventDefault();
    var index = activeIndex;
    var slides = fakeDates.slides;
    var slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;
    setIndex(index);
  }; // Left Arrow


  return /*#__PURE__*/_react["default"].createElement("div", null, " Go tour this home", /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(CarouselExample, null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "#",
    className: "carousel__arrow carousel__arrow--left",
    onClick: function onClick(e) {
      return _this.goToPrevSlide(e);
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "fa fa-2x fa-angle-left"
  })), /*#__PURE__*/_react["default"].createElement(CarouselSlide, null, fakeDates.map(function (index) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      className: index === activeIndex ? 'carouselSlide carouselSlide--active' : 'carouselSlide',
      key: index
    }, /*#__PURE__*/_react["default"].createElement("p", null, "Content: ", index));
  })), /*#__PURE__*/_react["default"].createElement("a", {
    href: "#",
    className: "carousel__arrow carousel__arrow--right",
    onClick: function onClick(e) {
      return _this.goToNextSlide(e);
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "fa fa-2x fa-angle-right"
  }))));
};

var _default = DateCarousel;
exports["default"] = _default;
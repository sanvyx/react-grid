"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var gaps = function gaps(_ref) {
  var gaps = _ref.gaps;
  if (!gaps) return "";

  var _gaps$split = gaps.split(" "),
      _gaps$split2 = _slicedToArray(_gaps$split, 2),
      y = _gaps$split2[0],
      x = _gaps$split2[1];

  x = x || y;
  var css = "\n    margin: -".concat(y, " 0 0 -").concat(x, ";\n    & > * {\n      padding: ").concat(y, " 0 0 ").concat(x, ";\n    }\n  ");
  return css;
};

var Grid = _styledComponents.default.div.withConfig({
  displayName: "Grid",
  componentId: "r7ukyq-0"
})(["& > *{box-sizing:border-box;}display:flex;flex-wrap:wrap;align-items:", ";", ";justify-content:", ";"], function (_ref2) {
  var alignItems = _ref2.alignItems;
  return alignItems || "stretch";
}, gaps, function (_ref3) {
  var justifyContent = _ref3.justifyContent;
  return justifyContent || "normal";
});

var _default = Grid;
exports.default = _default;
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/_css-loader@1.0.0@css-loader/index.js?!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js?!./src/views/admin/article/edit/index.less":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@1.0.0@css-loader??ref--6-oneOf-3-1!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??postcss!./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js??ref--6-oneOf-3-3!./src/views/admin/article/edit/index.less ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/_css-loader@1.0.0@css-loader/lib/css-base.js */ "./node_modules/_css-loader@1.0.0@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".blog-formItem {\n  line-height: 36px;\n}\n.blog-formItem .label {\n  display: inline-block;\n  width: 80px;\n  text-align: right;\n  padding-right: 5px;\n  text-transform: capitalize;\n  font-weight: bold;\n}\n.blog-formItem .title-input {\n  display: inline-block;\n  width: calc(100% - 80px);\n}\n.CodeMirror-scroll {\n  min-height: 500px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/views/admin/article/edit/components/Cate.jsx":
/*!**********************************************************!*\
  !*** ./src/views/admin/article/edit/components/Cate.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var antd_es_tag_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/es/tag/style/css */ "./node_modules/_antd@3.20.7@antd/es/tag/style/css.js");
/* harmony import */ var antd_es_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/es/tag */ "./node_modules/_antd@3.20.7@antd/es/tag/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/_react@16.8.6@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/_react-redux@6.0.1@react-redux/es/index.js");
/* harmony import */ var _SelfCate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SelfCate */ "./src/views/admin/article/edit/components/SelfCate.jsx");









var _dec, _class, _class2, _temp;




var CheckableTag = antd_es_tag__WEBPACK_IMPORTED_MODULE_7__["default"].CheckableTag;
/**
 * 选择分类、标签的组件
 *
 * @class SelectCates
 * @extends {Component}
 */

var SelectCates = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(function (store) {
  return store.article;
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  Object(_Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SelectCates, _Component);

  function SelectCates(props) {
    var _this;

    Object(_Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SelectCates);

    _this = Object(_Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(SelectCates).call(this, props));

    _this.getCommonlyList = function (list) {
      var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
      var sortList = list.sort(function (a, b) {
        return b.count - a.count;
      }).map(function (d) {
        return d.name;
      });
      return sortList.slice(0, num);
    };

    _this.handleSelect = function (value, checked) {
      var selectList = _this.state.selectList;
      var nextSelectList = checked ? [].concat(Object(_Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(selectList), [value]) : selectList.filter(function (t) {
        return t !== value;
      });

      _this.setState({
        selectList: nextSelectList
      });
    };

    _this.getResult = function () {
      var selectList = _this.state.selectList;
      var selfList = _this.$selfCateRef.state.list;
      return [].concat(Object(_Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(selectList), Object(_Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(selfList));
    };

    var _this$props = _this.props,
        type = _this$props.type,
        showNum = _this$props.showNum;

    var _selectList;

    if (!_this.props.isEdit) {
      _this.CommonlyList = _this.getCommonlyList(_this.props["".concat(type, "List")], showNum);
      _selectList = _this.CommonlyList[0] ? [_this.CommonlyList[0]] : []; // 默认选中第一个  selectList = this.props.list
    }

    _this.state = {
      selectList: _selectList
    };
    return _this;
  }

  Object(_Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SelectCates, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onRef && this.props.onRef(this);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.list !== nextProps.list && nextProps.isEdit) {
        this.setState({
          selectList: nextProps.list
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var selectList = this.state.selectList;
      var _this$props2 = this.props,
          type = _this$props2.type,
          isEdit = _this$props2.isEdit;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "blog-formItem"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "label"
      }, type, ": "), isEdit ? this.props.list.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(CheckableTag, {
          key: item,
          checked: selectList.includes(item),
          onChange: function onChange(checked) {
            return _this2.handleSelect(item, checked);
          }
        }, item);
      }) : this.CommonlyList.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(CheckableTag, {
          key: item,
          checked: selectList.includes(item),
          onChange: function onChange(checked) {
            return _this2.handleSelect(item, checked);
          }
        }, item);
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_SelfCate__WEBPACK_IMPORTED_MODULE_10__["default"], {
        CommonlyList: this.props.list,
        ref: function ref(el) {
          return _this2.$selfCateRef = el;
        }
      }));
    }
  }]);

  return SelectCates;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]), _class2.defaultProps = {
  type: 'tags',
  showNum: 10
  /**
   * 获取常用的分类、标签列表
   *
   * @param {Array} list - 列表数据
   * @param {Number} num - 获取的数量
   */

}, _temp)) || _class);
/* harmony default export */ __webpack_exports__["default"] = (SelectCates);

/***/ }),

/***/ "./src/views/admin/article/edit/components/SelfCate.jsx":
/*!**************************************************************!*\
  !*** ./src/views/admin/article/edit/components/SelfCate.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_icon_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.20.7@antd/es/icon/style/css.js");
/* harmony import */ var antd_es_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/icon */ "./node_modules/_antd@3.20.7@antd/es/icon/index.js");
/* harmony import */ var antd_es_input_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@3.20.7@antd/es/input/style/css.js");
/* harmony import */ var antd_es_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@3.20.7@antd/es/input/index.js");
/* harmony import */ var antd_es_tooltip_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/es/tooltip/style/css */ "./node_modules/_antd@3.20.7@antd/es/tooltip/style/css.js");
/* harmony import */ var antd_es_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/es/tooltip */ "./node_modules/_antd@3.20.7@antd/es/tooltip/index.js");
/* harmony import */ var antd_es_tag_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/es/tag/style/css */ "./node_modules/_antd@3.20.7@antd/es/tag/style/css.js");
/* harmony import */ var antd_es_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/es/tag */ "./node_modules/_antd@3.20.7@antd/es/tag/index.js");
/* harmony import */ var _Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/_react@16.8.6@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
















var SeleCate =
/*#__PURE__*/
function (_Component) {
  Object(_Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_13__["default"])(SeleCate, _Component);

  function SeleCate() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_9__["default"])(this, SeleCate);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11__["default"])(this, (_getPrototypeOf2 = Object(_Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12__["default"])(SeleCate)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      list: [],
      inputVisible: false,
      inputValue: ''
    };

    _this.handleClose = function (removedTag) {
      var list = _this.state.list.filter(function (t) {
        return t !== removedTag;
      });

      _this.setState({
        list: list
      });
    };

    _this.showInput = function () {
      _this.setState({
        inputVisible: true
      }, function () {
        return _this.input.focus();
      });
    };

    _this.handleInputChange = function (e) {
      _this.setState({
        inputValue: e.target.value
      });
    };

    _this.handleInputConfirm = function () {
      var _this$state = _this.state,
          inputValue = _this$state.inputValue,
          list = _this$state.list;
      var CommonlyList = _this.props.CommonlyList;

      if (inputValue && !list.includes(inputValue) && !CommonlyList.includes(inputValue)) {
        list = [].concat(Object(_Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__["default"])(list), [inputValue]);
      }

      _this.setState({
        list: list,
        inputVisible: false,
        inputValue: ''
      });
    };

    _this.saveInputRef = function (input) {
      return _this.input = input;
    };

    return _this;
  }

  Object(_Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_10__["default"])(SeleCate, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          list = _this$state2.list,
          inputVisible = _this$state2.inputVisible,
          inputValue = _this$state2.inputValue;
      return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_14__["Fragment"], null, list.map(function (item, index) {
        var isLongTag = item.length > 20;
        var tagElem = react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_es_tag__WEBPACK_IMPORTED_MODULE_7__["default"], {
          key: item,
          closable: true,
          afterClose: function afterClose() {
            return _this2.handleClose(item);
          },
          color: "#1890ff"
        }, isLongTag ? "".concat(item.slice(0, 20), "...") : item);
        return isLongTag ? react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_es_tooltip__WEBPACK_IMPORTED_MODULE_5__["default"], {
          title: item,
          key: item
        }, tagElem) : tagElem;
      }), inputVisible && react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_es_input__WEBPACK_IMPORTED_MODULE_3__["default"], {
        ref: this.saveInputRef,
        type: "text",
        size: "small",
        style: {
          width: 78
        },
        value: inputValue,
        onChange: this.handleInputChange,
        onBlur: this.handleInputConfirm,
        onPressEnter: this.handleInputConfirm
      }), !inputVisible && react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_es_tag__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onClick: this.showInput,
        style: {
          background: '#fff',
          borderStyle: 'dashed'
        }
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_es_icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
        type: "plus"
      }), " New Tag"));
    }
  }]);

  return SeleCate;
}(react__WEBPACK_IMPORTED_MODULE_14__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SeleCate);

/***/ }),

/***/ "./src/views/admin/article/edit/index.jsx":
/*!************************************************!*\
  !*** ./src/views/admin/article/edit/index.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_back_top_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/back-top/style/css */ "./node_modules/_antd@3.20.7@antd/es/back-top/style/css.js");
/* harmony import */ var antd_es_back_top__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/back-top */ "./node_modules/_antd@3.20.7@antd/es/back-top/index.js");
/* harmony import */ var antd_es_button_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.20.7@antd/es/button/style/css.js");
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.20.7@antd/es/button/index.js");
/* harmony import */ var antd_es_input_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@3.20.7@antd/es/input/style/css.js");
/* harmony import */ var antd_es_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@3.20.7@antd/es/input/index.js");
/* harmony import */ var _Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var antd_es_modal_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/es/modal/style/css */ "./node_modules/_antd@3.20.7@antd/es/modal/style/css.js");
/* harmony import */ var antd_es_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/es/modal */ "./node_modules/_antd@3.20.7@antd/es/modal/index.js");
/* harmony import */ var _Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/_react@16.8.6@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-redux */ "./node_modules/_react-redux@6.0.1@react-redux/es/index.js");
/* harmony import */ var simplemde__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! simplemde */ "./node_modules/_simplemde@1.11.2@simplemde/src/js/simplemde.js");
/* harmony import */ var simplemde__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(simplemde__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var simplemde_dist_simplemde_min_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! simplemde/dist/simplemde.min.css */ "./node_modules/_simplemde@1.11.2@simplemde/dist/simplemde.min.css");
/* harmony import */ var simplemde_dist_simplemde_min_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(simplemde_dist_simplemde_min_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./index.less */ "./src/views/admin/article/edit/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _lib_index__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/lib/index */ "./src/lib/index.js");
/* harmony import */ var _components_Cate__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/Cate */ "./src/views/admin/article/edit/components/Cate.jsx");
















var _dec, _class, _temp;








var Edit = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_16__["connect"])(function (state) {
  return state.article;
}), _dec(_class = (_temp =
/*#__PURE__*/
function (_Component) {
  Object(_Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_14__["default"])(Edit, _Component);

  function Edit() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_10__["default"])(this, Edit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_12__["default"])(this, (_getPrototypeOf2 = Object(_Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13__["default"])(Edit)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      value: '',
      title: '',
      tagList: [],
      categoryList: [],
      isEdit: false // 组件状态 更新或创建

    };

    _this.getCommonlyList = function (list) {
      var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
      var sortList = list.sort(function (a, b) {
        return b.count - a.count;
      });
      return sortList.slice(0, num);
    };

    _this.handleSubmit = function () {
      var tags = _this.$tagRef.getResult();

      var categories = _this.$categoryRef.getResult();

      var params = {
        title: _this.state.title,
        content: _this.smde.value(),
        categories: categories,
        tags: tags
      };

      if (_this.state.isEdit) {
        _this.axios.put('/article/update', Object(_Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_9__["default"])({}, params, {
          articleId: _this.state.articleId
        })).then(function (res) {
          antd_es_modal__WEBPACK_IMPORTED_MODULE_8__["default"].confirm({
            title: '文章修改成功！是否查看详情？',
            onOk: function onOk() {
              return _this.props.history.push("/article/".concat(_this.state.articleId));
            }
          });
        });
      } else {
        _this.axios.post('/article/create', params).then(function (res) {
          antd_es_modal__WEBPACK_IMPORTED_MODULE_8__["default"].confirm({
            title: '文章创建成功！是否立即查看？',
            onOk: function onOk() {
              return _this.props.history.push("/article/".concat(res.data.id));
            }
          });
        });
      }
    };

    _this.handleUpdate = function () {};

    _this.handleChange = function (e) {
      _this.setState(Object(_Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, e.target.name, e.target.value));
    };

    return _this;
  }

  Object(_Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_11__["default"])(Edit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.smde = new simplemde__WEBPACK_IMPORTED_MODULE_17___default.a({
        element: document.getElementById('editor').childElementCount,
        autofocus: true,
        autosave: true,
        previewRender: _lib_index__WEBPACK_IMPORTED_MODULE_20__["translateMarkdown"]
      });

      if (this.props.history.location.state) {
        var articleId = this.props.history.location.state.articleId;
        this.axios.get("/article/get/".concat(articleId)).then(function (res) {
          var _res$data = res.data,
              title = _res$data.title,
              tags = _res$data.tags,
              categories = _res$data.categories,
              content = _res$data.content;

          _this2.smde.value(content);

          var tagList = tags.map(function (d) {
            return d.name;
          });
          var categoryList = categories.map(function (d) {
            return d.name;
          });

          _this2.setState({
            title: title,
            tagList: tagList,
            categoryList: categoryList,
            isEdit: true,
            articleId: articleId
          });
        });
      }
    }
    /**
     * 获取常用的分类、标签列表
     *
     * @param {Array} list - 列表数据
     * @param {Number} num - 获取的数量
     */

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          title = _this$state.title,
          value = _this$state.value,
          categoryList = _this$state.categoryList,
          tagList = _this$state.tagList,
          isEdit = _this$state.isEdit;
      return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
        className: "edit"
      }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
        className: "blog-formItem"
      }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("span", {
        className: "label"
      }, "\u6807\u9898\uFF1A"), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_es_input__WEBPACK_IMPORTED_MODULE_5__["default"], {
        placeholder: "\u8BF7\u8F93\u5165\u6587\u7AE0\u6807\u9898",
        className: "title-input",
        name: "title",
        value: title,
        onChange: this.handleChange
      })), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_components_Cate__WEBPACK_IMPORTED_MODULE_21__["default"], {
        type: "category",
        showNum: 10,
        onRef: function onRef(el) {
          return _this3.$categoryRef = el;
        },
        list: categoryList,
        isEdit: isEdit
      }), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_components_Cate__WEBPACK_IMPORTED_MODULE_21__["default"], {
        type: "tag",
        showNum: 12,
        onRef: function onRef(el) {
          return _this3.$tagRef = el;
        },
        list: tagList,
        isEdit: isEdit
      }), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("textarea", {
        id: "editor",
        defaultValue: value
      }), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onClick: this.handleSubmit,
        type: "primary"
      }, isEdit ? '更新' : '创建'), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_es_back_top__WEBPACK_IMPORTED_MODULE_1__["default"], null));
    }
  }]);

  return Edit;
}(react__WEBPACK_IMPORTED_MODULE_15__["Component"]), _temp)) || _class);
/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/views/admin/article/edit/index.less":
/*!*************************************************!*\
  !*** ./src/views/admin/article/edit/index.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/_css-loader@1.0.0@css-loader??ref--6-oneOf-3-1!../../../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??postcss!../../../../../node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js??ref--6-oneOf-3-3!./index.less */ "./node_modules/_css-loader@1.0.0@css-loader/index.js?!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js?!./src/views/admin/article/edit/index.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/_style-loader@0.23.0@style-loader/lib/addStyles.js */ "./node_modules/_style-loader@0.23.0@style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../../node_modules/_css-loader@1.0.0@css-loader??ref--6-oneOf-3-1!../../../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??postcss!../../../../../node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js??ref--6-oneOf-3-3!./index.less */ "./node_modules/_css-loader@1.0.0@css-loader/index.js?!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js?!./src/views/admin/article/edit/index.less", function() {
		var newContent = __webpack_require__(/*! !../../../../../node_modules/_css-loader@1.0.0@css-loader??ref--6-oneOf-3-1!../../../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??postcss!../../../../../node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js??ref--6-oneOf-3-3!./index.less */ "./node_modules/_css-loader@1.0.0@css-loader/index.js?!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js?!./src/views/admin/article/edit/index.less");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2pzLzIuY2h1bmsuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYXJ1dG8vRGVza3RvcC9teWNvZGUvc3R1ZHktbm90ZXMvc3JjL3ZpZXdzL2FkbWluL2FydGljbGUvZWRpdC9pbmRleC5sZXNzIiwiL1VzZXJzL25hcnV0by9EZXNrdG9wL215Y29kZS9zdHVkeS1ub3Rlcy9zcmMvdmlld3MvYWRtaW4vYXJ0aWNsZS9lZGl0L2NvbXBvbmVudHMvQ2F0ZS5qc3giLCIvVXNlcnMvbmFydXRvL0Rlc2t0b3AvbXljb2RlL3N0dWR5LW5vdGVzL3NyYy92aWV3cy9hZG1pbi9hcnRpY2xlL2VkaXQvY29tcG9uZW50cy9TZWxmQ2F0ZS5qc3giLCIvVXNlcnMvbmFydXRvL0Rlc2t0b3AvbXljb2RlL3N0dWR5LW5vdGVzL3NyYy92aWV3cy9hZG1pbi9hcnRpY2xlL2VkaXQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9hZG1pbi9hcnRpY2xlL2VkaXQvaW5kZXgubGVzcz82ZGMyIiwiL1VzZXJzL25hcnV0by9EZXNrdG9wL215Y29kZS9zdHVkeS1ub3Rlcy9pZ25vcmVkIC9Vc2Vycy9uYXJ1dG8vRGVza3RvcC9teWNvZGUvc3R1ZHktbm90ZXMvbm9kZV9tb2R1bGVzL190eXBvLWpzQDEuMC4zQHR5cG8tanMgZnMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAxLjAuMEBjc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYmxvZy1mb3JtSXRlbSB7XFxuICBsaW5lLWhlaWdodDogMzZweDtcXG59XFxuLmJsb2ctZm9ybUl0ZW0gLmxhYmVsIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA4MHB4O1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uYmxvZy1mb3JtSXRlbSAudGl0bGUtaW5wdXQge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDgwcHgpO1xcbn1cXG4uQ29kZU1pcnJvci1zY3JvbGwge1xcbiAgbWluLWhlaWdodDogNTAwcHg7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IFRhZyB9IGZyb20gJ2FudGQnXG5cbmltcG9ydCBTZWxmQ2F0ZSBmcm9tICcuL1NlbGZDYXRlJ1xuXG5jb25zdCBDaGVja2FibGVUYWcgPSBUYWcuQ2hlY2thYmxlVGFnXG5cbi8qKlxuICog6YCJ5oup5YiG57G744CB5qCH562+55qE57uE5Lu2XG4gKlxuICogQGNsYXNzIFNlbGVjdENhdGVzXG4gKiBAZXh0ZW5kcyB7Q29tcG9uZW50fVxuICovXG5AY29ubmVjdChzdG9yZSA9PiBzdG9yZS5hcnRpY2xlKVxuY2xhc3MgU2VsZWN0Q2F0ZXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGNvbnN0IHsgdHlwZSwgc2hvd051bSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgbGV0IHNlbGVjdExpc3RcblxuICAgIGlmICghdGhpcy5wcm9wcy5pc0VkaXQpIHtcbiAgICAgIHRoaXMuQ29tbW9ubHlMaXN0ID0gdGhpcy5nZXRDb21tb25seUxpc3QodGhpcy5wcm9wc1tgJHt0eXBlfUxpc3RgXSwgc2hvd051bSlcbiAgICAgIHNlbGVjdExpc3QgPSB0aGlzLkNvbW1vbmx5TGlzdFswXSA/IFt0aGlzLkNvbW1vbmx5TGlzdFswXV0gOiBbXSAvLyDpu5jorqTpgInkuK3nrKzkuIDkuKogIHNlbGVjdExpc3QgPSB0aGlzLnByb3BzLmxpc3RcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlID0geyBzZWxlY3RMaXN0IH1cbiAgfVxuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHNob3dOdW06IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbGlzdDogUHJvcFR5cGVzLmFycmF5LFxuICAgIGlzRWRpdDogUHJvcFR5cGVzLmJvb2xcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdHlwZTogJ3RhZ3MnLFxuICAgIHNob3dOdW06IDEwXG4gIH1cblxuICAvKipcbiAgICog6I635Y+W5bi455So55qE5YiG57G744CB5qCH562+5YiX6KGoXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgLSDliJfooajmlbDmja5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IG51bSAtIOiOt+WPlueahOaVsOmHj1xuICAgKi9cbiAgZ2V0Q29tbW9ubHlMaXN0ID0gKGxpc3QsIG51bSA9IDEwKSA9PiB7XG4gICAgY29uc3Qgc29ydExpc3QgPSBsaXN0LnNvcnQoKGEsIGIpID0+IGIuY291bnQgLSBhLmNvdW50KS5tYXAoZCA9PiBkLm5hbWUpXG4gICAgcmV0dXJuIHNvcnRMaXN0LnNsaWNlKDAsIG51bSlcbiAgfVxuXG4gIC8vIOihjOeCueWHu+mAieS4reS6i+S7tlxuICBoYW5kbGVTZWxlY3QgPSAodmFsdWUsIGNoZWNrZWQpID0+IHtcbiAgICBjb25zdCB7IHNlbGVjdExpc3QgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBuZXh0U2VsZWN0TGlzdCA9IGNoZWNrZWQgPyBbLi4uc2VsZWN0TGlzdCwgdmFsdWVdIDogc2VsZWN0TGlzdC5maWx0ZXIodCA9PiB0ICE9PSB2YWx1ZSlcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0TGlzdDogbmV4dFNlbGVjdExpc3QgfSlcbiAgfVxuXG4gIC8vIOiOt+WPluacgOe7iOe7k+aehFxuICBnZXRSZXN1bHQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzZWxlY3RMaXN0IH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3Qgc2VsZkxpc3QgPSB0aGlzLiRzZWxmQ2F0ZVJlZi5zdGF0ZS5saXN0XG4gICAgcmV0dXJuIFsuLi5zZWxlY3RMaXN0LCAuLi5zZWxmTGlzdF1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMub25SZWYgJiYgdGhpcy5wcm9wcy5vblJlZih0aGlzKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5saXN0ICE9PSBuZXh0UHJvcHMubGlzdCAmJiBuZXh0UHJvcHMuaXNFZGl0KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0TGlzdDogbmV4dFByb3BzLmxpc3QgfSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzZWxlY3RMaXN0IH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgeyB0eXBlLCBpc0VkaXQgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLWZvcm1JdGVtXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+e3R5cGV9OiA8L3NwYW4+XG5cbiAgICAgICAge2lzRWRpdFxuICAgICAgICAgID8gdGhpcy5wcm9wcy5saXN0Lm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgICA8Q2hlY2thYmxlVGFnXG4gICAgICAgICAgICAgICAga2V5PXtpdGVtfVxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdExpc3QuaW5jbHVkZXMoaXRlbSl9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoZWNrZWQgPT4gdGhpcy5oYW5kbGVTZWxlY3QoaXRlbSwgY2hlY2tlZCl9PlxuICAgICAgICAgICAgICAgIHtpdGVtfVxuICAgICAgICAgICAgICA8L0NoZWNrYWJsZVRhZz5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgOiB0aGlzLkNvbW1vbmx5TGlzdC5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICAgICAgPENoZWNrYWJsZVRhZ1xuICAgICAgICAgICAgICAgIGtleT17aXRlbX1cbiAgICAgICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RMaXN0LmluY2x1ZGVzKGl0ZW0pfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGVja2VkID0+IHRoaXMuaGFuZGxlU2VsZWN0KGl0ZW0sIGNoZWNrZWQpfT5cbiAgICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgICAgPC9DaGVja2FibGVUYWc+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPFNlbGZDYXRlIENvbW1vbmx5TGlzdD17dGhpcy5wcm9wcy5saXN0fSByZWY9e2VsID0+ICh0aGlzLiRzZWxmQ2F0ZVJlZiA9IGVsKX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RDYXRlc1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuaW1wb3J0IHsgSW5wdXQsIFRvb2x0aXAsIEljb24sIFRhZyB9IGZyb20gJ2FudGQnXG5cbmNsYXNzIFNlbGVDYXRlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBDb21tb25seUxpc3Q6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICBsaXN0OiBbXSxcbiAgICBpbnB1dFZpc2libGU6IGZhbHNlLFxuICAgIGlucHV0VmFsdWU6ICcnXG4gIH1cblxuICBoYW5kbGVDbG9zZSA9IHJlbW92ZWRUYWcgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSB0aGlzLnN0YXRlLmxpc3QuZmlsdGVyKHQgPT4gdCAhPT0gcmVtb3ZlZFRhZylcbiAgICB0aGlzLnNldFN0YXRlKHsgbGlzdCB9KVxuICB9XG5cbiAgc2hvd0lucHV0ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZpc2libGU6IHRydWUgfSwgKCkgPT4gdGhpcy5pbnB1dC5mb2N1cygpKVxuICB9XG5cbiAgaGFuZGxlSW5wdXRDaGFuZ2UgPSBlID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXRWYWx1ZTogZS50YXJnZXQudmFsdWUgfSlcbiAgfVxuXG4gIGhhbmRsZUlucHV0Q29uZmlybSA9ICgpID0+IHtcbiAgICBsZXQgeyBpbnB1dFZhbHVlLCBsaXN0IH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgQ29tbW9ubHlMaXN0ID0gdGhpcy5wcm9wcy5Db21tb25seUxpc3RcblxuICAgIGlmIChpbnB1dFZhbHVlICYmICFsaXN0LmluY2x1ZGVzKGlucHV0VmFsdWUpICYmICFDb21tb25seUxpc3QuaW5jbHVkZXMoaW5wdXRWYWx1ZSkpIHtcbiAgICAgIGxpc3QgPSBbLi4ubGlzdCwgaW5wdXRWYWx1ZV1cbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBsaXN0LFxuICAgICAgaW5wdXRWaXNpYmxlOiBmYWxzZSxcbiAgICAgIGlucHV0VmFsdWU6ICcnXG4gICAgfSlcbiAgfVxuXG4gIHNhdmVJbnB1dFJlZiA9IGlucHV0ID0+ICh0aGlzLmlucHV0ID0gaW5wdXQpXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbGlzdCwgaW5wdXRWaXNpYmxlLCBpbnB1dFZhbHVlIH0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAge2xpc3QubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGlzTG9uZ1RhZyA9IGl0ZW0ubGVuZ3RoID4gMjBcbiAgICAgICAgICBjb25zdCB0YWdFbGVtID0gKFxuICAgICAgICAgICAgPFRhZyBrZXk9e2l0ZW19IGNsb3NhYmxlIGFmdGVyQ2xvc2U9eygpID0+IHRoaXMuaGFuZGxlQ2xvc2UoaXRlbSl9IGNvbG9yPVwiIzE4OTBmZlwiPlxuICAgICAgICAgICAgICB7aXNMb25nVGFnID8gYCR7aXRlbS5zbGljZSgwLCAyMCl9Li4uYCA6IGl0ZW19XG4gICAgICAgICAgICA8L1RhZz5cbiAgICAgICAgICApXG4gICAgICAgICAgcmV0dXJuIGlzTG9uZ1RhZyA/IChcbiAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPXtpdGVtfSBrZXk9e2l0ZW19PlxuICAgICAgICAgICAgICB7dGFnRWxlbX1cbiAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgdGFnRWxlbVxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG5cbiAgICAgICAge2lucHV0VmlzaWJsZSAmJiAoXG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICByZWY9e3RoaXMuc2F2ZUlucHV0UmVmfVxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiA3OCB9fVxuICAgICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVJbnB1dENvbmZpcm19XG4gICAgICAgICAgICBvblByZXNzRW50ZXI9e3RoaXMuaGFuZGxlSW5wdXRDb25maXJtfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgeyFpbnB1dFZpc2libGUgJiYgKFxuICAgICAgICAgIDxUYWcgb25DbGljaz17dGhpcy5zaG93SW5wdXR9IHN0eWxlPXt7IGJhY2tncm91bmQ6ICcjZmZmJywgYm9yZGVyU3R5bGU6ICdkYXNoZWQnIH19PlxuICAgICAgICAgICAgPEljb24gdHlwZT1cInBsdXNcIiAvPiBOZXcgVGFnXG4gICAgICAgICAgPC9UYWc+XG4gICAgICAgICl9XG4gICAgICA8L0ZyYWdtZW50PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlQ2F0ZVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgU2ltcGxlTURFIGZyb20gJ3NpbXBsZW1kZSdcbmltcG9ydCAnc2ltcGxlbWRlL2Rpc3Qvc2ltcGxlbWRlLm1pbi5jc3MnXG5pbXBvcnQgJy4vaW5kZXgubGVzcydcbmltcG9ydCB7IHRyYW5zbGF0ZU1hcmtkb3duIH0gZnJvbSAnQC9saWIvaW5kZXgnXG5cbmltcG9ydCB7IEJ1dHRvbiwgSW5wdXQsIE1vZGFsLCBCYWNrVG9wIH0gZnJvbSAnYW50ZCdcbmltcG9ydCBTZWxlY3RDYXRlIGZyb20gJy4vY29tcG9uZW50cy9DYXRlJ1xuXG5AY29ubmVjdChzdGF0ZSA9PiBzdGF0ZS5hcnRpY2xlKVxuY2xhc3MgRWRpdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHZhbHVlOiAnJyxcbiAgICB0aXRsZTogJycsXG4gICAgdGFnTGlzdDogW10sXG4gICAgY2F0ZWdvcnlMaXN0OiBbXSxcbiAgICBpc0VkaXQ6IGZhbHNlIC8vIOe7hOS7tueKtuaAgSDmm7TmlrDmiJbliJvlu7pcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc21kZSA9IG5ldyBTaW1wbGVNREUoe1xuICAgICAgZWxlbWVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRvcicpLmNoaWxkRWxlbWVudENvdW50LFxuICAgICAgYXV0b2ZvY3VzOiB0cnVlLFxuICAgICAgYXV0b3NhdmU6IHRydWUsXG4gICAgICBwcmV2aWV3UmVuZGVyOiB0cmFuc2xhdGVNYXJrZG93blxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5wcm9wcy5oaXN0b3J5LmxvY2F0aW9uLnN0YXRlKSB7XG4gICAgICBjb25zdCB7IGFydGljbGVJZCB9ID0gdGhpcy5wcm9wcy5oaXN0b3J5LmxvY2F0aW9uLnN0YXRlXG4gICAgICB0aGlzLmF4aW9zLmdldChgL2FydGljbGUvZ2V0LyR7YXJ0aWNsZUlkfWApLnRoZW4ocmVzID0+IHtcbiAgICAgICAgY29uc3QgeyB0aXRsZSwgdGFncywgY2F0ZWdvcmllcywgY29udGVudCB9ID0gcmVzLmRhdGFcbiAgICAgICAgdGhpcy5zbWRlLnZhbHVlKGNvbnRlbnQpXG4gICAgICAgIGNvbnN0IHRhZ0xpc3QgPSB0YWdzLm1hcChkID0+IGQubmFtZSlcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlMaXN0ID0gY2F0ZWdvcmllcy5tYXAoZCA9PiBkLm5hbWUpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0aXRsZSwgdGFnTGlzdCwgY2F0ZWdvcnlMaXN0LCBpc0VkaXQ6IHRydWUsIGFydGljbGVJZCB9KVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog6I635Y+W5bi455So55qE5YiG57G744CB5qCH562+5YiX6KGoXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgLSDliJfooajmlbDmja5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IG51bSAtIOiOt+WPlueahOaVsOmHj1xuICAgKi9cbiAgZ2V0Q29tbW9ubHlMaXN0ID0gKGxpc3QsIG51bSA9IDEwKSA9PiB7XG4gICAgY29uc3Qgc29ydExpc3QgPSBsaXN0LnNvcnQoKGEsIGIpID0+IGIuY291bnQgLSBhLmNvdW50KVxuICAgIHJldHVybiBzb3J0TGlzdC5zbGljZSgwLCBudW0pXG4gIH1cblxuICBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFncyA9IHRoaXMuJHRhZ1JlZi5nZXRSZXN1bHQoKVxuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSB0aGlzLiRjYXRlZ29yeVJlZi5nZXRSZXN1bHQoKVxuICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICB0aXRsZTogdGhpcy5zdGF0ZS50aXRsZSxcbiAgICAgIGNvbnRlbnQ6IHRoaXMuc21kZS52YWx1ZSgpLFxuICAgICAgY2F0ZWdvcmllcyxcbiAgICAgIHRhZ3NcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuaXNFZGl0KSB7XG4gICAgICB0aGlzLmF4aW9zLnB1dCgnL2FydGljbGUvdXBkYXRlJywgeyAuLi5wYXJhbXMsIGFydGljbGVJZDogdGhpcy5zdGF0ZS5hcnRpY2xlSWQgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICBNb2RhbC5jb25maXJtKHtcbiAgICAgICAgICB0aXRsZTogJ+aWh+eroOS/ruaUueaIkOWKn++8geaYr+WQpuafpeeci+ivpuaDhe+8nycsXG4gICAgICAgICAgb25PazogKCkgPT4gdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9hcnRpY2xlLyR7dGhpcy5zdGF0ZS5hcnRpY2xlSWR9YClcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXhpb3MucG9zdCgnL2FydGljbGUvY3JlYXRlJywgcGFyYW1zKS50aGVuKHJlcyA9PiB7XG4gICAgICAgIE1vZGFsLmNvbmZpcm0oe1xuICAgICAgICAgIHRpdGxlOiAn5paH56ug5Yib5bu65oiQ5Yqf77yB5piv5ZCm56uL5Y2z5p+l55yL77yfJyxcbiAgICAgICAgICBvbk9rOiAoKSA9PiB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2FydGljbGUvJHtyZXMuZGF0YS5pZH1gKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBoYW5kbGVVcGRhdGUgPSAoKSA9PiB7fVxuXG4gIGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0aXRsZSwgdmFsdWUsIGNhdGVnb3J5TGlzdCwgdGFnTGlzdCwgaXNFZGl0IH0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctZm9ybUl0ZW1cIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPuagh+mimO+8mjwvc3Bhbj5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl5paH56ug5qCH6aKYXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpdGxlLWlucHV0XCJcbiAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgICB2YWx1ZT17dGl0bGV9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxTZWxlY3RDYXRlXG4gICAgICAgICAgdHlwZT1cImNhdGVnb3J5XCJcbiAgICAgICAgICBzaG93TnVtPXsxMH1cbiAgICAgICAgICBvblJlZj17ZWwgPT4gKHRoaXMuJGNhdGVnb3J5UmVmID0gZWwpfVxuICAgICAgICAgIGxpc3Q9e2NhdGVnb3J5TGlzdH1cbiAgICAgICAgICBpc0VkaXQ9e2lzRWRpdH1cbiAgICAgICAgLz5cbiAgICAgICAgPFNlbGVjdENhdGVcbiAgICAgICAgICB0eXBlPVwidGFnXCJcbiAgICAgICAgICBzaG93TnVtPXsxMn1cbiAgICAgICAgICBvblJlZj17ZWwgPT4gKHRoaXMuJHRhZ1JlZiA9IGVsKX1cbiAgICAgICAgICBsaXN0PXt0YWdMaXN0fVxuICAgICAgICAgIGlzRWRpdD17aXNFZGl0fVxuICAgICAgICAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPHRleHRhcmVhIGlkPVwiZWRpdG9yXCIgZGVmYXVsdFZhbHVlPXt2YWx1ZX0gLz5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZVN1Ym1pdH0gdHlwZT1cInByaW1hcnlcIj5cbiAgICAgICAgICB7aXNFZGl0ID8gJ+abtOaWsCcgOiAn5Yib5bu6J31cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxCYWNrVG9wIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdFxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAxLjAuMEBjc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMy0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9fcG9zdGNzcy1sb2FkZXJAMy4wLjBAcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9wb3N0Y3NzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9fbGVzcy1sb2FkZXJANC4xLjBAbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi1vbmVPZi0zLTMhLi9pbmRleC5sZXNzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIzLjBAc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMS4wLjBAY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTMtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Bvc3Rjc3MtbG9hZGVyQDMuMC4wQHBvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cG9zdGNzcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvX2xlc3MtbG9hZGVyQDQuMS4wQGxlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMy0zIS4vaW5kZXgubGVzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAxLjAuMEBjc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMy0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9fcG9zdGNzcy1sb2FkZXJAMy4wLjBAcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9wb3N0Y3NzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9fbGVzcy1sb2FkZXJANC4xLjBAbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi1vbmVPZi0zLTMhLi9pbmRleC5sZXNzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLyogKGlnbm9yZWQpICovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFFQTtBQUdBO0FBRUE7QUFFQTs7Ozs7OztBQU9BO0FBREE7QUFBQTs7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBZ0NBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQXBDQTtBQXNDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQTNDQTtBQTZDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBbERBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFYQTtBQVlBO0FBQ0E7OztBQXNDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQURBO0FBUUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFEQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTs7OztBQXpGQTtBQXVCQTtBQUNBO0FBR0E7Ozs7Ozs7QUFMQTtBQXNFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVHQTtBQUNBO0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFNQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFhQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBS0E7Ozs7QUFoRkE7QUFDQTtBQWtGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFEQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQWlDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBOURBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBMkNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBU0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFNQTs7OztBQTVHQTtBQStHQTs7Ozs7Ozs7Ozs7QUMzSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzVDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
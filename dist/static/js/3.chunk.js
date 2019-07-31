(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/_css-loader@1.0.0@css-loader/index.js?!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js?!./src/views/admin/article/manage/index.less":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@1.0.0@css-loader??ref--6-oneOf-3-1!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??postcss!./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js??ref--6-oneOf-3-3!./src/views/admin/article/manage/index.less ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/_css-loader@1.0.0@css-loader/lib/css-base.js */ "./node_modules/_css-loader@1.0.0@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".manager .btn-edit {\n  cursor: pointer;\n  color: #1890ff;\n}\n.manager .btn-delete {\n  cursor: pointer;\n  color: #f00;\n}\n.query-form {\n  margin-bottom: 20px;\n}\n.query-form .form-select {\n  min-width: 140px;\n}\n.query-form .form-checkbox-wrap {\n  padding-left: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/views/admin/article/manage/index.jsx":
/*!**************************************************!*\
  !*** ./src/views/admin/article/manage/index.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_table_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/table/style/css */ "./node_modules/_antd@3.20.7@antd/es/table/style/css.js");
/* harmony import */ var antd_es_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/table */ "./node_modules/_antd@3.20.7@antd/es/table/index.js");
/* harmony import */ var antd_es_message_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.20.7@antd/es/message/style/css.js");
/* harmony import */ var antd_es_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.20.7@antd/es/message/index.js");
/* harmony import */ var antd_es_modal_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/es/modal/style/css */ "./node_modules/_antd@3.20.7@antd/es/modal/style/css.js");
/* harmony import */ var antd_es_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/es/modal */ "./node_modules/_antd@3.20.7@antd/es/modal/index.js");
/* harmony import */ var _Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var antd_es_divider_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/es/divider/style/css */ "./node_modules/_antd@3.20.7@antd/es/divider/style/css.js");
/* harmony import */ var antd_es_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/es/divider */ "./node_modules/_antd@3.20.7@antd/es/divider/index.js");
/* harmony import */ var antd_es_button_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.20.7@antd/es/button/style/css.js");
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.20.7@antd/es/button/index.js");
/* harmony import */ var antd_es_badge_style_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/es/badge/style/css */ "./node_modules/_antd@3.20.7@antd/es/badge/style/css.js");
/* harmony import */ var antd_es_badge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/es/badge */ "./node_modules/_antd@3.20.7@antd/es/badge/index.js");
/* harmony import */ var antd_es_tag_style_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd/es/tag/style/css */ "./node_modules/_antd@3.20.7@antd/es/tag/style/css.js");
/* harmony import */ var antd_es_tag__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd/es/tag */ "./node_modules/_antd@3.20.7@antd/es/tag/index.js");
/* harmony import */ var _Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react */ "./node_modules/_react@16.8.6@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./index.less */ "./src/views/admin/article/manage/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-redux */ "./node_modules/_react-redux@6.0.1@react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-router-dom */ "./node_modules/_react-router-dom@4.3.1@react-router-dom/es/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @/lib */ "./src/lib/index.js");
/* harmony import */ var _queryForm__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./queryForm */ "./src/views/admin/article/manage/queryForm.jsx");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! moment */ "./node_modules/_moment@2.24.0@moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_27__);






















var _dec, _class, _temp;








var Manager = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_23__["connect"])(function (state) {
  return {
    colorList: state.common.colorList,
    tagList: state.article.tagList
  };
}), _dec(_class = (_temp =
/*#__PURE__*/
function (_Component) {
  Object(_Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_20__["default"])(Manager, _Component);

  function Manager() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_16__["default"])(this, Manager);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_18__["default"])(this, (_getPrototypeOf2 = Object(_Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_19__["default"])(Manager)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      colorMap: {},
      list: [],
      pagination: {},
      total: 0,
      loading: false
    };

    _this.getColumns = function () {
      // const { colorMap } = this.state
      return [{
        title: '标题',
        dataIndex: 'title'
      }, {
        title: '标签',
        dataIndex: 'tags',
        render: function render(text, record) {
          return text.map(function (d) {
            return react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_es_tag__WEBPACK_IMPORTED_MODULE_15__["default"], {
              color: _this.state.colorMap[d.name],
              key: d.name
            }, d.name);
          });
        }
      }, {
        title: '分类',
        dataIndex: 'categories',
        render: function render(text, record) {
          return text.map(function (d) {
            return react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_es_tag__WEBPACK_IMPORTED_MODULE_15__["default"], {
              color: '#2db7f5',
              key: d.name
            }, d.name);
          });
        }
      }, {
        title: '评论数',
        dataIndex: 'comments',
        render: function render(text) {
          var count = Object(_lib__WEBPACK_IMPORTED_MODULE_25__["getCommentsCount"])(text);
          return count !== 0 ? react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_es_badge__WEBPACK_IMPORTED_MODULE_13__["default"], {
            count: count,
            style: {
              backgroundColor: '#52c41a'
            }
          }) : count;
        },
        sorter: function sorter(a, b) {
          return Object(_lib__WEBPACK_IMPORTED_MODULE_25__["getCommentsCount"])(a.comments) - Object(_lib__WEBPACK_IMPORTED_MODULE_25__["getCommentsCount"])(b.comments);
        }
      }, {
        title: '发布时间',
        dataIndex: 'createdAt',
        sorter: function sorter(a, b) {
          return moment__WEBPACK_IMPORTED_MODULE_27___default()(a.createdAt).isBefore(b.createdAt) ? 1 : -1;
        }
      }, {
        title: '修改时间',
        dataIndex: 'updatedAt',
        sorter: function sorter(a, b) {
          return moment__WEBPACK_IMPORTED_MODULE_27___default()(a.updatedAt).isBefore(b.updatedAt) ? 1 : -1;
        }
      }, {
        title: '置顶',
        dataIndex: 'showOrder',
        render: function render(text, record) {
          return text ? react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_11__["default"], {
            size: "small",
            type: "danger",
            onClick: function onClick() {
              return _this.setTop(record);
            }
          }, "\u53D6\u6D88\u7F6E\u9876") : react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_11__["default"], {
            size: "small",
            type: "dashed",
            onClick: function onClick() {
              return _this.setTop(record);
            }
          }, "\u7F6E\u9876\u6587\u7AE0");
        }
      }, {
        title: '操作',
        render: function render(text, record) {
          return react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("div", {
            className: "action"
          }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_24__["Link"], {
            to: "/article/".concat(record.id)
          }, "\u67E5\u770B"), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_es_divider__WEBPACK_IMPORTED_MODULE_9__["default"], {
            type: "vertical"
          }), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_24__["Link"], {
            to: {
              pathname: '/admin/articles/edit',
              state: {
                articleId: record.id
              }
            }
          }, "\u7F16\u8F91"), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_es_divider__WEBPACK_IMPORTED_MODULE_9__["default"], {
            type: "vertical"
          }), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("span", {
            className: "btn-delete",
            onClick: function onClick() {
              return _this.handleDelete(record.id, record.title);
            }
          }, "\u5220\u9664"));
        }
      }];
    };

    _this.setTop = function (record) {
      var showOrder = record.showOrder ? 0 : 1;

      _this.axios.put('/article/update', {
        articleId: record.id,
        showOrder: showOrder
      }).then(function () {
        var list = _this.state.list;
        var target = list.find(function (d) {
          return d.id === record.id;
        });
        target.showOrder = showOrder;

        _this.setState({
          list: list
        });
      });
    };

    _this.fetchList = function (_ref) {
      var _ref$current = _ref.current,
          current = _ref$current === void 0 ? 1 : _ref$current,
          _ref$pageSize = _ref.pageSize,
          pageSize = _ref$pageSize === void 0 ? 10 : _ref$pageSize,
          query = Object(_Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, ["current", "pageSize"]);

      _this.setState({
        loading: true
      });

      _this.axios.get('/article/getList', {
        params: Object(_Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_6__["default"])({
          page: current,
          pageSize: pageSize
        }, query)
      }).then(function (res) {
        var pagination = {
          current: current,
          pageSize: pageSize,
          total: res.count
        };

        _this.setState({
          list: res.rows,
          pagination: pagination,
          loading: false
        });
      });
    };

    _this.handleChange = function (pagination) {
      _this.fetchList(Object(_Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_6__["default"])({}, pagination, _this.state.query));
    };

    _this.handleDelete = function (articleId, title) {
      antd_es_modal__WEBPACK_IMPORTED_MODULE_5__["default"].confirm({
        title: '您确认删除该文章?，此操作不可恢复！',
        content: "\u6587\u7AE0\uFF1A ".concat(title, " "),
        onOk: function onOk() {
          _this.axios.delete('/article/delete', {
            params: {
              articleId: articleId
            }
          }).then(function (res) {
            if (res.code === 200) {
              _this.fetchList(_this.state.pagination);

              antd_es_message__WEBPACK_IMPORTED_MODULE_3__["default"].success(res.message);
            }
          });
        }
      });
    };

    _this.getQuery = function (query) {
      _this.setState({
        query: query
      });

      _this.fetchList(Object(_Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_6__["default"])({}, query, {
        current: 1
      }));
    };

    return _this;
  }

  Object(_Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_17__["default"])(Manager, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          colorList = _this$props.colorList,
          tagList = _this$props.tagList;
      var colorMap = {};
      tagList.forEach(function (item) {
        colorMap[item.name] = colorList[Object(_lib__WEBPACK_IMPORTED_MODULE_25__["random"])(colorList)];
      });
      this.setState({
        colorMap: colorMap
      }, function () {
        return _this2.fetchList({
          page: 1
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          list = _this$state.list,
          pagination = _this$state.pagination,
          loading = _this$state.loading;
      return react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("div", {
        className: "manager"
      }, react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(_queryForm__WEBPACK_IMPORTED_MODULE_26__["default"], {
        getQuery: this.getQuery
      }), react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(antd_es_table__WEBPACK_IMPORTED_MODULE_1__["default"], {
        rowKey: "id",
        bordered: true,
        loading: loading,
        columns: this.getColumns(),
        dataSource: list,
        pagination: pagination,
        onChange: this.handleChange
      }));
    }
  }]);

  return Manager;
}(react__WEBPACK_IMPORTED_MODULE_21__["Component"]), _temp)) || _class);
/* harmony default export */ __webpack_exports__["default"] = (Manager);

/***/ }),

/***/ "./src/views/admin/article/manage/index.less":
/*!***************************************************!*\
  !*** ./src/views/admin/article/manage/index.less ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/_css-loader@1.0.0@css-loader??ref--6-oneOf-3-1!../../../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??postcss!../../../../../node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js??ref--6-oneOf-3-3!./index.less */ "./node_modules/_css-loader@1.0.0@css-loader/index.js?!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js?!./src/views/admin/article/manage/index.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/_style-loader@0.23.0@style-loader/lib/addStyles.js */ "./node_modules/_style-loader@0.23.0@style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../../node_modules/_css-loader@1.0.0@css-loader??ref--6-oneOf-3-1!../../../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??postcss!../../../../../node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js??ref--6-oneOf-3-3!./index.less */ "./node_modules/_css-loader@1.0.0@css-loader/index.js?!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js?!./src/views/admin/article/manage/index.less", function() {
		var newContent = __webpack_require__(/*! !../../../../../node_modules/_css-loader@1.0.0@css-loader??ref--6-oneOf-3-1!../../../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??postcss!../../../../../node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js??ref--6-oneOf-3-3!./index.less */ "./node_modules/_css-loader@1.0.0@css-loader/index.js?!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js?!./src/views/admin/article/manage/index.less");

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

/***/ "./src/views/admin/article/manage/queryForm.jsx":
/*!******************************************************!*\
  !*** ./src/views/admin/article/manage/queryForm.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_form_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/form/style/css */ "./node_modules/_antd@3.20.7@antd/es/form/style/css.js");
/* harmony import */ var antd_es_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/form */ "./node_modules/_antd@3.20.7@antd/es/form/index.js");
/* harmony import */ var antd_es_button_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.20.7@antd/es/button/style/css.js");
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.20.7@antd/es/button/index.js");
/* harmony import */ var antd_es_checkbox_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/es/checkbox/style/css */ "./node_modules/_antd@3.20.7@antd/es/checkbox/style/css.js");
/* harmony import */ var antd_es_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/es/checkbox */ "./node_modules/_antd@3.20.7@antd/es/checkbox/index.js");
/* harmony import */ var antd_es_input_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@3.20.7@antd/es/input/style/css.js");
/* harmony import */ var antd_es_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@3.20.7@antd/es/input/index.js");
/* harmony import */ var _Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var antd_es_select_style_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/es/select/style/css */ "./node_modules/_antd@3.20.7@antd/es/select/style/css.js");
/* harmony import */ var antd_es_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd/es/select */ "./node_modules/_antd@3.20.7@antd/es/select/index.js");
/* harmony import */ var antd_es_date_picker_style_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd/es/date-picker/style/css */ "./node_modules/_antd@3.20.7@antd/es/date-picker/style/css.js");
/* harmony import */ var antd_es_date_picker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antd/es/date-picker */ "./node_modules/_antd@3.20.7@antd/es/date-picker/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react */ "./node_modules/_react@16.8.6@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _components_helper_FormBuilder__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/components/helper/FormBuilder */ "./src/components/helper/FormBuilder.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-redux */ "./node_modules/_react-redux@6.0.1@react-redux/es/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! moment */ "./node_modules/_moment@2.24.0@moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_20__);


















var _dec, _class, _temp;





var RangePicker = antd_es_date_picker__WEBPACK_IMPORTED_MODULE_16__["default"].RangePicker;
var Option = antd_es_select__WEBPACK_IMPORTED_MODULE_14__["default"].Option;
var QueryForm = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_19__["connect"])(function (state) {
  return state.article;
}), _dec(_class = (_temp =
/*#__PURE__*/
function (_Component) {
  Object(_Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_12__["default"])(QueryForm, _Component);

  function QueryForm() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, QueryForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10__["default"])(this, (_getPrototypeOf2 = Object(_Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11__["default"])(QueryForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.getFormMeta = function () {
      return {
        colon: true,
        elements: [{
          key: 'title',
          label: '标题',
          widget: react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(antd_es_input__WEBPACK_IMPORTED_MODULE_7__["default"], {
            placeholder: "\u8BF7\u8F93\u5165\u6587\u7AE0\u6807\u9898"
          })
        }, {
          key: 'tag',
          label: '标签',
          widget: react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(antd_es_select__WEBPACK_IMPORTED_MODULE_14__["default"], {
            className: "form-select",
            allowClear: true
          }, _this.props.tagList.map(function (item) {
            return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(Option, {
              key: item.name,
              value: item.name
            }, item.name);
          }))
        }, {
          key: 'category',
          label: '分类',
          widget: react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(antd_es_select__WEBPACK_IMPORTED_MODULE_14__["default"], {
            className: "form-select",
            allowClear: true
          }, _this.props.categoryList.map(function (item) {
            return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(Option, {
              key: item.name,
              value: item.name
            }, item.name);
          }))
        }, {
          key: 'fetchTop',
          label: '置顶文章',
          labelCol: 20,
          wrapperCol: 4,
          formItemProps: {
            className: 'form-checkbox-wrap'
          },
          widget: react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(antd_es_checkbox__WEBPACK_IMPORTED_MODULE_5__["default"], null) // {
          //   key: 'rangTime',
          //   label: '创建时间',
          //   widget: (
          //     <RangePicker
          //       ranges={{
          //         Today: [moment(), moment()],
          //         'This Month': [moment().startOf('month'), moment().endOf('month')]
          //       }}
          //       format="YYYY/MM/DD HH:mm:ss"
          //     />
          //   )
          // }

        }]
      };
    };

    _this.handleSubmit = function (e) {
      e.preventDefault();

      _this.props.form.validateFieldsAndScroll(function (errors, values) {
        if (errors) return;
        console.log('submit form: ', values);

        _this.props.getQuery(values);
      });
    };

    return _this;
  }

  Object(_Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(QueryForm, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
        className: "query-form"
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(antd_es_form__WEBPACK_IMPORTED_MODULE_1__["default"], {
        layout: "inline",
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(_components_helper_FormBuilder__WEBPACK_IMPORTED_MODULE_18__["default"], {
        meta: this.getFormMeta(),
        form: this.props.form
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "primary",
        htmlType: "submit"
      }, "\u68C0\u7D22"))));
    }
  }]);

  return QueryForm;
}(react__WEBPACK_IMPORTED_MODULE_17__["Component"]), _temp)) || _class);
/* harmony default export */ __webpack_exports__["default"] = (antd_es_form__WEBPACK_IMPORTED_MODULE_1__["default"].create()(QueryForm));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2pzLzMuY2h1bmsuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYXJ1dG8vRGVza3RvcC9teWNvZGUvc3R1ZHktbm90ZXMvc3JjL3ZpZXdzL2FkbWluL2FydGljbGUvbWFuYWdlL2luZGV4Lmxlc3MiLCIvVXNlcnMvbmFydXRvL0Rlc2t0b3AvbXljb2RlL3N0dWR5LW5vdGVzL3NyYy92aWV3cy9hZG1pbi9hcnRpY2xlL21hbmFnZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FkbWluL2FydGljbGUvbWFuYWdlL2luZGV4Lmxlc3M/NjYzNyIsIi9Vc2Vycy9uYXJ1dG8vRGVza3RvcC9teWNvZGUvc3R1ZHktbm90ZXMvc3JjL3ZpZXdzL2FkbWluL2FydGljbGUvbWFuYWdlL3F1ZXJ5Rm9ybS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAxLjAuMEBjc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubWFuYWdlciAuYnRuLWVkaXQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICMxODkwZmY7XFxufVxcbi5tYW5hZ2VyIC5idG4tZGVsZXRlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjZjAwO1xcbn1cXG4ucXVlcnktZm9ybSB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4ucXVlcnktZm9ybSAuZm9ybS1zZWxlY3Qge1xcbiAgbWluLXdpZHRoOiAxNDBweDtcXG59XFxuLnF1ZXJ5LWZvcm0gLmZvcm0tY2hlY2tib3gtd3JhcCB7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCAnLi9pbmRleC5sZXNzJ1xuXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuaW1wb3J0IHsgcmFuZG9tLCBnZXRDb21tZW50c0NvdW50IH0gZnJvbSAnQC9saWInXG5pbXBvcnQgeyBUYWJsZSwgRGl2aWRlciwgVGFnLCBNb2RhbCwgbWVzc2FnZSwgQmFkZ2UsIEJ1dHRvbiB9IGZyb20gJ2FudGQnXG5pbXBvcnQgUXVlcnlGb3JtIGZyb20gJy4vcXVlcnlGb3JtJ1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5cbkBjb25uZWN0KHN0YXRlID0+ICh7XG4gIGNvbG9yTGlzdDogc3RhdGUuY29tbW9uLmNvbG9yTGlzdCxcbiAgdGFnTGlzdDogc3RhdGUuYXJ0aWNsZS50YWdMaXN0XG59KSlcbmNsYXNzIE1hbmFnZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBjb2xvck1hcDoge30sXG4gICAgbGlzdDogW10sXG4gICAgcGFnaW5hdGlvbjoge30sXG4gICAgdG90YWw6IDAsXG4gICAgbG9hZGluZzogZmFsc2VcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgY29sb3JMaXN0LCB0YWdMaXN0IH0gPSB0aGlzLnByb3BzXG4gICAgbGV0IGNvbG9yTWFwID0ge31cbiAgICB0YWdMaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBjb2xvck1hcFtpdGVtLm5hbWVdID0gY29sb3JMaXN0W3JhbmRvbShjb2xvckxpc3QpXVxuICAgIH0pXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvbG9yTWFwIH0sICgpID0+IHRoaXMuZmV0Y2hMaXN0KHsgcGFnZTogMSB9KSlcbiAgfVxuXG4gIGdldENvbHVtbnMgPSAoKSA9PiB7XG4gICAgLy8gY29uc3QgeyBjb2xvck1hcCB9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn5qCH6aKYJyxcbiAgICAgICAgZGF0YUluZGV4OiAndGl0bGUnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+agh+etvicsXG4gICAgICAgIGRhdGFJbmRleDogJ3RhZ3MnLFxuICAgICAgICByZW5kZXI6ICh0ZXh0LCByZWNvcmQpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGV4dC5tYXAoZCA9PiAoXG4gICAgICAgICAgICA8VGFnIGNvbG9yPXt0aGlzLnN0YXRlLmNvbG9yTWFwW2QubmFtZV19IGtleT17ZC5uYW1lfT5cbiAgICAgICAgICAgICAge2QubmFtZX1cbiAgICAgICAgICAgIDwvVGFnPlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn5YiG57G7JyxcbiAgICAgICAgZGF0YUluZGV4OiAnY2F0ZWdvcmllcycsXG4gICAgICAgIHJlbmRlcjogKHRleHQsIHJlY29yZCkgPT4ge1xuICAgICAgICAgIHJldHVybiB0ZXh0Lm1hcChkID0+IChcbiAgICAgICAgICAgIDxUYWcgY29sb3I9eycjMmRiN2Y1J30ga2V5PXtkLm5hbWV9PlxuICAgICAgICAgICAgICB7ZC5uYW1lfVxuICAgICAgICAgICAgPC9UYWc+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfor4TorrrmlbAnLFxuICAgICAgICBkYXRhSW5kZXg6ICdjb21tZW50cycsXG4gICAgICAgIHJlbmRlcjogdGV4dCA9PiB7XG4gICAgICAgICAgY29uc3QgY291bnQgPSBnZXRDb21tZW50c0NvdW50KHRleHQpXG4gICAgICAgICAgcmV0dXJuIGNvdW50ICE9PSAwID8gPEJhZGdlIGNvdW50PXtjb3VudH0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzUyYzQxYScgfX0gLz4gOiBjb3VudFxuICAgICAgICB9LFxuICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiBnZXRDb21tZW50c0NvdW50KGEuY29tbWVudHMpIC0gZ2V0Q29tbWVudHNDb3VudChiLmNvbW1lbnRzKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICflj5HluIPml7bpl7QnLFxuICAgICAgICBkYXRhSW5kZXg6ICdjcmVhdGVkQXQnLFxuICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiAobW9tZW50KGEuY3JlYXRlZEF0KS5pc0JlZm9yZShiLmNyZWF0ZWRBdCkgPyAxIDogLTEpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+S/ruaUueaXtumXtCcsXG4gICAgICAgIGRhdGFJbmRleDogJ3VwZGF0ZWRBdCcsXG4gICAgICAgIHNvcnRlcjogKGEsIGIpID0+IChtb21lbnQoYS51cGRhdGVkQXQpLmlzQmVmb3JlKGIudXBkYXRlZEF0KSA/IDEgOiAtMSlcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn572u6aG2JyxcbiAgICAgICAgZGF0YUluZGV4OiAnc2hvd09yZGVyJyxcbiAgICAgICAgcmVuZGVyOiAodGV4dCwgcmVjb3JkKSA9PlxuICAgICAgICAgIHRleHQgPyAoXG4gICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiIHR5cGU9XCJkYW5nZXJcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFRvcChyZWNvcmQpfT5cbiAgICAgICAgICAgICAg5Y+W5raI572u6aG2XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21hbGxcIiB0eXBlPVwiZGFzaGVkXCIgb25DbGljaz17KCkgPT4gdGhpcy5zZXRUb3AocmVjb3JkKX0+XG4gICAgICAgICAgICAgIOe9rumhtuaWh+eroFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfmk43kvZwnLFxuICAgICAgICByZW5kZXI6ICh0ZXh0LCByZWNvcmQpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb25cIj5cbiAgICAgICAgICAgICAgPExpbmsgdG89e2AvYXJ0aWNsZS8ke3JlY29yZC5pZH1gfT7mn6XnnIs8L0xpbms+XG4gICAgICAgICAgICAgIDxEaXZpZGVyIHR5cGU9XCJ2ZXJ0aWNhbFwiIC8+XG4gICAgICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9XCJidG4tZWRpdFwiPue8lui+kTwvc3Bhbj4gKi99XG4gICAgICAgICAgICAgIDxMaW5rIHRvPXt7IHBhdGhuYW1lOiAnL2FkbWluL2FydGljbGVzL2VkaXQnLCBzdGF0ZTogeyBhcnRpY2xlSWQ6IHJlY29yZC5pZCB9IH19Pue8lui+kTwvTGluaz5cbiAgICAgICAgICAgICAgPERpdmlkZXIgdHlwZT1cInZlcnRpY2FsXCIgLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnRuLWRlbGV0ZVwiIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRGVsZXRlKHJlY29yZC5pZCwgcmVjb3JkLnRpdGxlKX0+XG4gICAgICAgICAgICAgICAg5Yig6ZmkXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfVxuXG4gIC8qKlxuICAgKiDorr7nva7nva7pobbmlofnq6BcbiAgICpcbiAgICogQG1lbWJlcm9mIE1hbmFnZXJcbiAgICovXG4gIHNldFRvcCA9IHJlY29yZCA9PiB7XG4gICAgY29uc3Qgc2hvd09yZGVyID0gcmVjb3JkLnNob3dPcmRlciA/IDAgOiAxXG4gICAgdGhpcy5heGlvcy5wdXQoJy9hcnRpY2xlL3VwZGF0ZScsIHtcbiAgICAgIGFydGljbGVJZDogcmVjb3JkLmlkLFxuICAgICAgc2hvd09yZGVyXG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBsaXN0ID0gdGhpcy5zdGF0ZS5saXN0XG4gICAgICBjb25zdCB0YXJnZXQgPSBsaXN0LmZpbmQoZCA9PiBkLmlkID09PSByZWNvcmQuaWQpXG4gICAgICB0YXJnZXQuc2hvd09yZGVyID0gc2hvd09yZGVyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbGlzdCB9KVxuICAgIH0pXG4gIH1cblxuICBmZXRjaExpc3QgPSAoeyBjdXJyZW50ID0gMSwgcGFnZVNpemUgPSAxMCwgLi4ucXVlcnkgfSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pXG5cbiAgICB0aGlzLmF4aW9zLmdldCgnL2FydGljbGUvZ2V0TGlzdCcsIHsgcGFyYW1zOiB7IHBhZ2U6IGN1cnJlbnQsIHBhZ2VTaXplLCAuLi5xdWVyeSB9IH0pLnRoZW4ocmVzID0+IHtcbiAgICAgIGNvbnN0IHBhZ2luYXRpb24gPSB7XG4gICAgICAgIGN1cnJlbnQsXG4gICAgICAgIHBhZ2VTaXplLFxuICAgICAgICB0b3RhbDogcmVzLmNvdW50XG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbGlzdDogcmVzLnJvd3MsIHBhZ2luYXRpb24sIGxvYWRpbmc6IGZhbHNlIH0pXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IHBhZ2luYXRpb24gPT4ge1xuICAgIHRoaXMuZmV0Y2hMaXN0KHsgLi4ucGFnaW5hdGlvbiwgLi4udGhpcy5zdGF0ZS5xdWVyeSB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSAtIOaWh+eroCBpZFxuICAgKi9cbiAgaGFuZGxlRGVsZXRlID0gKGFydGljbGVJZCwgdGl0bGUpID0+IHtcbiAgICBNb2RhbC5jb25maXJtKHtcbiAgICAgIHRpdGxlOiAn5oKo56Gu6K6k5Yig6Zmk6K+l5paH56ugP++8jOatpOaTjeS9nOS4jeWPr+aBouWkje+8gScsXG4gICAgICBjb250ZW50OiBg5paH56ug77yaICR7dGl0bGV9IGAsXG4gICAgICBvbk9rOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuYXhpb3MuZGVsZXRlKCcvYXJ0aWNsZS9kZWxldGUnLCB7IHBhcmFtczogeyBhcnRpY2xlSWQgfSB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgaWYgKHJlcy5jb2RlID09PSAyMDApIHtcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hMaXN0KHRoaXMuc3RhdGUucGFnaW5hdGlvbilcbiAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhyZXMubWVzc2FnZSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGdldFF1ZXJ5ID0gcXVlcnkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBxdWVyeSB9KVxuXG4gICAgdGhpcy5mZXRjaExpc3QoeyAuLi5xdWVyeSwgY3VycmVudDogMSB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbGlzdCwgcGFnaW5hdGlvbiwgbG9hZGluZyB9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hbmFnZXJcIj5cbiAgICAgICAgPFF1ZXJ5Rm9ybSBnZXRRdWVyeT17dGhpcy5nZXRRdWVyeX0gLz5cbiAgICAgICAgPFRhYmxlXG4gICAgICAgICAgcm93S2V5PVwiaWRcIlxuICAgICAgICAgIGJvcmRlcmVkXG4gICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICAgICAgICBjb2x1bW5zPXt0aGlzLmdldENvbHVtbnMoKX1cbiAgICAgICAgICBkYXRhU291cmNlPXtsaXN0fVxuICAgICAgICAgIHBhZ2luYXRpb249e3BhZ2luYXRpb259XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hbmFnZXJcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMS4wLjBAY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTMtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Bvc3Rjc3MtbG9hZGVyQDMuMC4wQHBvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cG9zdGNzcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvX2xlc3MtbG9hZGVyQDQuMS4wQGxlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMy0zIS4vaW5kZXgubGVzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMy4wQHN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDEuMC4wQGNzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0zLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19wb3N0Y3NzLWxvYWRlckAzLjAuMEBwb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3Bvc3Rjc3MhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19sZXNzLWxvYWRlckA0LjEuMEBsZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTMtMyEuL2luZGV4Lmxlc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMS4wLjBAY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTMtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Bvc3Rjc3MtbG9hZGVyQDMuMC4wQHBvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cG9zdGNzcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvX2xlc3MtbG9hZGVyQDQuMS4wQGxlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMy0zIS4vaW5kZXgubGVzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBJbnB1dCwgU2VsZWN0LCBEYXRlUGlja2VyLCBDaGVja2JveCwgUmFkaW8gfSBmcm9tICdhbnRkJ1xuaW1wb3J0IEZvcm1CdWlsZGVyIGZyb20gJ0AvY29tcG9uZW50cy9oZWxwZXIvRm9ybUJ1aWxkZXInXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcblxuY29uc3QgUmFuZ2VQaWNrZXIgPSBEYXRlUGlja2VyLlJhbmdlUGlja2VyXG5jb25zdCBPcHRpb24gPSBTZWxlY3QuT3B0aW9uXG5cbkBjb25uZWN0KHN0YXRlID0+IHN0YXRlLmFydGljbGUpXG5jbGFzcyBRdWVyeUZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGdldFF1ZXJ5OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gIH1cblxuICBnZXRGb3JtTWV0YSA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgY29sb246IHRydWUsXG4gICAgICBlbGVtZW50czogW1xuICAgICAgICB7XG4gICAgICAgICAga2V5OiAndGl0bGUnLFxuICAgICAgICAgIGxhYmVsOiAn5qCH6aKYJyxcbiAgICAgICAgICB3aWRnZXQ6IDxJbnB1dCBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeaWh+eroOagh+mimFwiIC8+XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6ICd0YWcnLFxuICAgICAgICAgIGxhYmVsOiAn5qCH562+JyxcbiAgICAgICAgICB3aWRnZXQ6IChcbiAgICAgICAgICAgIDxTZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3RcIiBhbGxvd0NsZWFyPlxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50YWdMaXN0Lm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgICA8T3B0aW9uIGtleT17aXRlbS5uYW1lfSB2YWx1ZT17aXRlbS5uYW1lfT5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgKVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiAnY2F0ZWdvcnknLFxuICAgICAgICAgIGxhYmVsOiAn5YiG57G7JyxcbiAgICAgICAgICB3aWRnZXQ6IChcbiAgICAgICAgICAgIDxTZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3RcIiBhbGxvd0NsZWFyPlxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jYXRlZ29yeUxpc3QubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgIDxPcHRpb24ga2V5PXtpdGVtLm5hbWV9IHZhbHVlPXtpdGVtLm5hbWV9PlxuICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICApXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6ICdmZXRjaFRvcCcsXG4gICAgICAgICAgbGFiZWw6ICfnva7pobbmlofnq6AnLFxuICAgICAgICAgIGxhYmVsQ29sOiAyMCxcbiAgICAgICAgICB3cmFwcGVyQ29sOiA0LFxuICAgICAgICAgIGZvcm1JdGVtUHJvcHM6IHsgY2xhc3NOYW1lOiAnZm9ybS1jaGVja2JveC13cmFwJyB9LFxuICAgICAgICAgIHdpZGdldDogPENoZWNrYm94IC8+XG4gICAgICAgIH1cbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgIGtleTogJ3JhbmdUaW1lJyxcbiAgICAgICAgLy8gICBsYWJlbDogJ+WIm+W7uuaXtumXtCcsXG4gICAgICAgIC8vICAgd2lkZ2V0OiAoXG4gICAgICAgIC8vICAgICA8UmFuZ2VQaWNrZXJcbiAgICAgICAgLy8gICAgICAgcmFuZ2VzPXt7XG4gICAgICAgIC8vICAgICAgICAgVG9kYXk6IFttb21lbnQoKSwgbW9tZW50KCldLFxuICAgICAgICAvLyAgICAgICAgICdUaGlzIE1vbnRoJzogW21vbWVudCgpLnN0YXJ0T2YoJ21vbnRoJyksIG1vbWVudCgpLmVuZE9mKCdtb250aCcpXVxuICAgICAgICAvLyAgICAgICB9fVxuICAgICAgICAvLyAgICAgICBmb3JtYXQ9XCJZWVlZL01NL0REIEhIOm1tOnNzXCJcbiAgICAgICAgLy8gICAgIC8+XG4gICAgICAgIC8vICAgKVxuICAgICAgICAvLyB9XG4gICAgICBdXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU3VibWl0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5wcm9wcy5mb3JtLnZhbGlkYXRlRmllbGRzQW5kU2Nyb2xsKChlcnJvcnMsIHZhbHVlcykgPT4ge1xuICAgICAgaWYgKGVycm9ycykgcmV0dXJuXG4gICAgICBjb25zb2xlLmxvZygnc3VibWl0IGZvcm06ICcsIHZhbHVlcylcbiAgICAgIHRoaXMucHJvcHMuZ2V0UXVlcnkodmFsdWVzKVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVlcnktZm9ybVwiPlxuICAgICAgICA8Rm9ybSBsYXlvdXQ9XCJpbmxpbmVcIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxGb3JtQnVpbGRlciBtZXRhPXt0aGlzLmdldEZvcm1NZXRhKCl9IGZvcm09e3RoaXMucHJvcHMuZm9ybX0+XG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAg5qOA57SiXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0Zvcm1CdWlsZGVyPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybS5jcmVhdGUoKShRdWVyeUZvcm0pXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBTUE7QUFKQTtBQUNBO0FBQ0E7QUFGQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFnQkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBS0E7QUFUQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUtBO0FBVEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5BO0FBSEE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFmQTtBQWtCQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7QUFySkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7QUErSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBV0E7Ozs7QUEvS0E7QUFrTEE7Ozs7Ozs7Ozs7O0FDak1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFEQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFMQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFMQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJCQTtBQWxDQTtBQXlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFPQTs7OztBQXRGQTtBQXlGQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
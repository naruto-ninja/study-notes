(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/_css-loader@1.0.0@css-loader/index.js?!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js?!./src/views/admin/login/index.less":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@1.0.0@css-loader??ref--6-oneOf-3-1!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??postcss!./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js??ref--6-oneOf-3-3!./src/views/admin/login/index.less ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../node_modules/_css-loader@1.0.0@css-loader/lib/url/escape.js */ "./node_modules/_css-loader@1.0.0@css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../node_modules/_css-loader@1.0.0@css-loader/lib/css-base.js */ "./node_modules/_css-loader@1.0.0@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-container {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  overflow: auto;\n  background: url(" + escape(__webpack_require__(/*! ../../../assets/login_bg.svg */ "./src/assets/login_bg.svg")) + ");\n  background-repeat: no-repeat;\n  background-position: center 110px;\n  background-size: 100%;\n  background-color: #f0f2f5;\n  align-items: center;\n  /*垂直居中*/\n  justify-content: center;\n  /*水平居中*/\n}\n.login-container .login-form {\n  width: 368px;\n  margin-top: -200px;\n}\n.login-container .login-form .App-logo {\n  -webkit-animation: App-logo-spin infinite 20s linear;\n          animation: App-logo-spin infinite 20s linear;\n}\n@-webkit-keyframes App-logo-spin {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes App-logo-spin {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/assets/login_bg.svg":
/*!*********************************!*\
  !*** ./src/assets/login_bg.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/login_bg.5825f033.svg";

/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo.5d5d9eef.svg";

/***/ }),

/***/ "./src/views/admin/login/index.jsx":
/*!*****************************************!*\
  !*** ./src/views/admin/login/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_button_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.20.7@antd/es/button/style/css.js");
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.20.7@antd/es/button/index.js");
/* harmony import */ var antd_es_input_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@3.20.7@antd/es/input/style/css.js");
/* harmony import */ var antd_es_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@3.20.7@antd/es/input/index.js");
/* harmony import */ var antd_es_icon_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.20.7@antd/es/icon/style/css.js");
/* harmony import */ var antd_es_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/es/icon */ "./node_modules/_antd@3.20.7@antd/es/icon/index.js");
/* harmony import */ var _Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_es_message_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.20.7@antd/es/message/style/css.js");
/* harmony import */ var antd_es_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.20.7@antd/es/message/index.js");
/* harmony import */ var _Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/_react@16.8.6@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./index.less */ "./src/views/admin/login/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-router-dom */ "./node_modules/_react-router-dom@4.3.1@react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-redux */ "./node_modules/_react-redux@6.0.1@react-redux/es/index.js");
/* harmony import */ var _redux_user_actions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/redux/user/actions */ "./src/redux/user/actions.js");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @/assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_assets_logo_svg__WEBPACK_IMPORTED_MODULE_21__);

















var _dec, _class, _temp;







var Login = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_19__["connect"])(function (state) {
  return state.user;
}, {
  login: _redux_user_actions__WEBPACK_IMPORTED_MODULE_20__["login"]
}), Object(react_router_dom__WEBPACK_IMPORTED_MODULE_18__["withRouter"])(_class = _dec(_class = (_temp =
/*#__PURE__*/
function (_Component) {
  Object(_Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_15__["default"])(Login, _Component);

  function Login() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_11__["default"])(this, Login);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_13__["default"])(this, (_getPrototypeOf2 = Object(_Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_14__["default"])(Login)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      account: '',
      password: ''
    };

    _this.handleChange = function (e) {
      _this.setState(Object(_Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])({}, e.target.name, e.target.value));
    };

    _this.handleSubmit =
    /*#__PURE__*/
    Object(_Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__["default"])(
    /*#__PURE__*/
    _Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee() {
      return _Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.props.login(_this.state);

            case 2:
              if (_this.props.auth === 1) {
                _this.props.history.push('/admin');

                antd_es_message__WEBPACK_IMPORTED_MODULE_8__["default"].success('登录成功');
              } else if (_this.props.auth === 2) {
                antd_es_message__WEBPACK_IMPORTED_MODULE_8__["default"].warning('您的权限不足！');
              }

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _this;
  }

  Object(_Users_naruto_Desktop_mycode_study_notes_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_12__["default"])(Login, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", {
        className: "login-container"
      }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", {
        className: "login-form"
      }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("img", {
        src: _assets_logo_svg__WEBPACK_IMPORTED_MODULE_21___default.a,
        alt: "",
        className: "App-logo"
      }), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_es_input__WEBPACK_IMPORTED_MODULE_3__["default"], {
        size: "large",
        style: {
          marginBottom: 25
        },
        prefix: react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_es_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
          type: "user",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        name: "account",
        placeholder: "Username",
        value: this.state.account,
        onChange: this.handleChange
      }), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_es_input__WEBPACK_IMPORTED_MODULE_3__["default"], {
        size: "large",
        style: {
          marginBottom: 25
        },
        prefix: react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_es_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
          type: "lock",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        type: "password",
        name: "password",
        placeholder: "Password",
        value: this.state.password,
        onChange: this.handleChange
      }), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        style: {
          width: '100%'
        },
        size: "large",
        type: "primary",
        onClick: this.handleSubmit
      }, "\u767B\u5F55")));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_16__["Component"]), _temp)) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./src/views/admin/login/index.less":
/*!******************************************!*\
  !*** ./src/views/admin/login/index.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/_css-loader@1.0.0@css-loader??ref--6-oneOf-3-1!../../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??postcss!../../../../node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js??ref--6-oneOf-3-3!./index.less */ "./node_modules/_css-loader@1.0.0@css-loader/index.js?!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js?!./src/views/admin/login/index.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/_style-loader@0.23.0@style-loader/lib/addStyles.js */ "./node_modules/_style-loader@0.23.0@style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/_css-loader@1.0.0@css-loader??ref--6-oneOf-3-1!../../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??postcss!../../../../node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js??ref--6-oneOf-3-3!./index.less */ "./node_modules/_css-loader@1.0.0@css-loader/index.js?!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js?!./src/views/admin/login/index.less", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/_css-loader@1.0.0@css-loader??ref--6-oneOf-3-1!../../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??postcss!../../../../node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js??ref--6-oneOf-3-3!./index.less */ "./node_modules/_css-loader@1.0.0@css-loader/index.js?!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js?!./src/views/admin/login/index.less");

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2pzLzAuY2h1bmsuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYXJ1dG8vRGVza3RvcC9teWNvZGUvc3R1ZHktbm90ZXMvc3JjL3ZpZXdzL2FkbWluL2xvZ2luL2luZGV4Lmxlc3MiLCIvVXNlcnMvbmFydXRvL0Rlc2t0b3AvbXljb2RlL3N0dWR5LW5vdGVzL3NyYy9hc3NldHMvbG9naW5fYmcuc3ZnIiwiL1VzZXJzL25hcnV0by9EZXNrdG9wL215Y29kZS9zdHVkeS1ub3Rlcy9zcmMvYXNzZXRzL2xvZ28uc3ZnIiwiL1VzZXJzL25hcnV0by9EZXNrdG9wL215Y29kZS9zdHVkeS1ub3Rlcy9zcmMvdmlld3MvYWRtaW4vbG9naW4vaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9hZG1pbi9sb2dpbi9pbmRleC5sZXNzPzY3MjEiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGVzY2FwZSA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMS4wLjBAY3NzLWxvYWRlci9saWIvdXJsL2VzY2FwZS5qc1wiKTtcbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMS4wLjBAY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmxvZ2luLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vLi4vLi4vYXNzZXRzL2xvZ2luX2JnLnN2Z1wiKSkgKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIDExMHB4O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjJmNTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAvKuWeguebtOWxheS4rSovXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC8q5rC05bmz5bGF5LitKi9cXG59XFxuLmxvZ2luLWNvbnRhaW5lciAubG9naW4tZm9ybSB7XFxuICB3aWR0aDogMzY4cHg7XFxuICBtYXJnaW4tdG9wOiAtMjAwcHg7XFxufVxcbi5sb2dpbi1jb250YWluZXIgLmxvZ2luLWZvcm0gLkFwcC1sb2dvIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBBcHAtbG9nby1zcGluIGluZmluaXRlIDIwcyBsaW5lYXI7XFxuICAgICAgICAgIGFuaW1hdGlvbjogQXBwLWxvZ28tc3BpbiBpbmZpbml0ZSAyMHMgbGluZWFyO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgQXBwLWxvZ28tc3BpbiB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgQXBwLWxvZ28tc3BpbiB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9sb2dpbl9iZy41ODI1ZjAzMy5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvbG9nby41ZDVkOWVlZi5zdmdcIjsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgJy4vaW5kZXgubGVzcydcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgQnV0dG9uLCBtZXNzYWdlLCBJbnB1dCwgSWNvbiB9IGZyb20gJ2FudGQnXG5pbXBvcnQgeyBsb2dpbiB9IGZyb20gJ0AvcmVkdXgvdXNlci9hY3Rpb25zJ1xuaW1wb3J0IGxvZ28gZnJvbSAnQC9hc3NldHMvbG9nby5zdmcnXG5cbkB3aXRoUm91dGVyXG5AY29ubmVjdChcbiAgc3RhdGUgPT4gc3RhdGUudXNlcixcbiAgeyBsb2dpbiB9XG4pXG5jbGFzcyBMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGFjY291bnQ6ICcnLFxuICAgIHBhc3N3b3JkOiAnJ1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gZSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSlcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCB0aGlzLnByb3BzLmxvZ2luKHRoaXMuc3RhdGUpXG4gICAgaWYgKHRoaXMucHJvcHMuYXV0aCA9PT0gMSkge1xuICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9hZG1pbicpXG4gICAgICBtZXNzYWdlLnN1Y2Nlc3MoJ+eZu+W9leaIkOWKnycpXG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmF1dGggPT09IDIpIHtcbiAgICAgIG1lc3NhZ2Uud2FybmluZygn5oKo55qE5p2D6ZmQ5LiN6Laz77yBJylcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tZm9ybVwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtsb2dvfSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJBcHAtbG9nb1wiIC8+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyNSB9fVxuICAgICAgICAgICAgcHJlZml4PXs8SWNvbiB0eXBlPVwidXNlclwiIHN0eWxlPXt7IGNvbG9yOiAncmdiYSgwLDAsMCwuMjUpJyB9fSAvPn1cbiAgICAgICAgICAgIG5hbWU9XCJhY2NvdW50XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWNjb3VudH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMjUgfX1cbiAgICAgICAgICAgIHByZWZpeD17PEljb24gdHlwZT1cImxvY2tcIiBzdHlsZT17eyBjb2xvcjogJ3JnYmEoMCwwLDAsLjI1KScgfX0gLz59XG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gc2l6ZT1cImxhcmdlXCIgdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICDnmbvlvZVcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5cbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMS4wLjBAY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTMtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Bvc3Rjc3MtbG9hZGVyQDMuMC4wQHBvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cG9zdGNzcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvX2xlc3MtbG9hZGVyQDQuMS4wQGxlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMy0zIS4vaW5kZXgubGVzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMy4wQHN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDEuMC4wQGNzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0zLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19wb3N0Y3NzLWxvYWRlckAzLjAuMEBwb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3Bvc3Rjc3MhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19sZXNzLWxvYWRlckA0LjEuMEBsZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTMtMyEuL2luZGV4Lmxlc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMS4wLjBAY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTMtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Bvc3Rjc3MtbG9hZGVyQDMuMC4wQHBvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cG9zdGNzcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvX2xlc3MtbG9hZGVyQDQuMS4wQGxlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMy0zIS4vaW5kZXgubGVzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBUUE7QUFIQTtBQUFBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7Ozs7QUFsREE7QUFxREE7Ozs7Ozs7Ozs7O0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
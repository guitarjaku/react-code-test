webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-datepicker */ \"./node_modules/react-datepicker/dist/react-datepicker.min.js\");\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var date_fns_locale_th__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/locale/th */ \"./node_modules/date-fns/esm/locale/th/index.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react_js_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-js-pagination */ \"./node_modules/react-js-pagination/dist/Pagination.js\");\n/* harmony import */ var react_js_pagination__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_js_pagination__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_block_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-block-ui */ \"./node_modules/react-block-ui/dist/reactblockui.es.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/g4rtu1/code-test/nextjs-my-structure-master/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\nObject(react_datepicker__WEBPACK_IMPORTED_MODULE_3__[\"registerLocale\"])(\"th\", date_fns_locale_th__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nvar http = axios__WEBPACK_IMPORTED_MODULE_8___default.a.create({\n  // baseURL: process.env.api,\n  baseURL: \"http://my-json-server.typicode.com/guitarjaku/react-code-test\",\n  headers: {\n    \"Content-type\": \"application/json\"\n  }\n});\n\nvar App = function App() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(new Date()),\n      date = _useState[0],\n      setDate = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(new Date()),\n      time = _useState2[0],\n      setTime = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      sortFirstName = _useState3[0],\n      setSortFirstName = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      queryStatus = _useState4[0],\n      setQuery = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(1),\n      activePage = _useState5[0],\n      setActivePage = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n      blocking = _useState6[0],\n      handleBlocking = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      dataTable = _useState7[0],\n      setDataTable = _useState7[1];\n\n  var options = [{\n    value: \"chocolate\",\n    label: \"Chocolate\"\n  }, {\n    value: \"strawberry\",\n    label: \"Strawberry\"\n  }, {\n    value: \"vanilla\",\n    label: \"Vanilla\"\n  }];\n\n  var getEmployees = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return http.get(\"/employee\".concat(queryStatus)).then(function (res) {\n                console.log(\"res\", res);\n                setDataTable(res.data);\n                handleBlocking(false);\n              })[\"catch\"](function (err) {\n                return console.log(err);\n              });\n\n            case 2:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getEmployees() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var hanedleSort = function hanedleSort() {\n    // console.log(queryStatus);\n    setSortFirstName(!sortFirstName); // getEmployees();\n    // if (sortFirstName) {\n    // } else {\n    //   setQuery({ ...queryStatus, first: \"\" });\n    // }\n    // console.log(\"queryStatus\", queryStatus);\n  };\n\n  var checkStatus = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              if (sortFirstName) {\n                console.log(\"aaa\");\n                setQuery(\"?_sort=first_name&_order=asc\");\n              } else {\n                console.log(\"bbb\");\n                setQuery(\"\");\n              }\n\n            case 1:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function checkStatus() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    checkStatus().then(function () {\n      return getEmployees();\n    });\n  }, [sortFirstName, queryStatus]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 5\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Navbar\"], {\n    bg: \"dark\",\n    variant: \"dark\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Navbar\"].Brand, {\n    href: \"#home\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    alt: \"\",\n    src: \"/logo192.png\",\n    width: \"30\",\n    height: \"30\",\n    className: \"d-inline-block align-top mr-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 11\n    }\n  }), \"React Bootstrap\")), __jsx(react_block_ui__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    tag: \"div\",\n    blocking: blocking,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Container\"], {\n    fluid: true,\n    className: \"mb-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 11\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n    xs: 12,\n    sm: 6,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"w-100 text-sm-right text-center mt-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 15\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 17\n    }\n  }, \"Date : \"), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    locale: \"th\",\n    selected: date,\n    onChange: function onChange(date) {\n      return setDate(date);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 17\n    }\n  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n    xs: 12,\n    sm: 6,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"w-100 text-sm-left text-center mt-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 15\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 17\n    }\n  }, \"Time : \"), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    selected: time,\n    onChange: function onChange(date) {\n      return setTime(date);\n    },\n    showTimeInput: true,\n    showTimeSelectOnly: true,\n    timeCaption: \"Time\",\n    dateFormat: \"HH:mm\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 17\n    }\n  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Row\"], {\n    className: \"mt-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"d-flex w-100 px-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"form-group mr-auto\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 15\n    }\n  }, __jsx(\"select\", {\n    className: \"form-control\",\n    id: \"item\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 17\n    }\n  }, __jsx(\"option\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 19\n    }\n  }, \"10\"), __jsx(\"option\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 19\n    }\n  }, \"20\"), __jsx(\"option\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 19\n    }\n  }, \"30\"), __jsx(\"option\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 19\n    }\n  }, \"50\"), __jsx(\"option\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 19\n    }\n  }, \"100\"))), __jsx(\"div\", {\n    className: \"text-right\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 15\n    }\n  }, __jsx(react_js_pagination__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    hideDisabled: true,\n    itemClass: \"page-item\",\n    linkClass: \"page-link\" // firstPageText=\"First\"\n    // lastPageText=\"Last\"\n    ,\n    pageRangeDisplayed: 3,\n    activePage: activePage,\n    itemsCountPerPage: 10,\n    totalItemsCount: 100,\n    onChange: function onChange(pageNumber) {\n      setActivePage(pageNumber);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 17\n    }\n  }))), __jsx(\"div\", {\n    onClick: function onClick() {\n      return hanedleSort();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 13\n    }\n  }, \"click\"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n    xs: 12,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 13\n    }\n  }, __jsx(\"table\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 15\n    }\n  }, __jsx(\"thead\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 17\n    }\n  }, __jsx(\"tr\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 19\n    }\n  }, __jsx(\"th\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 21\n    }\n  }, \"#\"), __jsx(\"th\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 21\n    }\n  }, __jsx(\"button\", {\n    onClick: function onClick() {\n      return hanedleSort();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 152,\n      columnNumber: 23\n    }\n  }, \"First Name\"), !sortFirstName && __jsx(\"img\", {\n    src: \"icons/sort-arrows-couple-pointing-up-and-down.png\",\n    height: \"16\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 154,\n      columnNumber: 25\n    }\n  }), sortFirstName && __jsx(\"img\", {\n    src: \"icons/sort-up.png\",\n    height: \"16\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 162,\n      columnNumber: 25\n    }\n  })), __jsx(\"th\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 165,\n      columnNumber: 21\n    }\n  }, \"Last Name\", __jsx(\"img\", {\n    src: \"icons/sort-arrows-couple-pointing-up-and-down.png\",\n    height: \"16\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 167,\n      columnNumber: 23\n    }\n  })), __jsx(\"th\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 175,\n      columnNumber: 21\n    }\n  }, \"Gender\", __jsx(\"img\", {\n    src: \"icons/sort-arrows-couple-pointing-up-and-down.png\",\n    height: \"16\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 177,\n      columnNumber: 23\n    }\n  })))), __jsx(\"tbody\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 187,\n      columnNumber: 17\n    }\n  }, dataTable && dataTable.map(function (row, i) {\n    return __jsx(\"tr\", {\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 190,\n        columnNumber: 23\n      }\n    }, __jsx(\"td\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 191,\n        columnNumber: 25\n      }\n    }, i + 1), __jsx(\"td\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 192,\n        columnNumber: 25\n      }\n    }, row.first_name), __jsx(\"td\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 193,\n        columnNumber: 25\n      }\n    }, row.last_name), __jsx(\"td\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 195,\n        columnNumber: 25\n      }\n    }, row.gender));\n  }))), __jsx(\"pre\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 201,\n      columnNumber: 15\n    }\n  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n    xs: 12,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 203,\n      columnNumber: 13\n    }\n  })))));\n};\n\n_s(App, \"KNuB+2ulXbEe7u4xKMzZZKHsAyw=\");\n\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJyZWdpc3RlckxvY2FsZSIsInRoIiwiaHR0cCIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJBcHAiLCJ1c2VTdGF0ZSIsIkRhdGUiLCJkYXRlIiwic2V0RGF0ZSIsInRpbWUiLCJzZXRUaW1lIiwic29ydEZpcnN0TmFtZSIsInNldFNvcnRGaXJzdE5hbWUiLCJxdWVyeVN0YXR1cyIsInNldFF1ZXJ5IiwiYWN0aXZlUGFnZSIsInNldEFjdGl2ZVBhZ2UiLCJibG9ja2luZyIsImhhbmRsZUJsb2NraW5nIiwiZGF0YVRhYmxlIiwic2V0RGF0YVRhYmxlIiwib3B0aW9ucyIsInZhbHVlIiwibGFiZWwiLCJnZXRFbXBsb3llZXMiLCJnZXQiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJlcnIiLCJoYW5lZGxlU29ydCIsImNoZWNrU3RhdHVzIiwidXNlRWZmZWN0IiwicGFnZU51bWJlciIsIm1hcCIsInJvdyIsImkiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZ2VuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBQSx1RUFBYyxDQUFDLElBQUQsRUFBT0MsMERBQVAsQ0FBZDtBQUVBLElBQU1DLElBQUksR0FBR0MsNENBQUssQ0FBQ0MsTUFBTixDQUFhO0FBQ3hCO0FBQ0FDLFNBQU8sRUFBRSwrREFGZTtBQUd4QkMsU0FBTyxFQUFFO0FBQ1Asb0JBQWdCO0FBRFQ7QUFIZSxDQUFiLENBQWI7O0FBUUEsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUFBOztBQUFBLGtCQUNRQyxzREFBUSxDQUFDLElBQUlDLElBQUosRUFBRCxDQURoQjtBQUFBLE1BQ1RDLElBRFM7QUFBQSxNQUNIQyxPQURHOztBQUFBLG1CQUVRSCxzREFB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LElBdkZGLENBMUJGLENBREYsQ0FoQkYsQ0FERjtBQXlJRCxDQTlMRDs7R0FBTXJDLEc7O0tBQUFBLEc7QUFnTVNBLGtFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERhdGVQaWNrZXIsIHsgcmVnaXN0ZXJMb2NhbGUgfSBmcm9tIFwicmVhY3QtZGF0ZXBpY2tlclwiO1xyXG5pbXBvcnQgdGggZnJvbSBcImRhdGUtZm5zL2xvY2FsZS90aFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIENvbnRhaW5lciwgTmF2YmFyLCBSb3csIENvbCwgVGFibGUgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCJyZWFjdC1qcy1wYWdpbmF0aW9uXCI7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xyXG5pbXBvcnQgQmxvY2tVaSBmcm9tIFwicmVhY3QtYmxvY2stdWlcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5yZWdpc3RlckxvY2FsZShcInRoXCIsIHRoKTtcclxuXHJcbmNvbnN0IGh0dHAgPSBheGlvcy5jcmVhdGUoe1xyXG4gIC8vIGJhc2VVUkw6IHByb2Nlc3MuZW52LmFwaSxcclxuICBiYXNlVVJMOiBcImh0dHA6Ly9teS1qc29uLXNlcnZlci50eXBpY29kZS5jb20vZ3VpdGFyamFrdS9yZWFjdC1jb2RlLXRlc3RcIixcclxuICBoZWFkZXJzOiB7XHJcbiAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcclxuICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcclxuICBjb25zdCBbc29ydEZpcnN0TmFtZSwgc2V0U29ydEZpcnN0TmFtZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3F1ZXJ5U3RhdHVzLCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYWN0aXZlUGFnZSwgc2V0QWN0aXZlUGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbYmxvY2tpbmcsIGhhbmRsZUJsb2NraW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtkYXRhVGFibGUsIHNldERhdGFUYWJsZV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSBbXHJcbiAgICB7IHZhbHVlOiBcImNob2NvbGF0ZVwiLCBsYWJlbDogXCJDaG9jb2xhdGVcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJzdHJhd2JlcnJ5XCIsIGxhYmVsOiBcIlN0cmF3YmVycnlcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJ2YW5pbGxhXCIsIGxhYmVsOiBcIlZhbmlsbGFcIiB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGdldEVtcGxveWVlcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGh0dHBcclxuICAgICAgLmdldChgL2VtcGxveWVlJHtxdWVyeVN0YXR1c31gKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXNcIiwgcmVzKTtcclxuICAgICAgICBzZXREYXRhVGFibGUocmVzLmRhdGEpO1xyXG4gICAgICAgIGhhbmRsZUJsb2NraW5nKGZhbHNlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmVkbGVTb3J0ID0gKCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2cocXVlcnlTdGF0dXMpO1xyXG5cclxuICAgIHNldFNvcnRGaXJzdE5hbWUoIXNvcnRGaXJzdE5hbWUpO1xyXG5cclxuICAgIC8vIGdldEVtcGxveWVlcygpO1xyXG4gICAgLy8gaWYgKHNvcnRGaXJzdE5hbWUpIHtcclxuICAgIC8vIH0gZWxzZSB7XHJcbiAgICAvLyAgIHNldFF1ZXJ5KHsgLi4ucXVlcnlTdGF0dXMsIGZpcnN0OiBcIlwiIH0pO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gY29uc29sZS5sb2coXCJxdWVyeVN0YXR1c1wiLCBxdWVyeVN0YXR1cyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hlY2tTdGF0dXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoc29ydEZpcnN0TmFtZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImFhYVwiKTtcclxuICAgICAgc2V0UXVlcnkoXCI/X3NvcnQ9Zmlyc3RfbmFtZSZfb3JkZXI9YXNjXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJiYmJcIik7XHJcbiAgICAgIHNldFF1ZXJ5KFwiXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjaGVja1N0YXR1cygpLnRoZW4oKCkgPT4gZ2V0RW1wbG95ZWVzKCkpO1xyXG4gIH0sIFtzb3J0Rmlyc3ROYW1lLCBxdWVyeVN0YXR1c10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8TmF2YmFyIGJnPVwiZGFya1wiIHZhcmlhbnQ9XCJkYXJrXCI+XHJcbiAgICAgICAgPE5hdmJhci5CcmFuZCBocmVmPVwiI2hvbWVcIj5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgc3JjPXtcIi9sb2dvMTkyLnBuZ1wifVxyXG4gICAgICAgICAgICB3aWR0aD1cIjMwXCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiMzBcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayBhbGlnbi10b3AgbXItMlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgUmVhY3QgQm9vdHN0cmFwXHJcbiAgICAgICAgPC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgIDwvTmF2YmFyPlxyXG4gICAgICB7LyogPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVCbG9ja2luZyghYmxvY2tpbmcpfSBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICBUb2dnbGUgQmxvY2tcclxuICAgICAgPC9CdXR0b24+ICovfVxyXG4gICAgICA8QmxvY2tVaSB0YWc9XCJkaXZcIiBibG9ja2luZz17YmxvY2tpbmd9PlxyXG4gICAgICAgIDxDb250YWluZXIgZmx1aWQgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXs2fT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwIHRleHQtc20tcmlnaHQgdGV4dC1jZW50ZXIgbXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+RGF0ZSA6IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgIGxvY2FsZT1cInRoXCJcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e2RhdGV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSkgPT4gc2V0RGF0ZShkYXRlKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezZ9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgdGV4dC1zbS1sZWZ0IHRleHQtY2VudGVyIG10LTJcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlRpbWUgOiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZD17dGltZX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiBzZXRUaW1lKGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgICBzaG93VGltZUlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHNob3dUaW1lU2VsZWN0T25seVxyXG4gICAgICAgICAgICAgICAgICB0aW1lQ2FwdGlvbj1cIlRpbWVcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRlRm9ybWF0PVwiSEg6bW1cIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwibXQtMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCB3LTEwMCBweC0zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIG1yLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+MTA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj4yMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPjMwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+NTA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj4xMDA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgIGhpZGVEaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICBpdGVtQ2xhc3M9XCJwYWdlLWl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICBsaW5rQ2xhc3M9XCJwYWdlLWxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAvLyBmaXJzdFBhZ2VUZXh0PVwiRmlyc3RcIlxyXG4gICAgICAgICAgICAgICAgICAvLyBsYXN0UGFnZVRleHQ9XCJMYXN0XCJcclxuICAgICAgICAgICAgICAgICAgcGFnZVJhbmdlRGlzcGxheWVkPXszfVxyXG4gICAgICAgICAgICAgICAgICBhY3RpdmVQYWdlPXthY3RpdmVQYWdlfVxyXG4gICAgICAgICAgICAgICAgICBpdGVtc0NvdW50UGVyUGFnZT17MTB9XHJcbiAgICAgICAgICAgICAgICAgIHRvdGFsSXRlbXNDb3VudD17MTAwfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHBhZ2VOdW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVQYWdlKHBhZ2VOdW1iZXIpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gaGFuZWRsZVNvcnQoKX0+Y2xpY2s8L2Rpdj5cclxuICAgICAgICAgICAgPENvbCB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmVkbGVTb3J0KCl9PkZpcnN0IE5hbWU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIHshc29ydEZpcnN0TmFtZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpY29ucy9zb3J0LWFycm93cy1jb3VwbGUtcG9pbnRpbmctdXAtYW5kLWRvd24ucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHtzb3J0Rmlyc3ROYW1lICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1wiaWNvbnMvc29ydC11cC5wbmdcIn0gaGVpZ2h0PVwiMTZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICAgICAgICAgIExhc3QgTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWNvbnMvc29ydC1hcnJvd3MtY291cGxlLXBvaW50aW5nLXVwLWFuZC1kb3duLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8dGg+RW1haWw8L3RoPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICBHZW5kZXJcclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImljb25zL3NvcnQtYXJyb3dzLWNvdXBsZS1wb2ludGluZy11cC1hbmQtZG93bi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE2XCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPHRoPklQIEFkZHJlc3M8L3RoPiAqL31cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhVGFibGUgJiZcclxuICAgICAgICAgICAgICAgICAgICBkYXRhVGFibGUubWFwKChyb3csIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2kgKyAxfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cm93LmZpcnN0X25hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntyb3cubGFzdF9uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8dGQ+e3Jvdy5lbWFpbH08L3RkPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntyb3cuZ2VuZGVyfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8dGQ+e3Jvdy5pcF9hZGRyZXNzfTwvdGQ+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICA8cHJlPjwvcHJlPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCB4cz17MTJ9PnsvKiA8U2VsZWN0IG9wdGlvbnM9e29wdGlvbnN9IC8+ICovfTwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvQmxvY2tVaT5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})
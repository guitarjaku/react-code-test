webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-datepicker */ \"./node_modules/react-datepicker/dist/react-datepicker.min.js\");\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var date_fns_locale_th__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/locale/th */ \"./node_modules/date-fns/esm/locale/th/index.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react_js_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-js-pagination */ \"./node_modules/react-js-pagination/dist/Pagination.js\");\n/* harmony import */ var react_js_pagination__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_js_pagination__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/g4rtu1/code-test/nextjs-my-structure-master/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nObject(react_datepicker__WEBPACK_IMPORTED_MODULE_3__[\"registerLocale\"])(\"th\", date_fns_locale_th__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nvar http = axios__WEBPACK_IMPORTED_MODULE_7___default.a.create({\n  // baseURL: process.env.api,\n  baseURL: \"http://my-json-server.typicode.com/guitarjaku/react-code-test\",\n  headers: {\n    \"Content-type\": \"application/json\"\n  }\n});\n\nvar App = function App() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(new Date()),\n      date = _useState[0],\n      setDate = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(new Date()),\n      time = _useState2[0],\n      setTime = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      sortFirstName = _useState3[0],\n      setSortFirstName = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      sortLastName = _useState4[0],\n      setSortLasttName = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      sortGender = _useState5[0],\n      setSortGender = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(1),\n      activePage = _useState6[0],\n      setActivePage = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      blocking = _useState7[0],\n      handleBlocking = _useState7[1];\n\n  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      dataTable = _useState8[0],\n      setDataTable = _useState8[1];\n\n  var options = [{\n    value: \"chocolate\",\n    label: \"Chocolate\"\n  }, {\n    value: \"strawberry\",\n    label: \"Strawberry\"\n  }, {\n    value: \"vanilla\",\n    label: \"Vanilla\"\n  }];\n\n  var getEmployees = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var dataQuery;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              dataQuery = \"\";\n\n              if (sortFirstName === 1) {\n                dataQuery = \"?_sort=first_name&_order=asc\";\n              } else {\n                dataQuery = \"\";\n              }\n\n              if (sortLastName) {\n                dataQuery = \"?_sort=first_name&_order=asc\";\n              } else {\n                dataQuery = \"\";\n              }\n\n              if (sortGender) {\n                dataQuery = \"?_sort=first_name&_order=asc\";\n              } else {\n                dataQuery = \"\";\n              }\n\n              _context.next = 6;\n              return http.get(\"/employee\".concat(dataQuery)).then(function (res) {\n                console.log(\"res\", res);\n                setDataTable(res.data);\n                handleBlocking(false);\n              })[\"catch\"](function (err) {\n                return console.log(err);\n              });\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getEmployees() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var hanedleSort = function hanedleSort(props) {\n    setSortFirstName(props);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    handleBlocking(true);\n    getEmployees();\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 5\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Navbar\"], {\n    bg: \"dark\",\n    variant: \"dark\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Navbar\"].Brand, {\n    href: \"#home\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    alt: \"\",\n    src: \"/logo192.png\",\n    width: \"30\",\n    height: \"30\",\n    className: \"d-inline-block align-top mr-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 11\n    }\n  }), \"React Bootstrap\")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Container\"], {\n    fluid: true,\n    className: \"mb-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n    xs: 12,\n    sm: 6,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"w-100 text-sm-right text-center mt-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 13\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 15\n    }\n  }, \"Date : \"), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    locale: \"th\",\n    selected: date,\n    onChange: function onChange(date) {\n      return setDate(date);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 15\n    }\n  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n    xs: 12,\n    sm: 6,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"w-100 text-sm-left text-center mt-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 13\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 15\n    }\n  }, \"Time : \"), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    selected: time,\n    onChange: function onChange(date) {\n      return setTime(date);\n    },\n    showTimeInput: true,\n    showTimeSelectOnly: true,\n    timeCaption: \"Time\",\n    dateFormat: \"HH:mm\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 15\n    }\n  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Row\"], {\n    className: \"mt-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"d-flex w-100 px-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"form-group mr-auto\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 13\n    }\n  }, __jsx(\"select\", {\n    className: \"form-control\",\n    id: \"item\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 15\n    }\n  }, __jsx(\"option\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 17\n    }\n  }, \"10\"), __jsx(\"option\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 17\n    }\n  }, \"20\"), __jsx(\"option\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 17\n    }\n  }, \"30\"), __jsx(\"option\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 17\n    }\n  }, \"50\"), __jsx(\"option\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 17\n    }\n  }, \"100\"))), __jsx(\"div\", {\n    className: \"text-right\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 13\n    }\n  }, __jsx(react_js_pagination__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    hideDisabled: true,\n    itemClass: \"page-item\",\n    linkClass: \"page-link\" // firstPageText=\"First\"\n    // lastPageText=\"Last\"\n    ,\n    pageRangeDisplayed: 3,\n    activePage: activePage,\n    itemsCountPerPage: 10,\n    totalItemsCount: 100,\n    onChange: function onChange(pageNumber) {\n      setActivePage(pageNumber);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 15\n    }\n  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n    xs: 12,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 11\n    }\n  }, __jsx(\"table\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 13\n    }\n  }, __jsx(\"thead\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 15\n    }\n  }, __jsx(\"tr\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 152,\n      columnNumber: 17\n    }\n  }, __jsx(\"th\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 19\n    }\n  }, \"#\"), __jsx(\"th\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 154,\n      columnNumber: 19\n    }\n  }, __jsx(\"button\", {\n    onClick: function onClick() {\n      return hanedleSort(1);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 155,\n      columnNumber: 21\n    }\n  }, \"First Name\"), sortFirstName === 0 && __jsx(\"img\", {\n    src: \"icons/sort-arrows-couple-pointing-up-and-down.png\",\n    height: \"16\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 157,\n      columnNumber: 23\n    }\n  }), sortFirstName === 1 && __jsx(\"img\", {\n    src: \"icons/sort-up.png\",\n    height: \"16\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 165,\n      columnNumber: 23\n    }\n  }), sortFirstName === 2 && __jsx(\"img\", {\n    src: \"icons/sort-down.png\",\n    height: \"16\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 168,\n      columnNumber: 23\n    }\n  })), __jsx(\"th\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 171,\n      columnNumber: 19\n    }\n  }, \"Last Name\", __jsx(\"img\", {\n    src: \"icons/sort-arrows-couple-pointing-up-and-down.png\",\n    height: \"16\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 173,\n      columnNumber: 21\n    }\n  })), __jsx(\"th\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 179,\n      columnNumber: 19\n    }\n  }, \"Gender\", __jsx(\"img\", {\n    src: \"icons/sort-arrows-couple-pointing-up-and-down.png\",\n    height: \"16\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 181,\n      columnNumber: 21\n    }\n  })))), __jsx(\"tbody\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 189,\n      columnNumber: 15\n    }\n  }, dataTable && dataTable.map(function (row, i) {\n    return __jsx(\"tr\", {\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 192,\n        columnNumber: 21\n      }\n    }, __jsx(\"td\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 193,\n        columnNumber: 23\n      }\n    }, i + 1), __jsx(\"td\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 194,\n        columnNumber: 23\n      }\n    }, row.first_name), __jsx(\"td\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 195,\n        columnNumber: 23\n      }\n    }, row.last_name), __jsx(\"td\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 197,\n        columnNumber: 23\n      }\n    }, row.gender));\n  }))), __jsx(\"pre\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 203,\n      columnNumber: 13\n    }\n  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n    xs: 12,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 205,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_s(App, \"FyIBqgi9wVN0gwnsxBLW5BS/3nM=\");\n\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJyZWdpc3RlckxvY2FsZSIsInRoIiwiaHR0cCIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJBcHAiLCJ1c2VTdGF0ZSIsIkRhdGUiLCJkYXRlIiwic2V0RGF0ZSIsInRpbWUiLCJzZXRUaW1lIiwic29ydEZpcnN0TmFtZSIsInNldFNvcnRGaXJzdE5hbWUiLCJzb3J0TGFzdE5hbWUiLCJzZXRTb3J0TGFzdHROYW1lIiwic29ydEdlbmRlciIsInNldFNvcnRHZW5kZXIiLCJhY3RpdmVQYWdlIiwic2V0QWN0aXZlUGFnZSIsImJsb2NraW5nIiwiaGFuZGxlQmxvY2tpbmciLCJkYXRhVGFibGUiLCJzZXREYXRhVGFibGUiLCJvcHRpb25zIiwidmFsdWUiLCJsYWJlbCIsImdldEVtcGxveWVlcyIsImRhdGFRdWVyeSIsImdldCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImVyciIsImhhbmVkbGVTb3J0IiwicHJvcHMiLCJ1c2VFZmZlY3QiLCJwYWdlTnVtYmVyIiwibWFwIiwicm93IiwiaSIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJnZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0FBLHVFQUFjLENBQUMsSUFBRCxFQUFPQywwREFBUCxDQUFkO0FBRUEsSUFBTUMsSUFBSSxHQUFHQyw0Q0FBSyxDQUFDQyxNQUFOLENBQWE7QUFDeEI7QUFDQUMsU0FBTyxFQUFFLCtEQUZlO0FBR3hCQyxTQUFPLEVBQUU7QUFDUCxvQkFBZ0I7QUFEVDtBQUhlLENBQWIsQ0FBYjs7QUFRQSxJQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQUE7O0FBQUEsa0JBQ1FDLHNEQUFRLENBQUMsSUFBSUMsSUFBSixFQUFELENBRGhCO0FBQUEsTUFDVEMs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RkYsQ0ExQkYsQ0FqQkYsQ0FERjtBQXdJRCxDQWhNRDs7R0FBTXhDLEc7O0tBQUFBLEc7QUFrTVNBLGtFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERhdGVQaWNrZXIsIHsgcmVnaXN0ZXJMb2NhbGUgfSBmcm9tIFwicmVhY3QtZGF0ZXBpY2tlclwiO1xyXG5pbXBvcnQgdGggZnJvbSBcImRhdGUtZm5zL2xvY2FsZS90aFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIENvbnRhaW5lciwgTmF2YmFyLCBSb3csIENvbCwgVGFibGUgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCJyZWFjdC1qcy1wYWdpbmF0aW9uXCI7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xyXG5pbXBvcnQgQmxvY2tVaSBmcm9tIFwicmVhY3QtYmxvY2stdWlcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5yZWdpc3RlckxvY2FsZShcInRoXCIsIHRoKTtcclxuXHJcbmNvbnN0IGh0dHAgPSBheGlvcy5jcmVhdGUoe1xyXG4gIC8vIGJhc2VVUkw6IHByb2Nlc3MuZW52LmFwaSxcclxuICBiYXNlVVJMOiBcImh0dHA6Ly9teS1qc29uLXNlcnZlci50eXBpY29kZS5jb20vZ3VpdGFyamFrdS9yZWFjdC1jb2RlLXRlc3RcIixcclxuICBoZWFkZXJzOiB7XHJcbiAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcclxuICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcclxuICBjb25zdCBbc29ydEZpcnN0TmFtZSwgc2V0U29ydEZpcnN0TmFtZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc29ydExhc3ROYW1lLCBzZXRTb3J0TGFzdHROYW1lXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc29ydEdlbmRlciwgc2V0U29ydEdlbmRlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2FjdGl2ZVBhZ2UsIHNldEFjdGl2ZVBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW2Jsb2NraW5nLCBoYW5kbGVCbG9ja2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2RhdGFUYWJsZSwgc2V0RGF0YVRhYmxlXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3Qgb3B0aW9ucyA9IFtcclxuICAgIHsgdmFsdWU6IFwiY2hvY29sYXRlXCIsIGxhYmVsOiBcIkNob2NvbGF0ZVwiIH0sXHJcbiAgICB7IHZhbHVlOiBcInN0cmF3YmVycnlcIiwgbGFiZWw6IFwiU3RyYXdiZXJyeVwiIH0sXHJcbiAgICB7IHZhbHVlOiBcInZhbmlsbGFcIiwgbGFiZWw6IFwiVmFuaWxsYVwiIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgZ2V0RW1wbG95ZWVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgbGV0IGRhdGFRdWVyeSA9IFwiXCI7XHJcblxyXG4gICAgaWYgKHNvcnRGaXJzdE5hbWUgPT09IDEpIHtcclxuICAgICAgZGF0YVF1ZXJ5ID0gXCI/X3NvcnQ9Zmlyc3RfbmFtZSZfb3JkZXI9YXNjXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkYXRhUXVlcnkgPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzb3J0TGFzdE5hbWUpIHtcclxuICAgICAgZGF0YVF1ZXJ5ID0gXCI/X3NvcnQ9Zmlyc3RfbmFtZSZfb3JkZXI9YXNjXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkYXRhUXVlcnkgPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzb3J0R2VuZGVyKSB7XHJcbiAgICAgIGRhdGFRdWVyeSA9IFwiP19zb3J0PWZpcnN0X25hbWUmX29yZGVyPWFzY1wiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGF0YVF1ZXJ5ID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBhd2FpdCBodHRwXHJcbiAgICAgIC5nZXQoYC9lbXBsb3llZSR7ZGF0YVF1ZXJ5fWApXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc1wiLCByZXMpO1xyXG4gICAgICAgIHNldERhdGFUYWJsZShyZXMuZGF0YSk7XHJcbiAgICAgICAgaGFuZGxlQmxvY2tpbmcoZmFsc2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZWRsZVNvcnQgPSAocHJvcHM6IGFueSkgPT4ge1xyXG4gICAgc2V0U29ydEZpcnN0TmFtZShwcm9wcyk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGhhbmRsZUJsb2NraW5nKHRydWUpO1xyXG4gICAgZ2V0RW1wbG95ZWVzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8TmF2YmFyIGJnPVwiZGFya1wiIHZhcmlhbnQ9XCJkYXJrXCI+XHJcbiAgICAgICAgPE5hdmJhci5CcmFuZCBocmVmPVwiI2hvbWVcIj5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgc3JjPXtcIi9sb2dvMTkyLnBuZ1wifVxyXG4gICAgICAgICAgICB3aWR0aD1cIjMwXCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiMzBcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayBhbGlnbi10b3AgbXItMlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgUmVhY3QgQm9vdHN0cmFwXHJcbiAgICAgICAgPC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgIDwvTmF2YmFyPlxyXG4gICAgICB7LyogPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVCbG9ja2luZyghYmxvY2tpbmcpfSBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICBUb2dnbGUgQmxvY2tcclxuICAgICAgPC9CdXR0b24+ICovfVxyXG4gICAgICB7LyogPEJsb2NrVWkgdGFnPVwiZGl2XCIgYmxvY2tpbmc9e2Jsb2NraW5nfT4gKi99XHJcbiAgICAgIDxDb250YWluZXIgZmx1aWQgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezZ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwIHRleHQtc20tcmlnaHQgdGV4dC1jZW50ZXIgbXQtMlwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkRhdGUgOiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgIGxvY2FsZT1cInRoXCJcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtkYXRlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiBzZXREYXRlKGRhdGUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezZ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwIHRleHQtc20tbGVmdCB0ZXh0LWNlbnRlciBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+VGltZSA6IDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3RpbWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGUpID0+IHNldFRpbWUoZGF0ZSl9XHJcbiAgICAgICAgICAgICAgICBzaG93VGltZUlucHV0XHJcbiAgICAgICAgICAgICAgICBzaG93VGltZVNlbGVjdE9ubHlcclxuICAgICAgICAgICAgICAgIHRpbWVDYXB0aW9uPVwiVGltZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRlRm9ybWF0PVwiSEg6bW1cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJtdC0yXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCB3LTEwMCBweC0zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBtci1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+MTA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+MjA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+MzA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+NTA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+MTAwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgPFBhZ2luYXRpb25cclxuICAgICAgICAgICAgICAgIGhpZGVEaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgaXRlbUNsYXNzPVwicGFnZS1pdGVtXCJcclxuICAgICAgICAgICAgICAgIGxpbmtDbGFzcz1cInBhZ2UtbGlua1wiXHJcbiAgICAgICAgICAgICAgICAvLyBmaXJzdFBhZ2VUZXh0PVwiRmlyc3RcIlxyXG4gICAgICAgICAgICAgICAgLy8gbGFzdFBhZ2VUZXh0PVwiTGFzdFwiXHJcbiAgICAgICAgICAgICAgICBwYWdlUmFuZ2VEaXNwbGF5ZWQ9ezN9XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVQYWdlPXthY3RpdmVQYWdlfVxyXG4gICAgICAgICAgICAgICAgaXRlbXNDb3VudFBlclBhZ2U9ezEwfVxyXG4gICAgICAgICAgICAgICAgdG90YWxJdGVtc0NvdW50PXsxMDB9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHBhZ2VOdW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlUGFnZShwYWdlTnVtYmVyKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiA8ZGl2IG9uQ2xpY2s9eygpID0+IGhhbmVkbGVTb3J0KCl9PmNsaWNrPC9kaXY+ICovfVxyXG4gICAgICAgICAgPENvbCB4cz17MTJ9PlxyXG4gICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICA8dGg+IzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmVkbGVTb3J0KDEpfT5GaXJzdCBOYW1lPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAge3NvcnRGaXJzdE5hbWUgPT09IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWNvbnMvc29ydC1hcnJvd3MtY291cGxlLXBvaW50aW5nLXVwLWFuZC1kb3duLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIHtzb3J0Rmlyc3ROYW1lID09PSAxICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtcImljb25zL3NvcnQtdXAucG5nXCJ9IGhlaWdodD1cIjE2XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIHtzb3J0Rmlyc3ROYW1lID09PSAyICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtcImljb25zL3NvcnQtZG93bi5wbmdcIn0gaGVpZ2h0PVwiMTZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICAgICAgICBMYXN0IE5hbWVcclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e1wiaWNvbnMvc29ydC1hcnJvd3MtY291cGxlLXBvaW50aW5nLXVwLWFuZC1kb3duLnBuZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8dGg+RW1haWw8L3RoPiAqL31cclxuICAgICAgICAgICAgICAgICAgPHRoPlxyXG4gICAgICAgICAgICAgICAgICAgIEdlbmRlclxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17XCJpY29ucy9zb3J0LWFycm93cy1jb3VwbGUtcG9pbnRpbmctdXAtYW5kLWRvd24ucG5nXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgey8qIDx0aD5JUCBBZGRyZXNzPC90aD4gKi99XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAge2RhdGFUYWJsZSAmJlxyXG4gICAgICAgICAgICAgICAgICBkYXRhVGFibGUubWFwKChyb3csIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aSArIDF9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cm93LmZpcnN0X25hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cm93Lmxhc3RfbmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIDx0ZD57cm93LmVtYWlsfTwvdGQ+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPntyb3cuZ2VuZGVyfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7LyogPHRkPntyb3cuaXBfYWRkcmVzc308L3RkPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8cHJlPjwvcHJlPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sIHhzPXsxMn0+ey8qIDxTZWxlY3Qgb3B0aW9ucz17b3B0aW9uc30gLz4gKi99PC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICB7LyogPC9CbG9ja1VpPiAqL31cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})
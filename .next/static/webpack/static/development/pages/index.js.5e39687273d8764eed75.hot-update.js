webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-datepicker */ \"./node_modules/react-datepicker/dist/react-datepicker.min.js\");\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var date_fns_locale_th__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/locale/th */ \"./node_modules/date-fns/esm/locale/th/index.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react_js_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-js-pagination */ \"./node_modules/react-js-pagination/dist/Pagination.js\");\n/* harmony import */ var react_js_pagination__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_js_pagination__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_block_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-block-ui */ \"./node_modules/react-block-ui/dist/reactblockui.es.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/g4rtu1/code-test/nextjs-my-structure-master/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\nObject(react_datepicker__WEBPACK_IMPORTED_MODULE_3__[\"registerLocale\"])(\"th\", date_fns_locale_th__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nvar http = axios__WEBPACK_IMPORTED_MODULE_8___default.a.create({\n  // baseURL: process.env.api,\n  baseURL: \"http://my-json-server.typicode.com/guitarjaku/react-code-test\",\n  headers: {\n    \"Content-type\": \"application/json\"\n  }\n});\n\nvar App = function App() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(new Date()),\n      date = _useState[0],\n      setDate = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(new Date()),\n      time = _useState2[0],\n      setTime = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      sortFirstName = _useState3[0],\n      setSortFirstName = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      queryStatus = _useState4[0],\n      setQuery = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(1),\n      activePage = _useState5[0],\n      setActivePage = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n      blocking = _useState6[0],\n      handleBlocking = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      dataTable = _useState7[0],\n      setDataTable = _useState7[1];\n\n  var options = [{\n    value: \"chocolate\",\n    label: \"Chocolate\"\n  }, {\n    value: \"strawberry\",\n    label: \"Strawberry\"\n  }, {\n    value: \"vanilla\",\n    label: \"Vanilla\"\n  }];\n\n  var getEmployees = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return http.get(\"/employee\".concat(queryStatus)).then(function (res) {\n                console.log(\"res\", res);\n                setDataTable(res.data);\n                handleBlocking(false);\n              })[\"catch\"](function (err) {\n                return console.log(err);\n              });\n\n            case 2:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getEmployees() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var hanedleSort = function hanedleSort() {\n    // console.log(queryStatus);\n    setSortFirstName(!sortFirstName); // if (sortFirstName) {\n\n    setQuery(\"?_sort=first_name&_order=asc\"); // } else {\n    //   setQuery({ ...queryStatus, first: \"\" });\n    // }\n\n    getEmployees(); // console.log(\"queryStatus\", queryStatus);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    getEmployees();\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 5\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Navbar\"], {\n    bg: \"dark\",\n    variant: \"dark\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Navbar\"].Brand, {\n    href: \"#home\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    alt: \"\",\n    src: \"/logo192.png\",\n    width: \"30\",\n    height: \"30\",\n    className: \"d-inline-block align-top mr-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 11\n    }\n  }), \"React Bootstrap\")), __jsx(react_block_ui__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    tag: \"div\",\n    blocking: blocking,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Container\"], {\n    fluid: true,\n    className: \"mb-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 11\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n    xs: 12,\n    sm: 6,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"w-100 text-sm-right text-center mt-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 15\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 17\n    }\n  }, \"Date : \"), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    locale: \"th\",\n    selected: date,\n    onChange: function onChange(date) {\n      return setDate(date);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 17\n    }\n  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n    xs: 12,\n    sm: 6,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"w-100 text-sm-left text-center mt-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 15\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 17\n    }\n  }, \"Time : \"), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    selected: time,\n    onChange: function onChange(date) {\n      return setTime(date);\n    },\n    showTimeInput: true,\n    showTimeSelectOnly: true,\n    timeCaption: \"Time\",\n    dateFormat: \"HH:mm\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 17\n    }\n  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Row\"], {\n    className: \"mt-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"d-flex w-100 px-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"form-group mr-auto\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 15\n    }\n  }, __jsx(\"select\", {\n    className: \"form-control\",\n    id: \"item\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 17\n    }\n  }, __jsx(\"option\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 19\n    }\n  }, \"10\"), __jsx(\"option\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 19\n    }\n  }, \"20\"), __jsx(\"option\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 19\n    }\n  }, \"30\"), __jsx(\"option\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 19\n    }\n  }, \"50\"), __jsx(\"option\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 19\n    }\n  }, \"100\"))), __jsx(\"div\", {\n    className: \"text-right\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 15\n    }\n  }, __jsx(react_js_pagination__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    hideDisabled: true,\n    itemClass: \"page-item\",\n    linkClass: \"page-link\" // firstPageText=\"First\"\n    // lastPageText=\"Last\"\n    ,\n    pageRangeDisplayed: 3,\n    activePage: activePage,\n    itemsCountPerPage: 10,\n    totalItemsCount: 100,\n    onChange: function onChange(pageNumber) {\n      setActivePage(pageNumber);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 17\n    }\n  }))), __jsx(\"div\", {\n    onClick: function onClick() {\n      setQuery(\"?_sort=first_name&_order=asc\");\n      console.log(queryStatus);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 13\n    }\n  }, \"click\"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n    xs: 12,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 13\n    }\n  }, __jsx(\"table\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 15\n    }\n  }, __jsx(\"thead\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 17\n    }\n  }, __jsx(\"tr\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 19\n    }\n  }, __jsx(\"th\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 21\n    }\n  }, \"#\"), __jsx(\"th\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 21\n    }\n  }, __jsx(\"button\", {\n    onClick: function onClick() {\n      return hanedleSort();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 23\n    }\n  }, \"First Name\"), __jsx(\"img\", {\n    src: \"icons/sort-arrows-couple-pointing-up-and-down.png\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 23\n    }\n  })), __jsx(\"th\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 157,\n      columnNumber: 21\n    }\n  }, \"Last Name\", __jsx(\"img\", {\n    src: \"icons/sort-arrows-couple-pointing-up-and-down.png\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 159,\n      columnNumber: 23\n    }\n  })), __jsx(\"th\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 166,\n      columnNumber: 21\n    }\n  }, \"Gender\", __jsx(\"img\", {\n    src: \"icons/sort-arrows-couple-pointing-up-and-down.png\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 168,\n      columnNumber: 23\n    }\n  })))), __jsx(\"tbody\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 177,\n      columnNumber: 17\n    }\n  }, dataTable && dataTable.map(function (row, i) {\n    return __jsx(\"tr\", {\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 180,\n        columnNumber: 23\n      }\n    }, __jsx(\"td\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 181,\n        columnNumber: 25\n      }\n    }, i + 1), __jsx(\"td\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 182,\n        columnNumber: 25\n      }\n    }, row.first_name), __jsx(\"td\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 183,\n        columnNumber: 25\n      }\n    }, row.last_name), __jsx(\"td\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 185,\n        columnNumber: 25\n      }\n    }, row.gender));\n  }))), __jsx(\"pre\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 191,\n      columnNumber: 15\n    }\n  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n    xs: 12,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 193,\n      columnNumber: 13\n    }\n  })))));\n};\n\n_s(App, \"KNuB+2ulXbEe7u4xKMzZZKHsAyw=\");\n\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJyZWdpc3RlckxvY2FsZSIsInRoIiwiaHR0cCIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJBcHAiLCJ1c2VTdGF0ZSIsIkRhdGUiLCJkYXRlIiwic2V0RGF0ZSIsInRpbWUiLCJzZXRUaW1lIiwic29ydEZpcnN0TmFtZSIsInNldFNvcnRGaXJzdE5hbWUiLCJxdWVyeVN0YXR1cyIsInNldFF1ZXJ5IiwiYWN0aXZlUGFnZSIsInNldEFjdGl2ZVBhZ2UiLCJibG9ja2luZyIsImhhbmRsZUJsb2NraW5nIiwiZGF0YVRhYmxlIiwic2V0RGF0YVRhYmxlIiwib3B0aW9ucyIsInZhbHVlIiwibGFiZWwiLCJnZXRFbXBsb3llZXMiLCJnZXQiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJlcnIiLCJoYW5lZGxlU29ydCIsInVzZUVmZmVjdCIsInBhZ2VOdW1iZXIiLCJtYXAiLCJyb3ciLCJpIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImdlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQUEsdUVBQWMsQ0FBQyxJQUFELEVBQU9DLDBEQUFQLENBQWQ7QUFFQSxJQUFNQyxJQUFJLEdBQUdDLDRDQUFLLENBQUNDLE1BQU4sQ0FBYTtBQUN4QjtBQUNBQyxTQUFPLEVBQUUsK0RBRmU7QUFHeEJDLFNBQU8sRUFBRTtBQUNQLG9CQUFnQjtBQURUO0FBSGUsQ0FBYixDQUFiOztBQVFBLElBQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFBQTs7QUFBQSxrQkFDUUMsc0RBQVEsQ0FBQyxJQUFJQyxJQUFKLEVBQUQsQ0FEaEI7QUFBQSxNQUNUQyxJQURTO0FBQUEsTUFDSEMsT0FERzs7QUFBQSxtQkFFUUgsc0RBQVEsQ0FBQyxJQUFJQyxJQUFKLEVBQUQsQ0FGaEI7QUFBQSxNQUVURyxJQUZTO0FBQUEsTUFFSEMsT0FGRzs7QUFBQSxtQkFHMEJMLHNEQUFRLENBQUMsS0FBRCxDQUhsQztBQUFBLE1BR1RNLGFBSFM7QUFBQSxNQUdNQyxnQkFITjs7QUFBQSxtQkFJZ0JQLHNEQUFRLENBQUMsRUFBRCxDQUp4QjtBQUFBLE1BSVRRLFdBSlM7QUFBQSxNQUlJQyxRQUpKOztBQUFBLG1CQUtvQlQsc0RBQVEsQ0FBQyxDQUFELENBTDVCO0FBQUEsTUFLVFUsVUFMUztBQUFBLE1BS0dDLGFBTEg7O0FBQUEsbUJBTW1CWCxzREFBUSxDQUFDLElBQUQsQ0FOM0I7QUFBQSxNQU1UWSxRQU5TO0FBQUEsTUFNQ0MsY0FORDs7QUFBQSxtQkFPa0JiLHNEQUFRLENBQUMsRUFBRCxDQVAxQjtBQUFBLE1BT1RjLFNBUFM7QUFBQSxNQU9FQyxZQVBGOztBQVNoQixNQUFNQyxPQUFPLEdBQUcsQ0FDZDtBQUFFQyxTQUFLLEVBQUUsV0FBVDtBQUFzQkMsU0FBSyxFQUFFO0FBQTdCLEdBRGMsRUFFZDtBQUFFRCxTQUFLLEVBQUUsWUFBVDtBQUF1QkMsU0FBSyxFQUFFO0FBQTlCLEdBRmMsRUFHZDtBQUFFRCxTQUFLLEVBQUUsU0FBVDtBQUFvQkMsU0FBSyxFQUFFO0FBQTNCLEdBSGMsQ0FBaEI7O0FBTUEsTUFBTUMsWUFBWTtBQUFBLGdNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNiekIsSUFBSSxDQUNQMEIsR0FERyxvQkFDYVosV0FEYixHQUVIYSxJQUZHLENBRUUsVUFBQ0MsR0FBRCxFQUFTO0FBQ2JDLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CRixHQUFuQjtBQUNBUCw0QkFBWSxDQUFDTyxHQUFHLENBQUNHLElBQUwsQ0FBWjtBQUNBWiw4QkFBYyxDQUFDLEtBQUQsQ0FBZDtBQUNELGVBTkcsV0FPRyxVQUFDYSxHQUFEO0FBQUEsdUJBQVNILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxHQUFaLENBQVQ7QUFBQSxlQVBILENBRGE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWlAsWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUFXQSxNQUFNUSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCO0FBRUFwQixvQkFBZ0IsQ0FBQyxDQUFDRCxhQUFGLENBQWhCLENBSHdCLENBS3hCOztBQUNBRyxZQUFRLENBQUMsOEJBQUQsQ0FBUixDQU53QixDQU94QjtBQUNBO0FBQ0E7O0FBQ0FVLGdCQUFZLEdBVlksQ0FXeEI7QUFDRCxHQVpEOztBQWNBUyx5REFBUyxDQUFDLFlBQU07QUFDZFQsZ0JBQVk7QUFDYixHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsU0FDRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQVEsTUFBRSxFQUFDLE1BQVg7QUFBa0IsV0FBTyxFQUFDLE1BQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFELENBQVEsS0FBUjtBQUFjLFFBQUksRUFBQyxPQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxPQUFHLEVBQUMsRUFETjtBQUVFLE9BQUcsRUFBRSxjQUZQO0FBR0UsU0FBSyxFQUFDLElBSFI7QUFJRSxVQUFNLEVBQUMsSUFKVDtBQUtFLGFBQVMsRUFBQywrQkFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsb0JBREYsQ0FERixFQWdCRSxNQUFDLHNEQUFEO0FBQVMsT0FBRyxFQUFDLEtBQWI7QUFBbUIsWUFBUSxFQUFFUCxRQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUFXLFNBQUssTUFBaEI7QUFBaUIsYUFBUyxFQUFDLE1BQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQUssTUFBRSxFQUFFLEVBQVQ7QUFBYSxNQUFFLEVBQUUsQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHNDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFRSxNQUFDLHVEQUFEO0FBQ0UsVUFBTSxFQUFDLElBRFQ7QUFFRSxZQUFRLEVBQUVWLElBRlo7QUFHRSxZQUFRLEVBQUUsa0JBQUNBLElBQUQ7QUFBQSxhQUFVQyxPQUFPLENBQUNELElBQUQsQ0FBakI7QUFBQSxLQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLENBREYsRUFXRSxNQUFDLG1EQUFEO0FBQUssTUFBRSxFQUFFLEVBQVQ7QUFBYSxNQUFFLEVBQUUsQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHFDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFRSxNQUFDLHVEQUFEO0FBQ0UsWUFBUSxFQUFFRSxJQURaO0FBRUUsWUFBUSxFQUFFLGtCQUFDRixJQUFEO0FBQUEsYUFBVUcsT0FBTyxDQUFDSCxJQUFELENBQWpCO0FBQUEsS0FGWjtBQUdFLGlCQUFhLE1BSGY7QUFJRSxzQkFBa0IsTUFKcEI7QUFLRSxlQUFXLEVBQUMsTUFMZDtBQU1FLGNBQVUsRUFBQyxPQU5iO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLENBWEYsQ0FERixFQTBCRSxNQUFDLG1EQUFEO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxvQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxhQUFTLEVBQUMsY0FBbEI7QUFBaUMsTUFBRSxFQUFDLE1BQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBSEYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBSkYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBTEYsQ0FERixDQURGLEVBV0U7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwREFBRDtBQUNFLGdCQUFZLE1BRGQ7QUFFRSxhQUFTLEVBQUMsV0FGWjtBQUdFLGFBQVMsRUFBQyxXQUhaLENBSUU7QUFDQTtBQUxGO0FBTUUsc0JBQWtCLEVBQUUsQ0FOdEI7QUFPRSxjQUFVLEVBQUVRLFVBUGQ7QUFRRSxxQkFBaUIsRUFBRSxFQVJyQjtBQVNFLG1CQUFlLEVBQUUsR0FUbkI7QUFVRSxZQUFRLEVBQUUsa0JBQUNtQixVQUFELEVBQWdCO0FBQ3hCbEIsbUJBQWEsQ0FBQ2tCLFVBQUQsQ0FBYjtBQUNELEtBWkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBWEYsQ0FERixFQTZCRTtBQUNFLFdBQU8sRUFBRSxtQkFBTTtBQUNicEIsY0FBUSxDQUFDLDhCQUFELENBQVI7QUFDQWMsYUFBTyxDQUFDQyxHQUFSLENBQVloQixXQUFaO0FBQ0QsS0FKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBN0JGLEVBcUNFLE1BQUMsbURBQUQ7QUFBSyxNQUFFLEVBQUUsRUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBTW1CLFdBQVcsRUFBakI7QUFBQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBRUU7QUFDRSxPQUFHLEVBQ0QsbURBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBRkYsRUFVRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUVFO0FBQ0UsT0FBRyxFQUNELG1EQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQVZGLEVBbUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFFRTtBQUNFLE9BQUcsRUFDRCxtREFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FuQkYsQ0FERixDQURGLEVBZ0NFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2IsU0FBUyxJQUNSQSxTQUFTLENBQUNnQixHQUFWLENBQWMsVUFBQ0MsR0FBRCxFQUFNQyxDQUFOO0FBQUEsV0FDWjtBQUFJLFNBQUcsRUFBRUEsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLQSxDQUFDLEdBQUcsQ0FBVCxDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLRCxHQUFHLENBQUNFLFVBQVQsQ0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS0YsR0FBRyxDQUFDRyxTQUFULENBSEYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtILEdBQUcsQ0FBQ0ksTUFBVCxDQUxGLENBRFk7QUFBQSxHQUFkLENBRkosQ0FoQ0YsQ0FERixFQStDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBL0NGLENBckNGLEVBc0ZFLE1BQUMsbURBQUQ7QUFBSyxNQUFFLEVBQUUsRUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdEZGLENBMUJGLENBREYsQ0FoQkYsQ0FERjtBQXdJRCxDQXBMRDs7R0FBTXBDLEc7O0tBQUFBLEc7QUFzTFNBLGtFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERhdGVQaWNrZXIsIHsgcmVnaXN0ZXJMb2NhbGUgfSBmcm9tIFwicmVhY3QtZGF0ZXBpY2tlclwiO1xyXG5pbXBvcnQgdGggZnJvbSBcImRhdGUtZm5zL2xvY2FsZS90aFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIENvbnRhaW5lciwgTmF2YmFyLCBSb3csIENvbCwgVGFibGUgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCJyZWFjdC1qcy1wYWdpbmF0aW9uXCI7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xyXG5pbXBvcnQgQmxvY2tVaSBmcm9tIFwicmVhY3QtYmxvY2stdWlcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5yZWdpc3RlckxvY2FsZShcInRoXCIsIHRoKTtcclxuXHJcbmNvbnN0IGh0dHAgPSBheGlvcy5jcmVhdGUoe1xyXG4gIC8vIGJhc2VVUkw6IHByb2Nlc3MuZW52LmFwaSxcclxuICBiYXNlVVJMOiBcImh0dHA6Ly9teS1qc29uLXNlcnZlci50eXBpY29kZS5jb20vZ3VpdGFyamFrdS9yZWFjdC1jb2RlLXRlc3RcIixcclxuICBoZWFkZXJzOiB7XHJcbiAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcclxuICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcclxuICBjb25zdCBbc29ydEZpcnN0TmFtZSwgc2V0U29ydEZpcnN0TmFtZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3F1ZXJ5U3RhdHVzLCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYWN0aXZlUGFnZSwgc2V0QWN0aXZlUGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbYmxvY2tpbmcsIGhhbmRsZUJsb2NraW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtkYXRhVGFibGUsIHNldERhdGFUYWJsZV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSBbXHJcbiAgICB7IHZhbHVlOiBcImNob2NvbGF0ZVwiLCBsYWJlbDogXCJDaG9jb2xhdGVcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJzdHJhd2JlcnJ5XCIsIGxhYmVsOiBcIlN0cmF3YmVycnlcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJ2YW5pbGxhXCIsIGxhYmVsOiBcIlZhbmlsbGFcIiB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGdldEVtcGxveWVlcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGh0dHBcclxuICAgICAgLmdldChgL2VtcGxveWVlJHtxdWVyeVN0YXR1c31gKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXNcIiwgcmVzKTtcclxuICAgICAgICBzZXREYXRhVGFibGUocmVzLmRhdGEpO1xyXG4gICAgICAgIGhhbmRsZUJsb2NraW5nKGZhbHNlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmVkbGVTb3J0ID0gKCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2cocXVlcnlTdGF0dXMpO1xyXG5cclxuICAgIHNldFNvcnRGaXJzdE5hbWUoIXNvcnRGaXJzdE5hbWUpO1xyXG5cclxuICAgIC8vIGlmIChzb3J0Rmlyc3ROYW1lKSB7XHJcbiAgICBzZXRRdWVyeShcIj9fc29ydD1maXJzdF9uYW1lJl9vcmRlcj1hc2NcIik7XHJcbiAgICAvLyB9IGVsc2Uge1xyXG4gICAgLy8gICBzZXRRdWVyeSh7IC4uLnF1ZXJ5U3RhdHVzLCBmaXJzdDogXCJcIiB9KTtcclxuICAgIC8vIH1cclxuICAgIGdldEVtcGxveWVlcygpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJxdWVyeVN0YXR1c1wiLCBxdWVyeVN0YXR1cyk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldEVtcGxveWVlcygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPE5hdmJhciBiZz1cImRhcmtcIiB2YXJpYW50PVwiZGFya1wiPlxyXG4gICAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIiNob21lXCI+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgIHNyYz17XCIvbG9nbzE5Mi5wbmdcIn1cclxuICAgICAgICAgICAgd2lkdGg9XCIzMFwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjMwXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgYWxpZ24tdG9wIG1yLTJcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIFJlYWN0IEJvb3RzdHJhcFxyXG4gICAgICAgIDwvTmF2YmFyLkJyYW5kPlxyXG4gICAgICA8L05hdmJhcj5cclxuICAgICAgey8qIDxCdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQmxvY2tpbmcoIWJsb2NraW5nKX0gY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgVG9nZ2xlIEJsb2NrXHJcbiAgICAgIDwvQnV0dG9uPiAqL31cclxuICAgICAgPEJsb2NrVWkgdGFnPVwiZGl2XCIgYmxvY2tpbmc9e2Jsb2NraW5nfT5cclxuICAgICAgICA8Q29udGFpbmVyIGZsdWlkIGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17Nn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMCB0ZXh0LXNtLXJpZ2h0IHRleHQtY2VudGVyIG10LTJcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPkRhdGUgOiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICBsb2NhbGU9XCJ0aFwiXHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtkYXRlfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGUpID0+IHNldERhdGUoZGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXs2fT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwIHRleHQtc20tbGVmdCB0ZXh0LWNlbnRlciBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5UaW1lIDogPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3RpbWV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSkgPT4gc2V0VGltZShkYXRlKX1cclxuICAgICAgICAgICAgICAgICAgc2hvd1RpbWVJbnB1dFxyXG4gICAgICAgICAgICAgICAgICBzaG93VGltZVNlbGVjdE9ubHlcclxuICAgICAgICAgICAgICAgICAgdGltZUNhcHRpb249XCJUaW1lXCJcclxuICAgICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD1cIkhIOm1tXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cIm10LTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggdy0xMDAgcHgtM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBtci1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPjEwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+MjA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj4zMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPjUwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+MTAwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8UGFnaW5hdGlvblxyXG4gICAgICAgICAgICAgICAgICBoaWRlRGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgaXRlbUNsYXNzPVwicGFnZS1pdGVtXCJcclxuICAgICAgICAgICAgICAgICAgbGlua0NsYXNzPVwicGFnZS1saW5rXCJcclxuICAgICAgICAgICAgICAgICAgLy8gZmlyc3RQYWdlVGV4dD1cIkZpcnN0XCJcclxuICAgICAgICAgICAgICAgICAgLy8gbGFzdFBhZ2VUZXh0PVwiTGFzdFwiXHJcbiAgICAgICAgICAgICAgICAgIHBhZ2VSYW5nZURpc3BsYXllZD17M31cclxuICAgICAgICAgICAgICAgICAgYWN0aXZlUGFnZT17YWN0aXZlUGFnZX1cclxuICAgICAgICAgICAgICAgICAgaXRlbXNDb3VudFBlclBhZ2U9ezEwfVxyXG4gICAgICAgICAgICAgICAgICB0b3RhbEl0ZW1zQ291bnQ9ezEwMH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhwYWdlTnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlUGFnZShwYWdlTnVtYmVyKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0UXVlcnkoXCI/X3NvcnQ9Zmlyc3RfbmFtZSZfb3JkZXI9YXNjXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocXVlcnlTdGF0dXMpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBjbGlja1xyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPENvbCB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmVkbGVTb3J0KCl9PkZpcnN0IE5hbWU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImljb25zL3NvcnQtYXJyb3dzLWNvdXBsZS1wb2ludGluZy11cC1hbmQtZG93bi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgTGFzdCBOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpY29ucy9zb3J0LWFycm93cy1jb3VwbGUtcG9pbnRpbmctdXAtYW5kLWRvd24ucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8dGg+RW1haWw8L3RoPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICBHZW5kZXJcclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImljb25zL3NvcnQtYXJyb3dzLWNvdXBsZS1wb2ludGluZy11cC1hbmQtZG93bi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDx0aD5JUCBBZGRyZXNzPC90aD4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YVRhYmxlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVRhYmxlLm1hcCgocm93LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpICsgMX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Jvdy5maXJzdF9uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cm93Lmxhc3RfbmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPHRkPntyb3cuZW1haWx9PC90ZD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cm93LmdlbmRlcn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPHRkPntyb3cuaXBfYWRkcmVzc308L3RkPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgPHByZT48L3ByZT5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9ezEyfT57LyogPFNlbGVjdCBvcHRpb25zPXtvcHRpb25zfSAvPiAqL308L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L0Jsb2NrVWk+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})
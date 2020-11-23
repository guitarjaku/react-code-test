webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-datepicker */ \"./node_modules/react-datepicker/dist/react-datepicker.min.js\");\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var date_fns_locale_th__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/locale/th */ \"./node_modules/date-fns/esm/locale/th/index.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react_js_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-js-pagination */ \"./node_modules/react-js-pagination/dist/Pagination.js\");\n/* harmony import */ var react_js_pagination__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_js_pagination__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_block_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-block-ui */ \"./node_modules/react-block-ui/dist/reactblockui.es.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/g4rtu1/code-test/nextjs-my-structure-master/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\nObject(react_datepicker__WEBPACK_IMPORTED_MODULE_3__[\"registerLocale\"])(\"th\", date_fns_locale_th__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nvar http = axios__WEBPACK_IMPORTED_MODULE_8___default.a.create({\n  // baseURL: process.env.api,\n  baseURL: \"http://my-json-server.typicode.com/guitarjaku/react-code-test\",\n  headers: {\n    \"Content-type\": \"application/json\"\n  }\n});\n\nvar App = function App() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(new Date()),\n      date = _useState[0],\n      setDate = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(new Date()),\n      time = _useState2[0],\n      setTime = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      sortFirstName = _useState3[0],\n      setSortFirstName = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      queryStatus = _useState4[0],\n      setQuery = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(1),\n      activePage = _useState5[0],\n      setActivePage = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n      blocking = _useState6[0],\n      handleBlocking = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      dataTable = _useState7[0],\n      setDataTable = _useState7[1];\n\n  var options = [{\n    value: \"chocolate\",\n    label: \"Chocolate\"\n  }, {\n    value: \"strawberry\",\n    label: \"Strawberry\"\n  }, {\n    value: \"vanilla\",\n    label: \"Vanilla\"\n  }];\n\n  var getEmployees = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return http.get(\"/employee\".concat(queryStatus)).then(function (res) {\n                console.log(\"res\", res);\n                setDataTable(res.data);\n                handleBlocking(false);\n              })[\"catch\"](function (err) {\n                return console.log(err);\n              });\n\n            case 2:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getEmployees() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var hanedleSort = function hanedleSort() {\n    // console.log(queryStatus);\n    setSortFirstName(!sortFirstName);\n\n    if (sortFirstName) {\n      console.log(\"aaa\", aaa);\n      setQuery(\"?_sort=first_name&_order=asc\");\n    } else {\n      console.log(\"bbb\", bbb);\n      setQuery(\"\");\n    } // getEmployees();\n    // if (sortFirstName) {\n    // } else {\n    //   setQuery({ ...queryStatus, first: \"\" });\n    // }\n    // console.log(\"queryStatus\", queryStatus);\n\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    getEmployees();\n  }, [queryStatus]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 5\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Navbar\"], {\n    bg: \"dark\",\n    variant: \"dark\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Navbar\"].Brand, {\n    href: \"#home\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    alt: \"\",\n    src: \"/logo192.png\",\n    width: \"30\",\n    height: \"30\",\n    className: \"d-inline-block align-top mr-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 11\n    }\n  }), \"React Bootstrap\")), __jsx(react_block_ui__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    tag: \"div\",\n    blocking: blocking,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Container\"], {\n    fluid: true,\n    className: \"mb-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 11\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n    xs: 12,\n    sm: 6,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"w-100 text-sm-right text-center mt-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 15\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 17\n    }\n  }, \"Date : \"), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    locale: \"th\",\n    selected: date,\n    onChange: function onChange(date) {\n      return setDate(date);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 17\n    }\n  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n    xs: 12,\n    sm: 6,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"w-100 text-sm-left text-center mt-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 15\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 17\n    }\n  }, \"Time : \"), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    selected: time,\n    onChange: function onChange(date) {\n      return setTime(date);\n    },\n    showTimeInput: true,\n    showTimeSelectOnly: true,\n    timeCaption: \"Time\",\n    dateFormat: \"HH:mm\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 17\n    }\n  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Row\"], {\n    className: \"mt-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"d-flex w-100 px-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"form-group mr-auto\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 15\n    }\n  }, __jsx(\"select\", {\n    className: \"form-control\",\n    id: \"item\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 17\n    }\n  }, __jsx(\"option\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 19\n    }\n  }, \"10\"), __jsx(\"option\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 19\n    }\n  }, \"20\"), __jsx(\"option\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 19\n    }\n  }, \"30\"), __jsx(\"option\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 19\n    }\n  }, \"50\"), __jsx(\"option\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 19\n    }\n  }, \"100\"))), __jsx(\"div\", {\n    className: \"text-right\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 15\n    }\n  }, __jsx(react_js_pagination__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    hideDisabled: true,\n    itemClass: \"page-item\",\n    linkClass: \"page-link\" // firstPageText=\"First\"\n    // lastPageText=\"Last\"\n    ,\n    pageRangeDisplayed: 3,\n    activePage: activePage,\n    itemsCountPerPage: 10,\n    totalItemsCount: 100,\n    onChange: function onChange(pageNumber) {\n      setActivePage(pageNumber);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 17\n    }\n  }))), __jsx(\"div\", {\n    onClick: function onClick() {\n      return hanedleSort();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 13\n    }\n  }, \"click\"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n    xs: 12,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 13\n    }\n  }, __jsx(\"table\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 15\n    }\n  }, __jsx(\"thead\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 17\n    }\n  }, __jsx(\"tr\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 19\n    }\n  }, __jsx(\"th\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 21\n    }\n  }, \"#\"), __jsx(\"th\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 21\n    }\n  }, __jsx(\"button\", {\n    onClick: function onClick() {\n      return hanedleSort();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 23\n    }\n  }, \"First Name\"), !sortFirstName && __jsx(\"img\", {\n    src: \"icons/sort-arrows-couple-pointing-up-and-down.png\",\n    height: \"16\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 152,\n      columnNumber: 25\n    }\n  }), sortFirstName && __jsx(\"img\", {\n    src: \"icons/sort-up.png\",\n    height: \"16\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 160,\n      columnNumber: 25\n    }\n  })), __jsx(\"th\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 163,\n      columnNumber: 21\n    }\n  }, \"Last Name\", __jsx(\"img\", {\n    src: \"icons/sort-arrows-couple-pointing-up-and-down.png\",\n    height: \"16\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 165,\n      columnNumber: 23\n    }\n  })), __jsx(\"th\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 173,\n      columnNumber: 21\n    }\n  }, \"Gender\", __jsx(\"img\", {\n    src: \"icons/sort-arrows-couple-pointing-up-and-down.png\",\n    height: \"16\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 175,\n      columnNumber: 23\n    }\n  })))), __jsx(\"tbody\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 185,\n      columnNumber: 17\n    }\n  }, dataTable && dataTable.map(function (row, i) {\n    return __jsx(\"tr\", {\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 188,\n        columnNumber: 23\n      }\n    }, __jsx(\"td\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 189,\n        columnNumber: 25\n      }\n    }, i + 1), __jsx(\"td\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 190,\n        columnNumber: 25\n      }\n    }, row.first_name), __jsx(\"td\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 191,\n        columnNumber: 25\n      }\n    }, row.last_name), __jsx(\"td\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 193,\n        columnNumber: 25\n      }\n    }, row.gender));\n  }))), __jsx(\"pre\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 199,\n      columnNumber: 15\n    }\n  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n    xs: 12,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 201,\n      columnNumber: 13\n    }\n  })))));\n};\n\n_s(App, \"KNuB+2ulXbEe7u4xKMzZZKHsAyw=\");\n\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJyZWdpc3RlckxvY2FsZSIsInRoIiwiaHR0cCIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJBcHAiLCJ1c2VTdGF0ZSIsIkRhdGUiLCJkYXRlIiwic2V0RGF0ZSIsInRpbWUiLCJzZXRUaW1lIiwic29ydEZpcnN0TmFtZSIsInNldFNvcnRGaXJzdE5hbWUiLCJxdWVyeVN0YXR1cyIsInNldFF1ZXJ5IiwiYWN0aXZlUGFnZSIsInNldEFjdGl2ZVBhZ2UiLCJibG9ja2luZyIsImhhbmRsZUJsb2NraW5nIiwiZGF0YVRhYmxlIiwic2V0RGF0YVRhYmxlIiwib3B0aW9ucyIsInZhbHVlIiwibGFiZWwiLCJnZXRFbXBsb3llZXMiLCJnZXQiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJlcnIiLCJoYW5lZGxlU29ydCIsImFhYSIsImJiYiIsInVzZUVmZmVjdCIsInBhZ2VOdW1iZXIiLCJtYXAiLCJyb3ciLCJpIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImdlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQUEsdUVBQWMsQ0FBQyxJQUFELEVBQU9DLDBEQUFQLENBQWQ7QUFFQSxJQUFNQyxJQUFJLEdBQUdDLDRDQUFLLENBQUNDLE1BQU4sQ0FBYTtBQUN4QjtBQUNBQyxTQUFPLEVBQUUsK0RBRmU7QUFHeEJDLFNBQU8sRUFBRTtBQUNQLG9CQUFnQjtBQURUO0FBSGUsQ0FBYixDQUFiOztBQVFBLElBQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFBQTs7QUFBQSxrQkFDUUMsc0RBQVEsQ0FBQyxJQUFJQyxJQUFKLEVBQUQsQ0FEaEI7QUFBQSxNQUNUQyxJQURTO0FBQUEsTUFDSEMsT0FERzs7QUFBQSxtQkFFUUgsc0RBQVEs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MEJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFFRTtBQUNFLE9BQUcsRUFDRCxtREFGSjtBQUlFLFVBQU0sRUFBQyxJQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQTFCRixDQURGLENBREYsRUF3Q0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHUSxTQUFTLElBQ1JBLFNBQVMsQ0FBQ2tCLEdBQVYsQ0FBYyxVQUFDQyxHQUFELEVBQU1DLENBQU47QUFBQSxXQUNaO0FBQUksU0FBRyxFQUFFQSxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtBLENBQUMsR0FBRyxDQUFULENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtELEdBQUcsQ0FBQ0UsVUFBVCxDQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLRixHQUFHLENBQUNHLFNBQVQsQ0FIRixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS0gsR0FBRyxDQUFDSSxNQUFULENBTEYsQ0FEWTtBQUFBLEdBQWQsQ0FGSixDQXhDRixDQURGLEVBdURFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF2REYsQ0E5QkYsRUF1RkUsTUFBQyxtREFBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF2RkYsQ0ExQkYsQ0FERixDQWhCRixDQURGO0FBeUlELENBNUxEOztHQUFNdEMsRzs7S0FBQUEsRztBQThMU0Esa0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRGF0ZVBpY2tlciwgeyByZWdpc3RlckxvY2FsZSB9IGZyb20gXCJyZWFjdC1kYXRlcGlja2VyXCI7XHJcbmltcG9ydCB0aCBmcm9tIFwiZGF0ZS1mbnMvbG9jYWxlL3RoXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgQ29udGFpbmVyLCBOYXZiYXIsIFJvdywgQ29sLCBUYWJsZSB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSBcInJlYWN0LWpzLXBhZ2luYXRpb25cIjtcclxuaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XHJcbmltcG9ydCBCbG9ja1VpIGZyb20gXCJyZWFjdC1ibG9jay11aVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbnJlZ2lzdGVyTG9jYWxlKFwidGhcIiwgdGgpO1xyXG5cclxuY29uc3QgaHR0cCA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgLy8gYmFzZVVSTDogcHJvY2Vzcy5lbnYuYXBpLFxyXG4gIGJhc2VVUkw6IFwiaHR0cDovL215LWpzb24tc2VydmVyLnR5cGljb2RlLmNvbS9ndWl0YXJqYWt1L3JlYWN0LWNvZGUtdGVzdFwiLFxyXG4gIGhlYWRlcnM6IHtcclxuICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xyXG4gIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xyXG4gIGNvbnN0IFtzb3J0Rmlyc3ROYW1lLCBzZXRTb3J0Rmlyc3ROYW1lXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcXVlcnlTdGF0dXMsIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFthY3RpdmVQYWdlLCBzZXRBY3RpdmVQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFtibG9ja2luZywgaGFuZGxlQmxvY2tpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2RhdGFUYWJsZSwgc2V0RGF0YVRhYmxlXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3Qgb3B0aW9ucyA9IFtcclxuICAgIHsgdmFsdWU6IFwiY2hvY29sYXRlXCIsIGxhYmVsOiBcIkNob2NvbGF0ZVwiIH0sXHJcbiAgICB7IHZhbHVlOiBcInN0cmF3YmVycnlcIiwgbGFiZWw6IFwiU3RyYXdiZXJyeVwiIH0sXHJcbiAgICB7IHZhbHVlOiBcInZhbmlsbGFcIiwgbGFiZWw6IFwiVmFuaWxsYVwiIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgZ2V0RW1wbG95ZWVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgaHR0cFxyXG4gICAgICAuZ2V0KGAvZW1wbG95ZWUke3F1ZXJ5U3RhdHVzfWApXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc1wiLCByZXMpO1xyXG4gICAgICAgIHNldERhdGFUYWJsZShyZXMuZGF0YSk7XHJcbiAgICAgICAgaGFuZGxlQmxvY2tpbmcoZmFsc2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZWRsZVNvcnQgPSAoKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhxdWVyeVN0YXR1cyk7XHJcblxyXG4gICAgc2V0U29ydEZpcnN0TmFtZSghc29ydEZpcnN0TmFtZSk7XHJcblxyXG4gICAgaWYgKHNvcnRGaXJzdE5hbWUpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJhYWFcIiwgYWFhKTtcclxuICAgICAgc2V0UXVlcnkoXCI/X3NvcnQ9Zmlyc3RfbmFtZSZfb3JkZXI9YXNjXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJiYmJcIiwgYmJiKTtcclxuICAgICAgc2V0UXVlcnkoXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2V0RW1wbG95ZWVzKCk7XHJcbiAgICAvLyBpZiAoc29ydEZpcnN0TmFtZSkge1xyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgIC8vICAgc2V0UXVlcnkoeyAuLi5xdWVyeVN0YXR1cywgZmlyc3Q6IFwiXCIgfSk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInF1ZXJ5U3RhdHVzXCIsIHF1ZXJ5U3RhdHVzKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0RW1wbG95ZWVzKCk7XHJcbiAgfSwgW3F1ZXJ5U3RhdHVzXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxOYXZiYXIgYmc9XCJkYXJrXCIgdmFyaWFudD1cImRhcmtcIj5cclxuICAgICAgICA8TmF2YmFyLkJyYW5kIGhyZWY9XCIjaG9tZVwiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICBzcmM9e1wiL2xvZ28xOTIucG5nXCJ9XHJcbiAgICAgICAgICAgIHdpZHRoPVwiMzBcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCIzMFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIGFsaWduLXRvcCBtci0yXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICBSZWFjdCBCb290c3RyYXBcclxuICAgICAgICA8L05hdmJhci5CcmFuZD5cclxuICAgICAgPC9OYXZiYXI+XHJcbiAgICAgIHsvKiA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUJsb2NraW5nKCFibG9ja2luZyl9IGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgIFRvZ2dsZSBCbG9ja1xyXG4gICAgICA8L0J1dHRvbj4gKi99XHJcbiAgICAgIDxCbG9ja1VpIHRhZz1cImRpdlwiIGJsb2NraW5nPXtibG9ja2luZ30+XHJcbiAgICAgICAgPENvbnRhaW5lciBmbHVpZCBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezZ9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgdGV4dC1zbS1yaWdodCB0ZXh0LWNlbnRlciBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5EYXRlIDogPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgbG9jYWxlPVwidGhcIlxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZD17ZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiBzZXREYXRlKGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17Nn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMCB0ZXh0LXNtLWxlZnQgdGV4dC1jZW50ZXIgbXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+VGltZSA6IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXt0aW1lfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGUpID0+IHNldFRpbWUoZGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgIHNob3dUaW1lSW5wdXRcclxuICAgICAgICAgICAgICAgICAgc2hvd1RpbWVTZWxlY3RPbmx5XHJcbiAgICAgICAgICAgICAgICAgIHRpbWVDYXB0aW9uPVwiVGltZVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJISDptbVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJtdC0yXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IHctMTAwIHB4LTNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgbXItYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj4xMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPjIwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+MzA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj41MDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPjEwMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPFBhZ2luYXRpb25cclxuICAgICAgICAgICAgICAgICAgaGlkZURpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgIGl0ZW1DbGFzcz1cInBhZ2UtaXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgIGxpbmtDbGFzcz1cInBhZ2UtbGlua1wiXHJcbiAgICAgICAgICAgICAgICAgIC8vIGZpcnN0UGFnZVRleHQ9XCJGaXJzdFwiXHJcbiAgICAgICAgICAgICAgICAgIC8vIGxhc3RQYWdlVGV4dD1cIkxhc3RcIlxyXG4gICAgICAgICAgICAgICAgICBwYWdlUmFuZ2VEaXNwbGF5ZWQ9ezN9XHJcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2U9e2FjdGl2ZVBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgIGl0ZW1zQ291bnRQZXJQYWdlPXsxMH1cclxuICAgICAgICAgICAgICAgICAgdG90YWxJdGVtc0NvdW50PXsxMDB9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsocGFnZU51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZVBhZ2UocGFnZU51bWJlcik7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBoYW5lZGxlU29ydCgpfT5jbGljazwvZGl2PlxyXG4gICAgICAgICAgICA8Q29sIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZWRsZVNvcnQoKX0+Rmlyc3QgTmFtZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgeyFzb3J0Rmlyc3ROYW1lICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImljb25zL3NvcnQtYXJyb3dzLWNvdXBsZS1wb2ludGluZy11cC1hbmQtZG93bi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAge3NvcnRGaXJzdE5hbWUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17XCJpY29ucy9zb3J0LXVwLnBuZ1wifSBoZWlnaHQ9XCIxNlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgTGFzdCBOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpY29ucy9zb3J0LWFycm93cy1jb3VwbGUtcG9pbnRpbmctdXAtYW5kLWRvd24ucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDx0aD5FbWFpbDwvdGg+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICAgICAgICAgIEdlbmRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWNvbnMvc29ydC1hcnJvd3MtY291cGxlLXBvaW50aW5nLXVwLWFuZC1kb3duLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8dGg+SVAgQWRkcmVzczwvdGg+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAge2RhdGFUYWJsZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFUYWJsZS5tYXAoKHJvdywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aSArIDF9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntyb3cuZmlyc3RfbmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Jvdy5sYXN0X25hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDx0ZD57cm93LmVtYWlsfTwvdGQ+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Jvdy5nZW5kZXJ9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDx0ZD57cm93LmlwX2FkZHJlc3N9PC90ZD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgIDxwcmU+PC9wcmU+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPXsxMn0+ey8qIDxTZWxlY3Qgb3B0aW9ucz17b3B0aW9uc30gLz4gKi99PC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9CbG9ja1VpPlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/albums",{

/***/ "./components/Cards/Card.js":
/*!**********************************!*\
  !*** ./components/Cards/Card.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n\n\n\nfunction _Card(d) {\n    console.log(d['d'].title);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card, {\n        style: {\n            width: '18rem'\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Body, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Title, {\n                    children: d.title\n                }, void 0, false, {\n                    fileName: \"/Users/jean/Documents/GitHub/my-nextJS-app/components/Cards/Card.js\",\n                    lineNumber: 10,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Subtitle, {\n                    className: \"mb-2 text-muted\",\n                    children: [\n                        \"Album id: \",\n                        d.id\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jean/Documents/GitHub/my-nextJS-app/components/Cards/Card.js\",\n                    lineNumber: 11,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Text, {\n                    children: \"Some quick example text to build on the card title and make up the bulk of the content.\"\n                }, void 0, false, {\n                    fileName: \"/Users/jean/Documents/GitHub/my-nextJS-app/components/Cards/Card.js\",\n                    lineNumber: 12,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jean/Documents/GitHub/my-nextJS-app/components/Cards/Card.js\",\n            lineNumber: 9,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jean/Documents/GitHub/my-nextJS-app/components/Cards/Card.js\",\n        lineNumber: 8,\n        columnNumber: 13\n    }, this));\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Card);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcmRzL0NhcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF5QjtBQUNhO1NBRTdCRSxLQUFLLENBQUNDLENBQUMsRUFBRSxDQUFDO0lBRWZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixDQUFDLENBQUMsQ0FBRyxJQUFFRyxLQUFLO0lBRXhCLE1BQU0sNkVBQUdMLGlEQUFJO1FBQUNNLEtBQUssRUFBRSxDQUFDO1lBQUNDLEtBQUssRUFBRSxDQUFPO1FBQUMsQ0FBQzs4RkFDbENQLHNEQUFTOzs0RkFDTEEsdURBQVU7OEJBQUVFLENBQUMsQ0FBQ0csS0FBSzs7Ozs7OzRGQUNuQkwsMERBQWE7b0JBQUNXLFNBQVMsRUFBQyxDQUFpQjs7d0JBQUMsQ0FBVTt3QkFBQ1QsQ0FBQyxDQUFDVSxFQUFFOzs7Ozs7OzRGQUN6RFosc0RBQVM7OEJBQUMsQ0FHWDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHWixDQUFDO0FBRUQsK0RBQWVDLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NhcmRzL0NhcmQuanM/ZDlhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmZ1bmN0aW9uIF9DYXJkKGQpIHtcblxuICAgIGNvbnNvbGUubG9nKGRbJ2QnXS50aXRsZSk7XG4gICAgXG4gICAgcmV0dXJuICg8Q2FyZCBzdHlsZT17eyB3aWR0aDogJzE4cmVtJyB9fT5cbiAgICAgICAgPENhcmQuQm9keT5cbiAgICAgICAgICAgIDxDYXJkLlRpdGxlPntkLnRpdGxlfTwvQ2FyZC5UaXRsZT5cbiAgICAgICAgICAgIDxDYXJkLlN1YnRpdGxlIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1tdXRlZFwiPkFsYnVtIGlkOiB7ZC5pZH08L0NhcmQuU3VidGl0bGU+XG4gICAgICAgICAgICA8Q2FyZC5UZXh0PlxuICAgICAgICAgICAgICAgIFNvbWUgcXVpY2sgZXhhbXBsZSB0ZXh0IHRvIGJ1aWxkIG9uIHRoZSBjYXJkIHRpdGxlIGFuZCBtYWtlIHVwIHRoZSBidWxrIG9mXG4gICAgICAgICAgICAgICAgdGhlIGNvbnRlbnQuXG4gICAgICAgICAgICA8L0NhcmQuVGV4dD5cbiAgICAgICAgPC9DYXJkLkJvZHk+XG4gICAgPC9DYXJkPik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IF9DYXJkOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNhcmQiLCJfQ2FyZCIsImQiLCJjb25zb2xlIiwibG9nIiwidGl0bGUiLCJzdHlsZSIsIndpZHRoIiwiQm9keSIsIlRpdGxlIiwiU3VidGl0bGUiLCJjbGFzc05hbWUiLCJpZCIsIlRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Cards/Card.js\n");

/***/ })

});
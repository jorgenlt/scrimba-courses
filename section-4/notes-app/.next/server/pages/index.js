/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/components/Editor.js":
/*!****************************************!*\
  !*** ./src/pages/components/Editor.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Editor)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_mde__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-mde */ \"react-mde\");\n/* harmony import */ var react_mde__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_mde__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var showdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! showdown */ \"showdown\");\n/* harmony import */ var showdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(showdown__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Editor({ currentNote , updateNote  }) {\n    const [selectedTab, setSelectedTab] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"write\");\n    const converter = new (showdown__WEBPACK_IMPORTED_MODULE_3___default().Converter)({\n        tables: true,\n        simplifiedAutoLink: true,\n        strikethrough: true,\n        tasklists: true\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"pane editor\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_mde__WEBPACK_IMPORTED_MODULE_2___default()), {\n            value: currentNote.body,\n            onChange: updateNote,\n            selectedTab: selectedTab,\n            onTabChange: setSelectedTab,\n            generateMarkdownPreview: (markdown)=>Promise.resolve(converter.makeHtml(markdown)),\n            minEditorHeight: 80,\n            heightUnits: \"vh\"\n        }, void 0, false, {\n            fileName: \"/home/jlt/react-fcc/section-4/notes-app/src/pages/components/Editor.js\",\n            lineNumber: 17,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/jlt/react-fcc/section-4/notes-app/src/pages/components/Editor.js\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29tcG9uZW50cy9FZGl0b3IuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNPO0FBQ0Q7QUFFaEIsU0FBU0csT0FBTyxFQUFFQyxZQUFXLEVBQUVDLFdBQVUsRUFBRSxFQUFFO0lBQ3hELE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHUCxxREFBYyxDQUFDO0lBRXJELE1BQU1TLFlBQVksSUFBSVAsMkRBQWtCLENBQUM7UUFDckNTLFFBQVEsSUFBSTtRQUNaQyxvQkFBb0IsSUFBSTtRQUN4QkMsZUFBZSxJQUFJO1FBQ25CQyxXQUFXLElBQUk7SUFDbkI7SUFFQSxxQkFDSSw4REFBQ0M7UUFBUUMsV0FBVTtrQkFDZiw0RUFBQ2Ysa0RBQVFBO1lBQ0xnQixPQUFPYixZQUFZYyxJQUFJO1lBQ3ZCQyxVQUFVZDtZQUNWQyxhQUFhQTtZQUNiYyxhQUFhYjtZQUNiYyx5QkFBeUIsQ0FBQ0MsV0FDdEJDLFFBQVFDLE9BQU8sQ0FBQ2YsVUFBVWdCLFFBQVEsQ0FBQ0g7WUFFdkNJLGlCQUFpQjtZQUNqQkMsYUFBWTs7Ozs7Ozs7Ozs7QUFJNUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25vdGVzLWFwcC8uL3NyYy9wYWdlcy9jb21wb25lbnRzL0VkaXRvci5qcz81YTQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFJlYWN0TWRlIGZyb20gXCJyZWFjdC1tZGVcIlxuaW1wb3J0IFNob3dkb3duIGZyb20gXCJzaG93ZG93blwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRvcih7IGN1cnJlbnROb3RlLCB1cGRhdGVOb3RlIH0pIHtcbiAgICBjb25zdCBbc2VsZWN0ZWRUYWIsIHNldFNlbGVjdGVkVGFiXSA9IFJlYWN0LnVzZVN0YXRlKFwid3JpdGVcIilcblxuICAgIGNvbnN0IGNvbnZlcnRlciA9IG5ldyBTaG93ZG93bi5Db252ZXJ0ZXIoe1xuICAgICAgICB0YWJsZXM6IHRydWUsXG4gICAgICAgIHNpbXBsaWZpZWRBdXRvTGluazogdHJ1ZSxcbiAgICAgICAgc3RyaWtldGhyb3VnaDogdHJ1ZSxcbiAgICAgICAgdGFza2xpc3RzOiB0cnVlLFxuICAgIH0pICBcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBhbmUgZWRpdG9yXCI+XG4gICAgICAgICAgICA8UmVhY3RNZGVcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y3VycmVudE5vdGUuYm9keX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlTm90ZX1cbiAgICAgICAgICAgICAgICBzZWxlY3RlZFRhYj17c2VsZWN0ZWRUYWJ9XG4gICAgICAgICAgICAgICAgb25UYWJDaGFuZ2U9e3NldFNlbGVjdGVkVGFifVxuICAgICAgICAgICAgICAgIGdlbmVyYXRlTWFya2Rvd25QcmV2aWV3PXsobWFya2Rvd24pID0+XG4gICAgICAgICAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZShjb252ZXJ0ZXIubWFrZUh0bWwobWFya2Rvd24pKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtaW5FZGl0b3JIZWlnaHQ9ezgwfVxuICAgICAgICAgICAgICAgIGhlaWdodFVuaXRzPVwidmhcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0TWRlIiwiU2hvd2Rvd24iLCJFZGl0b3IiLCJjdXJyZW50Tm90ZSIsInVwZGF0ZU5vdGUiLCJzZWxlY3RlZFRhYiIsInNldFNlbGVjdGVkVGFiIiwidXNlU3RhdGUiLCJjb252ZXJ0ZXIiLCJDb252ZXJ0ZXIiLCJ0YWJsZXMiLCJzaW1wbGlmaWVkQXV0b0xpbmsiLCJzdHJpa2V0aHJvdWdoIiwidGFza2xpc3RzIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsInZhbHVlIiwiYm9keSIsIm9uQ2hhbmdlIiwib25UYWJDaGFuZ2UiLCJnZW5lcmF0ZU1hcmtkb3duUHJldmlldyIsIm1hcmtkb3duIiwiUHJvbWlzZSIsInJlc29sdmUiLCJtYWtlSHRtbCIsIm1pbkVkaXRvckhlaWdodCIsImhlaWdodFVuaXRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/components/Editor.js\n");

/***/ }),

/***/ "./src/pages/components/Sidebar.js":
/*!*****************************************!*\
  !*** ./src/pages/components/Sidebar.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Sidebar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Sidebar(props) {\n    const noteElements = props.notes.map((note, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: `title ${note.id === props.currentNote.id ? \"selected-note\" : \"\"}`,\n                onClick: ()=>props.setCurrentNoteId(note.id),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    className: \"text-snippet\",\n                    children: [\n                        \"Note \",\n                        index + 1\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/jlt/react-fcc/section-4/notes-app/src/pages/components/Sidebar.js\",\n                    lineNumber: 13,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/jlt/react-fcc/section-4/notes-app/src/pages/components/Sidebar.js\",\n                lineNumber: 6,\n                columnNumber: 13\n            }, this)\n        }, note.id, false, {\n            fileName: \"/home/jlt/react-fcc/section-4/notes-app/src/pages/components/Sidebar.js\",\n            lineNumber: 5,\n            columnNumber: 9\n        }, this));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"pane sidebar\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sidebar--header\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Notes\"\n                    }, void 0, false, {\n                        fileName: \"/home/jlt/react-fcc/section-4/notes-app/src/pages/components/Sidebar.js\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"new-note\",\n                        onClick: props.newNote,\n                        children: \"+\"\n                    }, void 0, false, {\n                        fileName: \"/home/jlt/react-fcc/section-4/notes-app/src/pages/components/Sidebar.js\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jlt/react-fcc/section-4/notes-app/src/pages/components/Sidebar.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this),\n            noteElements\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jlt/react-fcc/section-4/notes-app/src/pages/components/Sidebar.js\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29tcG9uZW50cy9TaWRlYmFyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF5QjtBQUVWLFNBQVNDLFFBQVFDLEtBQUssRUFBRTtJQUNuQyxNQUFNQyxlQUFlRCxNQUFNRSxLQUFLLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDeEMsOERBQUNDO3NCQUNHLDRFQUFDQTtnQkFFR0MsV0FBVyxDQUFDLE1BQU0sRUFDZEgsS0FBS0ksRUFBRSxLQUFLUixNQUFNUyxXQUFXLENBQUNELEVBQUUsR0FBRyxrQkFBa0IsRUFBRSxDQUMxRCxDQUFDO2dCQUNGRSxTQUFTLElBQU1WLE1BQU1XLGdCQUFnQixDQUFDUCxLQUFLSSxFQUFFOzBCQUU3Qyw0RUFBQ0k7b0JBQUdMLFdBQVU7O3dCQUFlO3dCQUFNRixRQUFROzs7Ozs7Ozs7Ozs7V0FSekNELEtBQUtJLEVBQUU7Ozs7O0lBYXJCLHFCQUNJLDhEQUFDSztRQUFRTixXQUFVOzswQkFDZiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDTztrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQzt3QkFBT1IsV0FBVTt3QkFBV0csU0FBU1YsTUFBTWdCLE9BQU87a0NBQUU7Ozs7Ozs7Ozs7OztZQUV4RGY7Ozs7Ozs7QUFHYixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm90ZXMtYXBwLy4vc3JjL3BhZ2VzL2NvbXBvbmVudHMvU2lkZWJhci5qcz85NjUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlYmFyKHByb3BzKSB7XG4gICAgY29uc3Qgbm90ZUVsZW1lbnRzID0gcHJvcHMubm90ZXMubWFwKChub3RlLCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17bm90ZS5pZH0+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGl0bGUgJHtcbiAgICAgICAgICAgICAgICAgICAgbm90ZS5pZCA9PT0gcHJvcHMuY3VycmVudE5vdGUuaWQgPyBcInNlbGVjdGVkLW5vdGVcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zZXRDdXJyZW50Tm90ZUlkKG5vdGUuaWQpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LXNuaXBwZXRcIj5Ob3RlIHtpbmRleCArIDF9PC9oND5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicGFuZSBzaWRlYmFyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxoMz5Ob3RlczwvaDM+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuZXctbm90ZVwiIG9uQ2xpY2s9e3Byb3BzLm5ld05vdGV9Pis8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge25vdGVFbGVtZW50c31cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlNpZGViYXIiLCJwcm9wcyIsIm5vdGVFbGVtZW50cyIsIm5vdGVzIiwibWFwIiwibm90ZSIsImluZGV4IiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiLCJjdXJyZW50Tm90ZSIsIm9uQ2xpY2siLCJzZXRDdXJyZW50Tm90ZUlkIiwiaDQiLCJzZWN0aW9uIiwiaDMiLCJidXR0b24iLCJuZXdOb3RlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/components/Sidebar.js\n");

/***/ }),

/***/ "./src/pages/data.js":
/*!***************************!*\
  !*** ./src/pages/data.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"data\": () => (/* binding */ data)\n/* harmony export */ });\nconst data = [\n    {\n        id: 1,\n        body: `### This just in!\n\nMarkdown is an *awesome* way to write **very basic HTML** by typing manually\n\nIt can be used for:\n\n1. README files\n1. Slack and Discord messages\n1. **So much more!**\n\n---\n\nHere's a division 👆`\n    },\n    {\n        id: 2,\n        body: `a`\n    },\n    {\n        id: 3,\n        body: `b`\n    },\n    {\n        id: 4,\n        body: `c`\n    },\n    {\n        id: 5,\n        body: `d`\n    },\n    {\n        id: 6,\n        body: `e`\n    }\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGF0YS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsT0FBTztJQUNoQjtRQUNJQyxJQUFJO1FBQ0pDLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7O29CQVlLLENBQUM7SUFDakI7SUFDQTtRQUFFRCxJQUFJO1FBQUdDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFBQztJQUNuQjtRQUFFRCxJQUFJO1FBQUdDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFBQztJQUNuQjtRQUFFRCxJQUFJO1FBQUdDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFBQztJQUNuQjtRQUFFRCxJQUFJO1FBQUdDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFBQztJQUNuQjtRQUFFRCxJQUFJO1FBQUdDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFBQztDQUN0QiIsInNvdXJjZXMiOlsid2VicGFjazovL25vdGVzLWFwcC8uL3NyYy9wYWdlcy9kYXRhLmpzP2ExZmQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGRhdGEgPSBbXG4gICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgYm9keTogYCMjIyBUaGlzIGp1c3QgaW4hXG5cbk1hcmtkb3duIGlzIGFuICphd2Vzb21lKiB3YXkgdG8gd3JpdGUgKip2ZXJ5IGJhc2ljIEhUTUwqKiBieSB0eXBpbmcgbWFudWFsbHlcblxuSXQgY2FuIGJlIHVzZWQgZm9yOlxuXG4xLiBSRUFETUUgZmlsZXNcbjEuIFNsYWNrIGFuZCBEaXNjb3JkIG1lc3NhZ2VzXG4xLiAqKlNvIG11Y2ggbW9yZSEqKlxuXG4tLS1cblxuSGVyZSdzIGEgZGl2aXNpb24g8J+RhmAsXG4gICAgfSxcbiAgICB7IGlkOiAyLCBib2R5OiBgYWAgfSxcbiAgICB7IGlkOiAzLCBib2R5OiBgYmAgfSxcbiAgICB7IGlkOiA0LCBib2R5OiBgY2AgfSxcbiAgICB7IGlkOiA1LCBib2R5OiBgZGAgfSxcbiAgICB7IGlkOiA2LCBib2R5OiBgZWAgfSxcbl1cbiJdLCJuYW1lcyI6WyJkYXRhIiwiaWQiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/data.js\n");

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Sidebar */ \"./src/pages/components/Sidebar.js\");\n/* harmony import */ var _components_Editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Editor */ \"./src/pages/components/Editor.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data */ \"./src/pages/data.js\");\n/* harmony import */ var react_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-split */ \"react-split\");\n/* harmony import */ var react_split__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_split__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nanoid */ \"nanoid\");\n/* harmony import */ var react_mde_lib_styles_css_react_mde_all_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-mde/lib/styles/css/react-mde-all.css */ \"./node_modules/react-mde/lib/styles/css/react-mde-all.css\");\n/* harmony import */ var react_mde_lib_styles_css_react_mde_all_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_mde_lib_styles_css_react_mde_all_css__WEBPACK_IMPORTED_MODULE_8__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([nanoid__WEBPACK_IMPORTED_MODULE_7__]);\nnanoid__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    const [notes, setNotes] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    const [currentNoteId, setCurrentNoteId] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(notes[0] && notes[0].id || \"\");\n    function createNewNote() {\n        const newNote = {\n            id: (0,nanoid__WEBPACK_IMPORTED_MODULE_7__.nanoid)(),\n            body: \"# Type your markdown note's title here\"\n        };\n        setNotes((prevNotes)=>[\n                newNote,\n                ...prevNotes\n            ]);\n        setCurrentNoteId(newNote.id);\n    }\n    function updateNote(text) {\n        setNotes((oldNotes)=>oldNotes.map((oldNote)=>{\n                return oldNote.id === currentNoteId ? {\n                    ...oldNote,\n                    body: text\n                } : oldNote;\n            }));\n    }\n    function findCurrentNote() {\n        return notes.find((note)=>{\n            return note.id === currentNoteId;\n        }) || notes[0];\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Notes App\"\n                    }, void 0, false, {\n                        fileName: \"/home/jlt/react-fcc/section-4/notes-app/src/pages/index.js\",\n                        lineNumber: 42,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Notes App\"\n                    }, void 0, false, {\n                        fileName: \"/home/jlt/react-fcc/section-4/notes-app/src/pages/index.js\",\n                        lineNumber: 43,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/home/jlt/react-fcc/section-4/notes-app/src/pages/index.js\",\n                        lineNumber: 44,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/jlt/react-fcc/section-4/notes-app/src/pages/index.js\",\n                        lineNumber: 45,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jlt/react-fcc/section-4/notes-app/src/pages/index.js\",\n                lineNumber: 41,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: notes.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_split__WEBPACK_IMPORTED_MODULE_6___default()), {\n                    sizes: [\n                        30,\n                        70\n                    ],\n                    direction: \"horizontal\",\n                    className: \"split\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            notes: notes,\n                            currentNote: findCurrentNote(),\n                            setCurrentNoteId: setCurrentNoteId,\n                            newNote: createNewNote\n                        }, void 0, false, {\n                            fileName: \"/home/jlt/react-fcc/section-4/notes-app/src/pages/index.js\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, this),\n                        currentNoteId && notes.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Editor__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            currentNote: findCurrentNote(),\n                            updateNote: updateNote\n                        }, void 0, false, {\n                            fileName: \"/home/jlt/react-fcc/section-4/notes-app/src/pages/index.js\",\n                            lineNumber: 65,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/jlt/react-fcc/section-4/notes-app/src/pages/index.js\",\n                    lineNumber: 51,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"no-notes\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"You have no notes\"\n                        }, void 0, false, {\n                            fileName: \"/home/jlt/react-fcc/section-4/notes-app/src/pages/index.js\",\n                            lineNumber: 73,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"first-note\",\n                            onClick: createNewNote,\n                            children: \"Create one now\"\n                        }, void 0, false, {\n                            fileName: \"/home/jlt/react-fcc/section-4/notes-app/src/pages/index.js\",\n                            lineNumber: 74,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/jlt/react-fcc/section-4/notes-app/src/pages/index.js\",\n                    lineNumber: 72,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/jlt/react-fcc/section-4/notes-app/src/pages/index.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNHO0FBQ2M7QUFDRjtBQUNYO0FBQ0U7QUFDRjtBQUN1QjtBQUVyQyxTQUFTTyxPQUFPO0lBQzdCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHVCxxREFBYyxDQUFDLEVBQUU7SUFDM0MsTUFBTSxDQUFDVyxlQUFlQyxpQkFBaUIsR0FBR1oscURBQWMsQ0FDdEQsS0FBTSxDQUFDLEVBQUUsSUFBSVEsS0FBSyxDQUFDLEVBQUUsQ0FBQ0ssRUFBRSxJQUFLO0lBRy9CLFNBQVNDLGdCQUFnQjtRQUN2QixNQUFNQyxVQUFVO1lBQ2RGLElBQUlQLDhDQUFNQTtZQUNWVSxNQUFNO1FBQ1I7UUFDQVAsU0FBU1EsQ0FBQUEsWUFBYTtnQkFBQ0Y7bUJBQVlFO2FBQVU7UUFDN0NMLGlCQUFpQkcsUUFBUUYsRUFBRTtJQUM3QjtJQUVBLFNBQVNLLFdBQVdDLElBQUksRUFBRTtRQUN4QlYsU0FBU1csQ0FBQUEsV0FBWUEsU0FBU0MsR0FBRyxDQUFDQyxDQUFBQSxVQUFXO2dCQUMzQyxPQUFPQSxRQUFRVCxFQUFFLEtBQUtGLGdCQUNwQjtvQkFBRSxHQUFHVyxPQUFPO29CQUFFTixNQUFNRztnQkFBSyxJQUN6QkcsT0FBTztZQUNYO0lBQ0Y7SUFFQSxTQUFTQyxrQkFBa0I7UUFDekIsT0FBT2YsTUFBTWdCLElBQUksQ0FBQ0MsQ0FBQUEsT0FBUTtZQUN4QixPQUFPQSxLQUFLWixFQUFFLEtBQUtGO1FBQ3JCLE1BQU1ILEtBQUssQ0FBQyxFQUFFO0lBQ2hCO0lBRUEscUJBQ0U7OzBCQUNBLDhEQUFDUCxrREFBSUE7O2tDQUNMLDhEQUFDeUI7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNGO3dCQUFLQyxNQUFLO3dCQUFXQyxTQUFROzs7Ozs7a0NBQzlCLDhEQUFDQzt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUVwQiw4REFBQ0M7MEJBRUd6QixNQUFNMEIsTUFBTSxHQUFHLGtCQUVmLDhEQUFDN0Isb0RBQUtBO29CQUNKOEIsT0FBTzt3QkFBQzt3QkFBSTtxQkFBRztvQkFDZkMsV0FBVTtvQkFDVkMsV0FBVTs7c0NBRVYsOERBQUNuQywyREFBT0E7NEJBQ05NLE9BQU9BOzRCQUNQOEIsYUFBYWY7NEJBQ2JYLGtCQUFrQkE7NEJBQ2xCRyxTQUFTRDs7Ozs7O3dCQUdUSCxpQkFDQUgsTUFBTTBCLE1BQU0sR0FBRyxtQkFDZiw4REFBQy9CLDBEQUFNQTs0QkFDUG1DLGFBQWFmOzRCQUNiTCxZQUFZQTs7Ozs7Ozs7Ozs7eUNBS2hCLDhEQUFDcUI7b0JBQUlGLFdBQVU7O3NDQUNiLDhEQUFDRztzQ0FBRzs7Ozs7O3NDQUNKLDhEQUFDQzs0QkFDQ0osV0FBVTs0QkFDVkssU0FBUzVCO3NDQUNWOzs7Ozs7Ozs7Ozt3QkFHRzs7Ozs7Ozs7QUFNaEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25vdGVzLWFwcC8uL3NyYy9wYWdlcy9pbmRleC5qcz80MDgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuL2NvbXBvbmVudHMvU2lkZWJhclwiXG5pbXBvcnQgRWRpdG9yIGZyb20gXCIuL2NvbXBvbmVudHMvRWRpdG9yXCJcbmltcG9ydCB7IGRhdGEgfSBmcm9tIFwiLi9kYXRhXCJcbmltcG9ydCBTcGxpdCBmcm9tIFwicmVhY3Qtc3BsaXRcIlxuaW1wb3J0IHtuYW5vaWR9IGZyb20gXCJuYW5vaWRcIlxuaW1wb3J0IFwicmVhY3QtbWRlL2xpYi9zdHlsZXMvY3NzL3JlYWN0LW1kZS1hbGwuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtub3Rlcywgc2V0Tm90ZXNdID0gUmVhY3QudXNlU3RhdGUoW10pXG4gIGNvbnN0IFtjdXJyZW50Tm90ZUlkLCBzZXRDdXJyZW50Tm90ZUlkXSA9IFJlYWN0LnVzZVN0YXRlKFxuICAgIChub3Rlc1swXSAmJiBub3Rlc1swXS5pZCkgfHwgXCJcIlxuICAgIClcbiAgICBcbiAgZnVuY3Rpb24gY3JlYXRlTmV3Tm90ZSgpIHtcbiAgICBjb25zdCBuZXdOb3RlID0ge1xuICAgICAgaWQ6IG5hbm9pZCgpLFxuICAgICAgYm9keTogXCIjIFR5cGUgeW91ciBtYXJrZG93biBub3RlJ3MgdGl0bGUgaGVyZVwiXG4gICAgfVxuICAgIHNldE5vdGVzKHByZXZOb3RlcyA9PiBbbmV3Tm90ZSwgLi4ucHJldk5vdGVzXSlcbiAgICBzZXRDdXJyZW50Tm90ZUlkKG5ld05vdGUuaWQpXG4gIH1cbiAgXG4gIGZ1bmN0aW9uIHVwZGF0ZU5vdGUodGV4dCkge1xuICAgIHNldE5vdGVzKG9sZE5vdGVzID0+IG9sZE5vdGVzLm1hcChvbGROb3RlID0+IHtcbiAgICAgIHJldHVybiBvbGROb3RlLmlkID09PSBjdXJyZW50Tm90ZUlkXG4gICAgICA/IHsgLi4ub2xkTm90ZSwgYm9keTogdGV4dCB9XG4gICAgICA6IG9sZE5vdGVcbiAgICB9KSlcbiAgfVxuICBcbiAgZnVuY3Rpb24gZmluZEN1cnJlbnROb3RlKCkge1xuICAgIHJldHVybiBub3Rlcy5maW5kKG5vdGUgPT4ge1xuICAgICAgcmV0dXJuIG5vdGUuaWQgPT09IGN1cnJlbnROb3RlSWRcbiAgICB9KSB8fCBub3Rlc1swXVxuICB9XG4gIFxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPEhlYWQ+XG4gICAgPHRpdGxlPk5vdGVzIEFwcDwvdGl0bGU+XG4gICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIk5vdGVzIEFwcFwiIC8+XG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgPC9IZWFkPlxuICAgICAgPG1haW4+XG4gICAgICAgIHtcbiAgICAgICAgICBub3Rlcy5sZW5ndGggPiAwIFxuICAgICAgICAgID9cbiAgICAgICAgICA8U3BsaXQgXG4gICAgICAgICAgICBzaXplcz17WzMwLCA3MF19IFxuICAgICAgICAgICAgZGlyZWN0aW9uPVwiaG9yaXpvbnRhbFwiIFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic3BsaXRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxTaWRlYmFyXG4gICAgICAgICAgICAgIG5vdGVzPXtub3Rlc31cbiAgICAgICAgICAgICAgY3VycmVudE5vdGU9e2ZpbmRDdXJyZW50Tm90ZSgpfVxuICAgICAgICAgICAgICBzZXRDdXJyZW50Tm90ZUlkPXtzZXRDdXJyZW50Tm90ZUlkfVxuICAgICAgICAgICAgICBuZXdOb3RlPXtjcmVhdGVOZXdOb3RlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY3VycmVudE5vdGVJZCAmJiBcbiAgICAgICAgICAgICAgbm90ZXMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICA8RWRpdG9yIFxuICAgICAgICAgICAgICBjdXJyZW50Tm90ZT17ZmluZEN1cnJlbnROb3RlKCl9IFxuICAgICAgICAgICAgICB1cGRhdGVOb3RlPXt1cGRhdGVOb3RlfSBcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L1NwbGl0PlxuICAgICAgICAgIDpcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vLW5vdGVzXCI+XG4gICAgICAgICAgICA8aDE+WW91IGhhdmUgbm8gbm90ZXM8L2gxPlxuICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlyc3Qtbm90ZVwiIFxuICAgICAgICAgICAgICBvbkNsaWNrPXtjcmVhdGVOZXdOb3RlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDcmVhdGUgb25lIG5vd1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKVxufVxuICAgICJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWQiLCJTaWRlYmFyIiwiRWRpdG9yIiwiZGF0YSIsIlNwbGl0IiwibmFub2lkIiwiSG9tZSIsIm5vdGVzIiwic2V0Tm90ZXMiLCJ1c2VTdGF0ZSIsImN1cnJlbnROb3RlSWQiLCJzZXRDdXJyZW50Tm90ZUlkIiwiaWQiLCJjcmVhdGVOZXdOb3RlIiwibmV3Tm90ZSIsImJvZHkiLCJwcmV2Tm90ZXMiLCJ1cGRhdGVOb3RlIiwidGV4dCIsIm9sZE5vdGVzIiwibWFwIiwib2xkTm90ZSIsImZpbmRDdXJyZW50Tm90ZSIsImZpbmQiLCJub3RlIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJsZW5ndGgiLCJzaXplcyIsImRpcmVjdGlvbiIsImNsYXNzTmFtZSIsImN1cnJlbnROb3RlIiwiZGl2IiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ }),

/***/ "./node_modules/react-mde/lib/styles/css/react-mde-all.css":
/*!*****************************************************************!*\
  !*** ./node_modules/react-mde/lib/styles/css/react-mde-all.css ***!
  \*****************************************************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-mde":
/*!****************************!*\
  !*** external "react-mde" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-mde");

/***/ }),

/***/ "react-split":
/*!******************************!*\
  !*** external "react-split" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-split");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "showdown":
/*!***************************!*\
  !*** external "showdown" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("showdown");

/***/ }),

/***/ "nanoid":
/*!*************************!*\
  !*** external "nanoid" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = import("nanoid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.js"));
module.exports = __webpack_exports__;

})();
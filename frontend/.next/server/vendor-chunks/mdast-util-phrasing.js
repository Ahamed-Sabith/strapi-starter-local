"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mdast-util-phrasing";
exports.ids = ["vendor-chunks/mdast-util-phrasing"];
exports.modules = {

/***/ "(rsc)/./node_modules/mdast-util-phrasing/lib/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/mdast-util-phrasing/lib/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   phrasing: () => (/* binding */ phrasing)\n/* harmony export */ });\n/* harmony import */ var unist_util_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unist-util-is */ \"(rsc)/./node_modules/unist-util-is/lib/index.js\");\n/**\n * @typedef {import('mdast').PhrasingContent} PhrasingContent\n */\n\n\n\n/**\n * Check if the given value is *phrasing content*.\n *\n * > 👉 **Note**: Excludes `html`, which can be both phrasing or flow.\n *\n * @param node\n *   Thing to check, typically `Node`.\n * @returns\n *   Whether `value` is phrasing content.\n */\n\nconst phrasing =\n  /** @type {(node?: unknown) => node is PhrasingContent} */\n  (\n    (0,unist_util_is__WEBPACK_IMPORTED_MODULE_0__.convert)([\n      'break',\n      'delete',\n      'emphasis',\n      'footnote',\n      'footnoteReference',\n      'image',\n      'imageReference',\n      'inlineCode',\n      'link',\n      'linkReference',\n      'strong',\n      'text'\n    ])\n  )\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1waHJhc2luZy9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBLGFBQWEsaUNBQWlDO0FBQzlDOztBQUVxQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCxhQUFhLDZDQUE2QztBQUMxRDtBQUNBLElBQUksc0RBQU87QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1waHJhc2luZy9saWIvaW5kZXguanM/MzFhZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0JykuUGhyYXNpbmdDb250ZW50fSBQaHJhc2luZ0NvbnRlbnRcbiAqL1xuXG5pbXBvcnQge2NvbnZlcnR9IGZyb20gJ3VuaXN0LXV0aWwtaXMnXG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIGdpdmVuIHZhbHVlIGlzICpwaHJhc2luZyBjb250ZW50Ki5cbiAqXG4gKiA+IPCfkYkgKipOb3RlKio6IEV4Y2x1ZGVzIGBodG1sYCwgd2hpY2ggY2FuIGJlIGJvdGggcGhyYXNpbmcgb3IgZmxvdy5cbiAqXG4gKiBAcGFyYW0gbm9kZVxuICogICBUaGluZyB0byBjaGVjaywgdHlwaWNhbGx5IGBOb2RlYC5cbiAqIEByZXR1cm5zXG4gKiAgIFdoZXRoZXIgYHZhbHVlYCBpcyBwaHJhc2luZyBjb250ZW50LlxuICovXG5cbmV4cG9ydCBjb25zdCBwaHJhc2luZyA9XG4gIC8qKiBAdHlwZSB7KG5vZGU/OiB1bmtub3duKSA9PiBub2RlIGlzIFBocmFzaW5nQ29udGVudH0gKi9cbiAgKFxuICAgIGNvbnZlcnQoW1xuICAgICAgJ2JyZWFrJyxcbiAgICAgICdkZWxldGUnLFxuICAgICAgJ2VtcGhhc2lzJyxcbiAgICAgICdmb290bm90ZScsXG4gICAgICAnZm9vdG5vdGVSZWZlcmVuY2UnLFxuICAgICAgJ2ltYWdlJyxcbiAgICAgICdpbWFnZVJlZmVyZW5jZScsXG4gICAgICAnaW5saW5lQ29kZScsXG4gICAgICAnbGluaycsXG4gICAgICAnbGlua1JlZmVyZW5jZScsXG4gICAgICAnc3Ryb25nJyxcbiAgICAgICd0ZXh0J1xuICAgIF0pXG4gIClcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/mdast-util-phrasing/lib/index.js\n");

/***/ })

};
;
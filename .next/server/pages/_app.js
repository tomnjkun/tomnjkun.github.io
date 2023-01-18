(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6475:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
// EXTERNAL MODULE: external "@nextui-org/react"
var react_ = __webpack_require__(6735);
;// CONCATENATED MODULE: external "@react-aria/ssr"
const ssr_namespaceObject = require("@react-aria/ssr");
;// CONCATENATED MODULE: ./pages/_app.tsx




const theme = (0,react_.createTheme)({
    type: "dark"
});
function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(ssr_namespaceObject.SSRProvider, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.NextUIProvider, {
            theme: theme,
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
}


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 6735:
/***/ ((module) => {

"use strict";
module.exports = require("@nextui-org/react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6475));
module.exports = __webpack_exports__;

})();
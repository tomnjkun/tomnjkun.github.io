"use strict";
(() => {
var exports = {};
exports.id = 489;
exports.ids = [489];
exports.modules = {

/***/ 6534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ catalogs),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/layout/simpleLayout.tsx + 4 modules
var simpleLayout = __webpack_require__(5889);
// EXTERNAL MODULE: external "@nextui-org/react"
var react_ = __webpack_require__(6735);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/catalog/catalogCard.tsx



const CatalogCard = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Card, {
        isPressable: true,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Card.Body, {
                css: {
                    p: 0
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Card.Image, {
                    src: "https://nextui.org/images/fruit-1.jpeg",
                    objectFit: "cover",
                    width: "100%",
                    height: 140,
                    alt: props.title
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Card.Footer, {
                css: {
                    justifyItems: "flex-start"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Row, {
                    wrap: "wrap",
                    justify: "space-between",
                    align: "center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                            b: true,
                            children: props.title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "catalogs/" + props.title,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                size: "sm",
                                shadow: true,
                                color: "error",
                                children: "Learn more"
                            })
                        })
                    ]
                })
            })
        ]
    });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/catalog/catalog.tsx




const Catalog = ({ datas  })=>{
    //const [datas, setData] = useState<Data[] | null>([]);
    //get api
    /*useEffect(() => {
      async function fetchData() {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const datas = await res.json();
        setData(datas);
      }

      fetchData();
    }, []);

    if (datas === null) {
      return <p>Loading...</p>;
    }*/ console.log(datas);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid.Container, {
            gap: 2,
            justify: "center",
            children: datas.map((data)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
                    xs: 4,
                    justify: "center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(CatalogCard, {
                        title: data.name,
                        price: data.id
                    })
                }, data.id))
        })
    });
};

;// CONCATENATED MODULE: ./pages/catalogs/index.tsx





const CatalogIndex = ({ datas  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("main", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(simpleLayout/* SimpleLayout */.X, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Container, {
                    lg: true,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            children: "Fruit"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Catalog, {
                            datas: datas
                        })
                    ]
                })
            })
        })
    });
};
const getStaticProps = async ({ params  })=>{
    // Fetch data for the page here
    const datas = await fetchData();
    // Return the props for the page
    return {
        props: {
            datas
        }
    };
};
const fetchData = async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data;
};
/* harmony default export */ const catalogs = (CatalogIndex);


/***/ }),

/***/ 6735:
/***/ ((module) => {

module.exports = require("@nextui-org/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,889], () => (__webpack_exec__(6534)));
module.exports = __webpack_exports__;

})();
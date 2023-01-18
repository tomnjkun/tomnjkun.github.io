"use strict";
exports.id = 889;
exports.ids = [889];
exports.modules = {

/***/ 5889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "X": () => (/* binding */ SimpleLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@nextui-org/react"
var react_ = __webpack_require__(6735);
;// CONCATENATED MODULE: ./components/ts/box.ts

const Box = (0,react_.styled)("div", {
    boxSizing: "border-box"
});

;// CONCATENATED MODULE: ./components/layout.tsx


const Layout = ({ children  })=>/*#__PURE__*/ jsx_runtime_.jsx(Box, {
        css: {
            maxW: "100%"
        },
        children: children
    });

;// CONCATENATED MODULE: ./components/AcmeLogo.tsx

const AcmeLogo = ()=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
            fill: "none",
            height: "36",
            viewBox: "0 0 32 32",
            width: "36",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                    fill: "var(--secondary)",
                    height: "100%",
                    rx: "16",
                    width: "100%"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    clipRule: "evenodd",
                    d: "M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z",
                    fill: "currentColor",
                    fillRule: "evenodd"
                })
            ]
        })
    });

;// CONCATENATED MODULE: ./components/nav.tsx




function Nav() {
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Navbar, {
            isBordered: true,
            variant: "floating",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Navbar.Brand, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(AcmeLogo, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                            b: true,
                            color: "inherit",
                            hideIn: "xs",
                            children: "ACME"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Navbar.Content, {
                    hideIn: "xs",
                    variant: "highlight-rounded",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Navbar.Link, {
                            href: "/catalogs",
                            children: "Features"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Navbar.Link, {
                            isActive: true,
                            href: "#",
                            children: "Customers"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Navbar.Link, {
                            href: "#",
                            children: "Pricing"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Navbar.Link, {
                            href: "#",
                            children: "Company"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Navbar.Content, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Navbar.Link, {
                            color: "inherit",
                            href: "#",
                            children: "Login"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Navbar.Item, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                auto: true,
                                flat: true,
                                as: react_.Link,
                                href: "#",
                                children: "Sign Up"
                            })
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/layout/simpleLayout.tsx


const SimpleLayout = ({ children  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Nav, {}),
            children
        ]
    });


/***/ })

};
;
webpackHotUpdate_N_E("pages/Skills",{

/***/ "./Components/cardsP/cardsP.js":
/*!*************************************!*\
  !*** ./Components/cardsP/cardsP.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Context_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Context/Context */ "./Components/Context/Context.js");
/* harmony import */ var _cardP__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cardP */ "./Components/cardsP/cardP.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");


var _jsxFileName = "D:\\Programacion\\React\\portafolio\\Components\\cardsP\\cardsP.js",
    _this = undefined,
    _s = $RefreshSig$();






var CardsP = function CardsP() {
  _s();

  var data = [{
    title: "Hotel-Angular",
    descS: "Una aplicación web diseñada para la gestión de un hotel creada con el fin de aprendizaje ",
    descE: "Is a web application developed to the management of the hotel for educational purposes",
    imgURL: "/Hotel-Angular.png",
    video: "/primera.mp4"
  }, {
    title: "Venta",
    descS: "Un sitio web dinámico creado para administración de ventas de una pequeña empresa",
    descE: "dynamic Website made to manage the sales of a startup business for educational purposes",
    imgURL: "/venta.png",
    video: "/Ventas.mp4"
  }, {
    title: "Venta-Ionic",
    descS: "Adaptación de una aplicación web a aplicación móvil con tecnologías diferentes",
    descE: "using new and innovative technologies i created an a mobile application base on a website",
    imgURL: "/venta-Ionic.png",
    video: "/celular1.mp4"
  }];
  var MyContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_Context_Context__WEBPACK_IMPORTED_MODULE_2__["default"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      show = _useState[0],
      setShow = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      video = _useState2[0],
      setVideo = _useState2[1];

  var showV = function showV(state, vid) {
    setShow(state);
    setVideo(vid);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: show ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "Video-desc",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        onClick: function onClick() {
          showV(false);
        },
        children: "X"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "ratio ratio-21x9 vid",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("iframe", {
          src: video,
          className: "vid",
          title: "YouTube video",
          allowfullscreen: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container fondo",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row",
        children: MyContext.english ? data.map(function (i) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-4 pt-3 pb-3",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cardP__WEBPACK_IMPORTED_MODULE_3__["default"], {
              title: i.title,
              desc: i.descE,
              imgURL: i.imgURL,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
                onClick: function onClick() {
                  showV(true, i.video);
                },
                className: "mt-2",
                variant: "success",
                children: "Conocer mas"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 17
          }, _this);
        }) : data.map(function (i) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-4 pt-3 pb-3",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_cardP__WEBPACK_IMPORTED_MODULE_3__["default"], {
              title: i.title,
              desc: i.descS,
              imgURL: i.imgURL,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
                onClick: function onClick() {
                  showV(true, i.video);
                },
                className: "mt-2",
                variant: "success",
                children: "Conocer mas"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 17
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, _this);
};

_s(CardsP, "R3o8ZIp1NWiMjT2QsOPJ4Wenpbk=");

_c = CardsP;
/* harmony default export */ __webpack_exports__["default"] = (CardsP);

var _c;

$RefreshReg$(_c, "CardsP");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9jYXJkc1AvY2FyZHNQLmpzIl0sIm5hbWVzIjpbIkNhcmRzUCIsImRhdGEiLCJ0aXRsZSIsImRlc2NTIiwiZGVzY0UiLCJpbWdVUkwiLCJ2aWRlbyIsIk15Q29udGV4dCIsInVzZUNvbnRleHQiLCJDb250ZXh0IiwidXNlU3RhdGUiLCJzaG93Iiwic2V0U2hvdyIsInNldFZpZGVvIiwic2hvd1YiLCJzdGF0ZSIsInZpZCIsImVuZ2xpc2giLCJtYXAiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQ25CLE1BQU1DLElBQUksR0FBRyxDQUNYO0FBQUVDLFNBQUssRUFBRSxlQUFUO0FBQTBCQyxTQUFLLEVBQUUsMkZBQWpDO0FBQThIQyxTQUFLLEVBQUUsd0ZBQXJJO0FBQStOQyxVQUFNLEVBQUUsb0JBQXZPO0FBQTRQQyxTQUFLLEVBQUM7QUFBbFEsR0FEVyxFQUVYO0FBQUVKLFNBQUssRUFBRSxPQUFUO0FBQWtCQyxTQUFLLEVBQUUsbUZBQXpCO0FBQThHQyxTQUFLLEVBQUUseUZBQXJIO0FBQWdOQyxVQUFNLEVBQUUsWUFBeE47QUFBcU9DLFNBQUssRUFBQztBQUEzTyxHQUZXLEVBR1g7QUFBRUosU0FBSyxFQUFFLGFBQVQ7QUFBd0JDLFNBQUssRUFBRSxnRkFBL0I7QUFBaUhDLFNBQUssRUFBRSwyRkFBeEg7QUFBcU5DLFVBQU0sRUFBRSxrQkFBN047QUFBZ1BDLFNBQUssRUFBQztBQUF0UCxHQUhXLENBQWI7QUFLQSxNQUFNQyxTQUFTLEdBQUdDLHdEQUFVLENBQUNDLHdEQUFELENBQTVCOztBQU5tQixrQkFPS0Msc0RBQVEsQ0FBQyxLQUFELENBUGI7QUFBQSxNQU9aQyxJQVBZO0FBQUEsTUFPTkMsT0FQTTs7QUFBQSxtQkFRT0Ysc0RBQVEsQ0FBQyxFQUFELENBUmY7QUFBQSxNQVFaSixLQVJZO0FBQUEsTUFRTE8sUUFSSzs7QUFTbkIsTUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFPQyxHQUFQLEVBQWE7QUFDekJKLFdBQU8sQ0FBQ0csS0FBRCxDQUFQO0FBQ0FGLFlBQVEsQ0FBQ0csR0FBRCxDQUFSO0FBQ0QsR0FIRDs7QUFJQSxzQkFDRTtBQUFBLGNBQ0dMLElBQUksZ0JBQ0g7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBLDhCQUNFO0FBQUksZUFBTyxFQUFFLG1CQUFLO0FBQUNHLGVBQUssQ0FBQyxLQUFELENBQUw7QUFBYSxTQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDLHNCQUFmO0FBQUEsK0JBQ0U7QUFBUSxhQUFHLEVBQUVSLEtBQWI7QUFBb0IsbUJBQVMsRUFBQyxLQUE5QjtBQUFvQyxlQUFLLEVBQUMsZUFBMUM7QUFBMEQseUJBQWU7QUFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERyxnQkFRSDtBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsa0JBQ0dDLFNBQVMsQ0FBQ1UsT0FBVixHQUNDaEIsSUFBSSxDQUFDaUIsR0FBTCxDQUFTLFVBQUFDLENBQUM7QUFBQSw4QkFDUjtBQUFLLHFCQUFTLEVBQUMsb0JBQWY7QUFBQSxtQ0FDRSxxRUFBQyw4Q0FBRDtBQUFPLG1CQUFLLEVBQUVBLENBQUMsQ0FBQ2pCLEtBQWhCO0FBQXVCLGtCQUFJLEVBQUVpQixDQUFDLENBQUNmLEtBQS9CO0FBQXNDLG9CQUFNLEVBQUVlLENBQUMsQ0FBQ2QsTUFBaEQ7QUFBQSxxQ0FDRSxxRUFBQyw4REFBRDtBQUFRLHVCQUFPLEVBQUUsbUJBQUs7QUFBQ1MsdUJBQUssQ0FBQyxJQUFELEVBQU1LLENBQUMsQ0FBQ2IsS0FBUixDQUFMO0FBQW9CLGlCQUEzQztBQUE2Qyx5QkFBUyxFQUFDLE1BQXZEO0FBQThELHVCQUFPLEVBQUMsU0FBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEUTtBQUFBLFNBQVYsQ0FERCxHQVNDTCxJQUFJLENBQUNpQixHQUFMLENBQVMsVUFBQUMsQ0FBQztBQUFBLDhCQUNSO0FBQUsscUJBQVMsRUFBQyxvQkFBZjtBQUFBLG1DQUNFLHFFQUFDLDhDQUFEO0FBQU8sbUJBQUssRUFBRUEsQ0FBQyxDQUFDakIsS0FBaEI7QUFBdUIsa0JBQUksRUFBRWlCLENBQUMsQ0FBQ2hCLEtBQS9CO0FBQXNDLG9CQUFNLEVBQUVnQixDQUFDLENBQUNkLE1BQWhEO0FBQUEscUNBQ0UscUVBQUMsOERBQUQ7QUFBUyx1QkFBTyxFQUFFLG1CQUFLO0FBQUNTLHVCQUFLLENBQUMsSUFBRCxFQUFNSyxDQUFDLENBQUNiLEtBQVIsQ0FBTDtBQUFvQixpQkFBNUM7QUFBOEMseUJBQVMsRUFBQyxNQUF4RDtBQUErRCx1QkFBTyxFQUFDLFNBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFE7QUFBQSxTQUFWO0FBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvQ0QsQ0FqREQ7O0dBQU1OLE07O0tBQUFBLE07QUFtRFNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1NraWxscy4xMWYzMmU2Y2UzYTVkNDRlYWIzYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL0NvbnRleHQvQ29udGV4dFwiO1xyXG5pbXBvcnQgQ2FyZFAgZnJvbSBcIi4vY2FyZFBcIlxyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5cclxuY29uc3QgQ2FyZHNQID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSBbXHJcbiAgICB7IHRpdGxlOiBcIkhvdGVsLUFuZ3VsYXJcIiwgZGVzY1M6IFwiVW5hIGFwbGljYWNpw7NuIHdlYiBkaXNlw7FhZGEgcGFyYSBsYSBnZXN0acOzbiBkZSB1biBob3RlbCBjcmVhZGEgY29uIGVsIGZpbiBkZSBhcHJlbmRpemFqZSBcIiwgZGVzY0U6IFwiSXMgYSB3ZWIgYXBwbGljYXRpb24gZGV2ZWxvcGVkIHRvIHRoZSBtYW5hZ2VtZW50IG9mIHRoZSBob3RlbCBmb3IgZWR1Y2F0aW9uYWwgcHVycG9zZXNcIiwgaW1nVVJMOiBcIi9Ib3RlbC1Bbmd1bGFyLnBuZ1wiLHZpZGVvOlwiL3ByaW1lcmEubXA0XCIgfSxcclxuICAgIHsgdGl0bGU6IFwiVmVudGFcIiwgZGVzY1M6IFwiVW4gc2l0aW8gd2ViIGRpbsOhbWljbyBjcmVhZG8gcGFyYSBhZG1pbmlzdHJhY2nDs24gZGUgdmVudGFzIGRlIHVuYSBwZXF1ZcOxYSBlbXByZXNhXCIsIGRlc2NFOiBcImR5bmFtaWMgV2Vic2l0ZSBtYWRlIHRvIG1hbmFnZSB0aGUgc2FsZXMgb2YgYSBzdGFydHVwIGJ1c2luZXNzIGZvciBlZHVjYXRpb25hbCBwdXJwb3Nlc1wiLCBpbWdVUkw6IFwiL3ZlbnRhLnBuZ1wiLHZpZGVvOlwiL1ZlbnRhcy5tcDRcIiB9LFxyXG4gICAgeyB0aXRsZTogXCJWZW50YS1Jb25pY1wiLCBkZXNjUzogXCJBZGFwdGFjacOzbiBkZSB1bmEgYXBsaWNhY2nDs24gd2ViIGEgYXBsaWNhY2nDs24gbcOzdmlsIGNvbiB0ZWNub2xvZ8OtYXMgZGlmZXJlbnRlc1wiLCBkZXNjRTogXCJ1c2luZyBuZXcgYW5kIGlubm92YXRpdmUgdGVjaG5vbG9naWVzIGkgY3JlYXRlZCBhbiBhIG1vYmlsZSBhcHBsaWNhdGlvbiBiYXNlIG9uIGEgd2Vic2l0ZVwiLCBpbWdVUkw6IFwiL3ZlbnRhLUlvbmljLnBuZ1wiLHZpZGVvOlwiL2NlbHVsYXIxLm1wNFwiIH1cclxuICBdXHJcbiAgY29uc3QgTXlDb250ZXh0ID0gdXNlQ29udGV4dChDb250ZXh0KVxyXG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFt2aWRlbywgc2V0VmlkZW9dID0gdXNlU3RhdGUoXCJcIilcclxuICBjb25zdCBzaG93ViA9IChzdGF0ZSx2aWQpPT57XHJcbiAgICBzZXRTaG93KHN0YXRlKVxyXG4gICAgc2V0VmlkZW8odmlkKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge3Nob3cgP1xyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVmlkZW8tZGVzY1wiID5cclxuICAgICAgICAgIDxoMSBvbkNsaWNrPXsoKT0+IHtzaG93VihmYWxzZSl9fSA+WDwvaDE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGlvIHJhdGlvLTIxeDkgdmlkXCIgPlxyXG4gICAgICAgICAgICA8aWZyYW1lIHNyYz17dmlkZW99IGNsYXNzTmFtZT1cInZpZFwiIHRpdGxlPVwiWW91VHViZSB2aWRlb1wiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDpcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBmb25kb1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAge015Q29udGV4dC5lbmdsaXNoID9cclxuICAgICAgICAgICAgICBkYXRhLm1hcChpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgcHQtMyBwYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkUCB0aXRsZT17aS50aXRsZX0gZGVzYz17aS5kZXNjRX0gaW1nVVJMPXtpLmltZ1VSTH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKT0+IHtzaG93Vih0cnVlLGkudmlkZW8pfX0gY2xhc3NOYW1lPVwibXQtMlwiIHZhcmlhbnQ9XCJzdWNjZXNzXCI+Q29ub2NlciBtYXM8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkUD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgIGRhdGEubWFwKGkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBwdC0zIHBiLTNcIj5cclxuICAgICAgICAgICAgICAgICAgPENhcmRQIHRpdGxlPXtpLnRpdGxlfSBkZXNjPXtpLmRlc2NTfSBpbWdVUkw9e2kuaW1nVVJMfT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uICBvbkNsaWNrPXsoKT0+IHtzaG93Vih0cnVlLGkudmlkZW8pfX0gY2xhc3NOYW1lPVwibXQtMlwiIHZhcmlhbnQ9XCJzdWNjZXNzXCI+Q29ub2NlciBtYXM8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkUD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICB9XHJcblxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZHNQIl0sInNvdXJjZVJvb3QiOiIifQ==
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
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-player */ "./node_modules/react-player/lib/index.js");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "D:\\Programacion\\React\\portafolio\\Components\\cardsP\\cardsP.js",
    _this = undefined,
    _s = $RefreshSig$();







var CardsP = function CardsP() {
  _s();

  var data = [{
    title: "Hotel-Angular",
    descS: "Una aplicación web diseñada para la gestión de un hotel creada con el fin de aprendizaje ",
    descE: "Is a web application developed to the management of the hotel for educational purposes.",
    imgURL: "/Hotel-Angular.png",
    video: "/primera.mp4"
  }, {
    title: "Venta",
    descS: "Un sitio web dinámico creado para administración de ventas de una pequeña empresa",
    descE: "dynamic Website made to manage the sales of a startup business for educational purposes.",
    imgURL: "/Venta.png",
    video: "/Ventas.mp4"
  }, {
    title: "Venta-Ionic",
    descS: "Adaptación de una aplicación web a aplicación móvil con tecnologías diferentes",
    descE: "using new and innovative technologies i created an a mobile application base on a website",
    imgURL: "/Venta-Ionic.png",
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
        lineNumber: 24,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_player__WEBPACK_IMPORTED_MODULE_5___default.a, {
        className: "vid",
        playing: true,
        controls: true,
        url: video
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
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
                children: "More about it."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
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
                lineNumber: 46,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 17
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9jYXJkc1AvY2FyZHNQLmpzIl0sIm5hbWVzIjpbIkNhcmRzUCIsImRhdGEiLCJ0aXRsZSIsImRlc2NTIiwiZGVzY0UiLCJpbWdVUkwiLCJ2aWRlbyIsIk15Q29udGV4dCIsInVzZUNvbnRleHQiLCJDb250ZXh0IiwidXNlU3RhdGUiLCJzaG93Iiwic2V0U2hvdyIsInNldFZpZGVvIiwic2hvd1YiLCJzdGF0ZSIsInZpZCIsImVuZ2xpc2giLCJtYXAiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNuQixNQUFNQyxJQUFJLEdBQUcsQ0FDWDtBQUFFQyxTQUFLLEVBQUUsZUFBVDtBQUEwQkMsU0FBSyxFQUFFLDJGQUFqQztBQUE4SEMsU0FBSyxFQUFFLHlGQUFySTtBQUFnT0MsVUFBTSxFQUFFLG9CQUF4TztBQUE2UEMsU0FBSyxFQUFDO0FBQW5RLEdBRFcsRUFFWDtBQUFFSixTQUFLLEVBQUUsT0FBVDtBQUFrQkMsU0FBSyxFQUFFLG1GQUF6QjtBQUE4R0MsU0FBSyxFQUFFLDBGQUFySDtBQUFpTkMsVUFBTSxFQUFFLFlBQXpOO0FBQXNPQyxTQUFLLEVBQUM7QUFBNU8sR0FGVyxFQUdYO0FBQUVKLFNBQUssRUFBRSxhQUFUO0FBQXdCQyxTQUFLLEVBQUUsZ0ZBQS9CO0FBQWlIQyxTQUFLLEVBQUUsMkZBQXhIO0FBQXFOQyxVQUFNLEVBQUUsa0JBQTdOO0FBQWdQQyxTQUFLLEVBQUM7QUFBdFAsR0FIVyxDQUFiO0FBS0EsTUFBTUMsU0FBUyxHQUFHQyx3REFBVSxDQUFDQyx3REFBRCxDQUE1Qjs7QUFObUIsa0JBT0tDLHNEQUFRLENBQUMsS0FBRCxDQVBiO0FBQUEsTUFPWkMsSUFQWTtBQUFBLE1BT05DLE9BUE07O0FBQUEsbUJBUU9GLHNEQUFRLENBQUMsRUFBRCxDQVJmO0FBQUEsTUFRWkosS0FSWTtBQUFBLE1BUUxPLFFBUks7O0FBU25CLE1BQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFBT0MsR0FBUCxFQUFhO0FBQ3pCSixXQUFPLENBQUNHLEtBQUQsQ0FBUDtBQUNBRixZQUFRLENBQUNHLEdBQUQsQ0FBUjtBQUNELEdBSEQ7O0FBSUEsc0JBQ0U7QUFBQSxjQUNHTCxJQUFJLGdCQUNIO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQSw4QkFDRTtBQUFJLGVBQU8sRUFBRSxtQkFBSztBQUFDRyxlQUFLLENBQUMsS0FBRCxDQUFMO0FBQWEsU0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLHFFQUFDLG1EQUFEO0FBQWEsaUJBQVMsRUFBQyxLQUF2QjtBQUE2QixlQUFPLEVBQUUsSUFBdEM7QUFBNEMsZ0JBQVEsRUFBRSxJQUF0RDtBQUE0RCxXQUFHLEVBQUVSO0FBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERyxnQkFVSDtBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsa0JBQ0dDLFNBQVMsQ0FBQ1UsT0FBVixHQUNDaEIsSUFBSSxDQUFDaUIsR0FBTCxDQUFTLFVBQUFDLENBQUM7QUFBQSw4QkFDUjtBQUFLLHFCQUFTLEVBQUMsb0JBQWY7QUFBQSxtQ0FDRSxxRUFBQyw4Q0FBRDtBQUFPLG1CQUFLLEVBQUVBLENBQUMsQ0FBQ2pCLEtBQWhCO0FBQXVCLGtCQUFJLEVBQUVpQixDQUFDLENBQUNmLEtBQS9CO0FBQXNDLG9CQUFNLEVBQUVlLENBQUMsQ0FBQ2QsTUFBaEQ7QUFBQSxxQ0FDRSxxRUFBQyw4REFBRDtBQUFRLHVCQUFPLEVBQUUsbUJBQUs7QUFBQ1MsdUJBQUssQ0FBQyxJQUFELEVBQU1LLENBQUMsQ0FBQ2IsS0FBUixDQUFMO0FBQW9CLGlCQUEzQztBQUE2Qyx5QkFBUyxFQUFDLE1BQXZEO0FBQThELHVCQUFPLEVBQUMsU0FBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEUTtBQUFBLFNBQVYsQ0FERCxHQVNDTCxJQUFJLENBQUNpQixHQUFMLENBQVMsVUFBQUMsQ0FBQztBQUFBLDhCQUNSO0FBQUsscUJBQVMsRUFBQyxvQkFBZjtBQUFBLG1DQUNFLHFFQUFDLDhDQUFEO0FBQU8sbUJBQUssRUFBRUEsQ0FBQyxDQUFDakIsS0FBaEI7QUFBdUIsa0JBQUksRUFBRWlCLENBQUMsQ0FBQ2hCLEtBQS9CO0FBQXNDLG9CQUFNLEVBQUVnQixDQUFDLENBQUNkLE1BQWhEO0FBQUEscUNBQ0UscUVBQUMsOERBQUQ7QUFBUyx1QkFBTyxFQUFFLG1CQUFLO0FBQUNTLHVCQUFLLENBQUMsSUFBRCxFQUFNSyxDQUFDLENBQUNiLEtBQVIsQ0FBTDtBQUFvQixpQkFBNUM7QUFBOEMseUJBQVMsRUFBQyxNQUF4RDtBQUErRCx1QkFBTyxFQUFDLFNBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFE7QUFBQSxTQUFWO0FBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzQ0QsQ0FuREQ7O0dBQU1OLE07O0tBQUFBLE07QUFxRFNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1NraWxscy4zMDdiMDM3OWQ3MDg0MTQ5MGJkYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL0NvbnRleHQvQ29udGV4dFwiO1xyXG5pbXBvcnQgQ2FyZFAgZnJvbSBcIi4vY2FyZFBcIlxyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5pbXBvcnQgUmVhY3RQbGF5ZXIgZnJvbSAncmVhY3QtcGxheWVyJ1xyXG5cclxuY29uc3QgQ2FyZHNQID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSBbXHJcbiAgICB7IHRpdGxlOiBcIkhvdGVsLUFuZ3VsYXJcIiwgZGVzY1M6IFwiVW5hIGFwbGljYWNpw7NuIHdlYiBkaXNlw7FhZGEgcGFyYSBsYSBnZXN0acOzbiBkZSB1biBob3RlbCBjcmVhZGEgY29uIGVsIGZpbiBkZSBhcHJlbmRpemFqZSBcIiwgZGVzY0U6IFwiSXMgYSB3ZWIgYXBwbGljYXRpb24gZGV2ZWxvcGVkIHRvIHRoZSBtYW5hZ2VtZW50IG9mIHRoZSBob3RlbCBmb3IgZWR1Y2F0aW9uYWwgcHVycG9zZXMuXCIsIGltZ1VSTDogXCIvSG90ZWwtQW5ndWxhci5wbmdcIix2aWRlbzpcIi9wcmltZXJhLm1wNFwiIH0sXHJcbiAgICB7IHRpdGxlOiBcIlZlbnRhXCIsIGRlc2NTOiBcIlVuIHNpdGlvIHdlYiBkaW7DoW1pY28gY3JlYWRvIHBhcmEgYWRtaW5pc3RyYWNpw7NuIGRlIHZlbnRhcyBkZSB1bmEgcGVxdWXDsWEgZW1wcmVzYVwiLCBkZXNjRTogXCJkeW5hbWljIFdlYnNpdGUgbWFkZSB0byBtYW5hZ2UgdGhlIHNhbGVzIG9mIGEgc3RhcnR1cCBidXNpbmVzcyBmb3IgZWR1Y2F0aW9uYWwgcHVycG9zZXMuXCIsIGltZ1VSTDogXCIvVmVudGEucG5nXCIsdmlkZW86XCIvVmVudGFzLm1wNFwiIH0sXHJcbiAgICB7IHRpdGxlOiBcIlZlbnRhLUlvbmljXCIsIGRlc2NTOiBcIkFkYXB0YWNpw7NuIGRlIHVuYSBhcGxpY2FjacOzbiB3ZWIgYSBhcGxpY2FjacOzbiBtw7N2aWwgY29uIHRlY25vbG9nw61hcyBkaWZlcmVudGVzXCIsIGRlc2NFOiBcInVzaW5nIG5ldyBhbmQgaW5ub3ZhdGl2ZSB0ZWNobm9sb2dpZXMgaSBjcmVhdGVkIGFuIGEgbW9iaWxlIGFwcGxpY2F0aW9uIGJhc2Ugb24gYSB3ZWJzaXRlXCIsIGltZ1VSTDogXCIvVmVudGEtSW9uaWMucG5nXCIsdmlkZW86XCIvY2VsdWxhcjEubXA0XCIgfVxyXG4gIF1cclxuICBjb25zdCBNeUNvbnRleHQgPSB1c2VDb250ZXh0KENvbnRleHQpXHJcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3ZpZGVvLCBzZXRWaWRlb10gPSB1c2VTdGF0ZShcIlwiKVxyXG4gIGNvbnN0IHNob3dWID0gKHN0YXRlLHZpZCk9PntcclxuICAgIHNldFNob3coc3RhdGUpXHJcbiAgICBzZXRWaWRlbyh2aWQpXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7c2hvdyA/XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJWaWRlby1kZXNjXCIgPlxyXG4gICAgICAgICAgPGgxIG9uQ2xpY2s9eygpPT4ge3Nob3dWKGZhbHNlKX19ID5YPC9oMT5cclxuICAgICAgICAgIDxSZWFjdFBsYXllciBjbGFzc05hbWU9XCJ2aWRcIiBwbGF5aW5nPXt0cnVlfSBjb250cm9scz17dHJ1ZX0gdXJsPXt2aWRlb30gLz5cclxuICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwicmF0aW8gcmF0aW8tMjF4OSB2aWRcIiA+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwaG9uZVwiPlg8L2gxPlxyXG4gICAgICAgICAgICA8aWZyYW1lIHNyYz17dmlkZW99IGNsYXNzTmFtZT1cInZpZFwiIHRpdGxlPVwiWW91VHViZSB2aWRlb1wiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT5cclxuICAgICAgPC9kaXY+Ki99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgOlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGZvbmRvXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICB7TXlDb250ZXh0LmVuZ2xpc2ggP1xyXG4gICAgICAgICAgICAgIGRhdGEubWFwKGkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBwdC0zIHBiLTNcIj5cclxuICAgICAgICAgICAgICAgICAgPENhcmRQIHRpdGxlPXtpLnRpdGxlfSBkZXNjPXtpLmRlc2NFfSBpbWdVUkw9e2kuaW1nVVJMfT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpPT4ge3Nob3dWKHRydWUsaS52aWRlbyl9fSBjbGFzc05hbWU9XCJtdC0yXCIgdmFyaWFudD1cInN1Y2Nlc3NcIj5Nb3JlIGFib3V0IGl0LjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L0NhcmRQPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgZGF0YS5tYXAoaSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IHB0LTMgcGItM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZFAgdGl0bGU9e2kudGl0bGV9IGRlc2M9e2kuZGVzY1N9IGltZ1VSTD17aS5pbWdVUkx9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gIG9uQ2xpY2s9eygpPT4ge3Nob3dWKHRydWUsaS52aWRlbyl9fSBjbGFzc05hbWU9XCJtdC0yXCIgdmFyaWFudD1cInN1Y2Nlc3NcIj5Db25vY2VyIG1hczwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L0NhcmRQPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkc1AiXSwic291cmNlUm9vdCI6IiJ9
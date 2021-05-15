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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9jYXJkc1AvY2FyZHNQLmpzIl0sIm5hbWVzIjpbIkNhcmRzUCIsImRhdGEiLCJ0aXRsZSIsImRlc2NTIiwiZGVzY0UiLCJpbWdVUkwiLCJ2aWRlbyIsIk15Q29udGV4dCIsInVzZUNvbnRleHQiLCJDb250ZXh0IiwidXNlU3RhdGUiLCJzaG93Iiwic2V0U2hvdyIsInNldFZpZGVvIiwic2hvd1YiLCJzdGF0ZSIsInZpZCIsImVuZ2xpc2giLCJtYXAiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNuQixNQUFNQyxJQUFJLEdBQUcsQ0FDWDtBQUFFQyxTQUFLLEVBQUUsZUFBVDtBQUEwQkMsU0FBSyxFQUFFLDJGQUFqQztBQUE4SEMsU0FBSyxFQUFFLHlGQUFySTtBQUFnT0MsVUFBTSxFQUFFLG9CQUF4TztBQUE2UEMsU0FBSyxFQUFDO0FBQW5RLEdBRFcsRUFFWDtBQUFFSixTQUFLLEVBQUUsT0FBVDtBQUFrQkMsU0FBSyxFQUFFLG1GQUF6QjtBQUE4R0MsU0FBSyxFQUFFLDBGQUFySDtBQUFpTkMsVUFBTSxFQUFFLFlBQXpOO0FBQXNPQyxTQUFLLEVBQUM7QUFBNU8sR0FGVyxFQUdYO0FBQUVKLFNBQUssRUFBRSxhQUFUO0FBQXdCQyxTQUFLLEVBQUUsZ0ZBQS9CO0FBQWlIQyxTQUFLLEVBQUUsMkZBQXhIO0FBQXFOQyxVQUFNLEVBQUUsa0JBQTdOO0FBQWdQQyxTQUFLLEVBQUM7QUFBdFAsR0FIVyxDQUFiO0FBS0EsTUFBTUMsU0FBUyxHQUFHQyx3REFBVSxDQUFDQyx3REFBRCxDQUE1Qjs7QUFObUIsa0JBT0tDLHNEQUFRLENBQUMsS0FBRCxDQVBiO0FBQUEsTUFPWkMsSUFQWTtBQUFBLE1BT05DLE9BUE07O0FBQUEsbUJBUU9GLHNEQUFRLENBQUMsRUFBRCxDQVJmO0FBQUEsTUFRWkosS0FSWTtBQUFBLE1BUUxPLFFBUks7O0FBU25CLE1BQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFBT0MsR0FBUCxFQUFhO0FBQ3pCSixXQUFPLENBQUNHLEtBQUQsQ0FBUDtBQUNBRixZQUFRLENBQUNHLEdBQUQsQ0FBUjtBQUNELEdBSEQ7O0FBSUEsc0JBQ0U7QUFBQSxjQUNHTCxJQUFJLGdCQUNIO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQSw4QkFDRTtBQUFJLGVBQU8sRUFBRSxtQkFBSztBQUFDRyxlQUFLLENBQUMsS0FBRCxDQUFMO0FBQWEsU0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLHFFQUFDLG1EQUFEO0FBQWEsZUFBTyxFQUFFLElBQXRCO0FBQTRCLGdCQUFRLEVBQUUsSUFBdEM7QUFBNEMsV0FBRyxFQUFFUjtBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREcsZ0JBVUg7QUFBSyxlQUFTLEVBQUMsaUJBQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBLGtCQUNHQyxTQUFTLENBQUNVLE9BQVYsR0FDQ2hCLElBQUksQ0FBQ2lCLEdBQUwsQ0FBUyxVQUFBQyxDQUFDO0FBQUEsOEJBQ1I7QUFBSyxxQkFBUyxFQUFDLG9CQUFmO0FBQUEsbUNBQ0UscUVBQUMsOENBQUQ7QUFBTyxtQkFBSyxFQUFFQSxDQUFDLENBQUNqQixLQUFoQjtBQUF1QixrQkFBSSxFQUFFaUIsQ0FBQyxDQUFDZixLQUEvQjtBQUFzQyxvQkFBTSxFQUFFZSxDQUFDLENBQUNkLE1BQWhEO0FBQUEscUNBQ0UscUVBQUMsOERBQUQ7QUFBUSx1QkFBTyxFQUFFLG1CQUFLO0FBQUNTLHVCQUFLLENBQUMsSUFBRCxFQUFNSyxDQUFDLENBQUNiLEtBQVIsQ0FBTDtBQUFvQixpQkFBM0M7QUFBNkMseUJBQVMsRUFBQyxNQUF2RDtBQUE4RCx1QkFBTyxFQUFDLFNBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFE7QUFBQSxTQUFWLENBREQsR0FTQ0wsSUFBSSxDQUFDaUIsR0FBTCxDQUFTLFVBQUFDLENBQUM7QUFBQSw4QkFDUjtBQUFLLHFCQUFTLEVBQUMsb0JBQWY7QUFBQSxtQ0FDRSxxRUFBQyw4Q0FBRDtBQUFPLG1CQUFLLEVBQUVBLENBQUMsQ0FBQ2pCLEtBQWhCO0FBQXVCLGtCQUFJLEVBQUVpQixDQUFDLENBQUNoQixLQUEvQjtBQUFzQyxvQkFBTSxFQUFFZ0IsQ0FBQyxDQUFDZCxNQUFoRDtBQUFBLHFDQUNFLHFFQUFDLDhEQUFEO0FBQVMsdUJBQU8sRUFBRSxtQkFBSztBQUFDUyx1QkFBSyxDQUFDLElBQUQsRUFBTUssQ0FBQyxDQUFDYixLQUFSLENBQUw7QUFBb0IsaUJBQTVDO0FBQThDLHlCQUFTLEVBQUMsTUFBeEQ7QUFBK0QsdUJBQU8sRUFBQyxTQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURRO0FBQUEsU0FBVjtBQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBc0NELENBbkREOztHQUFNTixNOztLQUFBQSxNO0FBcURTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9Ta2lsbHMuYjc3ODVhZDcwOWE3YzUwYzE3MTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb250ZXh0IGZyb20gXCIuLi9Db250ZXh0L0NvbnRleHRcIjtcclxuaW1wb3J0IENhcmRQIGZyb20gXCIuL2NhcmRQXCJcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuaW1wb3J0IFJlYWN0UGxheWVyIGZyb20gJ3JlYWN0LXBsYXllcidcclxuXHJcbmNvbnN0IENhcmRzUCA9ICgpID0+IHtcclxuICBjb25zdCBkYXRhID0gW1xyXG4gICAgeyB0aXRsZTogXCJIb3RlbC1Bbmd1bGFyXCIsIGRlc2NTOiBcIlVuYSBhcGxpY2FjacOzbiB3ZWIgZGlzZcOxYWRhIHBhcmEgbGEgZ2VzdGnDs24gZGUgdW4gaG90ZWwgY3JlYWRhIGNvbiBlbCBmaW4gZGUgYXByZW5kaXphamUgXCIsIGRlc2NFOiBcIklzIGEgd2ViIGFwcGxpY2F0aW9uIGRldmVsb3BlZCB0byB0aGUgbWFuYWdlbWVudCBvZiB0aGUgaG90ZWwgZm9yIGVkdWNhdGlvbmFsIHB1cnBvc2VzLlwiLCBpbWdVUkw6IFwiL0hvdGVsLUFuZ3VsYXIucG5nXCIsdmlkZW86XCIvcHJpbWVyYS5tcDRcIiB9LFxyXG4gICAgeyB0aXRsZTogXCJWZW50YVwiLCBkZXNjUzogXCJVbiBzaXRpbyB3ZWIgZGluw6FtaWNvIGNyZWFkbyBwYXJhIGFkbWluaXN0cmFjacOzbiBkZSB2ZW50YXMgZGUgdW5hIHBlcXVlw7FhIGVtcHJlc2FcIiwgZGVzY0U6IFwiZHluYW1pYyBXZWJzaXRlIG1hZGUgdG8gbWFuYWdlIHRoZSBzYWxlcyBvZiBhIHN0YXJ0dXAgYnVzaW5lc3MgZm9yIGVkdWNhdGlvbmFsIHB1cnBvc2VzLlwiLCBpbWdVUkw6IFwiL1ZlbnRhLnBuZ1wiLHZpZGVvOlwiL1ZlbnRhcy5tcDRcIiB9LFxyXG4gICAgeyB0aXRsZTogXCJWZW50YS1Jb25pY1wiLCBkZXNjUzogXCJBZGFwdGFjacOzbiBkZSB1bmEgYXBsaWNhY2nDs24gd2ViIGEgYXBsaWNhY2nDs24gbcOzdmlsIGNvbiB0ZWNub2xvZ8OtYXMgZGlmZXJlbnRlc1wiLCBkZXNjRTogXCJ1c2luZyBuZXcgYW5kIGlubm92YXRpdmUgdGVjaG5vbG9naWVzIGkgY3JlYXRlZCBhbiBhIG1vYmlsZSBhcHBsaWNhdGlvbiBiYXNlIG9uIGEgd2Vic2l0ZVwiLCBpbWdVUkw6IFwiL1ZlbnRhLUlvbmljLnBuZ1wiLHZpZGVvOlwiL2NlbHVsYXIxLm1wNFwiIH1cclxuICBdXHJcbiAgY29uc3QgTXlDb250ZXh0ID0gdXNlQ29udGV4dChDb250ZXh0KVxyXG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFt2aWRlbywgc2V0VmlkZW9dID0gdXNlU3RhdGUoXCJcIilcclxuICBjb25zdCBzaG93ViA9IChzdGF0ZSx2aWQpPT57XHJcbiAgICBzZXRTaG93KHN0YXRlKVxyXG4gICAgc2V0VmlkZW8odmlkKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge3Nob3cgP1xyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVmlkZW8tZGVzY1wiID5cclxuICAgICAgICAgIDxoMSBvbkNsaWNrPXsoKT0+IHtzaG93VihmYWxzZSl9fSA+WDwvaDE+XHJcbiAgICAgICAgICA8UmVhY3RQbGF5ZXIgcGxheWluZz17dHJ1ZX0gY29udHJvbHM9e3RydWV9IHVybD17dmlkZW99IC8+XHJcbiAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cInJhdGlvIHJhdGlvLTIxeDkgdmlkXCIgPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicGhvbmVcIj5YPC9oMT5cclxuICAgICAgICAgICAgPGlmcmFtZSBzcmM9e3ZpZGVvfSBjbGFzc05hbWU9XCJ2aWRcIiB0aXRsZT1cIllvdVR1YmUgdmlkZW9cIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+XHJcbiAgICAgIDwvZGl2PiovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDpcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBmb25kb1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAge015Q29udGV4dC5lbmdsaXNoID9cclxuICAgICAgICAgICAgICBkYXRhLm1hcChpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgcHQtMyBwYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkUCB0aXRsZT17aS50aXRsZX0gZGVzYz17aS5kZXNjRX0gaW1nVVJMPXtpLmltZ1VSTH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKT0+IHtzaG93Vih0cnVlLGkudmlkZW8pfX0gY2xhc3NOYW1lPVwibXQtMlwiIHZhcmlhbnQ9XCJzdWNjZXNzXCI+TW9yZSBhYm91dCBpdC48L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkUD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgIGRhdGEubWFwKGkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBwdC0zIHBiLTNcIj5cclxuICAgICAgICAgICAgICAgICAgPENhcmRQIHRpdGxlPXtpLnRpdGxlfSBkZXNjPXtpLmRlc2NTfSBpbWdVUkw9e2kuaW1nVVJMfT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uICBvbkNsaWNrPXsoKT0+IHtzaG93Vih0cnVlLGkudmlkZW8pfX0gY2xhc3NOYW1lPVwibXQtMlwiIHZhcmlhbnQ9XCJzdWNjZXNzXCI+Q29ub2NlciBtYXM8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkUD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICB9XHJcblxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZHNQIl0sInNvdXJjZVJvb3QiOiIifQ==
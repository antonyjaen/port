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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9jYXJkc1AvY2FyZHNQLmpzIl0sIm5hbWVzIjpbIkNhcmRzUCIsImRhdGEiLCJ0aXRsZSIsImRlc2NTIiwiZGVzY0UiLCJpbWdVUkwiLCJ2aWRlbyIsIk15Q29udGV4dCIsInVzZUNvbnRleHQiLCJDb250ZXh0IiwidXNlU3RhdGUiLCJzaG93Iiwic2V0U2hvdyIsInNldFZpZGVvIiwic2hvd1YiLCJzdGF0ZSIsInZpZCIsImVuZ2xpc2giLCJtYXAiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNuQixNQUFNQyxJQUFJLEdBQUcsQ0FDWDtBQUFFQyxTQUFLLEVBQUUsZUFBVDtBQUEwQkMsU0FBSyxFQUFFLDJGQUFqQztBQUE4SEMsU0FBSyxFQUFFLHlGQUFySTtBQUFnT0MsVUFBTSxFQUFFLG9CQUF4TztBQUE2UEMsU0FBSyxFQUFDO0FBQW5RLEdBRFcsRUFFWDtBQUFFSixTQUFLLEVBQUUsT0FBVDtBQUFrQkMsU0FBSyxFQUFFLG1GQUF6QjtBQUE4R0MsU0FBSyxFQUFFLDBGQUFySDtBQUFpTkMsVUFBTSxFQUFFLFlBQXpOO0FBQXNPQyxTQUFLLEVBQUM7QUFBNU8sR0FGVyxFQUdYO0FBQUVKLFNBQUssRUFBRSxhQUFUO0FBQXdCQyxTQUFLLEVBQUUsZ0ZBQS9CO0FBQWlIQyxTQUFLLEVBQUUsMkZBQXhIO0FBQXFOQyxVQUFNLEVBQUUsa0JBQTdOO0FBQWdQQyxTQUFLLEVBQUM7QUFBdFAsR0FIVyxDQUFiO0FBS0EsTUFBTUMsU0FBUyxHQUFHQyx3REFBVSxDQUFDQyx3REFBRCxDQUE1Qjs7QUFObUIsa0JBT0tDLHNEQUFRLENBQUMsS0FBRCxDQVBiO0FBQUEsTUFPWkMsSUFQWTtBQUFBLE1BT05DLE9BUE07O0FBQUEsbUJBUU9GLHNEQUFRLENBQUMsRUFBRCxDQVJmO0FBQUEsTUFRWkosS0FSWTtBQUFBLE1BUUxPLFFBUks7O0FBU25CLE1BQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFBT0MsR0FBUCxFQUFhO0FBQ3pCSixXQUFPLENBQUNHLEtBQUQsQ0FBUDtBQUNBRixZQUFRLENBQUNHLEdBQUQsQ0FBUjtBQUNELEdBSEQ7O0FBSUEsc0JBQ0U7QUFBQSxjQUNHTCxJQUFJLGdCQUNIO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQSw4QkFDRTtBQUFJLGVBQU8sRUFBRSxtQkFBSztBQUFDRyxlQUFLLENBQUMsS0FBRCxDQUFMO0FBQWEsU0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLHFFQUFDLG1EQUFEO0FBQWEsZUFBTyxFQUFFLElBQXRCO0FBQTRCLFdBQUcsRUFBRVI7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURHLGdCQVVIO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSxrQkFDR0MsU0FBUyxDQUFDVSxPQUFWLEdBQ0NoQixJQUFJLENBQUNpQixHQUFMLENBQVMsVUFBQUMsQ0FBQztBQUFBLDhCQUNSO0FBQUsscUJBQVMsRUFBQyxvQkFBZjtBQUFBLG1DQUNFLHFFQUFDLDhDQUFEO0FBQU8sbUJBQUssRUFBRUEsQ0FBQyxDQUFDakIsS0FBaEI7QUFBdUIsa0JBQUksRUFBRWlCLENBQUMsQ0FBQ2YsS0FBL0I7QUFBc0Msb0JBQU0sRUFBRWUsQ0FBQyxDQUFDZCxNQUFoRDtBQUFBLHFDQUNFLHFFQUFDLDhEQUFEO0FBQVEsdUJBQU8sRUFBRSxtQkFBSztBQUFDUyx1QkFBSyxDQUFDLElBQUQsRUFBTUssQ0FBQyxDQUFDYixLQUFSLENBQUw7QUFBb0IsaUJBQTNDO0FBQTZDLHlCQUFTLEVBQUMsTUFBdkQ7QUFBOEQsdUJBQU8sRUFBQyxTQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURRO0FBQUEsU0FBVixDQURELEdBU0NMLElBQUksQ0FBQ2lCLEdBQUwsQ0FBUyxVQUFBQyxDQUFDO0FBQUEsOEJBQ1I7QUFBSyxxQkFBUyxFQUFDLG9CQUFmO0FBQUEsbUNBQ0UscUVBQUMsOENBQUQ7QUFBTyxtQkFBSyxFQUFFQSxDQUFDLENBQUNqQixLQUFoQjtBQUF1QixrQkFBSSxFQUFFaUIsQ0FBQyxDQUFDaEIsS0FBL0I7QUFBc0Msb0JBQU0sRUFBRWdCLENBQUMsQ0FBQ2QsTUFBaEQ7QUFBQSxxQ0FDRSxxRUFBQyw4REFBRDtBQUFTLHVCQUFPLEVBQUUsbUJBQUs7QUFBQ1MsdUJBQUssQ0FBQyxJQUFELEVBQU1LLENBQUMsQ0FBQ2IsS0FBUixDQUFMO0FBQW9CLGlCQUE1QztBQUE4Qyx5QkFBUyxFQUFDLE1BQXhEO0FBQStELHVCQUFPLEVBQUMsU0FBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEUTtBQUFBLFNBQVY7QUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXNDRCxDQW5ERDs7R0FBTU4sTTs7S0FBQUEsTTtBQXFEU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvU2tpbGxzLjVhZjkxOGE0YjRhYjA5ZTU1NTJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi4vQ29udGV4dC9Db250ZXh0XCI7XHJcbmltcG9ydCBDYXJkUCBmcm9tIFwiLi9jYXJkUFwiXHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCBSZWFjdFBsYXllciBmcm9tICdyZWFjdC1wbGF5ZXInXHJcblxyXG5jb25zdCBDYXJkc1AgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IFtcclxuICAgIHsgdGl0bGU6IFwiSG90ZWwtQW5ndWxhclwiLCBkZXNjUzogXCJVbmEgYXBsaWNhY2nDs24gd2ViIGRpc2XDsWFkYSBwYXJhIGxhIGdlc3Rpw7NuIGRlIHVuIGhvdGVsIGNyZWFkYSBjb24gZWwgZmluIGRlIGFwcmVuZGl6YWplIFwiLCBkZXNjRTogXCJJcyBhIHdlYiBhcHBsaWNhdGlvbiBkZXZlbG9wZWQgdG8gdGhlIG1hbmFnZW1lbnQgb2YgdGhlIGhvdGVsIGZvciBlZHVjYXRpb25hbCBwdXJwb3Nlcy5cIiwgaW1nVVJMOiBcIi9Ib3RlbC1Bbmd1bGFyLnBuZ1wiLHZpZGVvOlwiL3ByaW1lcmEubXA0XCIgfSxcclxuICAgIHsgdGl0bGU6IFwiVmVudGFcIiwgZGVzY1M6IFwiVW4gc2l0aW8gd2ViIGRpbsOhbWljbyBjcmVhZG8gcGFyYSBhZG1pbmlzdHJhY2nDs24gZGUgdmVudGFzIGRlIHVuYSBwZXF1ZcOxYSBlbXByZXNhXCIsIGRlc2NFOiBcImR5bmFtaWMgV2Vic2l0ZSBtYWRlIHRvIG1hbmFnZSB0aGUgc2FsZXMgb2YgYSBzdGFydHVwIGJ1c2luZXNzIGZvciBlZHVjYXRpb25hbCBwdXJwb3Nlcy5cIiwgaW1nVVJMOiBcIi9WZW50YS5wbmdcIix2aWRlbzpcIi9WZW50YXMubXA0XCIgfSxcclxuICAgIHsgdGl0bGU6IFwiVmVudGEtSW9uaWNcIiwgZGVzY1M6IFwiQWRhcHRhY2nDs24gZGUgdW5hIGFwbGljYWNpw7NuIHdlYiBhIGFwbGljYWNpw7NuIG3Ds3ZpbCBjb24gdGVjbm9sb2fDrWFzIGRpZmVyZW50ZXNcIiwgZGVzY0U6IFwidXNpbmcgbmV3IGFuZCBpbm5vdmF0aXZlIHRlY2hub2xvZ2llcyBpIGNyZWF0ZWQgYW4gYSBtb2JpbGUgYXBwbGljYXRpb24gYmFzZSBvbiBhIHdlYnNpdGVcIiwgaW1nVVJMOiBcIi9WZW50YS1Jb25pYy5wbmdcIix2aWRlbzpcIi9jZWx1bGFyMS5tcDRcIiB9XHJcbiAgXVxyXG4gIGNvbnN0IE15Q29udGV4dCA9IHVzZUNvbnRleHQoQ29udGV4dClcclxuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbdmlkZW8sIHNldFZpZGVvXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3Qgc2hvd1YgPSAoc3RhdGUsdmlkKT0+e1xyXG4gICAgc2V0U2hvdyhzdGF0ZSlcclxuICAgIHNldFZpZGVvKHZpZClcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtzaG93ID9cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlZpZGVvLWRlc2NcIiA+XHJcbiAgICAgICAgICA8aDEgb25DbGljaz17KCk9PiB7c2hvd1YoZmFsc2UpfX0gPlg8L2gxPlxyXG4gICAgICAgICAgPFJlYWN0UGxheWVyIHBsYXlpbmc9e3RydWV9IHVybD17dmlkZW99IC8+XHJcbiAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cInJhdGlvIHJhdGlvLTIxeDkgdmlkXCIgPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicGhvbmVcIj5YPC9oMT5cclxuICAgICAgICAgICAgPGlmcmFtZSBzcmM9e3ZpZGVvfSBjbGFzc05hbWU9XCJ2aWRcIiB0aXRsZT1cIllvdVR1YmUgdmlkZW9cIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+XHJcbiAgICAgIDwvZGl2PiovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDpcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBmb25kb1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAge015Q29udGV4dC5lbmdsaXNoID9cclxuICAgICAgICAgICAgICBkYXRhLm1hcChpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgcHQtMyBwYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkUCB0aXRsZT17aS50aXRsZX0gZGVzYz17aS5kZXNjRX0gaW1nVVJMPXtpLmltZ1VSTH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKT0+IHtzaG93Vih0cnVlLGkudmlkZW8pfX0gY2xhc3NOYW1lPVwibXQtMlwiIHZhcmlhbnQ9XCJzdWNjZXNzXCI+TW9yZSBhYm91dCBpdC48L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkUD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgIGRhdGEubWFwKGkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBwdC0zIHBiLTNcIj5cclxuICAgICAgICAgICAgICAgICAgPENhcmRQIHRpdGxlPXtpLnRpdGxlfSBkZXNjPXtpLmRlc2NTfSBpbWdVUkw9e2kuaW1nVVJMfT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uICBvbkNsaWNrPXsoKT0+IHtzaG93Vih0cnVlLGkudmlkZW8pfX0gY2xhc3NOYW1lPVwibXQtMlwiIHZhcmlhbnQ9XCJzdWNjZXNzXCI+Q29ub2NlciBtYXM8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkUD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICB9XHJcblxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZHNQIl0sInNvdXJjZVJvb3QiOiIifQ==
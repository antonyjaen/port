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
    descE: "explicacion en ingles",
    imgURL: "/Hotel-Angular.png"
  }, {
    title: "Venta",
    descS: "Un sitio web dinámico creado para administración de ventas de una pequeña empresa",
    descE: "explicacion en ingles",
    imgURL: "/venta.png"
  }, {
    title: "Venta-Ionic",
    descS: "Adaptación de una aplicación web a aplicación móvil con tecnologías diferentes",
    descE: "explicacion en ingles",
    imgURL: "/venta-Ionic.png"
  }];
  var MyContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_Context_Context__WEBPACK_IMPORTED_MODULE_2__["default"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      show = _useState[0],
      setShow = _useState[1];

  var showV = function showV(s) {
    setShow(s);
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
        lineNumber: 22,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "ratio ratio-21x9 vid",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("iframe", {
          src: "/ventas.mp4",
          className: "vid",
          title: "YouTube video",
          allowfullscreen: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
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
                  showV(true);
                },
                className: "mt-2",
                variant: "success",
                children: "Conocer mas"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
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
                  showV(true);
                },
                className: "mt-2",
                variant: "success",
                children: "Conocer mas"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 17
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, _this);
};

_s(CardsP, "Do+DnKe3xtjF0yOwJ8A0BEJ72uA=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9jYXJkc1AvY2FyZHNQLmpzIl0sIm5hbWVzIjpbIkNhcmRzUCIsImRhdGEiLCJ0aXRsZSIsImRlc2NTIiwiZGVzY0UiLCJpbWdVUkwiLCJNeUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ29udGV4dCIsInVzZVN0YXRlIiwic2hvdyIsInNldFNob3ciLCJzaG93ViIsInMiLCJlbmdsaXNoIiwibWFwIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNuQixNQUFNQyxJQUFJLEdBQUcsQ0FDWDtBQUFFQyxTQUFLLEVBQUUsZUFBVDtBQUEwQkMsU0FBSyxFQUFFLDJGQUFqQztBQUE4SEMsU0FBSyxFQUFFLHVCQUFySTtBQUE4SkMsVUFBTSxFQUFFO0FBQXRLLEdBRFcsRUFFWDtBQUFFSCxTQUFLLEVBQUUsT0FBVDtBQUFrQkMsU0FBSyxFQUFFLG1GQUF6QjtBQUE4R0MsU0FBSyxFQUFFLHVCQUFySDtBQUE4SUMsVUFBTSxFQUFFO0FBQXRKLEdBRlcsRUFHWDtBQUFFSCxTQUFLLEVBQUUsYUFBVDtBQUF3QkMsU0FBSyxFQUFFLGdGQUEvQjtBQUFpSEMsU0FBSyxFQUFFLHVCQUF4SDtBQUFpSkMsVUFBTSxFQUFFO0FBQXpKLEdBSFcsQ0FBYjtBQUtBLE1BQU1DLFNBQVMsR0FBR0Msd0RBQVUsQ0FBQ0Msd0RBQUQsQ0FBNUI7O0FBTm1CLGtCQU9LQyxzREFBUSxDQUFDLEtBQUQsQ0FQYjtBQUFBLE1BT1pDLElBUFk7QUFBQSxNQU9OQyxPQVBNOztBQVNuQixNQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxDQUFELEVBQUs7QUFDakJGLFdBQU8sQ0FBQ0UsQ0FBRCxDQUFQO0FBQ0QsR0FGRDs7QUFHQSxzQkFDRTtBQUFBLGNBQ0dILElBQUksZ0JBQ0g7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBLDhCQUNFO0FBQUksZUFBTyxFQUFFLG1CQUFLO0FBQUNFLGVBQUssQ0FBQyxLQUFELENBQUw7QUFBYSxTQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDLHNCQUFmO0FBQUEsK0JBQ0U7QUFBUSxhQUFHLEVBQUMsYUFBWjtBQUEwQixtQkFBUyxFQUFDLEtBQXBDO0FBQTBDLGVBQUssRUFBQyxlQUFoRDtBQUFnRSx5QkFBZTtBQUEvRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURHLGdCQVFIO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSxrQkFDR04sU0FBUyxDQUFDUSxPQUFWLEdBQ0NiLElBQUksQ0FBQ2MsR0FBTCxDQUFTLFVBQUFDLENBQUM7QUFBQSw4QkFDUjtBQUFLLHFCQUFTLEVBQUMsb0JBQWY7QUFBQSxtQ0FDRSxxRUFBQyw4Q0FBRDtBQUFPLG1CQUFLLEVBQUVBLENBQUMsQ0FBQ2QsS0FBaEI7QUFBdUIsa0JBQUksRUFBRWMsQ0FBQyxDQUFDWixLQUEvQjtBQUFzQyxvQkFBTSxFQUFFWSxDQUFDLENBQUNYLE1BQWhEO0FBQUEscUNBQ0UscUVBQUMsOERBQUQ7QUFBUSx1QkFBTyxFQUFFLG1CQUFLO0FBQUNPLHVCQUFLLENBQUMsSUFBRCxDQUFMO0FBQVksaUJBQW5DO0FBQXFDLHlCQUFTLEVBQUMsTUFBL0M7QUFBc0QsdUJBQU8sRUFBQyxTQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURRO0FBQUEsU0FBVixDQURELEdBU0NYLElBQUksQ0FBQ2MsR0FBTCxDQUFTLFVBQUFDLENBQUM7QUFBQSw4QkFDUjtBQUFLLHFCQUFTLEVBQUMsb0JBQWY7QUFBQSxtQ0FDRSxxRUFBQyw4Q0FBRDtBQUFPLG1CQUFLLEVBQUVBLENBQUMsQ0FBQ2QsS0FBaEI7QUFBdUIsa0JBQUksRUFBRWMsQ0FBQyxDQUFDYixLQUEvQjtBQUFzQyxvQkFBTSxFQUFFYSxDQUFDLENBQUNYLE1BQWhEO0FBQUEscUNBQ0UscUVBQUMsOERBQUQ7QUFBUyx1QkFBTyxFQUFFLG1CQUFLO0FBQUNPLHVCQUFLLENBQUMsSUFBRCxDQUFMO0FBQVksaUJBQXBDO0FBQXNDLHlCQUFTLEVBQUMsTUFBaEQ7QUFBdUQsdUJBQU8sRUFBQyxTQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURRO0FBQUEsU0FBVjtBQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBb0NELENBaEREOztHQUFNWixNOztLQUFBQSxNO0FBa0RTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9Ta2lsbHMuYWU5YTgzZTcxNDNhMGZkODEyNDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb250ZXh0IGZyb20gXCIuLi9Db250ZXh0L0NvbnRleHRcIjtcclxuaW1wb3J0IENhcmRQIGZyb20gXCIuL2NhcmRQXCJcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuXHJcbmNvbnN0IENhcmRzUCA9ICgpID0+IHtcclxuICBjb25zdCBkYXRhID0gW1xyXG4gICAgeyB0aXRsZTogXCJIb3RlbC1Bbmd1bGFyXCIsIGRlc2NTOiBcIlVuYSBhcGxpY2FjacOzbiB3ZWIgZGlzZcOxYWRhIHBhcmEgbGEgZ2VzdGnDs24gZGUgdW4gaG90ZWwgY3JlYWRhIGNvbiBlbCBmaW4gZGUgYXByZW5kaXphamUgXCIsIGRlc2NFOiBcImV4cGxpY2FjaW9uIGVuIGluZ2xlc1wiLCBpbWdVUkw6IFwiL0hvdGVsLUFuZ3VsYXIucG5nXCIgfSxcclxuICAgIHsgdGl0bGU6IFwiVmVudGFcIiwgZGVzY1M6IFwiVW4gc2l0aW8gd2ViIGRpbsOhbWljbyBjcmVhZG8gcGFyYSBhZG1pbmlzdHJhY2nDs24gZGUgdmVudGFzIGRlIHVuYSBwZXF1ZcOxYSBlbXByZXNhXCIsIGRlc2NFOiBcImV4cGxpY2FjaW9uIGVuIGluZ2xlc1wiLCBpbWdVUkw6IFwiL3ZlbnRhLnBuZ1wiIH0sXHJcbiAgICB7IHRpdGxlOiBcIlZlbnRhLUlvbmljXCIsIGRlc2NTOiBcIkFkYXB0YWNpw7NuIGRlIHVuYSBhcGxpY2FjacOzbiB3ZWIgYSBhcGxpY2FjacOzbiBtw7N2aWwgY29uIHRlY25vbG9nw61hcyBkaWZlcmVudGVzXCIsIGRlc2NFOiBcImV4cGxpY2FjaW9uIGVuIGluZ2xlc1wiLCBpbWdVUkw6IFwiL3ZlbnRhLUlvbmljLnBuZ1wiIH1cclxuICBdXHJcbiAgY29uc3QgTXlDb250ZXh0ID0gdXNlQ29udGV4dChDb250ZXh0KVxyXG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBjb25zdCBzaG93ViA9IChzKT0+e1xyXG4gICAgc2V0U2hvdyhzKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge3Nob3cgP1xyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVmlkZW8tZGVzY1wiID5cclxuICAgICAgICAgIDxoMSBvbkNsaWNrPXsoKT0+IHtzaG93VihmYWxzZSl9fSA+WDwvaDE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGlvIHJhdGlvLTIxeDkgdmlkXCIgPlxyXG4gICAgICAgICAgICA8aWZyYW1lIHNyYz1cIi92ZW50YXMubXA0XCIgY2xhc3NOYW1lPVwidmlkXCIgdGl0bGU9XCJZb3VUdWJlIHZpZGVvXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgOlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGZvbmRvXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICB7TXlDb250ZXh0LmVuZ2xpc2ggP1xyXG4gICAgICAgICAgICAgIGRhdGEubWFwKGkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBwdC0zIHBiLTNcIj5cclxuICAgICAgICAgICAgICAgICAgPENhcmRQIHRpdGxlPXtpLnRpdGxlfSBkZXNjPXtpLmRlc2NFfSBpbWdVUkw9e2kuaW1nVVJMfT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpPT4ge3Nob3dWKHRydWUpfX0gY2xhc3NOYW1lPVwibXQtMlwiIHZhcmlhbnQ9XCJzdWNjZXNzXCI+Q29ub2NlciBtYXM8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkUD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgIGRhdGEubWFwKGkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBwdC0zIHBiLTNcIj5cclxuICAgICAgICAgICAgICAgICAgPENhcmRQIHRpdGxlPXtpLnRpdGxlfSBkZXNjPXtpLmRlc2NTfSBpbWdVUkw9e2kuaW1nVVJMfT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uICBvbkNsaWNrPXsoKT0+IHtzaG93Vih0cnVlKX19IGNsYXNzTmFtZT1cIm10LTJcIiB2YXJpYW50PVwic3VjY2Vzc1wiPkNvbm9jZXIgbWFzPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2FyZFA+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgfVxyXG5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRzUCJdLCJzb3VyY2VSb290IjoiIn0=
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
          src: "https://drive.google.com/drive/folders/156bxb_bP8Xu9nSn-XNVKQlKv84jRHsaD",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9jYXJkc1AvY2FyZHNQLmpzIl0sIm5hbWVzIjpbIkNhcmRzUCIsImRhdGEiLCJ0aXRsZSIsImRlc2NTIiwiZGVzY0UiLCJpbWdVUkwiLCJNeUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ29udGV4dCIsInVzZVN0YXRlIiwic2hvdyIsInNldFNob3ciLCJzaG93ViIsInMiLCJlbmdsaXNoIiwibWFwIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNuQixNQUFNQyxJQUFJLEdBQUcsQ0FDWDtBQUFFQyxTQUFLLEVBQUUsZUFBVDtBQUEwQkMsU0FBSyxFQUFFLDJGQUFqQztBQUE4SEMsU0FBSyxFQUFFLHVCQUFySTtBQUE4SkMsVUFBTSxFQUFFO0FBQXRLLEdBRFcsRUFFWDtBQUFFSCxTQUFLLEVBQUUsT0FBVDtBQUFrQkMsU0FBSyxFQUFFLG1GQUF6QjtBQUE4R0MsU0FBSyxFQUFFLHVCQUFySDtBQUE4SUMsVUFBTSxFQUFFO0FBQXRKLEdBRlcsRUFHWDtBQUFFSCxTQUFLLEVBQUUsYUFBVDtBQUF3QkMsU0FBSyxFQUFFLGdGQUEvQjtBQUFpSEMsU0FBSyxFQUFFLHVCQUF4SDtBQUFpSkMsVUFBTSxFQUFFO0FBQXpKLEdBSFcsQ0FBYjtBQUtBLE1BQU1DLFNBQVMsR0FBR0Msd0RBQVUsQ0FBQ0Msd0RBQUQsQ0FBNUI7O0FBTm1CLGtCQU9LQyxzREFBUSxDQUFDLEtBQUQsQ0FQYjtBQUFBLE1BT1pDLElBUFk7QUFBQSxNQU9OQyxPQVBNOztBQVNuQixNQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxDQUFELEVBQUs7QUFDakJGLFdBQU8sQ0FBQ0UsQ0FBRCxDQUFQO0FBQ0QsR0FGRDs7QUFHQSxzQkFDRTtBQUFBLGNBQ0dILElBQUksZ0JBQ0g7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBLDhCQUNFO0FBQUksZUFBTyxFQUFFLG1CQUFLO0FBQUNFLGVBQUssQ0FBQyxLQUFELENBQUw7QUFBYSxTQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDLHNCQUFmO0FBQUEsK0JBQ0U7QUFBUSxhQUFHLEVBQUMsMEVBQVo7QUFBdUYsbUJBQVMsRUFBQyxLQUFqRztBQUF1RyxlQUFLLEVBQUMsZUFBN0c7QUFBNkgseUJBQWU7QUFBNUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERyxnQkFRSDtBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsa0JBQ0dOLFNBQVMsQ0FBQ1EsT0FBVixHQUNDYixJQUFJLENBQUNjLEdBQUwsQ0FBUyxVQUFBQyxDQUFDO0FBQUEsOEJBQ1I7QUFBSyxxQkFBUyxFQUFDLG9CQUFmO0FBQUEsbUNBQ0UscUVBQUMsOENBQUQ7QUFBTyxtQkFBSyxFQUFFQSxDQUFDLENBQUNkLEtBQWhCO0FBQXVCLGtCQUFJLEVBQUVjLENBQUMsQ0FBQ1osS0FBL0I7QUFBc0Msb0JBQU0sRUFBRVksQ0FBQyxDQUFDWCxNQUFoRDtBQUFBLHFDQUNFLHFFQUFDLDhEQUFEO0FBQVEsdUJBQU8sRUFBRSxtQkFBSztBQUFDTyx1QkFBSyxDQUFDLElBQUQsQ0FBTDtBQUFZLGlCQUFuQztBQUFxQyx5QkFBUyxFQUFDLE1BQS9DO0FBQXNELHVCQUFPLEVBQUMsU0FBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEUTtBQUFBLFNBQVYsQ0FERCxHQVNDWCxJQUFJLENBQUNjLEdBQUwsQ0FBUyxVQUFBQyxDQUFDO0FBQUEsOEJBQ1I7QUFBSyxxQkFBUyxFQUFDLG9CQUFmO0FBQUEsbUNBQ0UscUVBQUMsOENBQUQ7QUFBTyxtQkFBSyxFQUFFQSxDQUFDLENBQUNkLEtBQWhCO0FBQXVCLGtCQUFJLEVBQUVjLENBQUMsQ0FBQ2IsS0FBL0I7QUFBc0Msb0JBQU0sRUFBRWEsQ0FBQyxDQUFDWCxNQUFoRDtBQUFBLHFDQUNFLHFFQUFDLDhEQUFEO0FBQVMsdUJBQU8sRUFBRSxtQkFBSztBQUFDTyx1QkFBSyxDQUFDLElBQUQsQ0FBTDtBQUFZLGlCQUFwQztBQUFzQyx5QkFBUyxFQUFDLE1BQWhEO0FBQXVELHVCQUFPLEVBQUMsU0FBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEUTtBQUFBLFNBQVY7QUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9DRCxDQWhERDs7R0FBTVosTTs7S0FBQUEsTTtBQWtEU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvU2tpbGxzLmU1ZjNhYWZmZmVmYjYxNWY0MDk4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi4vQ29udGV4dC9Db250ZXh0XCI7XHJcbmltcG9ydCBDYXJkUCBmcm9tIFwiLi9jYXJkUFwiXHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcblxyXG5jb25zdCBDYXJkc1AgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IFtcclxuICAgIHsgdGl0bGU6IFwiSG90ZWwtQW5ndWxhclwiLCBkZXNjUzogXCJVbmEgYXBsaWNhY2nDs24gd2ViIGRpc2XDsWFkYSBwYXJhIGxhIGdlc3Rpw7NuIGRlIHVuIGhvdGVsIGNyZWFkYSBjb24gZWwgZmluIGRlIGFwcmVuZGl6YWplIFwiLCBkZXNjRTogXCJleHBsaWNhY2lvbiBlbiBpbmdsZXNcIiwgaW1nVVJMOiBcIi9Ib3RlbC1Bbmd1bGFyLnBuZ1wiIH0sXHJcbiAgICB7IHRpdGxlOiBcIlZlbnRhXCIsIGRlc2NTOiBcIlVuIHNpdGlvIHdlYiBkaW7DoW1pY28gY3JlYWRvIHBhcmEgYWRtaW5pc3RyYWNpw7NuIGRlIHZlbnRhcyBkZSB1bmEgcGVxdWXDsWEgZW1wcmVzYVwiLCBkZXNjRTogXCJleHBsaWNhY2lvbiBlbiBpbmdsZXNcIiwgaW1nVVJMOiBcIi92ZW50YS5wbmdcIiB9LFxyXG4gICAgeyB0aXRsZTogXCJWZW50YS1Jb25pY1wiLCBkZXNjUzogXCJBZGFwdGFjacOzbiBkZSB1bmEgYXBsaWNhY2nDs24gd2ViIGEgYXBsaWNhY2nDs24gbcOzdmlsIGNvbiB0ZWNub2xvZ8OtYXMgZGlmZXJlbnRlc1wiLCBkZXNjRTogXCJleHBsaWNhY2lvbiBlbiBpbmdsZXNcIiwgaW1nVVJMOiBcIi92ZW50YS1Jb25pYy5wbmdcIiB9XHJcbiAgXVxyXG4gIGNvbnN0IE15Q29udGV4dCA9IHVzZUNvbnRleHQoQ29udGV4dClcclxuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3Qgc2hvd1YgPSAocyk9PntcclxuICAgIHNldFNob3cocylcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtzaG93ID9cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlZpZGVvLWRlc2NcIiA+XHJcbiAgICAgICAgICA8aDEgb25DbGljaz17KCk9PiB7c2hvd1YoZmFsc2UpfX0gPlg8L2gxPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbyByYXRpby0yMXg5IHZpZFwiID5cclxuICAgICAgICAgICAgPGlmcmFtZSBzcmM9XCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZHJpdmUvZm9sZGVycy8xNTZieGJfYlA4WHU5blNuLVhOVktRbEt2ODRqUkhzYURcIiBjbGFzc05hbWU9XCJ2aWRcIiB0aXRsZT1cIllvdVR1YmUgdmlkZW9cIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA6XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZm9uZG9cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIHtNeUNvbnRleHQuZW5nbGlzaCA/XHJcbiAgICAgICAgICAgICAgZGF0YS5tYXAoaSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IHB0LTMgcGItM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZFAgdGl0bGU9e2kudGl0bGV9IGRlc2M9e2kuZGVzY0V9IGltZ1VSTD17aS5pbWdVUkx9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCk9PiB7c2hvd1YodHJ1ZSl9fSBjbGFzc05hbWU9XCJtdC0yXCIgdmFyaWFudD1cInN1Y2Nlc3NcIj5Db25vY2VyIG1hczwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L0NhcmRQPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgZGF0YS5tYXAoaSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IHB0LTMgcGItM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZFAgdGl0bGU9e2kudGl0bGV9IGRlc2M9e2kuZGVzY1N9IGltZ1VSTD17aS5pbWdVUkx9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gIG9uQ2xpY2s9eygpPT4ge3Nob3dWKHRydWUpfX0gY2xhc3NOYW1lPVwibXQtMlwiIHZhcmlhbnQ9XCJzdWNjZXNzXCI+Q29ub2NlciBtYXM8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkUD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICB9XHJcblxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZHNQIl0sInNvdXJjZVJvb3QiOiIifQ==
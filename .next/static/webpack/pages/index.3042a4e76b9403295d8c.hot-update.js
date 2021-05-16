webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/Skills/Skills.js":
/*!*************************************!*\
  !*** ./Components/Skills/Skills.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _skill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skill */ "./Components/Skills/skill.js");


var _jsxFileName = "D:\\Programacion\\React\\portafolio\\Components\\Skills\\Skills.js",
    _this = undefined;



var Skills = function Skills() {
  var data = [{
    name: "HTML5",
    imgURL: "http://www.oscarblancarteblog.com/wp-content/uploads/2016/11/html5-e1479600257146.png"
  }, {
    name: "CSS3",
    imgURL: "https://lenguajecss.com/assets/logo.svg"
  }, {
    name: "Bootstrap",
    imgURL: "https://avatars.githubusercontent.com/u/2918581?s=280&v=4"
  }, {
    name: "ECMAScript 6",
    imgURL: "https://miro.medium.com/max/640/1*kCD_6R3UkMHkpS_YgFoU9w.jpeg"
  }, {
    name: "Typescript",
    imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu3LfC23p48aUZxgRUduLn-H8ayt5g64D7bOWNBaTkLU3Aaj4K61KvIklTCOw6mXQAwVM&usqp=CAU"
  }, {
    name: "Angular",
    imgURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/480px-Angular_full_color_logo.svg.png"
  }, {
    name: "React",
    imgURL: "https://res.cloudinary.com/codier/image/upload/v1530614273/jqxbwxmnrkjq0mxhnvjn.png"
  }, {
    name: "Python",
    imgURL: "https://4.bp.blogspot.com/-NNF6wg11eKQ/V-BL3PRvsUI/AAAAAAAAGPw/AtqUtauHxJ4_N2KAuhb1_InjrglDy1L0wCPcB/s1600/Other-python-icon.png"
  }, {
    name: "MongoDB",
    imgURL: "https://img.icons8.com/color/452/mongodb.png"
  }, {
    name: "MySQL",
    imgURL: "https://www.pngfind.com/pngs/m/168-1682233_mysql-mysql-logo-circle-hd-png-download.png"
  }, {
    name: "Flask",
    imgURL: "https://blog.tiraquelibras.com/wp-content/uploads/2019/08/Flask.png"
  }, {
    name: "Java",
    imgURL: "https://www.logo.wine/a/logo/Java_(programming_language)/Java_(programming_language)-Logo.wine.svg"
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container ",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: data.map(function (s) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_skill__WEBPACK_IMPORTED_MODULE_1__["default"], {
          name: s.name,
          imgURL: s.imgURL
        }, s.name, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 25
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, _this);
};

_c = Skills;
/* harmony default export */ __webpack_exports__["default"] = (Skills);

var _c;

$RefreshReg$(_c, "Skills");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Ta2lsbHMvU2tpbGxzLmpzIl0sIm5hbWVzIjpbIlNraWxscyIsImRhdGEiLCJuYW1lIiwiaW1nVVJMIiwibWFwIiwicyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQUk7QUFDZixNQUFNQyxJQUFJLEdBQUcsQ0FDVDtBQUFDQyxRQUFJLEVBQUMsT0FBTjtBQUFjQyxVQUFNLEVBQUM7QUFBckIsR0FEUyxFQUVUO0FBQUNELFFBQUksRUFBQyxNQUFOO0FBQWFDLFVBQU0sRUFBQztBQUFwQixHQUZTLEVBR1Q7QUFBQ0QsUUFBSSxFQUFDLFdBQU47QUFBa0JDLFVBQU0sRUFBQztBQUF6QixHQUhTLEVBSVQ7QUFBQ0QsUUFBSSxFQUFDLGNBQU47QUFBcUJDLFVBQU0sRUFBQztBQUE1QixHQUpTLEVBS1Q7QUFBQ0QsUUFBSSxFQUFDLFlBQU47QUFBbUJDLFVBQU0sRUFBQztBQUExQixHQUxTLEVBTVQ7QUFBQ0QsUUFBSSxFQUFDLFNBQU47QUFBZ0JDLFVBQU0sRUFBQztBQUF2QixHQU5TLEVBT1Q7QUFBQ0QsUUFBSSxFQUFDLE9BQU47QUFBY0MsVUFBTSxFQUFDO0FBQXJCLEdBUFMsRUFRVDtBQUFDRCxRQUFJLEVBQUMsUUFBTjtBQUFlQyxVQUFNLEVBQUM7QUFBdEIsR0FSUyxFQVNUO0FBQUNELFFBQUksRUFBQyxTQUFOO0FBQWdCQyxVQUFNLEVBQUM7QUFBdkIsR0FUUyxFQVVUO0FBQUNELFFBQUksRUFBQyxPQUFOO0FBQWNDLFVBQU0sRUFBQztBQUFyQixHQVZTLEVBV1Q7QUFBQ0QsUUFBSSxFQUFDLE9BQU47QUFBY0MsVUFBTSxFQUFDO0FBQXJCLEdBWFMsRUFZVDtBQUFDRCxRQUFJLEVBQUMsTUFBTjtBQUFhQyxVQUFNLEVBQUM7QUFBcEIsR0FaUyxDQUFiO0FBZUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSxnQkFDS0YsSUFBSSxDQUFDRyxHQUFMLENBQVUsVUFBQUMsQ0FBQztBQUFBLDRCQUNKLHFFQUFDLDhDQUFEO0FBQW9CLGNBQUksRUFBRUEsQ0FBQyxDQUFDSCxJQUE1QjtBQUFrQyxnQkFBTSxFQUFFRyxDQUFDLENBQUNGO0FBQTVDLFdBQVlFLENBQUMsQ0FBQ0gsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURJO0FBQUEsT0FBWDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFTRCxDQXpCSDs7S0FBTUYsTTtBQTJCU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzA0MmE0ZTc2Yjk0MDMyOTVkOGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTa2lsbCBmcm9tIFwiLi9za2lsbFwiXHJcbmNvbnN0IFNraWxscyA9ICgpPT57XHJcbiAgICBjb25zdCBkYXRhID0gW1xyXG4gICAgICAgIHtuYW1lOlwiSFRNTDVcIixpbWdVUkw6XCJodHRwOi8vd3d3Lm9zY2FyYmxhbmNhcnRlYmxvZy5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTYvMTEvaHRtbDUtZTE0Nzk2MDAyNTcxNDYucG5nXCJ9LFxyXG4gICAgICAgIHtuYW1lOlwiQ1NTM1wiLGltZ1VSTDpcImh0dHBzOi8vbGVuZ3VhamVjc3MuY29tL2Fzc2V0cy9sb2dvLnN2Z1wifSxcclxuICAgICAgICB7bmFtZTpcIkJvb3RzdHJhcFwiLGltZ1VSTDpcImh0dHBzOi8vYXZhdGFycy5naXRodWJ1c2VyY29udGVudC5jb20vdS8yOTE4NTgxP3M9MjgwJnY9NFwifSxcclxuICAgICAgICB7bmFtZTpcIkVDTUFTY3JpcHQgNlwiLGltZ1VSTDpcImh0dHBzOi8vbWlyby5tZWRpdW0uY29tL21heC82NDAvMSprQ0RfNlIzVWtNSGtwU19ZZ0ZvVTl3LmpwZWdcIn0sXHJcbiAgICAgICAge25hbWU6XCJUeXBlc2NyaXB0XCIsaW1nVVJMOlwiaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjVHUzTGZDMjNwNDhhVVp4Z1JVZHVMbi1IOGF5dDVnNjREN2JPV05CYVRrTFUzQWFqNEs2MUt2SWtsVENPdzZtWFFBd1ZNJnVzcXA9Q0FVXCJ9LFxyXG4gICAgICAgIHtuYW1lOlwiQW5ndWxhclwiLGltZ1VSTDpcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvYy9jZi9Bbmd1bGFyX2Z1bGxfY29sb3JfbG9nby5zdmcvNDgwcHgtQW5ndWxhcl9mdWxsX2NvbG9yX2xvZ28uc3ZnLnBuZ1wifSxcclxuICAgICAgICB7bmFtZTpcIlJlYWN0XCIsaW1nVVJMOlwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vY29kaWVyL2ltYWdlL3VwbG9hZC92MTUzMDYxNDI3My9qcXhid3htbnJranEwbXhobnZqbi5wbmdcIn0sXHJcbiAgICAgICAge25hbWU6XCJQeXRob25cIixpbWdVUkw6XCJodHRwczovLzQuYnAuYmxvZ3Nwb3QuY29tLy1OTkY2d2cxMWVLUS9WLUJMM1BSdnNVSS9BQUFBQUFBQUdQdy9BdHFVdGF1SHhKNF9OMktBdWhiMV9JbmpyZ2xEeTFMMHdDUGNCL3MxNjAwL090aGVyLXB5dGhvbi1pY29uLnBuZ1wifSxcclxuICAgICAgICB7bmFtZTpcIk1vbmdvREJcIixpbWdVUkw6XCJodHRwczovL2ltZy5pY29uczguY29tL2NvbG9yLzQ1Mi9tb25nb2RiLnBuZ1wifSxcclxuICAgICAgICB7bmFtZTpcIk15U1FMXCIsaW1nVVJMOlwiaHR0cHM6Ly93d3cucG5nZmluZC5jb20vcG5ncy9tLzE2OC0xNjgyMjMzX215c3FsLW15c3FsLWxvZ28tY2lyY2xlLWhkLXBuZy1kb3dubG9hZC5wbmdcIn0sXHJcbiAgICAgICAge25hbWU6XCJGbGFza1wiLGltZ1VSTDpcImh0dHBzOi8vYmxvZy50aXJhcXVlbGlicmFzLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9GbGFzay5wbmdcIn0sXHJcbiAgICAgICAge25hbWU6XCJKYXZhXCIsaW1nVVJMOlwiaHR0cHM6Ly93d3cubG9nby53aW5lL2EvbG9nby9KYXZhXyhwcm9ncmFtbWluZ19sYW5ndWFnZSkvSmF2YV8ocHJvZ3JhbW1pbmdfbGFuZ3VhZ2UpLUxvZ28ud2luZS5zdmdcIn1cclxuICAgICAgICBcclxuICAgIF1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoIHMgPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTa2lsbCBrZXk9e3MubmFtZX0gbmFtZT17cy5uYW1lfSBpbWdVUkw9e3MuaW1nVVJMfT48L1NraWxsPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNraWxscyAiXSwic291cmNlUm9vdCI6IiJ9
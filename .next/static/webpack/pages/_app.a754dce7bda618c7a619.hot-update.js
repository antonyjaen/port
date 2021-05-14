webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/globals.css":
/*!****************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-6-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-6-2!./styles/globals.css ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root {\n  --fondo:#B3CCAD;\n  --scroll: rgb(0, 0, 0);\n  --container: rgba(0, 0, 0, 0.707);/*#20333a;*/\n  --hover-buttons :  #43613b ;\n}\n\nhtml,\nbody {\n  padding: 0;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\n    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n    background-color: var(--fondo);\n  background-size: cover ;\n}\n\n.overflow{\n  size: 100% 100%;\n  overflow: hidden;\n}\n.Image{\n width: 20rem;\n height: 16rem;\n -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n         transform: scale(1);\n -webkit-transition: all 0.2s ease-in-out;\n -moz-transition: all 0.2s ease-in-out;\n transition: all 0.2s ease-in-out;\n}\n.Image:hover{\n  -webkit-transform: scale(1.3);\n     -moz-transform: scale(1.3);\n          transform: scale(1.3);\n}\n.bgr{\n  padding-top: 2%;\n  width: 100%;\n  height: 100vh auto;\n  background-color: var(--fondo);\n  \n}\n\nbody::-webkit-scrollbar {\n  background: var(--fondo);\n}\nbody::-webkit-scrollbar-thumb {\n  background: var(--scroll);\n  border-radius: 6px;\n}\n.fondo{\n  background-size: cover;\n  padding: 2%;\n  color: aliceblue;\n  background-color: var(--container);\n  -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 4px 3px 36px rgba(0,0,0,0);\n          box-shadow: 0px 10px 13px -7px #000000, 5px 4px 3px 36px rgba(0,0,0,0);\n}\n.link{\n  width: 80px;\n  margin-right: 3%;\n  color: rgb(175, 173, 173);\n}\n\n.link:hover{\n  color:rgb(226, 226, 226);\n}\n.container-contact{\n  margin-top: -2%;\n  -webkit-box-shadow: 2px 0px 13px -5px #000000, 5px 4px 3px 36px rgba(0,0,0,0);\n          box-shadow: 2px 0px 13px -5px #000000, 5px 4px 3px 36px rgba(0,0,0,0);\n}/*\n.container-skill{\n  box-shadow: 0px 0px 13px 0px #000000, 5px 4px 3px 36px rgba(0,0,0,0);\n}*/\n.fondo p {\n  margin-top: 5%;\n  font-size:20px;\n}\n.imgCV{\n  margin-left: 7%;\n  width: 79%;\n}\n.text-contact{\n  margin-top: 9%;\n  margin-left: -24%;\n}\n.container-contact{\n        border-bottom-style:solid;\n        border-bottom-color: #000;\n\n}\n.cont{\n  margin-top: 5%;\n  width: 50px;\n  height: 50px;\n}\n\n\n/*  Profile picture and animation */\n.content {\n  position: relative;\n  width: 90%;\n  max-width: 400px;\n  margin: auto;\n  overflow: hidden\n}\n\n.content .content-overlay {\n  background: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  opacity: 0;\n  -webkit-transition: all 0.4s ease-in-out 0s;\n  -moz-transition: all 0.4s ease-in-out 0s;\n  transition: all 0.4s ease-in-out 0s\n}\n\n.content:hover .content-overlay {\n  opacity: 1\n}\n\n.content-image {\n  width: 100%\n}\n\nimg {\n  -webkit-box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);\n          box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);\n  border-radius: 5px\n}\n\n.content-details {\n  position: absolute;\n  text-align: center;\n  padding-left: 1em;\n  padding-right: 1em;\n  width: 100%;\n  top: 50%;\n  left: 50%;\n  opacity: 0;\n  -webkit-transform: translate(-50%, -50%);\n  -moz-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  -webkit-transition: all 0.3s ease-in-out 0s;\n  -moz-transition: all 0.3s ease-in-out 0s;\n  transition: all 0.3s ease-in-out 0s\n}\n\n.content:hover .content-details {\n  top: 50%;\n  left: 50%;\n  opacity: 1\n}\n\n.content-details h3 {\n  color: rgb(0, 0, 0);\n  font-weight: 500;\n  letter-spacing: 0.15em;\n  margin-bottom: 0.5em;\n  text-transform: uppercase\n}\n\n.content-details p {\n  color: #fff;\n  font-size: 0.8em\n}\n\n.fadeIn-bottom {\n  top: 80%\n}\n.contact-method:hover{\n  height: 75px;\n  -webkit-transition: all 0.1s ease-in-out 0s;\n  -moz-transition: all 0.1s ease-in-out 0s;\n  transition: all 0.1s ease-in-out 0s;\n  margin-top: 3%;\n  border-radius: 32px;\n  background-color:var(--hover-buttons);\n}\n\n.skill img{\n  width: 12rem;\n  height: 10rem;\n  -webkit-transform: scale(1);\n     -moz-transform: scale(1);\n          transform: scale(1);\n  -webkit-transition: all 0.2s ease-in-out;\n  -moz-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n\n.card{\n  color: #000;\n}\n\n.Video-desc{\n  color: rgb(228, 228, 228);\n  margin-top:-2%;\n  z-index: 100;\n  position: absolute ;\n  background: rgba(0, 0, 0, 0.603);\n  height: 100vh;\n  width: 100%;\n}\n\n.Video-desc h1{\n  margin-top: 1%;\n  margin-left: 95%;\n}\n\n.vid{\n  margin-left: 9rem;\n  height: 80%;\n  width: 100vh;\n}\n.content-details  h3{\n  color: #fff;\n}\n@media only screen and (max-width: 768px) {\n  .bgr{\n    padding-top: 0%;\n  }\n  .skill img{\n    width: 16rem;\n    height: 14rem;\n  }\n}", "",{"version":3,"sources":["webpack://styles/globals.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,sBAAsB;EACtB,iCAAiC,CAAC,WAAW;EAC7C,2BAA2B;AAC7B;;AAEA;;EAEE,UAAU;EACV,SAAS;EACT;wEACsE;IACpE,8BAA8B;EAChC,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;AACA;CACC,YAAY;CACZ,aAAa;CACb,2BAAmB;IAAnB,wBAAmB;SAAnB,mBAAmB;CACnB,wCAAgC;CAAhC,qCAAgC;CAAhC,gCAAgC;AACjC;AACA;EACE,6BAAqB;KAArB,0BAAqB;UAArB,qBAAqB;AACvB;AACA;EACE,eAAe;EACf,WAAW;EACX,kBAAkB;EAClB,8BAA8B;;AAEhC;;AAEA;EACE,wBAAwB;AAC1B;AACA;EACE,yBAAyB;EACzB,kBAAkB;AACpB;AACA;EACE,sBAAsB;EACtB,WAAW;EACX,gBAAgB;EAChB,kCAAkC;EAClC,8EAAsE;UAAtE,sEAAsE;AACxE;AACA;EACE,WAAW;EACX,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;EACE,wBAAwB;AAC1B;AACA;EACE,eAAe;EACf,6EAAqE;UAArE,qEAAqE;AACvE,CAAC;;;EAGC;AACF;EACE,cAAc;EACd,cAAc;AAChB;AACA;EACE,eAAe;EACf,UAAU;AACZ;AACA;EACE,cAAc;EACd,iBAAiB;AACnB;AACA;QACQ,yBAAyB;QACzB,yBAAyB;;AAEjC;AACA;EACE,cAAc;EACd,WAAW;EACX,YAAY;AACd;;;AAGA,mCAAmC;AACnC;EACE,kBAAkB;EAClB,UAAU;EACV,gBAAgB;EAChB,YAAY;EACZ;AACF;;AAEA;EACE,8BAA8B;EAC9B,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,OAAO;EACP,MAAM;EACN,SAAS;EACT,QAAQ;EACR,UAAU;EACV,2CAA2C;EAC3C,wCAAwC;EACxC;AACF;;AAEA;EACE;AACF;;AAEA;EACE;AACF;;AAEA;EACE,sDAA8C;UAA9C,8CAA8C;EAC9C;AACF;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;EAClB,WAAW;EACX,QAAQ;EACR,SAAS;EACT,UAAU;EACV,wCAAwC;EACxC,qCAAqC;EACrC,gCAAgC;EAChC,2CAA2C;EAC3C,wCAAwC;EACxC;AACF;;AAEA;EACE,QAAQ;EACR,SAAS;EACT;AACF;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,sBAAsB;EACtB,oBAAoB;EACpB;AACF;;AAEA;EACE,WAAW;EACX;AACF;;AAEA;EACE;AACF;AACA;EACE,YAAY;EACZ,2CAAmC;EAAnC,wCAAmC;EAAnC,mCAAmC;EACnC,cAAc;EACd,mBAAmB;EACnB,qCAAqC;AACvC;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,2BAAmB;KAAnB,wBAAmB;UAAnB,mBAAmB;EACnB,wCAAgC;EAAhC,qCAAgC;EAAhC,gCAAgC;AAClC;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,YAAY;EACZ,mBAAmB;EACnB,gCAAgC;EAChC,aAAa;EACb,WAAW;AACb;;AAEA;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,YAAY;AACd;AACA;EACE,WAAW;AACb;AACA;EACE;IACE,eAAe;EACjB;EACA;IACE,YAAY;IACZ,aAAa;EACf;AACF","sourcesContent":[":root {\n  --fondo:#B3CCAD;\n  --scroll: rgb(0, 0, 0);\n  --container: rgba(0, 0, 0, 0.707);/*#20333a;*/\n  --hover-buttons :  #43613b ;\n}\n\nhtml,\nbody {\n  padding: 0;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\n    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n    background-color: var(--fondo);\n  background-size: cover ;\n}\n\n.overflow{\n  size: 100% 100%;\n  overflow: hidden;\n}\n.Image{\n width: 20rem;\n height: 16rem;\n transform: scale(1);\n transition: all 0.2s ease-in-out;\n}\n.Image:hover{\n  transform: scale(1.3);\n}\n.bgr{\n  padding-top: 2%;\n  width: 100%;\n  height: 100vh auto;\n  background-color: var(--fondo);\n  \n}\n\nbody::-webkit-scrollbar {\n  background: var(--fondo);\n}\nbody::-webkit-scrollbar-thumb {\n  background: var(--scroll);\n  border-radius: 6px;\n}\n.fondo{\n  background-size: cover;\n  padding: 2%;\n  color: aliceblue;\n  background-color: var(--container);\n  box-shadow: 0px 10px 13px -7px #000000, 5px 4px 3px 36px rgba(0,0,0,0);\n}\n.link{\n  width: 80px;\n  margin-right: 3%;\n  color: rgb(175, 173, 173);\n}\n\n.link:hover{\n  color:rgb(226, 226, 226);\n}\n.container-contact{\n  margin-top: -2%;\n  box-shadow: 2px 0px 13px -5px #000000, 5px 4px 3px 36px rgba(0,0,0,0);\n}/*\n.container-skill{\n  box-shadow: 0px 0px 13px 0px #000000, 5px 4px 3px 36px rgba(0,0,0,0);\n}*/\n.fondo p {\n  margin-top: 5%;\n  font-size:20px;\n}\n.imgCV{\n  margin-left: 7%;\n  width: 79%;\n}\n.text-contact{\n  margin-top: 9%;\n  margin-left: -24%;\n}\n.container-contact{\n        border-bottom-style:solid;\n        border-bottom-color: #000;\n\n}\n.cont{\n  margin-top: 5%;\n  width: 50px;\n  height: 50px;\n}\n\n\n/*  Profile picture and animation */\n.content {\n  position: relative;\n  width: 90%;\n  max-width: 400px;\n  margin: auto;\n  overflow: hidden\n}\n\n.content .content-overlay {\n  background: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  opacity: 0;\n  -webkit-transition: all 0.4s ease-in-out 0s;\n  -moz-transition: all 0.4s ease-in-out 0s;\n  transition: all 0.4s ease-in-out 0s\n}\n\n.content:hover .content-overlay {\n  opacity: 1\n}\n\n.content-image {\n  width: 100%\n}\n\nimg {\n  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);\n  border-radius: 5px\n}\n\n.content-details {\n  position: absolute;\n  text-align: center;\n  padding-left: 1em;\n  padding-right: 1em;\n  width: 100%;\n  top: 50%;\n  left: 50%;\n  opacity: 0;\n  -webkit-transform: translate(-50%, -50%);\n  -moz-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  -webkit-transition: all 0.3s ease-in-out 0s;\n  -moz-transition: all 0.3s ease-in-out 0s;\n  transition: all 0.3s ease-in-out 0s\n}\n\n.content:hover .content-details {\n  top: 50%;\n  left: 50%;\n  opacity: 1\n}\n\n.content-details h3 {\n  color: rgb(0, 0, 0);\n  font-weight: 500;\n  letter-spacing: 0.15em;\n  margin-bottom: 0.5em;\n  text-transform: uppercase\n}\n\n.content-details p {\n  color: #fff;\n  font-size: 0.8em\n}\n\n.fadeIn-bottom {\n  top: 80%\n}\n.contact-method:hover{\n  height: 75px;\n  transition: all 0.1s ease-in-out 0s;\n  margin-top: 3%;\n  border-radius: 32px;\n  background-color:var(--hover-buttons);\n}\n\n.skill img{\n  width: 12rem;\n  height: 10rem;\n  transform: scale(1);\n  transition: all 0.2s ease-in-out;\n}\n\n.card{\n  color: #000;\n}\n\n.Video-desc{\n  color: rgb(228, 228, 228);\n  margin-top:-2%;\n  z-index: 100;\n  position: absolute ;\n  background: rgba(0, 0, 0, 0.603);\n  height: 100vh;\n  width: 100%;\n}\n\n.Video-desc h1{\n  margin-top: 1%;\n  margin-left: 95%;\n}\n\n.vid{\n  margin-left: 9rem;\n  height: 80%;\n  width: 100vh;\n}\n.content-details  h3{\n  color: #fff;\n}\n@media only screen and (max-width: 768px) {\n  .bgr{\n    padding-top: 0%;\n  }\n  .skill img{\n    width: 16rem;\n    height: 14rem;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMrRjtBQUMvRiw4QkFBOEIseUZBQTJCO0FBQ3pEO0FBQ0EsOEJBQThCLFFBQVMsVUFBVSxvQkFBb0IsMkJBQTJCLHNDQUFzQyxVQUFVLGtDQUFrQyxHQUFHLGlCQUFpQixlQUFlLGNBQWMsd0pBQXdKLHFDQUFxQyw0QkFBNEIsR0FBRyxjQUFjLG9CQUFvQixxQkFBcUIsR0FBRyxTQUFTLGdCQUFnQixpQkFBaUIsK0JBQStCLCtCQUErQiwrQkFBK0IsNENBQTRDLHlDQUF5QyxvQ0FBb0MsR0FBRyxlQUFlLGtDQUFrQyxrQ0FBa0Msa0NBQWtDLEdBQUcsT0FBTyxvQkFBb0IsZ0JBQWdCLHVCQUF1QixtQ0FBbUMsT0FBTyw2QkFBNkIsNkJBQTZCLEdBQUcsaUNBQWlDLDhCQUE4Qix1QkFBdUIsR0FBRyxTQUFTLDJCQUEyQixnQkFBZ0IscUJBQXFCLHVDQUF1QyxtRkFBbUYsbUZBQW1GLEdBQUcsUUFBUSxnQkFBZ0IscUJBQXFCLDhCQUE4QixHQUFHLGdCQUFnQiw2QkFBNkIsR0FBRyxxQkFBcUIsb0JBQW9CLGtGQUFrRixrRkFBa0YsR0FBRyxxQkFBcUIseUVBQXlFLEdBQUcsY0FBYyxtQkFBbUIsbUJBQW1CLEdBQUcsU0FBUyxvQkFBb0IsZUFBZSxHQUFHLGdCQUFnQixtQkFBbUIsc0JBQXNCLEdBQUcscUJBQXFCLG9DQUFvQyxvQ0FBb0MsS0FBSyxRQUFRLG1CQUFtQixnQkFBZ0IsaUJBQWlCLEdBQUcsc0RBQXNELHVCQUF1QixlQUFlLHFCQUFxQixpQkFBaUIsdUJBQXVCLCtCQUErQixtQ0FBbUMsdUJBQXVCLGlCQUFpQixnQkFBZ0IsWUFBWSxXQUFXLGNBQWMsYUFBYSxlQUFlLGdEQUFnRCw2Q0FBNkMsMENBQTBDLHFDQUFxQyxpQkFBaUIsb0JBQW9CLGtCQUFrQixTQUFTLDJEQUEyRCwy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QkFBdUIsZ0JBQWdCLEdBQUcsNkNBQTZDLFNBQVMsc0JBQXNCLEtBQUssZUFBZSxtQkFBbUIsb0JBQW9CLEtBQUssR0FBRyxtQkFBbUI7QUFDMThVO0FBQ2Usc0ZBQXVCLEVBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5hNzU0ZGNlN2JkYTYxOGM3YTYxOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1mb25kbzojQjNDQ0FEO1xcbiAgLS1zY3JvbGw6IHJnYigwLCAwLCAwKTtcXG4gIC0tY29udGFpbmVyOiByZ2JhKDAsIDAsIDAsIDAuNzA3KTsvKiMyMDMzM2E7Ki9cXG4gIC0taG92ZXItYnV0dG9ucyA6ICAjNDM2MTNiIDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLCBPeHlnZW4sXFxuICAgIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb25kbyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyIDtcXG59XFxuXFxuLm92ZXJmbG93e1xcbiAgc2l6ZTogMTAwJSAxMDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLkltYWdle1xcbiB3aWR0aDogMjByZW07XFxuIGhlaWdodDogMTZyZW07XFxuIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG4uSW1hZ2U6aG92ZXJ7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG4gICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxufVxcbi5iZ3J7XFxuICBwYWRkaW5nLXRvcDogMiU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmggYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbmRvKTtcXG4gIFxcbn1cXG5cXG5ib2R5Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1mb25kbyk7XFxufVxcbmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXNjcm9sbCk7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcbi5mb25kb3tcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBwYWRkaW5nOiAyJTtcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250YWluZXIpO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMTBweCAxM3B4IC03cHggIzAwMDAwMCwgNXB4IDRweCAzcHggMzZweCByZ2JhKDAsMCwwLDApO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTBweCAxM3B4IC03cHggIzAwMDAwMCwgNXB4IDRweCAzcHggMzZweCByZ2JhKDAsMCwwLDApO1xcbn1cXG4ubGlua3tcXG4gIHdpZHRoOiA4MHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAzJTtcXG4gIGNvbG9yOiByZ2IoMTc1LCAxNzMsIDE3Myk7XFxufVxcblxcbi5saW5rOmhvdmVye1xcbiAgY29sb3I6cmdiKDIyNiwgMjI2LCAyMjYpO1xcbn1cXG4uY29udGFpbmVyLWNvbnRhY3R7XFxuICBtYXJnaW4tdG9wOiAtMiU7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCAwcHggMTNweCAtNXB4ICMwMDAwMDAsIDVweCA0cHggM3B4IDM2cHggcmdiYSgwLDAsMCwwKTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMnB4IDBweCAxM3B4IC01cHggIzAwMDAwMCwgNXB4IDRweCAzcHggMzZweCByZ2JhKDAsMCwwLDApO1xcbn0vKlxcbi5jb250YWluZXItc2tpbGx7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEzcHggMHB4ICMwMDAwMDAsIDVweCA0cHggM3B4IDM2cHggcmdiYSgwLDAsMCwwKTtcXG59Ki9cXG4uZm9uZG8gcCB7XFxuICBtYXJnaW4tdG9wOiA1JTtcXG4gIGZvbnQtc2l6ZToyMHB4O1xcbn1cXG4uaW1nQ1Z7XFxuICBtYXJnaW4tbGVmdDogNyU7XFxuICB3aWR0aDogNzklO1xcbn1cXG4udGV4dC1jb250YWN0e1xcbiAgbWFyZ2luLXRvcDogOSU7XFxuICBtYXJnaW4tbGVmdDogLTI0JTtcXG59XFxuLmNvbnRhaW5lci1jb250YWN0e1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTpzb2xpZDtcXG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMwMDA7XFxuXFxufVxcbi5jb250e1xcbiAgbWFyZ2luLXRvcDogNSU7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuXFxuXFxuLyogIFByb2ZpbGUgcGljdHVyZSBhbmQgYW5pbWF0aW9uICovXFxuLmNvbnRlbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBvdmVyZmxvdzogaGlkZGVuXFxufVxcblxcbi5jb250ZW50IC5jb250ZW50LW92ZXJsYXkge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBvcGFjaXR5OiAwO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dCAwcztcXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQgMHM7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dCAwc1xcbn1cXG5cXG4uY29udGVudDpob3ZlciAuY29udGVudC1vdmVybGF5IHtcXG4gIG9wYWNpdHk6IDFcXG59XFxuXFxuLmNvbnRlbnQtaW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCVcXG59XFxuXFxuaW1nIHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCA1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweFxcbn1cXG5cXG4uY29udGVudC1kZXRhaWxzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogMWVtO1xcbiAgcGFkZGluZy1yaWdodDogMWVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIG9wYWNpdHk6IDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwc1xcbn1cXG5cXG4uY29udGVudDpob3ZlciAuY29udGVudC1kZXRhaWxzIHtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgb3BhY2l0eTogMVxcbn1cXG5cXG4uY29udGVudC1kZXRhaWxzIGgzIHtcXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTVlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZVxcbn1cXG5cXG4uY29udGVudC1kZXRhaWxzIHAge1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDAuOGVtXFxufVxcblxcbi5mYWRlSW4tYm90dG9tIHtcXG4gIHRvcDogODAlXFxufVxcbi5jb250YWN0LW1ldGhvZDpob3ZlcntcXG4gIGhlaWdodDogNzVweDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQgMHM7XFxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0IDBzO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQgMHM7XFxuICBtYXJnaW4tdG9wOiAzJTtcXG4gIGJvcmRlci1yYWRpdXM6IDMycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWhvdmVyLWJ1dHRvbnMpO1xcbn1cXG5cXG4uc2tpbGwgaW1ne1xcbiAgd2lkdGg6IDEycmVtO1xcbiAgaGVpZ2h0OiAxMHJlbTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5jYXJke1xcbiAgY29sb3I6ICMwMDA7XFxufVxcblxcbi5WaWRlby1kZXNje1xcbiAgY29sb3I6IHJnYigyMjgsIDIyOCwgMjI4KTtcXG4gIG1hcmdpbi10b3A6LTIlO1xcbiAgei1pbmRleDogMTAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlIDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42MDMpO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uVmlkZW8tZGVzYyBoMXtcXG4gIG1hcmdpbi10b3A6IDElO1xcbiAgbWFyZ2luLWxlZnQ6IDk1JTtcXG59XFxuXFxuLnZpZHtcXG4gIG1hcmdpbi1sZWZ0OiA5cmVtO1xcbiAgaGVpZ2h0OiA4MCU7XFxuICB3aWR0aDogMTAwdmg7XFxufVxcbi5jb250ZW50LWRldGFpbHMgIGgze1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5iZ3J7XFxuICAgIHBhZGRpbmctdG9wOiAwJTtcXG4gIH1cXG4gIC5za2lsbCBpbWd7XFxuICAgIHdpZHRoOiAxNnJlbTtcXG4gICAgaGVpZ2h0OiAxNHJlbTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9nbG9iYWxzLmNzc1wi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RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLFlBQVk7SUFDWixhQUFhO0VBQ2Y7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWZvbmRvOiNCM0NDQUQ7XFxuICAtLXNjcm9sbDogcmdiKDAsIDAsIDApO1xcbiAgLS1jb250YWluZXI6IHJnYmEoMCwgMCwgMCwgMC43MDcpOy8qIzIwMzMzYTsqL1xcbiAgLS1ob3Zlci1idXR0b25zIDogICM0MzYxM2IgO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sIE94eWdlbixcXG4gICAgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbmRvKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgO1xcbn1cXG5cXG4ub3ZlcmZsb3d7XFxuICBzaXplOiAxMDAlIDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uSW1hZ2V7XFxuIHdpZHRoOiAyMHJlbTtcXG4gaGVpZ2h0OiAxNnJlbTtcXG4gdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcbi5JbWFnZTpob3ZlcntcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG59XFxuLmJncntcXG4gIHBhZGRpbmctdG9wOiAyJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aCBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9uZG8pO1xcbiAgXFxufVxcblxcbmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWZvbmRvKTtcXG59XFxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tc2Nyb2xsKTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuLmZvbmRve1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHBhZGRpbmc6IDIlO1xcbiAgY29sb3I6IGFsaWNlYmx1ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRhaW5lcik7XFxuICBib3gtc2hhZG93OiAwcHggMTBweCAxM3B4IC03cHggIzAwMDAwMCwgNXB4IDRweCAzcHggMzZweCByZ2JhKDAsMCwwLDApO1xcbn1cXG4ubGlua3tcXG4gIHdpZHRoOiA4MHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAzJTtcXG4gIGNvbG9yOiByZ2IoMTc1LCAxNzMsIDE3Myk7XFxufVxcblxcbi5saW5rOmhvdmVye1xcbiAgY29sb3I6cmdiKDIyNiwgMjI2LCAyMjYpO1xcbn1cXG4uY29udGFpbmVyLWNvbnRhY3R7XFxuICBtYXJnaW4tdG9wOiAtMiU7XFxuICBib3gtc2hhZG93OiAycHggMHB4IDEzcHggLTVweCAjMDAwMDAwLCA1cHggNHB4IDNweCAzNnB4IHJnYmEoMCwwLDAsMCk7XFxufS8qXFxuLmNvbnRhaW5lci1za2lsbHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTNweCAwcHggIzAwMDAwMCwgNXB4IDRweCAzcHggMzZweCByZ2JhKDAsMCwwLDApO1xcbn0qL1xcbi5mb25kbyBwIHtcXG4gIG1hcmdpbi10b3A6IDUlO1xcbiAgZm9udC1zaXplOjIwcHg7XFxufVxcbi5pbWdDVntcXG4gIG1hcmdpbi1sZWZ0OiA3JTtcXG4gIHdpZHRoOiA3OSU7XFxufVxcbi50ZXh0LWNvbnRhY3R7XFxuICBtYXJnaW4tdG9wOiA5JTtcXG4gIG1hcmdpbi1sZWZ0OiAtMjQlO1xcbn1cXG4uY29udGFpbmVyLWNvbnRhY3R7XFxuICAgICAgICBib3JkZXItYm90dG9tLXN0eWxlOnNvbGlkO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzAwMDtcXG5cXG59XFxuLmNvbnR7XFxuICBtYXJnaW4tdG9wOiA1JTtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG5cXG4vKiAgUHJvZmlsZSBwaWN0dXJlIGFuZCBhbmltYXRpb24gKi9cXG4uY29udGVudCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogOTAlO1xcbiAgbWF4LXdpZHRoOiA0MDBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG92ZXJmbG93OiBoaWRkZW5cXG59XFxuXFxuLmNvbnRlbnQgLmNvbnRlbnQtb3ZlcmxheSB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIG9wYWNpdHk6IDA7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0IDBzO1xcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dCAwcztcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0IDBzXFxufVxcblxcbi5jb250ZW50OmhvdmVyIC5jb250ZW50LW92ZXJsYXkge1xcbiAgb3BhY2l0eTogMVxcbn1cXG5cXG4uY29udGVudC1pbWFnZSB7XFxuICB3aWR0aDogMTAwJVxcbn1cXG5cXG5pbWcge1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweFxcbn1cXG5cXG4uY29udGVudC1kZXRhaWxzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogMWVtO1xcbiAgcGFkZGluZy1yaWdodDogMWVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIG9wYWNpdHk6IDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwc1xcbn1cXG5cXG4uY29udGVudDpob3ZlciAuY29udGVudC1kZXRhaWxzIHtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgb3BhY2l0eTogMVxcbn1cXG5cXG4uY29udGVudC1kZXRhaWxzIGgzIHtcXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTVlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZVxcbn1cXG5cXG4uY29udGVudC1kZXRhaWxzIHAge1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDAuOGVtXFxufVxcblxcbi5mYWRlSW4tYm90dG9tIHtcXG4gIHRvcDogODAlXFxufVxcbi5jb250YWN0LW1ldGhvZDpob3ZlcntcXG4gIGhlaWdodDogNzVweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0IDBzO1xcbiAgbWFyZ2luLXRvcDogMyU7XFxuICBib3JkZXItcmFkaXVzOiAzMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1ob3Zlci1idXR0b25zKTtcXG59XFxuXFxuLnNraWxsIGltZ3tcXG4gIHdpZHRoOiAxMnJlbTtcXG4gIGhlaWdodDogMTByZW07XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5jYXJke1xcbiAgY29sb3I6ICMwMDA7XFxufVxcblxcbi5WaWRlby1kZXNje1xcbiAgY29sb3I6IHJnYigyMjgsIDIyOCwgMjI4KTtcXG4gIG1hcmdpbi10b3A6LTIlO1xcbiAgei1pbmRleDogMTAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlIDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42MDMpO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uVmlkZW8tZGVzYyBoMXtcXG4gIG1hcmdpbi10b3A6IDElO1xcbiAgbWFyZ2luLWxlZnQ6IDk1JTtcXG59XFxuXFxuLnZpZHtcXG4gIG1hcmdpbi1sZWZ0OiA5cmVtO1xcbiAgaGVpZ2h0OiA4MCU7XFxuICB3aWR0aDogMTAwdmg7XFxufVxcbi5jb250ZW50LWRldGFpbHMgIGgze1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5iZ3J7XFxuICAgIHBhZGRpbmctdG9wOiAwJTtcXG4gIH1cXG4gIC5za2lsbCBpbWd7XFxuICAgIHdpZHRoOiAxNnJlbTtcXG4gICAgaGVpZ2h0OiAxNHJlbTtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=
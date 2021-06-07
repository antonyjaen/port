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
___CSS_LOADER_EXPORT___.push([module.i, ":root {\n  --fondo:#B3CCAD;\n  --scroll: rgb(0, 0, 0);\n  --container: rgba(0, 0, 0, 0.707);/*#20333a;*/\n  --hover-buttons :  #43613b ;\n}\n\nhtml,\nbody {\n  padding: 0;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\n    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n    background-color: var(--fondo);\n  background-size: cover ;\n}\n\n.overflow{\n  size: 100% 100%;\n  overflow: hidden;\n}\n.Image{\n width: 22rem;\n height: 16rem;\n -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n         transform: scale(1);\n -webkit-transition: all 0.2s ease-in-out;\n -moz-transition: all 0.2s ease-in-out;\n transition: all 0.2s ease-in-out;\n}\n.Image:hover{\n  -webkit-transform: scale(1.3);\n     -moz-transform: scale(1.3);\n          transform: scale(1.3);\n}\n.bgr{\n  padding-top: 2%;\n  width: 100%;\n  height: 100vh auto;\n  background-color: var(--fondo);\n  \n}\n\nbody::-webkit-scrollbar {\n  background: var(--fondo);\n}\nbody::-webkit-scrollbar-thumb {\n  background: var(--scroll);\n  border-radius: 6px;\n}\n.fondo{\n  background-size: cover;\n  padding: 2%;\n  color: aliceblue;\n  background-color: var(--container);\n  -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 4px 3px 36px rgba(0,0,0,0);\n          box-shadow: 0px 10px 13px -7px #000000, 5px 4px 3px 36px rgba(0,0,0,0);\n}\n.link{\n  width: 80px;\n  margin-right: 3%;\n  color: rgb(175, 173, 173);\n}\n\n.link:hover{\n  color:rgb(226, 226, 226);\n}\n.container-contact{\n  margin-top: -2%;\n  -webkit-box-shadow: 2px 0px 13px -5px #000000, 5px 4px 3px 36px rgba(0,0,0,0);\n          box-shadow: 2px 0px 13px -5px #000000, 5px 4px 3px 36px rgba(0,0,0,0);\n}\n\n.skill{\n  /*background: #000;*/\n  backdrop-filter: blur(3px);\n  background-color: rgba(0, 0, 0, 0.199);  \n}\n.fondo p {\n  margin-top: 5%;\n  font-size:20px;\n}\n.imgCV{\n  margin-left: 7%;\n  width: 79%;\n}\n.text-contact{\n  margin-top: 9%;\n  margin-left: -24%;\n}\n.container-contact{\n        border-bottom-style:solid;\n        border-bottom-color: #000;\n\n}\n.cont{\n  margin-top: 5%;\n  width: 50px;\n  height: 50px;\n}\n\n\n/*  Profile picture and animation */\n.content {\n  position: relative;\n  width: 90%;\n  max-width: 400px;\n  margin: auto;\n  overflow: hidden\n}\n\n.content .content-overlay {\n  background: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  opacity: 0;\n  -webkit-transition: all 0.4s ease-in-out 0s;\n  -moz-transition: all 0.4s ease-in-out 0s;\n  transition: all 0.4s ease-in-out 0s\n}\n\n.content:hover .content-overlay {\n  opacity: 1\n}\n\n.content-image {\n  width: 100%\n}\n\nimg {\n  -webkit-box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);\n          box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);\n  border-radius: 5px\n}\n\n.content-details {\n  position: absolute;\n  text-align: center;\n  padding-left: 1em;\n  padding-right: 1em;\n  width: 100%;\n  top: 50%;\n  left: 50%;\n  opacity: 0;\n  -webkit-transform: translate(-50%, -50%);\n  -moz-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  -webkit-transition: all 0.3s ease-in-out 0s;\n  -moz-transition: all 0.3s ease-in-out 0s;\n  transition: all 0.3s ease-in-out 0s\n}\n\n.content:hover .content-details {\n  top: 50%;\n  left: 50%;\n  opacity: 1\n}\n\n.content-details h3 {\n  color: rgb(0, 0, 0);\n  font-weight: 500;\n  letter-spacing: 0.15em;\n  margin-bottom: 0.5em;\n  text-transform: uppercase\n}\n\n.content-details p {\n  color: #fff;\n  font-size: 0.8em\n}\n\n.fadeIn-bottom {\n  top: 80%\n}\n.contact-method:hover{\n  height: 75px;\n  -webkit-transition: all 0.1s ease-in-out 0s;\n  -moz-transition: all 0.1s ease-in-out 0s;\n  transition: all 0.1s ease-in-out 0s;\n  margin-top: 3%;\n  border-radius: 32px;\n  background-color:var(--hover-buttons);\n}\n\n.skill img{\n  width: 11rem;\n  height: 8rem;\n  -webkit-transform: scale(1);\n     -moz-transform: scale(1);\n          transform: scale(1);\n  -webkit-transition: all 0.2s ease-in-out;\n  -moz-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n\n.card{\n  color: #000;\n  background: #000;\n}\n\n.Video-desc{\n  color: rgb(228, 228, 228);\n  margin-top:-2%;\n  z-index: 100;\n  position: absolute ;\n  background: rgba(0, 0, 0, 0.726);\n  height: 100vh;\n  width: 100%;\n}\n\n.Video-desc h1{\n  margin-top: 1%;\n  margin-left: 95%;\n}\n\n.vid{\n  margin-top: -3rem;\n  margin-left: 9rem;\n  height: 90%;\n  width: 80%;\n}\n.content-details  h3{\n  color: #fff;\n}\n@media only screen and (max-width: 768px) {\n  .bgr{\n    padding-top: 0%;\n  }\n  .skill img{\n    width: 16rem;\n    height: 14rem;\n  }\n  \n.vid{\n  margin-left: 0%;\n  height: 80%;\n  width: 100%;\n  z-index: 100;\n  margin-top: 5%;\n}\n.Video-desc{\n  margin-top: 0%;\n}\n.Video-desc h1{\n  z-index: 200;\n  margin-left: 90%;\n}\n.Image{\n  width: 24rem;\n  height: 18rem;\n  -webkit-transform: scale(1);\n     -moz-transform: scale(1);\n          transform: scale(1);\n  -webkit-transition: all 0.2s ease-in-out;\n  -moz-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n }\n}", "",{"version":3,"sources":["webpack://styles/globals.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,sBAAsB;EACtB,iCAAiC,CAAC,WAAW;EAC7C,2BAA2B;AAC7B;;AAEA;;EAEE,UAAU;EACV,SAAS;EACT;wEACsE;IACpE,8BAA8B;EAChC,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;AACA;CACC,YAAY;CACZ,aAAa;CACb,2BAAmB;IAAnB,wBAAmB;SAAnB,mBAAmB;CACnB,wCAAgC;CAAhC,qCAAgC;CAAhC,gCAAgC;AACjC;AACA;EACE,6BAAqB;KAArB,0BAAqB;UAArB,qBAAqB;AACvB;AACA;EACE,eAAe;EACf,WAAW;EACX,kBAAkB;EAClB,8BAA8B;;AAEhC;;AAEA;EACE,wBAAwB;AAC1B;AACA;EACE,yBAAyB;EACzB,kBAAkB;AACpB;AACA;EACE,sBAAsB;EACtB,WAAW;EACX,gBAAgB;EAChB,kCAAkC;EAClC,8EAAsE;UAAtE,sEAAsE;AACxE;AACA;EACE,WAAW;EACX,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;EACE,wBAAwB;AAC1B;AACA;EACE,eAAe;EACf,6EAAqE;UAArE,qEAAqE;AACvE;;AAEA;EACE,oBAAoB;EACpB,0BAA0B;EAC1B,sCAAsC;AACxC;AACA;EACE,cAAc;EACd,cAAc;AAChB;AACA;EACE,eAAe;EACf,UAAU;AACZ;AACA;EACE,cAAc;EACd,iBAAiB;AACnB;AACA;QACQ,yBAAyB;QACzB,yBAAyB;;AAEjC;AACA;EACE,cAAc;EACd,WAAW;EACX,YAAY;AACd;;;AAGA,mCAAmC;AACnC;EACE,kBAAkB;EAClB,UAAU;EACV,gBAAgB;EAChB,YAAY;EACZ;AACF;;AAEA;EACE,8BAA8B;EAC9B,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,OAAO;EACP,MAAM;EACN,SAAS;EACT,QAAQ;EACR,UAAU;EACV,2CAA2C;EAC3C,wCAAwC;EACxC;AACF;;AAEA;EACE;AACF;;AAEA;EACE;AACF;;AAEA;EACE,sDAA8C;UAA9C,8CAA8C;EAC9C;AACF;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;EAClB,WAAW;EACX,QAAQ;EACR,SAAS;EACT,UAAU;EACV,wCAAwC;EACxC,qCAAqC;EACrC,gCAAgC;EAChC,2CAA2C;EAC3C,wCAAwC;EACxC;AACF;;AAEA;EACE,QAAQ;EACR,SAAS;EACT;AACF;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,sBAAsB;EACtB,oBAAoB;EACpB;AACF;;AAEA;EACE,WAAW;EACX;AACF;;AAEA;EACE;AACF;AACA;EACE,YAAY;EACZ,2CAAmC;EAAnC,wCAAmC;EAAnC,mCAAmC;EACnC,cAAc;EACd,mBAAmB;EACnB,qCAAqC;AACvC;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,2BAAmB;KAAnB,wBAAmB;UAAnB,mBAAmB;EACnB,wCAAgC;EAAhC,qCAAgC;EAAhC,gCAAgC;AAClC;;AAEA;EACE,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,YAAY;EACZ,mBAAmB;EACnB,gCAAgC;EAChC,aAAa;EACb,WAAW;AACb;;AAEA;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,WAAW;EACX,UAAU;AACZ;AACA;EACE,WAAW;AACb;AACA;EACE;IACE,eAAe;EACjB;EACA;IACE,YAAY;IACZ,aAAa;EACf;;AAEF;EACE,eAAe;EACf,WAAW;EACX,WAAW;EACX,YAAY;EACZ,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;EACE,YAAY;EACZ,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,aAAa;EACb,2BAAmB;KAAnB,wBAAmB;UAAnB,mBAAmB;EACnB,wCAAgC;EAAhC,qCAAgC;EAAhC,gCAAgC;CACjC;AACD","sourcesContent":[":root {\n  --fondo:#B3CCAD;\n  --scroll: rgb(0, 0, 0);\n  --container: rgba(0, 0, 0, 0.707);/*#20333a;*/\n  --hover-buttons :  #43613b ;\n}\n\nhtml,\nbody {\n  padding: 0;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\n    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n    background-color: var(--fondo);\n  background-size: cover ;\n}\n\n.overflow{\n  size: 100% 100%;\n  overflow: hidden;\n}\n.Image{\n width: 22rem;\n height: 16rem;\n transform: scale(1);\n transition: all 0.2s ease-in-out;\n}\n.Image:hover{\n  transform: scale(1.3);\n}\n.bgr{\n  padding-top: 2%;\n  width: 100%;\n  height: 100vh auto;\n  background-color: var(--fondo);\n  \n}\n\nbody::-webkit-scrollbar {\n  background: var(--fondo);\n}\nbody::-webkit-scrollbar-thumb {\n  background: var(--scroll);\n  border-radius: 6px;\n}\n.fondo{\n  background-size: cover;\n  padding: 2%;\n  color: aliceblue;\n  background-color: var(--container);\n  box-shadow: 0px 10px 13px -7px #000000, 5px 4px 3px 36px rgba(0,0,0,0);\n}\n.link{\n  width: 80px;\n  margin-right: 3%;\n  color: rgb(175, 173, 173);\n}\n\n.link:hover{\n  color:rgb(226, 226, 226);\n}\n.container-contact{\n  margin-top: -2%;\n  box-shadow: 2px 0px 13px -5px #000000, 5px 4px 3px 36px rgba(0,0,0,0);\n}\n\n.skill{\n  /*background: #000;*/\n  backdrop-filter: blur(3px);\n  background-color: rgba(0, 0, 0, 0.199);  \n}\n.fondo p {\n  margin-top: 5%;\n  font-size:20px;\n}\n.imgCV{\n  margin-left: 7%;\n  width: 79%;\n}\n.text-contact{\n  margin-top: 9%;\n  margin-left: -24%;\n}\n.container-contact{\n        border-bottom-style:solid;\n        border-bottom-color: #000;\n\n}\n.cont{\n  margin-top: 5%;\n  width: 50px;\n  height: 50px;\n}\n\n\n/*  Profile picture and animation */\n.content {\n  position: relative;\n  width: 90%;\n  max-width: 400px;\n  margin: auto;\n  overflow: hidden\n}\n\n.content .content-overlay {\n  background: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  opacity: 0;\n  -webkit-transition: all 0.4s ease-in-out 0s;\n  -moz-transition: all 0.4s ease-in-out 0s;\n  transition: all 0.4s ease-in-out 0s\n}\n\n.content:hover .content-overlay {\n  opacity: 1\n}\n\n.content-image {\n  width: 100%\n}\n\nimg {\n  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);\n  border-radius: 5px\n}\n\n.content-details {\n  position: absolute;\n  text-align: center;\n  padding-left: 1em;\n  padding-right: 1em;\n  width: 100%;\n  top: 50%;\n  left: 50%;\n  opacity: 0;\n  -webkit-transform: translate(-50%, -50%);\n  -moz-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  -webkit-transition: all 0.3s ease-in-out 0s;\n  -moz-transition: all 0.3s ease-in-out 0s;\n  transition: all 0.3s ease-in-out 0s\n}\n\n.content:hover .content-details {\n  top: 50%;\n  left: 50%;\n  opacity: 1\n}\n\n.content-details h3 {\n  color: rgb(0, 0, 0);\n  font-weight: 500;\n  letter-spacing: 0.15em;\n  margin-bottom: 0.5em;\n  text-transform: uppercase\n}\n\n.content-details p {\n  color: #fff;\n  font-size: 0.8em\n}\n\n.fadeIn-bottom {\n  top: 80%\n}\n.contact-method:hover{\n  height: 75px;\n  transition: all 0.1s ease-in-out 0s;\n  margin-top: 3%;\n  border-radius: 32px;\n  background-color:var(--hover-buttons);\n}\n\n.skill img{\n  width: 11rem;\n  height: 8rem;\n  transform: scale(1);\n  transition: all 0.2s ease-in-out;\n}\n\n.card{\n  color: #000;\n  background: #000;\n}\n\n.Video-desc{\n  color: rgb(228, 228, 228);\n  margin-top:-2%;\n  z-index: 100;\n  position: absolute ;\n  background: rgba(0, 0, 0, 0.726);\n  height: 100vh;\n  width: 100%;\n}\n\n.Video-desc h1{\n  margin-top: 1%;\n  margin-left: 95%;\n}\n\n.vid{\n  margin-top: -3rem;\n  margin-left: 9rem;\n  height: 90%;\n  width: 80%;\n}\n.content-details  h3{\n  color: #fff;\n}\n@media only screen and (max-width: 768px) {\n  .bgr{\n    padding-top: 0%;\n  }\n  .skill img{\n    width: 16rem;\n    height: 14rem;\n  }\n  \n.vid{\n  margin-left: 0%;\n  height: 80%;\n  width: 100%;\n  z-index: 100;\n  margin-top: 5%;\n}\n.Video-desc{\n  margin-top: 0%;\n}\n.Video-desc h1{\n  z-index: 200;\n  margin-left: 90%;\n}\n.Image{\n  width: 24rem;\n  height: 18rem;\n  transform: scale(1);\n  transition: all 0.2s ease-in-out;\n }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMrRjtBQUMvRiw4QkFBOEIseUZBQTJCO0FBQ3pEO0FBQ0EsOEJBQThCLFFBQVMsVUFBVSxvQkFBb0IsMkJBQTJCLHNDQUFzQyxVQUFVLGtDQUFrQyxHQUFHLGlCQUFpQixlQUFlLGNBQWMsd0pBQXdKLHFDQUFxQyw0QkFBNEIsR0FBRyxjQUFjLG9CQUFvQixxQkFBcUIsR0FBRyxTQUFTLGdCQUFnQixpQkFBaUIsK0JBQStCLCtCQUErQiwrQkFBK0IsNENBQTRDLHlDQUF5QyxvQ0FBb0MsR0FBRyxlQUFlLGtDQUFrQyxrQ0FBa0Msa0NBQWtDLEdBQUcsT0FBTyxvQkFBb0IsZ0JBQWdCLHVCQUF1QixtQ0FBbUMsT0FBTyw2QkFBNkIsNkJBQTZCLEdBQUcsaUNBQWlDLDhCQUE4Qix1QkFBdUIsR0FBRyxTQUFTLDJCQUEyQixnQkFBZ0IscUJBQXFCLHVDQUF1QyxtRkFBbUYsbUZBQW1GLEdBQUcsUUFBUSxnQkFBZ0IscUJBQXFCLDhCQUE4QixHQUFHLGdCQUFnQiw2QkFBNkIsR0FBRyxxQkFBcUIsb0JBQW9CLGtGQUFrRixrRkFBa0YsR0FBRyxXQUFXLHVCQUF1QixpQ0FBaUMsMkNBQTJDLEtBQUssWUFBWSxtQkFBbUIsbUJBQW1CLEdBQUcsU0FBUyxvQkFBb0IsZUFBZSxHQUFHLGdCQUFnQixtQkFBbUIsc0JBQXNCLEdBQUcscUJBQXFCLG9DQUFvQyxvQ0FBb0MsS0FBSyxRQUFRLG1CQUFtQixnQkFBZ0IsaUJBQWlCLEdBQUcsc0RBQXNELHVCQUF1QixlQUFlLHFCQUFxQixpQkFBaUIsdUJBQXVCLCtCQUErQixtQ0FBbUMsdUJBQXVCLGlCQUFpQixnQkFBZ0IsWUFBWSxXQUFXLGNBQWMsYUFBYSxlQUFlLGdEQUFnRCw2Q0FBNkMsMENBQTBDLHFDQUFxQyxpQkFBaUIsb0JBQW9CLGtCQUFrQixTQUFTLDJEQUEyRCwyREFBMkQseUJBQXlCLHNCQUFzQix1QkFBdUIsdUJBQXVCLHNCQUFzQix1QkFBdUIsZ0JBQWdCLGFBQWEsY0FBYyxlQUFlLDZDQUE2QywwQ0FBMEMscUNBQXFDLGdEQUFnRCw2Q0FBNkMsMENBQTBDLHFDQUFxQyxhQUFhLGNBQWMsaUJBQWlCLHlCQUF5Qix3QkFBd0IscUJBQXFCLDJCQUEyQix5QkFBeUIsZ0NBQWdDLHdCQUF3QixnQkFBZ0IsdUJBQXVCLG9CQUFvQixlQUFlLHdCQUF3QixpQkFBaUIsZ0RBQWdELDZDQUE2Qyx3Q0FBd0MsbUJBQW1CLHdCQUF3QiwwQ0FBMEMsR0FBRyxlQUFlLGlCQUFpQixpQkFBaUIsZ0NBQWdDLGdDQUFnQyxnQ0FBZ0MsNkNBQTZDLDBDQUEwQyxxQ0FBcUMsR0FBRyxVQUFVLGdCQUFnQixxQkFBcUIsR0FBRyxnQkFBZ0IsOEJBQThCLG1CQUFtQixpQkFBaUIsd0JBQXdCLHFDQUFxQyxrQkFBa0IsZ0JBQWdCLEdBQUcsbUJBQW1CLG1CQUFtQixxQkFBcUIsR0FBRyxTQUFTLHNCQUFzQixzQkFBc0IsZ0JBQWdCLGVBQWUsR0FBRyx1QkFBdUIsZ0JBQWdCLEdBQUcsNkNBQTZDLFNBQVMsc0JBQXNCLEtBQUssZUFBZSxtQkFBbUIsb0JBQW9CLEtBQUssV0FBVyxvQkFBb0IsZ0JBQWdCLGdCQUFnQixpQkFBaUIsbUJBQW1CLEdBQUcsY0FBYyxtQkFBbUIsR0FBRyxpQkFBaUIsaUJBQWlCLHFCQUFxQixHQUFHLFNBQVMsaUJBQWlCLGtCQUFrQixnQ0FBZ0MsZ0NBQWdDLGdDQUFnQyw2Q0FBNkMsMENBQTBDLHFDQUFxQyxJQUFJLEdBQUcsT0FBTyxtRkFBbUYsVUFBVSxZQUFZLHVCQUF1QixhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsS0FBSyxPQUFPLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxjQUFjLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGNBQWMsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxnQ0FBZ0Msb0JBQW9CLDJCQUEyQixzQ0FBc0MsVUFBVSxrQ0FBa0MsR0FBRyxpQkFBaUIsZUFBZSxjQUFjLHdKQUF3SixxQ0FBcUMsNEJBQTRCLEdBQUcsY0FBYyxvQkFBb0IscUJBQXFCLEdBQUcsU0FBUyxnQkFBZ0IsaUJBQWlCLHVCQUF1QixvQ0FBb0MsR0FBRyxlQUFlLDBCQUEwQixHQUFHLE9BQU8sb0JBQW9CLGdCQUFnQix1QkFBdUIsbUNBQW1DLE9BQU8sNkJBQTZCLDZCQUE2QixHQUFHLGlDQUFpQyw4QkFBOEIsdUJBQXVCLEdBQUcsU0FBUywyQkFBMkIsZ0JBQWdCLHFCQUFxQix1Q0FBdUMsMkVBQTJFLEdBQUcsUUFBUSxnQkFBZ0IscUJBQXFCLDhCQUE4QixHQUFHLGdCQUFnQiw2QkFBNkIsR0FBRyxxQkFBcUIsb0JBQW9CLDBFQUEwRSxHQUFHLFdBQVcsdUJBQXVCLGlDQUFpQywyQ0FBMkMsS0FBSyxZQUFZLG1CQUFtQixtQkFBbUIsR0FBRyxTQUFTLG9CQUFvQixlQUFlLEdBQUcsZ0JBQWdCLG1CQUFtQixzQkFBc0IsR0FBRyxxQkFBcUIsb0NBQW9DLG9DQUFvQyxLQUFLLFFBQVEsbUJBQW1CLGdCQUFnQixpQkFBaUIsR0FBRyxzREFBc0QsdUJBQXVCLGVBQWUscUJBQXFCLGlCQUFpQix1QkFBdUIsK0JBQStCLG1DQUFtQyx1QkFBdUIsaUJBQWlCLGdCQUFnQixZQUFZLFdBQVcsY0FBYyxhQUFhLGVBQWUsZ0RBQWdELDZDQUE2QywwQ0FBMEMscUNBQXFDLGlCQUFpQixvQkFBb0Isa0JBQWtCLFNBQVMsbURBQW1ELHlCQUF5QixzQkFBc0IsdUJBQXVCLHVCQUF1QixzQkFBc0IsdUJBQXVCLGdCQUFnQixhQUFhLGNBQWMsZUFBZSw2Q0FBNkMsMENBQTBDLHFDQUFxQyxnREFBZ0QsNkNBQTZDLDBDQUEwQyxxQ0FBcUMsYUFBYSxjQUFjLGlCQUFpQix5QkFBeUIsd0JBQXdCLHFCQUFxQiwyQkFBMkIseUJBQXlCLGdDQUFnQyx3QkFBd0IsZ0JBQWdCLHVCQUF1QixvQkFBb0IsZUFBZSx3QkFBd0IsaUJBQWlCLHdDQUF3QyxtQkFBbUIsd0JBQXdCLDBDQUEwQyxHQUFHLGVBQWUsaUJBQWlCLGlCQUFpQix3QkFBd0IscUNBQXFDLEdBQUcsVUFBVSxnQkFBZ0IscUJBQXFCLEdBQUcsZ0JBQWdCLDhCQUE4QixtQkFBbUIsaUJBQWlCLHdCQUF3QixxQ0FBcUMsa0JBQWtCLGdCQUFnQixHQUFHLG1CQUFtQixtQkFBbUIscUJBQXFCLEdBQUcsU0FBUyxzQkFBc0Isc0JBQXNCLGdCQUFnQixlQUFlLEdBQUcsdUJBQXVCLGdCQUFnQixHQUFHLDZDQUE2QyxTQUFTLHNCQUFzQixLQUFLLGVBQWUsbUJBQW1CLG9CQUFvQixLQUFLLFdBQVcsb0JBQW9CLGdCQUFnQixnQkFBZ0IsaUJBQWlCLG1CQUFtQixHQUFHLGNBQWMsbUJBQW1CLEdBQUcsaUJBQWlCLGlCQUFpQixxQkFBcUIsR0FBRyxTQUFTLGlCQUFpQixrQkFBa0Isd0JBQXdCLHFDQUFxQyxJQUFJLEdBQUcsbUJBQW1CO0FBQzNsWDtBQUNlLHNGQUF1QixFQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYjgzN2ZlZGQzODMxMDVlOTYzODUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tZm9uZG86I0IzQ0NBRDtcXG4gIC0tc2Nyb2xsOiByZ2IoMCwgMCwgMCk7XFxuICAtLWNvbnRhaW5lcjogcmdiYSgwLCAwLCAwLCAwLjcwNyk7LyojMjAzMzNhOyovXFxuICAtLWhvdmVyLWJ1dHRvbnMgOiAgIzQzNjEzYiA7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90bywgT3h5Z2VuLFxcbiAgICBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9uZG8pO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciA7XFxufVxcblxcbi5vdmVyZmxvd3tcXG4gIHNpemU6IDEwMCUgMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5JbWFnZXtcXG4gd2lkdGg6IDIycmVtO1xcbiBoZWlnaHQ6IDE2cmVtO1xcbiAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbiAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbiB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuLkltYWdlOmhvdmVye1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxuICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xcbn1cXG4uYmdye1xcbiAgcGFkZGluZy10b3A6IDIlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoIGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb25kbyk7XFxuICBcXG59XFxuXFxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZm9uZG8pO1xcbn1cXG5ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zY3JvbGwpO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG4uZm9uZG97XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgcGFkZGluZzogMiU7XFxuICBjb2xvcjogYWxpY2VibHVlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGFpbmVyKTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDEwcHggMTNweCAtN3B4ICMwMDAwMDAsIDVweCA0cHggM3B4IDM2cHggcmdiYSgwLDAsMCwwKTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMTNweCAtN3B4ICMwMDAwMDAsIDVweCA0cHggM3B4IDM2cHggcmdiYSgwLDAsMCwwKTtcXG59XFxuLmxpbmt7XFxuICB3aWR0aDogODBweDtcXG4gIG1hcmdpbi1yaWdodDogMyU7XFxuICBjb2xvcjogcmdiKDE3NSwgMTczLCAxNzMpO1xcbn1cXG5cXG4ubGluazpob3ZlcntcXG4gIGNvbG9yOnJnYigyMjYsIDIyNiwgMjI2KTtcXG59XFxuLmNvbnRhaW5lci1jb250YWN0e1xcbiAgbWFyZ2luLXRvcDogLTIlO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMHB4IDEzcHggLTVweCAjMDAwMDAwLCA1cHggNHB4IDNweCAzNnB4IHJnYmEoMCwwLDAsMCk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAwcHggMTNweCAtNXB4ICMwMDAwMDAsIDVweCA0cHggM3B4IDM2cHggcmdiYSgwLDAsMCwwKTtcXG59XFxuXFxuLnNraWxse1xcbiAgLypiYWNrZ3JvdW5kOiAjMDAwOyovXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xOTkpOyAgXFxufVxcbi5mb25kbyBwIHtcXG4gIG1hcmdpbi10b3A6IDUlO1xcbiAgZm9udC1zaXplOjIwcHg7XFxufVxcbi5pbWdDVntcXG4gIG1hcmdpbi1sZWZ0OiA3JTtcXG4gIHdpZHRoOiA3OSU7XFxufVxcbi50ZXh0LWNvbnRhY3R7XFxuICBtYXJnaW4tdG9wOiA5JTtcXG4gIG1hcmdpbi1sZWZ0OiAtMjQlO1xcbn1cXG4uY29udGFpbmVyLWNvbnRhY3R7XFxuICAgICAgICBib3JkZXItYm90dG9tLXN0eWxlOnNvbGlkO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzAwMDtcXG5cXG59XFxuLmNvbnR7XFxuICBtYXJnaW4tdG9wOiA1JTtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG5cXG4vKiAgUHJvZmlsZSBwaWN0dXJlIGFuZCBhbmltYXRpb24gKi9cXG4uY29udGVudCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogOTAlO1xcbiAgbWF4LXdpZHRoOiA0MDBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG92ZXJmbG93OiBoaWRkZW5cXG59XFxuXFxuLmNvbnRlbnQgLmNvbnRlbnQtb3ZlcmxheSB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIG9wYWNpdHk6IDA7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0IDBzO1xcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dCAwcztcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0IDBzXFxufVxcblxcbi5jb250ZW50OmhvdmVyIC5jb250ZW50LW92ZXJsYXkge1xcbiAgb3BhY2l0eTogMVxcbn1cXG5cXG4uY29udGVudC1pbWFnZSB7XFxuICB3aWR0aDogMTAwJVxcbn1cXG5cXG5pbWcge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4XFxufVxcblxcbi5jb250ZW50LWRldGFpbHMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAxZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgb3BhY2l0eTogMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzXFxufVxcblxcbi5jb250ZW50OmhvdmVyIC5jb250ZW50LWRldGFpbHMge1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICBvcGFjaXR5OiAxXFxufVxcblxcbi5jb250ZW50LWRldGFpbHMgaDMge1xcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xNWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXFxufVxcblxcbi5jb250ZW50LWRldGFpbHMgcCB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMC44ZW1cXG59XFxuXFxuLmZhZGVJbi1ib3R0b20ge1xcbiAgdG9wOiA4MCVcXG59XFxuLmNvbnRhY3QtbWV0aG9kOmhvdmVye1xcbiAgaGVpZ2h0OiA3NXB4O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dCAwcztcXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQgMHM7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dCAwcztcXG4gIG1hcmdpbi10b3A6IDMlO1xcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6dmFyKC0taG92ZXItYnV0dG9ucyk7XFxufVxcblxcbi5za2lsbCBpbWd7XFxuICB3aWR0aDogMTFyZW07XFxuICBoZWlnaHQ6IDhyZW07XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uY2FyZHtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgYmFja2dyb3VuZDogIzAwMDtcXG59XFxuXFxuLlZpZGVvLWRlc2N7XFxuICBjb2xvcjogcmdiKDIyOCwgMjI4LCAyMjgpO1xcbiAgbWFyZ2luLXRvcDotMiU7XFxuICB6LWluZGV4OiAxMDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGUgO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcyNik7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5WaWRlby1kZXNjIGgxe1xcbiAgbWFyZ2luLXRvcDogMSU7XFxuICBtYXJnaW4tbGVmdDogOTUlO1xcbn1cXG5cXG4udmlke1xcbiAgbWFyZ2luLXRvcDogLTNyZW07XFxuICBtYXJnaW4tbGVmdDogOXJlbTtcXG4gIGhlaWdodDogOTAlO1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuLmNvbnRlbnQtZGV0YWlscyAgaDN7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLmJncntcXG4gICAgcGFkZGluZy10b3A6IDAlO1xcbiAgfVxcbiAgLnNraWxsIGltZ3tcXG4gICAgd2lkdGg6IDE2cmVtO1xcbiAgICBoZWlnaHQ6IDE0cmVtO1xcbiAgfVxcbiAgXFxuLnZpZHtcXG4gIG1hcmdpbi1sZWZ0OiAwJTtcXG4gIGhlaWdodDogODAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAxMDA7XFxuICBtYXJnaW4tdG9wOiA1JTtcXG59XFxuLlZpZGVvLWRlc2N7XFxuICBtYXJnaW4tdG9wOiAwJTtcXG59XFxuLlZpZGVvLWRlc2MgaDF7XFxuICB6LWluZGV4OiAyMDA7XFxuICBtYXJnaW4tbGVmdDogOTAlO1xcbn1cXG4uSW1hZ2V7XFxuICB3aWR0aDogMjRyZW07XFxuICBoZWlnaHQ6IDE4cmVtO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG4gfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2dsb2JhbHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixpQ0FBaUMsQ0FBQyxXQUFXO0VBQzdDLDJCQUEyQjtBQUM3Qjs7QUFFQTs7RUFFRSxVQUFVO0VBQ1YsU0FBUztFQUNUO3dFQUNzRTtJQUNwRSw4QkFBOEI7RUFDaEMsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYiwyQkFBbUI7SUFBbkIsd0JBQW1CO1NBQW5CLG1CQUFtQjtDQUNuQix3Q0FBZ0M7Q0FBaEMscUNBQWdDO0NBQWhDLGdDQUFnQztBQUNqQztBQUNBO0VBQ0UsNkJBQXFCO0tBQXJCLDBCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDhCQUE4Qjs7QUFFaEM7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtDQUFrQztFQUNsQyw4RUFBc0U7VUFBdEUsc0VBQXNFO0FBQ3hFO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLDZFQUFxRTtVQUFyRSxxRUFBcUU7QUFDdkU7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsMEJBQTBCO0VBQzFCLHNDQUFzQztBQUN4QztBQUNBO0VBQ0UsY0FBYztFQUNkLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGVBQWU7RUFDZixVQUFVO0FBQ1o7QUFDQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7QUFDQTtRQUNRLHlCQUF5QjtRQUN6Qix5QkFBeUI7O0FBRWpDO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7QUFDZDs7O0FBR0EsbUNBQW1DO0FBQ25DO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsT0FBTztFQUNQLE1BQU07RUFDTixTQUFTO0VBQ1QsUUFBUTtFQUNSLFVBQVU7RUFDViwyQ0FBMkM7RUFDM0Msd0NBQXdDO0VBQ3hDO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLHNEQUE4QztVQUE5Qyw4Q0FBOEM7RUFDOUM7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysd0NBQXdDO0VBQ3hDLHFDQUFxQztFQUNyQyxnQ0FBZ0M7RUFDaEMsMkNBQTJDO0VBQzNDLHdDQUF3QztFQUN4QztBQUNGOztBQUVBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVDtBQUNGOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1g7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7QUFDQTtFQUNFLFlBQVk7RUFDWiwyQ0FBbUM7RUFBbkMsd0NBQW1DO0VBQW5DLG1DQUFtQztFQUNuQyxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osMkJBQW1CO0tBQW5CLHdCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0NBQWdDO0VBQWhDLHFDQUFnQztFQUFoQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFVBQVU7QUFDWjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLFlBQVk7SUFDWixhQUFhO0VBQ2Y7O0FBRUY7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYiwyQkFBbUI7S0FBbkIsd0JBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3Q0FBZ0M7RUFBaEMscUNBQWdDO0VBQWhDLGdDQUFnQztDQUNqQztBQUNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tZm9uZG86I0IzQ0NBRDtcXG4gIC0tc2Nyb2xsOiByZ2IoMCwgMCwgMCk7XFxuICAtLWNvbnRhaW5lcjogcmdiYSgwLCAwLCAwLCAwLjcwNyk7LyojMjAzMzNhOyovXFxuICAtLWhvdmVyLWJ1dHRvbnMgOiAgIzQzNjEzYiA7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90bywgT3h5Z2VuLFxcbiAgICBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9uZG8pO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciA7XFxufVxcblxcbi5vdmVyZmxvd3tcXG4gIHNpemU6IDEwMCUgMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5JbWFnZXtcXG4gd2lkdGg6IDIycmVtO1xcbiBoZWlnaHQ6IDE2cmVtO1xcbiB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuLkltYWdlOmhvdmVye1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xcbn1cXG4uYmdye1xcbiAgcGFkZGluZy10b3A6IDIlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoIGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb25kbyk7XFxuICBcXG59XFxuXFxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZm9uZG8pO1xcbn1cXG5ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zY3JvbGwpO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG4uZm9uZG97XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgcGFkZGluZzogMiU7XFxuICBjb2xvcjogYWxpY2VibHVlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGFpbmVyKTtcXG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDEzcHggLTdweCAjMDAwMDAwLCA1cHggNHB4IDNweCAzNnB4IHJnYmEoMCwwLDAsMCk7XFxufVxcbi5saW5re1xcbiAgd2lkdGg6IDgwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDMlO1xcbiAgY29sb3I6IHJnYigxNzUsIDE3MywgMTczKTtcXG59XFxuXFxuLmxpbms6aG92ZXJ7XFxuICBjb2xvcjpyZ2IoMjI2LCAyMjYsIDIyNik7XFxufVxcbi5jb250YWluZXItY29udGFjdHtcXG4gIG1hcmdpbi10b3A6IC0yJTtcXG4gIGJveC1zaGFkb3c6IDJweCAwcHggMTNweCAtNXB4ICMwMDAwMDAsIDVweCA0cHggM3B4IDM2cHggcmdiYSgwLDAsMCwwKTtcXG59XFxuXFxuLnNraWxse1xcbiAgLypiYWNrZ3JvdW5kOiAjMDAwOyovXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xOTkpOyAgXFxufVxcbi5mb25kbyBwIHtcXG4gIG1hcmdpbi10b3A6IDUlO1xcbiAgZm9udC1zaXplOjIwcHg7XFxufVxcbi5pbWdDVntcXG4gIG1hcmdpbi1sZWZ0OiA3JTtcXG4gIHdpZHRoOiA3OSU7XFxufVxcbi50ZXh0LWNvbnRhY3R7XFxuICBtYXJnaW4tdG9wOiA5JTtcXG4gIG1hcmdpbi1sZWZ0OiAtMjQlO1xcbn1cXG4uY29udGFpbmVyLWNvbnRhY3R7XFxuICAgICAgICBib3JkZXItYm90dG9tLXN0eWxlOnNvbGlkO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzAwMDtcXG5cXG59XFxuLmNvbnR7XFxuICBtYXJnaW4tdG9wOiA1JTtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG5cXG4vKiAgUHJvZmlsZSBwaWN0dXJlIGFuZCBhbmltYXRpb24gKi9cXG4uY29udGVudCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogOTAlO1xcbiAgbWF4LXdpZHRoOiA0MDBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG92ZXJmbG93OiBoaWRkZW5cXG59XFxuXFxuLmNvbnRlbnQgLmNvbnRlbnQtb3ZlcmxheSB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIG9wYWNpdHk6IDA7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0IDBzO1xcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dCAwcztcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0IDBzXFxufVxcblxcbi5jb250ZW50OmhvdmVyIC5jb250ZW50LW92ZXJsYXkge1xcbiAgb3BhY2l0eTogMVxcbn1cXG5cXG4uY29udGVudC1pbWFnZSB7XFxuICB3aWR0aDogMTAwJVxcbn1cXG5cXG5pbWcge1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweFxcbn1cXG5cXG4uY29udGVudC1kZXRhaWxzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogMWVtO1xcbiAgcGFkZGluZy1yaWdodDogMWVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIG9wYWNpdHk6IDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwc1xcbn1cXG5cXG4uY29udGVudDpob3ZlciAuY29udGVudC1kZXRhaWxzIHtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgb3BhY2l0eTogMVxcbn1cXG5cXG4uY29udGVudC1kZXRhaWxzIGgzIHtcXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTVlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZVxcbn1cXG5cXG4uY29udGVudC1kZXRhaWxzIHAge1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDAuOGVtXFxufVxcblxcbi5mYWRlSW4tYm90dG9tIHtcXG4gIHRvcDogODAlXFxufVxcbi5jb250YWN0LW1ldGhvZDpob3ZlcntcXG4gIGhlaWdodDogNzVweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0IDBzO1xcbiAgbWFyZ2luLXRvcDogMyU7XFxuICBib3JkZXItcmFkaXVzOiAzMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1ob3Zlci1idXR0b25zKTtcXG59XFxuXFxuLnNraWxsIGltZ3tcXG4gIHdpZHRoOiAxMXJlbTtcXG4gIGhlaWdodDogOHJlbTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmNhcmR7XFxuICBjb2xvcjogIzAwMDtcXG4gIGJhY2tncm91bmQ6ICMwMDA7XFxufVxcblxcbi5WaWRlby1kZXNje1xcbiAgY29sb3I6IHJnYigyMjgsIDIyOCwgMjI4KTtcXG4gIG1hcmdpbi10b3A6LTIlO1xcbiAgei1pbmRleDogMTAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlIDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43MjYpO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uVmlkZW8tZGVzYyBoMXtcXG4gIG1hcmdpbi10b3A6IDElO1xcbiAgbWFyZ2luLWxlZnQ6IDk1JTtcXG59XFxuXFxuLnZpZHtcXG4gIG1hcmdpbi10b3A6IC0zcmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDlyZW07XFxuICBoZWlnaHQ6IDkwJTtcXG4gIHdpZHRoOiA4MCU7XFxufVxcbi5jb250ZW50LWRldGFpbHMgIGgze1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5iZ3J7XFxuICAgIHBhZGRpbmctdG9wOiAwJTtcXG4gIH1cXG4gIC5za2lsbCBpbWd7XFxuICAgIHdpZHRoOiAxNnJlbTtcXG4gICAgaGVpZ2h0OiAxNHJlbTtcXG4gIH1cXG4gIFxcbi52aWR7XFxuICBtYXJnaW4tbGVmdDogMCU7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMTAwO1xcbiAgbWFyZ2luLXRvcDogNSU7XFxufVxcbi5WaWRlby1kZXNje1xcbiAgbWFyZ2luLXRvcDogMCU7XFxufVxcbi5WaWRlby1kZXNjIGgxe1xcbiAgei1pbmRleDogMjAwO1xcbiAgbWFyZ2luLWxlZnQ6IDkwJTtcXG59XFxuLkltYWdle1xcbiAgd2lkdGg6IDI0cmVtO1xcbiAgaGVpZ2h0OiAxOHJlbTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG4gfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
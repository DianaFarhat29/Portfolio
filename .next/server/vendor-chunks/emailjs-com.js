"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/emailjs-com";
exports.ids = ["vendor-chunks/emailjs-com"];
exports.modules = {

/***/ "(ssr)/./node_modules/emailjs-com/es/api/sendPost.js":
/*!*****************************************************!*\
  !*** ./node_modules/emailjs-com/es/api/sendPost.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sendPost: () => (/* binding */ sendPost)\n/* harmony export */ });\n/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/EmailJSResponseStatus */ \"(ssr)/./node_modules/emailjs-com/es/models/EmailJSResponseStatus.js\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/store */ \"(ssr)/./node_modules/emailjs-com/es/store/store.js\");\n\n\nconst sendPost = (url, data, headers = {}) => {\n    return new Promise((resolve, reject) => {\n        const xhr = new XMLHttpRequest();\n        xhr.addEventListener('load', ({ target }) => {\n            const responseStatus = new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(target);\n            if (responseStatus.status === 200 || responseStatus.text === 'OK') {\n                resolve(responseStatus);\n            }\n            else {\n                reject(responseStatus);\n            }\n        });\n        xhr.addEventListener('error', ({ target }) => {\n            reject(new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(target));\n        });\n        xhr.open('POST', _store_store__WEBPACK_IMPORTED_MODULE_1__.store._origin + url, true);\n        Object.keys(headers).forEach((key) => {\n            xhr.setRequestHeader(key, headers[key]);\n        });\n        xhr.send(data);\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZW1haWxqcy1jb20vZXMvYXBpL3NlbmRQb3N0LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF3RTtBQUNqQztBQUNoQyx5Q0FBeUM7QUFDaEQ7QUFDQTtBQUNBLHdDQUF3QyxRQUFRO0FBQ2hELHVDQUF1QyxnRkFBcUI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHlDQUF5QyxRQUFRO0FBQ2pELHVCQUF1QixnRkFBcUI7QUFDNUMsU0FBUztBQUNULHlCQUF5QiwrQ0FBSztBQUM5QjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLWRmLy4vbm9kZV9tb2R1bGVzL2VtYWlsanMtY29tL2VzL2FwaS9zZW5kUG9zdC5qcz9hNTZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVtYWlsSlNSZXNwb25zZVN0YXR1cyB9IGZyb20gJy4uL21vZGVscy9FbWFpbEpTUmVzcG9uc2VTdGF0dXMnO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuLi9zdG9yZS9zdG9yZSc7XG5leHBvcnQgY29uc3Qgc2VuZFBvc3QgPSAodXJsLCBkYXRhLCBoZWFkZXJzID0ge30pID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoeyB0YXJnZXQgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VTdGF0dXMgPSBuZXcgRW1haWxKU1Jlc3BvbnNlU3RhdHVzKHRhcmdldCk7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2VTdGF0dXMuc3RhdHVzID09PSAyMDAgfHwgcmVzcG9uc2VTdGF0dXMudGV4dCA9PT0gJ09LJykge1xuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2VTdGF0dXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KHJlc3BvbnNlU3RhdHVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICh7IHRhcmdldCB9KSA9PiB7XG4gICAgICAgICAgICByZWplY3QobmV3IEVtYWlsSlNSZXNwb25zZVN0YXR1cyh0YXJnZXQpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHhoci5vcGVuKCdQT1NUJywgc3RvcmUuX29yaWdpbiArIHVybCwgdHJ1ZSk7XG4gICAgICAgIE9iamVjdC5rZXlzKGhlYWRlcnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoa2V5LCBoZWFkZXJzW2tleV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgeGhyLnNlbmQoZGF0YSk7XG4gICAgfSk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/emailjs-com/es/api/sendPost.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/emailjs-com/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/emailjs-com/es/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   init: () => (/* reexport safe */ _methods_init_init__WEBPACK_IMPORTED_MODULE_0__.init),\n/* harmony export */   send: () => (/* reexport safe */ _methods_send_send__WEBPACK_IMPORTED_MODULE_1__.send),\n/* harmony export */   sendForm: () => (/* reexport safe */ _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_2__.sendForm)\n/* harmony export */ });\n/* harmony import */ var _methods_init_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./methods/init/init */ \"(ssr)/./node_modules/emailjs-com/es/methods/init/init.js\");\n/* harmony import */ var _methods_send_send__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods/send/send */ \"(ssr)/./node_modules/emailjs-com/es/methods/send/send.js\");\n/* harmony import */ var _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./methods/sendForm/sendForm */ \"(ssr)/./node_modules/emailjs-com/es/methods/sendForm/sendForm.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    init: _methods_init_init__WEBPACK_IMPORTED_MODULE_0__.init,\n    send: _methods_send_send__WEBPACK_IMPORTED_MODULE_1__.send,\n    sendForm: _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_2__.sendForm,\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZW1haWxqcy1jb20vZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEyQztBQUNBO0FBQ1k7QUFDdkI7QUFDaEMsaUVBQWU7QUFDZixRQUFRO0FBQ1IsUUFBUTtBQUNSLFlBQVk7QUFDWixDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8tZGYvLi9ub2RlX21vZHVsZXMvZW1haWxqcy1jb20vZXMvaW5kZXguanM/ODFhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0IH0gZnJvbSAnLi9tZXRob2RzL2luaXQvaW5pdCc7XG5pbXBvcnQgeyBzZW5kIH0gZnJvbSAnLi9tZXRob2RzL3NlbmQvc2VuZCc7XG5pbXBvcnQgeyBzZW5kRm9ybSB9IGZyb20gJy4vbWV0aG9kcy9zZW5kRm9ybS9zZW5kRm9ybSc7XG5leHBvcnQgeyBpbml0LCBzZW5kLCBzZW5kRm9ybSB9O1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQsXG4gICAgc2VuZCxcbiAgICBzZW5kRm9ybSxcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/emailjs-com/es/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/emailjs-com/es/methods/init/init.js":
/*!**********************************************************!*\
  !*** ./node_modules/emailjs-com/es/methods/init/init.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   init: () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ \"(ssr)/./node_modules/emailjs-com/es/store/store.js\");\n\n/**\n * Initiation\n * @param {string} userID - set the EmailJS user ID\n * @param {string} origin - set the EmailJS origin\n */\nconst init = (userID, origin = 'https://api.emailjs.com') => {\n    _store_store__WEBPACK_IMPORTED_MODULE_0__.store._userID = userID;\n    _store_store__WEBPACK_IMPORTED_MODULE_0__.store._origin = origin;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZW1haWxqcy1jb20vZXMvbWV0aG9kcy9pbml0L2luaXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEM7QUFDMUM7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkI7QUFDTztBQUNQLElBQUksK0NBQUs7QUFDVCxJQUFJLCtDQUFLO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8tZGYvLi9ub2RlX21vZHVsZXMvZW1haWxqcy1jb20vZXMvbWV0aG9kcy9pbml0L2luaXQuanM/NWQ1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4uLy4uL3N0b3JlL3N0b3JlJztcbi8qKlxuICogSW5pdGlhdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IHVzZXJJRCAtIHNldCB0aGUgRW1haWxKUyB1c2VyIElEXG4gKiBAcGFyYW0ge3N0cmluZ30gb3JpZ2luIC0gc2V0IHRoZSBFbWFpbEpTIG9yaWdpblxuICovXG5leHBvcnQgY29uc3QgaW5pdCA9ICh1c2VySUQsIG9yaWdpbiA9ICdodHRwczovL2FwaS5lbWFpbGpzLmNvbScpID0+IHtcbiAgICBzdG9yZS5fdXNlcklEID0gdXNlcklEO1xuICAgIHN0b3JlLl9vcmlnaW4gPSBvcmlnaW47XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/emailjs-com/es/methods/init/init.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/emailjs-com/es/methods/sendForm/sendForm.js":
/*!******************************************************************!*\
  !*** ./node_modules/emailjs-com/es/methods/sendForm/sendForm.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sendForm: () => (/* binding */ sendForm)\n/* harmony export */ });\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ \"(ssr)/./node_modules/emailjs-com/es/store/store.js\");\n/* harmony import */ var _utils_validateParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/validateParams */ \"(ssr)/./node_modules/emailjs-com/es/utils/validateParams.js\");\n/* harmony import */ var _api_sendPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/sendPost */ \"(ssr)/./node_modules/emailjs-com/es/api/sendPost.js\");\n\n\n\nconst findHTMLForm = (form) => {\n    let currentForm;\n    if (typeof form === 'string') {\n        currentForm = document.querySelector(form);\n    }\n    else {\n        currentForm = form;\n    }\n    if (!currentForm || currentForm.nodeName !== 'FORM') {\n        throw 'The 3rd parameter is expected to be the HTML form element or the style selector of form';\n    }\n    return currentForm;\n};\n/**\n * Send a form the specific EmailJS service\n * @param {string} serviceID - the EmailJS service ID\n * @param {string} templateID - the EmailJS template ID\n * @param {string | HTMLFormElement} form - the form element or selector\n * @param {string} userID - the EmailJS user ID\n * @returns {Promise<EmailJSResponseStatus>}\n */\nconst sendForm = (serviceID, templateID, form, userID) => {\n    const uID = userID || _store_store__WEBPACK_IMPORTED_MODULE_0__.store._userID;\n    const currentForm = findHTMLForm(form);\n    (0,_utils_validateParams__WEBPACK_IMPORTED_MODULE_1__.validateParams)(uID, serviceID, templateID);\n    const formData = new FormData(currentForm);\n    formData.append('lib_version', '3.2.0');\n    formData.append('service_id', serviceID);\n    formData.append('template_id', templateID);\n    formData.append('user_id', uID);\n    return (0,_api_sendPost__WEBPACK_IMPORTED_MODULE_2__.sendPost)('/api/v1.0/email/send-form', formData);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZW1haWxqcy1jb20vZXMvbWV0aG9kcy9zZW5kRm9ybS9zZW5kRm9ybS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBDO0FBQ2tCO0FBQ2Q7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLDBCQUEwQjtBQUNyQyxXQUFXLFFBQVE7QUFDbkIsYUFBYTtBQUNiO0FBQ087QUFDUCwwQkFBMEIsK0NBQUs7QUFDL0I7QUFDQSxJQUFJLHFFQUFjO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHVEQUFRO0FBQ25CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLWRmLy4vbm9kZV9tb2R1bGVzL2VtYWlsanMtY29tL2VzL21ldGhvZHMvc2VuZEZvcm0vc2VuZEZvcm0uanM/ZGQ3YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4uLy4uL3N0b3JlL3N0b3JlJztcbmltcG9ydCB7IHZhbGlkYXRlUGFyYW1zIH0gZnJvbSAnLi4vLi4vdXRpbHMvdmFsaWRhdGVQYXJhbXMnO1xuaW1wb3J0IHsgc2VuZFBvc3QgfSBmcm9tICcuLi8uLi9hcGkvc2VuZFBvc3QnO1xuY29uc3QgZmluZEhUTUxGb3JtID0gKGZvcm0pID0+IHtcbiAgICBsZXQgY3VycmVudEZvcm07XG4gICAgaWYgKHR5cGVvZiBmb3JtID09PSAnc3RyaW5nJykge1xuICAgICAgICBjdXJyZW50Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZm9ybSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjdXJyZW50Rm9ybSA9IGZvcm07XG4gICAgfVxuICAgIGlmICghY3VycmVudEZvcm0gfHwgY3VycmVudEZvcm0ubm9kZU5hbWUgIT09ICdGT1JNJykge1xuICAgICAgICB0aHJvdyAnVGhlIDNyZCBwYXJhbWV0ZXIgaXMgZXhwZWN0ZWQgdG8gYmUgdGhlIEhUTUwgZm9ybSBlbGVtZW50IG9yIHRoZSBzdHlsZSBzZWxlY3RvciBvZiBmb3JtJztcbiAgICB9XG4gICAgcmV0dXJuIGN1cnJlbnRGb3JtO1xufTtcbi8qKlxuICogU2VuZCBhIGZvcm0gdGhlIHNwZWNpZmljIEVtYWlsSlMgc2VydmljZVxuICogQHBhcmFtIHtzdHJpbmd9IHNlcnZpY2VJRCAtIHRoZSBFbWFpbEpTIHNlcnZpY2UgSURcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZUlEIC0gdGhlIEVtYWlsSlMgdGVtcGxhdGUgSURcbiAqIEBwYXJhbSB7c3RyaW5nIHwgSFRNTEZvcm1FbGVtZW50fSBmb3JtIC0gdGhlIGZvcm0gZWxlbWVudCBvciBzZWxlY3RvclxuICogQHBhcmFtIHtzdHJpbmd9IHVzZXJJRCAtIHRoZSBFbWFpbEpTIHVzZXIgSURcbiAqIEByZXR1cm5zIHtQcm9taXNlPEVtYWlsSlNSZXNwb25zZVN0YXR1cz59XG4gKi9cbmV4cG9ydCBjb25zdCBzZW5kRm9ybSA9IChzZXJ2aWNlSUQsIHRlbXBsYXRlSUQsIGZvcm0sIHVzZXJJRCkgPT4ge1xuICAgIGNvbnN0IHVJRCA9IHVzZXJJRCB8fCBzdG9yZS5fdXNlcklEO1xuICAgIGNvbnN0IGN1cnJlbnRGb3JtID0gZmluZEhUTUxGb3JtKGZvcm0pO1xuICAgIHZhbGlkYXRlUGFyYW1zKHVJRCwgc2VydmljZUlELCB0ZW1wbGF0ZUlEKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShjdXJyZW50Rm9ybSk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdsaWJfdmVyc2lvbicsICczLjIuMCcpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgnc2VydmljZV9pZCcsIHNlcnZpY2VJRCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCd0ZW1wbGF0ZV9pZCcsIHRlbXBsYXRlSUQpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgndXNlcl9pZCcsIHVJRCk7XG4gICAgcmV0dXJuIHNlbmRQb3N0KCcvYXBpL3YxLjAvZW1haWwvc2VuZC1mb3JtJywgZm9ybURhdGEpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/emailjs-com/es/methods/sendForm/sendForm.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/emailjs-com/es/methods/send/send.js":
/*!**********************************************************!*\
  !*** ./node_modules/emailjs-com/es/methods/send/send.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   send: () => (/* binding */ send)\n/* harmony export */ });\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ \"(ssr)/./node_modules/emailjs-com/es/store/store.js\");\n/* harmony import */ var _utils_validateParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/validateParams */ \"(ssr)/./node_modules/emailjs-com/es/utils/validateParams.js\");\n/* harmony import */ var _api_sendPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/sendPost */ \"(ssr)/./node_modules/emailjs-com/es/api/sendPost.js\");\n\n\n\n/**\n * Send a template to the specific EmailJS service\n * @param {string} serviceID - the EmailJS service ID\n * @param {string} templateID - the EmailJS template ID\n * @param {object} templatePrams - the template params, what will be set to the EmailJS template\n * @param {string} userID - the EmailJS user ID\n * @returns {Promise<EmailJSResponseStatus>}\n */\nconst send = (serviceID, templateID, templatePrams, userID) => {\n    const uID = userID || _store_store__WEBPACK_IMPORTED_MODULE_0__.store._userID;\n    (0,_utils_validateParams__WEBPACK_IMPORTED_MODULE_1__.validateParams)(uID, serviceID, templateID);\n    const params = {\n        lib_version: '3.2.0',\n        user_id: uID,\n        service_id: serviceID,\n        template_id: templateID,\n        template_params: templatePrams,\n    };\n    return (0,_api_sendPost__WEBPACK_IMPORTED_MODULE_2__.sendPost)('/api/v1.0/email/send', JSON.stringify(params), {\n        'Content-type': 'application/json',\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZW1haWxqcy1jb20vZXMvbWV0aG9kcy9zZW5kL3NlbmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQztBQUNrQjtBQUNkO0FBQzlDO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsYUFBYTtBQUNiO0FBQ087QUFDUCwwQkFBMEIsK0NBQUs7QUFDL0IsSUFBSSxxRUFBYztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsdURBQVE7QUFDbkI7QUFDQSxLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8tZGYvLi9ub2RlX21vZHVsZXMvZW1haWxqcy1jb20vZXMvbWV0aG9kcy9zZW5kL3NlbmQuanM/YjcwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4uLy4uL3N0b3JlL3N0b3JlJztcbmltcG9ydCB7IHZhbGlkYXRlUGFyYW1zIH0gZnJvbSAnLi4vLi4vdXRpbHMvdmFsaWRhdGVQYXJhbXMnO1xuaW1wb3J0IHsgc2VuZFBvc3QgfSBmcm9tICcuLi8uLi9hcGkvc2VuZFBvc3QnO1xuLyoqXG4gKiBTZW5kIGEgdGVtcGxhdGUgdG8gdGhlIHNwZWNpZmljIEVtYWlsSlMgc2VydmljZVxuICogQHBhcmFtIHtzdHJpbmd9IHNlcnZpY2VJRCAtIHRoZSBFbWFpbEpTIHNlcnZpY2UgSURcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZUlEIC0gdGhlIEVtYWlsSlMgdGVtcGxhdGUgSURcbiAqIEBwYXJhbSB7b2JqZWN0fSB0ZW1wbGF0ZVByYW1zIC0gdGhlIHRlbXBsYXRlIHBhcmFtcywgd2hhdCB3aWxsIGJlIHNldCB0byB0aGUgRW1haWxKUyB0ZW1wbGF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHVzZXJJRCAtIHRoZSBFbWFpbEpTIHVzZXIgSURcbiAqIEByZXR1cm5zIHtQcm9taXNlPEVtYWlsSlNSZXNwb25zZVN0YXR1cz59XG4gKi9cbmV4cG9ydCBjb25zdCBzZW5kID0gKHNlcnZpY2VJRCwgdGVtcGxhdGVJRCwgdGVtcGxhdGVQcmFtcywgdXNlcklEKSA9PiB7XG4gICAgY29uc3QgdUlEID0gdXNlcklEIHx8IHN0b3JlLl91c2VySUQ7XG4gICAgdmFsaWRhdGVQYXJhbXModUlELCBzZXJ2aWNlSUQsIHRlbXBsYXRlSUQpO1xuICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgbGliX3ZlcnNpb246ICczLjIuMCcsXG4gICAgICAgIHVzZXJfaWQ6IHVJRCxcbiAgICAgICAgc2VydmljZV9pZDogc2VydmljZUlELFxuICAgICAgICB0ZW1wbGF0ZV9pZDogdGVtcGxhdGVJRCxcbiAgICAgICAgdGVtcGxhdGVfcGFyYW1zOiB0ZW1wbGF0ZVByYW1zLFxuICAgIH07XG4gICAgcmV0dXJuIHNlbmRQb3N0KCcvYXBpL3YxLjAvZW1haWwvc2VuZCcsIEpTT04uc3RyaW5naWZ5KHBhcmFtcyksIHtcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9KTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/emailjs-com/es/methods/send/send.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/emailjs-com/es/models/EmailJSResponseStatus.js":
/*!*********************************************************************!*\
  !*** ./node_modules/emailjs-com/es/models/EmailJSResponseStatus.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EmailJSResponseStatus: () => (/* binding */ EmailJSResponseStatus)\n/* harmony export */ });\nclass EmailJSResponseStatus {\n    constructor(httpResponse) {\n        this.status = httpResponse.status;\n        this.text = httpResponse.responseText;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZW1haWxqcy1jb20vZXMvbW9kZWxzL0VtYWlsSlNSZXNwb25zZVN0YXR1cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLWRmLy4vbm9kZV9tb2R1bGVzL2VtYWlsanMtY29tL2VzL21vZGVscy9FbWFpbEpTUmVzcG9uc2VTdGF0dXMuanM/NTJhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRW1haWxKU1Jlc3BvbnNlU3RhdHVzIHtcbiAgICBjb25zdHJ1Y3RvcihodHRwUmVzcG9uc2UpIHtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBodHRwUmVzcG9uc2Uuc3RhdHVzO1xuICAgICAgICB0aGlzLnRleHQgPSBodHRwUmVzcG9uc2UucmVzcG9uc2VUZXh0O1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/emailjs-com/es/models/EmailJSResponseStatus.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/emailjs-com/es/store/store.js":
/*!****************************************************!*\
  !*** ./node_modules/emailjs-com/es/store/store.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   store: () => (/* binding */ store)\n/* harmony export */ });\nconst store = {\n    _origin: 'https://api.emailjs.com',\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZW1haWxqcy1jb20vZXMvc3RvcmUvc3RvcmUuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby1kZi8uL25vZGVfbW9kdWxlcy9lbWFpbGpzLWNvbS9lcy9zdG9yZS9zdG9yZS5qcz80YTMzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzdG9yZSA9IHtcbiAgICBfb3JpZ2luOiAnaHR0cHM6Ly9hcGkuZW1haWxqcy5jb20nLFxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/emailjs-com/es/store/store.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/emailjs-com/es/utils/validateParams.js":
/*!*************************************************************!*\
  !*** ./node_modules/emailjs-com/es/utils/validateParams.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   validateParams: () => (/* binding */ validateParams)\n/* harmony export */ });\nconst validateParams = (userID, serviceID, templateID) => {\n    if (!userID) {\n        throw 'The user ID is required. Visit https://dashboard.emailjs.com/admin/integration';\n    }\n    if (!serviceID) {\n        throw 'The service ID is required. Visit https://dashboard.emailjs.com/admin';\n    }\n    if (!templateID) {\n        throw 'The template ID is required. Visit https://dashboard.emailjs.com/admin/templates';\n    }\n    return true;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZW1haWxqcy1jb20vZXMvdXRpbHMvdmFsaWRhdGVQYXJhbXMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby1kZi8uL25vZGVfbW9kdWxlcy9lbWFpbGpzLWNvbS9lcy91dGlscy92YWxpZGF0ZVBhcmFtcy5qcz84YmQxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB2YWxpZGF0ZVBhcmFtcyA9ICh1c2VySUQsIHNlcnZpY2VJRCwgdGVtcGxhdGVJRCkgPT4ge1xuICAgIGlmICghdXNlcklEKSB7XG4gICAgICAgIHRocm93ICdUaGUgdXNlciBJRCBpcyByZXF1aXJlZC4gVmlzaXQgaHR0cHM6Ly9kYXNoYm9hcmQuZW1haWxqcy5jb20vYWRtaW4vaW50ZWdyYXRpb24nO1xuICAgIH1cbiAgICBpZiAoIXNlcnZpY2VJRCkge1xuICAgICAgICB0aHJvdyAnVGhlIHNlcnZpY2UgSUQgaXMgcmVxdWlyZWQuIFZpc2l0IGh0dHBzOi8vZGFzaGJvYXJkLmVtYWlsanMuY29tL2FkbWluJztcbiAgICB9XG4gICAgaWYgKCF0ZW1wbGF0ZUlEKSB7XG4gICAgICAgIHRocm93ICdUaGUgdGVtcGxhdGUgSUQgaXMgcmVxdWlyZWQuIFZpc2l0IGh0dHBzOi8vZGFzaGJvYXJkLmVtYWlsanMuY29tL2FkbWluL3RlbXBsYXRlcyc7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/emailjs-com/es/utils/validateParams.js\n");

/***/ })

};
;
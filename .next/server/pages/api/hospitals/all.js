"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/hospitals/all";
exports.ids = ["pages/api/hospitals/all"];
exports.modules = {

/***/ "mysql2":
/*!*************************!*\
  !*** external "mysql2" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("mysql2");

/***/ }),

/***/ "(api)/./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst mysql = __webpack_require__(/*! mysql2 */ \"mysql2\");\nconst connection = mysql.createConnection({\n    host: \"hexahealth-db.cqnt4cbjitmj.ap-south-1.rds.amazonaws.com\",\n    port: \"3306\",\n    user: \"preproduser\",\n    database: \"new_dev_db\",\n    password: \"hexa@mysql\"\n});\nmodule.exports = connection;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLFFBQVFDLG1CQUFPQSxDQUFDLHNCQUFRO0FBRTlCLE1BQU1DLGFBQWFGLE1BQU1HLGdCQUFnQixDQUFDO0lBQ3pDQyxNQUFNQyx5REFBeUM7SUFDL0NHLE1BQU1ILE1BQXlDO0lBQy9DSyxNQUFNTCxhQUF5QztJQUMvQ08sVUFBVVAsWUFBdUM7SUFDakRTLFVBQVVULFlBQTZDO0FBQ3hEO0FBRUFXLE9BQU9DLE9BQU8sR0FBR2YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hc3NpZ25tZW50Ly4vY29uZmlnL2luZGV4LmpzP2ExYmMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbXlzcWwgPSByZXF1aXJlKFwibXlzcWwyXCIpO1xuXG5jb25zdCBjb25uZWN0aW9uID0gbXlzcWwuY3JlYXRlQ29ubmVjdGlvbih7XG5cdGhvc3Q6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9EQVRBQkFTRV9IT1NULFxuXHRwb3J0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfREFUQUJBU0VfUE9SVCxcblx0dXNlcjogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0RBVEFCQVNFX1VTRVIsXG5cdGRhdGFiYXNlOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfREFUQUJBU0VfREIsXG5cdHBhc3N3b3JkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfREFUQUJBU0VfUEFTU1dPUkQsXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb25uZWN0aW9uO1xuIl0sIm5hbWVzIjpbIm15c3FsIiwicmVxdWlyZSIsImNvbm5lY3Rpb24iLCJjcmVhdGVDb25uZWN0aW9uIiwiaG9zdCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfREFUQUJBU0VfSE9TVCIsInBvcnQiLCJORVhUX1BVQkxJQ19BUElfREFUQUJBU0VfUE9SVCIsInVzZXIiLCJORVhUX1BVQkxJQ19BUElfREFUQUJBU0VfVVNFUiIsImRhdGFiYXNlIiwiTkVYVF9QVUJMSUNfQVBJX0RBVEFCQVNFX0RCIiwicGFzc3dvcmQiLCJORVhUX1BVQkxJQ19BUElfREFUQUJBU0VfUEFTU1dPUkQiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./config/index.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/hospitals/all.js":
/*!****************************************!*\
  !*** ./src/pages/api/hospitals/all.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst connection = __webpack_require__(/*! ../../../../config */ \"(api)/./config/index.js\");\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        const { slug  } = req.body;\n        connection.query(`SELECT * FROM v1_hospitalmaster hm left join slugmaster_hospital sh on hm.RouteId = sh.RouteId;`, function(err, results, fields) {\n            if (!err) return res.send({\n                results\n            });\n        });\n    } else {\n        res.status(404).send(\"Endpoint not found\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2hvc3BpdGFscy9hbGwuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLGFBQWFDLG1CQUFPQSxDQUFDLG1EQUFvQjtBQUNoQyxlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUMvQyxJQUFJRCxJQUFJRSxNQUFNLEtBQUssT0FBTztRQUN6QixNQUFNLEVBQUVDLEtBQUksRUFBRSxHQUFHSCxJQUFJSSxJQUFJO1FBRXpCUCxXQUFXUSxLQUFLLENBQ2YsQ0FBQywrRkFBK0YsQ0FBQyxFQUNqRyxTQUFVQyxHQUFHLEVBQUVDLE9BQU8sRUFBRUMsTUFBTSxFQUFFO1lBQy9CLElBQUksQ0FBQ0YsS0FBSyxPQUFPTCxJQUFJUSxJQUFJLENBQUM7Z0JBQUVGO1lBQVE7UUFDckM7SUFFRixPQUFPO1FBQ05OLElBQUlTLE1BQU0sQ0FBQyxLQUFLRCxJQUFJLENBQUM7SUFDdEIsQ0FBQztBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hc3NpZ25tZW50Ly4vc3JjL3BhZ2VzL2FwaS9ob3NwaXRhbHMvYWxsLmpzP2Y2YjgiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29ubmVjdGlvbiA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9jb25maWdcIik7XG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG5cdGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XG5cdFx0Y29uc3QgeyBzbHVnIH0gPSByZXEuYm9keTtcblxuXHRcdGNvbm5lY3Rpb24ucXVlcnkoXG5cdFx0XHRgU0VMRUNUICogRlJPTSB2MV9ob3NwaXRhbG1hc3RlciBobSBsZWZ0IGpvaW4gc2x1Z21hc3Rlcl9ob3NwaXRhbCBzaCBvbiBobS5Sb3V0ZUlkID0gc2guUm91dGVJZDtgLFxuXHRcdFx0ZnVuY3Rpb24gKGVyciwgcmVzdWx0cywgZmllbGRzKSB7XG5cdFx0XHRcdGlmICghZXJyKSByZXR1cm4gcmVzLnNlbmQoeyByZXN1bHRzIH0pO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH0gZWxzZSB7XG5cdFx0cmVzLnN0YXR1cyg0MDQpLnNlbmQoXCJFbmRwb2ludCBub3QgZm91bmRcIik7XG5cdH1cbn1cbiJdLCJuYW1lcyI6WyJjb25uZWN0aW9uIiwicmVxdWlyZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzbHVnIiwiYm9keSIsInF1ZXJ5IiwiZXJyIiwicmVzdWx0cyIsImZpZWxkcyIsInNlbmQiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/hospitals/all.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/hospitals/all.js"));
module.exports = __webpack_exports__;

})();
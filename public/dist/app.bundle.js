/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/index.js":
/*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/saharvacnich/Desktop/BOOTCAMP/HW14-ONLINE:OFFLINE-BUDGET-TRACKER/Develop/public/assets/js/index.js: Identifier 'checkDatabase' has already been declared (41:9)\\n\\n\\u001b[0m \\u001b[90m 39 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 40 | \\u001b[39m\\u001b[90m// TODO: change\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 41 | \\u001b[39m\\u001b[36mfunction\\u001b[39m checkDatabase() {\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m         \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 42 | \\u001b[39m  \\u001b[90m// open a transaction on your pending db\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 43 | \\u001b[39m  \\u001b[36mconst\\u001b[39m transaction \\u001b[33m=\\u001b[39m db\\u001b[33m.\\u001b[39mtransaction([\\u001b[32m\\\"balanceStore\\\"\\u001b[39m]\\u001b[33m,\\u001b[39m \\u001b[32m\\\"readwrite\\\"\\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 44 | \\u001b[39m  \\u001b[90m// access your pending object store\\u001b[39m\\u001b[0m\\n    at Parser._raise (/Users/saharvacnich/Desktop/BOOTCAMP/HW14-ONLINE:OFFLINE-BUDGET-TRACKER/Develop/public/node_modules/@babel/parser/lib/index.js:748:17)\\n    at Parser.raiseWithData (/Users/saharvacnich/Desktop/BOOTCAMP/HW14-ONLINE:OFFLINE-BUDGET-TRACKER/Develop/public/node_modules/@babel/parser/lib/index.js:741:17)\\n    at Parser.raise (/Users/saharvacnich/Desktop/BOOTCAMP/HW14-ONLINE:OFFLINE-BUDGET-TRACKER/Develop/public/node_modules/@babel/parser/lib/index.js:735:17)\\n    at ScopeHandler.checkRedeclarationInScope (/Users/saharvacnich/Desktop/BOOTCAMP/HW14-ONLINE:OFFLINE-BUDGET-TRACKER/Develop/public/node_modules/@babel/parser/lib/index.js:4915:12)\\n    at ScopeHandler.declareName (/Users/saharvacnich/Desktop/BOOTCAMP/HW14-ONLINE:OFFLINE-BUDGET-TRACKER/Develop/public/node_modules/@babel/parser/lib/index.js:4881:12)\\n    at Parser.registerFunctionStatementId (/Users/saharvacnich/Desktop/BOOTCAMP/HW14-ONLINE:OFFLINE-BUDGET-TRACKER/Develop/public/node_modules/@babel/parser/lib/index.js:12394:16)\\n    at Parser.parseFunction (/Users/saharvacnich/Desktop/BOOTCAMP/HW14-ONLINE:OFFLINE-BUDGET-TRACKER/Develop/public/node_modules/@babel/parser/lib/index.js:12374:12)\\n    at Parser.parseFunctionStatement (/Users/saharvacnich/Desktop/BOOTCAMP/HW14-ONLINE:OFFLINE-BUDGET-TRACKER/Develop/public/node_modules/@babel/parser/lib/index.js:11998:17)\\n    at Parser.parseStatementContent (/Users/saharvacnich/Desktop/BOOTCAMP/HW14-ONLINE:OFFLINE-BUDGET-TRACKER/Develop/public/node_modules/@babel/parser/lib/index.js:11688:21)\\n    at Parser.parseStatement (/Users/saharvacnich/Desktop/BOOTCAMP/HW14-ONLINE:OFFLINE-BUDGET-TRACKER/Develop/public/node_modules/@babel/parser/lib/index.js:11650:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/saharvacnich/Desktop/BOOTCAMP/HW14-ONLINE:OFFLINE-BUDGET-TRACKER/Develop/public/node_modules/@babel/parser/lib/index.js:12232:25)\\n    at Parser.parseBlockBody (/Users/saharvacnich/Desktop/BOOTCAMP/HW14-ONLINE:OFFLINE-BUDGET-TRACKER/Develop/public/node_modules/@babel/parser/lib/index.js:12218:10)\\n    at Parser.parseTopLevel (/Users/saharvacnich/Desktop/BOOTCAMP/HW14-ONLINE:OFFLINE-BUDGET-TRACKER/Develop/public/node_modules/@babel/parser/lib/index.js:11581:10)\\n    at Parser.parse (/Users/saharvacnich/Desktop/BOOTCAMP/HW14-ONLINE:OFFLINE-BUDGET-TRACKER/Develop/public/node_modules/@babel/parser/lib/index.js:13392:10)\\n    at parse (/Users/saharvacnich/Desktop/BOOTCAMP/HW14-ONLINE:OFFLINE-BUDGET-TRACKER/Develop/public/node_modules/@babel/parser/lib/index.js:13445:38)\\n    at parser (/Users/saharvacnich/Desktop/BOOTCAMP/HW14-ONLINE:OFFLINE-BUDGET-TRACKER/Develop/public/node_modules/@babel/core/lib/parser/index.js:54:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (/Users/saharvacnich/Desktop/BOOTCAMP/HW14-ONLINE:OFFLINE-BUDGET-TRACKER/Develop/public/node_modules/@babel/core/lib/transformation/normalize-file.js:99:38)\\n    at normalizeFile.next (<anonymous>)\\n    at run (/Users/saharvacnich/Desktop/BOOTCAMP/HW14-ONLINE:OFFLINE-BUDGET-TRACKER/Develop/public/node_modules/@babel/core/lib/transformation/index.js:31:50)\\n    at run.next (<anonymous>)\\n    at Function.transform (/Users/saharvacnich/Desktop/BOOTCAMP/HW14-ONLINE:OFFLINE-BUDGET-TRACKER/Develop/public/node_modules/@babel/core/lib/transform.js:27:41)\\n    at transform.next (<anonymous>)\\n    at step (/Users/saharvacnich/Desktop/BOOTCAMP/HW14-ONLINE:OFFLINE-BUDGET-TRACKER/Develop/public/node_modules/gensync/index.js:261:32)\\n    at /Users/saharvacnich/Desktop/BOOTCAMP/HW14-ONLINE:OFFLINE-BUDGET-TRACKER/Develop/public/node_modules/gensync/index.js:273:13\\n    at async.call.result.err.err (/Users/saharvacnich/Desktop/BOOTCAMP/HW14-ONLINE:OFFLINE-BUDGET-TRACKER/Develop/public/node_modules/gensync/index.js:223:11)\\n    at /Users/saharvacnich/Desktop/BOOTCAMP/HW14-ONLINE:OFFLINE-BUDGET-TRACKER/Develop/public/node_modules/gensync/index.js:189:28\\n    at /Users/saharvacnich/Desktop/BOOTCAMP/HW14-ONLINE:OFFLINE-BUDGET-TRACKER/Develop/public/node_modules/@babel/core/lib/gensync-utils/async.js:72:7\\n    at /Users/saharvacnich/Desktop/BOOTCAMP/HW14-ONLINE:OFFLINE-BUDGET-TRACKER/Develop/public/node_modules/gensync/index.js:113:33\\n    at step (/Users/saharvacnich/Desktop/BOOTCAMP/HW14-ONLINE:OFFLINE-BUDGET-TRACKER/Develop/public/node_modules/gensync/index.js:287:14)\");\n\n//# sourceURL=webpack:///./assets/js/index.js?");

/***/ })

/******/ });
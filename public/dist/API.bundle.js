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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/API.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/API.js":
/*!**************************!*\
  !*** ./assets/js/API.js ***!
  \**************************/
/*! exports provided: sendTransaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sendTransaction\", function() { return sendTransaction; });\n/* harmony import */ var _domMethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domMethods */ \"./assets/js/domMethods.js\");\n/* harmony import */ var _indexedDb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indexedDb */ \"./assets/js/indexedDb.js\");\n\n\nfunction sendTransaction(isAdding, transactions, myChart) {\n  var nameEl = document.querySelector(\"#t-name\");\n  var amountEl = document.querySelector(\"#t-amount\");\n  var errorEl = document.querySelector(\".form .error\"); // validate form\n\n  if (nameEl.value === \"\" || amountEl.value === \"\") {\n    errorEl.textContent = \"Missing Information\";\n    return;\n  } else {\n    errorEl.textContent = \"\";\n  } // create record\n\n\n  var transaction = {\n    name: nameEl.value,\n    value: amountEl.value,\n    date: new Date().toISOString()\n  }; // if subtracting funds, convert amount to negative number\n\n  if (!isAdding) {\n    transaction.value *= -1;\n  } // add to beginning of current array of data\n\n\n  transactions.unshift(transaction); // re-run logic to populate ui with new record\n\n  Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"populateChart\"])(transactions, myChart);\n  Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"populateTable\"])(transactions);\n  Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"populateTotal\"])(transactions); // also send to server\n\n  fetch(\"/api/transaction\", {\n    method: \"POST\",\n    body: JSON.stringify(transaction),\n    headers: {\n      Accept: \"application/json, text/plain, */*\",\n      \"Content-Type\": \"application/json\"\n    }\n  }).then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    if (data.errors) {\n      errorEl.textContent = \"Missing Information\";\n    } else {\n      // clear form\n      nameEl.value = \"\";\n      amountEl.value = \"\";\n    }\n  })[\"catch\"](function (err) {\n    // fetch failed, so save in indexed db\n    Object(_indexedDb__WEBPACK_IMPORTED_MODULE_1__[\"saveRecord\"])(transaction); // clear form\n\n    nameEl.value = \"\";\n    amountEl.value = \"\";\n  });\n}\n\n//# sourceURL=webpack:///./assets/js/API.js?");

/***/ }),

/***/ "./assets/js/domMethods.js":
/*!*********************************!*\
  !*** ./assets/js/domMethods.js ***!
  \*********************************/
/*! exports provided: populateTotal, populateTable, populateChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"populateTotal\", function() { return populateTotal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"populateTable\", function() { return populateTable; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"populateChart\", function() { return populateChart; });\nfunction populateTotal(transactions) {\n  // reduce transaction amounts to a single total value\n  var total = transactions.reduce(function (total, t) {\n    return total + parseInt(t.value);\n  }, 0);\n  var totalEl = document.querySelector(\"#total\");\n  totalEl.textContent = total;\n}\nfunction populateTable(transactions) {\n  var tbody = document.querySelector(\"#tbody\");\n  tbody.innerHTML = \"\";\n  transactions.forEach(function (transaction) {\n    // create and populate a table row\n    var tr = document.createElement(\"tr\");\n    tr.innerHTML = \"\\n        <td>\".concat(transaction.name, \"</td>\\n        <td>\").concat(transaction.value, \"</td>\\n      \");\n    tbody.appendChild(tr);\n  });\n}\nfunction populateChart(transactions, myChart) {\n  // copy array and reverse it\n  var reversed = transactions.slice().reverse();\n  var sum = 0; // create date labels for chart\n\n  var labels = reversed.map(function (t) {\n    var date = new Date(t.date);\n    return \"\".concat(date.getMonth() + 1, \"/\").concat(date.getDate(), \"/\").concat(date.getFullYear());\n  }); // create incremental values for chart\n\n  var data = reversed.map(function (t) {\n    sum += parseInt(t.value);\n    return sum;\n  }); // remove old chart if it exists\n\n  if (myChart) {\n    myChart.destroy();\n  }\n\n  var ctx = document.getElementById(\"myChart\").getContext(\"2d\");\n  myChart = new Chart(ctx, {\n    type: 'line',\n    data: {\n      labels: labels,\n      datasets: [{\n        label: \"Total Over Time\",\n        fill: true,\n        backgroundColor: \"#6666ff\",\n        data: data\n      }]\n    }\n  });\n}\n\n//# sourceURL=webpack:///./assets/js/domMethods.js?");

/***/ }),

/***/ "./assets/js/indexedDb.js":
/*!********************************!*\
  !*** ./assets/js/indexedDb.js ***!
  \********************************/
/*! exports provided: checkForIndexedDb, checkDatabase, saveRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkForIndexedDb\", function() { return checkForIndexedDb; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkDatabase\", function() { return checkDatabase; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveRecord\", function() { return saveRecord; });\n// DEPENDENCIES\nvar db, transaction, store; // set up the database\n\nvar request = window.indexedDB.open(\"balance\", 1);\n\nrequest.onupgradeneeded = function (e) {\n  var db = request.result;\n  db.createObjectStore(\"pending\", {\n    autoIncrement: true\n  });\n};\n\nrequest.onerror = function (e) {\n  console.log(\"There was an error\");\n};\n\nrequest.onsuccess = function (e) {\n  db = request.result; // check database if online\n\n  if (navigator.onLine) {\n    checkDatabase();\n  }\n};\n\nrequest.onerror = function (err) {\n  console.log(\"error:\", err);\n}; // function checking if indexedDb is supported by the browser\n\n\nfunction checkForIndexedDb() {\n  window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;\n  window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;\n  window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;\n\n  if (!window.indexedDB) {\n    console.log(\"Your browser doesn't support a stable version of IndexedDB.\");\n    return false;\n  }\n\n  return true;\n}\nfunction checkDatabase() {\n  // open a transaction on your pending db\n  var transaction = db.transaction([\"pending\"], \"readwrite\"); // access your pending object store\n\n  var store = transaction.objectStore(\"pending\"); // get all records from store and set to a variable\n\n  var getAll = store.getAll();\n\n  getAll.onsuccess = function () {\n    if (getAll.result.length > 0) {\n      fetch(\"/api/transaction/bulk\", {\n        method: \"POST\",\n        body: JSON.stringify(getAll.result),\n        headers: {\n          Accept: \"application/json, text/plain, */*\",\n          \"Content-Type\": \"application/json\"\n        }\n      }).then(function (response) {\n        return response.json();\n      }).then(function () {\n        // if successful, open a transaction on your pending db\n        var transaction = db.transaction([\"pending\"], \"readwrite\"); // access your pending object store\n\n        var store = transaction.objectStore(\"pending\"); // clear all items in your store\n\n        store.clear();\n      });\n    }\n  };\n}\nfunction saveRecord(record) {\n  var transaction = db.transaction([\"pending\"], \"readwrite\"); // access your pending object store\n\n  var store = transaction.objectStore(\"pending\"); // add record to store\n\n  store.add(record);\n}\n\n//# sourceURL=webpack:///./assets/js/indexedDb.js?");

/***/ })

/******/ });
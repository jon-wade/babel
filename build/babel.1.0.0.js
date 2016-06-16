/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	//ES2015 code examples
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var evens = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
	
	// Expression bodies
	var odds = evens.map(function (v) {
	    return v + 1;
	});
	var nums = evens.map(function (v, i) {
	    return v + i;
	}); //i = index location
	var pairs = evens.map(function (v) {
	    return { even: v, odd: v + 1 };
	});
	
	console.log('odds=', odds);
	console.log('nums=', nums);
	console.log('pairs=', pairs);
	
	var fives = [];
	
	// Statement bodies
	nums.forEach(function (v) {
	    if (v % 5 === 0) fives.push(v);
	});
	
	console.log('fives=', fives);
	
	// Lexical this
	var bob = {
	    _name: "Bob",
	    _friends: ["Jon"],
	    printFriends: function printFriends() {
	        var _this = this;
	
	        this._friends.forEach(function (f) {
	            return console.log(_this._name + " knows " + f);
	        }); //normally this would refer to the this of
	        // the printFriends() method, not the surrounding code
	        //check the build script for details
	    }
	};
	
	bob.printFriends();
	
	//classes
	
	var Test = function () {
	    function Test(a, b) {
	        _classCallCheck(this, Test);
	
	        this.a = a;
	        this.b = b;
	    }
	
	    _createClass(Test, [{
	        key: 'print',
	        value: function print() {
	            console.log('a=', this.a);
	            console.log('b=', this.b);
	        }
	    }]);
	
	    return Test;
	}();
	
	var newObj = new Test('hello', 'world');
	newObj.print();
	
	// String interpolation
	var name = "Bob",
	    time = "today";
	console.log('Hello ' + name + ', how are you ' + time + '?');
	
	// list matching
	var _ref = [1, 2, 3];
	var a = _ref[0];
	var b = _ref[2]; //this doesn't work in node 5.11.0 but Babel does convert it properly
	
	console.log('a=', a);
	console.log('b=', b);
	
	//default parameters
	function f(x) {
	    var y = arguments.length <= 1 || arguments[1] === undefined ? 12 : arguments[1];
	
	    // y is 12 if not passed (or passed as undefined)
	    return x + y;
	}
	console.log('f(3)=', f(3));
	
	//rest parameters
	function g(x) {
	    // y is an Array
	    return x * (arguments.length - 1);
	}
	console.log('g(3)=', g(3, "hello", true));
	
	//spread parameters
	function h(x, y, z) {
	    return x + y + z;
	}
	// Pass each elem of array as argument
	console.log('h(...[1,2,3])', h.apply(undefined, [1, 2, 3]));
	
	//let and constants
	function i() {
	    {
	        var x = void 0;
	        {
	            // okay, block scoped name
	            var _x2 = "sneaky";
	            // x = "foo"; error, const
	        }
	        // let x ="inner" error, already declared in block
	    }
	}
	
	//iterators
	var fibonacci = _defineProperty({}, Symbol.iterator, function () {
	    var pre = 0,
	        cur = 1;
	    return {
	        next: function next() {
	            var _ref2 = [cur, pre + cur];
	            pre = _ref2[0];
	            cur = _ref2[1];
	
	            return { done: false, value: cur };
	        }
	    };
	});
	
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;
	
	try {
	    for (var _iterator = fibonacci[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var n = _step.value;
	
	        // truncate the sequence at 1000
	        if (n > 1000) break;
	        console.log(n);
	    }
	
	    //promises
	} catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	} finally {
	    try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	        }
	    } finally {
	        if (_didIteratorError) {
	            throw _iteratorError;
	        }
	    }
	}
	
	function timeout() {
	    var duration = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	
	    return new Promise(function (resolve, reject) {
	        setTimeout(resolve, duration);
	    });
	}
	
	var p = timeout(1000).then(function () {
	    return timeout(2000);
	}).then(function () {
	    throw new Error("hmm");
	}).catch(function (err) {
	    return Promise.all([timeout(100), timeout(200)]);
	});

/***/ }
/******/ ]);
//# sourceMappingURL=babel.1.0.0.js.map
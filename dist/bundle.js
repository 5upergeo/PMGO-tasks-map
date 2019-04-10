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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/leaflet/dist/leaflet-src.js":
/*!**************************************************!*\
  !*** ./node_modules/leaflet/dist/leaflet-src.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* @preserve\n * Leaflet 1.4.0, a JS library for interactive maps. http://leafletjs.com\n * (c) 2010-2018 Vladimir Agafonkin, (c) 2010-2011 CloudMade\n */\n\n(function (global, factory) {\n\t true ? factory(exports) :\n\tundefined;\n}(this, (function (exports) { 'use strict';\n\nvar version = \"1.4.0\";\n\n/*\r\n * @namespace Util\r\n *\r\n * Various utility functions, used by Leaflet internally.\r\n */\r\n\r\nvar freeze = Object.freeze;\r\nObject.freeze = function (obj) { return obj; };\r\n\r\n// @function extend(dest: Object, src?: Object): Object\r\n// Merges the properties of the `src` object (or multiple objects) into `dest` object and returns the latter. Has an `L.extend` shortcut.\r\nfunction extend(dest) {\r\n\tvar i, j, len, src;\r\n\r\n\tfor (j = 1, len = arguments.length; j < len; j++) {\r\n\t\tsrc = arguments[j];\r\n\t\tfor (i in src) {\r\n\t\t\tdest[i] = src[i];\r\n\t\t}\r\n\t}\r\n\treturn dest;\r\n}\r\n\r\n// @function create(proto: Object, properties?: Object): Object\r\n// Compatibility polyfill for [Object.create](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/create)\r\nvar create = Object.create || (function () {\r\n\tfunction F() {}\r\n\treturn function (proto) {\r\n\t\tF.prototype = proto;\r\n\t\treturn new F();\r\n\t};\r\n})();\r\n\r\n// @function bind(fn: Function, …): Function\r\n// Returns a new function bound to the arguments passed, like [Function.prototype.bind](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).\r\n// Has a `L.bind()` shortcut.\r\nfunction bind(fn, obj) {\r\n\tvar slice = Array.prototype.slice;\r\n\r\n\tif (fn.bind) {\r\n\t\treturn fn.bind.apply(fn, slice.call(arguments, 1));\r\n\t}\r\n\r\n\tvar args = slice.call(arguments, 2);\r\n\r\n\treturn function () {\r\n\t\treturn fn.apply(obj, args.length ? args.concat(slice.call(arguments)) : arguments);\r\n\t};\r\n}\r\n\r\n// @property lastId: Number\r\n// Last unique ID used by [`stamp()`](#util-stamp)\r\nvar lastId = 0;\r\n\r\n// @function stamp(obj: Object): Number\r\n// Returns the unique ID of an object, assigning it one if it doesn't have it.\r\nfunction stamp(obj) {\r\n\t/*eslint-disable */\r\n\tobj._leaflet_id = obj._leaflet_id || ++lastId;\r\n\treturn obj._leaflet_id;\r\n\t/* eslint-enable */\r\n}\r\n\r\n// @function throttle(fn: Function, time: Number, context: Object): Function\r\n// Returns a function which executes function `fn` with the given scope `context`\r\n// (so that the `this` keyword refers to `context` inside `fn`'s code). The function\r\n// `fn` will be called no more than one time per given amount of `time`. The arguments\r\n// received by the bound function will be any arguments passed when binding the\r\n// function, followed by any arguments passed when invoking the bound function.\r\n// Has an `L.throttle` shortcut.\r\nfunction throttle(fn, time, context) {\r\n\tvar lock, args, wrapperFn, later;\r\n\r\n\tlater = function () {\r\n\t\t// reset lock and call if queued\r\n\t\tlock = false;\r\n\t\tif (args) {\r\n\t\t\twrapperFn.apply(context, args);\r\n\t\t\targs = false;\r\n\t\t}\r\n\t};\r\n\r\n\twrapperFn = function () {\r\n\t\tif (lock) {\r\n\t\t\t// called too soon, queue to call later\r\n\t\t\targs = arguments;\r\n\r\n\t\t} else {\r\n\t\t\t// call and lock until later\r\n\t\t\tfn.apply(context, arguments);\r\n\t\t\tsetTimeout(later, time);\r\n\t\t\tlock = true;\r\n\t\t}\r\n\t};\r\n\r\n\treturn wrapperFn;\r\n}\r\n\r\n// @function wrapNum(num: Number, range: Number[], includeMax?: Boolean): Number\r\n// Returns the number `num` modulo `range` in such a way so it lies within\r\n// `range[0]` and `range[1]`. The returned value will be always smaller than\r\n// `range[1]` unless `includeMax` is set to `true`.\r\nfunction wrapNum(x, range, includeMax) {\r\n\tvar max = range[1],\r\n\t    min = range[0],\r\n\t    d = max - min;\r\n\treturn x === max && includeMax ? x : ((x - min) % d + d) % d + min;\r\n}\r\n\r\n// @function falseFn(): Function\r\n// Returns a function which always returns `false`.\r\nfunction falseFn() { return false; }\r\n\r\n// @function formatNum(num: Number, digits?: Number): Number\r\n// Returns the number `num` rounded to `digits` decimals, or to 6 decimals by default.\r\nfunction formatNum(num, digits) {\r\n\tvar pow = Math.pow(10, (digits === undefined ? 6 : digits));\r\n\treturn Math.round(num * pow) / pow;\r\n}\r\n\r\n// @function trim(str: String): String\r\n// Compatibility polyfill for [String.prototype.trim](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)\r\nfunction trim(str) {\r\n\treturn str.trim ? str.trim() : str.replace(/^\\s+|\\s+$/g, '');\r\n}\r\n\r\n// @function splitWords(str: String): String[]\r\n// Trims and splits the string on whitespace and returns the array of parts.\r\nfunction splitWords(str) {\r\n\treturn trim(str).split(/\\s+/);\r\n}\r\n\r\n// @function setOptions(obj: Object, options: Object): Object\r\n// Merges the given properties to the `options` of the `obj` object, returning the resulting options. See `Class options`. Has an `L.setOptions` shortcut.\r\nfunction setOptions(obj, options) {\r\n\tif (!obj.hasOwnProperty('options')) {\r\n\t\tobj.options = obj.options ? create(obj.options) : {};\r\n\t}\r\n\tfor (var i in options) {\r\n\t\tobj.options[i] = options[i];\r\n\t}\r\n\treturn obj.options;\r\n}\r\n\r\n// @function getParamString(obj: Object, existingUrl?: String, uppercase?: Boolean): String\r\n// Converts an object into a parameter URL string, e.g. `{a: \"foo\", b: \"bar\"}`\r\n// translates to `'?a=foo&b=bar'`. If `existingUrl` is set, the parameters will\r\n// be appended at the end. If `uppercase` is `true`, the parameter names will\r\n// be uppercased (e.g. `'?A=foo&B=bar'`)\r\nfunction getParamString(obj, existingUrl, uppercase) {\r\n\tvar params = [];\r\n\tfor (var i in obj) {\r\n\t\tparams.push(encodeURIComponent(uppercase ? i.toUpperCase() : i) + '=' + encodeURIComponent(obj[i]));\r\n\t}\r\n\treturn ((!existingUrl || existingUrl.indexOf('?') === -1) ? '?' : '&') + params.join('&');\r\n}\r\n\r\nvar templateRe = /\\{ *([\\w_-]+) *\\}/g;\r\n\r\n// @function template(str: String, data: Object): String\r\n// Simple templating facility, accepts a template string of the form `'Hello {a}, {b}'`\r\n// and a data object like `{a: 'foo', b: 'bar'}`, returns evaluated string\r\n// `('Hello foo, bar')`. You can also specify functions instead of strings for\r\n// data values — they will be evaluated passing `data` as an argument.\r\nfunction template(str, data) {\r\n\treturn str.replace(templateRe, function (str, key) {\r\n\t\tvar value = data[key];\r\n\r\n\t\tif (value === undefined) {\r\n\t\t\tthrow new Error('No value provided for variable ' + str);\r\n\r\n\t\t} else if (typeof value === 'function') {\r\n\t\t\tvalue = value(data);\r\n\t\t}\r\n\t\treturn value;\r\n\t});\r\n}\r\n\r\n// @function isArray(obj): Boolean\r\n// Compatibility polyfill for [Array.isArray](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)\r\nvar isArray = Array.isArray || function (obj) {\r\n\treturn (Object.prototype.toString.call(obj) === '[object Array]');\r\n};\r\n\r\n// @function indexOf(array: Array, el: Object): Number\r\n// Compatibility polyfill for [Array.prototype.indexOf](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)\r\nfunction indexOf(array, el) {\r\n\tfor (var i = 0; i < array.length; i++) {\r\n\t\tif (array[i] === el) { return i; }\r\n\t}\r\n\treturn -1;\r\n}\r\n\r\n// @property emptyImageUrl: String\r\n// Data URI string containing a base64-encoded empty GIF image.\r\n// Used as a hack to free memory from unused images on WebKit-powered\r\n// mobile devices (by setting image `src` to this string).\r\nvar emptyImageUrl = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';\r\n\r\n// inspired by http://paulirish.com/2011/requestanimationframe-for-smart-animating/\r\n\r\nfunction getPrefixed(name) {\r\n\treturn window['webkit' + name] || window['moz' + name] || window['ms' + name];\r\n}\r\n\r\nvar lastTime = 0;\r\n\r\n// fallback for IE 7-8\r\nfunction timeoutDefer(fn) {\r\n\tvar time = +new Date(),\r\n\t    timeToCall = Math.max(0, 16 - (time - lastTime));\r\n\r\n\tlastTime = time + timeToCall;\r\n\treturn window.setTimeout(fn, timeToCall);\r\n}\r\n\r\nvar requestFn = window.requestAnimationFrame || getPrefixed('RequestAnimationFrame') || timeoutDefer;\r\nvar cancelFn = window.cancelAnimationFrame || getPrefixed('CancelAnimationFrame') ||\r\n\t\tgetPrefixed('CancelRequestAnimationFrame') || function (id) { window.clearTimeout(id); };\r\n\r\n// @function requestAnimFrame(fn: Function, context?: Object, immediate?: Boolean): Number\r\n// Schedules `fn` to be executed when the browser repaints. `fn` is bound to\r\n// `context` if given. When `immediate` is set, `fn` is called immediately if\r\n// the browser doesn't have native support for\r\n// [`window.requestAnimationFrame`](https://developer.mozilla.org/docs/Web/API/window/requestAnimationFrame),\r\n// otherwise it's delayed. Returns a request ID that can be used to cancel the request.\r\nfunction requestAnimFrame(fn, context, immediate) {\r\n\tif (immediate && requestFn === timeoutDefer) {\r\n\t\tfn.call(context);\r\n\t} else {\r\n\t\treturn requestFn.call(window, bind(fn, context));\r\n\t}\r\n}\r\n\r\n// @function cancelAnimFrame(id: Number): undefined\r\n// Cancels a previous `requestAnimFrame`. See also [window.cancelAnimationFrame](https://developer.mozilla.org/docs/Web/API/window/cancelAnimationFrame).\r\nfunction cancelAnimFrame(id) {\r\n\tif (id) {\r\n\t\tcancelFn.call(window, id);\r\n\t}\r\n}\r\n\n\nvar Util = (Object.freeze || Object)({\n\tfreeze: freeze,\n\textend: extend,\n\tcreate: create,\n\tbind: bind,\n\tlastId: lastId,\n\tstamp: stamp,\n\tthrottle: throttle,\n\twrapNum: wrapNum,\n\tfalseFn: falseFn,\n\tformatNum: formatNum,\n\ttrim: trim,\n\tsplitWords: splitWords,\n\tsetOptions: setOptions,\n\tgetParamString: getParamString,\n\ttemplate: template,\n\tisArray: isArray,\n\tindexOf: indexOf,\n\temptyImageUrl: emptyImageUrl,\n\trequestFn: requestFn,\n\tcancelFn: cancelFn,\n\trequestAnimFrame: requestAnimFrame,\n\tcancelAnimFrame: cancelAnimFrame\n});\n\n// @class Class\r\n// @aka L.Class\r\n\r\n// @section\r\n// @uninheritable\r\n\r\n// Thanks to John Resig and Dean Edwards for inspiration!\r\n\r\nfunction Class() {}\r\n\r\nClass.extend = function (props) {\r\n\r\n\t// @function extend(props: Object): Function\r\n\t// [Extends the current class](#class-inheritance) given the properties to be included.\r\n\t// Returns a Javascript function that is a class constructor (to be called with `new`).\r\n\tvar NewClass = function () {\r\n\r\n\t\t// call the constructor\r\n\t\tif (this.initialize) {\r\n\t\t\tthis.initialize.apply(this, arguments);\r\n\t\t}\r\n\r\n\t\t// call all constructor hooks\r\n\t\tthis.callInitHooks();\r\n\t};\r\n\r\n\tvar parentProto = NewClass.__super__ = this.prototype;\r\n\r\n\tvar proto = create(parentProto);\r\n\tproto.constructor = NewClass;\r\n\r\n\tNewClass.prototype = proto;\r\n\r\n\t// inherit parent's statics\r\n\tfor (var i in this) {\r\n\t\tif (this.hasOwnProperty(i) && i !== 'prototype' && i !== '__super__') {\r\n\t\t\tNewClass[i] = this[i];\r\n\t\t}\r\n\t}\r\n\r\n\t// mix static properties into the class\r\n\tif (props.statics) {\r\n\t\textend(NewClass, props.statics);\r\n\t\tdelete props.statics;\r\n\t}\r\n\r\n\t// mix includes into the prototype\r\n\tif (props.includes) {\r\n\t\tcheckDeprecatedMixinEvents(props.includes);\r\n\t\textend.apply(null, [proto].concat(props.includes));\r\n\t\tdelete props.includes;\r\n\t}\r\n\r\n\t// merge options\r\n\tif (proto.options) {\r\n\t\tprops.options = extend(create(proto.options), props.options);\r\n\t}\r\n\r\n\t// mix given properties into the prototype\r\n\textend(proto, props);\r\n\r\n\tproto._initHooks = [];\r\n\r\n\t// add method for calling all hooks\r\n\tproto.callInitHooks = function () {\r\n\r\n\t\tif (this._initHooksCalled) { return; }\r\n\r\n\t\tif (parentProto.callInitHooks) {\r\n\t\t\tparentProto.callInitHooks.call(this);\r\n\t\t}\r\n\r\n\t\tthis._initHooksCalled = true;\r\n\r\n\t\tfor (var i = 0, len = proto._initHooks.length; i < len; i++) {\r\n\t\t\tproto._initHooks[i].call(this);\r\n\t\t}\r\n\t};\r\n\r\n\treturn NewClass;\r\n};\r\n\r\n\r\n// @function include(properties: Object): this\r\n// [Includes a mixin](#class-includes) into the current class.\r\nClass.include = function (props) {\r\n\textend(this.prototype, props);\r\n\treturn this;\r\n};\r\n\r\n// @function mergeOptions(options: Object): this\r\n// [Merges `options`](#class-options) into the defaults of the class.\r\nClass.mergeOptions = function (options) {\r\n\textend(this.prototype.options, options);\r\n\treturn this;\r\n};\r\n\r\n// @function addInitHook(fn: Function): this\r\n// Adds a [constructor hook](#class-constructor-hooks) to the class.\r\nClass.addInitHook = function (fn) { // (Function) || (String, args...)\r\n\tvar args = Array.prototype.slice.call(arguments, 1);\r\n\r\n\tvar init = typeof fn === 'function' ? fn : function () {\r\n\t\tthis[fn].apply(this, args);\r\n\t};\r\n\r\n\tthis.prototype._initHooks = this.prototype._initHooks || [];\r\n\tthis.prototype._initHooks.push(init);\r\n\treturn this;\r\n};\r\n\r\nfunction checkDeprecatedMixinEvents(includes) {\r\n\tif (typeof L === 'undefined' || !L || !L.Mixin) { return; }\r\n\r\n\tincludes = isArray(includes) ? includes : [includes];\r\n\r\n\tfor (var i = 0; i < includes.length; i++) {\r\n\t\tif (includes[i] === L.Mixin.Events) {\r\n\t\t\tconsole.warn('Deprecated include of L.Mixin.Events: ' +\r\n\t\t\t\t'this property will be removed in future releases, ' +\r\n\t\t\t\t'please inherit from L.Evented instead.', new Error().stack);\r\n\t\t}\r\n\t}\r\n}\n\n/*\r\n * @class Evented\r\n * @aka L.Evented\r\n * @inherits Class\r\n *\r\n * A set of methods shared between event-powered classes (like `Map` and `Marker`). Generally, events allow you to execute some function when something happens with an object (e.g. the user clicks on the map, causing the map to fire `'click'` event).\r\n *\r\n * @example\r\n *\r\n * ```js\r\n * map.on('click', function(e) {\r\n * \talert(e.latlng);\r\n * } );\r\n * ```\r\n *\r\n * Leaflet deals with event listeners by reference, so if you want to add a listener and then remove it, define it as a function:\r\n *\r\n * ```js\r\n * function onClick(e) { ... }\r\n *\r\n * map.on('click', onClick);\r\n * map.off('click', onClick);\r\n * ```\r\n */\r\n\r\nvar Events = {\r\n\t/* @method on(type: String, fn: Function, context?: Object): this\r\n\t * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).\r\n\t *\r\n\t * @alternative\r\n\t * @method on(eventMap: Object): this\r\n\t * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`\r\n\t */\r\n\ton: function (types, fn, context) {\r\n\r\n\t\t// types can be a map of types/handlers\r\n\t\tif (typeof types === 'object') {\r\n\t\t\tfor (var type in types) {\r\n\t\t\t\t// we don't process space-separated events here for performance;\r\n\t\t\t\t// it's a hot path since Layer uses the on(obj) syntax\r\n\t\t\t\tthis._on(type, types[type], fn);\r\n\t\t\t}\r\n\r\n\t\t} else {\r\n\t\t\t// types can be a string of space-separated words\r\n\t\t\ttypes = splitWords(types);\r\n\r\n\t\t\tfor (var i = 0, len = types.length; i < len; i++) {\r\n\t\t\t\tthis._on(types[i], fn, context);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\treturn this;\r\n\t},\r\n\r\n\t/* @method off(type: String, fn?: Function, context?: Object): this\r\n\t * Removes a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object. Note that if you passed a custom context to `on`, you must pass the same context to `off` in order to remove the listener.\r\n\t *\r\n\t * @alternative\r\n\t * @method off(eventMap: Object): this\r\n\t * Removes a set of type/listener pairs.\r\n\t *\r\n\t * @alternative\r\n\t * @method off: this\r\n\t * Removes all listeners to all events on the object.\r\n\t */\r\n\toff: function (types, fn, context) {\r\n\r\n\t\tif (!types) {\r\n\t\t\t// clear all listeners if called without arguments\r\n\t\t\tdelete this._events;\r\n\r\n\t\t} else if (typeof types === 'object') {\r\n\t\t\tfor (var type in types) {\r\n\t\t\t\tthis._off(type, types[type], fn);\r\n\t\t\t}\r\n\r\n\t\t} else {\r\n\t\t\ttypes = splitWords(types);\r\n\r\n\t\t\tfor (var i = 0, len = types.length; i < len; i++) {\r\n\t\t\t\tthis._off(types[i], fn, context);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// attach listener (without syntactic sugar now)\r\n\t_on: function (type, fn, context) {\r\n\t\tthis._events = this._events || {};\r\n\r\n\t\t/* get/init listeners for type */\r\n\t\tvar typeListeners = this._events[type];\r\n\t\tif (!typeListeners) {\r\n\t\t\ttypeListeners = [];\r\n\t\t\tthis._events[type] = typeListeners;\r\n\t\t}\r\n\r\n\t\tif (context === this) {\r\n\t\t\t// Less memory footprint.\r\n\t\t\tcontext = undefined;\r\n\t\t}\r\n\t\tvar newListener = {fn: fn, ctx: context},\r\n\t\t    listeners = typeListeners;\r\n\r\n\t\t// check if fn already there\r\n\t\tfor (var i = 0, len = listeners.length; i < len; i++) {\r\n\t\t\tif (listeners[i].fn === fn && listeners[i].ctx === context) {\r\n\t\t\t\treturn;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tlisteners.push(newListener);\r\n\t},\r\n\r\n\t_off: function (type, fn, context) {\r\n\t\tvar listeners,\r\n\t\t    i,\r\n\t\t    len;\r\n\r\n\t\tif (!this._events) { return; }\r\n\r\n\t\tlisteners = this._events[type];\r\n\r\n\t\tif (!listeners) {\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\tif (!fn) {\r\n\t\t\t// Set all removed listeners to noop so they are not called if remove happens in fire\r\n\t\t\tfor (i = 0, len = listeners.length; i < len; i++) {\r\n\t\t\t\tlisteners[i].fn = falseFn;\r\n\t\t\t}\r\n\t\t\t// clear all listeners for a type if function isn't specified\r\n\t\t\tdelete this._events[type];\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\tif (context === this) {\r\n\t\t\tcontext = undefined;\r\n\t\t}\r\n\r\n\t\tif (listeners) {\r\n\r\n\t\t\t// find fn and remove it\r\n\t\t\tfor (i = 0, len = listeners.length; i < len; i++) {\r\n\t\t\t\tvar l = listeners[i];\r\n\t\t\t\tif (l.ctx !== context) { continue; }\r\n\t\t\t\tif (l.fn === fn) {\r\n\r\n\t\t\t\t\t// set the removed listener to noop so that's not called if remove happens in fire\r\n\t\t\t\t\tl.fn = falseFn;\r\n\r\n\t\t\t\t\tif (this._firingCount) {\r\n\t\t\t\t\t\t/* copy array in case events are being fired */\r\n\t\t\t\t\t\tthis._events[type] = listeners = listeners.slice();\r\n\t\t\t\t\t}\r\n\t\t\t\t\tlisteners.splice(i, 1);\r\n\r\n\t\t\t\t\treturn;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t},\r\n\r\n\t// @method fire(type: String, data?: Object, propagate?: Boolean): this\r\n\t// Fires an event of the specified type. You can optionally provide an data\r\n\t// object — the first argument of the listener function will contain its\r\n\t// properties. The event can optionally be propagated to event parents.\r\n\tfire: function (type, data, propagate) {\r\n\t\tif (!this.listens(type, propagate)) { return this; }\r\n\r\n\t\tvar event = extend({}, data, {\r\n\t\t\ttype: type,\r\n\t\t\ttarget: this,\r\n\t\t\tsourceTarget: data && data.sourceTarget || this\r\n\t\t});\r\n\r\n\t\tif (this._events) {\r\n\t\t\tvar listeners = this._events[type];\r\n\r\n\t\t\tif (listeners) {\r\n\t\t\t\tthis._firingCount = (this._firingCount + 1) || 1;\r\n\t\t\t\tfor (var i = 0, len = listeners.length; i < len; i++) {\r\n\t\t\t\t\tvar l = listeners[i];\r\n\t\t\t\t\tl.fn.call(l.ctx || this, event);\r\n\t\t\t\t}\r\n\r\n\t\t\t\tthis._firingCount--;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tif (propagate) {\r\n\t\t\t// propagate the event to parents (set with addEventParent)\r\n\t\t\tthis._propagateEvent(event);\r\n\t\t}\r\n\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// @method listens(type: String): Boolean\r\n\t// Returns `true` if a particular event type has any listeners attached to it.\r\n\tlistens: function (type, propagate) {\r\n\t\tvar listeners = this._events && this._events[type];\r\n\t\tif (listeners && listeners.length) { return true; }\r\n\r\n\t\tif (propagate) {\r\n\t\t\t// also check parents for listeners if event propagates\r\n\t\t\tfor (var id in this._eventParents) {\r\n\t\t\t\tif (this._eventParents[id].listens(type, propagate)) { return true; }\r\n\t\t\t}\r\n\t\t}\r\n\t\treturn false;\r\n\t},\r\n\r\n\t// @method once(…): this\r\n\t// Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.\r\n\tonce: function (types, fn, context) {\r\n\r\n\t\tif (typeof types === 'object') {\r\n\t\t\tfor (var type in types) {\r\n\t\t\t\tthis.once(type, types[type], fn);\r\n\t\t\t}\r\n\t\t\treturn this;\r\n\t\t}\r\n\r\n\t\tvar handler = bind(function () {\r\n\t\t\tthis\r\n\t\t\t    .off(types, fn, context)\r\n\t\t\t    .off(types, handler, context);\r\n\t\t}, this);\r\n\r\n\t\t// add a listener that's executed once and removed after that\r\n\t\treturn this\r\n\t\t    .on(types, fn, context)\r\n\t\t    .on(types, handler, context);\r\n\t},\r\n\r\n\t// @method addEventParent(obj: Evented): this\r\n\t// Adds an event parent - an `Evented` that will receive propagated events\r\n\taddEventParent: function (obj) {\r\n\t\tthis._eventParents = this._eventParents || {};\r\n\t\tthis._eventParents[stamp(obj)] = obj;\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// @method removeEventParent(obj: Evented): this\r\n\t// Removes an event parent, so it will stop receiving propagated events\r\n\tremoveEventParent: function (obj) {\r\n\t\tif (this._eventParents) {\r\n\t\t\tdelete this._eventParents[stamp(obj)];\r\n\t\t}\r\n\t\treturn this;\r\n\t},\r\n\r\n\t_propagateEvent: function (e) {\r\n\t\tfor (var id in this._eventParents) {\r\n\t\t\tthis._eventParents[id].fire(e.type, extend({\r\n\t\t\t\tlayer: e.target,\r\n\t\t\t\tpropagatedFrom: e.target\r\n\t\t\t}, e), true);\r\n\t\t}\r\n\t}\r\n};\r\n\r\n// aliases; we should ditch those eventually\r\n\r\n// @method addEventListener(…): this\r\n// Alias to [`on(…)`](#evented-on)\r\nEvents.addEventListener = Events.on;\r\n\r\n// @method removeEventListener(…): this\r\n// Alias to [`off(…)`](#evented-off)\r\n\r\n// @method clearAllEventListeners(…): this\r\n// Alias to [`off()`](#evented-off)\r\nEvents.removeEventListener = Events.clearAllEventListeners = Events.off;\r\n\r\n// @method addOneTimeEventListener(…): this\r\n// Alias to [`once(…)`](#evented-once)\r\nEvents.addOneTimeEventListener = Events.once;\r\n\r\n// @method fireEvent(…): this\r\n// Alias to [`fire(…)`](#evented-fire)\r\nEvents.fireEvent = Events.fire;\r\n\r\n// @method hasEventListeners(…): Boolean\r\n// Alias to [`listens(…)`](#evented-listens)\r\nEvents.hasEventListeners = Events.listens;\r\n\r\nvar Evented = Class.extend(Events);\n\n/*\r\n * @class Point\r\n * @aka L.Point\r\n *\r\n * Represents a point with `x` and `y` coordinates in pixels.\r\n *\r\n * @example\r\n *\r\n * ```js\r\n * var point = L.point(200, 300);\r\n * ```\r\n *\r\n * All Leaflet methods and options that accept `Point` objects also accept them in a simple Array form (unless noted otherwise), so these lines are equivalent:\r\n *\r\n * ```js\r\n * map.panBy([200, 300]);\r\n * map.panBy(L.point(200, 300));\r\n * ```\r\n *\r\n * Note that `Point` does not inherit from Leafet's `Class` object,\r\n * which means new classes can't inherit from it, and new methods\r\n * can't be added to it with the `include` function.\r\n */\r\n\r\nfunction Point(x, y, round) {\r\n\t// @property x: Number; The `x` coordinate of the point\r\n\tthis.x = (round ? Math.round(x) : x);\r\n\t// @property y: Number; The `y` coordinate of the point\r\n\tthis.y = (round ? Math.round(y) : y);\r\n}\r\n\r\nvar trunc = Math.trunc || function (v) {\r\n\treturn v > 0 ? Math.floor(v) : Math.ceil(v);\r\n};\r\n\r\nPoint.prototype = {\r\n\r\n\t// @method clone(): Point\r\n\t// Returns a copy of the current point.\r\n\tclone: function () {\r\n\t\treturn new Point(this.x, this.y);\r\n\t},\r\n\r\n\t// @method add(otherPoint: Point): Point\r\n\t// Returns the result of addition of the current and the given points.\r\n\tadd: function (point) {\r\n\t\t// non-destructive, returns a new point\r\n\t\treturn this.clone()._add(toPoint(point));\r\n\t},\r\n\r\n\t_add: function (point) {\r\n\t\t// destructive, used directly for performance in situations where it's safe to modify existing point\r\n\t\tthis.x += point.x;\r\n\t\tthis.y += point.y;\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// @method subtract(otherPoint: Point): Point\r\n\t// Returns the result of subtraction of the given point from the current.\r\n\tsubtract: function (point) {\r\n\t\treturn this.clone()._subtract(toPoint(point));\r\n\t},\r\n\r\n\t_subtract: function (point) {\r\n\t\tthis.x -= point.x;\r\n\t\tthis.y -= point.y;\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// @method divideBy(num: Number): Point\r\n\t// Returns the result of division of the current point by the given number.\r\n\tdivideBy: function (num) {\r\n\t\treturn this.clone()._divideBy(num);\r\n\t},\r\n\r\n\t_divideBy: function (num) {\r\n\t\tthis.x /= num;\r\n\t\tthis.y /= num;\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// @method multiplyBy(num: Number): Point\r\n\t// Returns the result of multiplication of the current point by the given number.\r\n\tmultiplyBy: function (num) {\r\n\t\treturn this.clone()._multiplyBy(num);\r\n\t},\r\n\r\n\t_multiplyBy: function (num) {\r\n\t\tthis.x *= num;\r\n\t\tthis.y *= num;\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// @method scaleBy(scale: Point): Point\r\n\t// Multiply each coordinate of the current point by each coordinate of\r\n\t// `scale`. In linear algebra terms, multiply the point by the\r\n\t// [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)\r\n\t// defined by `scale`.\r\n\tscaleBy: function (point) {\r\n\t\treturn new Point(this.x * point.x, this.y * point.y);\r\n\t},\r\n\r\n\t// @method unscaleBy(scale: Point): Point\r\n\t// Inverse of `scaleBy`. Divide each coordinate of the current point by\r\n\t// each coordinate of `scale`.\r\n\tunscaleBy: function (point) {\r\n\t\treturn new Point(this.x / point.x, this.y / point.y);\r\n\t},\r\n\r\n\t// @method round(): Point\r\n\t// Returns a copy of the current point with rounded coordinates.\r\n\tround: function () {\r\n\t\treturn this.clone()._round();\r\n\t},\r\n\r\n\t_round: function () {\r\n\t\tthis.x = Math.round(this.x);\r\n\t\tthis.y = Math.round(this.y);\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// @method floor(): Point\r\n\t// Returns a copy of the current point with floored coordinates (rounded down).\r\n\tfloor: function () {\r\n\t\treturn this.clone()._floor();\r\n\t},\r\n\r\n\t_floor: function () {\r\n\t\tthis.x = Math.floor(this.x);\r\n\t\tthis.y = Math.floor(this.y);\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// @method ceil(): Point\r\n\t// Returns a copy of the current point with ceiled coordinates (rounded up).\r\n\tceil: function () {\r\n\t\treturn this.clone()._ceil();\r\n\t},\r\n\r\n\t_ceil: function () {\r\n\t\tthis.x = Math.ceil(this.x);\r\n\t\tthis.y = Math.ceil(this.y);\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// @method trunc(): Point\r\n\t// Returns a copy of the current point with truncated coordinates (rounded towards zero).\r\n\ttrunc: function () {\r\n\t\treturn this.clone()._trunc();\r\n\t},\r\n\r\n\t_trunc: function () {\r\n\t\tthis.x = trunc(this.x);\r\n\t\tthis.y = trunc(this.y);\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// @method distanceTo(otherPoint: Point): Number\r\n\t// Returns the cartesian distance between the current and the given points.\r\n\tdistanceTo: function (point) {\r\n\t\tpoint = toPoint(point);\r\n\r\n\t\tvar x = point.x - this.x,\r\n\t\t    y = point.y - this.y;\r\n\r\n\t\treturn Math.sqrt(x * x + y * y);\r\n\t},\r\n\r\n\t// @method equals(otherPoint: Point): Boolean\r\n\t// Returns `true` if the given point has the same coordinates.\r\n\tequals: function (point) {\r\n\t\tpoint = toPoint(point);\r\n\r\n\t\treturn point.x === this.x &&\r\n\t\t       point.y === this.y;\r\n\t},\r\n\r\n\t// @method contains(otherPoint: Point): Boolean\r\n\t// Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).\r\n\tcontains: function (point) {\r\n\t\tpoint = toPoint(point);\r\n\r\n\t\treturn Math.abs(point.x) <= Math.abs(this.x) &&\r\n\t\t       Math.abs(point.y) <= Math.abs(this.y);\r\n\t},\r\n\r\n\t// @method toString(): String\r\n\t// Returns a string representation of the point for debugging purposes.\r\n\ttoString: function () {\r\n\t\treturn 'Point(' +\r\n\t\t        formatNum(this.x) + ', ' +\r\n\t\t        formatNum(this.y) + ')';\r\n\t}\r\n};\r\n\r\n// @factory L.point(x: Number, y: Number, round?: Boolean)\r\n// Creates a Point object with the given `x` and `y` coordinates. If optional `round` is set to true, rounds the `x` and `y` values.\r\n\r\n// @alternative\r\n// @factory L.point(coords: Number[])\r\n// Expects an array of the form `[x, y]` instead.\r\n\r\n// @alternative\r\n// @factory L.point(coords: Object)\r\n// Expects a plain object of the form `{x: Number, y: Number}` instead.\r\nfunction toPoint(x, y, round) {\r\n\tif (x instanceof Point) {\r\n\t\treturn x;\r\n\t}\r\n\tif (isArray(x)) {\r\n\t\treturn new Point(x[0], x[1]);\r\n\t}\r\n\tif (x === undefined || x === null) {\r\n\t\treturn x;\r\n\t}\r\n\tif (typeof x === 'object' && 'x' in x && 'y' in x) {\r\n\t\treturn new Point(x.x, x.y);\r\n\t}\r\n\treturn new Point(x, y, round);\r\n}\n\n/*\r\n * @class Bounds\r\n * @aka L.Bounds\r\n *\r\n * Represents a rectangular area in pixel coordinates.\r\n *\r\n * @example\r\n *\r\n * ```js\r\n * var p1 = L.point(10, 10),\r\n * p2 = L.point(40, 60),\r\n * bounds = L.bounds(p1, p2);\r\n * ```\r\n *\r\n * All Leaflet methods that accept `Bounds` objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:\r\n *\r\n * ```js\r\n * otherBounds.intersects([[10, 10], [40, 60]]);\r\n * ```\r\n *\r\n * Note that `Bounds` does not inherit from Leafet's `Class` object,\r\n * which means new classes can't inherit from it, and new methods\r\n * can't be added to it with the `include` function.\r\n */\r\n\r\nfunction Bounds(a, b) {\r\n\tif (!a) { return; }\r\n\r\n\tvar points = b ? [a, b] : a;\r\n\r\n\tfor (var i = 0, len = points.length; i < len; i++) {\r\n\t\tthis.extend(points[i]);\r\n\t}\r\n}\r\n\r\nBounds.prototype = {\r\n\t// @method extend(point: Point): this\r\n\t// Extends the bounds to contain the given point.\r\n\textend: function (point) { // (Point)\r\n\t\tpoint = toPoint(point);\r\n\r\n\t\t// @property min: Point\r\n\t\t// The top left corner of the rectangle.\r\n\t\t// @property max: Point\r\n\t\t// The bottom right corner of the rectangle.\r\n\t\tif (!this.min && !this.max) {\r\n\t\t\tthis.min = point.clone();\r\n\t\t\tthis.max = point.clone();\r\n\t\t} else {\r\n\t\t\tthis.min.x = Math.min(point.x, this.min.x);\r\n\t\t\tthis.max.x = Math.max(point.x, this.max.x);\r\n\t\t\tthis.min.y = Math.min(point.y, this.min.y);\r\n\t\t\tthis.max.y = Math.max(point.y, this.max.y);\r\n\t\t}\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// @method getCenter(round?: Boolean): Point\r\n\t// Returns the center point of the bounds.\r\n\tgetCenter: function (round) {\r\n\t\treturn new Point(\r\n\t\t        (this.min.x + this.max.x) / 2,\r\n\t\t        (this.min.y + this.max.y) / 2, round);\r\n\t},\r\n\r\n\t// @method getBottomLeft(): Point\r\n\t// Returns the bottom-left point of the bounds.\r\n\tgetBottomLeft: function () {\r\n\t\treturn new Point(this.min.x, this.max.y);\r\n\t},\r\n\r\n\t// @method getTopRight(): Point\r\n\t// Returns the top-right point of the bounds.\r\n\tgetTopRight: function () { // -> Point\r\n\t\treturn new Point(this.max.x, this.min.y);\r\n\t},\r\n\r\n\t// @method getTopLeft(): Point\r\n\t// Returns the top-left point of the bounds (i.e. [`this.min`](#bounds-min)).\r\n\tgetTopLeft: function () {\r\n\t\treturn this.min; // left, top\r\n\t},\r\n\r\n\t// @method getBottomRight(): Point\r\n\t// Returns the bottom-right point of the bounds (i.e. [`this.max`](#bounds-max)).\r\n\tgetBottomRight: function () {\r\n\t\treturn this.max; // right, bottom\r\n\t},\r\n\r\n\t// @method getSize(): Point\r\n\t// Returns the size of the given bounds\r\n\tgetSize: function () {\r\n\t\treturn this.max.subtract(this.min);\r\n\t},\r\n\r\n\t// @method contains(otherBounds: Bounds): Boolean\r\n\t// Returns `true` if the rectangle contains the given one.\r\n\t// @alternative\r\n\t// @method contains(point: Point): Boolean\r\n\t// Returns `true` if the rectangle contains the given point.\r\n\tcontains: function (obj) {\r\n\t\tvar min, max;\r\n\r\n\t\tif (typeof obj[0] === 'number' || obj instanceof Point) {\r\n\t\t\tobj = toPoint(obj);\r\n\t\t} else {\r\n\t\t\tobj = toBounds(obj);\r\n\t\t}\r\n\r\n\t\tif (obj instanceof Bounds) {\r\n\t\t\tmin = obj.min;\r\n\t\t\tmax = obj.max;\r\n\t\t} else {\r\n\t\t\tmin = max = obj;\r\n\t\t}\r\n\r\n\t\treturn (min.x >= this.min.x) &&\r\n\t\t       (max.x <= this.max.x) &&\r\n\t\t       (min.y >= this.min.y) &&\r\n\t\t       (max.y <= this.max.y);\r\n\t},\r\n\r\n\t// @method intersects(otherBounds: Bounds): Boolean\r\n\t// Returns `true` if the rectangle intersects the given bounds. Two bounds\r\n\t// intersect if they have at least one point in common.\r\n\tintersects: function (bounds) { // (Bounds) -> Boolean\r\n\t\tbounds = toBounds(bounds);\r\n\r\n\t\tvar min = this.min,\r\n\t\t    max = this.max,\r\n\t\t    min2 = bounds.min,\r\n\t\t    max2 = bounds.max,\r\n\t\t    xIntersects = (max2.x >= min.x) && (min2.x <= max.x),\r\n\t\t    yIntersects = (max2.y >= min.y) && (min2.y <= max.y);\r\n\r\n\t\treturn xIntersects && yIntersects;\r\n\t},\r\n\r\n\t// @method overlaps(otherBounds: Bounds): Boolean\r\n\t// Returns `true` if the rectangle overlaps the given bounds. Two bounds\r\n\t// overlap if their intersection is an area.\r\n\toverlaps: function (bounds) { // (Bounds) -> Boolean\r\n\t\tbounds = toBounds(bounds);\r\n\r\n\t\tvar min = this.min,\r\n\t\t    max = this.max,\r\n\t\t    min2 = bounds.min,\r\n\t\t    max2 = bounds.max,\r\n\t\t    xOverlaps = (max2.x > min.x) && (min2.x < max.x),\r\n\t\t    yOverlaps = (max2.y > min.y) && (min2.y < max.y);\r\n\r\n\t\treturn xOverlaps && yOverlaps;\r\n\t},\r\n\r\n\tisValid: function () {\r\n\t\treturn !!(this.min && this.max);\r\n\t}\r\n};\r\n\r\n\r\n// @factory L.bounds(corner1: Point, corner2: Point)\r\n// Creates a Bounds object from two corners coordinate pairs.\r\n// @alternative\r\n// @factory L.bounds(points: Point[])\r\n// Creates a Bounds object from the given array of points.\r\nfunction toBounds(a, b) {\r\n\tif (!a || a instanceof Bounds) {\r\n\t\treturn a;\r\n\t}\r\n\treturn new Bounds(a, b);\r\n}\n\n/*\r\n * @class LatLngBounds\r\n * @aka L.LatLngBounds\r\n *\r\n * Represents a rectangular geographical area on a map.\r\n *\r\n * @example\r\n *\r\n * ```js\r\n * var corner1 = L.latLng(40.712, -74.227),\r\n * corner2 = L.latLng(40.774, -74.125),\r\n * bounds = L.latLngBounds(corner1, corner2);\r\n * ```\r\n *\r\n * All Leaflet methods that accept LatLngBounds objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:\r\n *\r\n * ```js\r\n * map.fitBounds([\r\n * \t[40.712, -74.227],\r\n * \t[40.774, -74.125]\r\n * ]);\r\n * ```\r\n *\r\n * Caution: if the area crosses the antimeridian (often confused with the International Date Line), you must specify corners _outside_ the [-180, 180] degrees longitude range.\r\n *\r\n * Note that `LatLngBounds` does not inherit from Leafet's `Class` object,\r\n * which means new classes can't inherit from it, and new methods\r\n * can't be added to it with the `include` function.\r\n */\r\n\r\nfunction LatLngBounds(corner1, corner2) { // (LatLng, LatLng) or (LatLng[])\r\n\tif (!corner1) { return; }\r\n\r\n\tvar latlngs = corner2 ? [corner1, corner2] : corner1;\r\n\r\n\tfor (var i = 0, len = latlngs.length; i < len; i++) {\r\n\t\tthis.extend(latlngs[i]);\r\n\t}\r\n}\r\n\r\nLatLngBounds.prototype = {\r\n\r\n\t// @method extend(latlng: LatLng): this\r\n\t// Extend the bounds to contain the given point\r\n\r\n\t// @alternative\r\n\t// @method extend(otherBounds: LatLngBounds): this\r\n\t// Extend the bounds to contain the given bounds\r\n\textend: function (obj) {\r\n\t\tvar sw = this._southWest,\r\n\t\t    ne = this._northEast,\r\n\t\t    sw2, ne2;\r\n\r\n\t\tif (obj instanceof LatLng) {\r\n\t\t\tsw2 = obj;\r\n\t\t\tne2 = obj;\r\n\r\n\t\t} else if (obj instanceof LatLngBounds) {\r\n\t\t\tsw2 = obj._southWest;\r\n\t\t\tne2 = obj._northEast;\r\n\r\n\t\t\tif (!sw2 || !ne2) { return this; }\r\n\r\n\t\t} else {\r\n\t\t\treturn obj ? this.extend(toLatLng(obj) || toLatLngBounds(obj)) : this;\r\n\t\t}\r\n\r\n\t\tif (!sw && !ne) {\r\n\t\t\tthis._southWest = new LatLng(sw2.lat, sw2.lng);\r\n\t\t\tthis._northEast = new LatLng(ne2.lat, ne2.lng);\r\n\t\t} else {\r\n\t\t\tsw.lat = Math.min(sw2.lat, sw.lat);\r\n\t\t\tsw.lng = Math.min(sw2.lng, sw.lng);\r\n\t\t\tne.lat = Math.max(ne2.lat, ne.lat);\r\n\t\t\tne.lng = Math.max(ne2.lng, ne.lng);\r\n\t\t}\r\n\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// @method pad(bufferRatio: Number): LatLngBounds\r\n\t// Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.\r\n\t// For example, a ratio of 0.5 extends the bounds by 50% in each direction.\r\n\t// Negative values will retract the bounds.\r\n\tpad: function (bufferRatio) {\r\n\t\tvar sw = this._southWest,\r\n\t\t    ne = this._northEast,\r\n\t\t    heightBuffer = Math.abs(sw.lat - ne.lat) * bufferRatio,\r\n\t\t    widthBuffer = Math.abs(sw.lng - ne.lng) * bufferRatio;\r\n\r\n\t\treturn new LatLngBounds(\r\n\t\t        new LatLng(sw.lat - heightBuffer, sw.lng - widthBuffer),\r\n\t\t        new LatLng(ne.lat + heightBuffer, ne.lng + widthBuffer));\r\n\t},\r\n\r\n\t// @method getCenter(): LatLng\r\n\t// Returns the center point of the bounds.\r\n\tgetCenter: function () {\r\n\t\treturn new LatLng(\r\n\t\t        (this._southWest.lat + this._northEast.lat) / 2,\r\n\t\t        (this._southWest.lng + this._northEast.lng) / 2);\r\n\t},\r\n\r\n\t// @method getSouthWest(): LatLng\r\n\t// Returns the south-west point of the bounds.\r\n\tgetSouthWest: function () {\r\n\t\treturn this._southWest;\r\n\t},\r\n\r\n\t// @method getNorthEast(): LatLng\r\n\t// Returns the north-east point of the bounds.\r\n\tgetNorthEast: function () {\r\n\t\treturn this._northEast;\r\n\t},\r\n\r\n\t// @method getNorthWest(): LatLng\r\n\t// Returns the north-west point of the bounds.\r\n\tgetNorthWest: function () {\r\n\t\treturn new LatLng(this.getNorth(), this.getWest());\r\n\t},\r\n\r\n\t// @method getSouthEast(): LatLng\r\n\t// Returns the south-east point of the bounds.\r\n\tgetSouthEast: function () {\r\n\t\treturn new LatLng(this.getSouth(), this.getEast());\r\n\t},\r\n\r\n\t// @method getWest(): Number\r\n\t// Returns the west longitude of the bounds\r\n\tgetWest: function () {\r\n\t\treturn this._southWest.lng;\r\n\t},\r\n\r\n\t// @method getSouth(): Number\r\n\t// Returns the south latitude of the bounds\r\n\tgetSouth: function () {\r\n\t\treturn this._southWest.lat;\r\n\t},\r\n\r\n\t// @method getEast(): Number\r\n\t// Returns the east longitude of the bounds\r\n\tgetEast: function () {\r\n\t\treturn this._northEast.lng;\r\n\t},\r\n\r\n\t// @method getNorth(): Number\r\n\t// Returns the north latitude of the bounds\r\n\tgetNorth: function () {\r\n\t\treturn this._northEast.lat;\r\n\t},\r\n\r\n\t// @method contains(otherBounds: LatLngBounds): Boolean\r\n\t// Returns `true` if the rectangle contains the given one.\r\n\r\n\t// @alternative\r\n\t// @method contains (latlng: LatLng): Boolean\r\n\t// Returns `true` if the rectangle contains the given point.\r\n\tcontains: function (obj) { // (LatLngBounds) or (LatLng) -> Boolean\r\n\t\tif (typeof obj[0] === 'number' || obj instanceof LatLng || 'lat' in obj) {\r\n\t\t\tobj = toLatLng(obj);\r\n\t\t} else {\r\n\t\t\tobj = toLatLngBounds(obj);\r\n\t\t}\r\n\r\n\t\tvar sw = this._southWest,\r\n\t\t    ne = this._northEast,\r\n\t\t    sw2, ne2;\r\n\r\n\t\tif (obj instanceof LatLngBounds) {\r\n\t\t\tsw2 = obj.getSouthWest();\r\n\t\t\tne2 = obj.getNorthEast();\r\n\t\t} else {\r\n\t\t\tsw2 = ne2 = obj;\r\n\t\t}\r\n\r\n\t\treturn (sw2.lat >= sw.lat) && (ne2.lat <= ne.lat) &&\r\n\t\t       (sw2.lng >= sw.lng) && (ne2.lng <= ne.lng);\r\n\t},\r\n\r\n\t// @method intersects(otherBounds: LatLngBounds): Boolean\r\n\t// Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.\r\n\tintersects: function (bounds) {\r\n\t\tbounds = toLatLngBounds(bounds);\r\n\r\n\t\tvar sw = this._southWest,\r\n\t\t    ne = this._northEast,\r\n\t\t    sw2 = bounds.getSouthWest(),\r\n\t\t    ne2 = bounds.getNorthEast(),\r\n\r\n\t\t    latIntersects = (ne2.lat >= sw.lat) && (sw2.lat <= ne.lat),\r\n\t\t    lngIntersects = (ne2.lng >= sw.lng) && (sw2.lng <= ne.lng);\r\n\r\n\t\treturn latIntersects && lngIntersects;\r\n\t},\r\n\r\n\t// @method overlaps(otherBounds: Bounds): Boolean\r\n\t// Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.\r\n\toverlaps: function (bounds) {\r\n\t\tbounds = toLatLngBounds(bounds);\r\n\r\n\t\tvar sw = this._southWest,\r\n\t\t    ne = this._northEast,\r\n\t\t    sw2 = bounds.getSouthWest(),\r\n\t\t    ne2 = bounds.getNorthEast(),\r\n\r\n\t\t    latOverlaps = (ne2.lat > sw.lat) && (sw2.lat < ne.lat),\r\n\t\t    lngOverlaps = (ne2.lng > sw.lng) && (sw2.lng < ne.lng);\r\n\r\n\t\treturn latOverlaps && lngOverlaps;\r\n\t},\r\n\r\n\t// @method toBBoxString(): String\r\n\t// Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.\r\n\ttoBBoxString: function () {\r\n\t\treturn [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(',');\r\n\t},\r\n\r\n\t// @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean\r\n\t// Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.\r\n\tequals: function (bounds, maxMargin) {\r\n\t\tif (!bounds) { return false; }\r\n\r\n\t\tbounds = toLatLngBounds(bounds);\r\n\r\n\t\treturn this._southWest.equals(bounds.getSouthWest(), maxMargin) &&\r\n\t\t       this._northEast.equals(bounds.getNorthEast(), maxMargin);\r\n\t},\r\n\r\n\t// @method isValid(): Boolean\r\n\t// Returns `true` if the bounds are properly initialized.\r\n\tisValid: function () {\r\n\t\treturn !!(this._southWest && this._northEast);\r\n\t}\r\n};\r\n\r\n// TODO International date line?\r\n\r\n// @factory L.latLngBounds(corner1: LatLng, corner2: LatLng)\r\n// Creates a `LatLngBounds` object by defining two diagonally opposite corners of the rectangle.\r\n\r\n// @alternative\r\n// @factory L.latLngBounds(latlngs: LatLng[])\r\n// Creates a `LatLngBounds` object defined by the geographical points it contains. Very useful for zooming the map to fit a particular set of locations with [`fitBounds`](#map-fitbounds).\r\nfunction toLatLngBounds(a, b) {\r\n\tif (a instanceof LatLngBounds) {\r\n\t\treturn a;\r\n\t}\r\n\treturn new LatLngBounds(a, b);\r\n}\n\n/* @class LatLng\r\n * @aka L.LatLng\r\n *\r\n * Represents a geographical point with a certain latitude and longitude.\r\n *\r\n * @example\r\n *\r\n * ```\r\n * var latlng = L.latLng(50.5, 30.5);\r\n * ```\r\n *\r\n * All Leaflet methods that accept LatLng objects also accept them in a simple Array form and simple object form (unless noted otherwise), so these lines are equivalent:\r\n *\r\n * ```\r\n * map.panTo([50, 30]);\r\n * map.panTo({lon: 30, lat: 50});\r\n * map.panTo({lat: 50, lng: 30});\r\n * map.panTo(L.latLng(50, 30));\r\n * ```\r\n *\r\n * Note that `LatLng` does not inherit from Leaflet's `Class` object,\r\n * which means new classes can't inherit from it, and new methods\r\n * can't be added to it with the `include` function.\r\n */\r\n\r\nfunction LatLng(lat, lng, alt) {\r\n\tif (isNaN(lat) || isNaN(lng)) {\r\n\t\tthrow new Error('Invalid LatLng object: (' + lat + ', ' + lng + ')');\r\n\t}\r\n\r\n\t// @property lat: Number\r\n\t// Latitude in degrees\r\n\tthis.lat = +lat;\r\n\r\n\t// @property lng: Number\r\n\t// Longitude in degrees\r\n\tthis.lng = +lng;\r\n\r\n\t// @property alt: Number\r\n\t// Altitude in meters (optional)\r\n\tif (alt !== undefined) {\r\n\t\tthis.alt = +alt;\r\n\t}\r\n}\r\n\r\nLatLng.prototype = {\r\n\t// @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean\r\n\t// Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.\r\n\tequals: function (obj, maxMargin) {\r\n\t\tif (!obj) { return false; }\r\n\r\n\t\tobj = toLatLng(obj);\r\n\r\n\t\tvar margin = Math.max(\r\n\t\t        Math.abs(this.lat - obj.lat),\r\n\t\t        Math.abs(this.lng - obj.lng));\r\n\r\n\t\treturn margin <= (maxMargin === undefined ? 1.0E-9 : maxMargin);\r\n\t},\r\n\r\n\t// @method toString(): String\r\n\t// Returns a string representation of the point (for debugging purposes).\r\n\ttoString: function (precision) {\r\n\t\treturn 'LatLng(' +\r\n\t\t        formatNum(this.lat, precision) + ', ' +\r\n\t\t        formatNum(this.lng, precision) + ')';\r\n\t},\r\n\r\n\t// @method distanceTo(otherLatLng: LatLng): Number\r\n\t// Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).\r\n\tdistanceTo: function (other) {\r\n\t\treturn Earth.distance(this, toLatLng(other));\r\n\t},\r\n\r\n\t// @method wrap(): LatLng\r\n\t// Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.\r\n\twrap: function () {\r\n\t\treturn Earth.wrapLatLng(this);\r\n\t},\r\n\r\n\t// @method toBounds(sizeInMeters: Number): LatLngBounds\r\n\t// Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.\r\n\ttoBounds: function (sizeInMeters) {\r\n\t\tvar latAccuracy = 180 * sizeInMeters / 40075017,\r\n\t\t    lngAccuracy = latAccuracy / Math.cos((Math.PI / 180) * this.lat);\r\n\r\n\t\treturn toLatLngBounds(\r\n\t\t        [this.lat - latAccuracy, this.lng - lngAccuracy],\r\n\t\t        [this.lat + latAccuracy, this.lng + lngAccuracy]);\r\n\t},\r\n\r\n\tclone: function () {\r\n\t\treturn new LatLng(this.lat, this.lng, this.alt);\r\n\t}\r\n};\r\n\r\n\r\n\r\n// @factory L.latLng(latitude: Number, longitude: Number, altitude?: Number): LatLng\r\n// Creates an object representing a geographical point with the given latitude and longitude (and optionally altitude).\r\n\r\n// @alternative\r\n// @factory L.latLng(coords: Array): LatLng\r\n// Expects an array of the form `[Number, Number]` or `[Number, Number, Number]` instead.\r\n\r\n// @alternative\r\n// @factory L.latLng(coords: Object): LatLng\r\n// Expects an plain object of the form `{lat: Number, lng: Number}` or `{lat: Number, lng: Number, alt: Number}` instead.\r\n\r\nfunction toLatLng(a, b, c) {\r\n\tif (a instanceof LatLng) {\r\n\t\treturn a;\r\n\t}\r\n\tif (isArray(a) && typeof a[0] !== 'object') {\r\n\t\tif (a.length === 3) {\r\n\t\t\treturn new LatLng(a[0], a[1], a[2]);\r\n\t\t}\r\n\t\tif (a.length === 2) {\r\n\t\t\treturn new LatLng(a[0], a[1]);\r\n\t\t}\r\n\t\treturn null;\r\n\t}\r\n\tif (a === undefined || a === null) {\r\n\t\treturn a;\r\n\t}\r\n\tif (typeof a === 'object' && 'lat' in a) {\r\n\t\treturn new LatLng(a.lat, 'lng' in a ? a.lng : a.lon, a.alt);\r\n\t}\r\n\tif (b === undefined) {\r\n\t\treturn null;\r\n\t}\r\n\treturn new LatLng(a, b, c);\r\n}\n\n/*\r\n * @namespace CRS\r\n * @crs L.CRS.Base\r\n * Object that defines coordinate reference systems for projecting\r\n * geographical points into pixel (screen) coordinates and back (and to\r\n * coordinates in other units for [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services). See\r\n * [spatial reference system](http://en.wikipedia.org/wiki/Coordinate_reference_system).\r\n *\r\n * Leaflet defines the most usual CRSs by default. If you want to use a\r\n * CRS not defined by default, take a look at the\r\n * [Proj4Leaflet](https://github.com/kartena/Proj4Leaflet) plugin.\r\n *\r\n * Note that the CRS instances do not inherit from Leafet's `Class` object,\r\n * and can't be instantiated. Also, new classes can't inherit from them,\r\n * and methods can't be added to them with the `include` function.\r\n */\r\n\r\nvar CRS = {\r\n\t// @method latLngToPoint(latlng: LatLng, zoom: Number): Point\r\n\t// Projects geographical coordinates into pixel coordinates for a given zoom.\r\n\tlatLngToPoint: function (latlng, zoom) {\r\n\t\tvar projectedPoint = this.projection.project(latlng),\r\n\t\t    scale = this.scale(zoom);\r\n\r\n\t\treturn this.transformation._transform(projectedPoint, scale);\r\n\t},\r\n\r\n\t// @method pointToLatLng(point: Point, zoom: Number): LatLng\r\n\t// The inverse of `latLngToPoint`. Projects pixel coordinates on a given\r\n\t// zoom into geographical coordinates.\r\n\tpointToLatLng: function (point, zoom) {\r\n\t\tvar scale = this.scale(zoom),\r\n\t\t    untransformedPoint = this.transformation.untransform(point, scale);\r\n\r\n\t\treturn this.projection.unproject(untransformedPoint);\r\n\t},\r\n\r\n\t// @method project(latlng: LatLng): Point\r\n\t// Projects geographical coordinates into coordinates in units accepted for\r\n\t// this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).\r\n\tproject: function (latlng) {\r\n\t\treturn this.projection.project(latlng);\r\n\t},\r\n\r\n\t// @method unproject(point: Point): LatLng\r\n\t// Given a projected coordinate returns the corresponding LatLng.\r\n\t// The inverse of `project`.\r\n\tunproject: function (point) {\r\n\t\treturn this.projection.unproject(point);\r\n\t},\r\n\r\n\t// @method scale(zoom: Number): Number\r\n\t// Returns the scale used when transforming projected coordinates into\r\n\t// pixel coordinates for a particular zoom. For example, it returns\r\n\t// `256 * 2^zoom` for Mercator-based CRS.\r\n\tscale: function (zoom) {\r\n\t\treturn 256 * Math.pow(2, zoom);\r\n\t},\r\n\r\n\t// @method zoom(scale: Number): Number\r\n\t// Inverse of `scale()`, returns the zoom level corresponding to a scale\r\n\t// factor of `scale`.\r\n\tzoom: function (scale) {\r\n\t\treturn Math.log(scale / 256) / Math.LN2;\r\n\t},\r\n\r\n\t// @method getProjectedBounds(zoom: Number): Bounds\r\n\t// Returns the projection's bounds scaled and transformed for the provided `zoom`.\r\n\tgetProjectedBounds: function (zoom) {\r\n\t\tif (this.infinite) { return null; }\r\n\r\n\t\tvar b = this.projection.bounds,\r\n\t\t    s = this.scale(zoom),\r\n\t\t    min = this.transformation.transform(b.min, s),\r\n\t\t    max = this.transformation.transform(b.max, s);\r\n\r\n\t\treturn new Bounds(min, max);\r\n\t},\r\n\r\n\t// @method distance(latlng1: LatLng, latlng2: LatLng): Number\r\n\t// Returns the distance between two geographical coordinates.\r\n\r\n\t// @property code: String\r\n\t// Standard code name of the CRS passed into WMS services (e.g. `'EPSG:3857'`)\r\n\t//\r\n\t// @property wrapLng: Number[]\r\n\t// An array of two numbers defining whether the longitude (horizontal) coordinate\r\n\t// axis wraps around a given range and how. Defaults to `[-180, 180]` in most\r\n\t// geographical CRSs. If `undefined`, the longitude axis does not wrap around.\r\n\t//\r\n\t// @property wrapLat: Number[]\r\n\t// Like `wrapLng`, but for the latitude (vertical) axis.\r\n\r\n\t// wrapLng: [min, max],\r\n\t// wrapLat: [min, max],\r\n\r\n\t// @property infinite: Boolean\r\n\t// If true, the coordinate space will be unbounded (infinite in both axes)\r\n\tinfinite: false,\r\n\r\n\t// @method wrapLatLng(latlng: LatLng): LatLng\r\n\t// Returns a `LatLng` where lat and lng has been wrapped according to the\r\n\t// CRS's `wrapLat` and `wrapLng` properties, if they are outside the CRS's bounds.\r\n\twrapLatLng: function (latlng) {\r\n\t\tvar lng = this.wrapLng ? wrapNum(latlng.lng, this.wrapLng, true) : latlng.lng,\r\n\t\t    lat = this.wrapLat ? wrapNum(latlng.lat, this.wrapLat, true) : latlng.lat,\r\n\t\t    alt = latlng.alt;\r\n\r\n\t\treturn new LatLng(lat, lng, alt);\r\n\t},\r\n\r\n\t// @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds\r\n\t// Returns a `LatLngBounds` with the same size as the given one, ensuring\r\n\t// that its center is within the CRS's bounds.\r\n\t// Only accepts actual `L.LatLngBounds` instances, not arrays.\r\n\twrapLatLngBounds: function (bounds) {\r\n\t\tvar center = bounds.getCenter(),\r\n\t\t    newCenter = this.wrapLatLng(center),\r\n\t\t    latShift = center.lat - newCenter.lat,\r\n\t\t    lngShift = center.lng - newCenter.lng;\r\n\r\n\t\tif (latShift === 0 && lngShift === 0) {\r\n\t\t\treturn bounds;\r\n\t\t}\r\n\r\n\t\tvar sw = bounds.getSouthWest(),\r\n\t\t    ne = bounds.getNorthEast(),\r\n\t\t    newSw = new LatLng(sw.lat - latShift, sw.lng - lngShift),\r\n\t\t    newNe = new LatLng(ne.lat - latShift, ne.lng - lngShift);\r\n\r\n\t\treturn new LatLngBounds(newSw, newNe);\r\n\t}\r\n};\n\n/*\n * @namespace CRS\n * @crs L.CRS.Earth\n *\n * Serves as the base for CRS that are global such that they cover the earth.\n * Can only be used as the base for other CRS and cannot be used directly,\n * since it does not have a `code`, `projection` or `transformation`. `distance()` returns\n * meters.\n */\n\nvar Earth = extend({}, CRS, {\n\twrapLng: [-180, 180],\n\n\t// Mean Earth Radius, as recommended for use by\n\t// the International Union of Geodesy and Geophysics,\n\t// see http://rosettacode.org/wiki/Haversine_formula\n\tR: 6371000,\n\n\t// distance between two geographical points using spherical law of cosines approximation\n\tdistance: function (latlng1, latlng2) {\n\t\tvar rad = Math.PI / 180,\n\t\t    lat1 = latlng1.lat * rad,\n\t\t    lat2 = latlng2.lat * rad,\n\t\t    sinDLat = Math.sin((latlng2.lat - latlng1.lat) * rad / 2),\n\t\t    sinDLon = Math.sin((latlng2.lng - latlng1.lng) * rad / 2),\n\t\t    a = sinDLat * sinDLat + Math.cos(lat1) * Math.cos(lat2) * sinDLon * sinDLon,\n\t\t    c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));\n\t\treturn this.R * c;\n\t}\n});\n\n/*\r\n * @namespace Projection\r\n * @projection L.Projection.SphericalMercator\r\n *\r\n * Spherical Mercator projection — the most common projection for online maps,\r\n * used by almost all free and commercial tile providers. Assumes that Earth is\r\n * a sphere. Used by the `EPSG:3857` CRS.\r\n */\r\n\r\nvar SphericalMercator = {\r\n\r\n\tR: 6378137,\r\n\tMAX_LATITUDE: 85.0511287798,\r\n\r\n\tproject: function (latlng) {\r\n\t\tvar d = Math.PI / 180,\r\n\t\t    max = this.MAX_LATITUDE,\r\n\t\t    lat = Math.max(Math.min(max, latlng.lat), -max),\r\n\t\t    sin = Math.sin(lat * d);\r\n\r\n\t\treturn new Point(\r\n\t\t\tthis.R * latlng.lng * d,\r\n\t\t\tthis.R * Math.log((1 + sin) / (1 - sin)) / 2);\r\n\t},\r\n\r\n\tunproject: function (point) {\r\n\t\tvar d = 180 / Math.PI;\r\n\r\n\t\treturn new LatLng(\r\n\t\t\t(2 * Math.atan(Math.exp(point.y / this.R)) - (Math.PI / 2)) * d,\r\n\t\t\tpoint.x * d / this.R);\r\n\t},\r\n\r\n\tbounds: (function () {\r\n\t\tvar d = 6378137 * Math.PI;\r\n\t\treturn new Bounds([-d, -d], [d, d]);\r\n\t})()\r\n};\n\n/*\r\n * @class Transformation\r\n * @aka L.Transformation\r\n *\r\n * Represents an affine transformation: a set of coefficients `a`, `b`, `c`, `d`\r\n * for transforming a point of a form `(x, y)` into `(a*x + b, c*y + d)` and doing\r\n * the reverse. Used by Leaflet in its projections code.\r\n *\r\n * @example\r\n *\r\n * ```js\r\n * var transformation = L.transformation(2, 5, -1, 10),\r\n * \tp = L.point(1, 2),\r\n * \tp2 = transformation.transform(p), //  L.point(7, 8)\r\n * \tp3 = transformation.untransform(p2); //  L.point(1, 2)\r\n * ```\r\n */\r\n\r\n\r\n// factory new L.Transformation(a: Number, b: Number, c: Number, d: Number)\r\n// Creates a `Transformation` object with the given coefficients.\r\nfunction Transformation(a, b, c, d) {\r\n\tif (isArray(a)) {\r\n\t\t// use array properties\r\n\t\tthis._a = a[0];\r\n\t\tthis._b = a[1];\r\n\t\tthis._c = a[2];\r\n\t\tthis._d = a[3];\r\n\t\treturn;\r\n\t}\r\n\tthis._a = a;\r\n\tthis._b = b;\r\n\tthis._c = c;\r\n\tthis._d = d;\r\n}\r\n\r\nTransformation.prototype = {\r\n\t// @method transform(point: Point, scale?: Number): Point\r\n\t// Returns a transformed point, optionally multiplied by the given scale.\r\n\t// Only accepts actual `L.Point` instances, not arrays.\r\n\ttransform: function (point, scale) { // (Point, Number) -> Point\r\n\t\treturn this._transform(point.clone(), scale);\r\n\t},\r\n\r\n\t// destructive transform (faster)\r\n\t_transform: function (point, scale) {\r\n\t\tscale = scale || 1;\r\n\t\tpoint.x = scale * (this._a * point.x + this._b);\r\n\t\tpoint.y = scale * (this._c * point.y + this._d);\r\n\t\treturn point;\r\n\t},\r\n\r\n\t// @method untransform(point: Point, scale?: Number): Point\r\n\t// Returns the reverse transformation of the given point, optionally divided\r\n\t// by the given scale. Only accepts actual `L.Point` instances, not arrays.\r\n\tuntransform: function (point, scale) {\r\n\t\tscale = scale || 1;\r\n\t\treturn new Point(\r\n\t\t        (point.x / scale - this._b) / this._a,\r\n\t\t        (point.y / scale - this._d) / this._c);\r\n\t}\r\n};\r\n\r\n// factory L.transformation(a: Number, b: Number, c: Number, d: Number)\r\n\r\n// @factory L.transformation(a: Number, b: Number, c: Number, d: Number)\r\n// Instantiates a Transformation object with the given coefficients.\r\n\r\n// @alternative\r\n// @factory L.transformation(coefficients: Array): Transformation\r\n// Expects an coefficients array of the form\r\n// `[a: Number, b: Number, c: Number, d: Number]`.\r\n\r\nfunction toTransformation(a, b, c, d) {\r\n\treturn new Transformation(a, b, c, d);\r\n}\n\n/*\r\n * @namespace CRS\r\n * @crs L.CRS.EPSG3857\r\n *\r\n * The most common CRS for online maps, used by almost all free and commercial\r\n * tile providers. Uses Spherical Mercator projection. Set in by default in\r\n * Map's `crs` option.\r\n */\r\n\r\nvar EPSG3857 = extend({}, Earth, {\r\n\tcode: 'EPSG:3857',\r\n\tprojection: SphericalMercator,\r\n\r\n\ttransformation: (function () {\r\n\t\tvar scale = 0.5 / (Math.PI * SphericalMercator.R);\r\n\t\treturn toTransformation(scale, 0.5, -scale, 0.5);\r\n\t}())\r\n});\r\n\r\nvar EPSG900913 = extend({}, EPSG3857, {\r\n\tcode: 'EPSG:900913'\r\n});\n\n// @namespace SVG; @section\n// There are several static functions which can be called without instantiating L.SVG:\n\n// @function create(name: String): SVGElement\n// Returns a instance of [SVGElement](https://developer.mozilla.org/docs/Web/API/SVGElement),\n// corresponding to the class name passed. For example, using 'line' will return\n// an instance of [SVGLineElement](https://developer.mozilla.org/docs/Web/API/SVGLineElement).\nfunction svgCreate(name) {\n\treturn document.createElementNS('http://www.w3.org/2000/svg', name);\n}\n\n// @function pointsToPath(rings: Point[], closed: Boolean): String\n// Generates a SVG path string for multiple rings, with each ring turning\n// into \"M..L..L..\" instructions\nfunction pointsToPath(rings, closed) {\n\tvar str = '',\n\ti, j, len, len2, points, p;\n\n\tfor (i = 0, len = rings.length; i < len; i++) {\n\t\tpoints = rings[i];\n\n\t\tfor (j = 0, len2 = points.length; j < len2; j++) {\n\t\t\tp = points[j];\n\t\t\tstr += (j ? 'L' : 'M') + p.x + ' ' + p.y;\n\t\t}\n\n\t\t// closes the ring for polygons; \"x\" is VML syntax\n\t\tstr += closed ? (svg ? 'z' : 'x') : '';\n\t}\n\n\t// SVG complains about empty path strings\n\treturn str || 'M0 0';\n}\n\n/*\r\n * @namespace Browser\r\n * @aka L.Browser\r\n *\r\n * A namespace with static properties for browser/feature detection used by Leaflet internally.\r\n *\r\n * @example\r\n *\r\n * ```js\r\n * if (L.Browser.ielt9) {\r\n *   alert('Upgrade your browser, dude!');\r\n * }\r\n * ```\r\n */\r\n\r\nvar style$1 = document.documentElement.style;\r\n\r\n// @property ie: Boolean; `true` for all Internet Explorer versions (not Edge).\r\nvar ie = 'ActiveXObject' in window;\r\n\r\n// @property ielt9: Boolean; `true` for Internet Explorer versions less than 9.\r\nvar ielt9 = ie && !document.addEventListener;\r\n\r\n// @property edge: Boolean; `true` for the Edge web browser.\r\nvar edge = 'msLaunchUri' in navigator && !('documentMode' in document);\r\n\r\n// @property webkit: Boolean;\r\n// `true` for webkit-based browsers like Chrome and Safari (including mobile versions).\r\nvar webkit = userAgentContains('webkit');\r\n\r\n// @property android: Boolean\r\n// `true` for any browser running on an Android platform.\r\nvar android = userAgentContains('android');\r\n\r\n// @property android23: Boolean; `true` for browsers running on Android 2 or Android 3.\r\nvar android23 = userAgentContains('android 2') || userAgentContains('android 3');\r\n\r\n/* See https://stackoverflow.com/a/17961266 for details on detecting stock Android */\r\nvar webkitVer = parseInt(/WebKit\\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10); // also matches AppleWebKit\r\n// @property androidStock: Boolean; `true` for the Android stock browser (i.e. not Chrome)\r\nvar androidStock = android && userAgentContains('Google') && webkitVer < 537 && !('AudioNode' in window);\r\n\r\n// @property opera: Boolean; `true` for the Opera browser\r\nvar opera = !!window.opera;\r\n\r\n// @property chrome: Boolean; `true` for the Chrome browser.\r\nvar chrome = userAgentContains('chrome');\r\n\r\n// @property gecko: Boolean; `true` for gecko-based browsers like Firefox.\r\nvar gecko = userAgentContains('gecko') && !webkit && !opera && !ie;\r\n\r\n// @property safari: Boolean; `true` for the Safari browser.\r\nvar safari = !chrome && userAgentContains('safari');\r\n\r\nvar phantom = userAgentContains('phantom');\r\n\r\n// @property opera12: Boolean\r\n// `true` for the Opera browser supporting CSS transforms (version 12 or later).\r\nvar opera12 = 'OTransition' in style$1;\r\n\r\n// @property win: Boolean; `true` when the browser is running in a Windows platform\r\nvar win = navigator.platform.indexOf('Win') === 0;\r\n\r\n// @property ie3d: Boolean; `true` for all Internet Explorer versions supporting CSS transforms.\r\nvar ie3d = ie && ('transition' in style$1);\r\n\r\n// @property webkit3d: Boolean; `true` for webkit-based browsers supporting CSS transforms.\r\nvar webkit3d = ('WebKitCSSMatrix' in window) && ('m11' in new window.WebKitCSSMatrix()) && !android23;\r\n\r\n// @property gecko3d: Boolean; `true` for gecko-based browsers supporting CSS transforms.\r\nvar gecko3d = 'MozPerspective' in style$1;\r\n\r\n// @property any3d: Boolean\r\n// `true` for all browsers supporting CSS transforms.\r\nvar any3d = !window.L_DISABLE_3D && (ie3d || webkit3d || gecko3d) && !opera12 && !phantom;\r\n\r\n// @property mobile: Boolean; `true` for all browsers running in a mobile device.\r\nvar mobile = typeof orientation !== 'undefined' || userAgentContains('mobile');\r\n\r\n// @property mobileWebkit: Boolean; `true` for all webkit-based browsers in a mobile device.\r\nvar mobileWebkit = mobile && webkit;\r\n\r\n// @property mobileWebkit3d: Boolean\r\n// `true` for all webkit-based browsers in a mobile device supporting CSS transforms.\r\nvar mobileWebkit3d = mobile && webkit3d;\r\n\r\n// @property msPointer: Boolean\r\n// `true` for browsers implementing the Microsoft touch events model (notably IE10).\r\nvar msPointer = !window.PointerEvent && window.MSPointerEvent;\r\n\r\n// @property pointer: Boolean\r\n// `true` for all browsers supporting [pointer events](https://msdn.microsoft.com/en-us/library/dn433244%28v=vs.85%29.aspx).\r\nvar pointer = !!(window.PointerEvent || msPointer);\r\n\r\n// @property touch: Boolean\r\n// `true` for all browsers supporting [touch events](https://developer.mozilla.org/docs/Web/API/Touch_events).\r\n// This does not necessarily mean that the browser is running in a computer with\r\n// a touchscreen, it only means that the browser is capable of understanding\r\n// touch events.\r\nvar touch = !window.L_NO_TOUCH && (pointer || 'ontouchstart' in window ||\r\n\t\t(window.DocumentTouch && document instanceof window.DocumentTouch));\r\n\r\n// @property mobileOpera: Boolean; `true` for the Opera browser in a mobile device.\r\nvar mobileOpera = mobile && opera;\r\n\r\n// @property mobileGecko: Boolean\r\n// `true` for gecko-based browsers running in a mobile device.\r\nvar mobileGecko = mobile && gecko;\r\n\r\n// @property retina: Boolean\r\n// `true` for browsers on a high-resolution \"retina\" screen or on any screen when browser's display zoom is more than 100%.\r\nvar retina = (window.devicePixelRatio || (window.screen.deviceXDPI / window.screen.logicalXDPI)) > 1;\r\n\r\n\r\n// @property canvas: Boolean\r\n// `true` when the browser supports [`<canvas>`](https://developer.mozilla.org/docs/Web/API/Canvas_API).\r\nvar canvas = (function () {\r\n\treturn !!document.createElement('canvas').getContext;\r\n}());\r\n\r\n// @property svg: Boolean\r\n// `true` when the browser supports [SVG](https://developer.mozilla.org/docs/Web/SVG).\r\nvar svg = !!(document.createElementNS && svgCreate('svg').createSVGRect);\r\n\r\n// @property vml: Boolean\r\n// `true` if the browser supports [VML](https://en.wikipedia.org/wiki/Vector_Markup_Language).\r\nvar vml = !svg && (function () {\r\n\ttry {\r\n\t\tvar div = document.createElement('div');\r\n\t\tdiv.innerHTML = '<v:shape adj=\"1\"/>';\r\n\r\n\t\tvar shape = div.firstChild;\r\n\t\tshape.style.behavior = 'url(#default#VML)';\r\n\r\n\t\treturn shape && (typeof shape.adj === 'object');\r\n\r\n\t} catch (e) {\r\n\t\treturn false;\r\n\t}\r\n}());\r\n\r\n\r\nfunction userAgentContains(str) {\r\n\treturn navigator.userAgent.toLowerCase().indexOf(str) >= 0;\r\n}\r\n\n\nvar Browser = (Object.freeze || Object)({\n\tie: ie,\n\tielt9: ielt9,\n\tedge: edge,\n\twebkit: webkit,\n\tandroid: android,\n\tandroid23: android23,\n\tandroidStock: androidStock,\n\topera: opera,\n\tchrome: chrome,\n\tgecko: gecko,\n\tsafari: safari,\n\tphantom: phantom,\n\topera12: opera12,\n\twin: win,\n\tie3d: ie3d,\n\twebkit3d: webkit3d,\n\tgecko3d: gecko3d,\n\tany3d: any3d,\n\tmobile: mobile,\n\tmobileWebkit: mobileWebkit,\n\tmobileWebkit3d: mobileWebkit3d,\n\tmsPointer: msPointer,\n\tpointer: pointer,\n\ttouch: touch,\n\tmobileOpera: mobileOpera,\n\tmobileGecko: mobileGecko,\n\tretina: retina,\n\tcanvas: canvas,\n\tsvg: svg,\n\tvml: vml\n});\n\n/*\n * Extends L.DomEvent to provide touch support for Internet Explorer and Windows-based devices.\n */\n\n\nvar POINTER_DOWN =   msPointer ? 'MSPointerDown'   : 'pointerdown';\nvar POINTER_MOVE =   msPointer ? 'MSPointerMove'   : 'pointermove';\nvar POINTER_UP =     msPointer ? 'MSPointerUp'     : 'pointerup';\nvar POINTER_CANCEL = msPointer ? 'MSPointerCancel' : 'pointercancel';\nvar TAG_WHITE_LIST = ['INPUT', 'SELECT', 'OPTION'];\n\nvar _pointers = {};\nvar _pointerDocListener = false;\n\n// DomEvent.DoubleTap needs to know about this\nvar _pointersCount = 0;\n\n// Provides a touch events wrapper for (ms)pointer events.\n// ref http://www.w3.org/TR/pointerevents/ https://www.w3.org/Bugs/Public/show_bug.cgi?id=22890\n\nfunction addPointerListener(obj, type, handler, id) {\n\tif (type === 'touchstart') {\n\t\t_addPointerStart(obj, handler, id);\n\n\t} else if (type === 'touchmove') {\n\t\t_addPointerMove(obj, handler, id);\n\n\t} else if (type === 'touchend') {\n\t\t_addPointerEnd(obj, handler, id);\n\t}\n\n\treturn this;\n}\n\nfunction removePointerListener(obj, type, id) {\n\tvar handler = obj['_leaflet_' + type + id];\n\n\tif (type === 'touchstart') {\n\t\tobj.removeEventListener(POINTER_DOWN, handler, false);\n\n\t} else if (type === 'touchmove') {\n\t\tobj.removeEventListener(POINTER_MOVE, handler, false);\n\n\t} else if (type === 'touchend') {\n\t\tobj.removeEventListener(POINTER_UP, handler, false);\n\t\tobj.removeEventListener(POINTER_CANCEL, handler, false);\n\t}\n\n\treturn this;\n}\n\nfunction _addPointerStart(obj, handler, id) {\n\tvar onDown = bind(function (e) {\n\t\tif (e.pointerType !== 'mouse' && e.MSPOINTER_TYPE_MOUSE && e.pointerType !== e.MSPOINTER_TYPE_MOUSE) {\n\t\t\t// In IE11, some touch events needs to fire for form controls, or\n\t\t\t// the controls will stop working. We keep a whitelist of tag names that\n\t\t\t// need these events. For other target tags, we prevent default on the event.\n\t\t\tif (TAG_WHITE_LIST.indexOf(e.target.tagName) < 0) {\n\t\t\t\tpreventDefault(e);\n\t\t\t} else {\n\t\t\t\treturn;\n\t\t\t}\n\t\t}\n\n\t\t_handlePointer(e, handler);\n\t});\n\n\tobj['_leaflet_touchstart' + id] = onDown;\n\tobj.addEventListener(POINTER_DOWN, onDown, false);\n\n\t// need to keep track of what pointers and how many are active to provide e.touches emulation\n\tif (!_pointerDocListener) {\n\t\t// we listen documentElement as any drags that end by moving the touch off the screen get fired there\n\t\tdocument.documentElement.addEventListener(POINTER_DOWN, _globalPointerDown, true);\n\t\tdocument.documentElement.addEventListener(POINTER_MOVE, _globalPointerMove, true);\n\t\tdocument.documentElement.addEventListener(POINTER_UP, _globalPointerUp, true);\n\t\tdocument.documentElement.addEventListener(POINTER_CANCEL, _globalPointerUp, true);\n\n\t\t_pointerDocListener = true;\n\t}\n}\n\nfunction _globalPointerDown(e) {\n\t_pointers[e.pointerId] = e;\n\t_pointersCount++;\n}\n\nfunction _globalPointerMove(e) {\n\tif (_pointers[e.pointerId]) {\n\t\t_pointers[e.pointerId] = e;\n\t}\n}\n\nfunction _globalPointerUp(e) {\n\tdelete _pointers[e.pointerId];\n\t_pointersCount--;\n}\n\nfunction _handlePointer(e, handler) {\n\te.touches = [];\n\tfor (var i in _pointers) {\n\t\te.touches.push(_pointers[i]);\n\t}\n\te.changedTouches = [e];\n\n\thandler(e);\n}\n\nfunction _addPointerMove(obj, handler, id) {\n\tvar onMove = function (e) {\n\t\t// don't fire touch moves when mouse isn't down\n\t\tif ((e.pointerType === e.MSPOINTER_TYPE_MOUSE || e.pointerType === 'mouse') && e.buttons === 0) { return; }\n\n\t\t_handlePointer(e, handler);\n\t};\n\n\tobj['_leaflet_touchmove' + id] = onMove;\n\tobj.addEventListener(POINTER_MOVE, onMove, false);\n}\n\nfunction _addPointerEnd(obj, handler, id) {\n\tvar onUp = function (e) {\n\t\t_handlePointer(e, handler);\n\t};\n\n\tobj['_leaflet_touchend' + id] = onUp;\n\tobj.addEventListener(POINTER_UP, onUp, false);\n\tobj.addEventListener(POINTER_CANCEL, onUp, false);\n}\n\n/*\r\n * Extends the event handling code with double tap support for mobile browsers.\r\n */\r\n\r\nvar _touchstart = msPointer ? 'MSPointerDown' : pointer ? 'pointerdown' : 'touchstart';\r\nvar _touchend = msPointer ? 'MSPointerUp' : pointer ? 'pointerup' : 'touchend';\r\nvar _pre = '_leaflet_';\r\n\r\n// inspired by Zepto touch code by Thomas Fuchs\r\nfunction addDoubleTapListener(obj, handler, id) {\r\n\tvar last, touch$$1,\r\n\t    doubleTap = false,\r\n\t    delay = 250;\r\n\r\n\tfunction onTouchStart(e) {\r\n\t\tvar count;\r\n\r\n\t\tif (pointer) {\r\n\t\t\tif ((!edge) || e.pointerType === 'mouse') { return; }\r\n\t\t\tcount = _pointersCount;\r\n\t\t} else {\r\n\t\t\tcount = e.touches.length;\r\n\t\t}\r\n\r\n\t\tif (count > 1) { return; }\r\n\r\n\t\tvar now = Date.now(),\r\n\t\t    delta = now - (last || now);\r\n\r\n\t\ttouch$$1 = e.touches ? e.touches[0] : e;\r\n\t\tdoubleTap = (delta > 0 && delta <= delay);\r\n\t\tlast = now;\r\n\t}\r\n\r\n\tfunction onTouchEnd(e) {\r\n\t\tif (doubleTap && !touch$$1.cancelBubble) {\r\n\t\t\tif (pointer) {\r\n\t\t\t\tif ((!edge) || e.pointerType === 'mouse') { return; }\r\n\t\t\t\t// work around .type being readonly with MSPointer* events\r\n\t\t\t\tvar newTouch = {},\r\n\t\t\t\t    prop, i;\r\n\r\n\t\t\t\tfor (i in touch$$1) {\r\n\t\t\t\t\tprop = touch$$1[i];\r\n\t\t\t\t\tnewTouch[i] = prop && prop.bind ? prop.bind(touch$$1) : prop;\r\n\t\t\t\t}\r\n\t\t\t\ttouch$$1 = newTouch;\r\n\t\t\t}\r\n\t\t\ttouch$$1.type = 'dblclick';\r\n\t\t\thandler(touch$$1);\r\n\t\t\tlast = null;\r\n\t\t}\r\n\t}\r\n\r\n\tobj[_pre + _touchstart + id] = onTouchStart;\r\n\tobj[_pre + _touchend + id] = onTouchEnd;\r\n\tobj[_pre + 'dblclick' + id] = handler;\r\n\r\n\tobj.addEventListener(_touchstart, onTouchStart, false);\r\n\tobj.addEventListener(_touchend, onTouchEnd, false);\r\n\r\n\t// On some platforms (notably, chrome<55 on win10 + touchscreen + mouse),\r\n\t// the browser doesn't fire touchend/pointerup events but does fire\r\n\t// native dblclicks. See #4127.\r\n\t// Edge 14 also fires native dblclicks, but only for pointerType mouse, see #5180.\r\n\tobj.addEventListener('dblclick', handler, false);\r\n\r\n\treturn this;\r\n}\r\n\r\nfunction removeDoubleTapListener(obj, id) {\r\n\tvar touchstart = obj[_pre + _touchstart + id],\r\n\t    touchend = obj[_pre + _touchend + id],\r\n\t    dblclick = obj[_pre + 'dblclick' + id];\r\n\r\n\tobj.removeEventListener(_touchstart, touchstart, false);\r\n\tobj.removeEventListener(_touchend, touchend, false);\r\n\tif (!edge) {\r\n\t\tobj.removeEventListener('dblclick', dblclick, false);\r\n\t}\r\n\r\n\treturn this;\r\n}\n\n/*\r\n * @namespace DomUtil\r\n *\r\n * Utility functions to work with the [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model)\r\n * tree, used by Leaflet internally.\r\n *\r\n * Most functions expecting or returning a `HTMLElement` also work for\r\n * SVG elements. The only difference is that classes refer to CSS classes\r\n * in HTML and SVG classes in SVG.\r\n */\r\n\r\n\r\n// @property TRANSFORM: String\r\n// Vendor-prefixed transform style name (e.g. `'webkitTransform'` for WebKit).\r\nvar TRANSFORM = testProp(\r\n\t['transform', 'webkitTransform', 'OTransform', 'MozTransform', 'msTransform']);\r\n\r\n// webkitTransition comes first because some browser versions that drop vendor prefix don't do\r\n// the same for the transitionend event, in particular the Android 4.1 stock browser\r\n\r\n// @property TRANSITION: String\r\n// Vendor-prefixed transition style name.\r\nvar TRANSITION = testProp(\r\n\t['webkitTransition', 'transition', 'OTransition', 'MozTransition', 'msTransition']);\r\n\r\n// @property TRANSITION_END: String\r\n// Vendor-prefixed transitionend event name.\r\nvar TRANSITION_END =\r\n\tTRANSITION === 'webkitTransition' || TRANSITION === 'OTransition' ? TRANSITION + 'End' : 'transitionend';\r\n\r\n\r\n// @function get(id: String|HTMLElement): HTMLElement\r\n// Returns an element given its DOM id, or returns the element itself\r\n// if it was passed directly.\r\nfunction get(id) {\r\n\treturn typeof id === 'string' ? document.getElementById(id) : id;\r\n}\r\n\r\n// @function getStyle(el: HTMLElement, styleAttrib: String): String\r\n// Returns the value for a certain style attribute on an element,\r\n// including computed values or values set through CSS.\r\nfunction getStyle(el, style) {\r\n\tvar value = el.style[style] || (el.currentStyle && el.currentStyle[style]);\r\n\r\n\tif ((!value || value === 'auto') && document.defaultView) {\r\n\t\tvar css = document.defaultView.getComputedStyle(el, null);\r\n\t\tvalue = css ? css[style] : null;\r\n\t}\r\n\treturn value === 'auto' ? null : value;\r\n}\r\n\r\n// @function create(tagName: String, className?: String, container?: HTMLElement): HTMLElement\r\n// Creates an HTML element with `tagName`, sets its class to `className`, and optionally appends it to `container` element.\r\nfunction create$1(tagName, className, container) {\r\n\tvar el = document.createElement(tagName);\r\n\tel.className = className || '';\r\n\r\n\tif (container) {\r\n\t\tcontainer.appendChild(el);\r\n\t}\r\n\treturn el;\r\n}\r\n\r\n// @function remove(el: HTMLElement)\r\n// Removes `el` from its parent element\r\nfunction remove(el) {\r\n\tvar parent = el.parentNode;\r\n\tif (parent) {\r\n\t\tparent.removeChild(el);\r\n\t}\r\n}\r\n\r\n// @function empty(el: HTMLElement)\r\n// Removes all of `el`'s children elements from `el`\r\nfunction empty(el) {\r\n\twhile (el.firstChild) {\r\n\t\tel.removeChild(el.firstChild);\r\n\t}\r\n}\r\n\r\n// @function toFront(el: HTMLElement)\r\n// Makes `el` the last child of its parent, so it renders in front of the other children.\r\nfunction toFront(el) {\r\n\tvar parent = el.parentNode;\r\n\tif (parent && parent.lastChild !== el) {\r\n\t\tparent.appendChild(el);\r\n\t}\r\n}\r\n\r\n// @function toBack(el: HTMLElement)\r\n// Makes `el` the first child of its parent, so it renders behind the other children.\r\nfunction toBack(el) {\r\n\tvar parent = el.parentNode;\r\n\tif (parent && parent.firstChild !== el) {\r\n\t\tparent.insertBefore(el, parent.firstChild);\r\n\t}\r\n}\r\n\r\n// @function hasClass(el: HTMLElement, name: String): Boolean\r\n// Returns `true` if the element's class attribute contains `name`.\r\nfunction hasClass(el, name) {\r\n\tif (el.classList !== undefined) {\r\n\t\treturn el.classList.contains(name);\r\n\t}\r\n\tvar className = getClass(el);\r\n\treturn className.length > 0 && new RegExp('(^|\\\\s)' + name + '(\\\\s|$)').test(className);\r\n}\r\n\r\n// @function addClass(el: HTMLElement, name: String)\r\n// Adds `name` to the element's class attribute.\r\nfunction addClass(el, name) {\r\n\tif (el.classList !== undefined) {\r\n\t\tvar classes = splitWords(name);\r\n\t\tfor (var i = 0, len = classes.length; i < len; i++) {\r\n\t\t\tel.classList.add(classes[i]);\r\n\t\t}\r\n\t} else if (!hasClass(el, name)) {\r\n\t\tvar className = getClass(el);\r\n\t\tsetClass(el, (className ? className + ' ' : '') + name);\r\n\t}\r\n}\r\n\r\n// @function removeClass(el: HTMLElement, name: String)\r\n// Removes `name` from the element's class attribute.\r\nfunction removeClass(el, name) {\r\n\tif (el.classList !== undefined) {\r\n\t\tel.classList.remove(name);\r\n\t} else {\r\n\t\tsetClass(el, trim((' ' + getClass(el) + ' ').replace(' ' + name + ' ', ' ')));\r\n\t}\r\n}\r\n\r\n// @function setClass(el: HTMLElement, name: String)\r\n// Sets the element's class.\r\nfunction setClass(el, name) {\r\n\tif (el.className.baseVal === undefined) {\r\n\t\tel.className = name;\r\n\t} else {\r\n\t\t// in case of SVG element\r\n\t\tel.className.baseVal = name;\r\n\t}\r\n}\r\n\r\n// @function getClass(el: HTMLElement): String\r\n// Returns the element's class.\r\nfunction getClass(el) {\r\n\t// Check if the element is an SVGElementInstance and use the correspondingElement instead\r\n\t// (Required for linked SVG elements in IE11.)\r\n\tif (el.correspondingElement) {\r\n\t\tel = el.correspondingElement;\r\n\t}\r\n\treturn el.className.baseVal === undefined ? el.className : el.className.baseVal;\r\n}\r\n\r\n// @function setOpacity(el: HTMLElement, opacity: Number)\r\n// Set the opacity of an element (including old IE support).\r\n// `opacity` must be a number from `0` to `1`.\r\nfunction setOpacity(el, value) {\r\n\tif ('opacity' in el.style) {\r\n\t\tel.style.opacity = value;\r\n\t} else if ('filter' in el.style) {\r\n\t\t_setOpacityIE(el, value);\r\n\t}\r\n}\r\n\r\nfunction _setOpacityIE(el, value) {\r\n\tvar filter = false,\r\n\t    filterName = 'DXImageTransform.Microsoft.Alpha';\r\n\r\n\t// filters collection throws an error if we try to retrieve a filter that doesn't exist\r\n\ttry {\r\n\t\tfilter = el.filters.item(filterName);\r\n\t} catch (e) {\r\n\t\t// don't set opacity to 1 if we haven't already set an opacity,\r\n\t\t// it isn't needed and breaks transparent pngs.\r\n\t\tif (value === 1) { return; }\r\n\t}\r\n\r\n\tvalue = Math.round(value * 100);\r\n\r\n\tif (filter) {\r\n\t\tfilter.Enabled = (value !== 100);\r\n\t\tfilter.Opacity = value;\r\n\t} else {\r\n\t\tel.style.filter += ' progid:' + filterName + '(opacity=' + value + ')';\r\n\t}\r\n}\r\n\r\n// @function testProp(props: String[]): String|false\r\n// Goes through the array of style names and returns the first name\r\n// that is a valid style name for an element. If no such name is found,\r\n// it returns false. Useful for vendor-prefixed styles like `transform`.\r\nfunction testProp(props) {\r\n\tvar style = document.documentElement.style;\r\n\r\n\tfor (var i = 0; i < props.length; i++) {\r\n\t\tif (props[i] in style) {\r\n\t\t\treturn props[i];\r\n\t\t}\r\n\t}\r\n\treturn false;\r\n}\r\n\r\n// @function setTransform(el: HTMLElement, offset: Point, scale?: Number)\r\n// Resets the 3D CSS transform of `el` so it is translated by `offset` pixels\r\n// and optionally scaled by `scale`. Does not have an effect if the\r\n// browser doesn't support 3D CSS transforms.\r\nfunction setTransform(el, offset, scale) {\r\n\tvar pos = offset || new Point(0, 0);\r\n\r\n\tel.style[TRANSFORM] =\r\n\t\t(ie3d ?\r\n\t\t\t'translate(' + pos.x + 'px,' + pos.y + 'px)' :\r\n\t\t\t'translate3d(' + pos.x + 'px,' + pos.y + 'px,0)') +\r\n\t\t(scale ? ' scale(' + scale + ')' : '');\r\n}\r\n\r\n// @function setPosition(el: HTMLElement, position: Point)\r\n// Sets the position of `el` to coordinates specified by `position`,\r\n// using CSS translate or top/left positioning depending on the browser\r\n// (used by Leaflet internally to position its layers).\r\nfunction setPosition(el, point) {\r\n\r\n\t/*eslint-disable */\r\n\tel._leaflet_pos = point;\r\n\t/* eslint-enable */\r\n\r\n\tif (any3d) {\r\n\t\tsetTransform(el, point);\r\n\t} else {\r\n\t\tel.style.left = point.x + 'px';\r\n\t\tel.style.top = point.y + 'px';\r\n\t}\r\n}\r\n\r\n// @function getPosition(el: HTMLElement): Point\r\n// Returns the coordinates of an element previously positioned with setPosition.\r\nfunction getPosition(el) {\r\n\t// this method is only used for elements previously positioned using setPosition,\r\n\t// so it's safe to cache the position for performance\r\n\r\n\treturn el._leaflet_pos || new Point(0, 0);\r\n}\r\n\r\n// @function disableTextSelection()\r\n// Prevents the user from generating `selectstart` DOM events, usually generated\r\n// when the user drags the mouse through a page with text. Used internally\r\n// by Leaflet to override the behaviour of any click-and-drag interaction on\r\n// the map. Affects drag interactions on the whole document.\r\n\r\n// @function enableTextSelection()\r\n// Cancels the effects of a previous [`L.DomUtil.disableTextSelection`](#domutil-disabletextselection).\r\nvar disableTextSelection;\r\nvar enableTextSelection;\r\nvar _userSelect;\r\nif ('onselectstart' in document) {\r\n\tdisableTextSelection = function () {\r\n\t\ton(window, 'selectstart', preventDefault);\r\n\t};\r\n\tenableTextSelection = function () {\r\n\t\toff(window, 'selectstart', preventDefault);\r\n\t};\r\n} else {\r\n\tvar userSelectProperty = testProp(\r\n\t\t['userSelect', 'WebkitUserSelect', 'OUserSelect', 'MozUserSelect', 'msUserSelect']);\r\n\r\n\tdisableTextSelection = function () {\r\n\t\tif (userSelectProperty) {\r\n\t\t\tvar style = document.documentElement.style;\r\n\t\t\t_userSelect = style[userSelectProperty];\r\n\t\t\tstyle[userSelectProperty] = 'none';\r\n\t\t}\r\n\t};\r\n\tenableTextSelection = function () {\r\n\t\tif (userSelectProperty) {\r\n\t\t\tdocument.documentElement.style[userSelectProperty] = _userSelect;\r\n\t\t\t_userSelect = undefined;\r\n\t\t}\r\n\t};\r\n}\r\n\r\n// @function disableImageDrag()\r\n// As [`L.DomUtil.disableTextSelection`](#domutil-disabletextselection), but\r\n// for `dragstart` DOM events, usually generated when the user drags an image.\r\nfunction disableImageDrag() {\r\n\ton(window, 'dragstart', preventDefault);\r\n}\r\n\r\n// @function enableImageDrag()\r\n// Cancels the effects of a previous [`L.DomUtil.disableImageDrag`](#domutil-disabletextselection).\r\nfunction enableImageDrag() {\r\n\toff(window, 'dragstart', preventDefault);\r\n}\r\n\r\nvar _outlineElement;\nvar _outlineStyle;\r\n// @function preventOutline(el: HTMLElement)\r\n// Makes the [outline](https://developer.mozilla.org/docs/Web/CSS/outline)\r\n// of the element `el` invisible. Used internally by Leaflet to prevent\r\n// focusable elements from displaying an outline when the user performs a\r\n// drag interaction on them.\r\nfunction preventOutline(element) {\r\n\twhile (element.tabIndex === -1) {\r\n\t\telement = element.parentNode;\r\n\t}\r\n\tif (!element.style) { return; }\r\n\trestoreOutline();\r\n\t_outlineElement = element;\r\n\t_outlineStyle = element.style.outline;\r\n\telement.style.outline = 'none';\r\n\ton(window, 'keydown', restoreOutline);\r\n}\r\n\r\n// @function restoreOutline()\r\n// Cancels the effects of a previous [`L.DomUtil.preventOutline`]().\r\nfunction restoreOutline() {\r\n\tif (!_outlineElement) { return; }\r\n\t_outlineElement.style.outline = _outlineStyle;\r\n\t_outlineElement = undefined;\r\n\t_outlineStyle = undefined;\r\n\toff(window, 'keydown', restoreOutline);\r\n}\r\n\r\n// @function getSizedParentNode(el: HTMLElement): HTMLElement\r\n// Finds the closest parent node which size (width and height) is not null.\r\nfunction getSizedParentNode(element) {\r\n\tdo {\r\n\t\telement = element.parentNode;\r\n\t} while ((!element.offsetWidth || !element.offsetHeight) && element !== document.body);\r\n\treturn element;\r\n}\r\n\r\n// @function getScale(el: HTMLElement): Object\r\n// Computes the CSS scale currently applied on the element.\r\n// Returns an object with `x` and `y` members as horizontal and vertical scales respectively,\r\n// and `boundingClientRect` as the result of [`getBoundingClientRect()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect).\r\nfunction getScale(element) {\r\n\tvar rect = element.getBoundingClientRect(); // Read-only in old browsers.\r\n\r\n\treturn {\r\n\t\tx: rect.width / element.offsetWidth || 1,\r\n\t\ty: rect.height / element.offsetHeight || 1,\r\n\t\tboundingClientRect: rect\r\n\t};\r\n}\r\n\n\nvar DomUtil = (Object.freeze || Object)({\n\tTRANSFORM: TRANSFORM,\n\tTRANSITION: TRANSITION,\n\tTRANSITION_END: TRANSITION_END,\n\tget: get,\n\tgetStyle: getStyle,\n\tcreate: create$1,\n\tremove: remove,\n\tempty: empty,\n\ttoFront: toFront,\n\ttoBack: toBack,\n\thasClass: hasClass,\n\taddClass: addClass,\n\tremoveClass: removeClass,\n\tsetClass: setClass,\n\tgetClass: getClass,\n\tsetOpacity: setOpacity,\n\ttestProp: testProp,\n\tsetTransform: setTransform,\n\tsetPosition: setPosition,\n\tgetPosition: getPosition,\n\tdisableTextSelection: disableTextSelection,\n\tenableTextSelection: enableTextSelection,\n\tdisableImageDrag: disableImageDrag,\n\tenableImageDrag: enableImageDrag,\n\tpreventOutline: preventOutline,\n\trestoreOutline: restoreOutline,\n\tgetSizedParentNode: getSizedParentNode,\n\tgetScale: getScale\n});\n\n/*\r\n * @namespace DomEvent\r\n * Utility functions to work with the [DOM events](https://developer.mozilla.org/docs/Web/API/Event), used by Leaflet internally.\r\n */\r\n\r\n// Inspired by John Resig, Dean Edwards and YUI addEvent implementations.\r\n\r\n// @function on(el: HTMLElement, types: String, fn: Function, context?: Object): this\r\n// Adds a listener function (`fn`) to a particular DOM event type of the\r\n// element `el`. You can optionally specify the context of the listener\r\n// (object the `this` keyword will point to). You can also pass several\r\n// space-separated types (e.g. `'click dblclick'`).\r\n\r\n// @alternative\r\n// @function on(el: HTMLElement, eventMap: Object, context?: Object): this\r\n// Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`\r\nfunction on(obj, types, fn, context) {\r\n\r\n\tif (typeof types === 'object') {\r\n\t\tfor (var type in types) {\r\n\t\t\taddOne(obj, type, types[type], fn);\r\n\t\t}\r\n\t} else {\r\n\t\ttypes = splitWords(types);\r\n\r\n\t\tfor (var i = 0, len = types.length; i < len; i++) {\r\n\t\t\taddOne(obj, types[i], fn, context);\r\n\t\t}\r\n\t}\r\n\r\n\treturn this;\r\n}\r\n\r\nvar eventsKey = '_leaflet_events';\r\n\r\n// @function off(el: HTMLElement, types: String, fn: Function, context?: Object): this\r\n// Removes a previously added listener function.\r\n// Note that if you passed a custom context to on, you must pass the same\r\n// context to `off` in order to remove the listener.\r\n\r\n// @alternative\r\n// @function off(el: HTMLElement, eventMap: Object, context?: Object): this\r\n// Removes a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`\r\nfunction off(obj, types, fn, context) {\r\n\r\n\tif (typeof types === 'object') {\r\n\t\tfor (var type in types) {\r\n\t\t\tremoveOne(obj, type, types[type], fn);\r\n\t\t}\r\n\t} else if (types) {\r\n\t\ttypes = splitWords(types);\r\n\r\n\t\tfor (var i = 0, len = types.length; i < len; i++) {\r\n\t\t\tremoveOne(obj, types[i], fn, context);\r\n\t\t}\r\n\t} else {\r\n\t\tfor (var j in obj[eventsKey]) {\r\n\t\t\tremoveOne(obj, j, obj[eventsKey][j]);\r\n\t\t}\r\n\t\tdelete obj[eventsKey];\r\n\t}\r\n\r\n\treturn this;\r\n}\r\n\r\nfunction addOne(obj, type, fn, context) {\r\n\tvar id = type + stamp(fn) + (context ? '_' + stamp(context) : '');\r\n\r\n\tif (obj[eventsKey] && obj[eventsKey][id]) { return this; }\r\n\r\n\tvar handler = function (e) {\r\n\t\treturn fn.call(context || obj, e || window.event);\r\n\t};\r\n\r\n\tvar originalHandler = handler;\r\n\r\n\tif (pointer && type.indexOf('touch') === 0) {\r\n\t\t// Needs DomEvent.Pointer.js\r\n\t\taddPointerListener(obj, type, handler, id);\r\n\r\n\t} else if (touch && (type === 'dblclick') && addDoubleTapListener &&\r\n\t           !(pointer && chrome)) {\r\n\t\t// Chrome >55 does not need the synthetic dblclicks from addDoubleTapListener\r\n\t\t// See #5180\r\n\t\taddDoubleTapListener(obj, handler, id);\r\n\r\n\t} else if ('addEventListener' in obj) {\r\n\r\n\t\tif (type === 'mousewheel') {\r\n\t\t\tobj.addEventListener('onwheel' in obj ? 'wheel' : 'mousewheel', handler, false);\r\n\r\n\t\t} else if ((type === 'mouseenter') || (type === 'mouseleave')) {\r\n\t\t\thandler = function (e) {\r\n\t\t\t\te = e || window.event;\r\n\t\t\t\tif (isExternalTarget(obj, e)) {\r\n\t\t\t\t\toriginalHandler(e);\r\n\t\t\t\t}\r\n\t\t\t};\r\n\t\t\tobj.addEventListener(type === 'mouseenter' ? 'mouseover' : 'mouseout', handler, false);\r\n\r\n\t\t} else {\r\n\t\t\tif (type === 'click' && android) {\r\n\t\t\t\thandler = function (e) {\r\n\t\t\t\t\tfilterClick(e, originalHandler);\r\n\t\t\t\t};\r\n\t\t\t}\r\n\t\t\tobj.addEventListener(type, handler, false);\r\n\t\t}\r\n\r\n\t} else if ('attachEvent' in obj) {\r\n\t\tobj.attachEvent('on' + type, handler);\r\n\t}\r\n\r\n\tobj[eventsKey] = obj[eventsKey] || {};\r\n\tobj[eventsKey][id] = handler;\r\n}\r\n\r\nfunction removeOne(obj, type, fn, context) {\r\n\r\n\tvar id = type + stamp(fn) + (context ? '_' + stamp(context) : ''),\r\n\t    handler = obj[eventsKey] && obj[eventsKey][id];\r\n\r\n\tif (!handler) { return this; }\r\n\r\n\tif (pointer && type.indexOf('touch') === 0) {\r\n\t\tremovePointerListener(obj, type, id);\r\n\r\n\t} else if (touch && (type === 'dblclick') && removeDoubleTapListener &&\r\n\t           !(pointer && chrome)) {\r\n\t\tremoveDoubleTapListener(obj, id);\r\n\r\n\t} else if ('removeEventListener' in obj) {\r\n\r\n\t\tif (type === 'mousewheel') {\r\n\t\t\tobj.removeEventListener('onwheel' in obj ? 'wheel' : 'mousewheel', handler, false);\r\n\r\n\t\t} else {\r\n\t\t\tobj.removeEventListener(\r\n\t\t\t\ttype === 'mouseenter' ? 'mouseover' :\r\n\t\t\t\ttype === 'mouseleave' ? 'mouseout' : type, handler, false);\r\n\t\t}\r\n\r\n\t} else if ('detachEvent' in obj) {\r\n\t\tobj.detachEvent('on' + type, handler);\r\n\t}\r\n\r\n\tobj[eventsKey][id] = null;\r\n}\r\n\r\n// @function stopPropagation(ev: DOMEvent): this\r\n// Stop the given event from propagation to parent elements. Used inside the listener functions:\r\n// ```js\r\n// L.DomEvent.on(div, 'click', function (ev) {\r\n// \tL.DomEvent.stopPropagation(ev);\r\n// });\r\n// ```\r\nfunction stopPropagation(e) {\r\n\r\n\tif (e.stopPropagation) {\r\n\t\te.stopPropagation();\r\n\t} else if (e.originalEvent) {  // In case of Leaflet event.\r\n\t\te.originalEvent._stopped = true;\r\n\t} else {\r\n\t\te.cancelBubble = true;\r\n\t}\r\n\tskipped(e);\r\n\r\n\treturn this;\r\n}\r\n\r\n// @function disableScrollPropagation(el: HTMLElement): this\r\n// Adds `stopPropagation` to the element's `'mousewheel'` events (plus browser variants).\r\nfunction disableScrollPropagation(el) {\r\n\taddOne(el, 'mousewheel', stopPropagation);\r\n\treturn this;\r\n}\r\n\r\n// @function disableClickPropagation(el: HTMLElement): this\r\n// Adds `stopPropagation` to the element's `'click'`, `'doubleclick'`,\r\n// `'mousedown'` and `'touchstart'` events (plus browser variants).\r\nfunction disableClickPropagation(el) {\r\n\ton(el, 'mousedown touchstart dblclick', stopPropagation);\r\n\taddOne(el, 'click', fakeStop);\r\n\treturn this;\r\n}\r\n\r\n// @function preventDefault(ev: DOMEvent): this\r\n// Prevents the default action of the DOM Event `ev` from happening (such as\r\n// following a link in the href of the a element, or doing a POST request\r\n// with page reload when a `<form>` is submitted).\r\n// Use it inside listener functions.\r\nfunction preventDefault(e) {\r\n\tif (e.preventDefault) {\r\n\t\te.preventDefault();\r\n\t} else {\r\n\t\te.returnValue = false;\r\n\t}\r\n\treturn this;\r\n}\r\n\r\n// @function stop(ev: DOMEvent): this\r\n// Does `stopPropagation` and `preventDefault` at the same time.\r\nfunction stop(e) {\r\n\tpreventDefault(e);\r\n\tstopPropagation(e);\r\n\treturn this;\r\n}\r\n\r\n// @function getMousePosition(ev: DOMEvent, container?: HTMLElement): Point\r\n// Gets normalized mouse position from a DOM event relative to the\r\n// `container` (border excluded) or to the whole page if not specified.\r\nfunction getMousePosition(e, container) {\r\n\tif (!container) {\r\n\t\treturn new Point(e.clientX, e.clientY);\r\n\t}\r\n\r\n\tvar scale = getScale(container),\r\n\t    offset = scale.boundingClientRect; // left and top  values are in page scale (like the event clientX/Y)\r\n\r\n\treturn new Point(\r\n\t\t// offset.left/top values are in page scale (like clientX/Y),\r\n\t\t// whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).\r\n\t\t(e.clientX - offset.left) / scale.x - container.clientLeft,\r\n\t\t(e.clientY - offset.top) / scale.y - container.clientTop\r\n\t);\r\n}\r\n\r\n// Chrome on Win scrolls double the pixels as in other platforms (see #4538),\r\n// and Firefox scrolls device pixels, not CSS pixels\r\nvar wheelPxFactor =\r\n\t(win && chrome) ? 2 * window.devicePixelRatio :\r\n\tgecko ? window.devicePixelRatio : 1;\r\n\r\n// @function getWheelDelta(ev: DOMEvent): Number\r\n// Gets normalized wheel delta from a mousewheel DOM event, in vertical\r\n// pixels scrolled (negative if scrolling down).\r\n// Events from pointing devices without precise scrolling are mapped to\r\n// a best guess of 60 pixels.\r\nfunction getWheelDelta(e) {\r\n\treturn (edge) ? e.wheelDeltaY / 2 : // Don't trust window-geometry-based delta\r\n\t       (e.deltaY && e.deltaMode === 0) ? -e.deltaY / wheelPxFactor : // Pixels\r\n\t       (e.deltaY && e.deltaMode === 1) ? -e.deltaY * 20 : // Lines\r\n\t       (e.deltaY && e.deltaMode === 2) ? -e.deltaY * 60 : // Pages\r\n\t       (e.deltaX || e.deltaZ) ? 0 :\t// Skip horizontal/depth wheel events\r\n\t       e.wheelDelta ? (e.wheelDeltaY || e.wheelDelta) / 2 : // Legacy IE pixels\r\n\t       (e.detail && Math.abs(e.detail) < 32765) ? -e.detail * 20 : // Legacy Moz lines\r\n\t       e.detail ? e.detail / -32765 * 60 : // Legacy Moz pages\r\n\t       0;\r\n}\r\n\r\nvar skipEvents = {};\r\n\r\nfunction fakeStop(e) {\r\n\t// fakes stopPropagation by setting a special event flag, checked/reset with skipped(e)\r\n\tskipEvents[e.type] = true;\r\n}\r\n\r\nfunction skipped(e) {\r\n\tvar events = skipEvents[e.type];\r\n\t// reset when checking, as it's only used in map container and propagates outside of the map\r\n\tskipEvents[e.type] = false;\r\n\treturn events;\r\n}\r\n\r\n// check if element really left/entered the event target (for mouseenter/mouseleave)\r\nfunction isExternalTarget(el, e) {\r\n\r\n\tvar related = e.relatedTarget;\r\n\r\n\tif (!related) { return true; }\r\n\r\n\ttry {\r\n\t\twhile (related && (related !== el)) {\r\n\t\t\trelated = related.parentNode;\r\n\t\t}\r\n\t} catch (err) {\r\n\t\treturn false;\r\n\t}\r\n\treturn (related !== el);\r\n}\r\n\r\nvar lastClick;\r\n\r\n// this is a horrible workaround for a bug in Android where a single touch triggers two click events\r\nfunction filterClick(e, handler) {\r\n\tvar timeStamp = (e.timeStamp || (e.originalEvent && e.originalEvent.timeStamp)),\r\n\t    elapsed = lastClick && (timeStamp - lastClick);\r\n\r\n\t// are they closer together than 500ms yet more than 100ms?\r\n\t// Android typically triggers them ~300ms apart while multiple listeners\r\n\t// on the same event should be triggered far faster;\r\n\t// or check if click is simulated on the element, and if it is, reject any non-simulated events\r\n\r\n\tif ((elapsed && elapsed > 100 && elapsed < 500) || (e.target._simulatedClick && !e._simulated)) {\r\n\t\tstop(e);\r\n\t\treturn;\r\n\t}\r\n\tlastClick = timeStamp;\r\n\r\n\thandler(e);\r\n}\r\n\r\n\r\n\n\nvar DomEvent = (Object.freeze || Object)({\n\ton: on,\n\toff: off,\n\tstopPropagation: stopPropagation,\n\tdisableScrollPropagation: disableScrollPropagation,\n\tdisableClickPropagation: disableClickPropagation,\n\tpreventDefault: preventDefault,\n\tstop: stop,\n\tgetMousePosition: getMousePosition,\n\tgetWheelDelta: getWheelDelta,\n\tfakeStop: fakeStop,\n\tskipped: skipped,\n\tisExternalTarget: isExternalTarget,\n\taddListener: on,\n\tremoveListener: off\n});\n\n/*\n * @class PosAnimation\n * @aka L.PosAnimation\n * @inherits Evented\n * Used internally for panning animations, utilizing CSS3 Transitions for modern browsers and a timer fallback for IE6-9.\n *\n * @example\n * ```js\n * var fx = new L.PosAnimation();\n * fx.run(el, [300, 500], 0.5);\n * ```\n *\n * @constructor L.PosAnimation()\n * Creates a `PosAnimation` object.\n *\n */\n\nvar PosAnimation = Evented.extend({\n\n\t// @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)\n\t// Run an animation of a given element to a new position, optionally setting\n\t// duration in seconds (`0.25` by default) and easing linearity factor (3rd\n\t// argument of the [cubic bezier curve](http://cubic-bezier.com/#0,0,.5,1),\n\t// `0.5` by default).\n\trun: function (el, newPos, duration, easeLinearity) {\n\t\tthis.stop();\n\n\t\tthis._el = el;\n\t\tthis._inProgress = true;\n\t\tthis._duration = duration || 0.25;\n\t\tthis._easeOutPower = 1 / Math.max(easeLinearity || 0.5, 0.2);\n\n\t\tthis._startPos = getPosition(el);\n\t\tthis._offset = newPos.subtract(this._startPos);\n\t\tthis._startTime = +new Date();\n\n\t\t// @event start: Event\n\t\t// Fired when the animation starts\n\t\tthis.fire('start');\n\n\t\tthis._animate();\n\t},\n\n\t// @method stop()\n\t// Stops the animation (if currently running).\n\tstop: function () {\n\t\tif (!this._inProgress) { return; }\n\n\t\tthis._step(true);\n\t\tthis._complete();\n\t},\n\n\t_animate: function () {\n\t\t// animation loop\n\t\tthis._animId = requestAnimFrame(this._animate, this);\n\t\tthis._step();\n\t},\n\n\t_step: function (round) {\n\t\tvar elapsed = (+new Date()) - this._startTime,\n\t\t    duration = this._duration * 1000;\n\n\t\tif (elapsed < duration) {\n\t\t\tthis._runFrame(this._easeOut(elapsed / duration), round);\n\t\t} else {\n\t\t\tthis._runFrame(1);\n\t\t\tthis._complete();\n\t\t}\n\t},\n\n\t_runFrame: function (progress, round) {\n\t\tvar pos = this._startPos.add(this._offset.multiplyBy(progress));\n\t\tif (round) {\n\t\t\tpos._round();\n\t\t}\n\t\tsetPosition(this._el, pos);\n\n\t\t// @event step: Event\n\t\t// Fired continuously during the animation.\n\t\tthis.fire('step');\n\t},\n\n\t_complete: function () {\n\t\tcancelAnimFrame(this._animId);\n\n\t\tthis._inProgress = false;\n\t\t// @event end: Event\n\t\t// Fired when the animation ends.\n\t\tthis.fire('end');\n\t},\n\n\t_easeOut: function (t) {\n\t\treturn 1 - Math.pow(1 - t, this._easeOutPower);\n\t}\n});\n\n/*\r\n * @class Map\r\n * @aka L.Map\r\n * @inherits Evented\r\n *\r\n * The central class of the API — it is used to create a map on a page and manipulate it.\r\n *\r\n * @example\r\n *\r\n * ```js\r\n * // initialize the map on the \"map\" div with a given center and zoom\r\n * var map = L.map('map', {\r\n * \tcenter: [51.505, -0.09],\r\n * \tzoom: 13\r\n * });\r\n * ```\r\n *\r\n */\r\n\r\nvar Map = Evented.extend({\r\n\r\n\toptions: {\r\n\t\t// @section Map State Options\r\n\t\t// @option crs: CRS = L.CRS.EPSG3857\r\n\t\t// The [Coordinate Reference System](#crs) to use. Don't change this if you're not\r\n\t\t// sure what it means.\r\n\t\tcrs: EPSG3857,\r\n\r\n\t\t// @option center: LatLng = undefined\r\n\t\t// Initial geographic center of the map\r\n\t\tcenter: undefined,\r\n\r\n\t\t// @option zoom: Number = undefined\r\n\t\t// Initial map zoom level\r\n\t\tzoom: undefined,\r\n\r\n\t\t// @option minZoom: Number = *\r\n\t\t// Minimum zoom level of the map.\r\n\t\t// If not specified and at least one `GridLayer` or `TileLayer` is in the map,\r\n\t\t// the lowest of their `minZoom` options will be used instead.\r\n\t\tminZoom: undefined,\r\n\r\n\t\t// @option maxZoom: Number = *\r\n\t\t// Maximum zoom level of the map.\r\n\t\t// If not specified and at least one `GridLayer` or `TileLayer` is in the map,\r\n\t\t// the highest of their `maxZoom` options will be used instead.\r\n\t\tmaxZoom: undefined,\r\n\r\n\t\t// @option layers: Layer[] = []\r\n\t\t// Array of layers that will be added to the map initially\r\n\t\tlayers: [],\r\n\r\n\t\t// @option maxBounds: LatLngBounds = null\r\n\t\t// When this option is set, the map restricts the view to the given\r\n\t\t// geographical bounds, bouncing the user back if the user tries to pan\r\n\t\t// outside the view. To set the restriction dynamically, use\r\n\t\t// [`setMaxBounds`](#map-setmaxbounds) method.\r\n\t\tmaxBounds: undefined,\r\n\r\n\t\t// @option renderer: Renderer = *\r\n\t\t// The default method for drawing vector layers on the map. `L.SVG`\r\n\t\t// or `L.Canvas` by default depending on browser support.\r\n\t\trenderer: undefined,\r\n\r\n\r\n\t\t// @section Animation Options\r\n\t\t// @option zoomAnimation: Boolean = true\r\n\t\t// Whether the map zoom animation is enabled. By default it's enabled\r\n\t\t// in all browsers that support CSS3 Transitions except Android.\r\n\t\tzoomAnimation: true,\r\n\r\n\t\t// @option zoomAnimationThreshold: Number = 4\r\n\t\t// Won't animate zoom if the zoom difference exceeds this value.\r\n\t\tzoomAnimationThreshold: 4,\r\n\r\n\t\t// @option fadeAnimation: Boolean = true\r\n\t\t// Whether the tile fade animation is enabled. By default it's enabled\r\n\t\t// in all browsers that support CSS3 Transitions except Android.\r\n\t\tfadeAnimation: true,\r\n\r\n\t\t// @option markerZoomAnimation: Boolean = true\r\n\t\t// Whether markers animate their zoom with the zoom animation, if disabled\r\n\t\t// they will disappear for the length of the animation. By default it's\r\n\t\t// enabled in all browsers that support CSS3 Transitions except Android.\r\n\t\tmarkerZoomAnimation: true,\r\n\r\n\t\t// @option transform3DLimit: Number = 2^23\r\n\t\t// Defines the maximum size of a CSS translation transform. The default\r\n\t\t// value should not be changed unless a web browser positions layers in\r\n\t\t// the wrong place after doing a large `panBy`.\r\n\t\ttransform3DLimit: 8388608, // Precision limit of a 32-bit float\r\n\r\n\t\t// @section Interaction Options\r\n\t\t// @option zoomSnap: Number = 1\r\n\t\t// Forces the map's zoom level to always be a multiple of this, particularly\r\n\t\t// right after a [`fitBounds()`](#map-fitbounds) or a pinch-zoom.\r\n\t\t// By default, the zoom level snaps to the nearest integer; lower values\r\n\t\t// (e.g. `0.5` or `0.1`) allow for greater granularity. A value of `0`\r\n\t\t// means the zoom level will not be snapped after `fitBounds` or a pinch-zoom.\r\n\t\tzoomSnap: 1,\r\n\r\n\t\t// @option zoomDelta: Number = 1\r\n\t\t// Controls how much the map's zoom level will change after a\r\n\t\t// [`zoomIn()`](#map-zoomin), [`zoomOut()`](#map-zoomout), pressing `+`\r\n\t\t// or `-` on the keyboard, or using the [zoom controls](#control-zoom).\r\n\t\t// Values smaller than `1` (e.g. `0.5`) allow for greater granularity.\r\n\t\tzoomDelta: 1,\r\n\r\n\t\t// @option trackResize: Boolean = true\r\n\t\t// Whether the map automatically handles browser window resize to update itself.\r\n\t\ttrackResize: true\r\n\t},\r\n\r\n\tinitialize: function (id, options) { // (HTMLElement or String, Object)\r\n\t\toptions = setOptions(this, options);\r\n\r\n\t\t// Make sure to assign internal flags at the beginning,\r\n\t\t// to avoid inconsistent state in some edge cases.\r\n\t\tthis._handlers = [];\r\n\t\tthis._layers = {};\r\n\t\tthis._zoomBoundLayers = {};\r\n\t\tthis._sizeChanged = true;\r\n\r\n\t\tthis._initContainer(id);\r\n\t\tthis._initLayout();\r\n\r\n\t\t// hack for https://github.com/Leaflet/Leaflet/issues/1980\r\n\t\tthis._onResize = bind(this._onResize, this);\r\n\r\n\t\tthis._initEvents();\r\n\r\n\t\tif (options.maxBounds) {\r\n\t\t\tthis.setMaxBounds(options.maxBounds);\r\n\t\t}\r\n\r\n\t\tif (options.zoom !== undefined) {\r\n\t\t\tthis._zoom = this._limitZoom(options.zoom);\r\n\t\t}\r\n\r\n\t\tif (options.center && options.zoom !== undefined) {\r\n\t\t\tthis.setView(toLatLng(options.center), options.zoom, {reset: true});\r\n\t\t}\r\n\r\n\t\tthis.callInitHooks();\r\n\r\n\t\t// don't animate on browsers without hardware-accelerated transitions or old Android/Opera\r\n\t\tthis._zoomAnimated = TRANSITION && any3d && !mobileOpera &&\r\n\t\t\t\tthis.options.zoomAnimation;\r\n\r\n\t\t// zoom transitions run with the same duration for all layers, so if one of transitionend events\r\n\t\t// happens after starting zoom animation (propagating to the map pane), we know that it ended globally\r\n\t\tif (this._zoomAnimated) {\r\n\t\t\tthis._createAnimProxy();\r\n\t\t\ton(this._proxy, TRANSITION_END, this._catchTransitionEnd, this);\r\n\t\t}\r\n\r\n\t\tthis._addLayers(this.options.layers);\r\n\t},\r\n\r\n\r\n\t// @section Methods for modifying map state\r\n\r\n\t// @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this\r\n\t// Sets the view of the map (geographical center and zoom) with the given\r\n\t// animation options.\r\n\tsetView: function (center, zoom, options) {\r\n\r\n\t\tzoom = zoom === undefined ? this._zoom : this._limitZoom(zoom);\r\n\t\tcenter = this._limitCenter(toLatLng(center), zoom, this.options.maxBounds);\r\n\t\toptions = options || {};\r\n\r\n\t\tthis._stop();\r\n\r\n\t\tif (this._loaded && !options.reset && options !== true) {\r\n\r\n\t\t\tif (options.animate !== undefined) {\r\n\t\t\t\toptions.zoom = extend({animate: options.animate}, options.zoom);\r\n\t\t\t\toptions.pan = extend({animate: options.animate, duration: options.duration}, options.pan);\r\n\t\t\t}\r\n\r\n\t\t\t// try animating pan or zoom\r\n\t\t\tvar moved = (this._zoom !== zoom) ?\r\n\t\t\t\tthis._tryAnimatedZoom && this._tryAnimatedZoom(center, zoom, options.zoom) :\r\n\t\t\t\tthis._tryAnimatedPan(center, options.pan);\r\n\r\n\t\t\tif (moved) {\r\n\t\t\t\t// prevent resize handler call, the view will refresh after animation anyway\r\n\t\t\t\tclearTimeout(this._sizeTimer);\r\n\t\t\t\treturn this;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// animation didn't start, just reset the map view\r\n\t\tthis._resetView(center, zoom);\r\n\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// @method setZoom(zoom: Number, options?: Zoom/pan options): this\r\n\t// Sets the zoom of the map.\r\n\tsetZoom: function (zoom, options) {\r\n\t\tif (!this._loaded) {\r\n\t\t\tthis._zoom = zoom;\r\n\t\t\treturn this;\r\n\t\t}\r\n\t\treturn this.setView(this.getCenter(), zoom, {zoom: options});\r\n\t},\r\n\r\n\t// @method zoomIn(delta?: Number, options?: Zoom options): this\r\n\t// Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).\r\n\tzoomIn: function (delta, options) {\r\n\t\tdelta = delta || (any3d ? this.options.zoomDelta : 1);\r\n\t\treturn this.setZoom(this._zoom + delta, options);\r\n\t},\r\n\r\n\t// @method zoomOut(delta?: Number, options?: Zoom options): this\r\n\t// Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).\r\n\tzoomOut: function (delta, options) {\r\n\t\tdelta = delta || (any3d ? this.options.zoomDelta : 1);\r\n\t\treturn this.setZoom(this._zoom - delta, options);\r\n\t},\r\n\r\n\t// @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this\r\n\t// Zooms the map while keeping a specified geographical point on the map\r\n\t// stationary (e.g. used internally for scroll zoom and double-click zoom).\r\n\t// @alternative\r\n\t// @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this\r\n\t// Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.\r\n\tsetZoomAround: function (latlng, zoom, options) {\r\n\t\tvar scale = this.getZoomScale(zoom),\r\n\t\t    viewHalf = this.getSize().divideBy(2),\r\n\t\t    containerPoint = latlng instanceof Point ? latlng : this.latLngToContainerPoint(latlng),\r\n\r\n\t\t    centerOffset = containerPoint.subtract(viewHalf).multiplyBy(1 - 1 / scale),\r\n\t\t    newCenter = this.containerPointToLatLng(viewHalf.add(centerOffset));\r\n\r\n\t\treturn this.setView(newCenter, zoom, {zoom: options});\r\n\t},\r\n\r\n\t_getBoundsCenterZoom: function (bounds, options) {\r\n\r\n\t\toptions = options || {};\r\n\t\tbounds = bounds.getBounds ? bounds.getBounds() : toLatLngBounds(bounds);\r\n\r\n\t\tvar paddingTL = toPoint(options.paddingTopLeft || options.padding || [0, 0]),\r\n\t\t    paddingBR = toPoint(options.paddingBottomRight || options.padding || [0, 0]),\r\n\r\n\t\t    zoom = this.getBoundsZoom(bounds, false, paddingTL.add(paddingBR));\r\n\r\n\t\tzoom = (typeof options.maxZoom === 'number') ? Math.min(options.maxZoom, zoom) : zoom;\r\n\r\n\t\tif (zoom === Infinity) {\r\n\t\t\treturn {\r\n\t\t\t\tcenter: bounds.getCenter(),\r\n\t\t\t\tzoom: zoom\r\n\t\t\t};\r\n\t\t}\r\n\r\n\t\tvar paddingOffset = paddingBR.subtract(paddingTL).divideBy(2),\r\n\r\n\t\t    swPoint = this.project(bounds.getSouthWest(), zoom),\r\n\t\t    nePoint = this.project(bounds.getNorthEast(), zoom),\r\n\t\t    center = this.unproject(swPoint.add(nePoint).divideBy(2).add(paddingOffset), zoom);\r\n\r\n\t\treturn {\r\n\t\t\tcenter: center,\r\n\t\t\tzoom: zoom\r\n\t\t};\r\n\t},\r\n\r\n\t// @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this\r\n\t// Sets a map view that contains the given geographical bounds with the\r\n\t// maximum zoom level possible.\r\n\tfitBounds: function (bounds, options) {\r\n\r\n\t\tbounds = toLatLngBounds(bounds);\r\n\r\n\t\tif (!bounds.isValid()) {\r\n\t\t\tthrow new Error('Bounds are not valid.');\r\n\t\t}\r\n\r\n\t\tvar target = this._getBoundsCenterZoom(bounds, options);\r\n\t\treturn this.setView(target.center, target.zoom, options);\r\n\t},\r\n\r\n\t// @method fitWorld(options?: fitBounds options): this\r\n\t// Sets a map view that mostly contains the whole world with the maximum\r\n\t// zoom level possible.\r\n\tfitWorld: function (options) {\r\n\t\treturn this.fitBounds([[-90, -180], [90, 180]], options);\r\n\t},\r\n\r\n\t// @method panTo(latlng: LatLng, options?: Pan options): this\r\n\t// Pans the map to a given center.\r\n\tpanTo: function (center, options) { // (LatLng)\r\n\t\treturn this.setView(center, this._zoom, {pan: options});\r\n\t},\r\n\r\n\t// @method panBy(offset: Point, options?: Pan options): this\r\n\t// Pans the map by a given number of pixels (animated).\r\n\tpanBy: function (offset, options) {\r\n\t\toffset = toPoint(offset).round();\r\n\t\toptions = options || {};\r\n\r\n\t\tif (!offset.x && !offset.y) {\r\n\t\t\treturn this.fire('moveend');\r\n\t\t}\r\n\t\t// If we pan too far, Chrome gets issues with tiles\r\n\t\t// and makes them disappear or appear in the wrong place (slightly offset) #2602\r\n\t\tif (options.animate !== true && !this.getSize().contains(offset)) {\r\n\t\t\tthis._resetView(this.unproject(this.project(this.getCenter()).add(offset)), this.getZoom());\r\n\t\t\treturn this;\r\n\t\t}\r\n\r\n\t\tif (!this._panAnim) {\r\n\t\t\tthis._panAnim = new PosAnimation();\r\n\r\n\t\t\tthis._panAnim.on({\r\n\t\t\t\t'step': this._onPanTransitionStep,\r\n\t\t\t\t'end': this._onPanTransitionEnd\r\n\t\t\t}, this);\r\n\t\t}\r\n\r\n\t\t// don't fire movestart if animating inertia\r\n\t\tif (!options.noMoveStart) {\r\n\t\t\tthis.fire('movestart');\r\n\t\t}\r\n\r\n\t\t// animate pan unless animate: false specified\r\n\t\tif (options.animate !== false) {\r\n\t\t\taddClass(this._mapPane, 'leaflet-pan-anim');\r\n\r\n\t\t\tvar newPos = this._getMapPanePos().subtract(offset).round();\r\n\t\t\tthis._panAnim.run(this._mapPane, newPos, options.duration || 0.25, options.easeLinearity);\r\n\t\t} else {\r\n\t\t\tthis._rawPanBy(offset);\r\n\t\t\tthis.fire('move').fire('moveend');\r\n\t\t}\r\n\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this\r\n\t// Sets the view of the map (geographical center and zoom) performing a smooth\r\n\t// pan-zoom animation.\r\n\tflyTo: function (targetCenter, targetZoom, options) {\r\n\r\n\t\toptions = options || {};\r\n\t\tif (options.animate === false || !any3d) {\r\n\t\t\treturn this.setView(targetCenter, targetZoom, options);\r\n\t\t}\r\n\r\n\t\tthis._stop();\r\n\r\n\t\tvar from = this.project(this.getCenter()),\r\n\t\t    to = this.project(targetCenter),\r\n\t\t    size = this.getSize(),\r\n\t\t    startZoom = this._zoom;\r\n\r\n\t\ttargetCenter = toLatLng(targetCenter);\r\n\t\ttargetZoom = targetZoom === undefined ? startZoom : targetZoom;\r\n\r\n\t\tvar w0 = Math.max(size.x, size.y),\r\n\t\t    w1 = w0 * this.getZoomScale(startZoom, targetZoom),\r\n\t\t    u1 = (to.distanceTo(from)) || 1,\r\n\t\t    rho = 1.42,\r\n\t\t    rho2 = rho * rho;\r\n\r\n\t\tfunction r(i) {\r\n\t\t\tvar s1 = i ? -1 : 1,\r\n\t\t\t    s2 = i ? w1 : w0,\r\n\t\t\t    t1 = w1 * w1 - w0 * w0 + s1 * rho2 * rho2 * u1 * u1,\r\n\t\t\t    b1 = 2 * s2 * rho2 * u1,\r\n\t\t\t    b = t1 / b1,\r\n\t\t\t    sq = Math.sqrt(b * b + 1) - b;\r\n\r\n\t\t\t    // workaround for floating point precision bug when sq = 0, log = -Infinite,\r\n\t\t\t    // thus triggering an infinite loop in flyTo\r\n\t\t\t    var log = sq < 0.000000001 ? -18 : Math.log(sq);\r\n\r\n\t\t\treturn log;\r\n\t\t}\r\n\r\n\t\tfunction sinh(n) { return (Math.exp(n) - Math.exp(-n)) / 2; }\r\n\t\tfunction cosh(n) { return (Math.exp(n) + Math.exp(-n)) / 2; }\r\n\t\tfunction tanh(n) { return sinh(n) / cosh(n); }\r\n\r\n\t\tvar r0 = r(0);\r\n\r\n\t\tfunction w(s) { return w0 * (cosh(r0) / cosh(r0 + rho * s)); }\r\n\t\tfunction u(s) { return w0 * (cosh(r0) * tanh(r0 + rho * s) - sinh(r0)) / rho2; }\r\n\r\n\t\tfunction easeOut(t) { return 1 - Math.pow(1 - t, 1.5); }\r\n\r\n\t\tvar start = Date.now(),\r\n\t\t    S = (r(1) - r0) / rho,\r\n\t\t    duration = options.duration ? 1000 * options.duration : 1000 * S * 0.8;\r\n\r\n\t\tfunction frame() {\r\n\t\t\tvar t = (Date.now() - start) / duration,\r\n\t\t\t    s = easeOut(t) * S;\r\n\r\n\t\t\tif (t <= 1) {\r\n\t\t\t\tthis._flyToFrame = requestAnimFrame(frame, this);\r\n\r\n\t\t\t\tthis._move(\r\n\t\t\t\t\tthis.unproject(from.add(to.subtract(from).multiplyBy(u(s) / u1)), startZoom),\r\n\t\t\t\t\tthis.getScaleZoom(w0 / w(s), startZoom),\r\n\t\t\t\t\t{flyTo: true});\r\n\r\n\t\t\t} else {\r\n\t\t\t\tthis\r\n\t\t\t\t\t._move(targetCenter, targetZoom)\r\n\t\t\t\t\t._moveEnd(true);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tthis._moveStart(true, options.noMoveStart);\r\n\r\n\t\tframe.call(this);\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this\r\n\t// Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),\r\n\t// but takes a bounds parameter like [`fitBounds`](#map-fitbounds).\r\n\tflyToBounds: function (bounds, options) {\r\n\t\tvar target = this._getBoundsCenterZoom(bounds, options);\r\n\t\treturn this.flyTo(target.center, target.zoom, options);\r\n\t},\r\n\r\n\t// @method setMaxBounds(bounds: Bounds): this\r\n\t// Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).\r\n\tsetMaxBounds: function (bounds) {\r\n\t\tbounds = toLatLngBounds(bounds);\r\n\r\n\t\tif (!bounds.isValid()) {\r\n\t\t\tthis.options.maxBounds = null;\r\n\t\t\treturn this.off('moveend', this._panInsideMaxBounds);\r\n\t\t} else if (this.options.maxBounds) {\r\n\t\t\tthis.off('moveend', this._panInsideMaxBounds);\r\n\t\t}\r\n\r\n\t\tthis.options.maxBounds = bounds;\r\n\r\n\t\tif (this._loaded) {\r\n\t\t\tthis._panInsideMaxBounds();\r\n\t\t}\r\n\r\n\t\treturn this.on('moveend', this._panInsideMaxBounds);\r\n\t},\r\n\r\n\t// @method setMinZoom(zoom: Number): this\r\n\t// Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).\r\n\tsetMinZoom: function (zoom) {\r\n\t\tvar oldZoom = this.options.minZoom;\r\n\t\tthis.options.minZoom = zoom;\r\n\r\n\t\tif (this._loaded && oldZoom !== zoom) {\r\n\t\t\tthis.fire('zoomlevelschange');\r\n\r\n\t\t\tif (this.getZoom() < this.options.minZoom) {\r\n\t\t\t\treturn this.setZoom(zoom);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// @method setMaxZoom(zoom: Number): this\r\n\t// Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).\r\n\tsetMaxZoom: function (zoom) {\r\n\t\tvar oldZoom = this.options.maxZoom;\r\n\t\tthis.options.maxZoom = zoom;\r\n\r\n\t\tif (this._loaded && oldZoom !== zoom) {\r\n\t\t\tthis.fire('zoomlevelschange');\r\n\r\n\t\t\tif (this.getZoom() > this.options.maxZoom) {\r\n\t\t\t\treturn this.setZoom(zoom);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this\r\n\t// Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.\r\n\tpanInsideBounds: function (bounds, options) {\r\n\t\tthis._enforcingBounds = true;\r\n\t\tvar center = this.getCenter(),\r\n\t\t    newCenter = this._limitCenter(center, this._zoom, toLatLngBounds(bounds));\r\n\r\n\t\tif (!center.equals(newCenter)) {\r\n\t\t\tthis.panTo(newCenter, options);\r\n\t\t}\r\n\r\n\t\tthis._enforcingBounds = false;\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// @method panInside(latlng: LatLng, options?: options): this\r\n\t// Pans the map the minimum amount to make the `latlng` visible. Use\r\n\t// `padding`, `paddingTopLeft` and `paddingTopRight` options to fit\r\n\t// the display to more restricted bounds, like [`fitBounds`](#map-fitbounds).\r\n\t// If `latlng` is already within the (optionally padded) display bounds,\r\n\t// the map will not be panned.\r\n\tpanInside: function (latlng, options) {\r\n\t\toptions = options || {};\r\n\r\n\t\tvar paddingTL = toPoint(options.paddingTopLeft || options.padding || [0, 0]),\r\n\t\t    paddingBR = toPoint(options.paddingBottomRight || options.padding || [0, 0]),\r\n\t\t    center = this.getCenter(),\r\n\t\t    pixelCenter = this.project(center),\r\n\t\t    pixelPoint = this.project(latlng),\r\n\t\t    pixelBounds = this.getPixelBounds(),\r\n\t\t    halfPixelBounds = pixelBounds.getSize().divideBy(2),\r\n\t\t    paddedBounds = toBounds([pixelBounds.min.add(paddingTL), pixelBounds.max.subtract(paddingBR)]);\r\n\r\n\t\tif (!paddedBounds.contains(pixelPoint)) {\r\n\t\t\tthis._enforcingBounds = true;\r\n\t\t\tvar diff = pixelCenter.subtract(pixelPoint),\r\n\t\t\t    newCenter = toPoint(pixelPoint.x + diff.x, pixelPoint.y + diff.y);\r\n\r\n\t\t\tif (pixelPoint.x < paddedBounds.min.x || pixelPoint.x > paddedBounds.max.x) {\r\n\t\t\t\tnewCenter.x = pixelCenter.x - diff.x;\r\n\t\t\t\tif (diff.x > 0) {\r\n\t\t\t\t\tnewCenter.x += halfPixelBounds.x - paddingTL.x;\r\n\t\t\t\t} else {\r\n\t\t\t\t\tnewCenter.x -= halfPixelBounds.x - paddingBR.x;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\tif (pixelPoint.y < paddedBounds.min.y || pixelPoint.y > paddedBounds.max.y) {\r\n\t\t\t\tnewCenter.y = pixelCenter.y - diff.y;\r\n\t\t\t\tif (diff.y > 0) {\r\n\t\t\t\t\tnewCenter.y += halfPixelBounds.y - paddingTL.y;\r\n\t\t\t\t} else {\r\n\t\t\t\t\tnewCenter.y -= halfPixelBounds.y - paddingBR.y;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\tthis.panTo(this.unproject(newCenter), options);\r\n\t\t\tthis._enforcingBounds = false;\r\n\t\t}\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// @method invalidateSize(options: Zoom/pan options): this\r\n\t// Checks if the map container size changed and updates the map if so —\r\n\t// call it after you've changed the map size dynamically, also animating\r\n\t// pan by default. If `options.pan` is `false`, panning will not occur.\r\n\t// If `options.debounceMoveend` is `true`, it will delay `moveend` event so\r\n\t// that it doesn't happen often even if the method is called many\r\n\t// times in a row.\r\n\r\n\t// @alternative\r\n\t// @method invalidateSize(animate: Boolean): this\r\n\t// Checks if the map container size changed and updates the map if so —\r\n\t// call it after you've changed the map size dynamically, also animating\r\n\t// pan by default.\r\n\tinvalidateSize: function (options) {\r\n\t\tif (!this._loaded) { return this; }\r\n\r\n\t\toptions = extend({\r\n\t\t\tanimate: false,\r\n\t\t\tpan: true\r\n\t\t}, options === true ? {animate: true} : options);\r\n\r\n\t\tvar oldSize = this.getSize();\r\n\t\tthis._sizeChanged = true;\r\n\t\tthis._lastCenter = null;\r\n\r\n\t\tvar newSize = this.getSize(),\r\n\t\t    oldCenter = oldSize.divideBy(2).round(),\r\n\t\t    newCenter = newSize.divideBy(2).round(),\r\n\t\t    offset = oldCenter.subtract(newCenter);\r\n\r\n\t\tif (!offset.x && !offset.y) { return this; }\r\n\r\n\t\tif (options.animate && options.pan) {\r\n\t\t\tthis.panBy(offset);\r\n\r\n\t\t} else {\r\n\t\t\tif (options.pan) {\r\n\t\t\t\tthis._rawPanBy(offset);\r\n\t\t\t}\r\n\r\n\t\t\tthis.fire('move');\r\n\r\n\t\t\tif (options.debounceMoveend) {\r\n\t\t\t\tclearTimeout(this._sizeTimer);\r\n\t\t\t\tthis._sizeTimer = setTimeout(bind(this.fire, this, 'moveend'), 200);\r\n\t\t\t} else {\r\n\t\t\t\tthis.fire('moveend');\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// @section Map state change events\r\n\t\t// @event resize: ResizeEvent\r\n\t\t// Fired when the map is resized.\r\n\t\treturn this.fire('resize', {\r\n\t\t\toldSize: oldSize,\r\n\t\t\tnewSize: newSize\r\n\t\t});\r\n\t},\r\n\r\n\t// @section Methods for modifying map state\r\n\t// @method stop(): this\r\n\t// Stops the currently running `panTo` or `flyTo` animation, if any.\r\n\tstop: function () {\r\n\t\tthis.setZoom(this._limitZoom(this._zoom));\r\n\t\tif (!this.options.zoomSnap) {\r\n\t\t\tthis.fire('viewreset');\r\n\t\t}\r\n\t\treturn this._stop();\r\n\t},\r\n\r\n\t// @section Geolocation methods\r\n\t// @method locate(options?: Locate options): this\r\n\t// Tries to locate the user using the Geolocation API, firing a [`locationfound`](#map-locationfound)\r\n\t// event with location data on success or a [`locationerror`](#map-locationerror) event on failure,\r\n\t// and optionally sets the map view to the user's location with respect to\r\n\t// detection accuracy (or to the world view if geolocation failed).\r\n\t// Note that, if your page doesn't use HTTPS, this method will fail in\r\n\t// modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))\r\n\t// See `Locate options` for more details.\r\n\tlocate: function (options) {\r\n\r\n\t\toptions = this._locateOptions = extend({\r\n\t\t\ttimeout: 10000,\r\n\t\t\twatch: false\r\n\t\t\t// setView: false\r\n\t\t\t// maxZoom: <Number>\r\n\t\t\t// maximumAge: 0\r\n\t\t\t// enableHighAccuracy: false\r\n\t\t}, options);\r\n\r\n\t\tif (!('geolocation' in navigator)) {\r\n\t\t\tthis._handleGeolocationError({\r\n\t\t\t\tcode: 0,\r\n\t\t\t\tmessage: 'Geolocation not supported.'\r\n\t\t\t});\r\n\t\t\treturn this;\r\n\t\t}\r\n\r\n\t\tvar onResponse = bind(this._handleGeolocationResponse, this),\r\n\t\t    onError = bind(this._handleGeolocationError, this);\r\n\r\n\t\tif (options.watch) {\r\n\t\t\tthis._locationWatchId =\r\n\t\t\t        navigator.geolocation.watchPosition(onResponse, onError, options);\r\n\t\t} else {\r\n\t\t\tnavigator.geolocation.getCurrentPosition(onResponse, onError, options);\r\n\t\t}\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// @method stopLocate(): this\r\n\t// Stops watching location previously initiated by `map.locate({watch: true})`\r\n\t// and aborts resetting the map view if map.locate was called with\r\n\t// `{setView: true}`.\r\n\tstopLocate: function () {\r\n\t\tif (navigator.geolocation && navigator.geolocation.clearWatch) {\r\n\t\t\tnavigator.geolocation.clearWatch(this._locationWatchId);\r\n\t\t}\r\n\t\tif (this._locateOptions) {\r\n\t\t\tthis._locateOptions.setView = false;\r\n\t\t}\r\n\t\treturn this;\r\n\t},\r\n\r\n\t_handleGeolocationError: function (error) {\r\n\t\tvar c = error.code,\r\n\t\t    message = error.message ||\r\n\t\t            (c === 1 ? 'permission denied' :\r\n\t\t            (c === 2 ? 'position unavailable' : 'timeout'));\r\n\r\n\t\tif (this._locateOptions.setView && !this._loaded) {\r\n\t\t\tthis.fitWorld();\r\n\t\t}\r\n\r\n\t\t// @section Location events\r\n\t\t// @event locationerror: ErrorEvent\r\n\t\t// Fired when geolocation (using the [`locate`](#map-locate) method) failed.\r\n\t\tthis.fire('locationerror', {\r\n\t\t\tcode: c,\r\n\t\t\tmessage: 'Geolocation error: ' + message + '.'\r\n\t\t});\r\n\t},\r\n\r\n\t_handleGeolocationResponse: function (pos) {\r\n\t\tvar lat = pos.coords.latitude,\r\n\t\t    lng = pos.coords.longitude,\r\n\t\t    latlng = new LatLng(lat, lng),\r\n\t\t    bounds = latlng.toBounds(pos.coords.accuracy * 2),\r\n\t\t    options = this._locateOptions;\r\n\r\n\t\tif (options.setView) {\r\n\t\t\tvar zoom = this.getBoundsZoom(bounds);\r\n\t\t\tthis.setView(latlng, options.maxZoom ? Math.min(zoom, options.maxZoom) : zoom);\r\n\t\t}\r\n\r\n\t\tvar data = {\r\n\t\t\tlatlng: latlng,\r\n\t\t\tbounds: bounds,\r\n\t\t\ttimestamp: pos.timestamp\r\n\t\t};\r\n\r\n\t\tfor (var i in pos.coords) {\r\n\t\t\tif (typeof pos.coords[i] === 'number') {\r\n\t\t\t\tdata[i] = pos.coords[i];\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// @event locationfound: LocationEvent\r\n\t\t// Fired when geolocation (using the [`locate`](#map-locate) method)\r\n\t\t// went successfully.\r\n\t\tthis.fire('locationfound', data);\r\n\t},\r\n\r\n\t// TODO Appropriate docs section?\r\n\t// @section Other Methods\r\n\t// @method addHandler(name: String, HandlerClass: Function): this\r\n\t// Adds a new `Handler` to the map, given its name and constructor function.\r\n\taddHandler: function (name, HandlerClass) {\r\n\t\tif (!HandlerClass) { return this; }\r\n\r\n\t\tvar handler = this[name] = new HandlerClass(this);\r\n\r\n\t\tthis._handlers.push(handler);\r\n\r\n\t\tif (this.options[name]) {\r\n\t\t\thandler.enable();\r\n\t\t}\r\n\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// @method remove(): this\r\n\t// Destroys the map and clears all related event listeners.\r\n\tremove: function () {\r\n\r\n\t\tthis._initEvents(true);\r\n\r\n\t\tif (this._containerId !== this._container._leaflet_id) {\r\n\t\t\tthrow new Error('Map container is being reused by another instance');\r\n\t\t}\r\n\r\n\t\ttry {\r\n\t\t\t// throws error in IE6-8\r\n\t\t\tdelete this._container._leaflet_id;\r\n\t\t\tdelete this._containerId;\r\n\t\t} catch (e) {\r\n\t\t\t/*eslint-disable */\r\n\t\t\tthis._container._leaflet_id = undefined;\r\n\t\t\t/* eslint-enable */\r\n\t\t\tthis._containerId = undefined;\r\n\t\t}\r\n\r\n\t\tif (this._locationWatchId !== undefined) {\r\n\t\t\tthis.stopLocate();\r\n\t\t}\r\n\r\n\t\tthis._stop();\r\n\r\n\t\tremove(this._mapPane);\r\n\r\n\t\tif (this._clearControlPos) {\r\n\t\t\tthis._clearControlPos();\r\n\t\t}\r\n\t\tif (this._resizeRequest) {\r\n\t\t\tcancelAnimFrame(this._resizeRequest);\r\n\t\t\tthis._resizeRequest = null;\r\n\t\t}\r\n\r\n\t\tthis._clearHandlers();\r\n\r\n\t\tif (this._loaded) {\r\n\t\t\t// @section Map state change events\r\n\t\t\t// @event unload: Event\r\n\t\t\t// Fired when the map is destroyed with [remove](#map-remove) method.\r\n\t\t\tthis.fire('unload');\r\n\t\t}\r\n\r\n\t\tvar i;\r\n\t\tfor (i in this._layers) {\r\n\t\t\tthis._layers[i].remove();\r\n\t\t}\r\n\t\tfor (i in this._panes) {\r\n\t\t\tremove(this._panes[i]);\r\n\t\t}\r\n\r\n\t\tthis._layers = [];\r\n\t\tthis._panes = [];\r\n\t\tdelete this._mapPane;\r\n\t\tdelete this._renderer;\r\n\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// @section Other Methods\r\n\t// @method createPane(name: String, container?: HTMLElement): HTMLElement\r\n\t// Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,\r\n\t// then returns it. The pane is created as a child of `container`, or\r\n\t// as a child of the main map pane if not set.\r\n\tcreatePane: function (name, container) {\r\n\t\tvar className = 'leaflet-pane' + (name ? ' leaflet-' + name.replace('Pane', '') + '-pane' : ''),\r\n\t\t    pane = create$1('div', className, container || this._mapPane);\r\n\r\n\t\tif (name) {\r\n\t\t\tthis._panes[name] = pane;\r\n\t\t}\r\n\t\treturn pane;\r\n\t},\r\n\r\n\t// @section Methods for Getting Map State\r\n\r\n\t// @method getCenter(): LatLng\r\n\t// Returns the geographical center of the map view\r\n\tgetCenter: function () {\r\n\t\tthis._checkIfLoaded();\r\n\r\n\t\tif (this._lastCenter && !this._moved()) {\r\n\t\t\treturn this._lastCenter;\r\n\t\t}\r\n\t\treturn this.layerPointToLatLng(this._getCenterLayerPoint());\r\n\t},\r\n\r\n\t// @method getZoom(): Number\r\n\t// Returns the current zoom level of the map view\r\n\tgetZoom: function () {\r\n\t\treturn this._zoom;\r\n\t},\r\n\r\n\t// @method getBounds(): LatLngBounds\r\n\t// Returns the geographical bounds visible in the current map view\r\n\tgetBounds: function () {\r\n\t\tvar bounds = this.getPixelBounds(),\r\n\t\t    sw = this.unproject(bounds.getBottomLeft()),\r\n\t\t    ne = this.unproject(bounds.getTopRight());\r\n\r\n\t\treturn new LatLngBounds(sw, ne);\r\n\t},\r\n\r\n\t// @method getMinZoom(): Number\r\n\t// Returns the minimum zoom level of the map (if set in the `minZoom` option of the map or of any layers), or `0` by default.\r\n\tgetMinZoom: function () {\r\n\t\treturn this.options.minZoom === undefined ? this._layersMinZoom || 0 : this.options.minZoom;\r\n\t},\r\n\r\n\t// @method getMaxZoom(): Number\r\n\t// Returns the maximum zoom level of the map (if set in the `maxZoom` option of the map or of any layers).\r\n\tgetMaxZoom: function () {\r\n\t\treturn this.options.maxZoom === undefined ?\r\n\t\t\t(this._layersMaxZoom === undefined ? Infinity : this._layersMaxZoom) :\r\n\t\t\tthis.options.maxZoom;\r\n\t},\r\n\r\n\t// @method getBoundsZoom(bounds: LatLngBounds, inside?: Boolean, padding?: Point): Number\r\n\t// Returns the maximum zoom level on which the given bounds fit to the map\r\n\t// view in its entirety. If `inside` (optional) is set to `true`, the method\r\n\t// instead returns the minimum zoom level on which the map view fits into\r\n\t// the given bounds in its entirety.\r\n\tgetBoundsZoom: function (bounds, inside, padding) { // (LatLngBounds[, Boolean, Point]) -> Number\r\n\t\tbounds = toLatLngBounds(bounds);\r\n\t\tpadding = toPoint(padding || [0, 0]);\r\n\r\n\t\tvar zoom = this.getZoom() || 0,\r\n\t\t    min = this.getMinZoom(),\r\n\t\t    max = this.getMaxZoom(),\r\n\t\t    nw = bounds.getNorthWest(),\r\n\t\t    se = bounds.getSouthEast(),\r\n\t\t    size = this.getSize().subtract(padding),\r\n\t\t    boundsSize = toBounds(this.project(se, zoom), this.project(nw, zoom)).getSize(),\r\n\t\t    snap = any3d ? this.options.zoomSnap : 1,\r\n\t\t    scalex = size.x / boundsSize.x,\r\n\t\t    scaley = size.y / boundsSize.y,\r\n\t\t    scale = inside ? Math.max(scalex, scaley) : Math.min(scalex, scaley);\r\n\r\n\t\tzoom = this.getScaleZoom(scale, zoom);\r\n\r\n\t\tif (snap) {\r\n\t\t\tzoom = Math.round(zoom / (snap / 100)) * (snap / 100); // don't jump if within 1% of a snap level\r\n\t\t\tzoom = inside ? Math.ceil(zoom / snap) * snap : Math.floor(zoom / snap) * snap;\r\n\t\t}\r\n\r\n\t\treturn Math.max(min, Math.min(max, zoom));\r\n\t},\r\n\r\n\t// @method getSize(): Point\r\n\t// Returns the current size of the map container (in pixels).\r\n\tgetSize: function () {\r\n\t\tif (!this._size || this._sizeChanged) {\r\n\t\t\tthis._size = new Point(\r\n\t\t\t\tthis._container.clientWidth || 0,\r\n\t\t\t\tthis._container.clientHeight || 0);\r\n\r\n\t\t\tthis._sizeChanged = false;\r\n\t\t}\r\n\t\treturn this._size.clone();\r\n\t},\r\n\r\n\t// @method getPixelBounds(): Bounds\r\n\t// Returns the bounds of the current map view in projected pixel\r\n\t// coordinates (sometimes useful in layer and overlay implementations).\r\n\tgetPixelBounds: function (center, zoom) {\r\n\t\tvar topLeftPoint = this._getTopLeftPoint(center, zoom);\r\n\t\treturn new Bounds(topLeftPoint, topLeftPoint.add(this.getSize()));\r\n\t},\r\n\r\n\t// TODO: Check semantics - isn't the pixel origin the 0,0 coord relative to\r\n\t// the map pane? \"left point of the map layer\" can be confusing, specially\r\n\t// since there can be negative offsets.\r\n\t// @method getPixelOrigin(): Point\r\n\t// Returns the projected pixel coordinates of the top left point of\r\n\t// the map layer (useful in custom layer and overlay implementations).\r\n\tgetPixelOrigin: function () {\r\n\t\tthis._checkIfLoaded();\r\n\t\treturn this._pixelOrigin;\r\n\t},\r\n\r\n\t// @method getPixelWorldBounds(zoom?: Number): Bounds\r\n\t// Returns the world's bounds in pixel coordinates for zoom level `zoom`.\r\n\t// If `zoom` is omitted, the map's current zoom level is used.\r\n\tgetPixelWorldBounds: function (zoom) {\r\n\t\treturn this.options.crs.getProjectedBounds(zoom === undefined ? this.getZoom() : zoom);\r\n\t},\r\n\r\n\t// @section Other Methods\r\n\r\n\t// @method getPane(pane: String|HTMLElement): HTMLElement\r\n\t// Returns a [map pane](#map-pane), given its name or its HTML element (its identity).\r\n\tgetPane: function (pane) {\r\n\t\treturn typeof pane === 'string' ? this._panes[pane] : pane;\r\n\t},\r\n\r\n\t// @method getPanes(): Object\r\n\t// Returns a plain object containing the names of all [panes](#map-pane) as keys and\r\n\t// the panes as values.\r\n\tgetPanes: function () {\r\n\t\treturn this._panes;\r\n\t},\r\n\r\n\t// @method getContainer: HTMLElement\r\n\t// Returns the HTML element that contains the map.\r\n\tgetContainer: function () {\r\n\t\treturn this._container;\r\n\t},\r\n\r\n\r\n\t// @section Conversion Methods\r\n\r\n\t// @method getZoomScale(toZoom: Number, fromZoom: Number): Number\r\n\t// Returns the scale factor to be applied to a map transition from zoom level\r\n\t// `fromZoom` to `toZoom`. Used internally to help with zoom animations.\r\n\tgetZoomScale: function (toZoom, fromZoom) {\r\n\t\t// TODO replace with universal implementation after refactoring projections\r\n\t\tvar crs = this.options.crs;\r\n\t\tfromZoom = fromZoom === undefined ? this._zoom : fromZoom;\r\n\t\treturn crs.scale(toZoom) / crs.scale(fromZoom);\r\n\t},\r\n\r\n\t// @method getScaleZoom(scale: Number, fromZoom: Number): Number\r\n\t// Returns the zoom level that the map would end up at, if it is at `fromZoom`\r\n\t// level and everything is scaled by a factor of `scale`. Inverse of\r\n\t// [`getZoomScale`](#map-getZoomScale).\r\n\tgetScaleZoom: function (scale, fromZoom) {\r\n\t\tvar crs = this.options.crs;\r\n\t\tfromZoom = fromZoom === undefined ? this._zoom : fromZoom;\r\n\t\tvar zoom = crs.zoom(scale * crs.scale(fromZoom));\r\n\t\treturn isNaN(zoom) ? Infinity : zoom;\r\n\t},\r\n\r\n\t// @method project(latlng: LatLng, zoom: Number): Point\r\n\t// Projects a geographical coordinate `LatLng` according to the projection\r\n\t// of the map's CRS, then scales it according to `zoom` and the CRS's\r\n\t// `Transformation`. The result is pixel coordinate relative to\r\n\t// the CRS origin.\r\n\tproject: function (latlng, zoom) {\r\n\t\tzoom = zoom === undefined ? this._zoom : zoom;\r\n\t\treturn this.options.crs.latLngToPoint(toLatLng(latlng), zoom);\r\n\t},\r\n\r\n\t// @method unproject(point: Point, zoom: Number): LatLng\r\n\t// Inverse of [`project`](#map-project).\r\n\tunproject: function (point, zoom) {\r\n\t\tzoom = zoom === undefined ? this._zoom : zoom;\r\n\t\treturn this.options.crs.pointToLatLng(toPoint(point), zoom);\r\n\t},\r\n\r\n\t// @method layerPointToLatLng(point: Point): LatLng\r\n\t// Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),\r\n\t// returns the corresponding geographical coordinate (for the current zoom level).\r\n\tlayerPointToLatLng: function (point) {\r\n\t\tvar projectedPoint = toPoint(point).add(this.getPixelOrigin());\r\n\t\treturn this.unproject(projectedPoint);\r\n\t},\r\n\r\n\t// @method latLngToLayerPoint(latlng: LatLng): Point\r\n\t// Given a geographical coordinate, returns the corresponding pixel coordinate\r\n\t// relative to the [origin pixel](#map-getpixelorigin).\r\n\tlatLngToLayerPoint: function (latlng) {\r\n\t\tvar projectedPoint = this.project(toLatLng(latlng))._round();\r\n\t\treturn projectedPoint._subtract(this.getPixelOrigin());\r\n\t},\r\n\r\n\t// @method wrapLatLng(latlng: LatLng): LatLng\r\n\t// Returns a `LatLng` where `lat` and `lng` has been wrapped according to the\r\n\t// map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the\r\n\t// CRS's bounds.\r\n\t// By default this means longitude is wrapped around the dateline so its\r\n\t// value is between -180 and +180 degrees.\r\n\twrapLatLng: function (latlng) {\r\n\t\treturn this.options.crs.wrapLatLng(toLatLng(latlng));\r\n\t},\r\n\r\n\t// @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds\r\n\t// Returns a `LatLngBounds` with the same size as the given one, ensuring that\r\n\t// its center is within the CRS's bounds.\r\n\t// By default this means the center longitude is wrapped around the dateline so its\r\n\t// value is between -180 and +180 degrees, and the majority of the bounds\r\n\t// overlaps the CRS's bounds.\r\n\twrapLatLngBounds: function (latlng) {\r\n\t\treturn this.options.crs.wrapLatLngBounds(toLatLngBounds(latlng));\r\n\t},\r\n\r\n\t// @method distance(latlng1: LatLng, latlng2: LatLng): Number\r\n\t// Returns the distance between two geographical coordinates according to\r\n\t// the map's CRS. By default this measures distance in meters.\r\n\tdistance: function (latlng1, latlng2) {\r\n\t\treturn this.options.crs.distance(toLatLng(latlng1), toLatLng(latlng2));\r\n\t},\r\n\r\n\t// @method containerPointToLayerPoint(point: Point): Point\r\n\t// Given a pixel coordinate relative to the map container, returns the corresponding\r\n\t// pixel coordinate relative to the [origin pixel](#map-getpixelorigin).\r\n\tcontainerPointToLayerPoint: function (point) { // (Point)\r\n\t\treturn toPoint(point).subtract(this._getMapPanePos());\r\n\t},\r\n\r\n\t// @method layerPointToContainerPoint(point: Point): Point\r\n\t// Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),\r\n\t// returns the corresponding pixel coordinate relative to the map container.\r\n\tlayerPointToContainerPoint: function (point) { // (Point)\r\n\t\treturn toPoint(point).add(this._getMapPanePos());\r\n\t},\r\n\r\n\t// @method containerPointToLatLng(point: Point): LatLng\r\n\t// Given a pixel coordinate relative to the map container, returns\r\n\t// the corresponding geographical coordinate (for the current zoom level).\r\n\tcontainerPointToLatLng: function (point) {\r\n\t\tvar layerPoint = this.containerPointToLayerPoint(toPoint(point));\r\n\t\treturn this.layerPointToLatLng(layerPoint);\r\n\t},\r\n\r\n\t// @method latLngToContainerPoint(latlng: LatLng): Point\r\n\t// Given a geographical coordinate, returns the corresponding pixel coordinate\r\n\t// relative to the map container.\r\n\tlatLngToContainerPoint: function (latlng) {\r\n\t\treturn this.layerPointToContainerPoint(this.latLngToLayerPoint(toLatLng(latlng)));\r\n\t},\r\n\r\n\t// @method mouseEventToContainerPoint(ev: MouseEvent): Point\r\n\t// Given a MouseEvent object, returns the pixel coordinate relative to the\r\n\t// map container where the event took place.\r\n\tmouseEventToContainerPoint: function (e) {\r\n\t\treturn getMousePosition(e, this._container);\r\n\t},\r\n\r\n\t// @method mouseEventToLayerPoint(ev: MouseEvent): Point\r\n\t// Given a MouseEvent object, returns the pixel coordinate relative to\r\n\t// the [origin pixel](#map-getpixelorigin) where the event took place.\r\n\tmouseEventToLayerPoint: function (e) {\r\n\t\treturn this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e));\r\n\t},\r\n\r\n\t// @method mouseEventToLatLng(ev: MouseEvent): LatLng\r\n\t// Given a MouseEvent object, returns geographical coordinate where the\r\n\t// event took place.\r\n\tmouseEventToLatLng: function (e) { // (MouseEvent)\r\n\t\treturn this.layerPointToLatLng(this.mouseEventToLayerPoint(e));\r\n\t},\r\n\r\n\r\n\t// map initialization methods\r\n\r\n\t_initContainer: function (id) {\r\n\t\tvar container = this._container = get(id);\r\n\r\n\t\tif (!container) {\r\n\t\t\tthrow new Error('Map container not found.');\r\n\t\t} else if (container._leaflet_id) {\r\n\t\t\tthrow new Error('Map container is already initialized.');\r\n\t\t}\r\n\r\n\t\ton(container, 'scroll', this._onScroll, this);\r\n\t\tthis._containerId = stamp(container);\r\n\t},\r\n\r\n\t_initLayout: function () {\r\n\t\tvar container = this._container;\r\n\r\n\t\tthis._fadeAnimated = this.options.fadeAnimation && any3d;\r\n\r\n\t\taddClass(container, 'leaflet-container' +\r\n\t\t\t(touch ? ' leaflet-touch' : '') +\r\n\t\t\t(retina ? ' leaflet-retina' : '') +\r\n\t\t\t(ielt9 ? ' leaflet-oldie' : '') +\r\n\t\t\t(safari ? ' leaflet-safari' : '') +\r\n\t\t\t(this._fadeAnimated ? ' leaflet-fade-anim' : ''));\r\n\r\n\t\tvar position = getStyle(container, 'position');\r\n\r\n\t\tif (position !== 'absolute' && position !== 'relative' && position !== 'fixed') {\r\n\t\t\tcontainer.style.position = 'relative';\r\n\t\t}\r\n\r\n\t\tthis._initPanes();\r\n\r\n\t\tif (this._initControlPos) {\r\n\t\t\tthis._initControlPos();\r\n\t\t}\r\n\t},\r\n\r\n\t_initPanes: function () {\r\n\t\tvar panes = this._panes = {};\r\n\t\tthis._paneRenderers = {};\r\n\r\n\t\t// @section\r\n\t\t//\r\n\t\t// Panes are DOM elements used to control the ordering of layers on the map. You\r\n\t\t// can access panes with [`map.getPane`](#map-getpane) or\r\n\t\t// [`map.getPanes`](#map-getpanes) methods. New panes can be created with the\r\n\t\t// [`map.createPane`](#map-createpane) method.\r\n\t\t//\r\n\t\t// Every map has the following default panes that differ only in zIndex.\r\n\t\t//\r\n\t\t// @pane mapPane: HTMLElement = 'auto'\r\n\t\t// Pane that contains all other map panes\r\n\r\n\t\tthis._mapPane = this.createPane('mapPane', this._container);\r\n\t\tsetPosition(this._mapPane, new Point(0, 0));\r\n\r\n\t\t// @pane tilePane: HTMLElement = 200\r\n\t\t// Pane for `GridLayer`s and `TileLayer`s\r\n\t\tthis.createPane('tilePane');\r\n\t\t// @pane overlayPane: HTMLElement = 400\r\n\t\t// Pane for vectors (`Path`s, like `Polyline`s and `Polygon`s), `ImageOverlay`s and `VideoOverlay`s\r\n\t\tthis.createPane('shadowPane');\r\n\t\t// @pane shadowPane: HTMLElement = 500\r\n\t\t// Pane for overlay shadows (e.g. `Marker` shadows)\r\n\t\tthis.createPane('overlayPane');\r\n\t\t// @pane markerPane: HTMLElement = 600\r\n\t\t// Pane for `Icon`s of `Marker`s\r\n\t\tthis.createPane('markerPane');\r\n\t\t// @pane tooltipPane: HTMLElement = 650\r\n\t\t// Pane for `Tooltip`s.\r\n\t\tthis.createPane('tooltipPane');\r\n\t\t// @pane popupPane: HTMLElement = 700\r\n\t\t// Pane for `Popup`s.\r\n\t\tthis.createPane('popupPane');\r\n\r\n\t\tif (!this.options.markerZoomAnimation) {\r\n\t\t\taddClass(panes.markerPane, 'leaflet-zoom-hide');\r\n\t\t\taddClass(panes.shadowPane, 'leaflet-zoom-hide');\r\n\t\t}\r\n\t},\r\n\r\n\r\n\t// private methods that modify map state\r\n\r\n\t// @section Map state change events\r\n\t_resetView: function (center, zoom) {\r\n\t\tsetPosition(this._mapPane, new Point(0, 0));\r\n\r\n\t\tvar loading = !this._loaded;\r\n\t\tthis._loaded = true;\r\n\t\tzoom = this._limitZoom(zoom);\r\n\r\n\t\tthis.fire('viewprereset');\r\n\r\n\t\tvar zoomChanged = this._zoom !== zoom;\r\n\t\tthis\r\n\t\t\t._moveStart(zoomChanged, false)\r\n\t\t\t._move(center, zoom)\r\n\t\t\t._moveEnd(zoomChanged);\r\n\r\n\t\t// @event viewreset: Event\r\n\t\t// Fired when the map needs to redraw its content (this usually happens\r\n\t\t// on map zoom or load). Very useful for creating custom overlays.\r\n\t\tthis.fire('viewreset');\r\n\r\n\t\t// @event load: Event\r\n\t\t// Fired when the map is initialized (when its center and zoom are set\r\n\t\t// for the first time).\r\n\t\tif (loading) {\r\n\t\t\tthis.fire('load');\r\n\t\t}\r\n\t},\r\n\r\n\t_moveStart: function (zoomChanged, noMoveStart) {\r\n\t\t// @event zoomstart: Event\r\n\t\t// Fired when the map zoom is about to change (e.g. before zoom animation).\r\n\t\t// @event movestart: Event\r\n\t\t// Fired when the view of the map starts changing (e.g. user starts dragging the map).\r\n\t\tif (zoomChanged) {\r\n\t\t\tthis.fire('zoomstart');\r\n\t\t}\r\n\t\tif (!noMoveStart) {\r\n\t\t\tthis.fire('movestart');\r\n\t\t}\r\n\t\treturn this;\r\n\t},\r\n\r\n\t_move: function (center, zoom, data) {\r\n\t\tif (zoom === undefined) {\r\n\t\t\tzoom = this._zoom;\r\n\t\t}\r\n\t\tvar zoomChanged = this._zoom !== zoom;\r\n\r\n\t\tthis._zoom = zoom;\r\n\t\tthis._lastCenter = center;\r\n\t\tthis._pixelOrigin = this._getNewPixelOrigin(center);\r\n\r\n\t\t// @event zoom: Event\r\n\t\t// Fired repeatedly during any change in zoom level, including zoom\r\n\t\t// and fly animations.\r\n\t\tif (zoomChanged || (data && data.pinch)) {\t// Always fire 'zoom' if pinching because #3530\r\n\t\t\tthis.fire('zoom', data);\r\n\t\t}\r\n\r\n\t\t// @event move: Event\r\n\t\t// Fired repeatedly during any movement of the map, including pan and\r\n\t\t// fly animations.\r\n\t\treturn this.fire('move', data);\r\n\t},\r\n\r\n\t_moveEnd: function (zoomChanged) {\r\n\t\t// @event zoomend: Event\r\n\t\t// Fired when the map has changed, after any animations.\r\n\t\tif (zoomChanged) {\r\n\t\t\tthis.fire('zoomend');\r\n\t\t}\r\n\r\n\t\t// @event moveend: Event\r\n\t\t// Fired when the center of the map stops changing (e.g. user stopped\r\n\t\t// dragging the map).\r\n\t\treturn this.fire('moveend');\r\n\t},\r\n\r\n\t_stop: function () {\r\n\t\tcancelAnimFrame(this._flyToFrame);\r\n\t\tif (this._panAnim) {\r\n\t\t\tthis._panAnim.stop();\r\n\t\t}\r\n\t\treturn this;\r\n\t},\r\n\r\n\t_rawPanBy: function (offset) {\r\n\t\tsetPosition(this._mapPane, this._getMapPanePos().subtract(offset));\r\n\t},\r\n\r\n\t_getZoomSpan: function () {\r\n\t\treturn this.getMaxZoom() - this.getMinZoom();\r\n\t},\r\n\r\n\t_panInsideMaxBounds: function () {\r\n\t\tif (!this._enforcingBounds) {\r\n\t\t\tthis.panInsideBounds(this.options.maxBounds);\r\n\t\t}\r\n\t},\r\n\r\n\t_checkIfLoaded: function () {\r\n\t\tif (!this._loaded) {\r\n\t\t\tthrow new Error('Set map center and zoom first.');\r\n\t\t}\r\n\t},\r\n\r\n\t// DOM event handling\r\n\r\n\t// @section Interaction events\r\n\t_initEvents: function (remove$$1) {\r\n\t\tthis._targets = {};\r\n\t\tthis._targets[stamp(this._container)] = this;\r\n\r\n\t\tvar onOff = remove$$1 ? off : on;\r\n\r\n\t\t// @event click: MouseEvent\r\n\t\t// Fired when the user clicks (or taps) the map.\r\n\t\t// @event dblclick: MouseEvent\r\n\t\t// Fired when the user double-clicks (or double-taps) the map.\r\n\t\t// @event mousedown: MouseEvent\r\n\t\t// Fired when the user pushes the mouse button on the map.\r\n\t\t// @event mouseup: MouseEvent\r\n\t\t// Fired when the user releases the mouse button on the map.\r\n\t\t// @event mouseover: MouseEvent\r\n\t\t// Fired when the mouse enters the map.\r\n\t\t// @event mouseout: MouseEvent\r\n\t\t// Fired when the mouse leaves the map.\r\n\t\t// @event mousemove: MouseEvent\r\n\t\t// Fired while the mouse moves over the map.\r\n\t\t// @event contextmenu: MouseEvent\r\n\t\t// Fired when the user pushes the right mouse button on the map, prevents\r\n\t\t// default browser context menu from showing if there are listeners on\r\n\t\t// this event. Also fired on mobile when the user holds a single touch\r\n\t\t// for a second (also called long press).\r\n\t\t// @event keypress: KeyboardEvent\r\n\t\t// Fired when the user presses a key from the keyboard while the map is focused.\r\n\t\tonOff(this._container, 'click dblclick mousedown mouseup ' +\r\n\t\t\t'mouseover mouseout mousemove contextmenu keypress', this._handleDOMEvent, this);\r\n\r\n\t\tif (this.options.trackResize) {\r\n\t\t\tonOff(window, 'resize', this._onResize, this);\r\n\t\t}\r\n\r\n\t\tif (any3d && this.options.transform3DLimit) {\r\n\t\t\t(remove$$1 ? this.off : this.on).call(this, 'moveend', this._onMoveEnd);\r\n\t\t}\r\n\t},\r\n\r\n\t_onResize: function () {\r\n\t\tcancelAnimFrame(this._resizeRequest);\r\n\t\tthis._resizeRequest = requestAnimFrame(\r\n\t\t        function () { this.invalidateSize({debounceMoveend: true}); }, this);\r\n\t},\r\n\r\n\t_onScroll: function () {\r\n\t\tthis._container.scrollTop  = 0;\r\n\t\tthis._container.scrollLeft = 0;\r\n\t},\r\n\r\n\t_onMoveEnd: function () {\r\n\t\tvar pos = this._getMapPanePos();\r\n\t\tif (Math.max(Math.abs(pos.x), Math.abs(pos.y)) >= this.options.transform3DLimit) {\r\n\t\t\t// https://bugzilla.mozilla.org/show_bug.cgi?id=1203873 but Webkit also have\r\n\t\t\t// a pixel offset on very high values, see: http://jsfiddle.net/dg6r5hhb/\r\n\t\t\tthis._resetView(this.getCenter(), this.getZoom());\r\n\t\t}\r\n\t},\r\n\r\n\t_findEventTargets: function (e, type) {\r\n\t\tvar targets = [],\r\n\t\t    target,\r\n\t\t    isHover = type === 'mouseout' || type === 'mouseover',\r\n\t\t    src = e.target || e.srcElement,\r\n\t\t    dragging = false;\r\n\r\n\t\twhile (src) {\r\n\t\t\ttarget = this._targets[stamp(src)];\r\n\t\t\tif (target && (type === 'click' || type === 'preclick') && !e._simulated && this._draggableMoved(target)) {\r\n\t\t\t\t// Prevent firing click after you just dragged an object.\r\n\t\t\t\tdragging = true;\r\n\t\t\t\tbreak;\r\n\t\t\t}\r\n\t\t\tif (target && target.listens(type, true)) {\r\n\t\t\t\tif (isHover && !isExternalTarget(src, e)) { break; }\r\n\t\t\t\ttargets.push(target);\r\n\t\t\t\tif (isHover) { break; }\r\n\t\t\t}\r\n\t\t\tif (src === this._container) { break; }\r\n\t\t\tsrc = src.parentNode;\r\n\t\t}\r\n\t\tif (!targets.length && !dragging && !isHover && isExternalTarget(src, e)) {\r\n\t\t\ttargets = [this];\r\n\t\t}\r\n\t\treturn targets;\r\n\t},\r\n\r\n\t_handleDOMEvent: function (e) {\r\n\t\tif (!this._loaded || skipped(e)) { return; }\r\n\r\n\t\tvar type = e.type;\r\n\r\n\t\tif (type === 'mousedown' || type === 'keypress') {\r\n\t\t\t// prevents outline when clicking on keyboard-focusable element\r\n\t\t\tpreventOutline(e.target || e.srcElement);\r\n\t\t}\r\n\r\n\t\tthis._fireDOMEvent(e, type);\r\n\t},\r\n\r\n\t_mouseEvents: ['click', 'dblclick', 'mouseover', 'mouseout', 'contextmenu'],\r\n\r\n\t_fireDOMEvent: function (e, type, targets) {\r\n\r\n\t\tif (e.type === 'click') {\r\n\t\t\t// Fire a synthetic 'preclick' event which propagates up (mainly for closing popups).\r\n\t\t\t// @event preclick: MouseEvent\r\n\t\t\t// Fired before mouse click on the map (sometimes useful when you\r\n\t\t\t// want something to happen on click before any existing click\r\n\t\t\t// handlers start running).\r\n\t\t\tvar synth = extend({}, e);\r\n\t\t\tsynth.type = 'preclick';\r\n\t\t\tthis._fireDOMEvent(synth, synth.type, targets);\r\n\t\t}\r\n\r\n\t\tif (e._stopped) { return; }\r\n\r\n\t\t// Find the layer the event is propagating from and its parents.\r\n\t\ttargets = (targets || []).concat(this._findEventTargets(e, type));\r\n\r\n\t\tif (!targets.length) { return; }\r\n\r\n\t\tvar target = targets[0];\r\n\t\tif (type === 'contextmenu' && target.listens(type, true)) {\r\n\t\t\tpreventDefault(e);\r\n\t\t}\r\n\r\n\t\tvar data = {\r\n\t\t\toriginalEvent: e\r\n\t\t};\r\n\r\n\t\tif (e.type !== 'keypress') {\r\n\t\t\tvar isMarker = target.getLatLng && (!target._radius || target._radius <= 10);\r\n\t\t\tdata.containerPoint = isMarker ?\r\n\t\t\t\tthis.latLngToContainerPoint(target.getLatLng()) : this.mouseEventToContainerPoint(e);\r\n\t\t\tdata.layerPoint = this.containerPointToLayerPoint(data.containerPoint);\r\n\t\t\tdata.latlng = isMarker ? target.getLatLng() : this.layerPointToLatLng(data.layerPoint);\r\n\t\t}\r\n\r\n\t\tfor (var i = 0; i < targets.length; i++) {\r\n\t\t\ttargets[i].fire(type, data, true);\r\n\t\t\tif (data.originalEvent._stopped ||\r\n\t\t\t\t(targets[i].options.bubblingMouseEvents === false && indexOf(this._mouseEvents, type) !== -1)) { return; }\r\n\t\t}\r\n\t},\r\n\r\n\t_draggableMoved: function (obj) {\r\n\t\tobj = obj.dragging && obj.dragging.enabled() ? obj : this;\r\n\t\treturn (obj.dragging && obj.dragging.moved()) || (this.boxZoom && this.boxZoom.moved());\r\n\t},\r\n\r\n\t_clearHandlers: function () {\r\n\t\tfor (var i = 0, len = this._handlers.length; i < len; i++) {\r\n\t\t\tthis._handlers[i].disable();\r\n\t\t}\r\n\t},\r\n\r\n\t// @section Other Methods\r\n\r\n\t// @method whenReady(fn: Function, context?: Object): this\r\n\t// Runs the given function `fn` when the map gets initialized with\r\n\t// a view (center and zoom) and at least one layer, or immediately\r\n\t// if it's already initialized, optionally passing a function context.\r\n\twhenReady: function (callback, context) {\r\n\t\tif (this._loaded) {\r\n\t\t\tcallback.call(context || this, {target: this});\r\n\t\t} else {\r\n\t\t\tthis.on('load', callback, context);\r\n\t\t}\r\n\t\treturn this;\r\n\t},\r\n\r\n\r\n\t// private methods for getting map state\r\n\r\n\t_getMapPanePos: function () {\r\n\t\treturn getPosition(this._mapPane) || new Point(0, 0);\r\n\t},\r\n\r\n\t_moved: function () {\r\n\t\tvar pos = this._getMapPanePos();\r\n\t\treturn pos && !pos.equals([0, 0]);\r\n\t},\r\n\r\n\t_getTopLeftPoint: function (center, zoom) {\r\n\t\tvar pixelOrigin = center && zoom !== undefined ?\r\n\t\t\tthis._getNewPixelOrigin(center, zoom) :\r\n\t\t\tthis.getPixelOrigin();\r\n\t\treturn pixelOrigin.subtract(this._getMapPanePos());\r\n\t},\r\n\r\n\t_getNewPixelOrigin: function (center, zoom) {\r\n\t\tvar viewHalf = this.getSize()._divideBy(2);\r\n\t\treturn this.project(center, zoom)._subtract(viewHalf)._add(this._getMapPanePos())._round();\r\n\t},\r\n\r\n\t_latLngToNewLayerPoint: function (latlng, zoom, center) {\r\n\t\tvar topLeft = this._getNewPixelOrigin(center, zoom);\r\n\t\treturn this.project(latlng, zoom)._subtract(topLeft);\r\n\t},\r\n\r\n\t_latLngBoundsToNewLayerBounds: function (latLngBounds, zoom, center) {\r\n\t\tvar topLeft = this._getNewPixelOrigin(center, zoom);\r\n\t\treturn toBounds([\r\n\t\t\tthis.project(latLngBounds.getSouthWest(), zoom)._subtract(topLeft),\r\n\t\t\tthis.project(latLngBounds.getNorthWest(), zoom)._subtract(topLeft),\r\n\t\t\tthis.project(latLngBounds.getSouthEast(), zoom)._subtract(topLeft),\r\n\t\t\tthis.project(latLngBounds.getNorthEast(), zoom)._subtract(topLeft)\r\n\t\t]);\r\n\t},\r\n\r\n\t// layer point of the current center\r\n\t_getCenterLayerPoint: function () {\r\n\t\treturn this.containerPointToLayerPoint(this.getSize()._divideBy(2));\r\n\t},\r\n\r\n\t// offset of the specified place to the current center in pixels\r\n\t_getCenterOffset: function (latlng) {\r\n\t\treturn this.latLngToLayerPoint(latlng).subtract(this._getCenterLayerPoint());\r\n\t},\r\n\r\n\t// adjust center for view to get inside bounds\r\n\t_limitCenter: function (center, zoom, bounds) {\r\n\r\n\t\tif (!bounds) { return center; }\r\n\r\n\t\tvar centerPoint = this.project(center, zoom),\r\n\t\t    viewHalf = this.getSize().divideBy(2),\r\n\t\t    viewBounds = new Bounds(centerPoint.subtract(viewHalf), centerPoint.add(viewHalf)),\r\n\t\t    offset = this._getBoundsOffset(viewBounds, bounds, zoom);\r\n\r\n\t\t// If offset is less than a pixel, ignore.\r\n\t\t// This prevents unstable projections from getting into\r\n\t\t// an infinite loop of tiny offsets.\r\n\t\tif (offset.round().equals([0, 0])) {\r\n\t\t\treturn center;\r\n\t\t}\r\n\r\n\t\treturn this.unproject(centerPoint.add(offset), zoom);\r\n\t},\r\n\r\n\t// adjust offset for view to get inside bounds\r\n\t_limitOffset: function (offset, bounds) {\r\n\t\tif (!bounds) { return offset; }\r\n\r\n\t\tvar viewBounds = this.getPixelBounds(),\r\n\t\t    newBounds = new Bounds(viewBounds.min.add(offset), viewBounds.max.add(offset));\r\n\r\n\t\treturn offset.add(this._getBoundsOffset(newBounds, bounds));\r\n\t},\r\n\r\n\t// returns offset needed for pxBounds to get inside maxBounds at a specified zoom\r\n\t_getBoundsOffset: function (pxBounds, maxBounds, zoom) {\r\n\t\tvar projectedMaxBounds = toBounds(\r\n\t\t        this.project(maxBounds.getNorthEast(), zoom),\r\n\t\t        this.project(maxBounds.getSouthWest(), zoom)\r\n\t\t    ),\r\n\t\t    minOffset = projectedMaxBounds.min.subtract(pxBounds.min),\r\n\t\t    maxOffset = projectedMaxBounds.max.subtract(pxBounds.max),\r\n\r\n\t\t    dx = this._rebound(minOffset.x, -maxOffset.x),\r\n\t\t    dy = this._rebound(minOffset.y, -maxOffset.y);\r\n\r\n\t\treturn new Point(dx, dy);\r\n\t},\r\n\r\n\t_rebound: function (left, right) {\r\n\t\treturn left + right > 0 ?\r\n\t\t\tMath.round(left - right) / 2 :\r\n\t\t\tMath.max(0, Math.ceil(left)) - Math.max(0, Math.floor(right));\r\n\t},\r\n\r\n\t_limitZoom: function (zoom) {\r\n\t\tvar min = this.getMinZoom(),\r\n\t\t    max = this.getMaxZoom(),\r\n\t\t    snap = any3d ? this.options.zoomSnap : 1;\r\n\t\tif (snap) {\r\n\t\t\tzoom = Math.round(zoom / snap) * snap;\r\n\t\t}\r\n\t\treturn Math.max(min, Math.min(max, zoom));\r\n\t},\r\n\r\n\t_onPanTransitionStep: function () {\r\n\t\tthis.fire('move');\r\n\t},\r\n\r\n\t_onPanTransitionEnd: function () {\r\n\t\tremoveClass(this._mapPane, 'leaflet-pan-anim');\r\n\t\tthis.fire('moveend');\r\n\t},\r\n\r\n\t_tryAnimatedPan: function (center, options) {\r\n\t\t// difference between the new and current centers in pixels\r\n\t\tvar offset = this._getCenterOffset(center)._trunc();\r\n\r\n\t\t// don't animate too far unless animate: true specified in options\r\n\t\tif ((options && options.animate) !== true && !this.getSize().contains(offset)) { return false; }\r\n\r\n\t\tthis.panBy(offset, options);\r\n\r\n\t\treturn true;\r\n\t},\r\n\r\n\t_createAnimProxy: function () {\r\n\r\n\t\tvar proxy = this._proxy = create$1('div', 'leaflet-proxy leaflet-zoom-animated');\r\n\t\tthis._panes.mapPane.appendChild(proxy);\r\n\r\n\t\tthis.on('zoomanim', function (e) {\r\n\t\t\tvar prop = TRANSFORM,\r\n\t\t\t    transform = this._proxy.style[prop];\r\n\r\n\t\t\tsetTransform(this._proxy, this.project(e.center, e.zoom), this.getZoomScale(e.zoom, 1));\r\n\r\n\t\t\t// workaround for case when transform is the same and so transitionend event is not fired\r\n\t\t\tif (transform === this._proxy.style[prop] && this._animatingZoom) {\r\n\t\t\t\tthis._onZoomTransitionEnd();\r\n\t\t\t}\r\n\t\t}, this);\r\n\r\n\t\tthis.on('load moveend', function () {\r\n\t\t\tvar c = this.getCenter(),\r\n\t\t\t    z = this.getZoom();\r\n\t\t\tsetTransform(this._proxy, this.project(c, z), this.getZoomScale(z, 1));\r\n\t\t}, this);\r\n\r\n\t\tthis._on('unload', this._destroyAnimProxy, this);\r\n\t},\r\n\r\n\t_destroyAnimProxy: function () {\r\n\t\tremove(this._proxy);\r\n\t\tdelete this._proxy;\r\n\t},\r\n\r\n\t_catchTransitionEnd: function (e) {\r\n\t\tif (this._animatingZoom && e.propertyName.indexOf('transform') >= 0) {\r\n\t\t\tthis._onZoomTransitionEnd();\r\n\t\t}\r\n\t},\r\n\r\n\t_nothingToAnimate: function () {\r\n\t\treturn !this._container.getElementsByClassName('leaflet-zoom-animated').length;\r\n\t},\r\n\r\n\t_tryAnimatedZoom: function (center, zoom, options) {\r\n\r\n\t\tif (this._animatingZoom) { return true; }\r\n\r\n\t\toptions = options || {};\r\n\r\n\t\t// don't animate if disabled, not supported or zoom difference is too large\r\n\t\tif (!this._zoomAnimated || options.animate === false || this._nothingToAnimate() ||\r\n\t\t        Math.abs(zoom - this._zoom) > this.options.zoomAnimationThreshold) { return false; }\r\n\r\n\t\t// offset is the pixel coords of the zoom origin relative to the current center\r\n\t\tvar scale = this.getZoomScale(zoom),\r\n\t\t    offset = this._getCenterOffset(center)._divideBy(1 - 1 / scale);\r\n\r\n\t\t// don't animate if the zoom origin isn't within one screen from the current center, unless forced\r\n\t\tif (options.animate !== true && !this.getSize().contains(offset)) { return false; }\r\n\r\n\t\trequestAnimFrame(function () {\r\n\t\t\tthis\r\n\t\t\t    ._moveStart(true, false)\r\n\t\t\t    ._animateZoom(center, zoom, true);\r\n\t\t}, this);\r\n\r\n\t\treturn true;\r\n\t},\r\n\r\n\t_animateZoom: function (center, zoom, startAnim, noUpdate) {\r\n\t\tif (!this._mapPane) { return; }\r\n\r\n\t\tif (startAnim) {\r\n\t\t\tthis._animatingZoom = true;\r\n\r\n\t\t\t// remember what center/zoom to set after animation\r\n\t\t\tthis._animateToCenter = center;\r\n\t\t\tthis._animateToZoom = zoom;\r\n\r\n\t\t\taddClass(this._mapPane, 'leaflet-zoom-anim');\r\n\t\t}\r\n\r\n\t\t// @event zoomanim: ZoomAnimEvent\r\n\t\t// Fired at least once per zoom animation. For continous zoom, like pinch zooming, fired once per frame during zoom.\r\n\t\tthis.fire('zoomanim', {\r\n\t\t\tcenter: center,\r\n\t\t\tzoom: zoom,\r\n\t\t\tnoUpdate: noUpdate\r\n\t\t});\r\n\r\n\t\t// Work around webkit not firing 'transitionend', see https://github.com/Leaflet/Leaflet/issues/3689, 2693\r\n\t\tsetTimeout(bind(this._onZoomTransitionEnd, this), 250);\r\n\t},\r\n\r\n\t_onZoomTransitionEnd: function () {\r\n\t\tif (!this._animatingZoom) { return; }\r\n\r\n\t\tif (this._mapPane) {\r\n\t\t\tremoveClass(this._mapPane, 'leaflet-zoom-anim');\r\n\t\t}\r\n\r\n\t\tthis._animatingZoom = false;\r\n\r\n\t\tthis._move(this._animateToCenter, this._animateToZoom);\r\n\r\n\t\t// This anim frame should prevent an obscure iOS webkit tile loading race condition.\r\n\t\trequestAnimFrame(function () {\r\n\t\t\tthis._moveEnd(true);\r\n\t\t}, this);\r\n\t}\r\n});\r\n\r\n// @section\r\n\r\n// @factory L.map(id: String, options?: Map options)\r\n// Instantiates a map object given the DOM ID of a `<div>` element\r\n// and optionally an object literal with `Map options`.\r\n//\r\n// @alternative\r\n// @factory L.map(el: HTMLElement, options?: Map options)\r\n// Instantiates a map object given an instance of a `<div>` HTML element\r\n// and optionally an object literal with `Map options`.\r\nfunction createMap(id, options) {\r\n\treturn new Map(id, options);\r\n}\n\n/*\r\n * @class Control\r\n * @aka L.Control\r\n * @inherits Class\r\n *\r\n * L.Control is a base class for implementing map controls. Handles positioning.\r\n * All other controls extend from this class.\r\n */\r\n\r\nvar Control = Class.extend({\r\n\t// @section\r\n\t// @aka Control options\r\n\toptions: {\r\n\t\t// @option position: String = 'topright'\r\n\t\t// The position of the control (one of the map corners). Possible values are `'topleft'`,\r\n\t\t// `'topright'`, `'bottomleft'` or `'bottomright'`\r\n\t\tposition: 'topright'\r\n\t},\r\n\r\n\tinitialize: function (options) {\r\n\t\tsetOptions(this, options);\r\n\t},\r\n\r\n\t/* @section\r\n\t * Classes extending L.Control will inherit the following methods:\r\n\t *\r\n\t * @method getPosition: string\r\n\t * Returns the position of the control.\r\n\t */\r\n\tgetPosition: function () {\r\n\t\treturn this.options.position;\r\n\t},\r\n\r\n\t// @method setPosition(position: string): this\r\n\t// Sets the position of the control.\r\n\tsetPosition: function (position) {\r\n\t\tvar map = this._map;\r\n\r\n\t\tif (map) {\r\n\t\t\tmap.removeControl(this);\r\n\t\t}\r\n\r\n\t\tthis.options.position = position;\r\n\r\n\t\tif (map) {\r\n\t\t\tmap.addControl(this);\r\n\t\t}\r\n\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// @method getContainer: HTMLElement\r\n\t// Returns the HTMLElement that contains the control.\r\n\tgetContainer: function () {\r\n\t\treturn this._container;\r\n\t},\r\n\r\n\t// @method addTo(map: Map): this\r\n\t// Adds the control to the given map.\r\n\taddTo: function (map) {\r\n\t\tthis.remove();\r\n\t\tthis._map = map;\r\n\r\n\t\tvar container = this._container = this.onAdd(map),\r\n\t\t    pos = this.getPosition(),\r\n\t\t    corner = map._controlCorners[pos];\r\n\r\n\t\taddClass(container, 'leaflet-control');\r\n\r\n\t\tif (pos.indexOf('bottom') !== -1) {\r\n\t\t\tcorner.insertBefore(container, corner.firstChild);\r\n\t\t} else {\r\n\t\t\tcorner.appendChild(container);\r\n\t\t}\r\n\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// @method remove: this\r\n\t// Removes the control from the map it is currently active on.\r\n\tremove: function () {\r\n\t\tif (!this._map) {\r\n\t\t\treturn this;\r\n\t\t}\r\n\r\n\t\tremove(this._container);\r\n\r\n\t\tif (this.onRemove) {\r\n\t\t\tthis.onRemove(this._map);\r\n\t\t}\r\n\r\n\t\tthis._map = null;\r\n\r\n\t\treturn this;\r\n\t},\r\n\r\n\t_refocusOnMap: function (e) {\r\n\t\t// if map exists and event is not a keyboard event\r\n\t\tif (this._map && e && e.screenX > 0 && e.screenY > 0) {\r\n\t\t\tthis._map.getContainer().focus();\r\n\t\t}\r\n\t}\r\n});\r\n\r\nvar control = function (options) {\r\n\treturn new Control(options);\r\n};\r\n\r\n/* @section Extension methods\r\n * @uninheritable\r\n *\r\n * Every control should extend from `L.Control` and (re-)implement the following methods.\r\n *\r\n * @method onAdd(map: Map): HTMLElement\r\n * Should return the container DOM element for the control and add listeners on relevant map events. Called on [`control.addTo(map)`](#control-addTo).\r\n *\r\n * @method onRemove(map: Map)\r\n * Optional method. Should contain all clean up code that removes the listeners previously added in [`onAdd`](#control-onadd). Called on [`control.remove()`](#control-remove).\r\n */\r\n\r\n/* @namespace Map\r\n * @section Methods for Layers and Controls\r\n */\r\nMap.include({\r\n\t// @method addControl(control: Control): this\r\n\t// Adds the given control to the map\r\n\taddControl: function (control) {\r\n\t\tcontrol.addTo(this);\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// @method removeControl(control: Control): this\r\n\t// Removes the given control from the map\r\n\tremoveControl: function (control) {\r\n\t\tcontrol.remove();\r\n\t\treturn this;\r\n\t},\r\n\r\n\t_initControlPos: function () {\r\n\t\tvar corners = this._controlCorners = {},\r\n\t\t    l = 'leaflet-',\r\n\t\t    container = this._controlContainer =\r\n\t\t            create$1('div', l + 'control-container', this._container);\r\n\r\n\t\tfunction createCorner(vSide, hSide) {\r\n\t\t\tvar className = l + vSide + ' ' + l + hSide;\r\n\r\n\t\t\tcorners[vSide + hSide] = create$1('div', className, container);\r\n\t\t}\r\n\r\n\t\tcreateCorner('top', 'left');\r\n\t\tcreateCorner('top', 'right');\r\n\t\tcreateCorner('bottom', 'left');\r\n\t\tcreateCorner('bottom', 'right');\r\n\t},\r\n\r\n\t_clearControlPos: function () {\r\n\t\tfor (var i in this._controlCorners) {\r\n\t\t\tremove(this._controlCorners[i]);\r\n\t\t}\r\n\t\tremove(this._controlContainer);\r\n\t\tdelete this._controlCorners;\r\n\t\tdelete this._controlContainer;\r\n\t}\r\n});\n\n/*\r\n * @class Control.Layers\r\n * @aka L.Control.Layers\r\n * @inherits Control\r\n *\r\n * The layers control gives users the ability to switch between different base layers and switch overlays on/off (check out the [detailed example](http://leafletjs.com/examples/layers-control/)). Extends `Control`.\r\n *\r\n * @example\r\n *\r\n * ```js\r\n * var baseLayers = {\r\n * \t\"Mapbox\": mapbox,\r\n * \t\"OpenStreetMap\": osm\r\n * };\r\n *\r\n * var overlays = {\r\n * \t\"Marker\": marker,\r\n * \t\"Roads\": roadsLayer\r\n * };\r\n *\r\n * L.control.layers(baseLayers, overlays).addTo(map);\r\n * ```\r\n *\r\n * The `baseLayers` and `overlays` parameters are object literals with layer names as keys and `Layer` objects as values:\r\n *\r\n * ```js\r\n * {\r\n *     \"<someName1>\": layer1,\r\n *     \"<someName2>\": layer2\r\n * }\r\n * ```\r\n *\r\n * The layer names can contain HTML, which allows you to add additional styling to the items:\r\n *\r\n * ```js\r\n * {\"<img src='my-layer-icon' /> <span class='my-layer-item'>My Layer</span>\": myLayer}\r\n * ```\r\n */\r\n\r\nvar Layers = Control.extend({\r\n\t// @section\r\n\t// @aka Control.Layers options\r\n\toptions: {\r\n\t\t// @option collapsed: Boolean = true\r\n\t\t// If `true`, the control will be collapsed into an icon and expanded on mouse hover or touch.\r\n\t\tcollapsed: true,\r\n\t\tposition: 'topright',\r\n\r\n\t\t// @option autoZIndex: Boolean = true\r\n\t\t// If `true`, the control will assign zIndexes in increasing order to all of its layers so that the order is preserved when switching them on/off.\r\n\t\tautoZIndex: true,\r\n\r\n\t\t// @option hideSingleBase: Boolean = false\r\n\t\t// If `true`, the base layers in the control will be hidden when there is only one.\r\n\t\thideSingleBase: false,\r\n\r\n\t\t// @option sortLayers: Boolean = false\r\n\t\t// Whether to sort the layers. When `false`, layers will keep the order\r\n\t\t// in which they were added to the control.\r\n\t\tsortLayers: false,\r\n\r\n\t\t// @option sortFunction: Function = *\r\n\t\t// A [compare function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)\r\n\t\t// that will be used for sorting the layers, when `sortLayers` is `true`.\r\n\t\t// The function receives both the `L.Layer` instances and their names, as in\r\n\t\t// `sortFunction(layerA, layerB, nameA, nameB)`.\r\n\t\t// By default, it sorts layers alphabetically by their name.\r\n\t\tsortFunction: function (layerA, layerB, nameA, nameB) {\r\n\t\t\treturn nameA < nameB ? -1 : (nameB < nameA ? 1 : 0);\r\n\t\t}\r\n\t},\r\n\r\n\tinitialize: function (baseLayers, overlays, options) {\r\n\t\tsetOptions(this, options);\r\n\r\n\t\tthis._layerControlInputs = [];\r\n\t\tthis._layers = [];\r\n\t\tthis._lastZIndex = 0;\r\n\t\tthis._handlingClick = false;\r\n\r\n\t\tfor (var i in baseLayers) {\r\n\t\t\tthis._addLayer(baseLayers[i], i);\r\n\t\t}\r\n\r\n\t\tfor (i in overlays) {\r\n\t\t\tthis._addLayer(overlays[i], i, true);\r\n\t\t}\r\n\t},\r\n\r\n\tonAdd: function (map) {\r\n\t\tthis._initLayout();\r\n\t\tthis._update();\r\n\r\n\t\tthis._map = map;\r\n\t\tmap.on('zoomend', this._checkDisabledLayers, this);\r\n\r\n\t\tfor (var i = 0; i < this._layers.length; i++) {\r\n\t\t\tthis._layers[i].layer.on('add remove', this._onLayerChange, this);\r\n\t\t}\r\n\r\n\t\treturn this._container;\r\n\t},\r\n\r\n\taddTo: function (map) {\r\n\t\tControl.prototype.addTo.call(this, map);\r\n\t\t// Trigger expand after Layers Control has been inserted into DOM so that is now has an actual height.\r\n\t\treturn this._expandIfNotCollapsed();\r\n\t},\r\n\r\n\tonRemove: function () {\r\n\t\tthis._map.off('zoomend', this._checkDisabledLayers, this);\r\n\r\n\t\tfor (var i = 0; i < this._layers.length; i++) {\r\n\t\t\tthis._layers[i].layer.off('add remove', this._onLayerChange, this);\r\n\t\t}\r\n\t},\r\n\r\n\t// @method addBaseLayer(layer: Layer, name: String): this\r\n\t// Adds a base layer (radio button entry) with the given name to the control.\r\n\taddBaseLayer: function (layer, name) {\r\n\t\tthis._addLayer(layer, name);\r\n\t\treturn (this._map) ? this._update() : this;\r\n\t},\r\n\r\n\t// @method addOverlay(layer: Layer, name: String): this\r\n\t// Adds an overlay (checkbox entry) with the given name to the control.\r\n\taddOverlay: function (layer, name) {\r\n\t\tthis._addLayer(layer, name, true);\r\n\t\treturn (this._map) ? this._update() : this;\r\n\t},\r\n\r\n\t// @method removeLayer(layer: Layer): this\r\n\t// Remove the given layer from the control.\r\n\tremoveLayer: function (layer) {\r\n\t\tlayer.off('add remove', this._onLayerChange, this);\r\n\r\n\t\tvar obj = this._getLayer(stamp(layer));\r\n\t\tif (obj) {\r\n\t\t\tthis._layers.splice(this._layers.indexOf(obj), 1);\r\n\t\t}\r\n\t\treturn (this._map) ? this._update() : this;\r\n\t},\r\n\r\n\t// @method expand(): this\r\n\t// Expand the control container if collapsed.\r\n\texpand: function () {\r\n\t\taddClass(this._container, 'leaflet-control-layers-expanded');\r\n\t\tthis._section.style.height = null;\r\n\t\tvar acceptableHeight = this._map.getSize().y - (this._container.offsetTop + 50);\r\n\t\tif (acceptableHeight < this._section.clientHeight) {\r\n\t\t\taddClass(this._section, 'leaflet-control-layers-scrollbar');\r\n\t\t\tthis._section.style.height = acceptableHeight + 'px';\r\n\t\t} else {\r\n\t\t\tremoveClass(this._section, 'leaflet-control-layers-scrollbar');\r\n\t\t}\r\n\t\tthis._checkDisabledLayers();\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// @method collapse(): this\r\n\t// Collapse the control container if expanded.\r\n\tcollapse: function () {\r\n\t\tremoveClass(this._container, 'leaflet-control-layers-expanded');\r\n\t\treturn this;\r\n\t},\r\n\r\n\t_initLayout: function () {\r\n\t\tvar className = 'leaflet-control-layers',\r\n\t\t    container = this._container = create$1('div', className),\r\n\t\t    collapsed = this.options.collapsed;\r\n\r\n\t\t// makes this work on IE touch devices by stopping it from firing a mouseout event when the touch is released\r\n\t\tcontainer.setAttribute('aria-haspopup', true);\r\n\r\n\t\tdisableClickPropagation(container);\r\n\t\tdisableScrollPropagation(container);\r\n\r\n\t\tvar section = this._section = create$1('section', className + '-list');\r\n\r\n\t\tif (collapsed) {\r\n\t\t\tthis._map.on('click', this.collapse, this);\r\n\r\n\t\t\tif (!android) {\r\n\t\t\t\ton(container, {\r\n\t\t\t\t\tmouseenter: this.expand,\r\n\t\t\t\t\tmouseleave: this.collapse\r\n\t\t\t\t}, this);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tvar link = this._layersLink = create$1('a', className + '-toggle', container);\r\n\t\tlink.href = '#';\r\n\t\tlink.title = 'Layers';\r\n\r\n\t\tif (touch) {\r\n\t\t\ton(link, 'click', stop);\r\n\t\t\ton(link, 'click', this.expand, this);\r\n\t\t} else {\r\n\t\t\ton(link, 'focus', this.expand, this);\r\n\t\t}\r\n\r\n\t\tif (!collapsed) {\r\n\t\t\tthis.expand();\r\n\t\t}\r\n\r\n\t\tthis._baseLayersList = create$1('div', className + '-base', section);\r\n\t\tthis._separator = create$1('div', className + '-separator', section);\r\n\t\tthis._overlaysList = create$1('div', className + '-overlays', section);\r\n\r\n\t\tcontainer.appendChild(section);\r\n\t},\r\n\r\n\t_getLayer: function (id) {\r\n\t\tfor (var i = 0; i < this._layers.length; i++) {\r\n\r\n\t\t\tif (this._layers[i] && stamp(this._layers[i].layer) === id) {\r\n\t\t\t\treturn this._layers[i];\r\n\t\t\t}\r\n\t\t}\r\n\t},\r\n\r\n\t_addLayer: function (layer, name, overlay) {\r\n\t\tif (this._map) {\r\n\t\t\tlayer.on('add remove', this._onLayerChange, this);\r\n\t\t}\r\n\r\n\t\tthis._layers.push({\r\n\t\t\tlayer: layer,\r\n\t\t\tname: name,\r\n\t\t\toverlay: overlay\r\n\t\t});\r\n\r\n\t\tif (this.options.sortLayers) {\r\n\t\t\tthis._layers.sort(bind(function (a, b) {\r\n\t\t\t\treturn this.options.sortFunction(a.layer, b.layer, a.name, b.name);\r\n\t\t\t}, this));\r\n\t\t}\r\n\r\n\t\tif (this.options.autoZIndex && layer.setZIndex) {\r\n\t\t\tthis._lastZIndex++;\r\n\t\t\tlayer.setZIndex(this._lastZIndex);\r\n\t\t}\r\n\r\n\t\tthis._expandIfNotCollapsed();\r\n\t},\r\n\r\n\t_update: function () {\r\n\t\tif (!this._container) { return this; }\r\n\r\n\t\tempty(this._baseLayersList);\r\n\t\tempty(this._overlaysList);\r\n\r\n\t\tthis._layerControlInputs = [];\r\n\t\tvar baseLayersPresent, overlaysPresent, i, obj, baseLayersCount = 0;\r\n\r\n\t\tfor (i = 0; i < this._layers.length; i++) {\r\n\t\t\tobj = this._layers[i];\r\n\t\t\tthis._addItem(obj);\r\n\t\t\toverlaysPresent = overlaysPresent || obj.overlay;\r\n\t\t\tbaseLayersPresent = baseLayersPresent || !obj.overlay;\r\n\t\t\tbaseLayersCount += !obj.overlay ? 1 : 0;\r\n\t\t}\r\n\r\n\t\t// Hide base layers section if there's only one layer.\r\n\t\tif (this.options.hideSingleBase) {\r\n\t\t\tbaseLayersPresent = baseLayersPresent && baseLayersCount > 1;\r\n\t\t\tthis._baseLayersList.style.display = baseLayersPresent ? '' : 'none';\r\n\t\t}\r\n\r\n\t\tthis._separator.style.display = overlaysPresent && baseLayersPresent ? '' : 'none';\r\n\r\n\t\treturn this;\r\n\t},\r\n\r\n\t_onLayerChange: function (e) {\r\n\t\tif (!this._handlingClick) {\r\n\t\t\tthis._update();\r\n\t\t}\r\n\r\n\t\tvar obj = this._getLayer(stamp(e.target));\r\n\r\n\t\t// @namespace Map\r\n\t\t// @section Layer events\r\n\t\t// @event baselayerchange: LayersControlEvent\r\n\t\t// Fired when the base layer is changed through the [layer control](#control-layers).\r\n\t\t// @event overlayadd: LayersControlEvent\r\n\t\t// Fired when an overlay is selected through the [layer control](#control-layers).\r\n\t\t// @event overlayremove: LayersControlEvent\r\n\t\t// Fired when an overlay is deselected through the [layer control](#control-layers).\r\n\t\t// @namespace Control.Layers\r\n\t\tvar type = obj.overlay ?\r\n\t\t\t(e.type === 'add' ? 'overlayadd' : 'overlayremove') :\r\n\t\t\t(e.type === 'add' ? 'baselayerchange' : null);\r\n\r\n\t\tif (type) {\r\n\t\t\tthis._map.fire(type, obj);\r\n\t\t}\r\n\t},\r\n\r\n\t// IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see http://bit.ly/PqYLBe)\r\n\t_createRadioElement: function (name, checked) {\r\n\r\n\t\tvar radioHtml = '<input type=\"radio\" class=\"leaflet-control-layers-selector\" name=\"' +\r\n\t\t\t\tname + '\"' + (checked ? ' checked=\"checked\"' : '') + '/>';\r\n\r\n\t\tvar radioFragment = document.createElement('div');\r\n\t\tradioFragment.innerHTML = radioHtml;\r\n\r\n\t\treturn radioFragment.firstChild;\r\n\t},\r\n\r\n\t_addItem: function (obj) {\r\n\t\tvar label = document.createElement('label'),\r\n\t\t    checked = this._map.hasLayer(obj.layer),\r\n\t\t    input;\r\n\r\n\t\tif (obj.overlay) {\r\n\t\t\tinput = document.createElement('input');\r\n\t\t\tinput.type = 'checkbox';\r\n\t\t\tinput.className = 'leaflet-control-layers-selector';\r\n\t\t\tinput.defaultChecked = checked;\r\n\t\t} else {\r\n\t\t\tinput = this._createRadioElement('leaflet-base-layers', checked);\r\n\t\t}\r\n\r\n\t\tthis._layerControlInputs.push(input);\r\n\t\tinput.layerId = stamp(obj.layer);\r\n\r\n\t\ton(input, 'click', this._onInputClick, this);\r\n\r\n\t\tvar name = document.createElement('span');\r\n\t\tname.innerHTML = ' ' + obj.name;\r\n\r\n\t\t// Helps from preventing layer control flicker when checkboxes are disabled\r\n\t\t// https://github.com/Leaflet/Leaflet/issues/2771\r\n\t\tvar holder = document.createElement('div');\r\n\r\n\t\tlabel.appendChild(holder);\r\n\t\tholder.appendChild(input);\r\n\t\tholder.appendChild(name);\r\n\r\n\t\tvar container = obj.overlay ? this._overlaysList : this._baseLayersList;\r\n\t\tcontainer.appendChild(label);\r\n\r\n\t\tthis._checkDisabledLayers();\r\n\t\treturn label;\r\n\t},\r\n\r\n\t_onInputClick: function () {\r\n\t\tvar inputs = this._layerControlInputs,\r\n\t\t    input, layer;\r\n\t\tvar addedLayers = [],\r\n\t\t    removedLayers = [];\r\n\r\n\t\tthis._handlingClick = true;\r\n\r\n\t\tfor (var i = inputs.length - 1; i >= 0; i--) {\r\n\t\t\tinput = inputs[i];\r\n\t\t\tlayer = this._getLayer(input.layerId).layer;\r\n\r\n\t\t\tif (input.checked) {\r\n\t\t\t\taddedLayers.push(layer);\r\n\t\t\t} else if (!input.checked) {\r\n\t\t\t\tremovedLayers.push(layer);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// Bugfix issue 2318: Should remove all old layers before readding new ones\r\n\t\tfor (i = 0; i < removedLayers.length; i++) {\r\n\t\t\tif (this._map.hasLayer(removedLayers[i])) {\r\n\t\t\t\tthis._map.removeLayer(removedLayers[i]);\r\n\t\t\t}\r\n\t\t}\r\n\t\tfor (i = 0; i < addedLayers.length; i++) {\r\n\t\t\tif (!this._map.hasLayer(addedLayers[i])) {\r\n\t\t\t\tthis._map.addLayer(addedLayers[i]);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tthis._handlingClick = false;\r\n\r\n\t\tthis._refocusOnMap();\r\n\t},\r\n\r\n\t_checkDisabledLayers: function () {\r\n\t\tvar inputs = this._layerControlInputs,\r\n\t\t    input,\r\n\t\t    layer,\r\n\t\t    zoom = this._map.getZoom();\r\n\r\n\t\tfor (var i = inputs.length - 1; i >= 0; i--) {\r\n\t\t\tinput = inputs[i];\r\n\t\t\tlayer = this._getLayer(input.layerId).layer;\r\n\t\t\tinput.disabled = (layer.options.minZoom !== undefined && zoom < layer.options.minZoom) ||\r\n\t\t\t                 (layer.options.maxZoom !== undefined && zoom > layer.options.maxZoom);\r\n\r\n\t\t}\r\n\t},\r\n\r\n\t_expandIfNotCollapsed: function () {\r\n\t\tif (this._map && !this.options.collapsed) {\r\n\t\t\tthis.expand();\r\n\t\t}\r\n\t\treturn this;\r\n\t},\r\n\r\n\t_expand: function () {\r\n\t\t// Backward compatibility, remove me in 1.1.\r\n\t\treturn this.expand();\r\n\t},\r\n\r\n\t_collapse: function () {\r\n\t\t// Backward compatibility, remove me in 1.1.\r\n\t\treturn this.collapse();\r\n\t}\r\n\r\n});\r\n\r\n\r\n// @factory L.control.layers(baselayers?: Object, overlays?: Object, options?: Control.Layers options)\r\n// Creates an attribution control with the given layers. Base layers will be switched with radio buttons, while overlays will be switched with checkboxes. Note that all base layers should be passed in the base layers object, but only one should be added to the map during map instantiation.\r\nvar layers = function (baseLayers, overlays, options) {\r\n\treturn new Layers(baseLayers, overlays, options);\r\n};\n\n/*\r\n * @class Control.Zoom\r\n * @aka L.Control.Zoom\r\n * @inherits Control\r\n *\r\n * A basic zoom control with two buttons (zoom in and zoom out). It is put on the map by default unless you set its [`zoomControl` option](#map-zoomcontrol) to `false`. Extends `Control`.\r\n */\r\n\r\nvar Zoom = Control.extend({\r\n\t// @section\r\n\t// @aka Control.Zoom options\r\n\toptions: {\r\n\t\tposition: 'topleft',\r\n\r\n\t\t// @option zoomInText: String = '+'\r\n\t\t// The text set on the 'zoom in' button.\r\n\t\tzoomInText: '+',\r\n\r\n\t\t// @option zoomInTitle: String = 'Zoom in'\r\n\t\t// The title set on the 'zoom in' button.\r\n\t\tzoomInTitle: 'Zoom in',\r\n\r\n\t\t// @option zoomOutText: String = '&#x2212;'\r\n\t\t// The text set on the 'zoom out' button.\r\n\t\tzoomOutText: '&#x2212;',\r\n\r\n\t\t// @option zoomOutTitle: String = 'Zoom out'\r\n\t\t// The title set on the 'zoom out' button.\r\n\t\tzoomOutTitle: 'Zoom out'\r\n\t},\r\n\r\n\tonAdd: function (map) {\r\n\t\tvar zoomName = 'leaflet-control-zoom',\r\n\t\t    container = create$1('div', zoomName + ' leaflet-bar'),\r\n\t\t    options = this.options;\r\n\r\n\t\tthis._zoomInButton  = this._createButton(options.zoomInText, options.zoomInTitle,\r\n\t\t        zoomName + '-in',  container, this._zoomIn);\r\n\t\tthis._zoomOutButton = this._createButton(options.zoomOutText, options.zoomOutTitle,\r\n\t\t        zoomName + '-out', container, this._zoomOut);\r\n\r\n\t\tthis._updateDisabled();\r\n\t\tmap.on('zoomend zoomlevelschange', this._updateDisabled, this);\r\n\r\n\t\treturn container;\r\n\t},\r\n\r\n\tonRemove: function (map) {\r\n\t\tmap.off('zoomend zoomlevelschange', this._updateDisabled, this);\r\n\t},\r\n\r\n\tdisable: function () {\r\n\t\tthis._disabled = true;\r\n\t\tthis._updateDisabled();\r\n\t\treturn this;\r\n\t},\r\n\r\n\tenable: function () {\r\n\t\tthis._disabled = false;\r\n\t\tthis._updateDisabled();\r\n\t\treturn this;\r\n\t},\r\n\r\n\t_zoomIn: function (e) {\r\n\t\tif (!this._disabled && this._map._zoom < this._map.getMaxZoom()) {\r\n\t\t\tthis._map.zoomIn(this._map.options.zoomDelta * (e.shiftKey ? 3 : 1));\r\n\t\t}\r\n\t},\r\n\r\n\t_zoomOut: function (e) {\r\n\t\tif (!this._disabled && this._map._zoom > this._map.getMinZoom()) {\r\n\t\t\tthis._map.zoomOut(this._map.options.zoomDelta * (e.shiftKey ? 3 : 1));\r\n\t\t}\r\n\t},\r\n\r\n\t_createButton: function (html, title, className, container, fn) {\r\n\t\tvar link = create$1('a', className, container);\r\n\t\tlink.innerHTML = html;\r\n\t\tlink.href = '#';\r\n\t\tlink.title = title;\r\n\r\n\t\t/*\r\n\t\t * Will force screen readers like VoiceOver to read this as \"Zoom in - button\"\r\n\t\t */\r\n\t\tlink.setAttribute('role', 'button');\r\n\t\tlink.setAttribute('aria-label', title);\r\n\r\n\t\tdisableClickPropagation(link);\r\n\t\ton(link, 'click', stop);\r\n\t\ton(link, 'click', fn, this);\r\n\t\ton(link, 'click', this._refocusOnMap, this);\r\n\r\n\t\treturn link;\r\n\t},\r\n\r\n\t_updateDisabled: function () {\r\n\t\tvar map = this._map,\r\n\t\t    className = 'leaflet-disabled';\r\n\r\n\t\tremoveClass(this._zoomInButton, className);\r\n\t\tremoveClass(this._zoomOutButton, className);\r\n\r\n\t\tif (this._disabled || map._zoom === map.getMinZoom()) {\r\n\t\t\taddClass(this._zoomOutButton, className);\r\n\t\t}\r\n\t\tif (this._disabled || map._zoom === map.getMaxZoom()) {\r\n\t\t\taddClass(this._zoomInButton, className);\r\n\t\t}\r\n\t}\r\n});\r\n\r\n// @namespace Map\r\n// @section Control options\r\n// @option zoomControl: Boolean = true\r\n// Whether a [zoom control](#control-zoom) is added to the map by default.\r\nMap.mergeOptions({\r\n\tzoomControl: true\r\n});\r\n\r\nMap.addInitHook(function () {\r\n\tif (this.options.zoomControl) {\r\n\t\t// @section Controls\r\n\t\t// @property zoomControl: Control.Zoom\r\n\t\t// The default zoom control (only available if the\r\n\t\t// [`zoomControl` option](#map-zoomcontrol) was `true` when creating the map).\r\n\t\tthis.zoomControl = new Zoom();\r\n\t\tthis.addControl(this.zoomControl);\r\n\t}\r\n});\r\n\r\n// @namespace Control.Zoom\r\n// @factory L.control.zoom(options: Control.Zoom options)\r\n// Creates a zoom control\r\nvar zoom = function (options) {\r\n\treturn new Zoom(options);\r\n};\n\n/*\n * @class Control.Scale\n * @aka L.Control.Scale\n * @inherits Control\n *\n * A simple scale control that shows the scale of the current center of screen in metric (m/km) and imperial (mi/ft) systems. Extends `Control`.\n *\n * @example\n *\n * ```js\n * L.control.scale().addTo(map);\n * ```\n */\n\nvar Scale = Control.extend({\n\t// @section\n\t// @aka Control.Scale options\n\toptions: {\n\t\tposition: 'bottomleft',\n\n\t\t// @option maxWidth: Number = 100\n\t\t// Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).\n\t\tmaxWidth: 100,\n\n\t\t// @option metric: Boolean = True\n\t\t// Whether to show the metric scale line (m/km).\n\t\tmetric: true,\n\n\t\t// @option imperial: Boolean = True\n\t\t// Whether to show the imperial scale line (mi/ft).\n\t\timperial: true\n\n\t\t// @option updateWhenIdle: Boolean = false\n\t\t// If `true`, the control is updated on [`moveend`](#map-moveend), otherwise it's always up-to-date (updated on [`move`](#map-move)).\n\t},\n\n\tonAdd: function (map) {\n\t\tvar className = 'leaflet-control-scale',\n\t\t    container = create$1('div', className),\n\t\t    options = this.options;\n\n\t\tthis._addScales(options, className + '-line', container);\n\n\t\tmap.on(options.updateWhenIdle ? 'moveend' : 'move', this._update, this);\n\t\tmap.whenReady(this._update, this);\n\n\t\treturn container;\n\t},\n\n\tonRemove: function (map) {\n\t\tmap.off(this.options.updateWhenIdle ? 'moveend' : 'move', this._update, this);\n\t},\n\n\t_addScales: function (options, className, container) {\n\t\tif (options.metric) {\n\t\t\tthis._mScale = create$1('div', className, container);\n\t\t}\n\t\tif (options.imperial) {\n\t\t\tthis._iScale = create$1('div', className, container);\n\t\t}\n\t},\n\n\t_update: function () {\n\t\tvar map = this._map,\n\t\t    y = map.getSize().y / 2;\n\n\t\tvar maxMeters = map.distance(\n\t\t\tmap.containerPointToLatLng([0, y]),\n\t\t\tmap.containerPointToLatLng([this.options.maxWidth, y]));\n\n\t\tthis._updateScales(maxMeters);\n\t},\n\n\t_updateScales: function (maxMeters) {\n\t\tif (this.options.metric && maxMeters) {\n\t\t\tthis._updateMetric(maxMeters);\n\t\t}\n\t\tif (this.options.imperial && maxMeters) {\n\t\t\tthis._updateImperial(maxMeters);\n\t\t}\n\t},\n\n\t_updateMetric: function (maxMeters) {\n\t\tvar meters = this._getRoundNum(maxMeters),\n\t\t    label = meters < 1000 ? meters + ' m' : (meters / 1000) + ' km';\n\n\t\tthis._updateScale(this._mScale, label, meters / maxMeters);\n\t},\n\n\t_updateImperial: function (maxMeters) {\n\t\tvar maxFeet = maxMeters * 3.2808399,\n\t\t    maxMiles, miles, feet;\n\n\t\tif (maxFeet > 5280) {\n\t\t\tmaxMiles = maxFeet / 5280;\n\t\t\tmiles = this._getRoundNum(maxMiles);\n\t\t\tthis._updateScale(this._iScale, miles + ' mi', miles / maxMiles);\n\n\t\t} else {\n\t\t\tfeet = this._getRoundNum(maxFeet);\n\t\t\tthis._updateScale(this._iScale, feet + ' ft', feet / maxFeet);\n\t\t}\n\t},\n\n\t_updateScale: function (scale, text, ratio) {\n\t\tscale.style.width = Math.round(this.options.maxWidth * ratio) + 'px';\n\t\tscale.innerHTML = text;\n\t},\n\n\t_getRoundNum: function (num) {\n\t\tvar pow10 = Math.pow(10, (Math.floor(num) + '').length - 1),\n\t\t    d = num / pow10;\n\n\t\td = d >= 10 ? 10 :\n\t\t    d >= 5 ? 5 :\n\t\t    d >= 3 ? 3 :\n\t\t    d >= 2 ? 2 : 1;\n\n\t\treturn pow10 * d;\n\t}\n});\n\n\n// @factory L.control.scale(options?: Control.Scale options)\n// Creates an scale control with the given options.\nvar scale = function (options) {\n\treturn new Scale(options);\n};\n\n/*\r\n * @class Control.Attribution\r\n * @aka L.Control.Attribution\r\n * @inherits Control\r\n *\r\n * The attribution control allows you to display attribution data in a small text box on a map. It is put on the map by default unless you set its [`attributionControl` option](#map-attributioncontrol) to `false`, and it fetches attribution texts from layers with the [`getAttribution` method](#layer-getattribution) automatically. Extends Control.\r\n */\r\n\r\nvar Attribution = Control.extend({\r\n\t// @section\r\n\t// @aka Control.Attribution options\r\n\toptions: {\r\n\t\tposition: 'bottomright',\r\n\r\n\t\t// @option prefix: String = 'Leaflet'\r\n\t\t// The HTML text shown before the attributions. Pass `false` to disable.\r\n\t\tprefix: '<a href=\"http://leafletjs.com\" title=\"A JS library for interactive maps\">Leaflet</a>'\r\n\t},\r\n\r\n\tinitialize: function (options) {\r\n\t\tsetOptions(this, options);\r\n\r\n\t\tthis._attributions = {};\r\n\t},\r\n\r\n\tonAdd: function (map) {\r\n\t\tmap.attributionControl = this;\r\n\t\tthis._container = create$1('div', 'leaflet-control-attribution');\r\n\t\tdisableClickPropagation(this._container);\r\n\r\n\t\t// TODO ugly, refactor\r\n\t\tfor (var i in map._layers) {\r\n\t\t\tif (map._layers[i].getAttribution) {\r\n\t\t\t\tthis.addAttribution(map._layers[i].getAttribution());\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tthis._update();\r\n\r\n\t\treturn this._container;\r\n\t},\r\n\r\n\t// @method setPrefix(prefix: String): this\r\n\t// Sets the text before the attributions.\r\n\tsetPrefix: function (prefix) {\r\n\t\tthis.options.prefix = prefix;\r\n\t\tthis._update();\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// @method addAttribution(text: String): this\r\n\t// Adds an attribution text (e.g. `'Vector data &copy; Mapbox'`).\r\n\taddAttribution: function (text) {\r\n\t\tif (!text) { return this; }\r\n\r\n\t\tif (!this._attributions[text]) {\r\n\t\t\tthis._attributions[text] = 0;\r\n\t\t}\r\n\t\tthis._attributions[text]++;\r\n\r\n\t\tthis._update();\r\n\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// @method removeAttribution(text: String): this\r\n\t// Removes an attribution text.\r\n\tremoveAttribution: function (text) {\r\n\t\tif (!text) { return this; }\r\n\r\n\t\tif (this._attributions[text]) {\r\n\t\t\tthis._attributions[text]--;\r\n\t\t\tthis._update();\r\n\t\t}\r\n\r\n\t\treturn this;\r\n\t},\r\n\r\n\t_update: function () {\r\n\t\tif (!this._map) { return; }\r\n\r\n\t\tvar attribs = [];\r\n\r\n\t\tfor (var i in this._attributions) {\r\n\t\t\tif (this._attributions[i]) {\r\n\t\t\t\tattribs.push(i);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tvar prefixAndAttribs = [];\r\n\r\n\t\tif (this.options.prefix) {\r\n\t\t\tprefixAndAttribs.push(this.options.prefix);\r\n\t\t}\r\n\t\tif (attribs.length) {\r\n\t\t\tprefixAndAttribs.push(attribs.join(', '));\r\n\t\t}\r\n\r\n\t\tthis._container.innerHTML = prefixAndAttribs.join(' | ');\r\n\t}\r\n});\r\n\r\n// @namespace Map\r\n// @section Control options\r\n// @option attributionControl: Boolean = true\r\n// Whether a [attribution control](#control-attribution) is added to the map by default.\r\nMap.mergeOptions({\r\n\tattributionControl: true\r\n});\r\n\r\nMap.addInitHook(function () {\r\n\tif (this.options.attributionControl) {\r\n\t\tnew Attribution().addTo(this);\r\n\t}\r\n});\r\n\r\n// @namespace Control.Attribution\r\n// @factory L.control.attribution(options: Control.Attribution options)\r\n// Creates an attribution control.\r\nvar attribution = function (options) {\r\n\treturn new Attribution(options);\r\n};\n\nControl.Layers = Layers;\nControl.Zoom = Zoom;\nControl.Scale = Scale;\nControl.Attribution = Attribution;\n\ncontrol.layers = layers;\ncontrol.zoom = zoom;\ncontrol.scale = scale;\ncontrol.attribution = attribution;\n\n/*\n\tL.Handler is a base class for handler classes that are used internally to inject\n\tinteraction features like dragging to classes like Map and Marker.\n*/\n\n// @class Handler\n// @aka L.Handler\n// Abstract class for map interaction handlers\n\nvar Handler = Class.extend({\n\tinitialize: function (map) {\n\t\tthis._map = map;\n\t},\n\n\t// @method enable(): this\n\t// Enables the handler\n\tenable: function () {\n\t\tif (this._enabled) { return this; }\n\n\t\tthis._enabled = true;\n\t\tthis.addHooks();\n\t\treturn this;\n\t},\n\n\t// @method disable(): this\n\t// Disables the handler\n\tdisable: function () {\n\t\tif (!this._enabled) { return this; }\n\n\t\tthis._enabled = false;\n\t\tthis.removeHooks();\n\t\treturn this;\n\t},\n\n\t// @method enabled(): Boolean\n\t// Returns `true` if the handler is enabled\n\tenabled: function () {\n\t\treturn !!this._enabled;\n\t}\n\n\t// @section Extension methods\n\t// Classes inheriting from `Handler` must implement the two following methods:\n\t// @method addHooks()\n\t// Called when the handler is enabled, should add event hooks.\n\t// @method removeHooks()\n\t// Called when the handler is disabled, should remove the event hooks added previously.\n});\n\n// @section There is static function which can be called without instantiating L.Handler:\n// @function addTo(map: Map, name: String): this\n// Adds a new Handler to the given map with the given name.\nHandler.addTo = function (map, name) {\n\tmap.addHandler(name, this);\n\treturn this;\n};\n\nvar Mixin = {Events: Events};\n\n/*\r\n * @class Draggable\r\n * @aka L.Draggable\r\n * @inherits Evented\r\n *\r\n * A class for making DOM elements draggable (including touch support).\r\n * Used internally for map and marker dragging. Only works for elements\r\n * that were positioned with [`L.DomUtil.setPosition`](#domutil-setposition).\r\n *\r\n * @example\r\n * ```js\r\n * var draggable = new L.Draggable(elementToDrag);\r\n * draggable.enable();\r\n * ```\r\n */\r\n\r\nvar START = touch ? 'touchstart mousedown' : 'mousedown';\r\nvar END = {\r\n\tmousedown: 'mouseup',\r\n\ttouchstart: 'touchend',\r\n\tpointerdown: 'touchend',\r\n\tMSPointerDown: 'touchend'\r\n};\r\nvar MOVE = {\r\n\tmousedown: 'mousemove',\r\n\ttouchstart: 'touchmove',\r\n\tpointerdown: 'touchmove',\r\n\tMSPointerDown: 'touchmove'\r\n};\r\n\r\n\r\nvar Draggable = Evented.extend({\r\n\r\n\toptions: {\r\n\t\t// @section\r\n\t\t// @aka Draggable options\r\n\t\t// @option clickTolerance: Number = 3\r\n\t\t// The max number of pixels a user can shift the mouse pointer during a click\r\n\t\t// for it to be considered a valid click (as opposed to a mouse drag).\r\n\t\tclickTolerance: 3\r\n\t},\r\n\r\n\t// @constructor L.Draggable(el: HTMLElement, dragHandle?: HTMLElement, preventOutline?: Boolean, options?: Draggable options)\r\n\t// Creates a `Draggable` object for moving `el` when you start dragging the `dragHandle` element (equals `el` itself by default).\r\n\tinitialize: function (element, dragStartTarget, preventOutline$$1, options) {\r\n\t\tsetOptions(this, options);\r\n\r\n\t\tthis._element = element;\r\n\t\tthis._dragStartTarget = dragStartTarget || element;\r\n\t\tthis._preventOutline = preventOutline$$1;\r\n\t},\r\n\r\n\t// @method enable()\r\n\t// Enables the dragging ability\r\n\tenable: function () {\r\n\t\tif (this._enabled) { return; }\r\n\r\n\t\ton(this._dragStartTarget, START, this._onDown, this);\r\n\r\n\t\tthis._enabled = true;\r\n\t},\r\n\r\n\t// @method disable()\r\n\t// Disables the dragging ability\r\n\tdisable: function () {\r\n\t\tif (!this._enabled) { return; }\r\n\r\n\t\t// If we're currently dragging this draggable,\r\n\t\t// disabling it counts as first ending the drag.\r\n\t\tif (Draggable._dragging === this) {\r\n\t\t\tthis.finishDrag();\r\n\t\t}\r\n\r\n\t\toff(this._dragStartTarget, START, this._onDown, this);\r\n\r\n\t\tthis._enabled = false;\r\n\t\tthis._moved = false;\r\n\t},\r\n\r\n\t_onDown: function (e) {\r\n\t\t// Ignore simulated events, since we handle both touch and\r\n\t\t// mouse explicitly; otherwise we risk getting duplicates of\r\n\t\t// touch events, see #4315.\r\n\t\t// Also ignore the event if disabled; this happens in IE11\r\n\t\t// under some circumstances, see #3666.\r\n\t\tif (e._simulated || !this._enabled) { return; }\r\n\r\n\t\tthis._moved = false;\r\n\r\n\t\tif (hasClass(this._element, 'leaflet-zoom-anim')) { return; }\r\n\r\n\t\tif (Draggable._dragging || e.shiftKey || ((e.which !== 1) && (e.button !== 1) && !e.touches)) { return; }\r\n\t\tDraggable._dragging = this;  // Prevent dragging multiple objects at once.\r\n\r\n\t\tif (this._preventOutline) {\r\n\t\t\tpreventOutline(this._element);\r\n\t\t}\r\n\r\n\t\tdisableImageDrag();\r\n\t\tdisableTextSelection();\r\n\r\n\t\tif (this._moving) { return; }\r\n\r\n\t\t// @event down: Event\r\n\t\t// Fired when a drag is about to start.\r\n\t\tthis.fire('down');\r\n\r\n\t\tvar first = e.touches ? e.touches[0] : e,\r\n\t\t    sizedParent = getSizedParentNode(this._element);\r\n\r\n\t\tthis._startPoint = new Point(first.clientX, first.clientY);\r\n\r\n\t\t// Cache the scale, so that we can continuously compensate for it during drag (_onMove).\r\n\t\tthis._parentScale = getScale(sizedParent);\r\n\r\n\t\ton(document, MOVE[e.type], this._onMove, this);\r\n\t\ton(document, END[e.type], this._onUp, this);\r\n\t},\r\n\r\n\t_onMove: function (e) {\r\n\t\t// Ignore simulated events, since we handle both touch and\r\n\t\t// mouse explicitly; otherwise we risk getting duplicates of\r\n\t\t// touch events, see #4315.\r\n\t\t// Also ignore the event if disabled; this happens in IE11\r\n\t\t// under some circumstances, see #3666.\r\n\t\tif (e._simulated || !this._enabled) { return; }\r\n\r\n\t\tif (e.touches && e.touches.length > 1) {\r\n\t\t\tthis._moved = true;\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\tvar first = (e.touches && e.touches.length === 1 ? e.touches[0] : e),\r\n\t\t    offset = new Point(first.clientX, first.clientY)._subtract(this._startPoint);\r\n\r\n\t\tif (!offset.x && !offset.y) { return; }\r\n\t\tif (Math.abs(offset.x) + Math.abs(offset.y) < this.options.clickTolerance) { return; }\r\n\r\n\t\t// We assume that the parent container's position, border and scale do not change for the duration of the drag.\r\n\t\t// Therefore there is no need to account for the position and border (they are eliminated by the subtraction)\r\n\t\t// and we can use the cached value for the scale.\r\n\t\toffset.x /= this._parentScale.x;\r\n\t\toffset.y /= this._parentScale.y;\r\n\r\n\t\tpreventDefault(e);\r\n\r\n\t\tif (!this._moved) {\r\n\t\t\t// @event dragstart: Event\r\n\t\t\t// Fired when a drag starts\r\n\t\t\tthis.fire('dragstart');\r\n\r\n\t\t\tthis._moved = true;\r\n\t\t\tthis._startPos = getPosition(this._element).subtract(offset);\r\n\r\n\t\t\taddClass(document.body, 'leaflet-dragging');\r\n\r\n\t\t\tthis._lastTarget = e.target || e.srcElement;\r\n\t\t\t// IE and Edge do not give the <use> element, so fetch it\r\n\t\t\t// if necessary\r\n\t\t\tif ((window.SVGElementInstance) && (this._lastTarget instanceof SVGElementInstance)) {\r\n\t\t\t\tthis._lastTarget = this._lastTarget.correspondingUseElement;\r\n\t\t\t}\r\n\t\t\taddClass(this._lastTarget, 'leaflet-drag-target');\r\n\t\t}\r\n\r\n\t\tthis._newPos = this._startPos.add(offset);\r\n\t\tthis._moving = true;\r\n\r\n\t\tcancelAnimFrame(this._animRequest);\r\n\t\tthis._lastEvent = e;\r\n\t\tthis._animRequest = requestAnimFrame(this._updatePosition, this, true);\r\n\t},\r\n\r\n\t_updatePosition: function () {\r\n\t\tvar e = {originalEvent: this._lastEvent};\r\n\r\n\t\t// @event predrag: Event\r\n\t\t// Fired continuously during dragging *before* each corresponding\r\n\t\t// update of the element's position.\r\n\t\tthis.fire('predrag', e);\r\n\t\tsetPosition(this._element, this._newPos);\r\n\r\n\t\t// @event drag: Event\r\n\t\t// Fired continuously during dragging.\r\n\t\tthis.fire('drag', e);\r\n\t},\r\n\r\n\t_onUp: function (e) {\r\n\t\t// Ignore simulated events, since we handle both touch and\r\n\t\t// mouse explicitly; otherwise we risk getting duplicates of\r\n\t\t// touch events, see #4315.\r\n\t\t// Also ignore the event if disabled; this happens in IE11\r\n\t\t// under some circumstances, see #3666.\r\n\t\tif (e._simulated || !this._enabled) { return; }\r\n\t\tthis.finishDrag();\r\n\t},\r\n\r\n\tfinishDrag: function () {\r\n\t\tremoveClass(document.body, 'leaflet-dragging');\r\n\r\n\t\tif (this._lastTarget) {\r\n\t\t\tremoveClass(this._lastTarget, 'leaflet-drag-target');\r\n\t\t\tthis._lastTarget = null;\r\n\t\t}\r\n\r\n\t\tfor (var i in MOVE) {\r\n\t\t\toff(document, MOVE[i], this._onMove, this);\r\n\t\t\toff(document, END[i], this._onUp, this);\r\n\t\t}\r\n\r\n\t\tenableImageDrag();\r\n\t\tenableTextSelection();\r\n\r\n\t\tif (this._moved && this._moving) {\r\n\t\t\t// ensure drag is not fired after dragend\r\n\t\t\tcancelAnimFrame(this._animRequest);\r\n\r\n\t\t\t// @event dragend: DragEndEvent\r\n\t\t\t// Fired when the drag ends.\r\n\t\t\tthis.fire('dragend', {\r\n\t\t\t\tdistance: this._newPos.distanceTo(this._startPos)\r\n\t\t\t});\r\n\t\t}\r\n\r\n\t\tthis._moving = false;\r\n\t\tDraggable._dragging = false;\r\n\t}\r\n\r\n});\n\n/*\r\n * @namespace LineUtil\r\n *\r\n * Various utility functions for polyline points processing, used by Leaflet internally to make polylines lightning-fast.\r\n */\r\n\r\n// Simplify polyline with vertex reduction and Douglas-Peucker simplification.\r\n// Improves rendering performance dramatically by lessening the number of points to draw.\r\n\r\n// @function simplify(points: Point[], tolerance: Number): Point[]\r\n// Dramatically reduces the number of points in a polyline while retaining\r\n// its shape and returns a new array of simplified points, using the\r\n// [Douglas-Peucker algorithm](http://en.wikipedia.org/wiki/Douglas-Peucker_algorithm).\r\n// Used for a huge performance boost when processing/displaying Leaflet polylines for\r\n// each zoom level and also reducing visual noise. tolerance affects the amount of\r\n// simplification (lesser value means higher quality but slower and with more points).\r\n// Also released as a separated micro-library [Simplify.js](http://mourner.github.com/simplify-js/).\r\nfunction simplify(points, tolerance) {\r\n\tif (!tolerance || !points.length) {\r\n\t\treturn points.slice();\r\n\t}\r\n\r\n\tvar sqTolerance = tolerance * tolerance;\r\n\r\n\t    // stage 1: vertex reduction\r\n\t    points = _reducePoints(points, sqTolerance);\r\n\r\n\t    // stage 2: Douglas-Peucker simplification\r\n\t    points = _simplifyDP(points, sqTolerance);\r\n\r\n\treturn points;\r\n}\r\n\r\n// @function pointToSegmentDistance(p: Point, p1: Point, p2: Point): Number\r\n// Returns the distance between point `p` and segment `p1` to `p2`.\r\nfunction pointToSegmentDistance(p, p1, p2) {\r\n\treturn Math.sqrt(_sqClosestPointOnSegment(p, p1, p2, true));\r\n}\r\n\r\n// @function closestPointOnSegment(p: Point, p1: Point, p2: Point): Number\r\n// Returns the closest point from a point `p` on a segment `p1` to `p2`.\r\nfunction closestPointOnSegment(p, p1, p2) {\r\n\treturn _sqClosestPointOnSegment(p, p1, p2);\r\n}\r\n\r\n// Douglas-Peucker simplification, see http://en.wikipedia.org/wiki/Douglas-Peucker_algorithm\r\nfunction _simplifyDP(points, sqTolerance) {\r\n\r\n\tvar len = points.length,\r\n\t    ArrayConstructor = typeof Uint8Array !== undefined + '' ? Uint8Array : Array,\r\n\t    markers = new ArrayConstructor(len);\r\n\r\n\t    markers[0] = markers[len - 1] = 1;\r\n\r\n\t_simplifyDPStep(points, markers, sqTolerance, 0, len - 1);\r\n\r\n\tvar i,\r\n\t    newPoints = [];\r\n\r\n\tfor (i = 0; i < len; i++) {\r\n\t\tif (markers[i]) {\r\n\t\t\tnewPoints.push(points[i]);\r\n\t\t}\r\n\t}\r\n\r\n\treturn newPoints;\r\n}\r\n\r\nfunction _simplifyDPStep(points, markers, sqTolerance, first, last) {\r\n\r\n\tvar maxSqDist = 0,\r\n\tindex, i, sqDist;\r\n\r\n\tfor (i = first + 1; i <= last - 1; i++) {\r\n\t\tsqDist = _sqClosestPointOnSegment(points[i], points[first], points[last], true);\r\n\r\n\t\tif (sqDist > maxSqDist) {\r\n\t\t\tindex = i;\r\n\t\t\tmaxSqDist = sqDist;\r\n\t\t}\r\n\t}\r\n\r\n\tif (maxSqDist > sqTolerance) {\r\n\t\tmarkers[index] = 1;\r\n\r\n\t\t_simplifyDPStep(points, markers, sqTolerance, first, index);\r\n\t\t_simplifyDPStep(points, markers, sqTolerance, index, last);\r\n\t}\r\n}\r\n\r\n// reduce points that are too close to each other to a single point\r\nfunction _reducePoints(points, sqTolerance) {\r\n\tvar reducedPoints = [points[0]];\r\n\r\n\tfor (var i = 1, prev = 0, len = points.length; i < len; i++) {\r\n\t\tif (_sqDist(points[i], points[prev]) > sqTolerance) {\r\n\t\t\treducedPoints.push(points[i]);\r\n\t\t\tprev = i;\r\n\t\t}\r\n\t}\r\n\tif (prev < len - 1) {\r\n\t\treducedPoints.push(points[len - 1]);\r\n\t}\r\n\treturn reducedPoints;\r\n}\r\n\r\nvar _lastCode;\r\n\r\n// @function clipSegment(a: Point, b: Point, bounds: Bounds, useLastCode?: Boolean, round?: Boolean): Point[]|Boolean\r\n// Clips the segment a to b by rectangular bounds with the\r\n// [Cohen-Sutherland algorithm](https://en.wikipedia.org/wiki/Cohen%E2%80%93Sutherland_algorithm)\r\n// (modifying the segment points directly!). Used by Leaflet to only show polyline\r\n// points that are on the screen or near, increasing performance.\r\nfunction clipSegment(a, b, bounds, useLastCode, round) {\r\n\tvar codeA = useLastCode ? _lastCode : _getBitCode(a, bounds),\r\n\t    codeB = _getBitCode(b, bounds),\r\n\r\n\t    codeOut, p, newCode;\r\n\r\n\t    // save 2nd code to avoid calculating it on the next segment\r\n\t    _lastCode = codeB;\r\n\r\n\twhile (true) {\r\n\t\t// if a,b is inside the clip window (trivial accept)\r\n\t\tif (!(codeA | codeB)) {\r\n\t\t\treturn [a, b];\r\n\t\t}\r\n\r\n\t\t// if a,b is outside the clip window (trivial reject)\r\n\t\tif (codeA & codeB) {\r\n\t\t\treturn false;\r\n\t\t}\r\n\r\n\t\t// other cases\r\n\t\tcodeOut = codeA || codeB;\r\n\t\tp = _getEdgeIntersection(a, b, codeOut, bounds, round);\r\n\t\tnewCode = _getBitCode(p, bounds);\r\n\r\n\t\tif (codeOut === codeA) {\r\n\t\t\ta = p;\r\n\t\t\tcodeA = newCode;\r\n\t\t} else {\r\n\t\t\tb = p;\r\n\t\t\tcodeB = newCode;\r\n\t\t}\r\n\t}\r\n}\r\n\r\nfunction _getEdgeIntersection(a, b, code, bounds, round) {\r\n\tvar dx = b.x - a.x,\r\n\t    dy = b.y - a.y,\r\n\t    min = bounds.min,\r\n\t    max = bounds.max,\r\n\t    x, y;\r\n\r\n\tif (code & 8) { // top\r\n\t\tx = a.x + dx * (max.y - a.y) / dy;\r\n\t\ty = max.y;\r\n\r\n\t} else if (code & 4) { // bottom\r\n\t\tx = a.x + dx * (min.y - a.y) / dy;\r\n\t\ty = min.y;\r\n\r\n\t} else if (code & 2) { // right\r\n\t\tx = max.x;\r\n\t\ty = a.y + dy * (max.x - a.x) / dx;\r\n\r\n\t} else if (code & 1) { // left\r\n\t\tx = min.x;\r\n\t\ty = a.y + dy * (min.x - a.x) / dx;\r\n\t}\r\n\r\n\treturn new Point(x, y, round);\r\n}\r\n\r\nfunction _getBitCode(p, bounds) {\r\n\tvar code = 0;\r\n\r\n\tif (p.x < bounds.min.x) { // left\r\n\t\tcode |= 1;\r\n\t} else if (p.x > bounds.max.x) { // right\r\n\t\tcode |= 2;\r\n\t}\r\n\r\n\tif (p.y < bounds.min.y) { // bottom\r\n\t\tcode |= 4;\r\n\t} else if (p.y > bounds.max.y) { // top\r\n\t\tcode |= 8;\r\n\t}\r\n\r\n\treturn code;\r\n}\r\n\r\n// square distance (to avoid unnecessary Math.sqrt calls)\r\nfunction _sqDist(p1, p2) {\r\n\tvar dx = p2.x - p1.x,\r\n\t    dy = p2.y - p1.y;\r\n\treturn dx * dx + dy * dy;\r\n}\r\n\r\n// return closest point on segment or distance to that point\r\nfunction _sqClosestPointOnSegment(p, p1, p2, sqDist) {\r\n\tvar x = p1.x,\r\n\t    y = p1.y,\r\n\t    dx = p2.x - x,\r\n\t    dy = p2.y - y,\r\n\t    dot = dx * dx + dy * dy,\r\n\t    t;\r\n\r\n\tif (dot > 0) {\r\n\t\tt = ((p.x - x) * dx + (p.y - y) * dy) / dot;\r\n\r\n\t\tif (t > 1) {\r\n\t\t\tx = p2.x;\r\n\t\t\ty = p2.y;\r\n\t\t} else if (t > 0) {\r\n\t\t\tx += dx * t;\r\n\t\t\ty += dy * t;\r\n\t\t}\r\n\t}\r\n\r\n\tdx = p.x - x;\r\n\tdy = p.y - y;\r\n\r\n\treturn sqDist ? dx * dx + dy * dy : new Point(x, y);\r\n}\r\n\r\n\r\n// @function isFlat(latlngs: LatLng[]): Boolean\r\n// Returns true if `latlngs` is a flat array, false is nested.\r\nfunction isFlat(latlngs) {\r\n\treturn !isArray(latlngs[0]) || (typeof latlngs[0][0] !== 'object' && typeof latlngs[0][0] !== 'undefined');\r\n}\r\n\r\nfunction _flat(latlngs) {\r\n\tconsole.warn('Deprecated use of _flat, please use L.LineUtil.isFlat instead.');\r\n\treturn isFlat(latlngs);\r\n}\r\n\n\nvar LineUtil = (Object.freeze || Object)({\n\tsimplify: simplify,\n\tpointToSegmentDistance: pointToSegmentDistance,\n\tclosestPointOnSegment: closestPointOnSegment,\n\tclipSegment: clipSegment,\n\t_getEdgeIntersection: _getEdgeIntersection,\n\t_getBitCode: _getBitCode,\n\t_sqClosestPointOnSegment: _sqClosestPointOnSegment,\n\tisFlat: isFlat,\n\t_flat: _flat\n});\n\n/*\r\n * @namespace PolyUtil\r\n * Various utility functions for polygon geometries.\r\n */\r\n\r\n/* @function clipPolygon(points: Point[], bounds: Bounds, round?: Boolean): Point[]\r\n * Clips the polygon geometry defined by the given `points` by the given bounds (using the [Sutherland-Hodgman algorithm](https://en.wikipedia.org/wiki/Sutherland%E2%80%93Hodgman_algorithm)).\r\n * Used by Leaflet to only show polygon points that are on the screen or near, increasing\r\n * performance. Note that polygon points needs different algorithm for clipping\r\n * than polyline, so there's a separate method for it.\r\n */\r\nfunction clipPolygon(points, bounds, round) {\r\n\tvar clippedPoints,\r\n\t    edges = [1, 4, 2, 8],\r\n\t    i, j, k,\r\n\t    a, b,\r\n\t    len, edge, p;\r\n\r\n\tfor (i = 0, len = points.length; i < len; i++) {\r\n\t\tpoints[i]._code = _getBitCode(points[i], bounds);\r\n\t}\r\n\r\n\t// for each edge (left, bottom, right, top)\r\n\tfor (k = 0; k < 4; k++) {\r\n\t\tedge = edges[k];\r\n\t\tclippedPoints = [];\r\n\r\n\t\tfor (i = 0, len = points.length, j = len - 1; i < len; j = i++) {\r\n\t\t\ta = points[i];\r\n\t\t\tb = points[j];\r\n\r\n\t\t\t// if a is inside the clip window\r\n\t\t\tif (!(a._code & edge)) {\r\n\t\t\t\t// if b is outside the clip window (a->b goes out of screen)\r\n\t\t\t\tif (b._code & edge) {\r\n\t\t\t\t\tp = _getEdgeIntersection(b, a, edge, bounds, round);\r\n\t\t\t\t\tp._code = _getBitCode(p, bounds);\r\n\t\t\t\t\tclippedPoints.push(p);\r\n\t\t\t\t}\r\n\t\t\t\tclippedPoints.push(a);\r\n\r\n\t\t\t// else if b is inside the clip window (a->b enters the screen)\r\n\t\t\t} else if (!(b._code & edge)) {\r\n\t\t\t\tp = _getEdgeIntersection(b, a, edge, bounds, round);\r\n\t\t\t\tp._code = _getBitCode(p, bounds);\r\n\t\t\t\tclippedPoints.push(p);\r\n\t\t\t}\r\n\t\t}\r\n\t\tpoints = clippedPoints;\r\n\t}\r\n\r\n\treturn points;\r\n}\r\n\n\nvar PolyUtil = (Object.freeze || Object)({\n\tclipPolygon: clipPolygon\n});\n\n/*\r\n * @namespace Projection\r\n * @section\r\n * Leaflet comes with a set of already defined Projections out of the box:\r\n *\r\n * @projection L.Projection.LonLat\r\n *\r\n * Equirectangular, or Plate Carree projection — the most simple projection,\r\n * mostly used by GIS enthusiasts. Directly maps `x` as longitude, and `y` as\r\n * latitude. Also suitable for flat worlds, e.g. game maps. Used by the\r\n * `EPSG:4326` and `Simple` CRS.\r\n */\r\n\r\nvar LonLat = {\r\n\tproject: function (latlng) {\r\n\t\treturn new Point(latlng.lng, latlng.lat);\r\n\t},\r\n\r\n\tunproject: function (point) {\r\n\t\treturn new LatLng(point.y, point.x);\r\n\t},\r\n\r\n\tbounds: new Bounds([-180, -90], [180, 90])\r\n};\n\n/*\r\n * @namespace Projection\r\n * @projection L.Projection.Mercator\r\n *\r\n * Elliptical Mercator projection — more complex than Spherical Mercator. Takes into account that Earth is a geoid, not a perfect sphere. Used by the EPSG:3395 CRS.\r\n */\r\n\r\nvar Mercator = {\r\n\tR: 6378137,\r\n\tR_MINOR: 6356752.314245179,\r\n\r\n\tbounds: new Bounds([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),\r\n\r\n\tproject: function (latlng) {\r\n\t\tvar d = Math.PI / 180,\r\n\t\t    r = this.R,\r\n\t\t    y = latlng.lat * d,\r\n\t\t    tmp = this.R_MINOR / r,\r\n\t\t    e = Math.sqrt(1 - tmp * tmp),\r\n\t\t    con = e * Math.sin(y);\r\n\r\n\t\tvar ts = Math.tan(Math.PI / 4 - y / 2) / Math.pow((1 - con) / (1 + con), e / 2);\r\n\t\ty = -r * Math.log(Math.max(ts, 1E-10));\r\n\r\n\t\treturn new Point(latlng.lng * d * r, y);\r\n\t},\r\n\r\n\tunproject: function (point) {\r\n\t\tvar d = 180 / Math.PI,\r\n\t\t    r = this.R,\r\n\t\t    tmp = this.R_MINOR / r,\r\n\t\t    e = Math.sqrt(1 - tmp * tmp),\r\n\t\t    ts = Math.exp(-point.y / r),\r\n\t\t    phi = Math.PI / 2 - 2 * Math.atan(ts);\r\n\r\n\t\tfor (var i = 0, dphi = 0.1, con; i < 15 && Math.abs(dphi) > 1e-7; i++) {\r\n\t\t\tcon = e * Math.sin(phi);\r\n\t\t\tcon = Math.pow((1 - con) / (1 + con), e / 2);\r\n\t\t\tdphi = Math.PI / 2 - 2 * Math.atan(ts * con) - phi;\r\n\t\t\tphi += dphi;\r\n\t\t}\r\n\r\n\t\treturn new LatLng(phi * d, point.x * d / r);\r\n\t}\r\n};\n\n/*\n * @class Projection\n\n * An object with methods for projecting geographical coordinates of the world onto\n * a flat surface (and back). See [Map projection](http://en.wikipedia.org/wiki/Map_projection).\n\n * @property bounds: Bounds\n * The bounds (specified in CRS units) where the projection is valid\n\n * @method project(latlng: LatLng): Point\n * Projects geographical coordinates into a 2D point.\n * Only accepts actual `L.LatLng` instances, not arrays.\n\n * @method unproject(point: Point): LatLng\n * The inverse of `project`. Projects a 2D point into a geographical location.\n * Only accepts actual `L.Point` instances, not arrays.\n\n * Note that the projection instances do not inherit from Leafet's `Class` object,\n * and can't be instantiated. Also, new classes can't inherit from them,\n * and methods can't be added to them with the `include` function.\n\n */\n\n\n\n\nvar index = (Object.freeze || Object)({\n\tLonLat: LonLat,\n\tMercator: Mercator,\n\tSphericalMercator: SphericalMercator\n});\n\n/*\r\n * @namespace CRS\r\n * @crs L.CRS.EPSG3395\r\n *\r\n * Rarely used by some commercial tile providers. Uses Elliptical Mercator projection.\r\n */\r\nvar EPSG3395 = extend({}, Earth, {\r\n\tcode: 'EPSG:3395',\r\n\tprojection: Mercator,\r\n\r\n\ttransformation: (function () {\r\n\t\tvar scale = 0.5 / (Math.PI * Mercator.R);\r\n\t\treturn toTransformation(scale, 0.5, -scale, 0.5);\r\n\t}())\r\n});\n\n/*\r\n * @namespace CRS\r\n * @crs L.CRS.EPSG4326\r\n *\r\n * A common CRS among GIS enthusiasts. Uses simple Equirectangular projection.\r\n *\r\n * Leaflet 1.0.x complies with the [TMS coordinate scheme for EPSG:4326](https://wiki.osgeo.org/wiki/Tile_Map_Service_Specification#global-geodetic),\r\n * which is a breaking change from 0.7.x behaviour.  If you are using a `TileLayer`\r\n * with this CRS, ensure that there are two 256x256 pixel tiles covering the\r\n * whole earth at zoom level zero, and that the tile coordinate origin is (-180,+90),\r\n * or (-180,-90) for `TileLayer`s with [the `tms` option](#tilelayer-tms) set.\r\n */\r\n\r\nvar EPSG4326 = extend({}, Earth, {\r\n\tcode: 'EPSG:4326',\r\n\tprojection: LonLat,\r\n\ttransformation: toTransformation(1 / 180, 1, -1 / 180, 0.5)\r\n});\n\n/*\n * @namespace CRS\n * @crs L.CRS.Simple\n *\n * A simple CRS that maps longitude and latitude into `x` and `y` directly.\n * May be used for maps of flat surfaces (e.g. game maps). Note that the `y`\n * axis should still be inverted (going from bottom to top). `distance()` returns\n * simple euclidean distance.\n */\n\nvar Simple = extend({}, CRS, {\n\tprojection: LonLat,\n\ttransformation: toTransformation(1, 0, -1, 0),\n\n\tscale: function (zoom) {\n\t\treturn Math.pow(2, zoom);\n\t},\n\n\tzoom: function (scale) {\n\t\treturn Math.log(scale) / Math.LN2;\n\t},\n\n\tdistance: function (latlng1, latlng2) {\n\t\tvar dx = latlng2.lng - latlng1.lng,\n\t\t    dy = latlng2.lat - latlng1.lat;\n\n\t\treturn Math.sqrt(dx * dx + dy * dy);\n\t},\n\n\tinfinite: true\n});\n\nCRS.Earth = Earth;\nCRS.EPSG3395 = EPSG3395;\nCRS.EPSG3857 = EPSG3857;\nCRS.EPSG900913 = EPSG900913;\nCRS.EPSG4326 = EPSG4326;\nCRS.Simple = Simple;\n\n/*\n * @class Layer\n * @inherits Evented\n * @aka L.Layer\n * @aka ILayer\n *\n * A set of methods from the Layer base class that all Leaflet layers use.\n * Inherits all methods, options and events from `L.Evented`.\n *\n * @example\n *\n * ```js\n * var layer = L.Marker(latlng).addTo(map);\n * layer.addTo(map);\n * layer.remove();\n * ```\n *\n * @event add: Event\n * Fired after the layer is added to a map\n *\n * @event remove: Event\n * Fired after the layer is removed from a map\n */\n\n\nvar Layer = Evented.extend({\n\n\t// Classes extending `L.Layer` will inherit the following options:\n\toptions: {\n\t\t// @option pane: String = 'overlayPane'\n\t\t// By default the layer will be added to the map's [overlay pane](#map-overlaypane). Overriding this option will cause the layer to be placed on another pane by default.\n\t\tpane: 'overlayPane',\n\n\t\t// @option attribution: String = null\n\t\t// String to be shown in the attribution control, e.g. \"© OpenStreetMap contributors\". It describes the layer data and is often a legal obligation towards copyright holders and tile providers.\n\t\tattribution: null,\n\n\t\tbubblingMouseEvents: true\n\t},\n\n\t/* @section\n\t * Classes extending `L.Layer` will inherit the following methods:\n\t *\n\t * @method addTo(map: Map|LayerGroup): this\n\t * Adds the layer to the given map or layer group.\n\t */\n\taddTo: function (map) {\n\t\tmap.addLayer(this);\n\t\treturn this;\n\t},\n\n\t// @method remove: this\n\t// Removes the layer from the map it is currently active on.\n\tremove: function () {\n\t\treturn this.removeFrom(this._map || this._mapToAdd);\n\t},\n\n\t// @method removeFrom(map: Map): this\n\t// Removes the layer from the given map\n\tremoveFrom: function (obj) {\n\t\tif (obj) {\n\t\t\tobj.removeLayer(this);\n\t\t}\n\t\treturn this;\n\t},\n\n\t// @method getPane(name? : String): HTMLElement\n\t// Returns the `HTMLElement` representing the named pane on the map. If `name` is omitted, returns the pane for this layer.\n\tgetPane: function (name) {\n\t\treturn this._map.getPane(name ? (this.options[name] || name) : this.options.pane);\n\t},\n\n\taddInteractiveTarget: function (targetEl) {\n\t\tthis._map._targets[stamp(targetEl)] = this;\n\t\treturn this;\n\t},\n\n\tremoveInteractiveTarget: function (targetEl) {\n\t\tdelete this._map._targets[stamp(targetEl)];\n\t\treturn this;\n\t},\n\n\t// @method getAttribution: String\n\t// Used by the `attribution control`, returns the [attribution option](#gridlayer-attribution).\n\tgetAttribution: function () {\n\t\treturn this.options.attribution;\n\t},\n\n\t_layerAdd: function (e) {\n\t\tvar map = e.target;\n\n\t\t// check in case layer gets added and then removed before the map is ready\n\t\tif (!map.hasLayer(this)) { return; }\n\n\t\tthis._map = map;\n\t\tthis._zoomAnimated = map._zoomAnimated;\n\n\t\tif (this.getEvents) {\n\t\t\tvar events = this.getEvents();\n\t\t\tmap.on(events, this);\n\t\t\tthis.once('remove', function () {\n\t\t\t\tmap.off(events, this);\n\t\t\t}, this);\n\t\t}\n\n\t\tthis.onAdd(map);\n\n\t\tif (this.getAttribution && map.attributionControl) {\n\t\t\tmap.attributionControl.addAttribution(this.getAttribution());\n\t\t}\n\n\t\tthis.fire('add');\n\t\tmap.fire('layeradd', {layer: this});\n\t}\n});\n\n/* @section Extension methods\n * @uninheritable\n *\n * Every layer should extend from `L.Layer` and (re-)implement the following methods.\n *\n * @method onAdd(map: Map): this\n * Should contain code that creates DOM elements for the layer, adds them to `map panes` where they should belong and puts listeners on relevant map events. Called on [`map.addLayer(layer)`](#map-addlayer).\n *\n * @method onRemove(map: Map): this\n * Should contain all clean up code that removes the layer's elements from the DOM and removes listeners previously added in [`onAdd`](#layer-onadd). Called on [`map.removeLayer(layer)`](#map-removelayer).\n *\n * @method getEvents(): Object\n * This optional method should return an object like `{ viewreset: this._reset }` for [`addEventListener`](#evented-addeventlistener). The event handlers in this object will be automatically added and removed from the map with your layer.\n *\n * @method getAttribution(): String\n * This optional method should return a string containing HTML to be shown on the `Attribution control` whenever the layer is visible.\n *\n * @method beforeAdd(map: Map): this\n * Optional method. Called on [`map.addLayer(layer)`](#map-addlayer), before the layer is added to the map, before events are initialized, without waiting until the map is in a usable state. Use for early initialization only.\n */\n\n\n/* @namespace Map\n * @section Layer events\n *\n * @event layeradd: LayerEvent\n * Fired when a new layer is added to the map.\n *\n * @event layerremove: LayerEvent\n * Fired when some layer is removed from the map\n *\n * @section Methods for Layers and Controls\n */\nMap.include({\n\t// @method addLayer(layer: Layer): this\n\t// Adds the given layer to the map\n\taddLayer: function (layer) {\n\t\tif (!layer._layerAdd) {\n\t\t\tthrow new Error('The provided object is not a Layer.');\n\t\t}\n\n\t\tvar id = stamp(layer);\n\t\tif (this._layers[id]) { return this; }\n\t\tthis._layers[id] = layer;\n\n\t\tlayer._mapToAdd = this;\n\n\t\tif (layer.beforeAdd) {\n\t\t\tlayer.beforeAdd(this);\n\t\t}\n\n\t\tthis.whenReady(layer._layerAdd, layer);\n\n\t\treturn this;\n\t},\n\n\t// @method removeLayer(layer: Layer): this\n\t// Removes the given layer from the map.\n\tremoveLayer: function (layer) {\n\t\tvar id = stamp(layer);\n\n\t\tif (!this._layers[id]) { return this; }\n\n\t\tif (this._loaded) {\n\t\t\tlayer.onRemove(this);\n\t\t}\n\n\t\tif (layer.getAttribution && this.attributionControl) {\n\t\t\tthis.attributionControl.removeAttribution(layer.getAttribution());\n\t\t}\n\n\t\tdelete this._layers[id];\n\n\t\tif (this._loaded) {\n\t\t\tthis.fire('layerremove', {layer: layer});\n\t\t\tlayer.fire('remove');\n\t\t}\n\n\t\tlayer._map = layer._mapToAdd = null;\n\n\t\treturn this;\n\t},\n\n\t// @method hasLayer(layer: Layer): Boolean\n\t// Returns `true` if the given layer is currently added to the map\n\thasLayer: function (layer) {\n\t\treturn !!layer && (stamp(layer) in this._layers);\n\t},\n\n\t/* @method eachLayer(fn: Function, context?: Object): this\n\t * Iterates over the layers of the map, optionally specifying context of the iterator function.\n\t * ```\n\t * map.eachLayer(function(layer){\n\t *     layer.bindPopup('Hello');\n\t * });\n\t * ```\n\t */\n\teachLayer: function (method, context) {\n\t\tfor (var i in this._layers) {\n\t\t\tmethod.call(context, this._layers[i]);\n\t\t}\n\t\treturn this;\n\t},\n\n\t_addLayers: function (layers) {\n\t\tlayers = layers ? (isArray(layers) ? layers : [layers]) : [];\n\n\t\tfor (var i = 0, len = layers.length; i < len; i++) {\n\t\t\tthis.addLayer(layers[i]);\n\t\t}\n\t},\n\n\t_addZoomLimit: function (layer) {\n\t\tif (isNaN(layer.options.maxZoom) || !isNaN(layer.options.minZoom)) {\n\t\t\tthis._zoomBoundLayers[stamp(layer)] = layer;\n\t\t\tthis._updateZoomLevels();\n\t\t}\n\t},\n\n\t_removeZoomLimit: function (layer) {\n\t\tvar id = stamp(layer);\n\n\t\tif (this._zoomBoundLayers[id]) {\n\t\t\tdelete this._zoomBoundLayers[id];\n\t\t\tthis._updateZoomLevels();\n\t\t}\n\t},\n\n\t_updateZoomLevels: function () {\n\t\tvar minZoom = Infinity,\n\t\t    maxZoom = -Infinity,\n\t\t    oldZoomSpan = this._getZoomSpan();\n\n\t\tfor (var i in this._zoomBoundLayers) {\n\t\t\tvar options = this._zoomBoundLayers[i].options;\n\n\t\t\tminZoom = options.minZoom === undefined ? minZoom : Math.min(minZoom, options.minZoom);\n\t\t\tmaxZoom = options.maxZoom === undefined ? maxZoom : Math.max(maxZoom, options.maxZoom);\n\t\t}\n\n\t\tthis._layersMaxZoom = maxZoom === -Infinity ? undefined : maxZoom;\n\t\tthis._layersMinZoom = minZoom === Infinity ? undefined : minZoom;\n\n\t\t// @section Map state change events\n\t\t// @event zoomlevelschange: Event\n\t\t// Fired when the number of zoomlevels on the map is changed due\n\t\t// to adding or removing a layer.\n\t\tif (oldZoomSpan !== this._getZoomSpan()) {\n\t\t\tthis.fire('zoomlevelschange');\n\t\t}\n\n\t\tif (this.options.maxZoom === undefined && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom) {\n\t\t\tthis.setZoom(this._layersMaxZoom);\n\t\t}\n\t\tif (this.options.minZoom === undefined && this._layersMinZoom && this.getZoom() < this._layersMinZoom) {\n\t\t\tthis.setZoom(this._layersMinZoom);\n\t\t}\n\t}\n});\n\n/*\r\n * @class LayerGroup\r\n * @aka L.LayerGroup\r\n * @inherits Layer\r\n *\r\n * Used to group several layers and handle them as one. If you add it to the map,\r\n * any layers added or removed from the group will be added/removed on the map as\r\n * well. Extends `Layer`.\r\n *\r\n * @example\r\n *\r\n * ```js\r\n * L.layerGroup([marker1, marker2])\r\n * \t.addLayer(polyline)\r\n * \t.addTo(map);\r\n * ```\r\n */\r\n\r\nvar LayerGroup = Layer.extend({\r\n\r\n\tinitialize: function (layers, options) {\r\n\t\tsetOptions(this, options);\r\n\r\n\t\tthis._layers = {};\r\n\r\n\t\tvar i, len;\r\n\r\n\t\tif (layers) {\r\n\t\t\tfor (i = 0, len = layers.length; i < len; i++) {\r\n\t\t\t\tthis.addLayer(layers[i]);\r\n\t\t\t}\r\n\t\t}\r\n\t},\r\n\r\n\t// @method addLayer(layer: Layer): this\r\n\t// Adds the given layer to the group.\r\n\taddLayer: function (layer) {\r\n\t\tvar id = this.getLayerId(layer);\r\n\r\n\t\tthis._layers[id] = layer;\r\n\r\n\t\tif (this._map) {\r\n\t\t\tthis._map.addLayer(layer);\r\n\t\t}\r\n\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// @method removeLayer(layer: Layer): this\r\n\t// Removes the given layer from the group.\r\n\t// @alternative\r\n\t// @method removeLayer(id: Number): this\r\n\t// Removes the layer with the given internal ID from the group.\r\n\tremoveLayer: function (layer) {\r\n\t\tvar id = layer in this._layers ? layer : this.getLayerId(layer);\r\n\r\n\t\tif (this._map && this._layers[id]) {\r\n\t\t\tthis._map.removeLayer(this._layers[id]);\r\n\t\t}\r\n\r\n\t\tdelete this._layers[id];\r\n\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// @method hasLayer(layer: Layer): Boolean\r\n\t// Returns `true` if the given layer is currently added to the group.\r\n\t// @alternative\r\n\t// @method hasLayer(id: Number): Boolean\r\n\t// Returns `true` if the given internal ID is currently added to the group.\r\n\thasLayer: function (layer) {\r\n\t\treturn !!layer && (layer in this._layers || this.getLayerId(layer) in this._layers);\r\n\t},\r\n\r\n\t// @method clearLayers(): this\r\n\t// Removes all the layers from the group.\r\n\tclearLayers: function () {\r\n\t\treturn this.eachLayer(this.removeLayer, this);\r\n\t},\r\n\r\n\t// @method invoke(methodName: String, …): this\r\n\t// Calls `methodName` on every layer contained in this group, passing any\r\n\t// additional parameters. Has no effect if the layers contained do not\r\n\t// implement `methodName`.\r\n\tinvoke: function (methodName) {\r\n\t\tvar args = Array.prototype.slice.call(arguments, 1),\r\n\t\t    i, layer;\r\n\r\n\t\tfor (i in this._layers) {\r\n\t\t\tlayer = this._layers[i];\r\n\r\n\t\t\tif (layer[methodName]) {\r\n\t\t\t\tlayer[methodName].apply(layer, args);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\treturn this;\r\n\t},\r\n\r\n\tonAdd: function (map) {\r\n\t\tthis.eachLayer(map.addLayer, map);\r\n\t},\r\n\r\n\tonRemove: function (map) {\r\n\t\tthis.eachLayer(map.removeLayer, map);\r\n\t},\r\n\r\n\t// @method eachLayer(fn: Function, context?: Object): this\r\n\t// Iterates over the layers of the group, optionally specifying context of the iterator function.\r\n\t// ```js\r\n\t// group.eachLayer(function (layer) {\r\n\t// \tlayer.bindPopup('Hello');\r\n\t// });\r\n\t// ```\r\n\teachLayer: function (method, context) {\r\n\t\tfor (var i in this._layers) {\r\n\t\t\tmethod.call(context, this._layers[i]);\r\n\t\t}\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// @method getLayer(id: Number): Layer\r\n\t// Returns the layer with the given internal ID.\r\n\tgetLayer: function (id) {\r\n\t\treturn this._layers[id];\r\n\t},\r\n\r\n\t// @method getLayers(): Layer[]\r\n\t// Returns an array of all the layers added to the group.\r\n\tgetLayers: function () {\r\n\t\tvar layers = [];\r\n\t\tthis.eachLayer(layers.push, layers);\r\n\t\treturn layers;\r\n\t},\r\n\r\n\t// @method setZIndex(zIndex: Number): this\r\n\t// Calls `setZIndex` on every layer contained in this group, passing the z-index.\r\n\tsetZIndex: function (zIndex) {\r\n\t\treturn this.invoke('setZIndex', zIndex);\r\n\t},\r\n\r\n\t// @method getLayerId(layer: Layer): Number\r\n\t// Returns the internal ID for a layer\r\n\tgetLayerId: function (layer) {\r\n\t\treturn stamp(layer);\r\n\t}\r\n});\r\n\r\n\r\n// @factory L.layerGroup(layers?: Layer[], options?: Object)\r\n// Create a layer group, optionally given an initial set of layers and an `options` object.\r\nvar layerGroup = function (layers, options) {\r\n\treturn new LayerGroup(layers, options);\r\n};\n\n/*\r\n * @class FeatureGroup\r\n * @aka L.FeatureGroup\r\n * @inherits LayerGroup\r\n *\r\n * Extended `LayerGroup` that makes it easier to do the same thing to all its member layers:\r\n *  * [`bindPopup`](#layer-bindpopup) binds a popup to all of the layers at once (likewise with [`bindTooltip`](#layer-bindtooltip))\r\n *  * Events are propagated to the `FeatureGroup`, so if the group has an event\r\n * handler, it will handle events from any of the layers. This includes mouse events\r\n * and custom events.\r\n *  * Has `layeradd` and `layerremove` events\r\n *\r\n * @example\r\n *\r\n * ```js\r\n * L.featureGroup([marker1, marker2, polyline])\r\n * \t.bindPopup('Hello world!')\r\n * \t.on('click', function() { alert('Clicked on a member of the group!'); })\r\n * \t.addTo(map);\r\n * ```\r\n */\r\n\r\nvar FeatureGroup = LayerGroup.extend({\r\n\r\n\taddLayer: function (layer) {\r\n\t\tif (this.hasLayer(layer)) {\r\n\t\t\treturn this;\r\n\t\t}\r\n\r\n\t\tlayer.addEventParent(this);\r\n\r\n\t\tLayerGroup.prototype.addLayer.call(this, layer);\r\n\r\n\t\t// @event layeradd: LayerEvent\r\n\t\t// Fired when a layer is added to this `FeatureGroup`\r\n\t\treturn this.fire('layeradd', {layer: layer});\r\n\t},\r\n\r\n\tremoveLayer: function (layer) {\r\n\t\tif (!this.hasLayer(layer)) {\r\n\t\t\treturn this;\r\n\t\t}\r\n\t\tif (layer in this._layers) {\r\n\t\t\tlayer = this._layers[layer];\r\n\t\t}\r\n\r\n\t\tlayer.removeEventParent(this);\r\n\r\n\t\tLayerGroup.prototype.removeLayer.call(this, layer);\r\n\r\n\t\t// @event layerremove: LayerEvent\r\n\t\t// Fired when a layer is removed from this `FeatureGroup`\r\n\t\treturn this.fire('layerremove', {layer: layer});\r\n\t},\r\n\r\n\t// @method setStyle(style: Path options): this\r\n\t// Sets the given path options to each layer of the group that has a `setStyle` method.\r\n\tsetStyle: function (style) {\r\n\t\treturn this.invoke('setStyle', style);\r\n\t},\r\n\r\n\t// @method bringToFront(): this\r\n\t// Brings the layer group to the top of all other layers\r\n\tbringToFront: function () {\r\n\t\treturn this.invoke('bringToFront');\r\n\t},\r\n\r\n\t// @method bringToBack(): this\r\n\t// Brings the layer group to the back of all other layers\r\n\tbringToBack: function () {\r\n\t\treturn this.invoke('bringToBack');\r\n\t},\r\n\r\n\t// @method getBounds(): LatLngBounds\r\n\t// Returns the LatLngBounds of the Feature Group (created from bounds and coordinates of its children).\r\n\tgetBounds: function () {\r\n\t\tvar bounds = new LatLngBounds();\r\n\r\n\t\tfor (var id in this._layers) {\r\n\t\t\tvar layer = this._layers[id];\r\n\t\t\tbounds.extend(layer.getBounds ? layer.getBounds() : layer.getLatLng());\r\n\t\t}\r\n\t\treturn bounds;\r\n\t}\r\n});\r\n\r\n// @factory L.featureGroup(layers: Layer[])\r\n// Create a feature group, optionally given an initial set of layers.\r\nvar featureGroup = function (layers) {\r\n\treturn new FeatureGroup(layers);\r\n};\n\n/*\r\n * @class Icon\r\n * @aka L.Icon\r\n *\r\n * Represents an icon to provide when creating a marker.\r\n *\r\n * @example\r\n *\r\n * ```js\r\n * var myIcon = L.icon({\r\n *     iconUrl: 'my-icon.png',\r\n *     iconRetinaUrl: 'my-icon@2x.png',\r\n *     iconSize: [38, 95],\r\n *     iconAnchor: [22, 94],\r\n *     popupAnchor: [-3, -76],\r\n *     shadowUrl: 'my-icon-shadow.png',\r\n *     shadowRetinaUrl: 'my-icon-shadow@2x.png',\r\n *     shadowSize: [68, 95],\r\n *     shadowAnchor: [22, 94]\r\n * });\r\n *\r\n * L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);\r\n * ```\r\n *\r\n * `L.Icon.Default` extends `L.Icon` and is the blue icon Leaflet uses for markers by default.\r\n *\r\n */\r\n\r\nvar Icon = Class.extend({\r\n\r\n\t/* @section\r\n\t * @aka Icon options\r\n\t *\r\n\t * @option iconUrl: String = null\r\n\t * **(required)** The URL to the icon image (absolute or relative to your script path).\r\n\t *\r\n\t * @option iconRetinaUrl: String = null\r\n\t * The URL to a retina sized version of the icon image (absolute or relative to your\r\n\t * script path). Used for Retina screen devices.\r\n\t *\r\n\t * @option iconSize: Point = null\r\n\t * Size of the icon image in pixels.\r\n\t *\r\n\t * @option iconAnchor: Point = null\r\n\t * The coordinates of the \"tip\" of the icon (relative to its top left corner). The icon\r\n\t * will be aligned so that this point is at the marker's geographical location. Centered\r\n\t * by default if size is specified, also can be set in CSS with negative margins.\r\n\t *\r\n\t * @option popupAnchor: Point = [0, 0]\r\n\t * The coordinates of the point from which popups will \"open\", relative to the icon anchor.\r\n\t *\r\n\t * @option tooltipAnchor: Point = [0, 0]\r\n\t * The coordinates of the point from which tooltips will \"open\", relative to the icon anchor.\r\n\t *\r\n\t * @option shadowUrl: String = null\r\n\t * The URL to the icon shadow image. If not specified, no shadow image will be created.\r\n\t *\r\n\t * @option shadowRetinaUrl: String = null\r\n\t *\r\n\t * @option shadowSize: Point = null\r\n\t * Size of the shadow image in pixels.\r\n\t *\r\n\t * @option shadowAnchor: Point = null\r\n\t * The coordinates of the \"tip\" of the shadow (relative to its top left corner) (the same\r\n\t * as iconAnchor if not specified).\r\n\t *\r\n\t * @option className: String = ''\r\n\t * A custom class name to assign to both icon and shadow images. Empty by default.\r\n\t */\r\n\r\n\toptions: {\r\n\t\tpopupAnchor: [0, 0],\r\n\t\ttooltipAnchor: [0, 0]\r\n\t},\r\n\r\n\tinitialize: function (options) {\r\n\t\tsetOptions(this, options);\r\n\t},\r\n\r\n\t// @method createIcon(oldIcon?: HTMLElement): HTMLElement\r\n\t// Called internally when the icon has to be shown, returns a `<img>` HTML element\r\n\t// styled according to the options.\r\n\tcreateIcon: function (oldIcon) {\r\n\t\treturn this._createIcon('icon', oldIcon);\r\n\t},\r\n\r\n\t// @method createShadow(oldIcon?: HTMLElement): HTMLElement\r\n\t// As `createIcon`, but for the shadow beneath it.\r\n\tcreateShadow: function (oldIcon) {\r\n\t\treturn this._createIcon('shadow', oldIcon);\r\n\t},\r\n\r\n\t_createIcon: function (name, oldIcon) {\r\n\t\tvar src = this._getIconUrl(name);\r\n\r\n\t\tif (!src) {\r\n\t\t\tif (name === 'icon') {\r\n\t\t\t\tthrow new Error('iconUrl not set in Icon options (see the docs).');\r\n\t\t\t}\r\n\t\t\treturn null;\r\n\t\t}\r\n\r\n\t\tvar img = this._createImg(src, oldIcon && oldIcon.tagName === 'IMG' ? oldIcon : null);\r\n\t\tthis._setIconStyles(img, name);\r\n\r\n\t\treturn img;\r\n\t},\r\n\r\n\t_setIconStyles: function (img, name) {\r\n\t\tvar options = this.options;\r\n\t\tvar sizeOption = options[name + 'Size'];\r\n\r\n\t\tif (typeof sizeOption === 'number') {\r\n\t\t\tsizeOption = [sizeOption, sizeOption];\r\n\t\t}\r\n\r\n\t\tvar size = toPoint(sizeOption),\r\n\t\t    anchor = toPoint(name === 'shadow' && options.shadowAnchor || options.iconAnchor ||\r\n\t\t            size && size.divideBy(2, true));\r\n\r\n\t\timg.className = 'leaflet-marker-' + name + ' ' + (options.className || '');\r\n\r\n\t\tif (anchor) {\r\n\t\t\timg.style.marginLeft = (-anchor.x) + 'px';\r\n\t\t\timg.style.marginTop  = (-anchor.y) + 'px';\r\n\t\t}\r\n\r\n\t\tif (size) {\r\n\t\t\timg.style.width  = size.x + 'px';\r\n\t\t\timg.style.height = size.y + 'px';\r\n\t\t}\r\n\t},\r\n\r\n\t_createImg: function (src, el) {\r\n\t\tel = el || document.createElement('img');\r\n\t\tel.src = src;\r\n\t\treturn el;\r\n\t},\r\n\r\n\t_getIconUrl: function (name) {\r\n\t\treturn retina && this.options[name + 'RetinaUrl'] || this.options[name + 'Url'];\r\n\t}\r\n});\r\n\r\n\r\n// @factory L.icon(options: Icon options)\r\n// Creates an icon instance with the given options.\r\nfunction icon(options) {\r\n\treturn new Icon(options);\r\n}\n\n/*\n * @miniclass Icon.Default (Icon)\n * @aka L.Icon.Default\n * @section\n *\n * A trivial subclass of `Icon`, represents the icon to use in `Marker`s when\n * no icon is specified. Points to the blue marker image distributed with Leaflet\n * releases.\n *\n * In order to customize the default icon, just change the properties of `L.Icon.Default.prototype.options`\n * (which is a set of `Icon options`).\n *\n * If you want to _completely_ replace the default icon, override the\n * `L.Marker.prototype.options.icon` with your own icon instead.\n */\n\nvar IconDefault = Icon.extend({\n\n\toptions: {\n\t\ticonUrl:       'marker-icon.png',\n\t\ticonRetinaUrl: 'marker-icon-2x.png',\n\t\tshadowUrl:     'marker-shadow.png',\n\t\ticonSize:    [25, 41],\n\t\ticonAnchor:  [12, 41],\n\t\tpopupAnchor: [1, -34],\n\t\ttooltipAnchor: [16, -28],\n\t\tshadowSize:  [41, 41]\n\t},\n\n\t_getIconUrl: function (name) {\n\t\tif (!IconDefault.imagePath) {\t// Deprecated, backwards-compatibility only\n\t\t\tIconDefault.imagePath = this._detectIconPath();\n\t\t}\n\n\t\t// @option imagePath: String\n\t\t// `Icon.Default` will try to auto-detect the location of the\n\t\t// blue icon images. If you are placing these images in a non-standard\n\t\t// way, set this option to point to the right path.\n\t\treturn (this.options.imagePath || IconDefault.imagePath) + Icon.prototype._getIconUrl.call(this, name);\n\t},\n\n\t_detectIconPath: function () {\n\t\tvar el = create$1('div',  'leaflet-default-icon-path', document.body);\n\t\tvar path = getStyle(el, 'background-image') ||\n\t\t           getStyle(el, 'backgroundImage');\t// IE8\n\n\t\tdocument.body.removeChild(el);\n\n\t\tif (path === null || path.indexOf('url') !== 0) {\n\t\t\tpath = '';\n\t\t} else {\n\t\t\tpath = path.replace(/^url\\([\"']?/, '').replace(/marker-icon\\.png[\"']?\\)$/, '');\n\t\t}\n\n\t\treturn path;\n\t}\n});\n\n/*\n * L.Handler.MarkerDrag is used internally by L.Marker to make the markers draggable.\n */\n\n\n/* @namespace Marker\n * @section Interaction handlers\n *\n * Interaction handlers are properties of a marker instance that allow you to control interaction behavior in runtime, enabling or disabling certain features such as dragging (see `Handler` methods). Example:\n *\n * ```js\n * marker.dragging.disable();\n * ```\n *\n * @property dragging: Handler\n * Marker dragging handler (by both mouse and touch). Only valid when the marker is on the map (Otherwise set [`marker.options.draggable`](#marker-draggable)).\n */\n\nvar MarkerDrag = Handler.extend({\n\tinitialize: function (marker) {\n\t\tthis._marker = marker;\n\t},\n\n\taddHooks: function () {\n\t\tvar icon = this._marker._icon;\n\n\t\tif (!this._draggable) {\n\t\t\tthis._draggable = new Draggable(icon, icon, true);\n\t\t}\n\n\t\tthis._draggable.on({\n\t\t\tdragstart: this._onDragStart,\n\t\t\tpredrag: this._onPreDrag,\n\t\t\tdrag: this._onDrag,\n\t\t\tdragend: this._onDragEnd\n\t\t}, this).enable();\n\n\t\taddClass(icon, 'leaflet-marker-draggable');\n\t},\n\n\tremoveHooks: function () {\n\t\tthis._draggable.off({\n\t\t\tdragstart: this._onDragStart,\n\t\t\tpredrag: this._onPreDrag,\n\t\t\tdrag: this._onDrag,\n\t\t\tdragend: this._onDragEnd\n\t\t}, this).disable();\n\n\t\tif (this._marker._icon) {\n\t\t\tremoveClass(this._marker._icon, 'leaflet-marker-draggable');\n\t\t}\n\t},\n\n\tmoved: function () {\n\t\treturn this._draggable && this._draggable._moved;\n\t},\n\n\t_adjustPan: function (e) {\n\t\tvar marker = this._marker,\n\t\t    map = marker._map,\n\t\t    speed = this._marker.options.autoPanSpeed,\n\t\t    padding = this._marker.options.autoPanPadding,\n\t\t    iconPos = getPosition(marker._icon),\n\t\t    bounds = map.getPixelBounds(),\n\t\t    origin = map.getPixelOrigin();\n\n\t\tvar panBounds = toBounds(\n\t\t\tbounds.min._subtract(origin).add(padding),\n\t\t\tbounds.max._subtract(origin).subtract(padding)\n\t\t);\n\n\t\tif (!panBounds.contains(iconPos)) {\n\t\t\t// Compute incremental movement\n\t\t\tvar movement = toPoint(\n\t\t\t\t(Math.max(panBounds.max.x, iconPos.x) - panBounds.max.x) / (bounds.max.x - panBounds.max.x) -\n\t\t\t\t(Math.min(panBounds.min.x, iconPos.x) - panBounds.min.x) / (bounds.min.x - panBounds.min.x),\n\n\t\t\t\t(Math.max(panBounds.max.y, iconPos.y) - panBounds.max.y) / (bounds.max.y - panBounds.max.y) -\n\t\t\t\t(Math.min(panBounds.min.y, iconPos.y) - panBounds.min.y) / (bounds.min.y - panBounds.min.y)\n\t\t\t).multiplyBy(speed);\n\n\t\t\tmap.panBy(movement, {animate: false});\n\n\t\t\tthis._draggable._newPos._add(movement);\n\t\t\tthis._draggable._startPos._add(movement);\n\n\t\t\tsetPosition(marker._icon, this._draggable._newPos);\n\t\t\tthis._onDrag(e);\n\n\t\t\tthis._panRequest = requestAnimFrame(this._adjustPan.bind(this, e));\n\t\t}\n\t},\n\n\t_onDragStart: function () {\n\t\t// @section Dragging events\n\t\t// @event dragstart: Event\n\t\t// Fired when the user starts dragging the marker.\n\n\t\t// @event movestart: Event\n\t\t// Fired when the marker starts moving (because of dragging).\n\n\t\tthis._oldLatLng = this._marker.getLatLng();\n\t\tthis._marker\n\t\t    .closePopup()\n\t\t    .fire('movestart')\n\t\t    .fire('dragstart');\n\t},\n\n\t_onPreDrag: function (e) {\n\t\tif (this._marker.options.autoPan) {\n\t\t\tcancelAnimFrame(this._panRequest);\n\t\t\tthis._panRequest = requestAnimFrame(this._adjustPan.bind(this, e));\n\t\t}\n\t},\n\n\t_onDrag: function (e) {\n\t\tvar marker = this._marker,\n\t\t    shadow = marker._shadow,\n\t\t    iconPos = getPosition(marker._icon),\n\t\t    latlng = marker._map.layerPointToLatLng(iconPos);\n\n\t\t// update shadow position\n\t\tif (shadow) {\n\t\t\tsetPosition(shadow, iconPos);\n\t\t}\n\n\t\tmarker._latlng = latlng;\n\t\te.latlng = latlng;\n\t\te.oldLatLng = this._oldLatLng;\n\n\t\t// @event drag: Event\n\t\t// Fired repeatedly while the user drags the marker.\n\t\tmarker\n\t\t    .fire('move', e)\n\t\t    .fire('drag', e);\n\t},\n\n\t_onDragEnd: function (e) {\n\t\t// @event dragend: DragEndEvent\n\t\t// Fired when the user stops dragging the marker.\n\n\t\t cancelAnimFrame(this._panRequest);\n\n\t\t// @event moveend: Event\n\t\t// Fired when the marker stops moving (because of dragging).\n\t\tdelete this._oldLatLng;\n\t\tthis._marker\n\t\t    .fire('moveend')\n\t\t    .fire('dragend', e);\n\t}\n});\n\n/*\r\n * @class Marker\r\n * @inherits Interactive layer\r\n * @aka L.Marker\r\n * L.Marker is used to display clickable/draggable icons on the map. Extends `Layer`.\r\n *\r\n * @example\r\n *\r\n * ```js\r\n * L.marker([50.5, 30.5]).addTo(map);\r\n * ```\r\n */\r\n\r\nvar Marker = Layer.extend({\r\n\r\n\t// @section\r\n\t// @aka Marker options\r\n\toptions: {\r\n\t\t// @option icon: Icon = *\r\n\t\t// Icon instance to use for rendering the marker.\r\n\t\t// See [Icon documentation](#L.Icon) for details on how to customize the marker icon.\r\n\t\t// If not specified, a common instance of `L.Icon.Default` is used.\r\n\t\ticon: new IconDefault(),\r\n\r\n\t\t// Option inherited from \"Interactive layer\" abstract class\r\n\t\tinteractive: true,\r\n\r\n\t\t// @option keyboard: Boolean = true\r\n\t\t// Whether the marker can be tabbed to with a keyboard and clicked by pressing enter.\r\n\t\tkeyboard: true,\r\n\r\n\t\t// @option title: String = ''\r\n\t\t// Text for the browser tooltip that appear on marker hover (no tooltip by default).\r\n\t\ttitle: '',\r\n\r\n\t\t// @option alt: String = ''\r\n\t\t// Text for the `alt` attribute of the icon image (useful for accessibility).\r\n\t\talt: '',\r\n\r\n\t\t// @option zIndexOffset: Number = 0\r\n\t\t// By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like `1000` (or high negative value, respectively).\r\n\t\tzIndexOffset: 0,\r\n\r\n\t\t// @option opacity: Number = 1.0\r\n\t\t// The opacity of the marker.\r\n\t\topacity: 1,\r\n\r\n\t\t// @option riseOnHover: Boolean = false\r\n\t\t// If `true`, the marker will get on top of others when you hover the mouse over it.\r\n\t\triseOnHover: false,\r\n\r\n\t\t// @option riseOffset: Number = 250\r\n\t\t// The z-index offset used for the `riseOnHover` feature.\r\n\t\triseOffset: 250,\r\n\r\n\t\t// @option pane: String = 'markerPane'\r\n\t\t// `Map pane` where the markers icon will be added.\r\n\t\tpane: 'markerPane',\r\n\r\n\t\t// @option bubblingMouseEvents: Boolean = false\r\n\t\t// When `true`, a mouse event on this marker will trigger the same event on the map\r\n\t\t// (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).\r\n\t\tbubblingMouseEvents: false,\r\n\r\n\t\t// @section Draggable marker options\r\n\t\t// @option draggable: Boolean = false\r\n\t\t// Whether the marker is draggable with mouse/touch or not.\r\n\t\tdraggable: false,\r\n\r\n\t\t// @option autoPan: Boolean = false\r\n\t\t// Whether to pan the map when dragging this marker near its edge or not.\r\n\t\tautoPan: false,\r\n\r\n\t\t// @option autoPanPadding: Point = Point(50, 50)\r\n\t\t// Distance (in pixels to the left/right and to the top/bottom) of the\r\n\t\t// map edge to start panning the map.\r\n\t\tautoPanPadding: [50, 50],\r\n\r\n\t\t// @option autoPanSpeed: Number = 10\r\n\t\t// Number of pixels the map should pan by.\r\n\t\tautoPanSpeed: 10\r\n\t},\r\n\r\n\t/* @section\r\n\t *\r\n\t * In addition to [shared layer methods](#Layer) like `addTo()` and `remove()` and [popup methods](#Popup) like bindPopup() you can also use the following methods:\r\n\t */\r\n\r\n\tinitialize: function (latlng, options) {\r\n\t\tsetOptions(this, options);\r\n\t\tthis._latlng = toLatLng(latlng);\r\n\t},\r\n\r\n\tonAdd: function (map) {\r\n\t\tthis._zoomAnimated = this._zoomAnimated && map.options.markerZoomAnimation;\r\n\r\n\t\tif (this._zoomAnimated) {\r\n\t\t\tmap.on('zoomanim', this._animateZoom, this);\r\n\t\t}\r\n\r\n\t\tthis._initIcon();\r\n\t\tthis.update();\r\n\t},\r\n\r\n\tonRemove: function (map) {\r\n\t\tif (this.dragging && this.dragging.enabled()) {\r\n\t\t\tthis.options.draggable = true;\r\n\t\t\tthis.dragging.removeHooks();\r\n\t\t}\r\n\t\tdelete this.dragging;\r\n\r\n\t\tif (this._zoomAnimated) {\r\n\t\t\tmap.off('zoomanim', this._animateZoom, this);\r\n\t\t}\r\n\r\n\t\tthis._removeIcon();\r\n\t\tthis._removeShadow();\r\n\t},\r\n\r\n\tgetEvents: function () {\r\n\t\treturn {\r\n\t\t\tzoom: this.update,\r\n\t\t\tviewreset: this.update\r\n\t\t};\r\n\t},\r\n\r\n\t// @method getLatLng: LatLng\r\n\t// Returns the current geographical position of the marker.\r\n\tgetLatLng: function () {\r\n\t\treturn this._latlng;\r\n\t},\r\n\r\n\t// @method setLatLng(latlng: LatLng): this\r\n\t// Changes the marker position to the given point.\r\n\tsetLatLng: function (latlng) {\r\n\t\tvar oldLatLng = this._latlng;\r\n\t\tthis._latlng = toLatLng(latlng);\r\n\t\tthis.update();\r\n\r\n\t\t// @event move: Event\r\n\t\t// Fired when the marker is moved via [`setLatLng`](#marker-setlatlng) or by [dragging](#marker-dragging). Old and new coordinates are included in event arguments as `oldLatLng`, `latlng`.\r\n\t\treturn this.fire('move', {oldLatLng: oldLatLng, latlng: this._latlng});\r\n\t},\r\n\r\n\t// @method setZIndexOffset(offset: Number): this\r\n\t// Changes the [zIndex offset](#marker-zindexoffset) of the marker.\r\n\tsetZIndexOffset: function (offset) {\r\n\t\tthis.options.zIndexOffset = offset;\r\n\t\treturn this.update();\r\n\t},\r\n\r\n\t// @method setIcon(icon: Icon): this\r\n\t// Changes the marker icon.\r\n\tsetIcon: function (icon) {\r\n\r\n\t\tthis.options.icon = icon;\r\n\r\n\t\tif (this._map) {\r\n\t\t\tthis._initIcon();\r\n\t\t\tthis.update();\r\n\t\t}\r\n\r\n\t\tif (this._popup) {\r\n\t\t\tthis.bindPopup(this._popup, this._popup.options);\r\n\t\t}\r\n\r\n\t\treturn this;\r\n\t},\r\n\r\n\tgetElement: function () {\r\n\t\treturn this._icon;\r\n\t},\r\n\r\n\tupdate: function () {\r\n\r\n\t\tif (this._icon && this._map) {\r\n\t\t\tvar pos = this._map.latLngToLayerPoint(this._latlng).round();\r\n\t\t\tthis._setPos(pos);\r\n\t\t}\r\n\r\n\t\treturn this;\r\n\t},\r\n\r\n\t_initIcon: function () {\r\n\t\tvar options = this.options,\r\n\t\t    classToAdd = 'leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide');\r\n\r\n\t\tvar icon = options.icon.createIcon(this._icon),\r\n\t\t    addIcon = false;\r\n\r\n\t\t// if we're not reusing the icon, remove the old one and init new one\r\n\t\tif (icon !== this._icon) {\r\n\t\t\tif (this._icon) {\r\n\t\t\t\tthis._removeIcon();\r\n\t\t\t}\r\n\t\t\taddIcon = true;\r\n\r\n\t\t\tif (options.title) {\r\n\t\t\t\ticon.title = options.title;\r\n\t\t\t}\r\n\r\n\t\t\tif (icon.tagName === 'IMG') {\r\n\t\t\t\ticon.alt = options.alt || '';\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\taddClass(icon, classToAdd);\r\n\r\n\t\tif (options.keyboard) {\r\n\t\t\ticon.tabIndex = '0';\r\n\t\t}\r\n\r\n\t\tthis._icon = icon;\r\n\r\n\t\tif (options.riseOnHover) {\r\n\t\t\tthis.on({\r\n\t\t\t\tmouseover: this._bringToFront,\r\n\t\t\t\tmouseout: this._resetZIndex\r\n\t\t\t});\r\n\t\t}\r\n\r\n\t\tvar newShadow = options.icon.createShadow(this._shadow),\r\n\t\t    addShadow = false;\r\n\r\n\t\tif (newShadow !== this._shadow) {\r\n\t\t\tthis._removeShadow();\r\n\t\t\taddShadow = true;\r\n\t\t}\r\n\r\n\t\tif (newShadow) {\r\n\t\t\taddClass(newShadow, classToAdd);\r\n\t\t\tnewShadow.alt = '';\r\n\t\t}\r\n\t\tthis._shadow = newShadow;\r\n\r\n\r\n\t\tif (options.opacity < 1) {\r\n\t\t\tthis._updateOpacity();\r\n\t\t}\r\n\r\n\r\n\t\tif (addIcon) {\r\n\t\t\tthis.getPane().appendChild(this._icon);\r\n\t\t}\r\n\t\tthis._initInteraction();\r\n\t\tif (newShadow && addShadow) {\r\n\t\t\tthis.getPane('shadowPane').appendChild(this._shadow);\r\n\t\t}\r\n\t},\r\n\r\n\t_removeIcon: function () {\r\n\t\tif (this.options.riseOnHover) {\r\n\t\t\tthis.off({\r\n\t\t\t\tmouseover: this._bringToFront,\r\n\t\t\t\tmouseout: this._resetZIndex\r\n\t\t\t});\r\n\t\t}\r\n\r\n\t\tremove(this._icon);\r\n\t\tthis.removeInteractiveTarget(this._icon);\r\n\r\n\t\tthis._icon = null;\r\n\t},\r\n\r\n\t_removeShadow: function () {\r\n\t\tif (this._shadow) {\r\n\t\t\tremove(this._shadow);\r\n\t\t}\r\n\t\tthis._shadow = null;\r\n\t},\r\n\r\n\t_setPos: function (pos) {\r\n\t\tsetPosition(this._icon, pos);\r\n\r\n\t\tif (this._shadow) {\r\n\t\t\tsetPosition(this._shadow, pos);\r\n\t\t}\r\n\r\n\t\tthis._zIndex = pos.y + this.options.zIndexOffset;\r\n\r\n\t\tthis._resetZIndex();\r\n\t},\r\n\r\n\t_updateZIndex: function (offset) {\r\n\t\tthis._icon.style.zIndex = this._zIndex + offset;\r\n\t},\r\n\r\n\t_animateZoom: function (opt) {\r\n\t\tvar pos = this._map._latLngToNewLayerPoint(this._latlng, opt.zoom, opt.center).round();\r\n\r\n\t\tthis._setPos(pos);\r\n\t},\r\n\r\n\t_initInteraction: function () {\r\n\r\n\t\tif (!this.options.interactive) { return; }\r\n\r\n\t\taddClass(this._icon, 'leaflet-interactive');\r\n\r\n\t\tthis.addInteractiveTarget(this._icon);\r\n\r\n\t\tif (MarkerDrag) {\r\n\t\t\tvar draggable = this.options.draggable;\r\n\t\t\tif (this.dragging) {\r\n\t\t\t\tdraggable = this.dragging.enabled();\r\n\t\t\t\tthis.dragging.disable();\r\n\t\t\t}\r\n\r\n\t\t\tthis.dragging = new MarkerDrag(this);\r\n\r\n\t\t\tif (draggable) {\r\n\t\t\t\tthis.dragging.enable();\r\n\t\t\t}\r\n\t\t}\r\n\t},\r\n\r\n\t// @method setOpacity(opacity: Number): this\r\n\t// Changes the opacity of the marker.\r\n\tsetOpacity: function (opacity) {\r\n\t\tthis.options.opacity = opacity;\r\n\t\tif (this._map) {\r\n\t\t\tthis._updateOpacity();\r\n\t\t}\r\n\r\n\t\treturn this;\r\n\t},\r\n\r\n\t_updateOpacity: function () {\r\n\t\tvar opacity = this.options.opacity;\r\n\r\n\t\tsetOpacity(this._icon, opacity);\r\n\r\n\t\tif (this._shadow) {\r\n\t\t\tsetOpacity(this._shadow, opacity);\r\n\t\t}\r\n\t},\r\n\r\n\t_bringToFront: function () {\r\n\t\tthis._updateZIndex(this.options.riseOffset);\r\n\t},\r\n\r\n\t_resetZIndex: function () {\r\n\t\tthis._updateZIndex(0);\r\n\t},\r\n\r\n\t_getPopupAnchor: function () {\r\n\t\treturn this.options.icon.options.popupAnchor;\r\n\t},\r\n\r\n\t_getTooltipAnchor: function () {\r\n\t\treturn this.options.icon.options.tooltipAnchor;\r\n\t}\r\n});\r\n\r\n\r\n// factory L.marker(latlng: LatLng, options? : Marker options)\r\n\r\n// @factory L.marker(latlng: LatLng, options? : Marker options)\r\n// Instantiates a Marker object given a geographical point and optionally an options object.\r\nfunction marker(latlng, options) {\r\n\treturn new Marker(latlng, options);\r\n}\n\n/*\n * @class Path\n * @aka L.Path\n * @inherits Interactive layer\n *\n * An abstract class that contains options and constants shared between vector\n * overlays (Polygon, Polyline, Circle). Do not use it directly. Extends `Layer`.\n */\n\nvar Path = Layer.extend({\n\n\t// @section\n\t// @aka Path options\n\toptions: {\n\t\t// @option stroke: Boolean = true\n\t\t// Whether to draw stroke along the path. Set it to `false` to disable borders on polygons or circles.\n\t\tstroke: true,\n\n\t\t// @option color: String = '#3388ff'\n\t\t// Stroke color\n\t\tcolor: '#3388ff',\n\n\t\t// @option weight: Number = 3\n\t\t// Stroke width in pixels\n\t\tweight: 3,\n\n\t\t// @option opacity: Number = 1.0\n\t\t// Stroke opacity\n\t\topacity: 1,\n\n\t\t// @option lineCap: String= 'round'\n\t\t// A string that defines [shape to be used at the end](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) of the stroke.\n\t\tlineCap: 'round',\n\n\t\t// @option lineJoin: String = 'round'\n\t\t// A string that defines [shape to be used at the corners](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin) of the stroke.\n\t\tlineJoin: 'round',\n\n\t\t// @option dashArray: String = null\n\t\t// A string that defines the stroke [dash pattern](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).\n\t\tdashArray: null,\n\n\t\t// @option dashOffset: String = null\n\t\t// A string that defines the [distance into the dash pattern to start the dash](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).\n\t\tdashOffset: null,\n\n\t\t// @option fill: Boolean = depends\n\t\t// Whether to fill the path with color. Set it to `false` to disable filling on polygons or circles.\n\t\tfill: false,\n\n\t\t// @option fillColor: String = *\n\t\t// Fill color. Defaults to the value of the [`color`](#path-color) option\n\t\tfillColor: null,\n\n\t\t// @option fillOpacity: Number = 0.2\n\t\t// Fill opacity.\n\t\tfillOpacity: 0.2,\n\n\t\t// @option fillRule: String = 'evenodd'\n\t\t// A string that defines [how the inside of a shape](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule) is determined.\n\t\tfillRule: 'evenodd',\n\n\t\t// className: '',\n\n\t\t// Option inherited from \"Interactive layer\" abstract class\n\t\tinteractive: true,\n\n\t\t// @option bubblingMouseEvents: Boolean = true\n\t\t// When `true`, a mouse event on this path will trigger the same event on the map\n\t\t// (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).\n\t\tbubblingMouseEvents: true\n\t},\n\n\tbeforeAdd: function (map) {\n\t\t// Renderer is set here because we need to call renderer.getEvents\n\t\t// before this.getEvents.\n\t\tthis._renderer = map.getRenderer(this);\n\t},\n\n\tonAdd: function () {\n\t\tthis._renderer._initPath(this);\n\t\tthis._reset();\n\t\tthis._renderer._addPath(this);\n\t},\n\n\tonRemove: function () {\n\t\tthis._renderer._removePath(this);\n\t},\n\n\t// @method redraw(): this\n\t// Redraws the layer. Sometimes useful after you changed the coordinates that the path uses.\n\tredraw: function () {\n\t\tif (this._map) {\n\t\t\tthis._renderer._updatePath(this);\n\t\t}\n\t\treturn this;\n\t},\n\n\t// @method setStyle(style: Path options): this\n\t// Changes the appearance of a Path based on the options in the `Path options` object.\n\tsetStyle: function (style) {\n\t\tsetOptions(this, style);\n\t\tif (this._renderer) {\n\t\t\tthis._renderer._updateStyle(this);\n\t\t}\n\t\treturn this;\n\t},\n\n\t// @method bringToFront(): this\n\t// Brings the layer to the top of all path layers.\n\tbringToFront: function () {\n\t\tif (this._renderer) {\n\t\t\tthis._renderer._bringToFront(this);\n\t\t}\n\t\treturn this;\n\t},\n\n\t// @method bringToBack(): this\n\t// Brings the layer to the bottom of all path layers.\n\tbringToBack: function () {\n\t\tif (this._renderer) {\n\t\t\tthis._renderer._bringToBack(this);\n\t\t}\n\t\treturn this;\n\t},\n\n\tgetElement: function () {\n\t\treturn this._path;\n\t},\n\n\t_reset: function () {\n\t\t// defined in child classes\n\t\tthis._project();\n\t\tthis._update();\n\t},\n\n\t_clickTolerance: function () {\n\t\t// used when doing hit detection for Canvas layers\n\t\treturn (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance;\n\t}\n});\n\n/*\n * @class CircleMarker\n * @aka L.CircleMarker\n * @inherits Path\n *\n * A circle of a fixed size with radius specified in pixels. Extends `Path`.\n */\n\nvar CircleMarker = Path.extend({\n\n\t// @section\n\t// @aka CircleMarker options\n\toptions: {\n\t\tfill: true,\n\n\t\t// @option radius: Number = 10\n\t\t// Radius of the circle marker, in pixels\n\t\tradius: 10\n\t},\n\n\tinitialize: function (latlng, options) {\n\t\tsetOptions(this, options);\n\t\tthis._latlng = toLatLng(latlng);\n\t\tthis._radius = this.options.radius;\n\t},\n\n\t// @method setLatLng(latLng: LatLng): this\n\t// Sets the position of a circle marker to a new location.\n\tsetLatLng: function (latlng) {\n\t\tthis._latlng = toLatLng(latlng);\n\t\tthis.redraw();\n\t\treturn this.fire('move', {latlng: this._latlng});\n\t},\n\n\t// @method getLatLng(): LatLng\n\t// Returns the current geographical position of the circle marker\n\tgetLatLng: function () {\n\t\treturn this._latlng;\n\t},\n\n\t// @method setRadius(radius: Number): this\n\t// Sets the radius of a circle marker. Units are in pixels.\n\tsetRadius: function (radius) {\n\t\tthis.options.radius = this._radius = radius;\n\t\treturn this.redraw();\n\t},\n\n\t// @method getRadius(): Number\n\t// Returns the current radius of the circle\n\tgetRadius: function () {\n\t\treturn this._radius;\n\t},\n\n\tsetStyle : function (options) {\n\t\tvar radius = options && options.radius || this._radius;\n\t\tPath.prototype.setStyle.call(this, options);\n\t\tthis.setRadius(radius);\n\t\treturn this;\n\t},\n\n\t_project: function () {\n\t\tthis._point = this._map.latLngToLayerPoint(this._latlng);\n\t\tthis._updateBounds();\n\t},\n\n\t_updateBounds: function () {\n\t\tvar r = this._radius,\n\t\t    r2 = this._radiusY || r,\n\t\t    w = this._clickTolerance(),\n\t\t    p = [r + w, r2 + w];\n\t\tthis._pxBounds = new Bounds(this._point.subtract(p), this._point.add(p));\n\t},\n\n\t_update: function () {\n\t\tif (this._map) {\n\t\t\tthis._updatePath();\n\t\t}\n\t},\n\n\t_updatePath: function () {\n\t\tthis._renderer._updateCircle(this);\n\t},\n\n\t_empty: function () {\n\t\treturn this._radius && !this._renderer._bounds.intersects(this._pxBounds);\n\t},\n\n\t// Needed by the `Canvas` renderer for interactivity\n\t_containsPoint: function (p) {\n\t\treturn p.distanceTo(this._point) <= this._radius + this._clickTolerance();\n\t}\n});\n\n\n// @factory L.circleMarker(latlng: LatLng, options?: CircleMarker options)\n// Instantiates a circle marker object given a geographical point, and an optional options object.\nfunction circleMarker(latlng, options) {\n\treturn new CircleMarker(latlng, options);\n}\n\n/*\n * @class Circle\n * @aka L.Circle\n * @inherits CircleMarker\n *\n * A class for drawing circle overlays on a map. Extends `CircleMarker`.\n *\n * It's an approximation and starts to diverge from a real circle closer to poles (due to projection distortion).\n *\n * @example\n *\n * ```js\n * L.circle([50.5, 30.5], {radius: 200}).addTo(map);\n * ```\n */\n\nvar Circle = CircleMarker.extend({\n\n\tinitialize: function (latlng, options, legacyOptions) {\n\t\tif (typeof options === 'number') {\n\t\t\t// Backwards compatibility with 0.7.x factory (latlng, radius, options?)\n\t\t\toptions = extend({}, legacyOptions, {radius: options});\n\t\t}\n\t\tsetOptions(this, options);\n\t\tthis._latlng = toLatLng(latlng);\n\n\t\tif (isNaN(this.options.radius)) { throw new Error('Circle radius cannot be NaN'); }\n\n\t\t// @section\n\t\t// @aka Circle options\n\t\t// @option radius: Number; Radius of the circle, in meters.\n\t\tthis._mRadius = this.options.radius;\n\t},\n\n\t// @method setRadius(radius: Number): this\n\t// Sets the radius of a circle. Units are in meters.\n\tsetRadius: function (radius) {\n\t\tthis._mRadius = radius;\n\t\treturn this.redraw();\n\t},\n\n\t// @method getRadius(): Number\n\t// Returns the current radius of a circle. Units are in meters.\n\tgetRadius: function () {\n\t\treturn this._mRadius;\n\t},\n\n\t// @method getBounds(): LatLngBounds\n\t// Returns the `LatLngBounds` of the path.\n\tgetBounds: function () {\n\t\tvar half = [this._radius, this._radiusY || this._radius];\n\n\t\treturn new LatLngBounds(\n\t\t\tthis._map.layerPointToLatLng(this._point.subtract(half)),\n\t\t\tthis._map.layerPointToLatLng(this._point.add(half)));\n\t},\n\n\tsetStyle: Path.prototype.setStyle,\n\n\t_project: function () {\n\n\t\tvar lng = this._latlng.lng,\n\t\t    lat = this._latlng.lat,\n\t\t    map = this._map,\n\t\t    crs = map.options.crs;\n\n\t\tif (crs.distance === Earth.distance) {\n\t\t\tvar d = Math.PI / 180,\n\t\t\t    latR = (this._mRadius / Earth.R) / d,\n\t\t\t    top = map.project([lat + latR, lng]),\n\t\t\t    bottom = map.project([lat - latR, lng]),\n\t\t\t    p = top.add(bottom).divideBy(2),\n\t\t\t    lat2 = map.unproject(p).lat,\n\t\t\t    lngR = Math.acos((Math.cos(latR * d) - Math.sin(lat * d) * Math.sin(lat2 * d)) /\n\t\t\t            (Math.cos(lat * d) * Math.cos(lat2 * d))) / d;\n\n\t\t\tif (isNaN(lngR) || lngR === 0) {\n\t\t\t\tlngR = latR / Math.cos(Math.PI / 180 * lat); // Fallback for edge case, #2425\n\t\t\t}\n\n\t\t\tthis._point = p.subtract(map.getPixelOrigin());\n\t\t\tthis._radius = isNaN(lngR) ? 0 : p.x - map.project([lat2, lng - lngR]).x;\n\t\t\tthis._radiusY = p.y - top.y;\n\n\t\t} else {\n\t\t\tvar latlng2 = crs.unproject(crs.project(this._latlng).subtract([this._mRadius, 0]));\n\n\t\t\tthis._point = map.latLngToLayerPoint(this._latlng);\n\t\t\tthis._radius = this._point.x - map.latLngToLayerPoint(latlng2).x;\n\t\t}\n\n\t\tthis._updateBounds();\n\t}\n});\n\n// @factory L.circle(latlng: LatLng, options?: Circle options)\n// Instantiates a circle object given a geographical point, and an options object\n// which contains the circle radius.\n// @alternative\n// @factory L.circle(latlng: LatLng, radius: Number, options?: Circle options)\n// Obsolete way of instantiating a circle, for compatibility with 0.7.x code.\n// Do not use in new applications or plugins.\nfunction circle(latlng, options, legacyOptions) {\n\treturn new Circle(latlng, options, legacyOptions);\n}\n\n/*\n * @class Polyline\n * @aka L.Polyline\n * @inherits Path\n *\n * A class for drawing polyline overlays on a map. Extends `Path`.\n *\n * @example\n *\n * ```js\n * // create a red polyline from an array of LatLng points\n * var latlngs = [\n * \t[45.51, -122.68],\n * \t[37.77, -122.43],\n * \t[34.04, -118.2]\n * ];\n *\n * var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);\n *\n * // zoom the map to the polyline\n * map.fitBounds(polyline.getBounds());\n * ```\n *\n * You can also pass a multi-dimensional array to represent a `MultiPolyline` shape:\n *\n * ```js\n * // create a red polyline from an array of arrays of LatLng points\n * var latlngs = [\n * \t[[45.51, -122.68],\n * \t [37.77, -122.43],\n * \t [34.04, -118.2]],\n * \t[[40.78, -73.91],\n * \t [41.83, -87.62],\n * \t [32.76, -96.72]]\n * ];\n * ```\n */\n\n\nvar Polyline = Path.extend({\n\n\t// @section\n\t// @aka Polyline options\n\toptions: {\n\t\t// @option smoothFactor: Number = 1.0\n\t\t// How much to simplify the polyline on each zoom level. More means\n\t\t// better performance and smoother look, and less means more accurate representation.\n\t\tsmoothFactor: 1.0,\n\n\t\t// @option noClip: Boolean = false\n\t\t// Disable polyline clipping.\n\t\tnoClip: false\n\t},\n\n\tinitialize: function (latlngs, options) {\n\t\tsetOptions(this, options);\n\t\tthis._setLatLngs(latlngs);\n\t},\n\n\t// @method getLatLngs(): LatLng[]\n\t// Returns an array of the points in the path, or nested arrays of points in case of multi-polyline.\n\tgetLatLngs: function () {\n\t\treturn this._latlngs;\n\t},\n\n\t// @method setLatLngs(latlngs: LatLng[]): this\n\t// Replaces all the points in the polyline with the given array of geographical points.\n\tsetLatLngs: function (latlngs) {\n\t\tthis._setLatLngs(latlngs);\n\t\treturn this.redraw();\n\t},\n\n\t// @method isEmpty(): Boolean\n\t// Returns `true` if the Polyline has no LatLngs.\n\tisEmpty: function () {\n\t\treturn !this._latlngs.length;\n\t},\n\n\t// @method closestLayerPoint(p: Point): Point\n\t// Returns the point closest to `p` on the Polyline.\n\tclosestLayerPoint: function (p) {\n\t\tvar minDistance = Infinity,\n\t\t    minPoint = null,\n\t\t    closest = _sqClosestPointOnSegment,\n\t\t    p1, p2;\n\n\t\tfor (var j = 0, jLen = this._parts.length; j < jLen; j++) {\n\t\t\tvar points = this._parts[j];\n\n\t\t\tfor (var i = 1, len = points.length; i < len; i++) {\n\t\t\t\tp1 = points[i - 1];\n\t\t\t\tp2 = points[i];\n\n\t\t\t\tvar sqDist = closest(p, p1, p2, true);\n\n\t\t\t\tif (sqDist < minDistance) {\n\t\t\t\t\tminDistance = sqDist;\n\t\t\t\t\tminPoint = closest(p, p1, p2);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tif (minPoint) {\n\t\t\tminPoint.distance = Math.sqrt(minDistance);\n\t\t}\n\t\treturn minPoint;\n\t},\n\n\t// @method getCenter(): LatLng\n\t// Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the polyline.\n\tgetCenter: function () {\n\t\t// throws error when not yet added to map as this center calculation requires projected coordinates\n\t\tif (!this._map) {\n\t\t\tthrow new Error('Must add layer to map before using getCenter()');\n\t\t}\n\n\t\tvar i, halfDist, segDist, dist, p1, p2, ratio,\n\t\t    points = this._rings[0],\n\t\t    len = points.length;\n\n\t\tif (!len) { return null; }\n\n\t\t// polyline centroid algorithm; only uses the first ring if there are multiple\n\n\t\tfor (i = 0, halfDist = 0; i < len - 1; i++) {\n\t\t\thalfDist += points[i].distanceTo(points[i + 1]) / 2;\n\t\t}\n\n\t\t// The line is so small in the current view that all points are on the same pixel.\n\t\tif (halfDist === 0) {\n\t\t\treturn this._map.layerPointToLatLng(points[0]);\n\t\t}\n\n\t\tfor (i = 0, dist = 0; i < len - 1; i++) {\n\t\t\tp1 = points[i];\n\t\t\tp2 = points[i + 1];\n\t\t\tsegDist = p1.distanceTo(p2);\n\t\t\tdist += segDist;\n\n\t\t\tif (dist > halfDist) {\n\t\t\t\tratio = (dist - halfDist) / segDist;\n\t\t\t\treturn this._map.layerPointToLatLng([\n\t\t\t\t\tp2.x - ratio * (p2.x - p1.x),\n\t\t\t\t\tp2.y - ratio * (p2.y - p1.y)\n\t\t\t\t]);\n\t\t\t}\n\t\t}\n\t},\n\n\t// @method getBounds(): LatLngBounds\n\t// Returns the `LatLngBounds` of the path.\n\tgetBounds: function () {\n\t\treturn this._bounds;\n\t},\n\n\t// @method addLatLng(latlng: LatLng, latlngs? LatLng[]): this\n\t// Adds a given point to the polyline. By default, adds to the first ring of\n\t// the polyline in case of a multi-polyline, but can be overridden by passing\n\t// a specific ring as a LatLng array (that you can earlier access with [`getLatLngs`](#polyline-getlatlngs)).\n\taddLatLng: function (latlng, latlngs) {\n\t\tlatlngs = latlngs || this._defaultShape();\n\t\tlatlng = toLatLng(latlng);\n\t\tlatlngs.push(latlng);\n\t\tthis._bounds.extend(latlng);\n\t\treturn this.redraw();\n\t},\n\n\t_setLatLngs: function (latlngs) {\n\t\tthis._bounds = new LatLngBounds();\n\t\tthis._latlngs = this._convertLatLngs(latlngs);\n\t},\n\n\t_defaultShape: function () {\n\t\treturn isFlat(this._latlngs) ? this._latlngs : this._latlngs[0];\n\t},\n\n\t// recursively convert latlngs input into actual LatLng instances; calculate bounds along the way\n\t_convertLatLngs: function (latlngs) {\n\t\tvar result = [],\n\t\t    flat = isFlat(latlngs);\n\n\t\tfor (var i = 0, len = latlngs.length; i < len; i++) {\n\t\t\tif (flat) {\n\t\t\t\tresult[i] = toLatLng(latlngs[i]);\n\t\t\t\tthis._bounds.extend(result[i]);\n\t\t\t} else {\n\t\t\t\tresult[i] = this._convertLatLngs(latlngs[i]);\n\t\t\t}\n\t\t}\n\n\t\treturn result;\n\t},\n\n\t_project: function () {\n\t\tvar pxBounds = new Bounds();\n\t\tthis._rings = [];\n\t\tthis._projectLatlngs(this._latlngs, this._rings, pxBounds);\n\n\t\tvar w = this._clickTolerance(),\n\t\t    p = new Point(w, w);\n\n\t\tif (this._bounds.isValid() && pxBounds.isValid()) {\n\t\t\tpxBounds.min._subtract(p);\n\t\t\tpxBounds.max._add(p);\n\t\t\tthis._pxBounds = pxBounds;\n\t\t}\n\t},\n\n\t// recursively turns latlngs into a set of rings with projected coordinates\n\t_projectLatlngs: function (latlngs, result, projectedBounds) {\n\t\tvar flat = latlngs[0] instanceof LatLng,\n\t\t    len = latlngs.length,\n\t\t    i, ring;\n\n\t\tif (flat) {\n\t\t\tring = [];\n\t\t\tfor (i = 0; i < len; i++) {\n\t\t\t\tring[i] = this._map.latLngToLayerPoint(latlngs[i]);\n\t\t\t\tprojectedBounds.extend(ring[i]);\n\t\t\t}\n\t\t\tresult.push(ring);\n\t\t} else {\n\t\t\tfor (i = 0; i < len; i++) {\n\t\t\t\tthis._projectLatlngs(latlngs[i], result, projectedBounds);\n\t\t\t}\n\t\t}\n\t},\n\n\t// clip polyline by renderer bounds so that we have less to render for performance\n\t_clipPoints: function () {\n\t\tvar bounds = this._renderer._bounds;\n\n\t\tthis._parts = [];\n\t\tif (!this._pxBounds || !this._pxBounds.intersects(bounds)) {\n\t\t\treturn;\n\t\t}\n\n\t\tif (this.options.noClip) {\n\t\t\tthis._parts = this._rings;\n\t\t\treturn;\n\t\t}\n\n\t\tvar parts = this._parts,\n\t\t    i, j, k, len, len2, segment, points;\n\n\t\tfor (i = 0, k = 0, len = this._rings.length; i < len; i++) {\n\t\t\tpoints = this._rings[i];\n\n\t\t\tfor (j = 0, len2 = points.length; j < len2 - 1; j++) {\n\t\t\t\tsegment = clipSegment(points[j], points[j + 1], bounds, j, true);\n\n\t\t\t\tif (!segment) { continue; }\n\n\t\t\t\tparts[k] = parts[k] || [];\n\t\t\t\tparts[k].push(segment[0]);\n\n\t\t\t\t// if segment goes out of screen, or it's the last one, it's the end of the line part\n\t\t\t\tif ((segment[1] !== points[j + 1]) || (j === len2 - 2)) {\n\t\t\t\t\tparts[k].push(segment[1]);\n\t\t\t\t\tk++;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t},\n\n\t// simplify each clipped part of the polyline for performance\n\t_simplifyPoints: function () {\n\t\tvar parts = this._parts,\n\t\t    tolerance = this.options.smoothFactor;\n\n\t\tfor (var i = 0, len = parts.length; i < len; i++) {\n\t\t\tparts[i] = simplify(parts[i], tolerance);\n\t\t}\n\t},\n\n\t_update: function () {\n\t\tif (!this._map) { return; }\n\n\t\tthis._clipPoints();\n\t\tthis._simplifyPoints();\n\t\tthis._updatePath();\n\t},\n\n\t_updatePath: function () {\n\t\tthis._renderer._updatePoly(this);\n\t},\n\n\t// Needed by the `Canvas` renderer for interactivity\n\t_containsPoint: function (p, closed) {\n\t\tvar i, j, k, len, len2, part,\n\t\t    w = this._clickTolerance();\n\n\t\tif (!this._pxBounds || !this._pxBounds.contains(p)) { return false; }\n\n\t\t// hit detection for polylines\n\t\tfor (i = 0, len = this._parts.length; i < len; i++) {\n\t\t\tpart = this._parts[i];\n\n\t\t\tfor (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {\n\t\t\t\tif (!closed && (j === 0)) { continue; }\n\n\t\t\t\tif (pointToSegmentDistance(p, part[k], part[j]) <= w) {\n\t\t\t\t\treturn true;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n});\n\n// @factory L.polyline(latlngs: LatLng[], options?: Polyline options)\n// Instantiates a polyline object given an array of geographical points and\n// optionally an options object. You can create a `Polyline` object with\n// multiple separate lines (`MultiPolyline`) by passing an array of arrays\n// of geographic points.\nfunction polyline(latlngs, options) {\n\treturn new Polyline(latlngs, options);\n}\n\n// Retrocompat. Allow plugins to support Leaflet versions before and after 1.1.\nPolyline._flat = _flat;\n\n/*\n * @class Polygon\n * @aka L.Polygon\n * @inherits Polyline\n *\n * A class for drawing polygon overlays on a map. Extends `Polyline`.\n *\n * Note that points you pass when creating a polygon shouldn't have an additional last point equal to the first one — it's better to filter out such points.\n *\n *\n * @example\n *\n * ```js\n * // create a red polygon from an array of LatLng points\n * var latlngs = [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]];\n *\n * var polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);\n *\n * // zoom the map to the polygon\n * map.fitBounds(polygon.getBounds());\n * ```\n *\n * You can also pass an array of arrays of latlngs, with the first array representing the outer shape and the other arrays representing holes in the outer shape:\n *\n * ```js\n * var latlngs = [\n *   [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring\n *   [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole\n * ];\n * ```\n *\n * Additionally, you can pass a multi-dimensional array to represent a MultiPolygon shape.\n *\n * ```js\n * var latlngs = [\n *   [ // first polygon\n *     [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring\n *     [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole\n *   ],\n *   [ // second polygon\n *     [[41, -111.03],[45, -111.04],[45, -104.05],[41, -104.05]]\n *   ]\n * ];\n * ```\n */\n\nvar Polygon = Polyline.extend({\n\n\toptions: {\n\t\tfill: true\n\t},\n\n\tisEmpty: function () {\n\t\treturn !this._latlngs.length || !this._latlngs[0].length;\n\t},\n\n\tgetCenter: function () {\n\t\t// throws error when not yet added to map as this center calculation requires projected coordinates\n\t\tif (!this._map) {\n\t\t\tthrow new Error('Must add layer to map before using getCenter()');\n\t\t}\n\n\t\tvar i, j, p1, p2, f, area, x, y, center,\n\t\t    points = this._rings[0],\n\t\t    len = points.length;\n\n\t\tif (!len) { return null; }\n\n\t\t// polygon centroid algorithm; only uses the first ring if there are multiple\n\n\t\tarea = x = y = 0;\n\n\t\tfor (i = 0, j = len - 1; i < len; j = i++) {\n\t\t\tp1 = points[i];\n\t\t\tp2 = points[j];\n\n\t\t\tf = p1.y * p2.x - p2.y * p1.x;\n\t\t\tx += (p1.x + p2.x) * f;\n\t\t\ty += (p1.y + p2.y) * f;\n\t\t\tarea += f * 3;\n\t\t}\n\n\t\tif (area === 0) {\n\t\t\t// Polygon is so small that all points are on same pixel.\n\t\t\tcenter = points[0];\n\t\t} else {\n\t\t\tcenter = [x / area, y / area];\n\t\t}\n\t\treturn this._map.layerPointToLatLng(center);\n\t},\n\n\t_convertLatLngs: function (latlngs) {\n\t\tvar result = Polyline.prototype._convertLatLngs.call(this, latlngs),\n\t\t    len = result.length;\n\n\t\t// remove last point if it equals first one\n\t\tif (len >= 2 && result[0] instanceof LatLng && result[0].equals(result[len - 1])) {\n\t\t\tresult.pop();\n\t\t}\n\t\treturn result;\n\t},\n\n\t_setLatLngs: function (latlngs) {\n\t\tPolyline.prototype._setLatLngs.call(this, latlngs);\n\t\tif (isFlat(this._latlngs)) {\n\t\t\tthis._latlngs = [this._latlngs];\n\t\t}\n\t},\n\n\t_defaultShape: function () {\n\t\treturn isFlat(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];\n\t},\n\n\t_clipPoints: function () {\n\t\t// polygons need a different clipping algorithm so we redefine that\n\n\t\tvar bounds = this._renderer._bounds,\n\t\t    w = this.options.weight,\n\t\t    p = new Point(w, w);\n\n\t\t// increase clip padding by stroke width to avoid stroke on clip edges\n\t\tbounds = new Bounds(bounds.min.subtract(p), bounds.max.add(p));\n\n\t\tthis._parts = [];\n\t\tif (!this._pxBounds || !this._pxBounds.intersects(bounds)) {\n\t\t\treturn;\n\t\t}\n\n\t\tif (this.options.noClip) {\n\t\t\tthis._parts = this._rings;\n\t\t\treturn;\n\t\t}\n\n\t\tfor (var i = 0, len = this._rings.length, clipped; i < len; i++) {\n\t\t\tclipped = clipPolygon(this._rings[i], bounds, true);\n\t\t\tif (clipped.length) {\n\t\t\t\tthis._parts.push(clipped);\n\t\t\t}\n\t\t}\n\t},\n\n\t_updatePath: function () {\n\t\tthis._renderer._updatePoly(this, true);\n\t},\n\n\t// Needed by the `Canvas` renderer for interactivity\n\t_containsPoint: function (p) {\n\t\tvar inside = false,\n\t\t    part, p1, p2, i, j, k, len, len2;\n\n\t\tif (!this._pxBounds || !this._pxBounds.contains(p)) { return false; }\n\n\t\t// ray casting algorithm for detecting if point is in polygon\n\t\tfor (i = 0, len = this._parts.length; i < len; i++) {\n\t\t\tpart = this._parts[i];\n\n\t\t\tfor (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {\n\t\t\t\tp1 = part[j];\n\t\t\t\tp2 = part[k];\n\n\t\t\t\tif (((p1.y > p.y) !== (p2.y > p.y)) && (p.x < (p2.x - p1.x) * (p.y - p1.y) / (p2.y - p1.y) + p1.x)) {\n\t\t\t\t\tinside = !inside;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t// also check if it's on polygon stroke\n\t\treturn inside || Polyline.prototype._containsPoint.call(this, p, true);\n\t}\n\n});\n\n\n// @factory L.polygon(latlngs: LatLng[], options?: Polyline options)\nfunction polygon(latlngs, options) {\n\treturn new Polygon(latlngs, options);\n}\n\n/*\r\n * @class GeoJSON\r\n * @aka L.GeoJSON\r\n * @inherits FeatureGroup\r\n *\r\n * Represents a GeoJSON object or an array of GeoJSON objects. Allows you to parse\r\n * GeoJSON data and display it on the map. Extends `FeatureGroup`.\r\n *\r\n * @example\r\n *\r\n * ```js\r\n * L.geoJSON(data, {\r\n * \tstyle: function (feature) {\r\n * \t\treturn {color: feature.properties.color};\r\n * \t}\r\n * }).bindPopup(function (layer) {\r\n * \treturn layer.feature.properties.description;\r\n * }).addTo(map);\r\n * ```\r\n */\r\n\r\nvar GeoJSON = FeatureGroup.extend({\r\n\r\n\t/* @section\r\n\t * @aka GeoJSON options\r\n\t *\r\n\t * @option pointToLayer: Function = *\r\n\t * A `Function` defining how GeoJSON points spawn Leaflet layers. It is internally\r\n\t * called when data is added, passing the GeoJSON point feature and its `LatLng`.\r\n\t * The default is to spawn a default `Marker`:\r\n\t * ```js\r\n\t * function(geoJsonPoint, latlng) {\r\n\t * \treturn L.marker(latlng);\r\n\t * }\r\n\t * ```\r\n\t *\r\n\t * @option style: Function = *\r\n\t * A `Function` defining the `Path options` for styling GeoJSON lines and polygons,\r\n\t * called internally when data is added.\r\n\t * The default value is to not override any defaults:\r\n\t * ```js\r\n\t * function (geoJsonFeature) {\r\n\t * \treturn {}\r\n\t * }\r\n\t * ```\r\n\t *\r\n\t * @option onEachFeature: Function = *\r\n\t * A `Function` that will be called once for each created `Feature`, after it has\r\n\t * been created and styled. Useful for attaching events and popups to features.\r\n\t * The default is to do nothing with the newly created layers:\r\n\t * ```js\r\n\t * function (feature, layer) {}\r\n\t * ```\r\n\t *\r\n\t * @option filter: Function = *\r\n\t * A `Function` that will be used to decide whether to include a feature or not.\r\n\t * The default is to include all features:\r\n\t * ```js\r\n\t * function (geoJsonFeature) {\r\n\t * \treturn true;\r\n\t * }\r\n\t * ```\r\n\t * Note: dynamically changing the `filter` option will have effect only on newly\r\n\t * added data. It will _not_ re-evaluate already included features.\r\n\t *\r\n\t * @option coordsToLatLng: Function = *\r\n\t * A `Function` that will be used for converting GeoJSON coordinates to `LatLng`s.\r\n\t * The default is the `coordsToLatLng` static method.\r\n\t */\r\n\r\n\tinitialize: function (geojson, options) {\r\n\t\tsetOptions(this, options);\r\n\r\n\t\tthis._layers = {};\r\n\r\n\t\tif (geojson) {\r\n\t\t\tthis.addData(geojson);\r\n\t\t}\r\n\t},\r\n\r\n\t// @method addData( <GeoJSON> data ): this\r\n\t// Adds a GeoJSON object to the layer.\r\n\taddData: function (geojson) {\r\n\t\tvar features = isArray(geojson) ? geojson : geojson.features,\r\n\t\t    i, len, feature;\r\n\r\n\t\tif (features) {\r\n\t\t\tfor (i = 0, len = features.length; i < len; i++) {\r\n\t\t\t\t// only add this if geometry or geometries are set and not null\r\n\t\t\t\tfeature = features[i];\r\n\t\t\t\tif (feature.geometries || feature.geometry || feature.features || feature.coordinates) {\r\n\t\t\t\t\tthis.addData(feature);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\treturn this;\r\n\t\t}\r\n\r\n\t\tvar options = this.options;\r\n\r\n\t\tif (options.filter && !options.filter(geojson)) { return this; }\r\n\r\n\t\tvar layer = geometryToLayer(geojson, options);\r\n\t\tif (!layer) {\r\n\t\t\treturn this;\r\n\t\t}\r\n\t\tlayer.feature = asFeature(geojson);\r\n\r\n\t\tlayer.defaultOptions = layer.options;\r\n\t\tthis.resetStyle(layer);\r\n\r\n\t\tif (options.onEachFeature) {\r\n\t\t\toptions.onEachFeature(geojson, layer);\r\n\t\t}\r\n\r\n\t\treturn this.addLayer(layer);\r\n\t},\r\n\r\n\t// @method resetStyle( <Path> layer ): this\r\n\t// Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.\r\n\tresetStyle: function (layer) {\r\n\t\t// reset any custom styles\r\n\t\tlayer.options = extend({}, layer.defaultOptions);\r\n\t\tthis._setLayerStyle(layer, this.options.style);\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// @method setStyle( <Function> style ): this\r\n\t// Changes styles of GeoJSON vector layers with the given style function.\r\n\tsetStyle: function (style) {\r\n\t\treturn this.eachLayer(function (layer) {\r\n\t\t\tthis._setLayerStyle(layer, style);\r\n\t\t}, this);\r\n\t},\r\n\r\n\t_setLayerStyle: function (layer, style) {\r\n\t\tif (typeof style === 'function') {\r\n\t\t\tstyle = style(layer.feature);\r\n\t\t}\r\n\t\tif (layer.setStyle) {\r\n\t\t\tlayer.setStyle(style);\r\n\t\t}\r\n\t}\r\n});\r\n\r\n// @section\r\n// There are several static functions which can be called without instantiating L.GeoJSON:\r\n\r\n// @function geometryToLayer(featureData: Object, options?: GeoJSON options): Layer\r\n// Creates a `Layer` from a given GeoJSON feature. Can use a custom\r\n// [`pointToLayer`](#geojson-pointtolayer) and/or [`coordsToLatLng`](#geojson-coordstolatlng)\r\n// functions if provided as options.\r\nfunction geometryToLayer(geojson, options) {\r\n\r\n\tvar geometry = geojson.type === 'Feature' ? geojson.geometry : geojson,\r\n\t    coords = geometry ? geometry.coordinates : null,\r\n\t    layers = [],\r\n\t    pointToLayer = options && options.pointToLayer,\r\n\t    _coordsToLatLng = options && options.coordsToLatLng || coordsToLatLng,\r\n\t    latlng, latlngs, i, len;\r\n\r\n\tif (!coords && !geometry) {\r\n\t\treturn null;\r\n\t}\r\n\r\n\tswitch (geometry.type) {\r\n\tcase 'Point':\r\n\t\tlatlng = _coordsToLatLng(coords);\r\n\t\treturn pointToLayer ? pointToLayer(geojson, latlng) : new Marker(latlng);\r\n\r\n\tcase 'MultiPoint':\r\n\t\tfor (i = 0, len = coords.length; i < len; i++) {\r\n\t\t\tlatlng = _coordsToLatLng(coords[i]);\r\n\t\t\tlayers.push(pointToLayer ? pointToLayer(geojson, latlng) : new Marker(latlng));\r\n\t\t}\r\n\t\treturn new FeatureGroup(layers);\r\n\r\n\tcase 'LineString':\r\n\tcase 'MultiLineString':\r\n\t\tlatlngs = coordsToLatLngs(coords, geometry.type === 'LineString' ? 0 : 1, _coordsToLatLng);\r\n\t\treturn new Polyline(latlngs, options);\r\n\r\n\tcase 'Polygon':\r\n\tcase 'MultiPolygon':\r\n\t\tlatlngs = coordsToLatLngs(coords, geometry.type === 'Polygon' ? 1 : 2, _coordsToLatLng);\r\n\t\treturn new Polygon(latlngs, options);\r\n\r\n\tcase 'GeometryCollection':\r\n\t\tfor (i = 0, len = geometry.geometries.length; i < len; i++) {\r\n\t\t\tvar layer = geometryToLayer({\r\n\t\t\t\tgeometry: geometry.geometries[i],\r\n\t\t\t\ttype: 'Feature',\r\n\t\t\t\tproperties: geojson.properties\r\n\t\t\t}, options);\r\n\r\n\t\t\tif (layer) {\r\n\t\t\t\tlayers.push(layer);\r\n\t\t\t}\r\n\t\t}\r\n\t\treturn new FeatureGroup(layers);\r\n\r\n\tdefault:\r\n\t\tthrow new Error('Invalid GeoJSON object.');\r\n\t}\r\n}\r\n\r\n// @function coordsToLatLng(coords: Array): LatLng\r\n// Creates a `LatLng` object from an array of 2 numbers (longitude, latitude)\r\n// or 3 numbers (longitude, latitude, altitude) used in GeoJSON for points.\r\nfunction coordsToLatLng(coords) {\r\n\treturn new LatLng(coords[1], coords[0], coords[2]);\r\n}\r\n\r\n// @function coordsToLatLngs(coords: Array, levelsDeep?: Number, coordsToLatLng?: Function): Array\r\n// Creates a multidimensional array of `LatLng`s from a GeoJSON coordinates array.\r\n// `levelsDeep` specifies the nesting level (0 is for an array of points, 1 for an array of arrays of points, etc., 0 by default).\r\n// Can use a custom [`coordsToLatLng`](#geojson-coordstolatlng) function.\r\nfunction coordsToLatLngs(coords, levelsDeep, _coordsToLatLng) {\r\n\tvar latlngs = [];\r\n\r\n\tfor (var i = 0, len = coords.length, latlng; i < len; i++) {\r\n\t\tlatlng = levelsDeep ?\r\n\t\t\tcoordsToLatLngs(coords[i], levelsDeep - 1, _coordsToLatLng) :\r\n\t\t\t(_coordsToLatLng || coordsToLatLng)(coords[i]);\r\n\r\n\t\tlatlngs.push(latlng);\r\n\t}\r\n\r\n\treturn latlngs;\r\n}\r\n\r\n// @function latLngToCoords(latlng: LatLng, precision?: Number): Array\r\n// Reverse of [`coordsToLatLng`](#geojson-coordstolatlng)\r\nfunction latLngToCoords(latlng, precision) {\r\n\tprecision = typeof precision === 'number' ? precision : 6;\r\n\treturn latlng.alt !== undefined ?\r\n\t\t[formatNum(latlng.lng, precision), formatNum(latlng.lat, precision), formatNum(latlng.alt, precision)] :\r\n\t\t[formatNum(latlng.lng, precision), formatNum(latlng.lat, precision)];\r\n}\r\n\r\n// @function latLngsToCoords(latlngs: Array, levelsDeep?: Number, closed?: Boolean): Array\r\n// Reverse of [`coordsToLatLngs`](#geojson-coordstolatlngs)\r\n// `closed` determines whether the first point should be appended to the end of the array to close the feature, only used when `levelsDeep` is 0. False by default.\r\nfunction latLngsToCoords(latlngs, levelsDeep, closed, precision) {\r\n\tvar coords = [];\r\n\r\n\tfor (var i = 0, len = latlngs.length; i < len; i++) {\r\n\t\tcoords.push(levelsDeep ?\r\n\t\t\tlatLngsToCoords(latlngs[i], levelsDeep - 1, closed, precision) :\r\n\t\t\tlatLngToCoords(latlngs[i], precision));\r\n\t}\r\n\r\n\tif (!levelsDeep && closed) {\r\n\t\tcoords.push(coords[0]);\r\n\t}\r\n\r\n\treturn coords;\r\n}\r\n\r\nfunction getFeature(layer, newGeometry) {\r\n\treturn layer.feature ?\r\n\t\textend({}, layer.feature, {geometry: newGeometry}) :\r\n\t\tasFeature(newGeometry);\r\n}\r\n\r\n// @function asFeature(geojson: Object): Object\r\n// Normalize GeoJSON geometries/features into GeoJSON features.\r\nfunction asFeature(geojson) {\r\n\tif (geojson.type === 'Feature' || geojson.type === 'FeatureCollection') {\r\n\t\treturn geojson;\r\n\t}\r\n\r\n\treturn {\r\n\t\ttype: 'Feature',\r\n\t\tproperties: {},\r\n\t\tgeometry: geojson\r\n\t};\r\n}\r\n\r\nvar PointToGeoJSON = {\r\n\ttoGeoJSON: function (precision) {\r\n\t\treturn getFeature(this, {\r\n\t\t\ttype: 'Point',\r\n\t\t\tcoordinates: latLngToCoords(this.getLatLng(), precision)\r\n\t\t});\r\n\t}\r\n};\r\n\r\n// @namespace Marker\r\n// @method toGeoJSON(): Object\r\n// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the marker (as a GeoJSON `Point` Feature).\r\nMarker.include(PointToGeoJSON);\r\n\r\n// @namespace CircleMarker\r\n// @method toGeoJSON(): Object\r\n// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the circle marker (as a GeoJSON `Point` Feature).\r\nCircle.include(PointToGeoJSON);\r\nCircleMarker.include(PointToGeoJSON);\r\n\r\n\r\n// @namespace Polyline\r\n// @method toGeoJSON(): Object\r\n// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the polyline (as a GeoJSON `LineString` or `MultiLineString` Feature).\r\nPolyline.include({\r\n\ttoGeoJSON: function (precision) {\r\n\t\tvar multi = !isFlat(this._latlngs);\r\n\r\n\t\tvar coords = latLngsToCoords(this._latlngs, multi ? 1 : 0, false, precision);\r\n\r\n\t\treturn getFeature(this, {\r\n\t\t\ttype: (multi ? 'Multi' : '') + 'LineString',\r\n\t\t\tcoordinates: coords\r\n\t\t});\r\n\t}\r\n});\r\n\r\n// @namespace Polygon\r\n// @method toGeoJSON(): Object\r\n// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the polygon (as a GeoJSON `Polygon` or `MultiPolygon` Feature).\r\nPolygon.include({\r\n\ttoGeoJSON: function (precision) {\r\n\t\tvar holes = !isFlat(this._latlngs),\r\n\t\t    multi = holes && !isFlat(this._latlngs[0]);\r\n\r\n\t\tvar coords = latLngsToCoords(this._latlngs, multi ? 2 : holes ? 1 : 0, true, precision);\r\n\r\n\t\tif (!holes) {\r\n\t\t\tcoords = [coords];\r\n\t\t}\r\n\r\n\t\treturn getFeature(this, {\r\n\t\t\ttype: (multi ? 'Multi' : '') + 'Polygon',\r\n\t\t\tcoordinates: coords\r\n\t\t});\r\n\t}\r\n});\r\n\r\n\r\n// @namespace LayerGroup\r\nLayerGroup.include({\r\n\ttoMultiPoint: function (precision) {\r\n\t\tvar coords = [];\r\n\r\n\t\tthis.eachLayer(function (layer) {\r\n\t\t\tcoords.push(layer.toGeoJSON(precision).geometry.coordinates);\r\n\t\t});\r\n\r\n\t\treturn getFeature(this, {\r\n\t\t\ttype: 'MultiPoint',\r\n\t\t\tcoordinates: coords\r\n\t\t});\r\n\t},\r\n\r\n\t// @method toGeoJSON(): Object\r\n\t// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `FeatureCollection`, `GeometryCollection`, or `MultiPoint`).\r\n\ttoGeoJSON: function (precision) {\r\n\r\n\t\tvar type = this.feature && this.feature.geometry && this.feature.geometry.type;\r\n\r\n\t\tif (type === 'MultiPoint') {\r\n\t\t\treturn this.toMultiPoint(precision);\r\n\t\t}\r\n\r\n\t\tvar isGeometryCollection = type === 'GeometryCollection',\r\n\t\t    jsons = [];\r\n\r\n\t\tthis.eachLayer(function (layer) {\r\n\t\t\tif (layer.toGeoJSON) {\r\n\t\t\t\tvar json = layer.toGeoJSON(precision);\r\n\t\t\t\tif (isGeometryCollection) {\r\n\t\t\t\t\tjsons.push(json.geometry);\r\n\t\t\t\t} else {\r\n\t\t\t\t\tvar feature = asFeature(json);\r\n\t\t\t\t\t// Squash nested feature collections\r\n\t\t\t\t\tif (feature.type === 'FeatureCollection') {\r\n\t\t\t\t\t\tjsons.push.apply(jsons, feature.features);\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\tjsons.push(feature);\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t});\r\n\r\n\t\tif (isGeometryCollection) {\r\n\t\t\treturn getFeature(this, {\r\n\t\t\t\tgeometries: jsons,\r\n\t\t\t\ttype: 'GeometryCollection'\r\n\t\t\t});\r\n\t\t}\r\n\r\n\t\treturn {\r\n\t\t\ttype: 'FeatureCollection',\r\n\t\t\tfeatures: jsons\r\n\t\t};\r\n\t}\r\n});\r\n\r\n// @namespace GeoJSON\r\n// @factory L.geoJSON(geojson?: Object, options?: GeoJSON options)\r\n// Creates a GeoJSON layer. Optionally accepts an object in\r\n// [GeoJSON format](https://tools.ietf.org/html/rfc7946) to display on the map\r\n// (you can alternatively add it later with `addData` method) and an `options` object.\r\nfunction geoJSON(geojson, options) {\r\n\treturn new GeoJSON(geojson, options);\r\n}\r\n\r\n// Backward compatibility.\r\nvar geoJson = geoJSON;\n\n/*\r\n * @class ImageOverlay\r\n * @aka L.ImageOverlay\r\n * @inherits Interactive layer\r\n *\r\n * Used to load and display a single image over specific bounds of the map. Extends `Layer`.\r\n *\r\n * @example\r\n *\r\n * ```js\r\n * var imageUrl = 'http://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',\r\n * \timageBounds = [[40.712216, -74.22655], [40.773941, -74.12544]];\r\n * L.imageOverlay(imageUrl, imageBounds).addTo(map);\r\n * ```\r\n */\r\n\r\nvar ImageOverlay = Layer.extend({\r\n\r\n\t// @section\r\n\t// @aka ImageOverlay options\r\n\toptions: {\r\n\t\t// @option opacity: Number = 1.0\r\n\t\t// The opacity of the image overlay.\r\n\t\topacity: 1,\r\n\r\n\t\t// @option alt: String = ''\r\n\t\t// Text for the `alt` attribute of the image (useful for accessibility).\r\n\t\talt: '',\r\n\r\n\t\t// @option interactive: Boolean = false\r\n\t\t// If `true`, the image overlay will emit [mouse events](#interactive-layer) when clicked or hovered.\r\n\t\tinteractive: false,\r\n\r\n\t\t// @option crossOrigin: Boolean|String = false\r\n\t\t// Whether the crossOrigin attribute will be added to the image.\r\n\t\t// If a String is provided, the image will have its crossOrigin attribute set to the String provided. This is needed if you want to access image pixel data.\r\n\t\t// Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.\r\n\t\tcrossOrigin: false,\r\n\r\n\t\t// @option errorOverlayUrl: String = ''\r\n\t\t// URL to the overlay image to show in place of the overlay that failed to load.\r\n\t\terrorOverlayUrl: '',\r\n\r\n\t\t// @option zIndex: Number = 1\r\n\t\t// The explicit [zIndex](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index) of the overlay layer.\r\n\t\tzIndex: 1,\r\n\r\n\t\t// @option className: String = ''\r\n\t\t// A custom class name to assign to the image. Empty by default.\r\n\t\tclassName: ''\r\n\t},\r\n\r\n\tinitialize: function (url, bounds, options) { // (String, LatLngBounds, Object)\r\n\t\tthis._url = url;\r\n\t\tthis._bounds = toLatLngBounds(bounds);\r\n\r\n\t\tsetOptions(this, options);\r\n\t},\r\n\r\n\tonAdd: function () {\r\n\t\tif (!this._image) {\r\n\t\t\tthis._initImage();\r\n\r\n\t\t\tif (this.options.opacity < 1) {\r\n\t\t\t\tthis._updateOpacity();\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tif (this.options.interactive) {\r\n\t\t\taddClass(this._image, 'leaflet-interactive');\r\n\t\t\tthis.addInteractiveTarget(this._image);\r\n\t\t}\r\n\r\n\t\tthis.getPane().appendChild(this._image);\r\n\t\tthis._reset();\r\n\t},\r\n\r\n\tonRemove: function () {\r\n\t\tremove(this._image);\r\n\t\tif (this.options.interactive) {\r\n\t\t\tthis.removeInteractiveTarget(this._image);\r\n\t\t}\r\n\t},\r\n\r\n\t// @method setOpacity(opacity: Number): this\r\n\t// Sets the opacity of the overlay.\r\n\tsetOpacity: function (opacity) {\r\n\t\tthis.options.opacity = opacity;\r\n\r\n\t\tif (this._image) {\r\n\t\t\tthis._updateOpacity();\r\n\t\t}\r\n\t\treturn this;\r\n\t},\r\n\r\n\tsetStyle: function (styleOpts) {\r\n\t\tif (styleOpts.opacity) {\r\n\t\t\tthis.setOpacity(styleOpts.opacity);\r\n\t\t}\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// @method bringToFront(): this\r\n\t// Brings the layer to the top of all overlays.\r\n\tbringToFront: function () {\r\n\t\tif (this._map) {\r\n\t\t\ttoFront(this._image);\r\n\t\t}\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// @method bringToBack(): this\r\n\t// Brings the layer to the bottom of all overlays.\r\n\tbringToBack: function () {\r\n\t\tif (this._map) {\r\n\t\t\ttoBack(this._image);\r\n\t\t}\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// @method setUrl(url: String): this\r\n\t// Changes the URL of the image.\r\n\tsetUrl: function (url) {\r\n\t\tthis._url = url;\r\n\r\n\t\tif (this._image) {\r\n\t\t\tthis._image.src = url;\r\n\t\t}\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// @method setBounds(bounds: LatLngBounds): this\r\n\t// Update the bounds that this ImageOverlay covers\r\n\tsetBounds: function (bounds) {\r\n\t\tthis._bounds = toLatLngBounds(bounds);\r\n\r\n\t\tif (this._map) {\r\n\t\t\tthis._reset();\r\n\t\t}\r\n\t\treturn this;\r\n\t},\r\n\r\n\tgetEvents: function () {\r\n\t\tvar events = {\r\n\t\t\tzoom: this._reset,\r\n\t\t\tviewreset: this._reset\r\n\t\t};\r\n\r\n\t\tif (this._zoomAnimated) {\r\n\t\t\tevents.zoomanim = this._animateZoom;\r\n\t\t}\r\n\r\n\t\treturn events;\r\n\t},\r\n\r\n\t// @method setZIndex(value: Number): this\r\n\t// Changes the [zIndex](#imageoverlay-zindex) of the image overlay.\r\n\tsetZIndex: function (value) {\r\n\t\tthis.options.zIndex = value;\r\n\t\tthis._updateZIndex();\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// @method getBounds(): LatLngBounds\r\n\t// Get the bounds that this ImageOverlay covers\r\n\tgetBounds: function () {\r\n\t\treturn this._bounds;\r\n\t},\r\n\r\n\t// @method getElement(): HTMLElement\r\n\t// Returns the instance of [`HTMLImageElement`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement)\r\n\t// used by this overlay.\r\n\tgetElement: function () {\r\n\t\treturn this._image;\r\n\t},\r\n\r\n\t_initImage: function () {\r\n\t\tvar wasElementSupplied = this._url.tagName === 'IMG';\r\n\t\tvar img = this._image = wasElementSupplied ? this._url : create$1('img');\r\n\r\n\t\taddClass(img, 'leaflet-image-layer');\r\n\t\tif (this._zoomAnimated) { addClass(img, 'leaflet-zoom-animated'); }\r\n\t\tif (this.options.className) { addClass(img, this.options.className); }\r\n\r\n\t\timg.onselectstart = falseFn;\r\n\t\timg.onmousemove = falseFn;\r\n\r\n\t\t// @event load: Event\r\n\t\t// Fired when the ImageOverlay layer has loaded its image\r\n\t\timg.onload = bind(this.fire, this, 'load');\r\n\t\timg.onerror = bind(this._overlayOnError, this, 'error');\r\n\r\n\t\tif (this.options.crossOrigin || this.options.crossOrigin === '') {\r\n\t\t\timg.crossOrigin = this.options.crossOrigin === true ? '' : this.options.crossOrigin;\r\n\t\t}\r\n\r\n\t\tif (this.options.zIndex) {\r\n\t\t\tthis._updateZIndex();\r\n\t\t}\r\n\r\n\t\tif (wasElementSupplied) {\r\n\t\t\tthis._url = img.src;\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\timg.src = this._url;\r\n\t\timg.alt = this.options.alt;\r\n\t},\r\n\r\n\t_animateZoom: function (e) {\r\n\t\tvar scale = this._map.getZoomScale(e.zoom),\r\n\t\t    offset = this._map._latLngBoundsToNewLayerBounds(this._bounds, e.zoom, e.center).min;\r\n\r\n\t\tsetTransform(this._image, offset, scale);\r\n\t},\r\n\r\n\t_reset: function () {\r\n\t\tvar image = this._image,\r\n\t\t    bounds = new Bounds(\r\n\t\t        this._map.latLngToLayerPoint(this._bounds.getNorthWest()),\r\n\t\t        this._map.latLngToLayerPoint(this._bounds.getSouthEast())),\r\n\t\t    size = bounds.getSize();\r\n\r\n\t\tsetPosition(image, bounds.min);\r\n\r\n\t\timage.style.width  = size.x + 'px';\r\n\t\timage.style.height = size.y + 'px';\r\n\t},\r\n\r\n\t_updateOpacity: function () {\r\n\t\tsetOpacity(this._image, this.options.opacity);\r\n\t},\r\n\r\n\t_updateZIndex: function () {\r\n\t\tif (this._image && this.options.zIndex !== undefined && this.options.zIndex !== null) {\r\n\t\t\tthis._image.style.zIndex = this.options.zIndex;\r\n\t\t}\r\n\t},\r\n\r\n\t_overlayOnError: function () {\r\n\t\t// @event error: Event\r\n\t\t// Fired when the ImageOverlay layer fails to load its image\r\n\t\tthis.fire('error');\r\n\r\n\t\tvar errorUrl = this.options.errorOverlayUrl;\r\n\t\tif (errorUrl && this._url !== errorUrl) {\r\n\t\t\tthis._url = errorUrl;\r\n\t\t\tthis._image.src = errorUrl;\r\n\t\t}\r\n\t}\r\n});\r\n\r\n// @factory L.imageOverlay(imageUrl: String, bounds: LatLngBounds, options?: ImageOverlay options)\r\n// Instantiates an image overlay object given the URL of the image and the\r\n// geographical bounds it is tied to.\r\nvar imageOverlay = function (url, bounds, options) {\r\n\treturn new ImageOverlay(url, bounds, options);\r\n};\n\n/*\r\n * @class VideoOverlay\r\n * @aka L.VideoOverlay\r\n * @inherits ImageOverlay\r\n *\r\n * Used to load and display a video player over specific bounds of the map. Extends `ImageOverlay`.\r\n *\r\n * A video overlay uses the [`<video>`](https://developer.mozilla.org/docs/Web/HTML/Element/video)\r\n * HTML5 element.\r\n *\r\n * @example\r\n *\r\n * ```js\r\n * var videoUrl = 'https://www.mapbox.com/bites/00188/patricia_nasa.webm',\r\n * \tvideoBounds = [[ 32, -130], [ 13, -100]];\r\n * L.videoOverlay(videoUrl, videoBounds ).addTo(map);\r\n * ```\r\n */\r\n\r\nvar VideoOverlay = ImageOverlay.extend({\r\n\r\n\t// @section\r\n\t// @aka VideoOverlay options\r\n\toptions: {\r\n\t\t// @option autoplay: Boolean = true\r\n\t\t// Whether the video starts playing automatically when loaded.\r\n\t\tautoplay: true,\r\n\r\n\t\t// @option loop: Boolean = true\r\n\t\t// Whether the video will loop back to the beginning when played.\r\n\t\tloop: true\r\n\t},\r\n\r\n\t_initImage: function () {\r\n\t\tvar wasElementSupplied = this._url.tagName === 'VIDEO';\r\n\t\tvar vid = this._image = wasElementSupplied ? this._url : create$1('video');\r\n\r\n\t\taddClass(vid, 'leaflet-image-layer');\r\n\t\tif (this._zoomAnimated) { addClass(vid, 'leaflet-zoom-animated'); }\r\n\r\n\t\tvid.onselectstart = falseFn;\r\n\t\tvid.onmousemove = falseFn;\r\n\r\n\t\t// @event load: Event\r\n\t\t// Fired when the video has finished loading the first frame\r\n\t\tvid.onloadeddata = bind(this.fire, this, 'load');\r\n\r\n\t\tif (wasElementSupplied) {\r\n\t\t\tvar sourceElements = vid.getElementsByTagName('source');\r\n\t\t\tvar sources = [];\r\n\t\t\tfor (var j = 0; j < sourceElements.length; j++) {\r\n\t\t\t\tsources.push(sourceElements[j].src);\r\n\t\t\t}\r\n\r\n\t\t\tthis._url = (sourceElements.length > 0) ? sources : [vid.src];\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\tif (!isArray(this._url)) { this._url = [this._url]; }\r\n\r\n\t\tvid.autoplay = !!this.options.autoplay;\r\n\t\tvid.loop = !!this.options.loop;\r\n\t\tfor (var i = 0; i < this._url.length; i++) {\r\n\t\t\tvar source = create$1('source');\r\n\t\t\tsource.src = this._url[i];\r\n\t\t\tvid.appendChild(source);\r\n\t\t}\r\n\t}\r\n\r\n\t// @method getElement(): HTMLVideoElement\r\n\t// Returns the instance of [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)\r\n\t// used by this overlay.\r\n});\r\n\r\n\r\n// @factory L.videoOverlay(video: String|Array|HTMLVideoElement, bounds: LatLngBounds, options?: VideoOverlay options)\r\n// Instantiates an image overlay object given the URL of the video (or array of URLs, or even a video element) and the\r\n// geographical bounds it is tied to.\r\n\r\nfunction videoOverlay(video, bounds, options) {\r\n\treturn new VideoOverlay(video, bounds, options);\r\n}\n\n/*\r\n * @class DivOverlay\r\n * @inherits Layer\r\n * @aka L.DivOverlay\r\n * Base model for L.Popup and L.Tooltip. Inherit from it for custom popup like plugins.\r\n */\r\n\r\n// @namespace DivOverlay\r\nvar DivOverlay = Layer.extend({\r\n\r\n\t// @section\r\n\t// @aka DivOverlay options\r\n\toptions: {\r\n\t\t// @option offset: Point = Point(0, 7)\r\n\t\t// The offset of the popup position. Useful to control the anchor\r\n\t\t// of the popup when opening it on some overlays.\r\n\t\toffset: [0, 7],\r\n\r\n\t\t// @option className: String = ''\r\n\t\t// A custom CSS class name to assign to the popup.\r\n\t\tclassName: '',\r\n\r\n\t\t// @option pane: String = 'popupPane'\r\n\t\t// `Map pane` where the popup will be added.\r\n\t\tpane: 'popupPane'\r\n\t},\r\n\r\n\tinitialize: function (options, source) {\r\n\t\tsetOptions(this, options);\r\n\r\n\t\tthis._source = source;\r\n\t},\r\n\r\n\tonAdd: function (map) {\r\n\t\tthis._zoomAnimated = map._zoomAnimated;\r\n\r\n\t\tif (!this._container) {\r\n\t\t\tthis._initLayout();\r\n\t\t}\r\n\r\n\t\tif (map._fadeAnimated) {\r\n\t\t\tsetOpacity(this._container, 0);\r\n\t\t}\r\n\r\n\t\tclearTimeout(this._removeTimeout);\r\n\t\tthis.getPane().appendChild(this._container);\r\n\t\tthis.update();\r\n\r\n\t\tif (map._fadeAnimated) {\r\n\t\t\tsetOpacity(this._container, 1);\r\n\t\t}\r\n\r\n\t\tthis.bringToFront();\r\n\t},\r\n\r\n\tonRemove: function (map) {\r\n\t\tif (map._fadeAnimated) {\r\n\t\t\tsetOpacity(this._container, 0);\r\n\t\t\tthis._removeTimeout = setTimeout(bind(remove, undefined, this._container), 200);\r\n\t\t} else {\r\n\t\t\tremove(this._container);\r\n\t\t}\r\n\t},\r\n\r\n\t// @namespace Popup\r\n\t// @method getLatLng: LatLng\r\n\t// Returns the geographical point of popup.\r\n\tgetLatLng: function () {\r\n\t\treturn this._latlng;\r\n\t},\r\n\r\n\t// @method setLatLng(latlng: LatLng): this\r\n\t// Sets the geographical point where the popup will open.\r\n\tsetLatLng: function (latlng) {\r\n\t\tthis._latlng = toLatLng(latlng);\r\n\t\tif (this._map) {\r\n\t\t\tthis._updatePosition();\r\n\t\t\tthis._adjustPan();\r\n\t\t}\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// @method getContent: String|HTMLElement\r\n\t// Returns the content of the popup.\r\n\tgetContent: function () {\r\n\t\treturn this._content;\r\n\t},\r\n\r\n\t// @method setContent(htmlContent: String|HTMLElement|Function): this\r\n\t// Sets the HTML content of the popup. If a function is passed the source layer will be passed to the function. The function should return a `String` or `HTMLElement` to be used in the popup.\r\n\tsetContent: function (content) {\r\n\t\tthis._content = content;\r\n\t\tthis.update();\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// @method getElement: String|HTMLElement\r\n\t// Alias for [getContent()](#popup-getcontent)\r\n\tgetElement: function () {\r\n\t\treturn this._container;\r\n\t},\r\n\r\n\t// @method update: null\r\n\t// Updates the popup content, layout and position. Useful for updating the popup after something inside changed, e.g. image loaded.\r\n\tupdate: function () {\r\n\t\tif (!this._map) { return; }\r\n\r\n\t\tthis._container.style.visibility = 'hidden';\r\n\r\n\t\tthis._updateContent();\r\n\t\tthis._updateLayout();\r\n\t\tthis._updatePosition();\r\n\r\n\t\tthis._container.style.visibility = '';\r\n\r\n\t\tthis._adjustPan();\r\n\t},\r\n\r\n\tgetEvents: function () {\r\n\t\tvar events = {\r\n\t\t\tzoom: this._updatePosition,\r\n\t\t\tviewreset: this._updatePosition\r\n\t\t};\r\n\r\n\t\tif (this._zoomAnimated) {\r\n\t\t\tevents.zoomanim = this._animateZoom;\r\n\t\t}\r\n\t\treturn events;\r\n\t},\r\n\r\n\t// @method isOpen: Boolean\r\n\t// Returns `true` when the popup is visible on the map.\r\n\tisOpen: function () {\r\n\t\treturn !!this._map && this._map.hasLayer(this);\r\n\t},\r\n\r\n\t// @method bringToFront: this\r\n\t// Brings this popup in front of other popups (in the same map pane).\r\n\tbringToFront: function () {\r\n\t\tif (this._map) {\r\n\t\t\ttoFront(this._container);\r\n\t\t}\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// @method bringToBack: this\r\n\t// Brings this popup to the back of other popups (in the same map pane).\r\n\tbringToBack: function () {\r\n\t\tif (this._map) {\r\n\t\t\ttoBack(this._container);\r\n\t\t}\r\n\t\treturn this;\r\n\t},\r\n\r\n\t_updateContent: function () {\r\n\t\tif (!this._content) { return; }\r\n\r\n\t\tvar node = this._contentNode;\r\n\t\tvar content = (typeof this._content === 'function') ? this._content(this._source || this) : this._content;\r\n\r\n\t\tif (typeof content === 'string') {\r\n\t\t\tnode.innerHTML = content;\r\n\t\t} else {\r\n\t\t\twhile (node.hasChildNodes()) {\r\n\t\t\t\tnode.removeChild(node.firstChild);\r\n\t\t\t}\r\n\t\t\tnode.appendChild(content);\r\n\t\t}\r\n\t\tthis.fire('contentupdate');\r\n\t},\r\n\r\n\t_updatePosition: function () {\r\n\t\tif (!this._map) { return; }\r\n\r\n\t\tvar pos = this._map.latLngToLayerPoint(this._latlng),\r\n\t\t    offset = toPoint(this.options.offset),\r\n\t\t    anchor = this._getAnchor();\r\n\r\n\t\tif (this._zoomAnimated) {\r\n\t\t\tsetPosition(this._container, pos.add(anchor));\r\n\t\t} else {\r\n\t\t\toffset = offset.add(pos).add(anchor);\r\n\t\t}\r\n\r\n\t\tvar bottom = this._containerBottom = -offset.y,\r\n\t\t    left = this._containerLeft = -Math.round(this._containerWidth / 2) + offset.x;\r\n\r\n\t\t// bottom position the popup in case the height of the popup changes (images loading etc)\r\n\t\tthis._container.style.bottom = bottom + 'px';\r\n\t\tthis._container.style.left = left + 'px';\r\n\t},\r\n\r\n\t_getAnchor: function () {\r\n\t\treturn [0, 0];\r\n\t}\r\n\r\n});\n\n/*\r\n * @class Popup\r\n * @inherits DivOverlay\r\n * @aka L.Popup\r\n * Used to open popups in certain places of the map. Use [Map.openPopup](#map-openpopup) to\r\n * open popups while making sure that only one popup is open at one time\r\n * (recommended for usability), or use [Map.addLayer](#map-addlayer) to open as many as you want.\r\n *\r\n * @example\r\n *\r\n * If you want to just bind a popup to marker click and then open it, it's really easy:\r\n *\r\n * ```js\r\n * marker.bindPopup(popupContent).openPopup();\r\n * ```\r\n * Path overlays like polylines also have a `bindPopup` method.\r\n * Here's a more complicated way to open a popup on a map:\r\n *\r\n * ```js\r\n * var popup = L.popup()\r\n * \t.setLatLng(latlng)\r\n * \t.setContent('<p>Hello world!<br />This is a nice popup.</p>')\r\n * \t.openOn(map);\r\n * ```\r\n */\r\n\r\n\r\n// @namespace Popup\r\nvar Popup = DivOverlay.extend({\r\n\r\n\t// @section\r\n\t// @aka Popup options\r\n\toptions: {\r\n\t\t// @option maxWidth: Number = 300\r\n\t\t// Max width of the popup, in pixels.\r\n\t\tmaxWidth: 300,\r\n\r\n\t\t// @option minWidth: Number = 50\r\n\t\t// Min width of the popup, in pixels.\r\n\t\tminWidth: 50,\r\n\r\n\t\t// @option maxHeight: Number = null\r\n\t\t// If set, creates a scrollable container of the given height\r\n\t\t// inside a popup if its content exceeds it.\r\n\t\tmaxHeight: null,\r\n\r\n\t\t// @option autoPan: Boolean = true\r\n\t\t// Set it to `false` if you don't want the map to do panning animation\r\n\t\t// to fit the opened popup.\r\n\t\tautoPan: true,\r\n\r\n\t\t// @option autoPanPaddingTopLeft: Point = null\r\n\t\t// The margin between the popup and the top left corner of the map\r\n\t\t// view after autopanning was performed.\r\n\t\tautoPanPaddingTopLeft: null,\r\n\r\n\t\t// @option autoPanPaddingBottomRight: Point = null\r\n\t\t// The margin between the popup and the bottom right corner of the map\r\n\t\t// view after autopanning was performed.\r\n\t\tautoPanPaddingBottomRight: null,\r\n\r\n\t\t// @option autoPanPadding: Point = Point(5, 5)\r\n\t\t// Equivalent of setting both top left and bottom right autopan padding to the same value.\r\n\t\tautoPanPadding: [5, 5],\r\n\r\n\t\t// @option keepInView: Boolean = false\r\n\t\t// Set it to `true` if you want to prevent users from panning the popup\r\n\t\t// off of the screen while it is open.\r\n\t\tkeepInView: false,\r\n\r\n\t\t// @option closeButton: Boolean = true\r\n\t\t// Controls the presence of a close button in the popup.\r\n\t\tcloseButton: true,\r\n\r\n\t\t// @option autoClose: Boolean = true\r\n\t\t// Set it to `false` if you want to override the default behavior of\r\n\t\t// the popup closing when another popup is opened.\r\n\t\tautoClose: true,\r\n\r\n\t\t// @option closeOnEscapeKey: Boolean = true\r\n\t\t// Set it to `false` if you want to override the default behavior of\r\n\t\t// the ESC key for closing of the popup.\r\n\t\tcloseOnEscapeKey: true,\r\n\r\n\t\t// @option closeOnClick: Boolean = *\r\n\t\t// Set it if you want to override the default behavior of the popup closing when user clicks\r\n\t\t// on the map. Defaults to the map's [`closePopupOnClick`](#map-closepopuponclick) option.\r\n\r\n\t\t// @option className: String = ''\r\n\t\t// A custom CSS class name to assign to the popup.\r\n\t\tclassName: ''\r\n\t},\r\n\r\n\t// @namespace Popup\r\n\t// @method openOn(map: Map): this\r\n\t// Adds the popup to the map and closes the previous one. The same as `map.openPopup(popup)`.\r\n\topenOn: function (map) {\r\n\t\tmap.openPopup(this);\r\n\t\treturn this;\r\n\t},\r\n\r\n\tonAdd: function (map) {\r\n\t\tDivOverlay.prototype.onAdd.call(this, map);\r\n\r\n\t\t// @namespace Map\r\n\t\t// @section Popup events\r\n\t\t// @event popupopen: PopupEvent\r\n\t\t// Fired when a popup is opened in the map\r\n\t\tmap.fire('popupopen', {popup: this});\r\n\r\n\t\tif (this._source) {\r\n\t\t\t// @namespace Layer\r\n\t\t\t// @section Popup events\r\n\t\t\t// @event popupopen: PopupEvent\r\n\t\t\t// Fired when a popup bound to this layer is opened\r\n\t\t\tthis._source.fire('popupopen', {popup: this}, true);\r\n\t\t\t// For non-path layers, we toggle the popup when clicking\r\n\t\t\t// again the layer, so prevent the map to reopen it.\r\n\t\t\tif (!(this._source instanceof Path)) {\r\n\t\t\t\tthis._source.on('preclick', stopPropagation);\r\n\t\t\t}\r\n\t\t}\r\n\t},\r\n\r\n\tonRemove: function (map) {\r\n\t\tDivOverlay.prototype.onRemove.call(this, map);\r\n\r\n\t\t// @namespace Map\r\n\t\t// @section Popup events\r\n\t\t// @event popupclose: PopupEvent\r\n\t\t// Fired when a popup in the map is closed\r\n\t\tmap.fire('popupclose', {popup: this});\r\n\r\n\t\tif (this._source) {\r\n\t\t\t// @namespace Layer\r\n\t\t\t// @section Popup events\r\n\t\t\t// @event popupclose: PopupEvent\r\n\t\t\t// Fired when a popup bound to this layer is closed\r\n\t\t\tthis._source.fire('popupclose', {popup: this}, true);\r\n\t\t\tif (!(this._source instanceof Path)) {\r\n\t\t\t\tthis._source.off('preclick', stopPropagation);\r\n\t\t\t}\r\n\t\t}\r\n\t},\r\n\r\n\tgetEvents: function () {\r\n\t\tvar events = DivOverlay.prototype.getEvents.call(this);\r\n\r\n\t\tif (this.options.closeOnClick !== undefined ? this.options.closeOnClick : this._map.options.closePopupOnClick) {\r\n\t\t\tevents.preclick = this._close;\r\n\t\t}\r\n\r\n\t\tif (this.options.keepInView) {\r\n\t\t\tevents.moveend = this._adjustPan;\r\n\t\t}\r\n\r\n\t\treturn events;\r\n\t},\r\n\r\n\t_close: function () {\r\n\t\tif (this._map) {\r\n\t\t\tthis._map.closePopup(this);\r\n\t\t}\r\n\t},\r\n\r\n\t_initLayout: function () {\r\n\t\tvar prefix = 'leaflet-popup',\r\n\t\t    container = this._container = create$1('div',\r\n\t\t\tprefix + ' ' + (this.options.className || '') +\r\n\t\t\t' leaflet-zoom-animated');\r\n\r\n\t\tvar wrapper = this._wrapper = create$1('div', prefix + '-content-wrapper', container);\r\n\t\tthis._contentNode = create$1('div', prefix + '-content', wrapper);\r\n\r\n\t\tdisableClickPropagation(wrapper);\r\n\t\tdisableScrollPropagation(this._contentNode);\r\n\t\ton(wrapper, 'contextmenu', stopPropagation);\r\n\r\n\t\tthis._tipContainer = create$1('div', prefix + '-tip-container', container);\r\n\t\tthis._tip = create$1('div', prefix + '-tip', this._tipContainer);\r\n\r\n\t\tif (this.options.closeButton) {\r\n\t\t\tvar closeButton = this._closeButton = create$1('a', prefix + '-close-button', container);\r\n\t\t\tcloseButton.href = '#close';\r\n\t\t\tcloseButton.innerHTML = '&#215;';\r\n\r\n\t\t\ton(closeButton, 'click', this._onCloseButtonClick, this);\r\n\t\t}\r\n\t},\r\n\r\n\t_updateLayout: function () {\r\n\t\tvar container = this._contentNode,\r\n\t\t    style = container.style;\r\n\r\n\t\tstyle.width = '';\r\n\t\tstyle.whiteSpace = 'nowrap';\r\n\r\n\t\tvar width = container.offsetWidth;\r\n\t\twidth = Math.min(width, this.options.maxWidth);\r\n\t\twidth = Math.max(width, this.options.minWidth);\r\n\r\n\t\tstyle.width = (width + 1) + 'px';\r\n\t\tstyle.whiteSpace = '';\r\n\r\n\t\tstyle.height = '';\r\n\r\n\t\tvar height = container.offsetHeight,\r\n\t\t    maxHeight = this.options.maxHeight,\r\n\t\t    scrolledClass = 'leaflet-popup-scrolled';\r\n\r\n\t\tif (maxHeight && height > maxHeight) {\r\n\t\t\tstyle.height = maxHeight + 'px';\r\n\t\t\taddClass(container, scrolledClass);\r\n\t\t} else {\r\n\t\t\tremoveClass(container, scrolledClass);\r\n\t\t}\r\n\r\n\t\tthis._containerWidth = this._container.offsetWidth;\r\n\t},\r\n\r\n\t_animateZoom: function (e) {\r\n\t\tvar pos = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center),\r\n\t\t    anchor = this._getAnchor();\r\n\t\tsetPosition(this._container, pos.add(anchor));\r\n\t},\r\n\r\n\t_adjustPan: function () {\r\n\t\tif (!this.options.autoPan) { return; }\r\n\t\tif (this._map._panAnim) { this._map._panAnim.stop(); }\r\n\r\n\t\tvar map = this._map,\r\n\t\t    marginBottom = parseInt(getStyle(this._container, 'marginBottom'), 10) || 0,\r\n\t\t    containerHeight = this._container.offsetHeight + marginBottom,\r\n\t\t    containerWidth = this._containerWidth,\r\n\t\t    layerPos = new Point(this._containerLeft, -containerHeight - this._containerBottom);\r\n\r\n\t\tlayerPos._add(getPosition(this._container));\r\n\r\n\t\tvar containerPos = map.layerPointToContainerPoint(layerPos),\r\n\t\t    padding = toPoint(this.options.autoPanPadding),\r\n\t\t    paddingTL = toPoint(this.options.autoPanPaddingTopLeft || padding),\r\n\t\t    paddingBR = toPoint(this.options.autoPanPaddingBottomRight || padding),\r\n\t\t    size = map.getSize(),\r\n\t\t    dx = 0,\r\n\t\t    dy = 0;\r\n\r\n\t\tif (containerPos.x + containerWidth + paddingBR.x > size.x) { // right\r\n\t\t\tdx = containerPos.x + containerWidth - size.x + paddingBR.x;\r\n\t\t}\r\n\t\tif (containerPos.x - dx - paddingTL.x < 0) { // left\r\n\t\t\tdx = containerPos.x - paddingTL.x;\r\n\t\t}\r\n\t\tif (containerPos.y + containerHeight + paddingBR.y > size.y) { // bottom\r\n\t\t\tdy = containerPos.y + containerHeight - size.y + paddingBR.y;\r\n\t\t}\r\n\t\tif (containerPos.y - dy - paddingTL.y < 0) { // top\r\n\t\t\tdy = containerPos.y - paddingTL.y;\r\n\t\t}\r\n\r\n\t\t// @namespace Map\r\n\t\t// @section Popup events\r\n\t\t// @event autopanstart: Event\r\n\t\t// Fired when the map starts autopanning when opening a popup.\r\n\t\tif (dx || dy) {\r\n\t\t\tmap\r\n\t\t\t    .fire('autopanstart')\r\n\t\t\t    .panBy([dx, dy]);\r\n\t\t}\r\n\t},\r\n\r\n\t_onCloseButtonClick: function (e) {\r\n\t\tthis._close();\r\n\t\tstop(e);\r\n\t},\r\n\r\n\t_getAnchor: function () {\r\n\t\t// Where should we anchor the popup on the source layer?\r\n\t\treturn toPoint(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);\r\n\t}\r\n\r\n});\r\n\r\n// @namespace Popup\r\n// @factory L.popup(options?: Popup options, source?: Layer)\r\n// Instantiates a `Popup` object given an optional `options` object that describes its appearance and location and an optional `source` object that is used to tag the popup with a reference to the Layer to which it refers.\r\nvar popup = function (options, source) {\r\n\treturn new Popup(options, source);\r\n};\r\n\r\n\r\n/* @namespace Map\r\n * @section Interaction Options\r\n * @option closePopupOnClick: Boolean = true\r\n * Set it to `false` if you don't want popups to close when user clicks the map.\r\n */\r\nMap.mergeOptions({\r\n\tclosePopupOnClick: true\r\n});\r\n\r\n\r\n// @namespace Map\r\n// @section Methods for Layers and Controls\r\nMap.include({\r\n\t// @method openPopup(popup: Popup): this\r\n\t// Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).\r\n\t// @alternative\r\n\t// @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this\r\n\t// Creates a popup with the specified content and options and opens it in the given point on a map.\r\n\topenPopup: function (popup, latlng, options) {\r\n\t\tif (!(popup instanceof Popup)) {\r\n\t\t\tpopup = new Popup(options).setContent(popup);\r\n\t\t}\r\n\r\n\t\tif (latlng) {\r\n\t\t\tpopup.setLatLng(latlng);\r\n\t\t}\r\n\r\n\t\tif (this.hasLayer(popup)) {\r\n\t\t\treturn this;\r\n\t\t}\r\n\r\n\t\tif (this._popup && this._popup.options.autoClose) {\r\n\t\t\tthis.closePopup();\r\n\t\t}\r\n\r\n\t\tthis._popup = popup;\r\n\t\treturn this.addLayer(popup);\r\n\t},\r\n\r\n\t// @method closePopup(popup?: Popup): this\r\n\t// Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).\r\n\tclosePopup: function (popup) {\r\n\t\tif (!popup || popup === this._popup) {\r\n\t\t\tpopup = this._popup;\r\n\t\t\tthis._popup = null;\r\n\t\t}\r\n\t\tif (popup) {\r\n\t\t\tthis.removeLayer(popup);\r\n\t\t}\r\n\t\treturn this;\r\n\t}\r\n});\r\n\r\n/*\r\n * @namespace Layer\r\n * @section Popup methods example\r\n *\r\n * All layers share a set of methods convenient for binding popups to it.\r\n *\r\n * ```js\r\n * var layer = L.Polygon(latlngs).bindPopup('Hi There!').addTo(map);\r\n * layer.openPopup();\r\n * layer.closePopup();\r\n * ```\r\n *\r\n * Popups will also be automatically opened when the layer is clicked on and closed when the layer is removed from the map or another popup is opened.\r\n */\r\n\r\n// @section Popup methods\r\nLayer.include({\r\n\r\n\t// @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this\r\n\t// Binds a popup to the layer with the passed `content` and sets up the\r\n\t// necessary event listeners. If a `Function` is passed it will receive\r\n\t// the layer as the first argument and should return a `String` or `HTMLElement`.\r\n\tbindPopup: function (content, options) {\r\n\r\n\t\tif (content instanceof Popup) {\r\n\t\t\tsetOptions(content, options);\r\n\t\t\tthis._popup = content;\r\n\t\t\tcontent._source = this;\r\n\t\t} else {\r\n\t\t\tif (!this._popup || options) {\r\n\t\t\t\tthis._popup = new Popup(options, this);\r\n\t\t\t}\r\n\t\t\tthis._popup.setContent(content);\r\n\t\t}\r\n\r\n\t\tif (!this._popupHandlersAdded) {\r\n\t\t\tthis.on({\r\n\t\t\t\tclick: this._openPopup,\r\n\t\t\t\tkeypress: this._onKeyPress,\r\n\t\t\t\tremove: this.closePopup,\r\n\t\t\t\tmove: this._movePopup\r\n\t\t\t});\r\n\t\t\tthis._popupHandlersAdded = true;\r\n\t\t}\r\n\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// @method unbindPopup(): this\r\n\t// Removes the popup previously bound with `bindPopup`.\r\n\tunbindPopup: function () {\r\n\t\tif (this._popup) {\r\n\t\t\tthis.off({\r\n\t\t\t\tclick: this._openPopup,\r\n\t\t\t\tkeypress: this._onKeyPress,\r\n\t\t\t\tremove: this.closePopup,\r\n\t\t\t\tmove: this._movePopup\r\n\t\t\t});\r\n\t\t\tthis._popupHandlersAdded = false;\r\n\t\t\tthis._popup = null;\r\n\t\t}\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// @method openPopup(latlng?: LatLng): this\r\n\t// Opens the bound popup at the specified `latlng` or at the default popup anchor if no `latlng` is passed.\r\n\topenPopup: function (layer, latlng) {\r\n\t\tif (!(layer instanceof Layer)) {\r\n\t\t\tlatlng = layer;\r\n\t\t\tlayer = this;\r\n\t\t}\r\n\r\n\t\tif (layer instanceof FeatureGroup) {\r\n\t\t\tfor (var id in this._layers) {\r\n\t\t\t\tlayer = this._layers[id];\r\n\t\t\t\tbreak;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tif (!latlng) {\r\n\t\t\tlatlng = layer.getCenter ? layer.getCenter() : layer.getLatLng();\r\n\t\t}\r\n\r\n\t\tif (this._popup && this._map) {\r\n\t\t\t// set popup source to this layer\r\n\t\t\tthis._popup._source = layer;\r\n\r\n\t\t\t// update the popup (content, layout, ect...)\r\n\t\t\tthis._popup.update();\r\n\r\n\t\t\t// open the popup on the map\r\n\t\t\tthis._map.openPopup(this._popup, latlng);\r\n\t\t}\r\n\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// @method closePopup(): this\r\n\t// Closes the popup bound to this layer if it is open.\r\n\tclosePopup: function () {\r\n\t\tif (this._popup) {\r\n\t\t\tthis._popup._close();\r\n\t\t}\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// @method togglePopup(): this\r\n\t// Opens or closes the popup bound to this layer depending on its current state.\r\n\ttogglePopup: function (target) {\r\n\t\tif (this._popup) {\r\n\t\t\tif (this._popup._map) {\r\n\t\t\t\tthis.closePopup();\r\n\t\t\t} else {\r\n\t\t\t\tthis.openPopup(target);\r\n\t\t\t}\r\n\t\t}\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// @method isPopupOpen(): boolean\r\n\t// Returns `true` if the popup bound to this layer is currently open.\r\n\tisPopupOpen: function () {\r\n\t\treturn (this._popup ? this._popup.isOpen() : false);\r\n\t},\r\n\r\n\t// @method setPopupContent(content: String|HTMLElement|Popup): this\r\n\t// Sets the content of the popup bound to this layer.\r\n\tsetPopupContent: function (content) {\r\n\t\tif (this._popup) {\r\n\t\t\tthis._popup.setContent(content);\r\n\t\t}\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// @method getPopup(): Popup\r\n\t// Returns the popup bound to this layer.\r\n\tgetPopup: function () {\r\n\t\treturn this._popup;\r\n\t},\r\n\r\n\t_openPopup: function (e) {\r\n\t\tvar layer = e.layer || e.target;\r\n\r\n\t\tif (!this._popup) {\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\tif (!this._map) {\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\t// prevent map click\r\n\t\tstop(e);\r\n\r\n\t\t// if this inherits from Path its a vector and we can just\r\n\t\t// open the popup at the new location\r\n\t\tif (layer instanceof Path) {\r\n\t\t\tthis.openPopup(e.layer || e.target, e.latlng);\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\t// otherwise treat it like a marker and figure out\r\n\t\t// if we should toggle it open/closed\r\n\t\tif (this._map.hasLayer(this._popup) && this._popup._source === layer) {\r\n\t\t\tthis.closePopup();\r\n\t\t} else {\r\n\t\t\tthis.openPopup(layer, e.latlng);\r\n\t\t}\r\n\t},\r\n\r\n\t_movePopup: function (e) {\r\n\t\tthis._popup.setLatLng(e.latlng);\r\n\t},\r\n\r\n\t_onKeyPress: function (e) {\r\n\t\tif (e.originalEvent.keyCode === 13) {\r\n\t\t\tthis._openPopup(e);\r\n\t\t}\r\n\t}\r\n});\n\n/*\n * @class Tooltip\n * @inherits DivOverlay\n * @aka L.Tooltip\n * Used to display small texts on top of map layers.\n *\n * @example\n *\n * ```js\n * marker.bindTooltip(\"my tooltip text\").openTooltip();\n * ```\n * Note about tooltip offset. Leaflet takes two options in consideration\n * for computing tooltip offsetting:\n * - the `offset` Tooltip option: it defaults to [0, 0], and it's specific to one tooltip.\n *   Add a positive x offset to move the tooltip to the right, and a positive y offset to\n *   move it to the bottom. Negatives will move to the left and top.\n * - the `tooltipAnchor` Icon option: this will only be considered for Marker. You\n *   should adapt this value if you use a custom icon.\n */\n\n\n// @namespace Tooltip\nvar Tooltip = DivOverlay.extend({\n\n\t// @section\n\t// @aka Tooltip options\n\toptions: {\n\t\t// @option pane: String = 'tooltipPane'\n\t\t// `Map pane` where the tooltip will be added.\n\t\tpane: 'tooltipPane',\n\n\t\t// @option offset: Point = Point(0, 0)\n\t\t// Optional offset of the tooltip position.\n\t\toffset: [0, 0],\n\n\t\t// @option direction: String = 'auto'\n\t\t// Direction where to open the tooltip. Possible values are: `right`, `left`,\n\t\t// `top`, `bottom`, `center`, `auto`.\n\t\t// `auto` will dynamically switch between `right` and `left` according to the tooltip\n\t\t// position on the map.\n\t\tdirection: 'auto',\n\n\t\t// @option permanent: Boolean = false\n\t\t// Whether to open the tooltip permanently or only on mouseover.\n\t\tpermanent: false,\n\n\t\t// @option sticky: Boolean = false\n\t\t// If true, the tooltip will follow the mouse instead of being fixed at the feature center.\n\t\tsticky: false,\n\n\t\t// @option interactive: Boolean = false\n\t\t// If true, the tooltip will listen to the feature events.\n\t\tinteractive: false,\n\n\t\t// @option opacity: Number = 0.9\n\t\t// Tooltip container opacity.\n\t\topacity: 0.9\n\t},\n\n\tonAdd: function (map) {\n\t\tDivOverlay.prototype.onAdd.call(this, map);\n\t\tthis.setOpacity(this.options.opacity);\n\n\t\t// @namespace Map\n\t\t// @section Tooltip events\n\t\t// @event tooltipopen: TooltipEvent\n\t\t// Fired when a tooltip is opened in the map.\n\t\tmap.fire('tooltipopen', {tooltip: this});\n\n\t\tif (this._source) {\n\t\t\t// @namespace Layer\n\t\t\t// @section Tooltip events\n\t\t\t// @event tooltipopen: TooltipEvent\n\t\t\t// Fired when a tooltip bound to this layer is opened.\n\t\t\tthis._source.fire('tooltipopen', {tooltip: this}, true);\n\t\t}\n\t},\n\n\tonRemove: function (map) {\n\t\tDivOverlay.prototype.onRemove.call(this, map);\n\n\t\t// @namespace Map\n\t\t// @section Tooltip events\n\t\t// @event tooltipclose: TooltipEvent\n\t\t// Fired when a tooltip in the map is closed.\n\t\tmap.fire('tooltipclose', {tooltip: this});\n\n\t\tif (this._source) {\n\t\t\t// @namespace Layer\n\t\t\t// @section Tooltip events\n\t\t\t// @event tooltipclose: TooltipEvent\n\t\t\t// Fired when a tooltip bound to this layer is closed.\n\t\t\tthis._source.fire('tooltipclose', {tooltip: this}, true);\n\t\t}\n\t},\n\n\tgetEvents: function () {\n\t\tvar events = DivOverlay.prototype.getEvents.call(this);\n\n\t\tif (touch && !this.options.permanent) {\n\t\t\tevents.preclick = this._close;\n\t\t}\n\n\t\treturn events;\n\t},\n\n\t_close: function () {\n\t\tif (this._map) {\n\t\t\tthis._map.closeTooltip(this);\n\t\t}\n\t},\n\n\t_initLayout: function () {\n\t\tvar prefix = 'leaflet-tooltip',\n\t\t    className = prefix + ' ' + (this.options.className || '') + ' leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide');\n\n\t\tthis._contentNode = this._container = create$1('div', className);\n\t},\n\n\t_updateLayout: function () {},\n\n\t_adjustPan: function () {},\n\n\t_setPosition: function (pos) {\n\t\tvar map = this._map,\n\t\t    container = this._container,\n\t\t    centerPoint = map.latLngToContainerPoint(map.getCenter()),\n\t\t    tooltipPoint = map.layerPointToContainerPoint(pos),\n\t\t    direction = this.options.direction,\n\t\t    tooltipWidth = container.offsetWidth,\n\t\t    tooltipHeight = container.offsetHeight,\n\t\t    offset = toPoint(this.options.offset),\n\t\t    anchor = this._getAnchor();\n\n\t\tif (direction === 'top') {\n\t\t\tpos = pos.add(toPoint(-tooltipWidth / 2 + offset.x, -tooltipHeight + offset.y + anchor.y, true));\n\t\t} else if (direction === 'bottom') {\n\t\t\tpos = pos.subtract(toPoint(tooltipWidth / 2 - offset.x, -offset.y, true));\n\t\t} else if (direction === 'center') {\n\t\t\tpos = pos.subtract(toPoint(tooltipWidth / 2 + offset.x, tooltipHeight / 2 - anchor.y + offset.y, true));\n\t\t} else if (direction === 'right' || direction === 'auto' && tooltipPoint.x < centerPoint.x) {\n\t\t\tdirection = 'right';\n\t\t\tpos = pos.add(toPoint(offset.x + anchor.x, anchor.y - tooltipHeight / 2 + offset.y, true));\n\t\t} else {\n\t\t\tdirection = 'left';\n\t\t\tpos = pos.subtract(toPoint(tooltipWidth + anchor.x - offset.x, tooltipHeight / 2 - anchor.y - offset.y, true));\n\t\t}\n\n\t\tremoveClass(container, 'leaflet-tooltip-right');\n\t\tremoveClass(container, 'leaflet-tooltip-left');\n\t\tremoveClass(container, 'leaflet-tooltip-top');\n\t\tremoveClass(container, 'leaflet-tooltip-bottom');\n\t\taddClass(container, 'leaflet-tooltip-' + direction);\n\t\tsetPosition(container, pos);\n\t},\n\n\t_updatePosition: function () {\n\t\tvar pos = this._map.latLngToLayerPoint(this._latlng);\n\t\tthis._setPosition(pos);\n\t},\n\n\tsetOpacity: function (opacity) {\n\t\tthis.options.opacity = opacity;\n\n\t\tif (this._container) {\n\t\t\tsetOpacity(this._container, opacity);\n\t\t}\n\t},\n\n\t_animateZoom: function (e) {\n\t\tvar pos = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center);\n\t\tthis._setPosition(pos);\n\t},\n\n\t_getAnchor: function () {\n\t\t// Where should we anchor the tooltip on the source layer?\n\t\treturn toPoint(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);\n\t}\n\n});\n\n// @namespace Tooltip\n// @factory L.tooltip(options?: Tooltip options, source?: Layer)\n// Instantiates a Tooltip object given an optional `options` object that describes its appearance and location and an optional `source` object that is used to tag the tooltip with a reference to the Layer to which it refers.\nvar tooltip = function (options, source) {\n\treturn new Tooltip(options, source);\n};\n\n// @namespace Map\n// @section Methods for Layers and Controls\nMap.include({\n\n\t// @method openTooltip(tooltip: Tooltip): this\n\t// Opens the specified tooltip.\n\t// @alternative\n\t// @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this\n\t// Creates a tooltip with the specified content and options and open it.\n\topenTooltip: function (tooltip, latlng, options) {\n\t\tif (!(tooltip instanceof Tooltip)) {\n\t\t\ttooltip = new Tooltip(options).setContent(tooltip);\n\t\t}\n\n\t\tif (latlng) {\n\t\t\ttooltip.setLatLng(latlng);\n\t\t}\n\n\t\tif (this.hasLayer(tooltip)) {\n\t\t\treturn this;\n\t\t}\n\n\t\treturn this.addLayer(tooltip);\n\t},\n\n\t// @method closeTooltip(tooltip?: Tooltip): this\n\t// Closes the tooltip given as parameter.\n\tcloseTooltip: function (tooltip) {\n\t\tif (tooltip) {\n\t\t\tthis.removeLayer(tooltip);\n\t\t}\n\t\treturn this;\n\t}\n\n});\n\n/*\n * @namespace Layer\n * @section Tooltip methods example\n *\n * All layers share a set of methods convenient for binding tooltips to it.\n *\n * ```js\n * var layer = L.Polygon(latlngs).bindTooltip('Hi There!').addTo(map);\n * layer.openTooltip();\n * layer.closeTooltip();\n * ```\n */\n\n// @section Tooltip methods\nLayer.include({\n\n\t// @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this\n\t// Binds a tooltip to the layer with the passed `content` and sets up the\n\t// necessary event listeners. If a `Function` is passed it will receive\n\t// the layer as the first argument and should return a `String` or `HTMLElement`.\n\tbindTooltip: function (content, options) {\n\n\t\tif (content instanceof Tooltip) {\n\t\t\tsetOptions(content, options);\n\t\t\tthis._tooltip = content;\n\t\t\tcontent._source = this;\n\t\t} else {\n\t\t\tif (!this._tooltip || options) {\n\t\t\t\tthis._tooltip = new Tooltip(options, this);\n\t\t\t}\n\t\t\tthis._tooltip.setContent(content);\n\n\t\t}\n\n\t\tthis._initTooltipInteractions();\n\n\t\tif (this._tooltip.options.permanent && this._map && this._map.hasLayer(this)) {\n\t\t\tthis.openTooltip();\n\t\t}\n\n\t\treturn this;\n\t},\n\n\t// @method unbindTooltip(): this\n\t// Removes the tooltip previously bound with `bindTooltip`.\n\tunbindTooltip: function () {\n\t\tif (this._tooltip) {\n\t\t\tthis._initTooltipInteractions(true);\n\t\t\tthis.closeTooltip();\n\t\t\tthis._tooltip = null;\n\t\t}\n\t\treturn this;\n\t},\n\n\t_initTooltipInteractions: function (remove$$1) {\n\t\tif (!remove$$1 && this._tooltipHandlersAdded) { return; }\n\t\tvar onOff = remove$$1 ? 'off' : 'on',\n\t\t    events = {\n\t\t\tremove: this.closeTooltip,\n\t\t\tmove: this._moveTooltip\n\t\t    };\n\t\tif (!this._tooltip.options.permanent) {\n\t\t\tevents.mouseover = this._openTooltip;\n\t\t\tevents.mouseout = this.closeTooltip;\n\t\t\tif (this._tooltip.options.sticky) {\n\t\t\t\tevents.mousemove = this._moveTooltip;\n\t\t\t}\n\t\t\tif (touch) {\n\t\t\t\tevents.click = this._openTooltip;\n\t\t\t}\n\t\t} else {\n\t\t\tevents.add = this._openTooltip;\n\t\t}\n\t\tthis[onOff](events);\n\t\tthis._tooltipHandlersAdded = !remove$$1;\n\t},\n\n\t// @method openTooltip(latlng?: LatLng): this\n\t// Opens the bound tooltip at the specified `latlng` or at the default tooltip anchor if no `latlng` is passed.\n\topenTooltip: function (layer, latlng) {\n\t\tif (!(layer instanceof Layer)) {\n\t\t\tlatlng = layer;\n\t\t\tlayer = this;\n\t\t}\n\n\t\tif (layer instanceof FeatureGroup) {\n\t\t\tfor (var id in this._layers) {\n\t\t\t\tlayer = this._layers[id];\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\n\t\tif (!latlng) {\n\t\t\tlatlng = layer.getCenter ? layer.getCenter() : layer.getLatLng();\n\t\t}\n\n\t\tif (this._tooltip && this._map) {\n\n\t\t\t// set tooltip source to this layer\n\t\t\tthis._tooltip._source = layer;\n\n\t\t\t// update the tooltip (content, layout, ect...)\n\t\t\tthis._tooltip.update();\n\n\t\t\t// open the tooltip on the map\n\t\t\tthis._map.openTooltip(this._tooltip, latlng);\n\n\t\t\t// Tooltip container may not be defined if not permanent and never\n\t\t\t// opened.\n\t\t\tif (this._tooltip.options.interactive && this._tooltip._container) {\n\t\t\t\taddClass(this._tooltip._container, 'leaflet-clickable');\n\t\t\t\tthis.addInteractiveTarget(this._tooltip._container);\n\t\t\t}\n\t\t}\n\n\t\treturn this;\n\t},\n\n\t// @method closeTooltip(): this\n\t// Closes the tooltip bound to this layer if it is open.\n\tcloseTooltip: function () {\n\t\tif (this._tooltip) {\n\t\t\tthis._tooltip._close();\n\t\t\tif (this._tooltip.options.interactive && this._tooltip._container) {\n\t\t\t\tremoveClass(this._tooltip._container, 'leaflet-clickable');\n\t\t\t\tthis.removeInteractiveTarget(this._tooltip._container);\n\t\t\t}\n\t\t}\n\t\treturn this;\n\t},\n\n\t// @method toggleTooltip(): this\n\t// Opens or closes the tooltip bound to this layer depending on its current state.\n\ttoggleTooltip: function (target) {\n\t\tif (this._tooltip) {\n\t\t\tif (this._tooltip._map) {\n\t\t\t\tthis.closeTooltip();\n\t\t\t} else {\n\t\t\t\tthis.openTooltip(target);\n\t\t\t}\n\t\t}\n\t\treturn this;\n\t},\n\n\t// @method isTooltipOpen(): boolean\n\t// Returns `true` if the tooltip bound to this layer is currently open.\n\tisTooltipOpen: function () {\n\t\treturn this._tooltip.isOpen();\n\t},\n\n\t// @method setTooltipContent(content: String|HTMLElement|Tooltip): this\n\t// Sets the content of the tooltip bound to this layer.\n\tsetTooltipContent: function (content) {\n\t\tif (this._tooltip) {\n\t\t\tthis._tooltip.setContent(content);\n\t\t}\n\t\treturn this;\n\t},\n\n\t// @method getTooltip(): Tooltip\n\t// Returns the tooltip bound to this layer.\n\tgetTooltip: function () {\n\t\treturn this._tooltip;\n\t},\n\n\t_openTooltip: function (e) {\n\t\tvar layer = e.layer || e.target;\n\n\t\tif (!this._tooltip || !this._map) {\n\t\t\treturn;\n\t\t}\n\t\tthis.openTooltip(layer, this._tooltip.options.sticky ? e.latlng : undefined);\n\t},\n\n\t_moveTooltip: function (e) {\n\t\tvar latlng = e.latlng, containerPoint, layerPoint;\n\t\tif (this._tooltip.options.sticky && e.originalEvent) {\n\t\t\tcontainerPoint = this._map.mouseEventToContainerPoint(e.originalEvent);\n\t\t\tlayerPoint = this._map.containerPointToLayerPoint(containerPoint);\n\t\t\tlatlng = this._map.layerPointToLatLng(layerPoint);\n\t\t}\n\t\tthis._tooltip.setLatLng(latlng);\n\t}\n});\n\n/*\n * @class DivIcon\n * @aka L.DivIcon\n * @inherits Icon\n *\n * Represents a lightweight icon for markers that uses a simple `<div>`\n * element instead of an image. Inherits from `Icon` but ignores the `iconUrl` and shadow options.\n *\n * @example\n * ```js\n * var myIcon = L.divIcon({className: 'my-div-icon'});\n * // you can set .my-div-icon styles in CSS\n *\n * L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);\n * ```\n *\n * By default, it has a 'leaflet-div-icon' CSS class and is styled as a little white square with a shadow.\n */\n\nvar DivIcon = Icon.extend({\n\toptions: {\n\t\t// @section\n\t\t// @aka DivIcon options\n\t\ticonSize: [12, 12], // also can be set through CSS\n\n\t\t// iconAnchor: (Point),\n\t\t// popupAnchor: (Point),\n\n\t\t// @option html: String = ''\n\t\t// Custom HTML code to put inside the div element, empty by default.\n\t\thtml: false,\n\n\t\t// @option bgPos: Point = [0, 0]\n\t\t// Optional relative position of the background, in pixels\n\t\tbgPos: null,\n\n\t\tclassName: 'leaflet-div-icon'\n\t},\n\n\tcreateIcon: function (oldIcon) {\n\t\tvar div = (oldIcon && oldIcon.tagName === 'DIV') ? oldIcon : document.createElement('div'),\n\t\t    options = this.options;\n\n\t\tdiv.innerHTML = options.html !== false ? options.html : '';\n\n\t\tif (options.bgPos) {\n\t\t\tvar bgPos = toPoint(options.bgPos);\n\t\t\tdiv.style.backgroundPosition = (-bgPos.x) + 'px ' + (-bgPos.y) + 'px';\n\t\t}\n\t\tthis._setIconStyles(div, 'icon');\n\n\t\treturn div;\n\t},\n\n\tcreateShadow: function () {\n\t\treturn null;\n\t}\n});\n\n// @factory L.divIcon(options: DivIcon options)\n// Creates a `DivIcon` instance with the given options.\nfunction divIcon(options) {\n\treturn new DivIcon(options);\n}\n\nIcon.Default = IconDefault;\n\n/*\n * @class GridLayer\n * @inherits Layer\n * @aka L.GridLayer\n *\n * Generic class for handling a tiled grid of HTML elements. This is the base class for all tile layers and replaces `TileLayer.Canvas`.\n * GridLayer can be extended to create a tiled grid of HTML elements like `<canvas>`, `<img>` or `<div>`. GridLayer will handle creating and animating these DOM elements for you.\n *\n *\n * @section Synchronous usage\n * @example\n *\n * To create a custom layer, extend GridLayer and implement the `createTile()` method, which will be passed a `Point` object with the `x`, `y`, and `z` (zoom level) coordinates to draw your tile.\n *\n * ```js\n * var CanvasLayer = L.GridLayer.extend({\n *     createTile: function(coords){\n *         // create a <canvas> element for drawing\n *         var tile = L.DomUtil.create('canvas', 'leaflet-tile');\n *\n *         // setup tile width and height according to the options\n *         var size = this.getTileSize();\n *         tile.width = size.x;\n *         tile.height = size.y;\n *\n *         // get a canvas context and draw something on it using coords.x, coords.y and coords.z\n *         var ctx = tile.getContext('2d');\n *\n *         // return the tile so it can be rendered on screen\n *         return tile;\n *     }\n * });\n * ```\n *\n * @section Asynchronous usage\n * @example\n *\n * Tile creation can also be asynchronous, this is useful when using a third-party drawing library. Once the tile is finished drawing it can be passed to the `done()` callback.\n *\n * ```js\n * var CanvasLayer = L.GridLayer.extend({\n *     createTile: function(coords, done){\n *         var error;\n *\n *         // create a <canvas> element for drawing\n *         var tile = L.DomUtil.create('canvas', 'leaflet-tile');\n *\n *         // setup tile width and height according to the options\n *         var size = this.getTileSize();\n *         tile.width = size.x;\n *         tile.height = size.y;\n *\n *         // draw something asynchronously and pass the tile to the done() callback\n *         setTimeout(function() {\n *             done(error, tile);\n *         }, 1000);\n *\n *         return tile;\n *     }\n * });\n * ```\n *\n * @section\n */\n\n\nvar GridLayer = Layer.extend({\n\n\t// @section\n\t// @aka GridLayer options\n\toptions: {\n\t\t// @option tileSize: Number|Point = 256\n\t\t// Width and height of tiles in the grid. Use a number if width and height are equal, or `L.point(width, height)` otherwise.\n\t\ttileSize: 256,\n\n\t\t// @option opacity: Number = 1.0\n\t\t// Opacity of the tiles. Can be used in the `createTile()` function.\n\t\topacity: 1,\n\n\t\t// @option updateWhenIdle: Boolean = (depends)\n\t\t// Load new tiles only when panning ends.\n\t\t// `true` by default on mobile browsers, in order to avoid too many requests and keep smooth navigation.\n\t\t// `false` otherwise in order to display new tiles _during_ panning, since it is easy to pan outside the\n\t\t// [`keepBuffer`](#gridlayer-keepbuffer) option in desktop browsers.\n\t\tupdateWhenIdle: mobile,\n\n\t\t// @option updateWhenZooming: Boolean = true\n\t\t// By default, a smooth zoom animation (during a [touch zoom](#map-touchzoom) or a [`flyTo()`](#map-flyto)) will update grid layers every integer zoom level. Setting this option to `false` will update the grid layer only when the smooth animation ends.\n\t\tupdateWhenZooming: true,\n\n\t\t// @option updateInterval: Number = 200\n\t\t// Tiles will not update more than once every `updateInterval` milliseconds when panning.\n\t\tupdateInterval: 200,\n\n\t\t// @option zIndex: Number = 1\n\t\t// The explicit zIndex of the tile layer.\n\t\tzIndex: 1,\n\n\t\t// @option bounds: LatLngBounds = undefined\n\t\t// If set, tiles will only be loaded inside the set `LatLngBounds`.\n\t\tbounds: null,\n\n\t\t// @option minZoom: Number = 0\n\t\t// The minimum zoom level down to which this layer will be displayed (inclusive).\n\t\tminZoom: 0,\n\n\t\t// @option maxZoom: Number = undefined\n\t\t// The maximum zoom level up to which this layer will be displayed (inclusive).\n\t\tmaxZoom: undefined,\n\n\t\t// @option maxNativeZoom: Number = undefined\n\t\t// Maximum zoom number the tile source has available. If it is specified,\n\t\t// the tiles on all zoom levels higher than `maxNativeZoom` will be loaded\n\t\t// from `maxNativeZoom` level and auto-scaled.\n\t\tmaxNativeZoom: undefined,\n\n\t\t// @option minNativeZoom: Number = undefined\n\t\t// Minimum zoom number the tile source has available. If it is specified,\n\t\t// the tiles on all zoom levels lower than `minNativeZoom` will be loaded\n\t\t// from `minNativeZoom` level and auto-scaled.\n\t\tminNativeZoom: undefined,\n\n\t\t// @option noWrap: Boolean = false\n\t\t// Whether the layer is wrapped around the antimeridian. If `true`, the\n\t\t// GridLayer will only be displayed once at low zoom levels. Has no\n\t\t// effect when the [map CRS](#map-crs) doesn't wrap around. Can be used\n\t\t// in combination with [`bounds`](#gridlayer-bounds) to prevent requesting\n\t\t// tiles outside the CRS limits.\n\t\tnoWrap: false,\n\n\t\t// @option pane: String = 'tilePane'\n\t\t// `Map pane` where the grid layer will be added.\n\t\tpane: 'tilePane',\n\n\t\t// @option className: String = ''\n\t\t// A custom class name to assign to the tile layer. Empty by default.\n\t\tclassName: '',\n\n\t\t// @option keepBuffer: Number = 2\n\t\t// When panning the map, keep this many rows and columns of tiles before unloading them.\n\t\tkeepBuffer: 2\n\t},\n\n\tinitialize: function (options) {\n\t\tsetOptions(this, options);\n\t},\n\n\tonAdd: function () {\n\t\tthis._initContainer();\n\n\t\tthis._levels = {};\n\t\tthis._tiles = {};\n\n\t\tthis._resetView();\n\t\tthis._update();\n\t},\n\n\tbeforeAdd: function (map) {\n\t\tmap._addZoomLimit(this);\n\t},\n\n\tonRemove: function (map) {\n\t\tthis._removeAllTiles();\n\t\tremove(this._container);\n\t\tmap._removeZoomLimit(this);\n\t\tthis._container = null;\n\t\tthis._tileZoom = undefined;\n\t},\n\n\t// @method bringToFront: this\n\t// Brings the tile layer to the top of all tile layers.\n\tbringToFront: function () {\n\t\tif (this._map) {\n\t\t\ttoFront(this._container);\n\t\t\tthis._setAutoZIndex(Math.max);\n\t\t}\n\t\treturn this;\n\t},\n\n\t// @method bringToBack: this\n\t// Brings the tile layer to the bottom of all tile layers.\n\tbringToBack: function () {\n\t\tif (this._map) {\n\t\t\ttoBack(this._container);\n\t\t\tthis._setAutoZIndex(Math.min);\n\t\t}\n\t\treturn this;\n\t},\n\n\t// @method getContainer: HTMLElement\n\t// Returns the HTML element that contains the tiles for this layer.\n\tgetContainer: function () {\n\t\treturn this._container;\n\t},\n\n\t// @method setOpacity(opacity: Number): this\n\t// Changes the [opacity](#gridlayer-opacity) of the grid layer.\n\tsetOpacity: function (opacity) {\n\t\tthis.options.opacity = opacity;\n\t\tthis._updateOpacity();\n\t\treturn this;\n\t},\n\n\t// @method setZIndex(zIndex: Number): this\n\t// Changes the [zIndex](#gridlayer-zindex) of the grid layer.\n\tsetZIndex: function (zIndex) {\n\t\tthis.options.zIndex = zIndex;\n\t\tthis._updateZIndex();\n\n\t\treturn this;\n\t},\n\n\t// @method isLoading: Boolean\n\t// Returns `true` if any tile in the grid layer has not finished loading.\n\tisLoading: function () {\n\t\treturn this._loading;\n\t},\n\n\t// @method redraw: this\n\t// Causes the layer to clear all the tiles and request them again.\n\tredraw: function () {\n\t\tif (this._map) {\n\t\t\tthis._removeAllTiles();\n\t\t\tthis._update();\n\t\t}\n\t\treturn this;\n\t},\n\n\tgetEvents: function () {\n\t\tvar events = {\n\t\t\tviewprereset: this._invalidateAll,\n\t\t\tviewreset: this._resetView,\n\t\t\tzoom: this._resetView,\n\t\t\tmoveend: this._onMoveEnd\n\t\t};\n\n\t\tif (!this.options.updateWhenIdle) {\n\t\t\t// update tiles on move, but not more often than once per given interval\n\t\t\tif (!this._onMove) {\n\t\t\t\tthis._onMove = throttle(this._onMoveEnd, this.options.updateInterval, this);\n\t\t\t}\n\n\t\t\tevents.move = this._onMove;\n\t\t}\n\n\t\tif (this._zoomAnimated) {\n\t\t\tevents.zoomanim = this._animateZoom;\n\t\t}\n\n\t\treturn events;\n\t},\n\n\t// @section Extension methods\n\t// Layers extending `GridLayer` shall reimplement the following method.\n\t// @method createTile(coords: Object, done?: Function): HTMLElement\n\t// Called only internally, must be overridden by classes extending `GridLayer`.\n\t// Returns the `HTMLElement` corresponding to the given `coords`. If the `done` callback\n\t// is specified, it must be called when the tile has finished loading and drawing.\n\tcreateTile: function () {\n\t\treturn document.createElement('div');\n\t},\n\n\t// @section\n\t// @method getTileSize: Point\n\t// Normalizes the [tileSize option](#gridlayer-tilesize) into a point. Used by the `createTile()` method.\n\tgetTileSize: function () {\n\t\tvar s = this.options.tileSize;\n\t\treturn s instanceof Point ? s : new Point(s, s);\n\t},\n\n\t_updateZIndex: function () {\n\t\tif (this._container && this.options.zIndex !== undefined && this.options.zIndex !== null) {\n\t\t\tthis._container.style.zIndex = this.options.zIndex;\n\t\t}\n\t},\n\n\t_setAutoZIndex: function (compare) {\n\t\t// go through all other layers of the same pane, set zIndex to max + 1 (front) or min - 1 (back)\n\n\t\tvar layers = this.getPane().children,\n\t\t    edgeZIndex = -compare(-Infinity, Infinity); // -Infinity for max, Infinity for min\n\n\t\tfor (var i = 0, len = layers.length, zIndex; i < len; i++) {\n\n\t\t\tzIndex = layers[i].style.zIndex;\n\n\t\t\tif (layers[i] !== this._container && zIndex) {\n\t\t\t\tedgeZIndex = compare(edgeZIndex, +zIndex);\n\t\t\t}\n\t\t}\n\n\t\tif (isFinite(edgeZIndex)) {\n\t\t\tthis.options.zIndex = edgeZIndex + compare(-1, 1);\n\t\t\tthis._updateZIndex();\n\t\t}\n\t},\n\n\t_updateOpacity: function () {\n\t\tif (!this._map) { return; }\n\n\t\t// IE doesn't inherit filter opacity properly, so we're forced to set it on tiles\n\t\tif (ielt9) { return; }\n\n\t\tsetOpacity(this._container, this.options.opacity);\n\n\t\tvar now = +new Date(),\n\t\t    nextFrame = false,\n\t\t    willPrune = false;\n\n\t\tfor (var key in this._tiles) {\n\t\t\tvar tile = this._tiles[key];\n\t\t\tif (!tile.current || !tile.loaded) { continue; }\n\n\t\t\tvar fade = Math.min(1, (now - tile.loaded) / 200);\n\n\t\t\tsetOpacity(tile.el, fade);\n\t\t\tif (fade < 1) {\n\t\t\t\tnextFrame = true;\n\t\t\t} else {\n\t\t\t\tif (tile.active) {\n\t\t\t\t\twillPrune = true;\n\t\t\t\t} else {\n\t\t\t\t\tthis._onOpaqueTile(tile);\n\t\t\t\t}\n\t\t\t\ttile.active = true;\n\t\t\t}\n\t\t}\n\n\t\tif (willPrune && !this._noPrune) { this._pruneTiles(); }\n\n\t\tif (nextFrame) {\n\t\t\tcancelAnimFrame(this._fadeFrame);\n\t\t\tthis._fadeFrame = requestAnimFrame(this._updateOpacity, this);\n\t\t}\n\t},\n\n\t_onOpaqueTile: falseFn,\n\n\t_initContainer: function () {\n\t\tif (this._container) { return; }\n\n\t\tthis._container = create$1('div', 'leaflet-layer ' + (this.options.className || ''));\n\t\tthis._updateZIndex();\n\n\t\tif (this.options.opacity < 1) {\n\t\t\tthis._updateOpacity();\n\t\t}\n\n\t\tthis.getPane().appendChild(this._container);\n\t},\n\n\t_updateLevels: function () {\n\n\t\tvar zoom = this._tileZoom,\n\t\t    maxZoom = this.options.maxZoom;\n\n\t\tif (zoom === undefined) { return undefined; }\n\n\t\tfor (var z in this._levels) {\n\t\t\tif (this._levels[z].el.children.length || z === zoom) {\n\t\t\t\tthis._levels[z].el.style.zIndex = maxZoom - Math.abs(zoom - z);\n\t\t\t\tthis._onUpdateLevel(z);\n\t\t\t} else {\n\t\t\t\tremove(this._levels[z].el);\n\t\t\t\tthis._removeTilesAtZoom(z);\n\t\t\t\tthis._onRemoveLevel(z);\n\t\t\t\tdelete this._levels[z];\n\t\t\t}\n\t\t}\n\n\t\tvar level = this._levels[zoom],\n\t\t    map = this._map;\n\n\t\tif (!level) {\n\t\t\tlevel = this._levels[zoom] = {};\n\n\t\t\tlevel.el = create$1('div', 'leaflet-tile-container leaflet-zoom-animated', this._container);\n\t\t\tlevel.el.style.zIndex = maxZoom;\n\n\t\t\tlevel.origin = map.project(map.unproject(map.getPixelOrigin()), zoom).round();\n\t\t\tlevel.zoom = zoom;\n\n\t\t\tthis._setZoomTransform(level, map.getCenter(), map.getZoom());\n\n\t\t\t// force the browser to consider the newly added element for transition\n\t\t\tfalseFn(level.el.offsetWidth);\n\n\t\t\tthis._onCreateLevel(level);\n\t\t}\n\n\t\tthis._level = level;\n\n\t\treturn level;\n\t},\n\n\t_onUpdateLevel: falseFn,\n\n\t_onRemoveLevel: falseFn,\n\n\t_onCreateLevel: falseFn,\n\n\t_pruneTiles: function () {\n\t\tif (!this._map) {\n\t\t\treturn;\n\t\t}\n\n\t\tvar key, tile;\n\n\t\tvar zoom = this._map.getZoom();\n\t\tif (zoom > this.options.maxZoom ||\n\t\t\tzoom < this.options.minZoom) {\n\t\t\tthis._removeAllTiles();\n\t\t\treturn;\n\t\t}\n\n\t\tfor (key in this._tiles) {\n\t\t\ttile = this._tiles[key];\n\t\t\ttile.retain = tile.current;\n\t\t}\n\n\t\tfor (key in this._tiles) {\n\t\t\ttile = this._tiles[key];\n\t\t\tif (tile.current && !tile.active) {\n\t\t\t\tvar coords = tile.coords;\n\t\t\t\tif (!this._retainParent(coords.x, coords.y, coords.z, coords.z - 5)) {\n\t\t\t\t\tthis._retainChildren(coords.x, coords.y, coords.z, coords.z + 2);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\tfor (key in this._tiles) {\n\t\t\tif (!this._tiles[key].retain) {\n\t\t\t\tthis._removeTile(key);\n\t\t\t}\n\t\t}\n\t},\n\n\t_removeTilesAtZoom: function (zoom) {\n\t\tfor (var key in this._tiles) {\n\t\t\tif (this._tiles[key].coords.z !== zoom) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tthis._removeTile(key);\n\t\t}\n\t},\n\n\t_removeAllTiles: function () {\n\t\tfor (var key in this._tiles) {\n\t\t\tthis._removeTile(key);\n\t\t}\n\t},\n\n\t_invalidateAll: function () {\n\t\tfor (var z in this._levels) {\n\t\t\tremove(this._levels[z].el);\n\t\t\tthis._onRemoveLevel(z);\n\t\t\tdelete this._levels[z];\n\t\t}\n\t\tthis._removeAllTiles();\n\n\t\tthis._tileZoom = undefined;\n\t},\n\n\t_retainParent: function (x, y, z, minZoom) {\n\t\tvar x2 = Math.floor(x / 2),\n\t\t    y2 = Math.floor(y / 2),\n\t\t    z2 = z - 1,\n\t\t    coords2 = new Point(+x2, +y2);\n\t\tcoords2.z = +z2;\n\n\t\tvar key = this._tileCoordsToKey(coords2),\n\t\t    tile = this._tiles[key];\n\n\t\tif (tile && tile.active) {\n\t\t\ttile.retain = true;\n\t\t\treturn true;\n\n\t\t} else if (tile && tile.loaded) {\n\t\t\ttile.retain = true;\n\t\t}\n\n\t\tif (z2 > minZoom) {\n\t\t\treturn this._retainParent(x2, y2, z2, minZoom);\n\t\t}\n\n\t\treturn false;\n\t},\n\n\t_retainChildren: function (x, y, z, maxZoom) {\n\n\t\tfor (var i = 2 * x; i < 2 * x + 2; i++) {\n\t\t\tfor (var j = 2 * y; j < 2 * y + 2; j++) {\n\n\t\t\t\tvar coords = new Point(i, j);\n\t\t\t\tcoords.z = z + 1;\n\n\t\t\t\tvar key = this._tileCoordsToKey(coords),\n\t\t\t\t    tile = this._tiles[key];\n\n\t\t\t\tif (tile && tile.active) {\n\t\t\t\t\ttile.retain = true;\n\t\t\t\t\tcontinue;\n\n\t\t\t\t} else if (tile && tile.loaded) {\n\t\t\t\t\ttile.retain = true;\n\t\t\t\t}\n\n\t\t\t\tif (z + 1 < maxZoom) {\n\t\t\t\t\tthis._retainChildren(i, j, z + 1, maxZoom);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t},\n\n\t_resetView: function (e) {\n\t\tvar animating = e && (e.pinch || e.flyTo);\n\t\tthis._setView(this._map.getCenter(), this._map.getZoom(), animating, animating);\n\t},\n\n\t_animateZoom: function (e) {\n\t\tthis._setView(e.center, e.zoom, true, e.noUpdate);\n\t},\n\n\t_clampZoom: function (zoom) {\n\t\tvar options = this.options;\n\n\t\tif (undefined !== options.minNativeZoom && zoom < options.minNativeZoom) {\n\t\t\treturn options.minNativeZoom;\n\t\t}\n\n\t\tif (undefined !== options.maxNativeZoom && options.maxNativeZoom < zoom) {\n\t\t\treturn options.maxNativeZoom;\n\t\t}\n\n\t\treturn zoom;\n\t},\n\n\t_setView: function (center, zoom, noPrune, noUpdate) {\n\t\tvar tileZoom = this._clampZoom(Math.round(zoom));\n\t\tif ((this.options.maxZoom !== undefined && tileZoom > this.options.maxZoom) ||\n\t\t    (this.options.minZoom !== undefined && tileZoom < this.options.minZoom)) {\n\t\t\ttileZoom = undefined;\n\t\t}\n\n\t\tvar tileZoomChanged = this.options.updateWhenZooming && (tileZoom !== this._tileZoom);\n\n\t\tif (!noUpdate || tileZoomChanged) {\n\n\t\t\tthis._tileZoom = tileZoom;\n\n\t\t\tif (this._abortLoading) {\n\t\t\t\tthis._abortLoading();\n\t\t\t}\n\n\t\t\tthis._updateLevels();\n\t\t\tthis._resetGrid();\n\n\t\t\tif (tileZoom !== undefined) {\n\t\t\t\tthis._update(center);\n\t\t\t}\n\n\t\t\tif (!noPrune) {\n\t\t\t\tthis._pruneTiles();\n\t\t\t}\n\n\t\t\t// Flag to prevent _updateOpacity from pruning tiles during\n\t\t\t// a zoom anim or a pinch gesture\n\t\t\tthis._noPrune = !!noPrune;\n\t\t}\n\n\t\tthis._setZoomTransforms(center, zoom);\n\t},\n\n\t_setZoomTransforms: function (center, zoom) {\n\t\tfor (var i in this._levels) {\n\t\t\tthis._setZoomTransform(this._levels[i], center, zoom);\n\t\t}\n\t},\n\n\t_setZoomTransform: function (level, center, zoom) {\n\t\tvar scale = this._map.getZoomScale(zoom, level.zoom),\n\t\t    translate = level.origin.multiplyBy(scale)\n\t\t        .subtract(this._map._getNewPixelOrigin(center, zoom)).round();\n\n\t\tif (any3d) {\n\t\t\tsetTransform(level.el, translate, scale);\n\t\t} else {\n\t\t\tsetPosition(level.el, translate);\n\t\t}\n\t},\n\n\t_resetGrid: function () {\n\t\tvar map = this._map,\n\t\t    crs = map.options.crs,\n\t\t    tileSize = this._tileSize = this.getTileSize(),\n\t\t    tileZoom = this._tileZoom;\n\n\t\tvar bounds = this._map.getPixelWorldBounds(this._tileZoom);\n\t\tif (bounds) {\n\t\t\tthis._globalTileRange = this._pxBoundsToTileRange(bounds);\n\t\t}\n\n\t\tthis._wrapX = crs.wrapLng && !this.options.noWrap && [\n\t\t\tMath.floor(map.project([0, crs.wrapLng[0]], tileZoom).x / tileSize.x),\n\t\t\tMath.ceil(map.project([0, crs.wrapLng[1]], tileZoom).x / tileSize.y)\n\t\t];\n\t\tthis._wrapY = crs.wrapLat && !this.options.noWrap && [\n\t\t\tMath.floor(map.project([crs.wrapLat[0], 0], tileZoom).y / tileSize.x),\n\t\t\tMath.ceil(map.project([crs.wrapLat[1], 0], tileZoom).y / tileSize.y)\n\t\t];\n\t},\n\n\t_onMoveEnd: function () {\n\t\tif (!this._map || this._map._animatingZoom) { return; }\n\n\t\tthis._update();\n\t},\n\n\t_getTiledPixelBounds: function (center) {\n\t\tvar map = this._map,\n\t\t    mapZoom = map._animatingZoom ? Math.max(map._animateToZoom, map.getZoom()) : map.getZoom(),\n\t\t    scale = map.getZoomScale(mapZoom, this._tileZoom),\n\t\t    pixelCenter = map.project(center, this._tileZoom).floor(),\n\t\t    halfSize = map.getSize().divideBy(scale * 2);\n\n\t\treturn new Bounds(pixelCenter.subtract(halfSize), pixelCenter.add(halfSize));\n\t},\n\n\t// Private method to load tiles in the grid's active zoom level according to map bounds\n\t_update: function (center) {\n\t\tvar map = this._map;\n\t\tif (!map) { return; }\n\t\tvar zoom = this._clampZoom(map.getZoom());\n\n\t\tif (center === undefined) { center = map.getCenter(); }\n\t\tif (this._tileZoom === undefined) { return; }\t// if out of minzoom/maxzoom\n\n\t\tvar pixelBounds = this._getTiledPixelBounds(center),\n\t\t    tileRange = this._pxBoundsToTileRange(pixelBounds),\n\t\t    tileCenter = tileRange.getCenter(),\n\t\t    queue = [],\n\t\t    margin = this.options.keepBuffer,\n\t\t    noPruneRange = new Bounds(tileRange.getBottomLeft().subtract([margin, -margin]),\n\t\t                              tileRange.getTopRight().add([margin, -margin]));\n\n\t\t// Sanity check: panic if the tile range contains Infinity somewhere.\n\t\tif (!(isFinite(tileRange.min.x) &&\n\t\t      isFinite(tileRange.min.y) &&\n\t\t      isFinite(tileRange.max.x) &&\n\t\t      isFinite(tileRange.max.y))) { throw new Error('Attempted to load an infinite number of tiles'); }\n\n\t\tfor (var key in this._tiles) {\n\t\t\tvar c = this._tiles[key].coords;\n\t\t\tif (c.z !== this._tileZoom || !noPruneRange.contains(new Point(c.x, c.y))) {\n\t\t\t\tthis._tiles[key].current = false;\n\t\t\t}\n\t\t}\n\n\t\t// _update just loads more tiles. If the tile zoom level differs too much\n\t\t// from the map's, let _setView reset levels and prune old tiles.\n\t\tif (Math.abs(zoom - this._tileZoom) > 1) { this._setView(center, zoom); return; }\n\n\t\t// create a queue of coordinates to load tiles from\n\t\tfor (var j = tileRange.min.y; j <= tileRange.max.y; j++) {\n\t\t\tfor (var i = tileRange.min.x; i <= tileRange.max.x; i++) {\n\t\t\t\tvar coords = new Point(i, j);\n\t\t\t\tcoords.z = this._tileZoom;\n\n\t\t\t\tif (!this._isValidTile(coords)) { continue; }\n\n\t\t\t\tvar tile = this._tiles[this._tileCoordsToKey(coords)];\n\t\t\t\tif (tile) {\n\t\t\t\t\ttile.current = true;\n\t\t\t\t} else {\n\t\t\t\t\tqueue.push(coords);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t// sort tile queue to load tiles in order of their distance to center\n\t\tqueue.sort(function (a, b) {\n\t\t\treturn a.distanceTo(tileCenter) - b.distanceTo(tileCenter);\n\t\t});\n\n\t\tif (queue.length !== 0) {\n\t\t\t// if it's the first batch of tiles to load\n\t\t\tif (!this._loading) {\n\t\t\t\tthis._loading = true;\n\t\t\t\t// @event loading: Event\n\t\t\t\t// Fired when the grid layer starts loading tiles.\n\t\t\t\tthis.fire('loading');\n\t\t\t}\n\n\t\t\t// create DOM fragment to append tiles in one batch\n\t\t\tvar fragment = document.createDocumentFragment();\n\n\t\t\tfor (i = 0; i < queue.length; i++) {\n\t\t\t\tthis._addTile(queue[i], fragment);\n\t\t\t}\n\n\t\t\tthis._level.el.appendChild(fragment);\n\t\t}\n\t},\n\n\t_isValidTile: function (coords) {\n\t\tvar crs = this._map.options.crs;\n\n\t\tif (!crs.infinite) {\n\t\t\t// don't load tile if it's out of bounds and not wrapped\n\t\t\tvar bounds = this._globalTileRange;\n\t\t\tif ((!crs.wrapLng && (coords.x < bounds.min.x || coords.x > bounds.max.x)) ||\n\t\t\t    (!crs.wrapLat && (coords.y < bounds.min.y || coords.y > bounds.max.y))) { return false; }\n\t\t}\n\n\t\tif (!this.options.bounds) { return true; }\n\n\t\t// don't load tile if it doesn't intersect the bounds in options\n\t\tvar tileBounds = this._tileCoordsToBounds(coords);\n\t\treturn toLatLngBounds(this.options.bounds).overlaps(tileBounds);\n\t},\n\n\t_keyToBounds: function (key) {\n\t\treturn this._tileCoordsToBounds(this._keyToTileCoords(key));\n\t},\n\n\t_tileCoordsToNwSe: function (coords) {\n\t\tvar map = this._map,\n\t\t    tileSize = this.getTileSize(),\n\t\t    nwPoint = coords.scaleBy(tileSize),\n\t\t    sePoint = nwPoint.add(tileSize),\n\t\t    nw = map.unproject(nwPoint, coords.z),\n\t\t    se = map.unproject(sePoint, coords.z);\n\t\treturn [nw, se];\n\t},\n\n\t// converts tile coordinates to its geographical bounds\n\t_tileCoordsToBounds: function (coords) {\n\t\tvar bp = this._tileCoordsToNwSe(coords),\n\t\t    bounds = new LatLngBounds(bp[0], bp[1]);\n\n\t\tif (!this.options.noWrap) {\n\t\t\tbounds = this._map.wrapLatLngBounds(bounds);\n\t\t}\n\t\treturn bounds;\n\t},\n\t// converts tile coordinates to key for the tile cache\n\t_tileCoordsToKey: function (coords) {\n\t\treturn coords.x + ':' + coords.y + ':' + coords.z;\n\t},\n\n\t// converts tile cache key to coordinates\n\t_keyToTileCoords: function (key) {\n\t\tvar k = key.split(':'),\n\t\t    coords = new Point(+k[0], +k[1]);\n\t\tcoords.z = +k[2];\n\t\treturn coords;\n\t},\n\n\t_removeTile: function (key) {\n\t\tvar tile = this._tiles[key];\n\t\tif (!tile) { return; }\n\n\t\tremove(tile.el);\n\n\t\tdelete this._tiles[key];\n\n\t\t// @event tileunload: TileEvent\n\t\t// Fired when a tile is removed (e.g. when a tile goes off the screen).\n\t\tthis.fire('tileunload', {\n\t\t\ttile: tile.el,\n\t\t\tcoords: this._keyToTileCoords(key)\n\t\t});\n\t},\n\n\t_initTile: function (tile) {\n\t\taddClass(tile, 'leaflet-tile');\n\n\t\tvar tileSize = this.getTileSize();\n\t\ttile.style.width = tileSize.x + 'px';\n\t\ttile.style.height = tileSize.y + 'px';\n\n\t\ttile.onselectstart = falseFn;\n\t\ttile.onmousemove = falseFn;\n\n\t\t// update opacity on tiles in IE7-8 because of filter inheritance problems\n\t\tif (ielt9 && this.options.opacity < 1) {\n\t\t\tsetOpacity(tile, this.options.opacity);\n\t\t}\n\n\t\t// without this hack, tiles disappear after zoom on Chrome for Android\n\t\t// https://github.com/Leaflet/Leaflet/issues/2078\n\t\tif (android && !android23) {\n\t\t\ttile.style.WebkitBackfaceVisibility = 'hidden';\n\t\t}\n\t},\n\n\t_addTile: function (coords, container) {\n\t\tvar tilePos = this._getTilePos(coords),\n\t\t    key = this._tileCoordsToKey(coords);\n\n\t\tvar tile = this.createTile(this._wrapCoords(coords), bind(this._tileReady, this, coords));\n\n\t\tthis._initTile(tile);\n\n\t\t// if createTile is defined with a second argument (\"done\" callback),\n\t\t// we know that tile is async and will be ready later; otherwise\n\t\tif (this.createTile.length < 2) {\n\t\t\t// mark tile as ready, but delay one frame for opacity animation to happen\n\t\t\trequestAnimFrame(bind(this._tileReady, this, coords, null, tile));\n\t\t}\n\n\t\tsetPosition(tile, tilePos);\n\n\t\t// save tile in cache\n\t\tthis._tiles[key] = {\n\t\t\tel: tile,\n\t\t\tcoords: coords,\n\t\t\tcurrent: true\n\t\t};\n\n\t\tcontainer.appendChild(tile);\n\t\t// @event tileloadstart: TileEvent\n\t\t// Fired when a tile is requested and starts loading.\n\t\tthis.fire('tileloadstart', {\n\t\t\ttile: tile,\n\t\t\tcoords: coords\n\t\t});\n\t},\n\n\t_tileReady: function (coords, err, tile) {\n\t\tif (err) {\n\t\t\t// @event tileerror: TileErrorEvent\n\t\t\t// Fired when there is an error loading a tile.\n\t\t\tthis.fire('tileerror', {\n\t\t\t\terror: err,\n\t\t\t\ttile: tile,\n\t\t\t\tcoords: coords\n\t\t\t});\n\t\t}\n\n\t\tvar key = this._tileCoordsToKey(coords);\n\n\t\ttile = this._tiles[key];\n\t\tif (!tile) { return; }\n\n\t\ttile.loaded = +new Date();\n\t\tif (this._map._fadeAnimated) {\n\t\t\tsetOpacity(tile.el, 0);\n\t\t\tcancelAnimFrame(this._fadeFrame);\n\t\t\tthis._fadeFrame = requestAnimFrame(this._updateOpacity, this);\n\t\t} else {\n\t\t\ttile.active = true;\n\t\t\tthis._pruneTiles();\n\t\t}\n\n\t\tif (!err) {\n\t\t\taddClass(tile.el, 'leaflet-tile-loaded');\n\n\t\t\t// @event tileload: TileEvent\n\t\t\t// Fired when a tile loads.\n\t\t\tthis.fire('tileload', {\n\t\t\t\ttile: tile.el,\n\t\t\t\tcoords: coords\n\t\t\t});\n\t\t}\n\n\t\tif (this._noTilesToLoad()) {\n\t\t\tthis._loading = false;\n\t\t\t// @event load: Event\n\t\t\t// Fired when the grid layer loaded all visible tiles.\n\t\t\tthis.fire('load');\n\n\t\t\tif (ielt9 || !this._map._fadeAnimated) {\n\t\t\t\trequestAnimFrame(this._pruneTiles, this);\n\t\t\t} else {\n\t\t\t\t// Wait a bit more than 0.2 secs (the duration of the tile fade-in)\n\t\t\t\t// to trigger a pruning.\n\t\t\t\tsetTimeout(bind(this._pruneTiles, this), 250);\n\t\t\t}\n\t\t}\n\t},\n\n\t_getTilePos: function (coords) {\n\t\treturn coords.scaleBy(this.getTileSize()).subtract(this._level.origin);\n\t},\n\n\t_wrapCoords: function (coords) {\n\t\tvar newCoords = new Point(\n\t\t\tthis._wrapX ? wrapNum(coords.x, this._wrapX) : coords.x,\n\t\t\tthis._wrapY ? wrapNum(coords.y, this._wrapY) : coords.y);\n\t\tnewCoords.z = coords.z;\n\t\treturn newCoords;\n\t},\n\n\t_pxBoundsToTileRange: function (bounds) {\n\t\tvar tileSize = this.getTileSize();\n\t\treturn new Bounds(\n\t\t\tbounds.min.unscaleBy(tileSize).floor(),\n\t\t\tbounds.max.unscaleBy(tileSize).ceil().subtract([1, 1]));\n\t},\n\n\t_noTilesToLoad: function () {\n\t\tfor (var key in this._tiles) {\n\t\t\tif (!this._tiles[key].loaded) { return false; }\n\t\t}\n\t\treturn true;\n\t}\n});\n\n// @factory L.gridLayer(options?: GridLayer options)\n// Creates a new instance of GridLayer with the supplied options.\nfunction gridLayer(options) {\n\treturn new GridLayer(options);\n}\n\n/*\r\n * @class TileLayer\r\n * @inherits GridLayer\r\n * @aka L.TileLayer\r\n * Used to load and display tile layers on the map. Note that most tile servers require attribution, which you can set under `Layer`. Extends `GridLayer`.\r\n *\r\n * @example\r\n *\r\n * ```js\r\n * L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: 'Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>'}).addTo(map);\r\n * ```\r\n *\r\n * @section URL template\r\n * @example\r\n *\r\n * A string of the following form:\r\n *\r\n * ```\r\n * 'http://{s}.somedomain.com/blabla/{z}/{x}/{y}{r}.png'\r\n * ```\r\n *\r\n * `{s}` means one of the available subdomains (used sequentially to help with browser parallel requests per domain limitation; subdomain values are specified in options; `a`, `b` or `c` by default, can be omitted), `{z}` — zoom level, `{x}` and `{y}` — tile coordinates. `{r}` can be used to add \"&commat;2x\" to the URL to load retina tiles.\r\n *\r\n * You can use custom keys in the template, which will be [evaluated](#util-template) from TileLayer options, like this:\r\n *\r\n * ```\r\n * L.tileLayer('http://{s}.somedomain.com/{foo}/{z}/{x}/{y}.png', {foo: 'bar'});\r\n * ```\r\n */\r\n\r\n\r\nvar TileLayer = GridLayer.extend({\r\n\r\n\t// @section\r\n\t// @aka TileLayer options\r\n\toptions: {\r\n\t\t// @option minZoom: Number = 0\r\n\t\t// The minimum zoom level down to which this layer will be displayed (inclusive).\r\n\t\tminZoom: 0,\r\n\r\n\t\t// @option maxZoom: Number = 18\r\n\t\t// The maximum zoom level up to which this layer will be displayed (inclusive).\r\n\t\tmaxZoom: 18,\r\n\r\n\t\t// @option subdomains: String|String[] = 'abc'\r\n\t\t// Subdomains of the tile service. Can be passed in the form of one string (where each letter is a subdomain name) or an array of strings.\r\n\t\tsubdomains: 'abc',\r\n\r\n\t\t// @option errorTileUrl: String = ''\r\n\t\t// URL to the tile image to show in place of the tile that failed to load.\r\n\t\terrorTileUrl: '',\r\n\r\n\t\t// @option zoomOffset: Number = 0\r\n\t\t// The zoom number used in tile URLs will be offset with this value.\r\n\t\tzoomOffset: 0,\r\n\r\n\t\t// @option tms: Boolean = false\r\n\t\t// If `true`, inverses Y axis numbering for tiles (turn this on for [TMS](https://en.wikipedia.org/wiki/Tile_Map_Service) services).\r\n\t\ttms: false,\r\n\r\n\t\t// @option zoomReverse: Boolean = false\r\n\t\t// If set to true, the zoom number used in tile URLs will be reversed (`maxZoom - zoom` instead of `zoom`)\r\n\t\tzoomReverse: false,\r\n\r\n\t\t// @option detectRetina: Boolean = false\r\n\t\t// If `true` and user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution.\r\n\t\tdetectRetina: false,\r\n\r\n\t\t// @option crossOrigin: Boolean|String = false\r\n\t\t// Whether the crossOrigin attribute will be added to the tiles.\r\n\t\t// If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.\r\n\t\t// Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.\r\n\t\tcrossOrigin: false\r\n\t},\r\n\r\n\tinitialize: function (url, options) {\r\n\r\n\t\tthis._url = url;\r\n\r\n\t\toptions = setOptions(this, options);\r\n\r\n\t\t// detecting retina displays, adjusting tileSize and zoom levels\r\n\t\tif (options.detectRetina && retina && options.maxZoom > 0) {\r\n\r\n\t\t\toptions.tileSize = Math.floor(options.tileSize / 2);\r\n\r\n\t\t\tif (!options.zoomReverse) {\r\n\t\t\t\toptions.zoomOffset++;\r\n\t\t\t\toptions.maxZoom--;\r\n\t\t\t} else {\r\n\t\t\t\toptions.zoomOffset--;\r\n\t\t\t\toptions.minZoom++;\r\n\t\t\t}\r\n\r\n\t\t\toptions.minZoom = Math.max(0, options.minZoom);\r\n\t\t}\r\n\r\n\t\tif (typeof options.subdomains === 'string') {\r\n\t\t\toptions.subdomains = options.subdomains.split('');\r\n\t\t}\r\n\r\n\t\t// for https://github.com/Leaflet/Leaflet/issues/137\r\n\t\tif (!android) {\r\n\t\t\tthis.on('tileunload', this._onTileRemove);\r\n\t\t}\r\n\t},\r\n\r\n\t// @method setUrl(url: String, noRedraw?: Boolean): this\r\n\t// Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).\r\n\t// If the URL does not change, the layer will not be redrawn unless\r\n\t// the noRedraw parameter is set to false.\r\n\tsetUrl: function (url, noRedraw) {\r\n\t\tif (this._url === url && noRedraw === undefined) {\r\n\t\t\tnoRedraw = true;\r\n\t\t}\r\n\r\n\t\tthis._url = url;\r\n\r\n\t\tif (!noRedraw) {\r\n\t\t\tthis.redraw();\r\n\t\t}\r\n\t\treturn this;\r\n\t},\r\n\r\n\t// @method createTile(coords: Object, done?: Function): HTMLElement\r\n\t// Called only internally, overrides GridLayer's [`createTile()`](#gridlayer-createtile)\r\n\t// to return an `<img>` HTML element with the appropriate image URL given `coords`. The `done`\r\n\t// callback is called when the tile has been loaded.\r\n\tcreateTile: function (coords, done) {\r\n\t\tvar tile = document.createElement('img');\r\n\r\n\t\ton(tile, 'load', bind(this._tileOnLoad, this, done, tile));\r\n\t\ton(tile, 'error', bind(this._tileOnError, this, done, tile));\r\n\r\n\t\tif (this.options.crossOrigin || this.options.crossOrigin === '') {\r\n\t\t\ttile.crossOrigin = this.options.crossOrigin === true ? '' : this.options.crossOrigin;\r\n\t\t}\r\n\r\n\t\t/*\r\n\t\t Alt tag is set to empty string to keep screen readers from reading URL and for compliance reasons\r\n\t\t http://www.w3.org/TR/WCAG20-TECHS/H67\r\n\t\t*/\r\n\t\ttile.alt = '';\r\n\r\n\t\t/*\r\n\t\t Set role=\"presentation\" to force screen readers to ignore this\r\n\t\t https://www.w3.org/TR/wai-aria/roles#textalternativecomputation\r\n\t\t*/\r\n\t\ttile.setAttribute('role', 'presentation');\r\n\r\n\t\ttile.src = this.getTileUrl(coords);\r\n\r\n\t\treturn tile;\r\n\t},\r\n\r\n\t// @section Extension methods\r\n\t// @uninheritable\r\n\t// Layers extending `TileLayer` might reimplement the following method.\r\n\t// @method getTileUrl(coords: Object): String\r\n\t// Called only internally, returns the URL for a tile given its coordinates.\r\n\t// Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.\r\n\tgetTileUrl: function (coords) {\r\n\t\tvar data = {\r\n\t\t\tr: retina ? '@2x' : '',\r\n\t\t\ts: this._getSubdomain(coords),\r\n\t\t\tx: coords.x,\r\n\t\t\ty: coords.y,\r\n\t\t\tz: this._getZoomForUrl()\r\n\t\t};\r\n\t\tif (this._map && !this._map.options.crs.infinite) {\r\n\t\t\tvar invertedY = this._globalTileRange.max.y - coords.y;\r\n\t\t\tif (this.options.tms) {\r\n\t\t\t\tdata['y'] = invertedY;\r\n\t\t\t}\r\n\t\t\tdata['-y'] = invertedY;\r\n\t\t}\r\n\r\n\t\treturn template(this._url, extend(data, this.options));\r\n\t},\r\n\r\n\t_tileOnLoad: function (done, tile) {\r\n\t\t// For https://github.com/Leaflet/Leaflet/issues/3332\r\n\t\tif (ielt9) {\r\n\t\t\tsetTimeout(bind(done, this, null, tile), 0);\r\n\t\t} else {\r\n\t\t\tdone(null, tile);\r\n\t\t}\r\n\t},\r\n\r\n\t_tileOnError: function (done, tile, e) {\r\n\t\tvar errorUrl = this.options.errorTileUrl;\r\n\t\tif (errorUrl && tile.getAttribute('src') !== errorUrl) {\r\n\t\t\ttile.src = errorUrl;\r\n\t\t}\r\n\t\tdone(e, tile);\r\n\t},\r\n\r\n\t_onTileRemove: function (e) {\r\n\t\te.tile.onload = null;\r\n\t},\r\n\r\n\t_getZoomForUrl: function () {\r\n\t\tvar zoom = this._tileZoom,\r\n\t\tmaxZoom = this.options.maxZoom,\r\n\t\tzoomReverse = this.options.zoomReverse,\r\n\t\tzoomOffset = this.options.zoomOffset;\r\n\r\n\t\tif (zoomReverse) {\r\n\t\t\tzoom = maxZoom - zoom;\r\n\t\t}\r\n\r\n\t\treturn zoom + zoomOffset;\r\n\t},\r\n\r\n\t_getSubdomain: function (tilePoint) {\r\n\t\tvar index = Math.abs(tilePoint.x + tilePoint.y) % this.options.subdomains.length;\r\n\t\treturn this.options.subdomains[index];\r\n\t},\r\n\r\n\t// stops loading all tiles in the background layer\r\n\t_abortLoading: function () {\r\n\t\tvar i, tile;\r\n\t\tfor (i in this._tiles) {\r\n\t\t\tif (this._tiles[i].coords.z !== this._tileZoom) {\r\n\t\t\t\ttile = this._tiles[i].el;\r\n\r\n\t\t\t\ttile.onload = falseFn;\r\n\t\t\t\ttile.onerror = falseFn;\r\n\r\n\t\t\t\tif (!tile.complete) {\r\n\t\t\t\t\ttile.src = emptyImageUrl;\r\n\t\t\t\t\tremove(tile);\r\n\t\t\t\t\tdelete this._tiles[i];\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t},\r\n\r\n\t_removeTile: function (key) {\r\n\t\tvar tile = this._tiles[key];\r\n\t\tif (!tile) { return; }\r\n\r\n\t\t// Cancels any pending http requests associated with the tile\r\n\t\t// unless we're on Android's stock browser,\r\n\t\t// see https://github.com/Leaflet/Leaflet/issues/137\r\n\t\tif (!androidStock) {\r\n\t\t\ttile.el.setAttribute('src', emptyImageUrl);\r\n\t\t}\r\n\r\n\t\treturn GridLayer.prototype._removeTile.call(this, key);\r\n\t},\r\n\r\n\t_tileReady: function (coords, err, tile) {\r\n\t\tif (!this._map || (tile && tile.getAttribute('src') === emptyImageUrl)) {\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\treturn GridLayer.prototype._tileReady.call(this, coords, err, tile);\r\n\t}\r\n});\r\n\r\n\r\n// @factory L.tilelayer(urlTemplate: String, options?: TileLayer options)\r\n// Instantiates a tile layer object given a `URL template` and optionally an options object.\r\n\r\nfunction tileLayer(url, options) {\r\n\treturn new TileLayer(url, options);\r\n}\n\n/*\r\n * @class TileLayer.WMS\r\n * @inherits TileLayer\r\n * @aka L.TileLayer.WMS\r\n * Used to display [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services as tile layers on the map. Extends `TileLayer`.\r\n *\r\n * @example\r\n *\r\n * ```js\r\n * var nexrad = L.tileLayer.wms(\"http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi\", {\r\n * \tlayers: 'nexrad-n0r-900913',\r\n * \tformat: 'image/png',\r\n * \ttransparent: true,\r\n * \tattribution: \"Weather data © 2012 IEM Nexrad\"\r\n * });\r\n * ```\r\n */\r\n\r\nvar TileLayerWMS = TileLayer.extend({\r\n\r\n\t// @section\r\n\t// @aka TileLayer.WMS options\r\n\t// If any custom options not documented here are used, they will be sent to the\r\n\t// WMS server as extra parameters in each request URL. This can be useful for\r\n\t// [non-standard vendor WMS parameters](http://docs.geoserver.org/stable/en/user/services/wms/vendor.html).\r\n\tdefaultWmsParams: {\r\n\t\tservice: 'WMS',\r\n\t\trequest: 'GetMap',\r\n\r\n\t\t// @option layers: String = ''\r\n\t\t// **(required)** Comma-separated list of WMS layers to show.\r\n\t\tlayers: '',\r\n\r\n\t\t// @option styles: String = ''\r\n\t\t// Comma-separated list of WMS styles.\r\n\t\tstyles: '',\r\n\r\n\t\t// @option format: String = 'image/jpeg'\r\n\t\t// WMS image format (use `'image/png'` for layers with transparency).\r\n\t\tformat: 'image/jpeg',\r\n\r\n\t\t// @option transparent: Boolean = false\r\n\t\t// If `true`, the WMS service will return images with transparency.\r\n\t\ttransparent: false,\r\n\r\n\t\t// @option version: String = '1.1.1'\r\n\t\t// Version of the WMS service to use\r\n\t\tversion: '1.1.1'\r\n\t},\r\n\r\n\toptions: {\r\n\t\t// @option crs: CRS = null\r\n\t\t// Coordinate Reference System to use for the WMS requests, defaults to\r\n\t\t// map CRS. Don't change this if you're not sure what it means.\r\n\t\tcrs: null,\r\n\r\n\t\t// @option uppercase: Boolean = false\r\n\t\t// If `true`, WMS request parameter keys will be uppercase.\r\n\t\tuppercase: false\r\n\t},\r\n\r\n\tinitialize: function (url, options) {\r\n\r\n\t\tthis._url = url;\r\n\r\n\t\tvar wmsParams = extend({}, this.defaultWmsParams);\r\n\r\n\t\t// all keys that are not TileLayer options go to WMS params\r\n\t\tfor (var i in options) {\r\n\t\t\tif (!(i in this.options)) {\r\n\t\t\t\twmsParams[i] = options[i];\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\toptions = setOptions(this, options);\r\n\r\n\t\tvar realRetina = options.detectRetina && retina ? 2 : 1;\r\n\t\tvar tileSize = this.getTileSize();\r\n\t\twmsParams.width = tileSize.x * realRetina;\r\n\t\twmsParams.height = tileSize.y * realRetina;\r\n\r\n\t\tthis.wmsParams = wmsParams;\r\n\t},\r\n\r\n\tonAdd: function (map) {\r\n\r\n\t\tthis._crs = this.options.crs || map.options.crs;\r\n\t\tthis._wmsVersion = parseFloat(this.wmsParams.version);\r\n\r\n\t\tvar projectionKey = this._wmsVersion >= 1.3 ? 'crs' : 'srs';\r\n\t\tthis.wmsParams[projectionKey] = this._crs.code;\r\n\r\n\t\tTileLayer.prototype.onAdd.call(this, map);\r\n\t},\r\n\r\n\tgetTileUrl: function (coords) {\r\n\r\n\t\tvar tileBounds = this._tileCoordsToNwSe(coords),\r\n\t\t    crs = this._crs,\r\n\t\t    bounds = toBounds(crs.project(tileBounds[0]), crs.project(tileBounds[1])),\r\n\t\t    min = bounds.min,\r\n\t\t    max = bounds.max,\r\n\t\t    bbox = (this._wmsVersion >= 1.3 && this._crs === EPSG4326 ?\r\n\t\t    [min.y, min.x, max.y, max.x] :\r\n\t\t    [min.x, min.y, max.x, max.y]).join(','),\r\n\t\t    url = TileLayer.prototype.getTileUrl.call(this, coords);\r\n\t\treturn url +\r\n\t\t\tgetParamString(this.wmsParams, url, this.options.uppercase) +\r\n\t\t\t(this.options.uppercase ? '&BBOX=' : '&bbox=') + bbox;\r\n\t},\r\n\r\n\t// @method setParams(params: Object, noRedraw?: Boolean): this\r\n\t// Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).\r\n\tsetParams: function (params, noRedraw) {\r\n\r\n\t\textend(this.wmsParams, params);\r\n\r\n\t\tif (!noRedraw) {\r\n\t\t\tthis.redraw();\r\n\t\t}\r\n\r\n\t\treturn this;\r\n\t}\r\n});\r\n\r\n\r\n// @factory L.tileLayer.wms(baseUrl: String, options: TileLayer.WMS options)\r\n// Instantiates a WMS tile layer object given a base URL of the WMS service and a WMS parameters/options object.\r\nfunction tileLayerWMS(url, options) {\r\n\treturn new TileLayerWMS(url, options);\r\n}\n\nTileLayer.WMS = TileLayerWMS;\ntileLayer.wms = tileLayerWMS;\n\n/*\n * @class Renderer\n * @inherits Layer\n * @aka L.Renderer\n *\n * Base class for vector renderer implementations (`SVG`, `Canvas`). Handles the\n * DOM container of the renderer, its bounds, and its zoom animation.\n *\n * A `Renderer` works as an implicit layer group for all `Path`s - the renderer\n * itself can be added or removed to the map. All paths use a renderer, which can\n * be implicit (the map will decide the type of renderer and use it automatically)\n * or explicit (using the [`renderer`](#path-renderer) option of the path).\n *\n * Do not use this class directly, use `SVG` and `Canvas` instead.\n *\n * @event update: Event\n * Fired when the renderer updates its bounds, center and zoom, for example when\n * its map has moved\n */\n\nvar Renderer = Layer.extend({\n\n\t// @section\n\t// @aka Renderer options\n\toptions: {\n\t\t// @option padding: Number = 0.1\n\t\t// How much to extend the clip area around the map view (relative to its size)\n\t\t// e.g. 0.1 would be 10% of map view in each direction\n\t\tpadding: 0.1,\n\n\t\t// @option tolerance: Number = 0\n\t\t// How much to extend click tolerance round a path/object on the map\n\t\ttolerance : 0\n\t},\n\n\tinitialize: function (options) {\n\t\tsetOptions(this, options);\n\t\tstamp(this);\n\t\tthis._layers = this._layers || {};\n\t},\n\n\tonAdd: function () {\n\t\tif (!this._container) {\n\t\t\tthis._initContainer(); // defined by renderer implementations\n\n\t\t\tif (this._zoomAnimated) {\n\t\t\t\taddClass(this._container, 'leaflet-zoom-animated');\n\t\t\t}\n\t\t}\n\n\t\tthis.getPane().appendChild(this._container);\n\t\tthis._update();\n\t\tthis.on('update', this._updatePaths, this);\n\t},\n\n\tonRemove: function () {\n\t\tthis.off('update', this._updatePaths, this);\n\t\tthis._destroyContainer();\n\t},\n\n\tgetEvents: function () {\n\t\tvar events = {\n\t\t\tviewreset: this._reset,\n\t\t\tzoom: this._onZoom,\n\t\t\tmoveend: this._update,\n\t\t\tzoomend: this._onZoomEnd\n\t\t};\n\t\tif (this._zoomAnimated) {\n\t\t\tevents.zoomanim = this._onAnimZoom;\n\t\t}\n\t\treturn events;\n\t},\n\n\t_onAnimZoom: function (ev) {\n\t\tthis._updateTransform(ev.center, ev.zoom);\n\t},\n\n\t_onZoom: function () {\n\t\tthis._updateTransform(this._map.getCenter(), this._map.getZoom());\n\t},\n\n\t_updateTransform: function (center, zoom) {\n\t\tvar scale = this._map.getZoomScale(zoom, this._zoom),\n\t\t    position = getPosition(this._container),\n\t\t    viewHalf = this._map.getSize().multiplyBy(0.5 + this.options.padding),\n\t\t    currentCenterPoint = this._map.project(this._center, zoom),\n\t\t    destCenterPoint = this._map.project(center, zoom),\n\t\t    centerOffset = destCenterPoint.subtract(currentCenterPoint),\n\n\t\t    topLeftOffset = viewHalf.multiplyBy(-scale).add(position).add(viewHalf).subtract(centerOffset);\n\n\t\tif (any3d) {\n\t\t\tsetTransform(this._container, topLeftOffset, scale);\n\t\t} else {\n\t\t\tsetPosition(this._container, topLeftOffset);\n\t\t}\n\t},\n\n\t_reset: function () {\n\t\tthis._update();\n\t\tthis._updateTransform(this._center, this._zoom);\n\n\t\tfor (var id in this._layers) {\n\t\t\tthis._layers[id]._reset();\n\t\t}\n\t},\n\n\t_onZoomEnd: function () {\n\t\tfor (var id in this._layers) {\n\t\t\tthis._layers[id]._project();\n\t\t}\n\t},\n\n\t_updatePaths: function () {\n\t\tfor (var id in this._layers) {\n\t\t\tthis._layers[id]._update();\n\t\t}\n\t},\n\n\t_update: function () {\n\t\t// Update pixel bounds of renderer container (for positioning/sizing/clipping later)\n\t\t// Subclasses are responsible of firing the 'update' event.\n\t\tvar p = this.options.padding,\n\t\t    size = this._map.getSize(),\n\t\t    min = this._map.containerPointToLayerPoint(size.multiplyBy(-p)).round();\n\n\t\tthis._bounds = new Bounds(min, min.add(size.multiplyBy(1 + p * 2)).round());\n\n\t\tthis._center = this._map.getCenter();\n\t\tthis._zoom = this._map.getZoom();\n\t}\n});\n\n/*\n * @class Canvas\n * @inherits Renderer\n * @aka L.Canvas\n *\n * Allows vector layers to be displayed with [`<canvas>`](https://developer.mozilla.org/docs/Web/API/Canvas_API).\n * Inherits `Renderer`.\n *\n * Due to [technical limitations](http://caniuse.com/#search=canvas), Canvas is not\n * available in all web browsers, notably IE8, and overlapping geometries might\n * not display properly in some edge cases.\n *\n * @example\n *\n * Use Canvas by default for all paths in the map:\n *\n * ```js\n * var map = L.map('map', {\n * \trenderer: L.canvas()\n * });\n * ```\n *\n * Use a Canvas renderer with extra padding for specific vector geometries:\n *\n * ```js\n * var map = L.map('map');\n * var myRenderer = L.canvas({ padding: 0.5 });\n * var line = L.polyline( coordinates, { renderer: myRenderer } );\n * var circle = L.circle( center, { renderer: myRenderer } );\n * ```\n */\n\nvar Canvas = Renderer.extend({\n\tgetEvents: function () {\n\t\tvar events = Renderer.prototype.getEvents.call(this);\n\t\tevents.viewprereset = this._onViewPreReset;\n\t\treturn events;\n\t},\n\n\t_onViewPreReset: function () {\n\t\t// Set a flag so that a viewprereset+moveend+viewreset only updates&redraws once\n\t\tthis._postponeUpdatePaths = true;\n\t},\n\n\tonAdd: function () {\n\t\tRenderer.prototype.onAdd.call(this);\n\n\t\t// Redraw vectors since canvas is cleared upon removal,\n\t\t// in case of removing the renderer itself from the map.\n\t\tthis._draw();\n\t},\n\n\t_initContainer: function () {\n\t\tvar container = this._container = document.createElement('canvas');\n\n\t\ton(container, 'mousemove', throttle(this._onMouseMove, 32, this), this);\n\t\ton(container, 'click dblclick mousedown mouseup contextmenu', this._onClick, this);\n\t\ton(container, 'mouseout', this._handleMouseOut, this);\n\n\t\tthis._ctx = container.getContext('2d');\n\t},\n\n\t_destroyContainer: function () {\n\t\tcancelAnimFrame(this._redrawRequest);\n\t\tdelete this._ctx;\n\t\tremove(this._container);\n\t\toff(this._container);\n\t\tdelete this._container;\n\t},\n\n\t_updatePaths: function () {\n\t\tif (this._postponeUpdatePaths) { return; }\n\n\t\tvar layer;\n\t\tthis._redrawBounds = null;\n\t\tfor (var id in this._layers) {\n\t\t\tlayer = this._layers[id];\n\t\t\tlayer._update();\n\t\t}\n\t\tthis._redraw();\n\t},\n\n\t_update: function () {\n\t\tif (this._map._animatingZoom && this._bounds) { return; }\n\n\t\tRenderer.prototype._update.call(this);\n\n\t\tvar b = this._bounds,\n\t\t    container = this._container,\n\t\t    size = b.getSize(),\n\t\t    m = retina ? 2 : 1;\n\n\t\tsetPosition(container, b.min);\n\n\t\t// set canvas size (also clearing it); use double size on retina\n\t\tcontainer.width = m * size.x;\n\t\tcontainer.height = m * size.y;\n\t\tcontainer.style.width = size.x + 'px';\n\t\tcontainer.style.height = size.y + 'px';\n\n\t\tif (retina) {\n\t\t\tthis._ctx.scale(2, 2);\n\t\t}\n\n\t\t// translate so we use the same path coordinates after canvas element moves\n\t\tthis._ctx.translate(-b.min.x, -b.min.y);\n\n\t\t// Tell paths to redraw themselves\n\t\tthis.fire('update');\n\t},\n\n\t_reset: function () {\n\t\tRenderer.prototype._reset.call(this);\n\n\t\tif (this._postponeUpdatePaths) {\n\t\t\tthis._postponeUpdatePaths = false;\n\t\t\tthis._updatePaths();\n\t\t}\n\t},\n\n\t_initPath: function (layer) {\n\t\tthis._updateDashArray(layer);\n\t\tthis._layers[stamp(layer)] = layer;\n\n\t\tvar order = layer._order = {\n\t\t\tlayer: layer,\n\t\t\tprev: this._drawLast,\n\t\t\tnext: null\n\t\t};\n\t\tif (this._drawLast) { this._drawLast.next = order; }\n\t\tthis._drawLast = order;\n\t\tthis._drawFirst = this._drawFirst || this._drawLast;\n\t},\n\n\t_addPath: function (layer) {\n\t\tthis._requestRedraw(layer);\n\t},\n\n\t_removePath: function (layer) {\n\t\tvar order = layer._order;\n\t\tvar next = order.next;\n\t\tvar prev = order.prev;\n\n\t\tif (next) {\n\t\t\tnext.prev = prev;\n\t\t} else {\n\t\t\tthis._drawLast = prev;\n\t\t}\n\t\tif (prev) {\n\t\t\tprev.next = next;\n\t\t} else {\n\t\t\tthis._drawFirst = next;\n\t\t}\n\n\t\tdelete layer._order;\n\n\t\tdelete this._layers[stamp(layer)];\n\n\t\tthis._requestRedraw(layer);\n\t},\n\n\t_updatePath: function (layer) {\n\t\t// Redraw the union of the layer's old pixel\n\t\t// bounds and the new pixel bounds.\n\t\tthis._extendRedrawBounds(layer);\n\t\tlayer._project();\n\t\tlayer._update();\n\t\t// The redraw will extend the redraw bounds\n\t\t// with the new pixel bounds.\n\t\tthis._requestRedraw(layer);\n\t},\n\n\t_updateStyle: function (layer) {\n\t\tthis._updateDashArray(layer);\n\t\tthis._requestRedraw(layer);\n\t},\n\n\t_updateDashArray: function (layer) {\n\t\tif (typeof layer.options.dashArray === 'string') {\n\t\t\tvar parts = layer.options.dashArray.split(/[, ]+/),\n\t\t\t    dashArray = [],\n\t\t\t    dashValue,\n\t\t\t    i;\n\t\t\tfor (i = 0; i < parts.length; i++) {\n\t\t\t\tdashValue = Number(parts[i]);\n\t\t\t\t// Ignore dash array containing invalid lengths\n\t\t\t\tif (isNaN(dashValue)) { return; }\n\t\t\t\tdashArray.push(dashValue);\n\t\t\t}\n\t\t\tlayer.options._dashArray = dashArray;\n\t\t} else {\n\t\t\tlayer.options._dashArray = layer.options.dashArray;\n\t\t}\n\t},\n\n\t_requestRedraw: function (layer) {\n\t\tif (!this._map) { return; }\n\n\t\tthis._extendRedrawBounds(layer);\n\t\tthis._redrawRequest = this._redrawRequest || requestAnimFrame(this._redraw, this);\n\t},\n\n\t_extendRedrawBounds: function (layer) {\n\t\tif (layer._pxBounds) {\n\t\t\tvar padding = (layer.options.weight || 0) + 1;\n\t\t\tthis._redrawBounds = this._redrawBounds || new Bounds();\n\t\t\tthis._redrawBounds.extend(layer._pxBounds.min.subtract([padding, padding]));\n\t\t\tthis._redrawBounds.extend(layer._pxBounds.max.add([padding, padding]));\n\t\t}\n\t},\n\n\t_redraw: function () {\n\t\tthis._redrawRequest = null;\n\n\t\tif (this._redrawBounds) {\n\t\t\tthis._redrawBounds.min._floor();\n\t\t\tthis._redrawBounds.max._ceil();\n\t\t}\n\n\t\tthis._clear(); // clear layers in redraw bounds\n\t\tthis._draw(); // draw layers\n\n\t\tthis._redrawBounds = null;\n\t},\n\n\t_clear: function () {\n\t\tvar bounds = this._redrawBounds;\n\t\tif (bounds) {\n\t\t\tvar size = bounds.getSize();\n\t\t\tthis._ctx.clearRect(bounds.min.x, bounds.min.y, size.x, size.y);\n\t\t} else {\n\t\t\tthis._ctx.clearRect(0, 0, this._container.width, this._container.height);\n\t\t}\n\t},\n\n\t_draw: function () {\n\t\tvar layer, bounds = this._redrawBounds;\n\t\tthis._ctx.save();\n\t\tif (bounds) {\n\t\t\tvar size = bounds.getSize();\n\t\t\tthis._ctx.beginPath();\n\t\t\tthis._ctx.rect(bounds.min.x, bounds.min.y, size.x, size.y);\n\t\t\tthis._ctx.clip();\n\t\t}\n\n\t\tthis._drawing = true;\n\n\t\tfor (var order = this._drawFirst; order; order = order.next) {\n\t\t\tlayer = order.layer;\n\t\t\tif (!bounds || (layer._pxBounds && layer._pxBounds.intersects(bounds))) {\n\t\t\t\tlayer._updatePath();\n\t\t\t}\n\t\t}\n\n\t\tthis._drawing = false;\n\n\t\tthis._ctx.restore();  // Restore state before clipping.\n\t},\n\n\t_updatePoly: function (layer, closed) {\n\t\tif (!this._drawing) { return; }\n\n\t\tvar i, j, len2, p,\n\t\t    parts = layer._parts,\n\t\t    len = parts.length,\n\t\t    ctx = this._ctx;\n\n\t\tif (!len) { return; }\n\n\t\tctx.beginPath();\n\n\t\tfor (i = 0; i < len; i++) {\n\t\t\tfor (j = 0, len2 = parts[i].length; j < len2; j++) {\n\t\t\t\tp = parts[i][j];\n\t\t\t\tctx[j ? 'lineTo' : 'moveTo'](p.x, p.y);\n\t\t\t}\n\t\t\tif (closed) {\n\t\t\t\tctx.closePath();\n\t\t\t}\n\t\t}\n\n\t\tthis._fillStroke(ctx, layer);\n\n\t\t// TODO optimization: 1 fill/stroke for all features with equal style instead of 1 for each feature\n\t},\n\n\t_updateCircle: function (layer) {\n\n\t\tif (!this._drawing || layer._empty()) { return; }\n\n\t\tvar p = layer._point,\n\t\t    ctx = this._ctx,\n\t\t    r = Math.max(Math.round(layer._radius), 1),\n\t\t    s = (Math.max(Math.round(layer._radiusY), 1) || r) / r;\n\n\t\tif (s !== 1) {\n\t\t\tctx.save();\n\t\t\tctx.scale(1, s);\n\t\t}\n\n\t\tctx.beginPath();\n\t\tctx.arc(p.x, p.y / s, r, 0, Math.PI * 2, false);\n\n\t\tif (s !== 1) {\n\t\t\tctx.restore();\n\t\t}\n\n\t\tthis._fillStroke(ctx, layer);\n\t},\n\n\t_fillStroke: function (ctx, layer) {\n\t\tvar options = layer.options;\n\n\t\tif (options.fill) {\n\t\t\tctx.globalAlpha = options.fillOpacity;\n\t\t\tctx.fillStyle = options.fillColor || options.color;\n\t\t\tctx.fill(options.fillRule || 'evenodd');\n\t\t}\n\n\t\tif (options.stroke && options.weight !== 0) {\n\t\t\tif (ctx.setLineDash) {\n\t\t\t\tctx.setLineDash(layer.options && layer.options._dashArray || []);\n\t\t\t}\n\t\t\tctx.globalAlpha = options.opacity;\n\t\t\tctx.lineWidth = options.weight;\n\t\t\tctx.strokeStyle = options.color;\n\t\t\tctx.lineCap = options.lineCap;\n\t\t\tctx.lineJoin = options.lineJoin;\n\t\t\tctx.stroke();\n\t\t}\n\t},\n\n\t// Canvas obviously doesn't have mouse events for individual drawn objects,\n\t// so we emulate that by calculating what's under the mouse on mousemove/click manually\n\n\t_onClick: function (e) {\n\t\tvar point = this._map.mouseEventToLayerPoint(e), layer, clickedLayer;\n\n\t\tfor (var order = this._drawFirst; order; order = order.next) {\n\t\t\tlayer = order.layer;\n\t\t\tif (layer.options.interactive && layer._containsPoint(point) && !this._map._draggableMoved(layer)) {\n\t\t\t\tclickedLayer = layer;\n\t\t\t}\n\t\t}\n\t\tif (clickedLayer)  {\n\t\t\tfakeStop(e);\n\t\t\tthis._fireEvent([clickedLayer], e);\n\t\t}\n\t},\n\n\t_onMouseMove: function (e) {\n\t\tif (!this._map || this._map.dragging.moving() || this._map._animatingZoom) { return; }\n\n\t\tvar point = this._map.mouseEventToLayerPoint(e);\n\t\tthis._handleMouseHover(e, point);\n\t},\n\n\n\t_handleMouseOut: function (e) {\n\t\tvar layer = this._hoveredLayer;\n\t\tif (layer) {\n\t\t\t// if we're leaving the layer, fire mouseout\n\t\t\tremoveClass(this._container, 'leaflet-interactive');\n\t\t\tthis._fireEvent([layer], e, 'mouseout');\n\t\t\tthis._hoveredLayer = null;\n\t\t}\n\t},\n\n\t_handleMouseHover: function (e, point) {\n\t\tvar layer, candidateHoveredLayer;\n\n\t\tfor (var order = this._drawFirst; order; order = order.next) {\n\t\t\tlayer = order.layer;\n\t\t\tif (layer.options.interactive && layer._containsPoint(point)) {\n\t\t\t\tcandidateHoveredLayer = layer;\n\t\t\t}\n\t\t}\n\n\t\tif (candidateHoveredLayer !== this._hoveredLayer) {\n\t\t\tthis._handleMouseOut(e);\n\n\t\t\tif (candidateHoveredLayer) {\n\t\t\t\taddClass(this._container, 'leaflet-interactive'); // change cursor\n\t\t\t\tthis._fireEvent([candidateHoveredLayer], e, 'mouseover');\n\t\t\t\tthis._hoveredLayer = candidateHoveredLayer;\n\t\t\t}\n\t\t}\n\n\t\tif (this._hoveredLayer) {\n\t\t\tthis._fireEvent([this._hoveredLayer], e);\n\t\t}\n\t},\n\n\t_fireEvent: function (layers, e, type) {\n\t\tthis._map._fireDOMEvent(e, type || e.type, layers);\n\t},\n\n\t_bringToFront: function (layer) {\n\t\tvar order = layer._order;\n\n\t\tif (!order) { return; }\n\n\t\tvar next = order.next;\n\t\tvar prev = order.prev;\n\n\t\tif (next) {\n\t\t\tnext.prev = prev;\n\t\t} else {\n\t\t\t// Already last\n\t\t\treturn;\n\t\t}\n\t\tif (prev) {\n\t\t\tprev.next = next;\n\t\t} else if (next) {\n\t\t\t// Update first entry unless this is the\n\t\t\t// single entry\n\t\t\tthis._drawFirst = next;\n\t\t}\n\n\t\torder.prev = this._drawLast;\n\t\tthis._drawLast.next = order;\n\n\t\torder.next = null;\n\t\tthis._drawLast = order;\n\n\t\tthis._requestRedraw(layer);\n\t},\n\n\t_bringToBack: function (layer) {\n\t\tvar order = layer._order;\n\n\t\tif (!order) { return; }\n\n\t\tvar next = order.next;\n\t\tvar prev = order.prev;\n\n\t\tif (prev) {\n\t\t\tprev.next = next;\n\t\t} else {\n\t\t\t// Already first\n\t\t\treturn;\n\t\t}\n\t\tif (next) {\n\t\t\tnext.prev = prev;\n\t\t} else if (prev) {\n\t\t\t// Update last entry unless this is the\n\t\t\t// single entry\n\t\t\tthis._drawLast = prev;\n\t\t}\n\n\t\torder.prev = null;\n\n\t\torder.next = this._drawFirst;\n\t\tthis._drawFirst.prev = order;\n\t\tthis._drawFirst = order;\n\n\t\tthis._requestRedraw(layer);\n\t}\n});\n\n// @factory L.canvas(options?: Renderer options)\n// Creates a Canvas renderer with the given options.\nfunction canvas$1(options) {\n\treturn canvas ? new Canvas(options) : null;\n}\n\n/*\n * Thanks to Dmitry Baranovsky and his Raphael library for inspiration!\n */\n\n\nvar vmlCreate = (function () {\n\ttry {\n\t\tdocument.namespaces.add('lvml', 'urn:schemas-microsoft-com:vml');\n\t\treturn function (name) {\n\t\t\treturn document.createElement('<lvml:' + name + ' class=\"lvml\">');\n\t\t};\n\t} catch (e) {\n\t\treturn function (name) {\n\t\t\treturn document.createElement('<' + name + ' xmlns=\"urn:schemas-microsoft.com:vml\" class=\"lvml\">');\n\t\t};\n\t}\n})();\n\n\n/*\n * @class SVG\n *\n *\n * VML was deprecated in 2012, which means VML functionality exists only for backwards compatibility\n * with old versions of Internet Explorer.\n */\n\n// mixin to redefine some SVG methods to handle VML syntax which is similar but with some differences\nvar vmlMixin = {\n\n\t_initContainer: function () {\n\t\tthis._container = create$1('div', 'leaflet-vml-container');\n\t},\n\n\t_update: function () {\n\t\tif (this._map._animatingZoom) { return; }\n\t\tRenderer.prototype._update.call(this);\n\t\tthis.fire('update');\n\t},\n\n\t_initPath: function (layer) {\n\t\tvar container = layer._container = vmlCreate('shape');\n\n\t\taddClass(container, 'leaflet-vml-shape ' + (this.options.className || ''));\n\n\t\tcontainer.coordsize = '1 1';\n\n\t\tlayer._path = vmlCreate('path');\n\t\tcontainer.appendChild(layer._path);\n\n\t\tthis._updateStyle(layer);\n\t\tthis._layers[stamp(layer)] = layer;\n\t},\n\n\t_addPath: function (layer) {\n\t\tvar container = layer._container;\n\t\tthis._container.appendChild(container);\n\n\t\tif (layer.options.interactive) {\n\t\t\tlayer.addInteractiveTarget(container);\n\t\t}\n\t},\n\n\t_removePath: function (layer) {\n\t\tvar container = layer._container;\n\t\tremove(container);\n\t\tlayer.removeInteractiveTarget(container);\n\t\tdelete this._layers[stamp(layer)];\n\t},\n\n\t_updateStyle: function (layer) {\n\t\tvar stroke = layer._stroke,\n\t\t    fill = layer._fill,\n\t\t    options = layer.options,\n\t\t    container = layer._container;\n\n\t\tcontainer.stroked = !!options.stroke;\n\t\tcontainer.filled = !!options.fill;\n\n\t\tif (options.stroke) {\n\t\t\tif (!stroke) {\n\t\t\t\tstroke = layer._stroke = vmlCreate('stroke');\n\t\t\t}\n\t\t\tcontainer.appendChild(stroke);\n\t\t\tstroke.weight = options.weight + 'px';\n\t\t\tstroke.color = options.color;\n\t\t\tstroke.opacity = options.opacity;\n\n\t\t\tif (options.dashArray) {\n\t\t\t\tstroke.dashStyle = isArray(options.dashArray) ?\n\t\t\t\t    options.dashArray.join(' ') :\n\t\t\t\t    options.dashArray.replace(/( *, *)/g, ' ');\n\t\t\t} else {\n\t\t\t\tstroke.dashStyle = '';\n\t\t\t}\n\t\t\tstroke.endcap = options.lineCap.replace('butt', 'flat');\n\t\t\tstroke.joinstyle = options.lineJoin;\n\n\t\t} else if (stroke) {\n\t\t\tcontainer.removeChild(stroke);\n\t\t\tlayer._stroke = null;\n\t\t}\n\n\t\tif (options.fill) {\n\t\t\tif (!fill) {\n\t\t\t\tfill = layer._fill = vmlCreate('fill');\n\t\t\t}\n\t\t\tcontainer.appendChild(fill);\n\t\t\tfill.color = options.fillColor || options.color;\n\t\t\tfill.opacity = options.fillOpacity;\n\n\t\t} else if (fill) {\n\t\t\tcontainer.removeChild(fill);\n\t\t\tlayer._fill = null;\n\t\t}\n\t},\n\n\t_updateCircle: function (layer) {\n\t\tvar p = layer._point.round(),\n\t\t    r = Math.round(layer._radius),\n\t\t    r2 = Math.round(layer._radiusY || r);\n\n\t\tthis._setPath(layer, layer._empty() ? 'M0 0' :\n\t\t\t'AL ' + p.x + ',' + p.y + ' ' + r + ',' + r2 + ' 0,' + (65535 * 360));\n\t},\n\n\t_setPath: function (layer, path) {\n\t\tlayer._path.v = path;\n\t},\n\n\t_bringToFront: function (layer) {\n\t\ttoFront(layer._container);\n\t},\n\n\t_bringToBack: function (layer) {\n\t\ttoBack(layer._container);\n\t}\n};\n\nvar create$2 = vml ? vmlCreate : svgCreate;\n\n/*\n * @class SVG\n * @inherits Renderer\n * @aka L.SVG\n *\n * Allows vector layers to be displayed with [SVG](https://developer.mozilla.org/docs/Web/SVG).\n * Inherits `Renderer`.\n *\n * Due to [technical limitations](http://caniuse.com/#search=svg), SVG is not\n * available in all web browsers, notably Android 2.x and 3.x.\n *\n * Although SVG is not available on IE7 and IE8, these browsers support\n * [VML](https://en.wikipedia.org/wiki/Vector_Markup_Language)\n * (a now deprecated technology), and the SVG renderer will fall back to VML in\n * this case.\n *\n * @example\n *\n * Use SVG by default for all paths in the map:\n *\n * ```js\n * var map = L.map('map', {\n * \trenderer: L.svg()\n * });\n * ```\n *\n * Use a SVG renderer with extra padding for specific vector geometries:\n *\n * ```js\n * var map = L.map('map');\n * var myRenderer = L.svg({ padding: 0.5 });\n * var line = L.polyline( coordinates, { renderer: myRenderer } );\n * var circle = L.circle( center, { renderer: myRenderer } );\n * ```\n */\n\nvar SVG = Renderer.extend({\n\n\tgetEvents: function () {\n\t\tvar events = Renderer.prototype.getEvents.call(this);\n\t\tevents.zoomstart = this._onZoomStart;\n\t\treturn events;\n\t},\n\n\t_initContainer: function () {\n\t\tthis._container = create$2('svg');\n\n\t\t// makes it possible to click through svg root; we'll reset it back in individual paths\n\t\tthis._container.setAttribute('pointer-events', 'none');\n\n\t\tthis._rootGroup = create$2('g');\n\t\tthis._container.appendChild(this._rootGroup);\n\t},\n\n\t_destroyContainer: function () {\n\t\tremove(this._container);\n\t\toff(this._container);\n\t\tdelete this._container;\n\t\tdelete this._rootGroup;\n\t\tdelete this._svgSize;\n\t},\n\n\t_onZoomStart: function () {\n\t\t// Drag-then-pinch interactions might mess up the center and zoom.\n\t\t// In this case, the easiest way to prevent this is re-do the renderer\n\t\t//   bounds and padding when the zooming starts.\n\t\tthis._update();\n\t},\n\n\t_update: function () {\n\t\tif (this._map._animatingZoom && this._bounds) { return; }\n\n\t\tRenderer.prototype._update.call(this);\n\n\t\tvar b = this._bounds,\n\t\t    size = b.getSize(),\n\t\t    container = this._container;\n\n\t\t// set size of svg-container if changed\n\t\tif (!this._svgSize || !this._svgSize.equals(size)) {\n\t\t\tthis._svgSize = size;\n\t\t\tcontainer.setAttribute('width', size.x);\n\t\t\tcontainer.setAttribute('height', size.y);\n\t\t}\n\n\t\t// movement: update container viewBox so that we don't have to change coordinates of individual layers\n\t\tsetPosition(container, b.min);\n\t\tcontainer.setAttribute('viewBox', [b.min.x, b.min.y, size.x, size.y].join(' '));\n\n\t\tthis.fire('update');\n\t},\n\n\t// methods below are called by vector layers implementations\n\n\t_initPath: function (layer) {\n\t\tvar path = layer._path = create$2('path');\n\n\t\t// @namespace Path\n\t\t// @option className: String = null\n\t\t// Custom class name set on an element. Only for SVG renderer.\n\t\tif (layer.options.className) {\n\t\t\taddClass(path, layer.options.className);\n\t\t}\n\n\t\tif (layer.options.interactive) {\n\t\t\taddClass(path, 'leaflet-interactive');\n\t\t}\n\n\t\tthis._updateStyle(layer);\n\t\tthis._layers[stamp(layer)] = layer;\n\t},\n\n\t_addPath: function (layer) {\n\t\tif (!this._rootGroup) { this._initContainer(); }\n\t\tthis._rootGroup.appendChild(layer._path);\n\t\tlayer.addInteractiveTarget(layer._path);\n\t},\n\n\t_removePath: function (layer) {\n\t\tremove(layer._path);\n\t\tlayer.removeInteractiveTarget(layer._path);\n\t\tdelete this._layers[stamp(layer)];\n\t},\n\n\t_updatePath: function (layer) {\n\t\tlayer._project();\n\t\tlayer._update();\n\t},\n\n\t_updateStyle: function (layer) {\n\t\tvar path = layer._path,\n\t\t    options = layer.options;\n\n\t\tif (!path) { return; }\n\n\t\tif (options.stroke) {\n\t\t\tpath.setAttribute('stroke', options.color);\n\t\t\tpath.setAttribute('stroke-opacity', options.opacity);\n\t\t\tpath.setAttribute('stroke-width', options.weight);\n\t\t\tpath.setAttribute('stroke-linecap', options.lineCap);\n\t\t\tpath.setAttribute('stroke-linejoin', options.lineJoin);\n\n\t\t\tif (options.dashArray) {\n\t\t\t\tpath.setAttribute('stroke-dasharray', options.dashArray);\n\t\t\t} else {\n\t\t\t\tpath.removeAttribute('stroke-dasharray');\n\t\t\t}\n\n\t\t\tif (options.dashOffset) {\n\t\t\t\tpath.setAttribute('stroke-dashoffset', options.dashOffset);\n\t\t\t} else {\n\t\t\t\tpath.removeAttribute('stroke-dashoffset');\n\t\t\t}\n\t\t} else {\n\t\t\tpath.setAttribute('stroke', 'none');\n\t\t}\n\n\t\tif (options.fill) {\n\t\t\tpath.setAttribute('fill', options.fillColor || options.color);\n\t\t\tpath.setAttribute('fill-opacity', options.fillOpacity);\n\t\t\tpath.setAttribute('fill-rule', options.fillRule || 'evenodd');\n\t\t} else {\n\t\t\tpath.setAttribute('fill', 'none');\n\t\t}\n\t},\n\n\t_updatePoly: function (layer, closed) {\n\t\tthis._setPath(layer, pointsToPath(layer._parts, closed));\n\t},\n\n\t_updateCircle: function (layer) {\n\t\tvar p = layer._point,\n\t\t    r = Math.max(Math.round(layer._radius), 1),\n\t\t    r2 = Math.max(Math.round(layer._radiusY), 1) || r,\n\t\t    arc = 'a' + r + ',' + r2 + ' 0 1,0 ';\n\n\t\t// drawing a circle with two half-arcs\n\t\tvar d = layer._empty() ? 'M0 0' :\n\t\t\t'M' + (p.x - r) + ',' + p.y +\n\t\t\tarc + (r * 2) + ',0 ' +\n\t\t\tarc + (-r * 2) + ',0 ';\n\n\t\tthis._setPath(layer, d);\n\t},\n\n\t_setPath: function (layer, path) {\n\t\tlayer._path.setAttribute('d', path);\n\t},\n\n\t// SVG does not have the concept of zIndex so we resort to changing the DOM order of elements\n\t_bringToFront: function (layer) {\n\t\ttoFront(layer._path);\n\t},\n\n\t_bringToBack: function (layer) {\n\t\ttoBack(layer._path);\n\t}\n});\n\nif (vml) {\n\tSVG.include(vmlMixin);\n}\n\n// @namespace SVG\n// @factory L.svg(options?: Renderer options)\n// Creates a SVG renderer with the given options.\nfunction svg$1(options) {\n\treturn svg || vml ? new SVG(options) : null;\n}\n\nMap.include({\n\t// @namespace Map; @method getRenderer(layer: Path): Renderer\n\t// Returns the instance of `Renderer` that should be used to render the given\n\t// `Path`. It will ensure that the `renderer` options of the map and paths\n\t// are respected, and that the renderers do exist on the map.\n\tgetRenderer: function (layer) {\n\t\t// @namespace Path; @option renderer: Renderer\n\t\t// Use this specific instance of `Renderer` for this path. Takes\n\t\t// precedence over the map's [default renderer](#map-renderer).\n\t\tvar renderer = layer.options.renderer || this._getPaneRenderer(layer.options.pane) || this.options.renderer || this._renderer;\n\n\t\tif (!renderer) {\n\t\t\trenderer = this._renderer = this._createRenderer();\n\t\t}\n\n\t\tif (!this.hasLayer(renderer)) {\n\t\t\tthis.addLayer(renderer);\n\t\t}\n\t\treturn renderer;\n\t},\n\n\t_getPaneRenderer: function (name) {\n\t\tif (name === 'overlayPane' || name === undefined) {\n\t\t\treturn false;\n\t\t}\n\n\t\tvar renderer = this._paneRenderers[name];\n\t\tif (renderer === undefined) {\n\t\t\trenderer = this._createRenderer({pane: name});\n\t\t\tthis._paneRenderers[name] = renderer;\n\t\t}\n\t\treturn renderer;\n\t},\n\n\t_createRenderer: function (options) {\n\t\t// @namespace Map; @option preferCanvas: Boolean = false\n\t\t// Whether `Path`s should be rendered on a `Canvas` renderer.\n\t\t// By default, all `Path`s are rendered in a `SVG` renderer.\n\t\treturn (this.options.preferCanvas && canvas$1(options)) || svg$1(options);\n\t}\n});\n\n/*\n * L.Rectangle extends Polygon and creates a rectangle when passed a LatLngBounds object.\n */\n\n/*\n * @class Rectangle\n * @aka L.Rectangle\n * @inherits Polygon\n *\n * A class for drawing rectangle overlays on a map. Extends `Polygon`.\n *\n * @example\n *\n * ```js\n * // define rectangle geographical bounds\n * var bounds = [[54.559322, -5.767822], [56.1210604, -3.021240]];\n *\n * // create an orange rectangle\n * L.rectangle(bounds, {color: \"#ff7800\", weight: 1}).addTo(map);\n *\n * // zoom the map to the rectangle bounds\n * map.fitBounds(bounds);\n * ```\n *\n */\n\n\nvar Rectangle = Polygon.extend({\n\tinitialize: function (latLngBounds, options) {\n\t\tPolygon.prototype.initialize.call(this, this._boundsToLatLngs(latLngBounds), options);\n\t},\n\n\t// @method setBounds(latLngBounds: LatLngBounds): this\n\t// Redraws the rectangle with the passed bounds.\n\tsetBounds: function (latLngBounds) {\n\t\treturn this.setLatLngs(this._boundsToLatLngs(latLngBounds));\n\t},\n\n\t_boundsToLatLngs: function (latLngBounds) {\n\t\tlatLngBounds = toLatLngBounds(latLngBounds);\n\t\treturn [\n\t\t\tlatLngBounds.getSouthWest(),\n\t\t\tlatLngBounds.getNorthWest(),\n\t\t\tlatLngBounds.getNorthEast(),\n\t\t\tlatLngBounds.getSouthEast()\n\t\t];\n\t}\n});\n\n\n// @factory L.rectangle(latLngBounds: LatLngBounds, options?: Polyline options)\nfunction rectangle(latLngBounds, options) {\n\treturn new Rectangle(latLngBounds, options);\n}\n\nSVG.create = create$2;\nSVG.pointsToPath = pointsToPath;\n\nGeoJSON.geometryToLayer = geometryToLayer;\nGeoJSON.coordsToLatLng = coordsToLatLng;\nGeoJSON.coordsToLatLngs = coordsToLatLngs;\nGeoJSON.latLngToCoords = latLngToCoords;\nGeoJSON.latLngsToCoords = latLngsToCoords;\nGeoJSON.getFeature = getFeature;\nGeoJSON.asFeature = asFeature;\n\n/*\n * L.Handler.BoxZoom is used to add shift-drag zoom interaction to the map\n * (zoom to a selected bounding box), enabled by default.\n */\n\n// @namespace Map\n// @section Interaction Options\nMap.mergeOptions({\n\t// @option boxZoom: Boolean = true\n\t// Whether the map can be zoomed to a rectangular area specified by\n\t// dragging the mouse while pressing the shift key.\n\tboxZoom: true\n});\n\nvar BoxZoom = Handler.extend({\n\tinitialize: function (map) {\n\t\tthis._map = map;\n\t\tthis._container = map._container;\n\t\tthis._pane = map._panes.overlayPane;\n\t\tthis._resetStateTimeout = 0;\n\t\tmap.on('unload', this._destroy, this);\n\t},\n\n\taddHooks: function () {\n\t\ton(this._container, 'mousedown', this._onMouseDown, this);\n\t},\n\n\tremoveHooks: function () {\n\t\toff(this._container, 'mousedown', this._onMouseDown, this);\n\t},\n\n\tmoved: function () {\n\t\treturn this._moved;\n\t},\n\n\t_destroy: function () {\n\t\tremove(this._pane);\n\t\tdelete this._pane;\n\t},\n\n\t_resetState: function () {\n\t\tthis._resetStateTimeout = 0;\n\t\tthis._moved = false;\n\t},\n\n\t_clearDeferredResetState: function () {\n\t\tif (this._resetStateTimeout !== 0) {\n\t\t\tclearTimeout(this._resetStateTimeout);\n\t\t\tthis._resetStateTimeout = 0;\n\t\t}\n\t},\n\n\t_onMouseDown: function (e) {\n\t\tif (!e.shiftKey || ((e.which !== 1) && (e.button !== 1))) { return false; }\n\n\t\t// Clear the deferred resetState if it hasn't executed yet, otherwise it\n\t\t// will interrupt the interaction and orphan a box element in the container.\n\t\tthis._clearDeferredResetState();\n\t\tthis._resetState();\n\n\t\tdisableTextSelection();\n\t\tdisableImageDrag();\n\n\t\tthis._startPoint = this._map.mouseEventToContainerPoint(e);\n\n\t\ton(document, {\n\t\t\tcontextmenu: stop,\n\t\t\tmousemove: this._onMouseMove,\n\t\t\tmouseup: this._onMouseUp,\n\t\t\tkeydown: this._onKeyDown\n\t\t}, this);\n\t},\n\n\t_onMouseMove: function (e) {\n\t\tif (!this._moved) {\n\t\t\tthis._moved = true;\n\n\t\t\tthis._box = create$1('div', 'leaflet-zoom-box', this._container);\n\t\t\taddClass(this._container, 'leaflet-crosshair');\n\n\t\t\tthis._map.fire('boxzoomstart');\n\t\t}\n\n\t\tthis._point = this._map.mouseEventToContainerPoint(e);\n\n\t\tvar bounds = new Bounds(this._point, this._startPoint),\n\t\t    size = bounds.getSize();\n\n\t\tsetPosition(this._box, bounds.min);\n\n\t\tthis._box.style.width  = size.x + 'px';\n\t\tthis._box.style.height = size.y + 'px';\n\t},\n\n\t_finish: function () {\n\t\tif (this._moved) {\n\t\t\tremove(this._box);\n\t\t\tremoveClass(this._container, 'leaflet-crosshair');\n\t\t}\n\n\t\tenableTextSelection();\n\t\tenableImageDrag();\n\n\t\toff(document, {\n\t\t\tcontextmenu: stop,\n\t\t\tmousemove: this._onMouseMove,\n\t\t\tmouseup: this._onMouseUp,\n\t\t\tkeydown: this._onKeyDown\n\t\t}, this);\n\t},\n\n\t_onMouseUp: function (e) {\n\t\tif ((e.which !== 1) && (e.button !== 1)) { return; }\n\n\t\tthis._finish();\n\n\t\tif (!this._moved) { return; }\n\t\t// Postpone to next JS tick so internal click event handling\n\t\t// still see it as \"moved\".\n\t\tthis._clearDeferredResetState();\n\t\tthis._resetStateTimeout = setTimeout(bind(this._resetState, this), 0);\n\n\t\tvar bounds = new LatLngBounds(\n\t\t        this._map.containerPointToLatLng(this._startPoint),\n\t\t        this._map.containerPointToLatLng(this._point));\n\n\t\tthis._map\n\t\t\t.fitBounds(bounds)\n\t\t\t.fire('boxzoomend', {boxZoomBounds: bounds});\n\t},\n\n\t_onKeyDown: function (e) {\n\t\tif (e.keyCode === 27) {\n\t\t\tthis._finish();\n\t\t}\n\t}\n});\n\n// @section Handlers\n// @property boxZoom: Handler\n// Box (shift-drag with mouse) zoom handler.\nMap.addInitHook('addHandler', 'boxZoom', BoxZoom);\n\n/*\n * L.Handler.DoubleClickZoom is used to handle double-click zoom on the map, enabled by default.\n */\n\n// @namespace Map\n// @section Interaction Options\n\nMap.mergeOptions({\n\t// @option doubleClickZoom: Boolean|String = true\n\t// Whether the map can be zoomed in by double clicking on it and\n\t// zoomed out by double clicking while holding shift. If passed\n\t// `'center'`, double-click zoom will zoom to the center of the\n\t//  view regardless of where the mouse was.\n\tdoubleClickZoom: true\n});\n\nvar DoubleClickZoom = Handler.extend({\n\taddHooks: function () {\n\t\tthis._map.on('dblclick', this._onDoubleClick, this);\n\t},\n\n\tremoveHooks: function () {\n\t\tthis._map.off('dblclick', this._onDoubleClick, this);\n\t},\n\n\t_onDoubleClick: function (e) {\n\t\tvar map = this._map,\n\t\t    oldZoom = map.getZoom(),\n\t\t    delta = map.options.zoomDelta,\n\t\t    zoom = e.originalEvent.shiftKey ? oldZoom - delta : oldZoom + delta;\n\n\t\tif (map.options.doubleClickZoom === 'center') {\n\t\t\tmap.setZoom(zoom);\n\t\t} else {\n\t\t\tmap.setZoomAround(e.containerPoint, zoom);\n\t\t}\n\t}\n});\n\n// @section Handlers\n//\n// Map properties include interaction handlers that allow you to control\n// interaction behavior in runtime, enabling or disabling certain features such\n// as dragging or touch zoom (see `Handler` methods). For example:\n//\n// ```js\n// map.doubleClickZoom.disable();\n// ```\n//\n// @property doubleClickZoom: Handler\n// Double click zoom handler.\nMap.addInitHook('addHandler', 'doubleClickZoom', DoubleClickZoom);\n\n/*\n * L.Handler.MapDrag is used to make the map draggable (with panning inertia), enabled by default.\n */\n\n// @namespace Map\n// @section Interaction Options\nMap.mergeOptions({\n\t// @option dragging: Boolean = true\n\t// Whether the map be draggable with mouse/touch or not.\n\tdragging: true,\n\n\t// @section Panning Inertia Options\n\t// @option inertia: Boolean = *\n\t// If enabled, panning of the map will have an inertia effect where\n\t// the map builds momentum while dragging and continues moving in\n\t// the same direction for some time. Feels especially nice on touch\n\t// devices. Enabled by default unless running on old Android devices.\n\tinertia: !android23,\n\n\t// @option inertiaDeceleration: Number = 3000\n\t// The rate with which the inertial movement slows down, in pixels/second².\n\tinertiaDeceleration: 3400, // px/s^2\n\n\t// @option inertiaMaxSpeed: Number = Infinity\n\t// Max speed of the inertial movement, in pixels/second.\n\tinertiaMaxSpeed: Infinity, // px/s\n\n\t// @option easeLinearity: Number = 0.2\n\teaseLinearity: 0.2,\n\n\t// TODO refactor, move to CRS\n\t// @option worldCopyJump: Boolean = false\n\t// With this option enabled, the map tracks when you pan to another \"copy\"\n\t// of the world and seamlessly jumps to the original one so that all overlays\n\t// like markers and vector layers are still visible.\n\tworldCopyJump: false,\n\n\t// @option maxBoundsViscosity: Number = 0.0\n\t// If `maxBounds` is set, this option will control how solid the bounds\n\t// are when dragging the map around. The default value of `0.0` allows the\n\t// user to drag outside the bounds at normal speed, higher values will\n\t// slow down map dragging outside bounds, and `1.0` makes the bounds fully\n\t// solid, preventing the user from dragging outside the bounds.\n\tmaxBoundsViscosity: 0.0\n});\n\nvar Drag = Handler.extend({\n\taddHooks: function () {\n\t\tif (!this._draggable) {\n\t\t\tvar map = this._map;\n\n\t\t\tthis._draggable = new Draggable(map._mapPane, map._container);\n\n\t\t\tthis._draggable.on({\n\t\t\t\tdragstart: this._onDragStart,\n\t\t\t\tdrag: this._onDrag,\n\t\t\t\tdragend: this._onDragEnd\n\t\t\t}, this);\n\n\t\t\tthis._draggable.on('predrag', this._onPreDragLimit, this);\n\t\t\tif (map.options.worldCopyJump) {\n\t\t\t\tthis._draggable.on('predrag', this._onPreDragWrap, this);\n\t\t\t\tmap.on('zoomend', this._onZoomEnd, this);\n\n\t\t\t\tmap.whenReady(this._onZoomEnd, this);\n\t\t\t}\n\t\t}\n\t\taddClass(this._map._container, 'leaflet-grab leaflet-touch-drag');\n\t\tthis._draggable.enable();\n\t\tthis._positions = [];\n\t\tthis._times = [];\n\t},\n\n\tremoveHooks: function () {\n\t\tremoveClass(this._map._container, 'leaflet-grab');\n\t\tremoveClass(this._map._container, 'leaflet-touch-drag');\n\t\tthis._draggable.disable();\n\t},\n\n\tmoved: function () {\n\t\treturn this._draggable && this._draggable._moved;\n\t},\n\n\tmoving: function () {\n\t\treturn this._draggable && this._draggable._moving;\n\t},\n\n\t_onDragStart: function () {\n\t\tvar map = this._map;\n\n\t\tmap._stop();\n\t\tif (this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {\n\t\t\tvar bounds = toLatLngBounds(this._map.options.maxBounds);\n\n\t\t\tthis._offsetLimit = toBounds(\n\t\t\t\tthis._map.latLngToContainerPoint(bounds.getNorthWest()).multiplyBy(-1),\n\t\t\t\tthis._map.latLngToContainerPoint(bounds.getSouthEast()).multiplyBy(-1)\n\t\t\t\t\t.add(this._map.getSize()));\n\n\t\t\tthis._viscosity = Math.min(1.0, Math.max(0.0, this._map.options.maxBoundsViscosity));\n\t\t} else {\n\t\t\tthis._offsetLimit = null;\n\t\t}\n\n\t\tmap\n\t\t    .fire('movestart')\n\t\t    .fire('dragstart');\n\n\t\tif (map.options.inertia) {\n\t\t\tthis._positions = [];\n\t\t\tthis._times = [];\n\t\t}\n\t},\n\n\t_onDrag: function (e) {\n\t\tif (this._map.options.inertia) {\n\t\t\tvar time = this._lastTime = +new Date(),\n\t\t\t    pos = this._lastPos = this._draggable._absPos || this._draggable._newPos;\n\n\t\t\tthis._positions.push(pos);\n\t\t\tthis._times.push(time);\n\n\t\t\tthis._prunePositions(time);\n\t\t}\n\n\t\tthis._map\n\t\t    .fire('move', e)\n\t\t    .fire('drag', e);\n\t},\n\n\t_prunePositions: function (time) {\n\t\twhile (this._positions.length > 1 && time - this._times[0] > 50) {\n\t\t\tthis._positions.shift();\n\t\t\tthis._times.shift();\n\t\t}\n\t},\n\n\t_onZoomEnd: function () {\n\t\tvar pxCenter = this._map.getSize().divideBy(2),\n\t\t    pxWorldCenter = this._map.latLngToLayerPoint([0, 0]);\n\n\t\tthis._initialWorldOffset = pxWorldCenter.subtract(pxCenter).x;\n\t\tthis._worldWidth = this._map.getPixelWorldBounds().getSize().x;\n\t},\n\n\t_viscousLimit: function (value, threshold) {\n\t\treturn value - (value - threshold) * this._viscosity;\n\t},\n\n\t_onPreDragLimit: function () {\n\t\tif (!this._viscosity || !this._offsetLimit) { return; }\n\n\t\tvar offset = this._draggable._newPos.subtract(this._draggable._startPos);\n\n\t\tvar limit = this._offsetLimit;\n\t\tif (offset.x < limit.min.x) { offset.x = this._viscousLimit(offset.x, limit.min.x); }\n\t\tif (offset.y < limit.min.y) { offset.y = this._viscousLimit(offset.y, limit.min.y); }\n\t\tif (offset.x > limit.max.x) { offset.x = this._viscousLimit(offset.x, limit.max.x); }\n\t\tif (offset.y > limit.max.y) { offset.y = this._viscousLimit(offset.y, limit.max.y); }\n\n\t\tthis._draggable._newPos = this._draggable._startPos.add(offset);\n\t},\n\n\t_onPreDragWrap: function () {\n\t\t// TODO refactor to be able to adjust map pane position after zoom\n\t\tvar worldWidth = this._worldWidth,\n\t\t    halfWidth = Math.round(worldWidth / 2),\n\t\t    dx = this._initialWorldOffset,\n\t\t    x = this._draggable._newPos.x,\n\t\t    newX1 = (x - halfWidth + dx) % worldWidth + halfWidth - dx,\n\t\t    newX2 = (x + halfWidth + dx) % worldWidth - halfWidth - dx,\n\t\t    newX = Math.abs(newX1 + dx) < Math.abs(newX2 + dx) ? newX1 : newX2;\n\n\t\tthis._draggable._absPos = this._draggable._newPos.clone();\n\t\tthis._draggable._newPos.x = newX;\n\t},\n\n\t_onDragEnd: function (e) {\n\t\tvar map = this._map,\n\t\t    options = map.options,\n\n\t\t    noInertia = !options.inertia || this._times.length < 2;\n\n\t\tmap.fire('dragend', e);\n\n\t\tif (noInertia) {\n\t\t\tmap.fire('moveend');\n\n\t\t} else {\n\t\t\tthis._prunePositions(+new Date());\n\n\t\t\tvar direction = this._lastPos.subtract(this._positions[0]),\n\t\t\t    duration = (this._lastTime - this._times[0]) / 1000,\n\t\t\t    ease = options.easeLinearity,\n\n\t\t\t    speedVector = direction.multiplyBy(ease / duration),\n\t\t\t    speed = speedVector.distanceTo([0, 0]),\n\n\t\t\t    limitedSpeed = Math.min(options.inertiaMaxSpeed, speed),\n\t\t\t    limitedSpeedVector = speedVector.multiplyBy(limitedSpeed / speed),\n\n\t\t\t    decelerationDuration = limitedSpeed / (options.inertiaDeceleration * ease),\n\t\t\t    offset = limitedSpeedVector.multiplyBy(-decelerationDuration / 2).round();\n\n\t\t\tif (!offset.x && !offset.y) {\n\t\t\t\tmap.fire('moveend');\n\n\t\t\t} else {\n\t\t\t\toffset = map._limitOffset(offset, map.options.maxBounds);\n\n\t\t\t\trequestAnimFrame(function () {\n\t\t\t\t\tmap.panBy(offset, {\n\t\t\t\t\t\tduration: decelerationDuration,\n\t\t\t\t\t\teaseLinearity: ease,\n\t\t\t\t\t\tnoMoveStart: true,\n\t\t\t\t\t\tanimate: true\n\t\t\t\t\t});\n\t\t\t\t});\n\t\t\t}\n\t\t}\n\t}\n});\n\n// @section Handlers\n// @property dragging: Handler\n// Map dragging handler (by both mouse and touch).\nMap.addInitHook('addHandler', 'dragging', Drag);\n\n/*\n * L.Map.Keyboard is handling keyboard interaction with the map, enabled by default.\n */\n\n// @namespace Map\n// @section Keyboard Navigation Options\nMap.mergeOptions({\n\t// @option keyboard: Boolean = true\n\t// Makes the map focusable and allows users to navigate the map with keyboard\n\t// arrows and `+`/`-` keys.\n\tkeyboard: true,\n\n\t// @option keyboardPanDelta: Number = 80\n\t// Amount of pixels to pan when pressing an arrow key.\n\tkeyboardPanDelta: 80\n});\n\nvar Keyboard = Handler.extend({\n\n\tkeyCodes: {\n\t\tleft:    [37],\n\t\tright:   [39],\n\t\tdown:    [40],\n\t\tup:      [38],\n\t\tzoomIn:  [187, 107, 61, 171],\n\t\tzoomOut: [189, 109, 54, 173]\n\t},\n\n\tinitialize: function (map) {\n\t\tthis._map = map;\n\n\t\tthis._setPanDelta(map.options.keyboardPanDelta);\n\t\tthis._setZoomDelta(map.options.zoomDelta);\n\t},\n\n\taddHooks: function () {\n\t\tvar container = this._map._container;\n\n\t\t// make the container focusable by tabbing\n\t\tif (container.tabIndex <= 0) {\n\t\t\tcontainer.tabIndex = '0';\n\t\t}\n\n\t\ton(container, {\n\t\t\tfocus: this._onFocus,\n\t\t\tblur: this._onBlur,\n\t\t\tmousedown: this._onMouseDown\n\t\t}, this);\n\n\t\tthis._map.on({\n\t\t\tfocus: this._addHooks,\n\t\t\tblur: this._removeHooks\n\t\t}, this);\n\t},\n\n\tremoveHooks: function () {\n\t\tthis._removeHooks();\n\n\t\toff(this._map._container, {\n\t\t\tfocus: this._onFocus,\n\t\t\tblur: this._onBlur,\n\t\t\tmousedown: this._onMouseDown\n\t\t}, this);\n\n\t\tthis._map.off({\n\t\t\tfocus: this._addHooks,\n\t\t\tblur: this._removeHooks\n\t\t}, this);\n\t},\n\n\t_onMouseDown: function () {\n\t\tif (this._focused) { return; }\n\n\t\tvar body = document.body,\n\t\t    docEl = document.documentElement,\n\t\t    top = body.scrollTop || docEl.scrollTop,\n\t\t    left = body.scrollLeft || docEl.scrollLeft;\n\n\t\tthis._map._container.focus();\n\n\t\twindow.scrollTo(left, top);\n\t},\n\n\t_onFocus: function () {\n\t\tthis._focused = true;\n\t\tthis._map.fire('focus');\n\t},\n\n\t_onBlur: function () {\n\t\tthis._focused = false;\n\t\tthis._map.fire('blur');\n\t},\n\n\t_setPanDelta: function (panDelta) {\n\t\tvar keys = this._panKeys = {},\n\t\t    codes = this.keyCodes,\n\t\t    i, len;\n\n\t\tfor (i = 0, len = codes.left.length; i < len; i++) {\n\t\t\tkeys[codes.left[i]] = [-1 * panDelta, 0];\n\t\t}\n\t\tfor (i = 0, len = codes.right.length; i < len; i++) {\n\t\t\tkeys[codes.right[i]] = [panDelta, 0];\n\t\t}\n\t\tfor (i = 0, len = codes.down.length; i < len; i++) {\n\t\t\tkeys[codes.down[i]] = [0, panDelta];\n\t\t}\n\t\tfor (i = 0, len = codes.up.length; i < len; i++) {\n\t\t\tkeys[codes.up[i]] = [0, -1 * panDelta];\n\t\t}\n\t},\n\n\t_setZoomDelta: function (zoomDelta) {\n\t\tvar keys = this._zoomKeys = {},\n\t\t    codes = this.keyCodes,\n\t\t    i, len;\n\n\t\tfor (i = 0, len = codes.zoomIn.length; i < len; i++) {\n\t\t\tkeys[codes.zoomIn[i]] = zoomDelta;\n\t\t}\n\t\tfor (i = 0, len = codes.zoomOut.length; i < len; i++) {\n\t\t\tkeys[codes.zoomOut[i]] = -zoomDelta;\n\t\t}\n\t},\n\n\t_addHooks: function () {\n\t\ton(document, 'keydown', this._onKeyDown, this);\n\t},\n\n\t_removeHooks: function () {\n\t\toff(document, 'keydown', this._onKeyDown, this);\n\t},\n\n\t_onKeyDown: function (e) {\n\t\tif (e.altKey || e.ctrlKey || e.metaKey) { return; }\n\n\t\tvar key = e.keyCode,\n\t\t    map = this._map,\n\t\t    offset;\n\n\t\tif (key in this._panKeys) {\n\t\t\tif (!map._panAnim || !map._panAnim._inProgress) {\n\t\t\t\toffset = this._panKeys[key];\n\t\t\t\tif (e.shiftKey) {\n\t\t\t\t\toffset = toPoint(offset).multiplyBy(3);\n\t\t\t\t}\n\n\t\t\t\tmap.panBy(offset);\n\n\t\t\t\tif (map.options.maxBounds) {\n\t\t\t\t\tmap.panInsideBounds(map.options.maxBounds);\n\t\t\t\t}\n\t\t\t}\n\t\t} else if (key in this._zoomKeys) {\n\t\t\tmap.setZoom(map.getZoom() + (e.shiftKey ? 3 : 1) * this._zoomKeys[key]);\n\n\t\t} else if (key === 27 && map._popup && map._popup.options.closeOnEscapeKey) {\n\t\t\tmap.closePopup();\n\n\t\t} else {\n\t\t\treturn;\n\t\t}\n\n\t\tstop(e);\n\t}\n});\n\n// @section Handlers\n// @section Handlers\n// @property keyboard: Handler\n// Keyboard navigation handler.\nMap.addInitHook('addHandler', 'keyboard', Keyboard);\n\n/*\n * L.Handler.ScrollWheelZoom is used by L.Map to enable mouse scroll wheel zoom on the map.\n */\n\n// @namespace Map\n// @section Interaction Options\nMap.mergeOptions({\n\t// @section Mousewheel options\n\t// @option scrollWheelZoom: Boolean|String = true\n\t// Whether the map can be zoomed by using the mouse wheel. If passed `'center'`,\n\t// it will zoom to the center of the view regardless of where the mouse was.\n\tscrollWheelZoom: true,\n\n\t// @option wheelDebounceTime: Number = 40\n\t// Limits the rate at which a wheel can fire (in milliseconds). By default\n\t// user can't zoom via wheel more often than once per 40 ms.\n\twheelDebounceTime: 40,\n\n\t// @option wheelPxPerZoomLevel: Number = 60\n\t// How many scroll pixels (as reported by [L.DomEvent.getWheelDelta](#domevent-getwheeldelta))\n\t// mean a change of one full zoom level. Smaller values will make wheel-zooming\n\t// faster (and vice versa).\n\twheelPxPerZoomLevel: 60\n});\n\nvar ScrollWheelZoom = Handler.extend({\n\taddHooks: function () {\n\t\ton(this._map._container, 'mousewheel', this._onWheelScroll, this);\n\n\t\tthis._delta = 0;\n\t},\n\n\tremoveHooks: function () {\n\t\toff(this._map._container, 'mousewheel', this._onWheelScroll, this);\n\t},\n\n\t_onWheelScroll: function (e) {\n\t\tvar delta = getWheelDelta(e);\n\n\t\tvar debounce = this._map.options.wheelDebounceTime;\n\n\t\tthis._delta += delta;\n\t\tthis._lastMousePos = this._map.mouseEventToContainerPoint(e);\n\n\t\tif (!this._startTime) {\n\t\t\tthis._startTime = +new Date();\n\t\t}\n\n\t\tvar left = Math.max(debounce - (+new Date() - this._startTime), 0);\n\n\t\tclearTimeout(this._timer);\n\t\tthis._timer = setTimeout(bind(this._performZoom, this), left);\n\n\t\tstop(e);\n\t},\n\n\t_performZoom: function () {\n\t\tvar map = this._map,\n\t\t    zoom = map.getZoom(),\n\t\t    snap = this._map.options.zoomSnap || 0;\n\n\t\tmap._stop(); // stop panning and fly animations if any\n\n\t\t// map the delta with a sigmoid function to -4..4 range leaning on -1..1\n\t\tvar d2 = this._delta / (this._map.options.wheelPxPerZoomLevel * 4),\n\t\t    d3 = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(d2)))) / Math.LN2,\n\t\t    d4 = snap ? Math.ceil(d3 / snap) * snap : d3,\n\t\t    delta = map._limitZoom(zoom + (this._delta > 0 ? d4 : -d4)) - zoom;\n\n\t\tthis._delta = 0;\n\t\tthis._startTime = null;\n\n\t\tif (!delta) { return; }\n\n\t\tif (map.options.scrollWheelZoom === 'center') {\n\t\t\tmap.setZoom(zoom + delta);\n\t\t} else {\n\t\t\tmap.setZoomAround(this._lastMousePos, zoom + delta);\n\t\t}\n\t}\n});\n\n// @section Handlers\n// @property scrollWheelZoom: Handler\n// Scroll wheel zoom handler.\nMap.addInitHook('addHandler', 'scrollWheelZoom', ScrollWheelZoom);\n\n/*\n * L.Map.Tap is used to enable mobile hacks like quick taps and long hold.\n */\n\n// @namespace Map\n// @section Interaction Options\nMap.mergeOptions({\n\t// @section Touch interaction options\n\t// @option tap: Boolean = true\n\t// Enables mobile hacks for supporting instant taps (fixing 200ms click\n\t// delay on iOS/Android) and touch holds (fired as `contextmenu` events).\n\ttap: true,\n\n\t// @option tapTolerance: Number = 15\n\t// The max number of pixels a user can shift his finger during touch\n\t// for it to be considered a valid tap.\n\ttapTolerance: 15\n});\n\nvar Tap = Handler.extend({\n\taddHooks: function () {\n\t\ton(this._map._container, 'touchstart', this._onDown, this);\n\t},\n\n\tremoveHooks: function () {\n\t\toff(this._map._container, 'touchstart', this._onDown, this);\n\t},\n\n\t_onDown: function (e) {\n\t\tif (!e.touches) { return; }\n\n\t\tpreventDefault(e);\n\n\t\tthis._fireClick = true;\n\n\t\t// don't simulate click or track longpress if more than 1 touch\n\t\tif (e.touches.length > 1) {\n\t\t\tthis._fireClick = false;\n\t\t\tclearTimeout(this._holdTimeout);\n\t\t\treturn;\n\t\t}\n\n\t\tvar first = e.touches[0],\n\t\t    el = first.target;\n\n\t\tthis._startPos = this._newPos = new Point(first.clientX, first.clientY);\n\n\t\t// if touching a link, highlight it\n\t\tif (el.tagName && el.tagName.toLowerCase() === 'a') {\n\t\t\taddClass(el, 'leaflet-active');\n\t\t}\n\n\t\t// simulate long hold but setting a timeout\n\t\tthis._holdTimeout = setTimeout(bind(function () {\n\t\t\tif (this._isTapValid()) {\n\t\t\t\tthis._fireClick = false;\n\t\t\t\tthis._onUp();\n\t\t\t\tthis._simulateEvent('contextmenu', first);\n\t\t\t}\n\t\t}, this), 1000);\n\n\t\tthis._simulateEvent('mousedown', first);\n\n\t\ton(document, {\n\t\t\ttouchmove: this._onMove,\n\t\t\ttouchend: this._onUp\n\t\t}, this);\n\t},\n\n\t_onUp: function (e) {\n\t\tclearTimeout(this._holdTimeout);\n\n\t\toff(document, {\n\t\t\ttouchmove: this._onMove,\n\t\t\ttouchend: this._onUp\n\t\t}, this);\n\n\t\tif (this._fireClick && e && e.changedTouches) {\n\n\t\t\tvar first = e.changedTouches[0],\n\t\t\t    el = first.target;\n\n\t\t\tif (el && el.tagName && el.tagName.toLowerCase() === 'a') {\n\t\t\t\tremoveClass(el, 'leaflet-active');\n\t\t\t}\n\n\t\t\tthis._simulateEvent('mouseup', first);\n\n\t\t\t// simulate click if the touch didn't move too much\n\t\t\tif (this._isTapValid()) {\n\t\t\t\tthis._simulateEvent('click', first);\n\t\t\t}\n\t\t}\n\t},\n\n\t_isTapValid: function () {\n\t\treturn this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;\n\t},\n\n\t_onMove: function (e) {\n\t\tvar first = e.touches[0];\n\t\tthis._newPos = new Point(first.clientX, first.clientY);\n\t\tthis._simulateEvent('mousemove', first);\n\t},\n\n\t_simulateEvent: function (type, e) {\n\t\tvar simulatedEvent = document.createEvent('MouseEvents');\n\n\t\tsimulatedEvent._simulated = true;\n\t\te.target._simulatedClick = true;\n\n\t\tsimulatedEvent.initMouseEvent(\n\t\t        type, true, true, window, 1,\n\t\t        e.screenX, e.screenY,\n\t\t        e.clientX, e.clientY,\n\t\t        false, false, false, false, 0, null);\n\n\t\te.target.dispatchEvent(simulatedEvent);\n\t}\n});\n\n// @section Handlers\n// @property tap: Handler\n// Mobile touch hacks (quick tap and touch hold) handler.\nif (touch && !pointer) {\n\tMap.addInitHook('addHandler', 'tap', Tap);\n}\n\n/*\n * L.Handler.TouchZoom is used by L.Map to add pinch zoom on supported mobile browsers.\n */\n\n// @namespace Map\n// @section Interaction Options\nMap.mergeOptions({\n\t// @section Touch interaction options\n\t// @option touchZoom: Boolean|String = *\n\t// Whether the map can be zoomed by touch-dragging with two fingers. If\n\t// passed `'center'`, it will zoom to the center of the view regardless of\n\t// where the touch events (fingers) were. Enabled for touch-capable web\n\t// browsers except for old Androids.\n\ttouchZoom: touch && !android23,\n\n\t// @option bounceAtZoomLimits: Boolean = true\n\t// Set it to false if you don't want the map to zoom beyond min/max zoom\n\t// and then bounce back when pinch-zooming.\n\tbounceAtZoomLimits: true\n});\n\nvar TouchZoom = Handler.extend({\n\taddHooks: function () {\n\t\taddClass(this._map._container, 'leaflet-touch-zoom');\n\t\ton(this._map._container, 'touchstart', this._onTouchStart, this);\n\t},\n\n\tremoveHooks: function () {\n\t\tremoveClass(this._map._container, 'leaflet-touch-zoom');\n\t\toff(this._map._container, 'touchstart', this._onTouchStart, this);\n\t},\n\n\t_onTouchStart: function (e) {\n\t\tvar map = this._map;\n\t\tif (!e.touches || e.touches.length !== 2 || map._animatingZoom || this._zooming) { return; }\n\n\t\tvar p1 = map.mouseEventToContainerPoint(e.touches[0]),\n\t\t    p2 = map.mouseEventToContainerPoint(e.touches[1]);\n\n\t\tthis._centerPoint = map.getSize()._divideBy(2);\n\t\tthis._startLatLng = map.containerPointToLatLng(this._centerPoint);\n\t\tif (map.options.touchZoom !== 'center') {\n\t\t\tthis._pinchStartLatLng = map.containerPointToLatLng(p1.add(p2)._divideBy(2));\n\t\t}\n\n\t\tthis._startDist = p1.distanceTo(p2);\n\t\tthis._startZoom = map.getZoom();\n\n\t\tthis._moved = false;\n\t\tthis._zooming = true;\n\n\t\tmap._stop();\n\n\t\ton(document, 'touchmove', this._onTouchMove, this);\n\t\ton(document, 'touchend', this._onTouchEnd, this);\n\n\t\tpreventDefault(e);\n\t},\n\n\t_onTouchMove: function (e) {\n\t\tif (!e.touches || e.touches.length !== 2 || !this._zooming) { return; }\n\n\t\tvar map = this._map,\n\t\t    p1 = map.mouseEventToContainerPoint(e.touches[0]),\n\t\t    p2 = map.mouseEventToContainerPoint(e.touches[1]),\n\t\t    scale = p1.distanceTo(p2) / this._startDist;\n\n\t\tthis._zoom = map.getScaleZoom(scale, this._startZoom);\n\n\t\tif (!map.options.bounceAtZoomLimits && (\n\t\t\t(this._zoom < map.getMinZoom() && scale < 1) ||\n\t\t\t(this._zoom > map.getMaxZoom() && scale > 1))) {\n\t\t\tthis._zoom = map._limitZoom(this._zoom);\n\t\t}\n\n\t\tif (map.options.touchZoom === 'center') {\n\t\t\tthis._center = this._startLatLng;\n\t\t\tif (scale === 1) { return; }\n\t\t} else {\n\t\t\t// Get delta from pinch to center, so centerLatLng is delta applied to initial pinchLatLng\n\t\t\tvar delta = p1._add(p2)._divideBy(2)._subtract(this._centerPoint);\n\t\t\tif (scale === 1 && delta.x === 0 && delta.y === 0) { return; }\n\t\t\tthis._center = map.unproject(map.project(this._pinchStartLatLng, this._zoom).subtract(delta), this._zoom);\n\t\t}\n\n\t\tif (!this._moved) {\n\t\t\tmap._moveStart(true, false);\n\t\t\tthis._moved = true;\n\t\t}\n\n\t\tcancelAnimFrame(this._animRequest);\n\n\t\tvar moveFn = bind(map._move, map, this._center, this._zoom, {pinch: true, round: false});\n\t\tthis._animRequest = requestAnimFrame(moveFn, this, true);\n\n\t\tpreventDefault(e);\n\t},\n\n\t_onTouchEnd: function () {\n\t\tif (!this._moved || !this._zooming) {\n\t\t\tthis._zooming = false;\n\t\t\treturn;\n\t\t}\n\n\t\tthis._zooming = false;\n\t\tcancelAnimFrame(this._animRequest);\n\n\t\toff(document, 'touchmove', this._onTouchMove);\n\t\toff(document, 'touchend', this._onTouchEnd);\n\n\t\t// Pinch updates GridLayers' levels only when zoomSnap is off, so zoomSnap becomes noUpdate.\n\t\tif (this._map.options.zoomAnimation) {\n\t\t\tthis._map._animateZoom(this._center, this._map._limitZoom(this._zoom), true, this._map.options.zoomSnap);\n\t\t} else {\n\t\t\tthis._map._resetView(this._center, this._map._limitZoom(this._zoom));\n\t\t}\n\t}\n});\n\n// @section Handlers\n// @property touchZoom: Handler\n// Touch zoom handler.\nMap.addInitHook('addHandler', 'touchZoom', TouchZoom);\n\nMap.BoxZoom = BoxZoom;\nMap.DoubleClickZoom = DoubleClickZoom;\nMap.Drag = Drag;\nMap.Keyboard = Keyboard;\nMap.ScrollWheelZoom = ScrollWheelZoom;\nMap.Tap = Tap;\nMap.TouchZoom = TouchZoom;\n\nObject.freeze = freeze;\n\nexports.version = version;\nexports.Control = Control;\nexports.control = control;\nexports.Browser = Browser;\nexports.Evented = Evented;\nexports.Mixin = Mixin;\nexports.Util = Util;\nexports.Class = Class;\nexports.Handler = Handler;\nexports.extend = extend;\nexports.bind = bind;\nexports.stamp = stamp;\nexports.setOptions = setOptions;\nexports.DomEvent = DomEvent;\nexports.DomUtil = DomUtil;\nexports.PosAnimation = PosAnimation;\nexports.Draggable = Draggable;\nexports.LineUtil = LineUtil;\nexports.PolyUtil = PolyUtil;\nexports.Point = Point;\nexports.point = toPoint;\nexports.Bounds = Bounds;\nexports.bounds = toBounds;\nexports.Transformation = Transformation;\nexports.transformation = toTransformation;\nexports.Projection = index;\nexports.LatLng = LatLng;\nexports.latLng = toLatLng;\nexports.LatLngBounds = LatLngBounds;\nexports.latLngBounds = toLatLngBounds;\nexports.CRS = CRS;\nexports.GeoJSON = GeoJSON;\nexports.geoJSON = geoJSON;\nexports.geoJson = geoJson;\nexports.Layer = Layer;\nexports.LayerGroup = LayerGroup;\nexports.layerGroup = layerGroup;\nexports.FeatureGroup = FeatureGroup;\nexports.featureGroup = featureGroup;\nexports.ImageOverlay = ImageOverlay;\nexports.imageOverlay = imageOverlay;\nexports.VideoOverlay = VideoOverlay;\nexports.videoOverlay = videoOverlay;\nexports.DivOverlay = DivOverlay;\nexports.Popup = Popup;\nexports.popup = popup;\nexports.Tooltip = Tooltip;\nexports.tooltip = tooltip;\nexports.Icon = Icon;\nexports.icon = icon;\nexports.DivIcon = DivIcon;\nexports.divIcon = divIcon;\nexports.Marker = Marker;\nexports.marker = marker;\nexports.TileLayer = TileLayer;\nexports.tileLayer = tileLayer;\nexports.GridLayer = GridLayer;\nexports.gridLayer = gridLayer;\nexports.SVG = SVG;\nexports.svg = svg$1;\nexports.Renderer = Renderer;\nexports.Canvas = Canvas;\nexports.canvas = canvas$1;\nexports.Path = Path;\nexports.CircleMarker = CircleMarker;\nexports.circleMarker = circleMarker;\nexports.Circle = Circle;\nexports.circle = circle;\nexports.Polyline = Polyline;\nexports.polyline = polyline;\nexports.Polygon = Polygon;\nexports.polygon = polygon;\nexports.Rectangle = Rectangle;\nexports.rectangle = rectangle;\nexports.Map = Map;\nexports.map = createMap;\n\nvar oldL = window.L;\nexports.noConflict = function() {\n\twindow.L = oldL;\n\treturn this;\n}\n\n// Always export us to window global (see #2364)\nwindow.L = exports;\n\n})));\n//# sourceMappingURL=leaflet-src.js.map\n\n\n//# sourceURL=webpack:///./node_modules/leaflet/dist/leaflet-src.js?");

/***/ }),

/***/ "./node_modules/leaflet/dist/leaflet.css":
/*!***********************************************!*\
  !*** ./node_modules/leaflet/dist/leaflet.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./node_modules/leaflet/dist/leaflet.css?");

/***/ }),

/***/ "./src/css/map.css":
/*!*************************!*\
  !*** ./src/css/map.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/map.css?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! exports provided: getLocation, setLocation, getData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLocation\", function() { return getLocation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setLocation\", function() { return setLocation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getData\", function() { return getData; });\n/* harmony import */ var _urls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./urls.js */ \"./src/urls.js\");\n\n\n// 取得座標\nfunction getLocation() {\n    const urlParams = new URLSearchParams(location.search);\n\n    const lat = urlParams.get('lat') || localStorage.getItem('lat') || 25.046266;\n    const lng = urlParams.get('lng') || localStorage.getItem('lng') || 121.517406;\n    const zoom = urlParams.get('zoom') || localStorage.getItem('zoom') || 15;\n\n    return {\n        latLng: [+lat, +lng],\n        zoom: +zoom\n    };\n};\n\n// 儲存當下座標至localStorag\nfunction setLocation(map) {\n    return () => {\n        if (!map) {\n            return;\n        }\n\n        let geo = map.getCenter();\n        let [lat, lng] = [geo.lat, geo.lng];\n\n        localStorage.setItem('lat', lat);\n        localStorage.setItem('lng', lng);\n        localStorage.setItem('zoom', map.getZoom());\n    };\n};\n\nfunction toJSON(d) {\n    return d.json();\n};\n\nfunction fetchJSON(url) {\n    return fetch(url).then(toJSON);\n};\n\nasync function fetchJSON_(url) {\n    const d = await fetch(url);\n    return toJSON(d);\n};\n\nasync function getData() {\n    return await Promise.all([fetchJSON(`${_urls_js__WEBPACK_IMPORTED_MODULE_0__[\"urls\"].macros}?method=get_tasks_full_`)]);\n}\n\n//# sourceURL=webpack:///./src/data.js?");

/***/ }),

/***/ "./src/image/icon/direction_64.png":
/*!*****************************************!*\
  !*** ./src/image/icon/direction_64.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/direction_64.png\";\n\n//# sourceURL=webpack:///./src/image/icon/direction_64.png?");

/***/ }),

/***/ "./src/image/icon/favicon.ico":
/*!************************************!*\
  !*** ./src/image/icon/favicon.ico ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/favicon.ico\";\n\n//# sourceURL=webpack:///./src/image/icon/favicon.ico?");

/***/ }),

/***/ "./src/image/icon/location_64.png":
/*!****************************************!*\
  !*** ./src/image/icon/location_64.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/location_64.png\";\n\n//# sourceURL=webpack:///./src/image/icon/location_64.png?");

/***/ }),

/***/ "./src/image/icon/pikachu.gif":
/*!************************************!*\
  !*** ./src/image/icon/pikachu.gif ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/pikachu.gif\";\n\n//# sourceURL=webpack:///./src/image/icon/pikachu.gif?");

/***/ }),

/***/ "./src/image/pm sync recursive \\.(jpg|png)$":
/*!****************************************!*\
  !*** ./src/image/pm sync \.(jpg|png)$ ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./七夕青鳥_.png\": \"./src/image/pm/七夕青鳥_.png\",\n\t\"./三合一磁怪_.png\": \"./src/image/pm/三合一磁怪_.png\",\n\t\"./三地鼠_.png\": \"./src/image/pm/三地鼠_.png\",\n\t\"./三蜜蜂_.png\": \"./src/image/pm/三蜜蜂_.png\",\n\t\"./不良蛙_.png\": \"./src/image/pm/不良蛙_.png\",\n\t\"./九尾_.png\": \"./src/image/pm/九尾_.png\",\n\t\"./亞克諾姆_.png\": \"./src/image/pm/亞克諾姆_.png\",\n\t\"./代歐奇希斯_.png\": \"./src/image/pm/代歐奇希斯_.png\",\n\t\"./伊布_.png\": \"./src/image/pm/伊布_.png\",\n\t\"./佛烈托斯_.png\": \"./src/image/pm/佛烈托斯_.png\",\n\t\"./信使鳥_.png\": \"./src/image/pm/信使鳥_.png\",\n\t\"./倫琴貓_.png\": \"./src/image/pm/倫琴貓_.png\",\n\t\"./傑尼龜_.png\": \"./src/image/pm/傑尼龜_.png\",\n\t\"./催眠貘_.png\": \"./src/image/pm/催眠貘_.png\",\n\t\"./傲骨燕_.png\": \"./src/image/pm/傲骨燕_.png\",\n\t\"./優雅貓_.png\": \"./src/image/pm/優雅貓_.png\",\n\t\"./克雷色利亞_.png\": \"./src/image/pm/克雷色利亞_.png\",\n\t\"./六尾_.png\": \"./src/image/pm/六尾_.png\",\n\t\"./冰伊布_.png\": \"./src/image/pm/冰伊布_.png\",\n\t\"./冰鬼護_.png\": \"./src/image/pm/冰鬼護_.png\",\n\t\"./凱羅斯_.png\": \"./src/image/pm/凱羅斯_.png\",\n\t\"./凱西_.png\": \"./src/image/pm/凱西_.png\",\n\t\"./利歐路_.png\": \"./src/image/pm/利歐路_.png\",\n\t\"./利牙魚_.png\": \"./src/image/pm/利牙魚_.png\",\n\t\"./刺尾蟲_.png\": \"./src/image/pm/刺尾蟲_.png\",\n\t\"./刺球仙人掌_.png\": \"./src/image/pm/刺球仙人掌_.png\",\n\t\"./刺甲貝_.png\": \"./src/image/pm/刺甲貝_.png\",\n\t\"./刺龍王_.png\": \"./src/image/pm/刺龍王_.png\",\n\t\"./力壯雞_.png\": \"./src/image/pm/力壯雞_.png\",\n\t\"./勇基拉_.png\": \"./src/image/pm/勇基拉_.png\",\n\t\"./勒克貓_.png\": \"./src/image/pm/勒克貓_.png\",\n\t\"./勾魂眼_.png\": \"./src/image/pm/勾魂眼_.png\",\n\t\"./化石盔_.png\": \"./src/image/pm/化石盔_.png\",\n\t\"./化石翼龍_.png\": \"./src/image/pm/化石翼龍_.png\",\n\t\"./千針魚_.png\": \"./src/image/pm/千針魚_.png\",\n\t\"./卡咪龜_.png\": \"./src/image/pm/卡咪龜_.png\",\n\t\"./卡拉卡拉_.png\": \"./src/image/pm/卡拉卡拉_.png\",\n\t\"./卡比獸_.png\": \"./src/image/pm/卡比獸_.png\",\n\t\"./卡蒂狗_.png\": \"./src/image/pm/卡蒂狗_.png\",\n\t\"./叉字蝠_.png\": \"./src/image/pm/叉字蝠_.png\",\n\t\"./口呆花_.png\": \"./src/image/pm/口呆花_.png\",\n\t\"./古空棘魚_.png\": \"./src/image/pm/古空棘魚_.png\",\n\t\"./可可多拉_.png\": \"./src/image/pm/可可多拉_.png\",\n\t\"./可多拉_.png\": \"./src/image/pm/可多拉_.png\",\n\t\"./可達鴨_.png\": \"./src/image/pm/可達鴨_.png\",\n\t\"./吉利蛋_.png\": \"./src/image/pm/吉利蛋_.png\",\n\t\"./向尾喵_.png\": \"./src/image/pm/向尾喵_.png\",\n\t\"./向日種子_.png\": \"./src/image/pm/向日種子_.png\",\n\t\"./向日花怪_.png\": \"./src/image/pm/向日花怪_.png\",\n\t\"./吞食獸_.png\": \"./src/image/pm/吞食獸_.png\",\n\t\"./含羞苞_.png\": \"./src/image/pm/含羞苞_.png\",\n\t\"./吼吼鯨_.png\": \"./src/image/pm/吼吼鯨_.png\",\n\t\"./吼爆彈_.png\": \"./src/image/pm/吼爆彈_.png\",\n\t\"./吼鯨王_.png\": \"./src/image/pm/吼鯨王_.png\",\n\t\"./呆呆獸_.png\": \"./src/image/pm/呆呆獸_.png\",\n\t\"./呆呆王_.png\": \"./src/image/pm/呆呆王_.png\",\n\t\"./呆殼獸_.png\": \"./src/image/pm/呆殼獸_.png\",\n\t\"./呆火駝_.png\": \"./src/image/pm/呆火駝_.png\",\n\t\"./咕咕_.png\": \"./src/image/pm/咕咕_.png\",\n\t\"./咕妞妞_.png\": \"./src/image/pm/咕妞妞_.png\",\n\t\"./咩利羊_.png\": \"./src/image/pm/咩利羊_.png\",\n\t\"./哈克龍_.png\": \"./src/image/pm/哈克龍_.png\",\n\t\"./哥達鴨_.png\": \"./src/image/pm/哥達鴨_.png\",\n\t\"./喇叭芽_.png\": \"./src/image/pm/喇叭芽_.png\",\n\t\"./喵喵_.png\": \"./src/image/pm/喵喵_.png\",\n\t\"./嘎啦嘎啦_.png\": \"./src/image/pm/嘎啦嘎啦_.png\",\n\t\"./嘟嘟_.png\": \"./src/image/pm/嘟嘟_.png\",\n\t\"./嘟嘟利_.png\": \"./src/image/pm/嘟嘟利_.png\",\n\t\"./噗噗豬_.png\": \"./src/image/pm/噗噗豬_.png\",\n\t\"./噴火駝_.png\": \"./src/image/pm/噴火駝_.png\",\n\t\"./噴火龍_.png\": \"./src/image/pm/噴火龍_.png\",\n\t\"./固拉多_.png\": \"./src/image/pm/固拉多_.png\",\n\t\"./圈圈熊_.png\": \"./src/image/pm/圈圈熊_.png\",\n\t\"./圓法師_.png\": \"./src/image/pm/圓法師_.png\",\n\t\"./圓絲蛛_.png\": \"./src/image/pm/圓絲蛛_.png\",\n\t\"./圓陸鯊_.png\": \"./src/image/pm/圓陸鯊_.png\",\n\t\"./圖圖犬_.png\": \"./src/image/pm/圖圖犬_.png\",\n\t\"./團體戰任務_.png\": \"./src/image/pm/團體戰任務_.png\",\n\t\"./土台龜_.png\": \"./src/image/pm/土台龜_.png\",\n\t\"./土居忍士_.png\": \"./src/image/pm/土居忍士_.png\",\n\t\"./土狼犬_.png\": \"./src/image/pm/土狼犬_.png\",\n\t\"./土龍弟弟_.png\": \"./src/image/pm/土龍弟弟_.png\",\n\t\"./地鼠_.png\": \"./src/image/pm/地鼠_.png\",\n\t\"./坦克臭鼬_.png\": \"./src/image/pm/坦克臭鼬_.png\",\n\t\"./基拉祈_.png\": \"./src/image/pm/基拉祈_.png\",\n\t\"./墨海馬_.png\": \"./src/image/pm/墨海馬_.png\",\n\t\"./壺壺_.png\": \"./src/image/pm/壺壺_.png\",\n\t\"./多刺菊石獸_.png\": \"./src/image/pm/多刺菊石獸_.png\",\n\t\"./多邊獸_.png\": \"./src/image/pm/多邊獸_.png\",\n\t\"./多邊獸Ⅱ_.png\": \"./src/image/pm/多邊獸Ⅱ_.png\",\n\t\"./多邊獸Ｚ_.png\": \"./src/image/pm/多邊獸Ｚ_.png\",\n\t\"./夜巡靈_.png\": \"./src/image/pm/夜巡靈_.png\",\n\t\"./夢妖_.png\": \"./src/image/pm/夢妖_.png\",\n\t\"./夢妖魔_.png\": \"./src/image/pm/夢妖魔_.png\",\n\t\"./夢幻_.png\": \"./src/image/pm/夢幻_.png\",\n\t\"./夢歌仙人掌_.png\": \"./src/image/pm/夢歌仙人掌_.png\",\n\t\"./大力鱷_.png\": \"./src/image/pm/大力鱷_.png\",\n\t\"./大嘴娃_.png\": \"./src/image/pm/大嘴娃_.png\",\n\t\"./大嘴蝠_.png\": \"./src/image/pm/大嘴蝠_.png\",\n\t\"./大嘴雀_.png\": \"./src/image/pm/大嘴雀_.png\",\n\t\"./大嘴鷗_.png\": \"./src/image/pm/大嘴鷗_.png\",\n\t\"./大奶罐_.png\": \"./src/image/pm/大奶罐_.png\",\n\t\"./大尾狸_.png\": \"./src/image/pm/大尾狸_.png\",\n\t\"./大尾立_.png\": \"./src/image/pm/大尾立_.png\",\n\t\"./大岩蛇_.png\": \"./src/image/pm/大岩蛇_.png\",\n\t\"./大朝北鼻_.png\": \"./src/image/pm/大朝北鼻_.png\",\n\t\"./大比鳥_.png\": \"./src/image/pm/大比鳥_.png\",\n\t\"./大牙狸_.png\": \"./src/image/pm/大牙狸_.png\",\n\t\"./大狼犬_.png\": \"./src/image/pm/大狼犬_.png\",\n\t\"./大王燕_.png\": \"./src/image/pm/大王燕_.png\",\n\t\"./大竺葵_.png\": \"./src/image/pm/大竺葵_.png\",\n\t\"./大舌舔_.png\": \"./src/image/pm/大舌舔_.png\",\n\t\"./大舌貝_.png\": \"./src/image/pm/大舌貝_.png\",\n\t\"./大舌頭_.png\": \"./src/image/pm/大舌頭_.png\",\n\t\"./大蔥鴨_.png\": \"./src/image/pm/大蔥鴨_.png\",\n\t\"./大針蜂_.png\": \"./src/image/pm/大針蜂_.png\",\n\t\"./大鉗蟹_.png\": \"./src/image/pm/大鉗蟹_.png\",\n\t\"./大鋼蛇_.png\": \"./src/image/pm/大鋼蛇_.png\",\n\t\"./大顎蟻_.png\": \"./src/image/pm/大顎蟻_.png\",\n\t\"./大食花_.png\": \"./src/image/pm/大食花_.png\",\n\t\"./天氣怪任務_.png\": \"./src/image/pm/天氣怪任務_.png\",\n\t\"./天然雀_.png\": \"./src/image/pm/天然雀_.png\",\n\t\"./天然鳥_.png\": \"./src/image/pm/天然鳥_.png\",\n\t\"./天秤偶_.png\": \"./src/image/pm/天秤偶_.png\",\n\t\"./天蠍_.png\": \"./src/image/pm/天蠍_.png\",\n\t\"./天蠍王_.png\": \"./src/image/pm/天蠍王_.png\",\n\t\"./太古盔甲_.png\": \"./src/image/pm/太古盔甲_.png\",\n\t\"./太古羽蟲_.png\": \"./src/image/pm/太古羽蟲_.png\",\n\t\"./太陽伊布_.png\": \"./src/image/pm/太陽伊布_.png\",\n\t\"./太陽岩_.png\": \"./src/image/pm/太陽岩_.png\",\n\t\"./太陽珊瑚_.png\": \"./src/image/pm/太陽珊瑚_.png\",\n\t\"./奇魯莉安_.png\": \"./src/image/pm/奇魯莉安_.png\",\n\t\"./妙蛙種子_.png\": \"./src/image/pm/妙蛙種子_.png\",\n\t\"./妙蛙花_.png\": \"./src/image/pm/妙蛙花_.png\",\n\t\"./妙蛙草_.png\": \"./src/image/pm/妙蛙草_.png\",\n\t\"./姆克兒_.png\": \"./src/image/pm/姆克兒_.png\",\n\t\"./姆克鳥_.png\": \"./src/image/pm/姆克鳥_.png\",\n\t\"./姆克鷹_.png\": \"./src/image/pm/姆克鷹_.png\",\n\t\"./安瓢蟲_.png\": \"./src/image/pm/安瓢蟲_.png\",\n\t\"./寶寶丁_.png\": \"./src/image/pm/寶寶丁_.png\",\n\t\"./寶石海星_.png\": \"./src/image/pm/寶石海星_.png\",\n\t\"./寶貝龍_.png\": \"./src/image/pm/寶貝龍_.png\",\n\t\"./小卡比獸_.png\": \"./src/image/pm/小卡比獸_.png\",\n\t\"./小小象_.png\": \"./src/image/pm/小小象_.png\",\n\t\"./小山豬_.png\": \"./src/image/pm/小山豬_.png\",\n\t\"./小拉達_.png\": \"./src/image/pm/小拉達_.png\",\n\t\"./小拳石_.png\": \"./src/image/pm/小拳石_.png\",\n\t\"./小果然_.png\": \"./src/image/pm/小果然_.png\",\n\t\"./小海獅_.png\": \"./src/image/pm/小海獅_.png\",\n\t\"./小火焰猴_.png\": \"./src/image/pm/小火焰猴_.png\",\n\t\"./小火馬_.png\": \"./src/image/pm/小火馬_.png\",\n\t\"./小火龍_.png\": \"./src/image/pm/小火龍_.png\",\n\t\"./小球飛魚_.png\": \"./src/image/pm/小球飛魚_.png\",\n\t\"./小磁怪_.png\": \"./src/image/pm/小磁怪_.png\",\n\t\"./小福蛋_.png\": \"./src/image/pm/小福蛋_.png\",\n\t\"./小貓怪_.png\": \"./src/image/pm/小貓怪_.png\",\n\t\"./小鋸鱷_.png\": \"./src/image/pm/小鋸鱷_.png\",\n\t\"./尖牙籠_.png\": \"./src/image/pm/尖牙籠_.png\",\n\t\"./尖牙陸鯊_.png\": \"./src/image/pm/尖牙陸鯊_.png\",\n\t\"./尼多力諾_.png\": \"./src/image/pm/尼多力諾_.png\",\n\t\"./尼多后_.png\": \"./src/image/pm/尼多后_.png\",\n\t\"./尼多娜_.png\": \"./src/image/pm/尼多娜_.png\",\n\t\"./尼多朗_.png\": \"./src/image/pm/尼多朗_.png\",\n\t\"./尼多王_.png\": \"./src/image/pm/尼多王_.png\",\n\t\"./尼多蘭_.png\": \"./src/image/pm/尼多蘭_.png\",\n\t\"./尾立_.png\": \"./src/image/pm/尾立_.png\",\n\t\"./巨沼怪_.png\": \"./src/image/pm/巨沼怪_.png\",\n\t\"./巨牙鯊_.png\": \"./src/image/pm/巨牙鯊_.png\",\n\t\"./巨翅飛魚_.png\": \"./src/image/pm/巨翅飛魚_.png\",\n\t\"./巨蔓藤_.png\": \"./src/image/pm/巨蔓藤_.png\",\n\t\"./巨金怪_.png\": \"./src/image/pm/巨金怪_.png\",\n\t\"./巨鉗螳螂_.png\": \"./src/image/pm/巨鉗螳螂_.png\",\n\t\"./巨鉗蟹_.png\": \"./src/image/pm/巨鉗蟹_.png\",\n\t\"./巴大蝶_.png\": \"./src/image/pm/巴大蝶_.png\",\n\t\"./布魯_.png\": \"./src/image/pm/布魯_.png\",\n\t\"./布魯皇_.png\": \"./src/image/pm/布魯皇_.png\",\n\t\"./帕奇利茲_.png\": \"./src/image/pm/帕奇利茲_.png\",\n\t\"./帕路奇亞_.png\": \"./src/image/pm/帕路奇亞_.png\",\n\t\"./帝牙海獅_.png\": \"./src/image/pm/帝牙海獅_.png\",\n\t\"./帝牙盧卡_.png\": \"./src/image/pm/帝牙盧卡_.png\",\n\t\"./帝王拿波_.png\": \"./src/image/pm/帝王拿波_.png\",\n\t\"./席多藍恩_.png\": \"./src/image/pm/席多藍恩_.png\",\n\t\"./幕下力士_.png\": \"./src/image/pm/幕下力士_.png\",\n\t\"./幸福蛋_.png\": \"./src/image/pm/幸福蛋_.png\",\n\t\"./幼基拉斯_.png\": \"./src/image/pm/幼基拉斯_.png\",\n\t\"./引夢貘人_.png\": \"./src/image/pm/引夢貘人_.png\",\n\t\"./彷徨夜靈_.png\": \"./src/image/pm/彷徨夜靈_.png\",\n\t\"./快拳郎_.png\": \"./src/image/pm/快拳郎_.png\",\n\t\"./快龍_.png\": \"./src/image/pm/快龍_.png\",\n\t\"./念力土偶_.png\": \"./src/image/pm/念力土偶_.png\",\n\t\"./急凍鳥_.png\": \"./src/image/pm/急凍鳥_.png\",\n\t\"./怨影娃娃_.png\": \"./src/image/pm/怨影娃娃_.png\",\n\t\"./怪力_.png\": \"./src/image/pm/怪力_.png\",\n\t\"./恰雷姆_.png\": \"./src/image/pm/恰雷姆_.png\",\n\t\"./愛心魚_.png\": \"./src/image/pm/愛心魚_.png\",\n\t\"./懶人獺_.png\": \"./src/image/pm/懶人獺_.png\",\n\t\"./戰槌龍_.png\": \"./src/image/pm/戰槌龍_.png\",\n\t\"./戰舞郎_.png\": \"./src/image/pm/戰舞郎_.png\",\n\t\"./戴魯比_.png\": \"./src/image/pm/戴魯比_.png\",\n\t\"./投球任務_.png\": \"./src/image/pm/投球任務_.png\",\n\t\"./拉帝亞斯_.png\": \"./src/image/pm/拉帝亞斯_.png\",\n\t\"./拉帝歐斯_.png\": \"./src/image/pm/拉帝歐斯_.png\",\n\t\"./拉普拉斯_.png\": \"./src/image/pm/拉普拉斯_.png\",\n\t\"./拉達_.png\": \"./src/image/pm/拉達_.png\",\n\t\"./拉魯拉絲_.png\": \"./src/image/pm/拉魯拉絲_.png\",\n\t\"./捲捲耳_.png\": \"./src/image/pm/捲捲耳_.png\",\n\t\"./搖籃百合_.png\": \"./src/image/pm/搖籃百合_.png\",\n\t\"./摩魯蛾_.png\": \"./src/image/pm/摩魯蛾_.png\",\n\t\"./斗笠菇_.png\": \"./src/image/pm/斗笠菇_.png\",\n\t\"./時拉比_.png\": \"./src/image/pm/時拉比_.png\",\n\t\"./晃晃斑(2號)_.png\": \"./src/image/pm/晃晃斑(2號)_.png\",\n\t\"./晃晃斑(4號)_.png\": \"./src/image/pm/晃晃斑(4號)_.png\",\n\t\"./晃晃斑(5號)_.png\": \"./src/image/pm/晃晃斑(5號)_.png\",\n\t\"./晃晃斑(6號)_.png\": \"./src/image/pm/晃晃斑(6號)_.png\",\n\t\"./晃晃斑(愛心)_.png\": \"./src/image/pm/晃晃斑(愛心)_.png\",\n\t\"./晃晃斑_.png\": \"./src/image/pm/晃晃斑_.png\",\n\t\"./暴雪王_.png\": \"./src/image/pm/暴雪王_.png\",\n\t\"./暴飛龍_.png\": \"./src/image/pm/暴飛龍_.png\",\n\t\"./暴鯉龍_.png\": \"./src/image/pm/暴鯉龍_.png\",\n\t\"./月亮伊布_.png\": \"./src/image/pm/月亮伊布_.png\",\n\t\"./月桂葉_.png\": \"./src/image/pm/月桂葉_.png\",\n\t\"./月石_.png\": \"./src/image/pm/月石_.png\",\n\t\"./朝北鼻_.png\": \"./src/image/pm/朝北鼻_.png\",\n\t\"./木守宮_.png\": \"./src/image/pm/木守宮_.png\",\n\t\"./未知圖騰_.png\": \"./src/image/pm/未知圖騰_.png\",\n\t\"./東施喵_.png\": \"./src/image/pm/東施喵_.png\",\n\t\"./果然翁_.png\": \"./src/image/pm/果然翁_.png\",\n\t\"./森林蜥蜴_.png\": \"./src/image/pm/森林蜥蜴_.png\",\n\t\"./椰蛋樹_.png\": \"./src/image/pm/椰蛋樹_.png\",\n\t\"./榛果球_.png\": \"./src/image/pm/榛果球_.png\",\n\t\"./樂天河童_.png\": \"./src/image/pm/樂天河童_.png\",\n\t\"./樹才怪_.png\": \"./src/image/pm/樹才怪_.png\",\n\t\"./樹林龜_.png\": \"./src/image/pm/樹林龜_.png\",\n\t\"./橡實果_.png\": \"./src/image/pm/橡實果_.png\",\n\t\"./櫻花兒_.png\": \"./src/image/pm/櫻花兒_.png\",\n\t\"./櫻花寶_.png\": \"./src/image/pm/櫻花寶_.png\",\n\t\"./櫻花魚_.png\": \"./src/image/pm/櫻花魚_.png\",\n\t\"./正電拍拍_.png\": \"./src/image/pm/正電拍拍_.png\",\n\t\"./毒刺水母_.png\": \"./src/image/pm/毒刺水母_.png\",\n\t\"./毒粉蛾_.png\": \"./src/image/pm/毒粉蛾_.png\",\n\t\"./毒薔薇_.png\": \"./src/image/pm/毒薔薇_.png\",\n\t\"./毒骷蛙_.png\": \"./src/image/pm/毒骷蛙_.png\",\n\t\"./比比鳥_.png\": \"./src/image/pm/比比鳥_.png\",\n\t\"./毛球_.png\": \"./src/image/pm/毛球_.png\",\n\t\"./毽子棉_.png\": \"./src/image/pm/毽子棉_.png\",\n\t\"./毽子花_.png\": \"./src/image/pm/毽子花_.png\",\n\t\"./毽子草_.png\": \"./src/image/pm/毽子草_.png\",\n\t\"./水伊布_.png\": \"./src/image/pm/水伊布_.png\",\n\t\"./水君_.png\": \"./src/image/pm/水君_.png\",\n\t\"./水箭龜_.png\": \"./src/image/pm/水箭龜_.png\",\n\t\"./水躍魚_.png\": \"./src/image/pm/水躍魚_.png\",\n\t\"./沙基拉斯_.png\": \"./src/image/pm/沙基拉斯_.png\",\n\t\"./沙奈朵_.png\": \"./src/image/pm/沙奈朵_.png\",\n\t\"./沙河馬_.png\": \"./src/image/pm/沙河馬_.png\",\n\t\"./沙漠蜻蜓_.png\": \"./src/image/pm/沙漠蜻蜓_.png\",\n\t\"./河馬獸_.png\": \"./src/image/pm/河馬獸_.png\",\n\t\"./沼王_.png\": \"./src/image/pm/沼王_.png\",\n\t\"./沼躍魚_.png\": \"./src/image/pm/沼躍魚_.png\",\n\t\"./波克基古_.png\": \"./src/image/pm/波克基古_.png\",\n\t\"./波克基斯_.png\": \"./src/image/pm/波克基斯_.png\",\n\t\"./波克比_.png\": \"./src/image/pm/波克比_.png\",\n\t\"./波加曼_.png\": \"./src/image/pm/波加曼_.png\",\n\t\"./波士可多拉_.png\": \"./src/image/pm/波士可多拉_.png\",\n\t\"./波波_.png\": \"./src/image/pm/波波_.png\",\n\t\"./波皇子_.png\": \"./src/image/pm/波皇子_.png\",\n\t\"./泥泥鰍_.png\": \"./src/image/pm/泥泥鰍_.png\",\n\t\"./泳圈鼬_.png\": \"./src/image/pm/泳圈鼬_.png\",\n\t\"./洛奇亞_.png\": \"./src/image/pm/洛奇亞_.png\",\n\t\"./洛托姆_.png\": \"./src/image/pm/洛托姆_.png\",\n\t\"./派拉斯_.png\": \"./src/image/pm/派拉斯_.png\",\n\t\"./派拉斯特_.png\": \"./src/image/pm/派拉斯特_.png\",\n\t\"./浮潛鼬_.png\": \"./src/image/pm/浮潛鼬_.png\",\n\t\"./海兔獸_.png\": \"./src/image/pm/海兔獸_.png\",\n\t\"./海刺龍_.png\": \"./src/image/pm/海刺龍_.png\",\n\t\"./海星星_.png\": \"./src/image/pm/海星星_.png\",\n\t\"./海豹球_.png\": \"./src/image/pm/海豹球_.png\",\n\t\"./海魔獅_.png\": \"./src/image/pm/海魔獅_.png\",\n\t\"./溜溜糖球_.png\": \"./src/image/pm/溜溜糖球_.png\",\n\t\"./溶食獸_.png\": \"./src/image/pm/溶食獸_.png\",\n\t\"./火伊布_.png\": \"./src/image/pm/火伊布_.png\",\n\t\"./火岩鼠_.png\": \"./src/image/pm/火岩鼠_.png\",\n\t\"./火恐龍_.png\": \"./src/image/pm/火恐龍_.png\",\n\t\"./火焰雞_.png\": \"./src/image/pm/火焰雞_.png\",\n\t\"./火焰鳥_.png\": \"./src/image/pm/火焰鳥_.png\",\n\t\"./火爆猴_.png\": \"./src/image/pm/火爆猴_.png\",\n\t\"./火爆獸_.png\": \"./src/image/pm/火爆獸_.png\",\n\t\"./火球鼠_.png\": \"./src/image/pm/火球鼠_.png\",\n\t\"./火稚雞_.png\": \"./src/image/pm/火稚雞_.png\",\n\t\"./炎帝_.png\": \"./src/image/pm/炎帝_.png\",\n\t\"./烈咬陸鯊_.png\": \"./src/image/pm/烈咬陸鯊_.png\",\n\t\"./烈焰猴_.png\": \"./src/image/pm/烈焰猴_.png\",\n\t\"./烈焰馬_.png\": \"./src/image/pm/烈焰馬_.png\",\n\t\"./烈空坐_.png\": \"./src/image/pm/烈空坐_.png\",\n\t\"./烈雀_.png\": \"./src/image/pm/烈雀_.png\",\n\t\"./烏波_.png\": \"./src/image/pm/烏波_.png\",\n\t\"./烏鴉頭頭_.png\": \"./src/image/pm/烏鴉頭頭_.png\",\n\t\"./無殼海兔_.png\": \"./src/image/pm/無殼海兔_.png\",\n\t\"./無畏小子_.png\": \"./src/image/pm/無畏小子_.png\",\n\t\"./煤炭龜_.png\": \"./src/image/pm/煤炭龜_.png\",\n\t\"./熊寶寶_.png\": \"./src/image/pm/熊寶寶_.png\",\n\t\"./熔岩蝸牛_.png\": \"./src/image/pm/熔岩蝸牛_.png\",\n\t\"./熔岩蟲_.png\": \"./src/image/pm/熔岩蟲_.png\",\n\t\"./熱帶龍_.png\": \"./src/image/pm/熱帶龍_.png\",\n\t\"./燈籠魚_.png\": \"./src/image/pm/燈籠魚_.png\",\n\t\"./爆音怪_.png\": \"./src/image/pm/爆音怪_.png\",\n\t\"./狃拉_.png\": \"./src/image/pm/狃拉_.png\",\n\t\"./狡猾天狗_.png\": \"./src/image/pm/狡猾天狗_.png\",\n\t\"./狩獵鳳蝶_.png\": \"./src/image/pm/狩獵鳳蝶_.png\",\n\t\"./猛火猴_.png\": \"./src/image/pm/猛火猴_.png\",\n\t\"./猴怪_.png\": \"./src/image/pm/猴怪_.png\",\n\t\"./獨角犀牛_.png\": \"./src/image/pm/獨角犀牛_.png\",\n\t\"./獨角蟲_.png\": \"./src/image/pm/獨角蟲_.png\",\n\t\"./獵斑魚_.png\": \"./src/image/pm/獵斑魚_.png\",\n\t\"./珍珠貝_.png\": \"./src/image/pm/珍珠貝_.png\",\n\t\"./班基拉斯_.png\": \"./src/image/pm/班基拉斯_.png\",\n\t\"./瑪力露_.png\": \"./src/image/pm/瑪力露_.png\",\n\t\"./瑪力露麗_.png\": \"./src/image/pm/瑪力露麗_.png\",\n\t\"./瑪沙那_.png\": \"./src/image/pm/瑪沙那_.png\",\n\t\"./瑪狃拉_.png\": \"./src/image/pm/瑪狃拉_.png\",\n\t\"./瑪瑙水母_.png\": \"./src/image/pm/瑪瑙水母_.png\",\n\t\"./瑪納霏_.png\": \"./src/image/pm/瑪納霏_.png\",\n\t\"./瓦斯彈_.png\": \"./src/image/pm/瓦斯彈_.png\",\n\t\"./甜甜螢_.png\": \"./src/image/pm/甜甜螢_.png\",\n\t\"./由克希_.png\": \"./src/image/pm/由克希_.png\",\n\t\"./甲殼繭_.png\": \"./src/image/pm/甲殼繭_.png\",\n\t\"./甲殼龍_.png\": \"./src/image/pm/甲殼龍_.png\",\n\t\"./白海獅_.png\": \"./src/image/pm/白海獅_.png\",\n\t\"./百變怪_.png\": \"./src/image/pm/百變怪_.png\",\n\t\"./皮丘_.png\": \"./src/image/pm/皮丘_.png\",\n\t\"./皮卡丘_.png\": \"./src/image/pm/皮卡丘_.png\",\n\t\"./皮可西_.png\": \"./src/image/pm/皮可西_.png\",\n\t\"./皮寶寶_.png\": \"./src/image/pm/皮寶寶_.png\",\n\t\"./皮皮_.png\": \"./src/image/pm/皮皮_.png\",\n\t\"./盆才怪_.png\": \"./src/image/pm/盆才怪_.png\",\n\t\"./盔甲鳥_.png\": \"./src/image/pm/盔甲鳥_.png\",\n\t\"./直衝熊_.png\": \"./src/image/pm/直衝熊_.png\",\n\t\"./盾甲繭_.png\": \"./src/image/pm/盾甲繭_.png\",\n\t\"./盾甲龍_.png\": \"./src/image/pm/盾甲龍_.png\",\n\t\"./穿山王_.png\": \"./src/image/pm/穿山王_.png\",\n\t\"./穿山鼠_.png\": \"./src/image/pm/穿山鼠_.png\",\n\t\"./章魚桶_.png\": \"./src/image/pm/章魚桶_.png\",\n\t\"./紳士蛾_.png\": \"./src/image/pm/紳士蛾_.png\",\n\t\"./結草兒_.png\": \"./src/image/pm/結草兒_.png\",\n\t\"./結草貴婦_.png\": \"./src/image/pm/結草貴婦_.png\",\n\t\"./綠毛蟲_.png\": \"./src/image/pm/綠毛蟲_.png\",\n\t\"./羅絲雷朵_.png\": \"./src/image/pm/羅絲雷朵_.png\",\n\t\"./美納斯_.png\": \"./src/image/pm/美納斯_.png\",\n\t\"./美麗花_.png\": \"./src/image/pm/美麗花_.png\",\n\t\"./耿鬼_.png\": \"./src/image/pm/耿鬼_.png\",\n\t\"./聒噪鳥_.png\": \"./src/image/pm/聒噪鳥_.png\",\n\t\"./肯泰羅_.png\": \"./src/image/pm/肯泰羅_.png\",\n\t\"./胖丁_.png\": \"./src/image/pm/胖丁_.png\",\n\t\"./胖可丁_.png\": \"./src/image/pm/胖可丁_.png\",\n\t\"./胡地_.png\": \"./src/image/pm/胡地_.png\",\n\t\"./脫殼忍者_.png\": \"./src/image/pm/脫殼忍者_.png\",\n\t\"./腕力_.png\": \"./src/image/pm/腕力_.png\",\n\t\"./自爆磁怪_.png\": \"./src/image/pm/自爆磁怪_.png\",\n\t\"./臭泥_.png\": \"./src/image/pm/臭泥_.png\",\n\t\"./臭臭泥_.png\": \"./src/image/pm/臭臭泥_.png\",\n\t\"./臭臭花_.png\": \"./src/image/pm/臭臭花_.png\",\n\t\"./臭鼬噗_.png\": \"./src/image/pm/臭鼬噗_.png\",\n\t\"./艾姆利多_.png\": \"./src/image/pm/艾姆利多_.png\",\n\t\"./艾路雷朵_.png\": \"./src/image/pm/艾路雷朵_.png\",\n\t\"./芭瓢蟲_.png\": \"./src/image/pm/芭瓢蟲_.png\",\n\t\"./花岩怪_.png\": \"./src/image/pm/花岩怪_.png\",\n\t\"./茸茸羊_.png\": \"./src/image/pm/茸茸羊_.png\",\n\t\"./草苗龜_.png\": \"./src/image/pm/草苗龜_.png\",\n\t\"./菊石獸_.png\": \"./src/image/pm/菊石獸_.png\",\n\t\"./菊草葉_.png\": \"./src/image/pm/菊草葉_.png\",\n\t\"./落雷獸_.png\": \"./src/image/pm/落雷獸_.png\",\n\t\"./葉伊布_.png\": \"./src/image/pm/葉伊布_.png\",\n\t\"./蓋歐卡_.png\": \"./src/image/pm/蓋歐卡_.png\",\n\t\"./蓮帽小童_.png\": \"./src/image/pm/蓮帽小童_.png\",\n\t\"./蓮葉童子_.png\": \"./src/image/pm/蓮葉童子_.png\",\n\t\"./蔓藤怪_.png\": \"./src/image/pm/蔓藤怪_.png\",\n\t\"./藍鱷_.png\": \"./src/image/pm/藍鱷_.png\",\n\t\"./蘑蘑菇_.png\": \"./src/image/pm/蘑蘑菇_.png\",\n\t\"./蚊香君_.png\": \"./src/image/pm/蚊香君_.png\",\n\t\"./蚊香泳士_.png\": \"./src/image/pm/蚊香泳士_.png\",\n\t\"./蚊香蛙皇_.png\": \"./src/image/pm/蚊香蛙皇_.png\",\n\t\"./蚊香蝌蚪_.png\": \"./src/image/pm/蚊香蝌蚪_.png\",\n\t\"./蛇紋熊_.png\": \"./src/image/pm/蛇紋熊_.png\",\n\t\"./蛋蛋_.png\": \"./src/image/pm/蛋蛋_.png\",\n\t\"./蜂女王_.png\": \"./src/image/pm/蜂女王_.png\",\n\t\"./蜥蜴王_.png\": \"./src/image/pm/蜥蜴王_.png\",\n\t\"./蜻蜻蜓_.png\": \"./src/image/pm/蜻蜻蜓_.png\",\n\t\"./螢光魚_.png\": \"./src/image/pm/螢光魚_.png\",\n\t\"./袋獸_.png\": \"./src/image/pm/袋獸_.png\",\n\t\"./補給站轉排任務_.png\": \"./src/image/pm/補給站轉排任務_.png\",\n\t\"./角金魚_.png\": \"./src/image/pm/角金魚_.png\",\n\t\"./觸手百合_.png\": \"./src/image/pm/觸手百合_.png\",\n\t\"./詛咒娃娃_.png\": \"./src/image/pm/詛咒娃娃_.png\",\n\t\"./請假王_.png\": \"./src/image/pm/請假王_.png\",\n\t\"./謝米_.png\": \"./src/image/pm/謝米_.png\",\n\t\"./護城龍_.png\": \"./src/image/pm/護城龍_.png\",\n\t\"./變隱龍_.png\": \"./src/image/pm/變隱龍_.png\",\n\t\"./象牙豬_.png\": \"./src/image/pm/象牙豬_.png\",\n\t\"./豪力_.png\": \"./src/image/pm/豪力_.png\",\n\t\"./貓老大_.png\": \"./src/image/pm/貓老大_.png\",\n\t\"./貓頭夜鷹_.png\": \"./src/image/pm/貓頭夜鷹_.png\",\n\t\"./貓鼬斬_.png\": \"./src/image/pm/貓鼬斬_.png\",\n\t\"./負電拍拍_.png\": \"./src/image/pm/負電拍拍_.png\",\n\t\"./赫拉克羅斯_.png\": \"./src/image/pm/赫拉克羅斯_.png\",\n\t\"./走路草_.png\": \"./src/image/pm/走路草_.png\",\n\t\"./超夢_.png\": \"./src/image/pm/超夢_.png\",\n\t\"./超甲狂犀_.png\": \"./src/image/pm/超甲狂犀_.png\",\n\t\"./超音波幼蟲_.png\": \"./src/image/pm/超音波幼蟲_.png\",\n\t\"./超音蝠_.png\": \"./src/image/pm/超音蝠_.png\",\n\t\"./路卡利歐_.png\": \"./src/image/pm/路卡利歐_.png\",\n\t\"./跳跳豬_.png\": \"./src/image/pm/跳跳豬_.png\",\n\t\"./迷你龍_.png\": \"./src/image/pm/迷你龍_.png\",\n\t\"./迷唇姐_.png\": \"./src/image/pm/迷唇姐_.png\",\n\t\"./迷唇娃_.png\": \"./src/image/pm/迷唇娃_.png\",\n\t\"./過動猿_.png\": \"./src/image/pm/過動猿_.png\",\n\t\"./道館對戰任務_.png\": \"./src/image/pm/道館對戰任務_.png\",\n\t\"./達克萊伊_.png\": \"./src/image/pm/達克萊伊_.png\",\n\t\"./遠古巨蜓_.png\": \"./src/image/pm/遠古巨蜓_.png\",\n\t\"./醜醜魚_.png\": \"./src/image/pm/醜醜魚_.png\",\n\t\"./金屬怪_.png\": \"./src/image/pm/金屬怪_.png\",\n\t\"./金魚王_.png\": \"./src/image/pm/金魚王_.png\",\n\t\"./鈴鐺響_.png\": \"./src/image/pm/鈴鐺響_.png\",\n\t\"./鉗尾蠍_.png\": \"./src/image/pm/鉗尾蠍_.png\",\n\t\"./銀凰果_.png\": \"./src/image/pm/銀凰果_.png\",\n\t\"./銅鏡怪_.png\": \"./src/image/pm/銅鏡怪_.png\",\n\t\"./鐮刀盔_.png\": \"./src/image/pm/鐮刀盔_.png\",\n\t\"./鐵啞鈴_.png\": \"./src/image/pm/鐵啞鈴_.png\",\n\t\"./鐵掌力士_.png\": \"./src/image/pm/鐵掌力士_.png\",\n\t\"./鐵殼蛹_.png\": \"./src/image/pm/鐵殼蛹_.png\",\n\t\"./鐵炮魚_.png\": \"./src/image/pm/鐵炮魚_.png\",\n\t\"./鐵甲蛹_.png\": \"./src/image/pm/鐵甲蛹_.png\",\n\t\"./鐵螯龍蝦_.png\": \"./src/image/pm/鐵螯龍蝦_.png\",\n\t\"./鐵面忍者_.png\": \"./src/image/pm/鐵面忍者_.png\",\n\t\"./鑽角犀獸_.png\": \"./src/image/pm/鑽角犀獸_.png\",\n\t\"./長尾怪手_.png\": \"./src/image/pm/長尾怪手_.png\",\n\t\"./長毛豬_.png\": \"./src/image/pm/長毛豬_.png\",\n\t\"./長翅鷗_.png\": \"./src/image/pm/長翅鷗_.png\",\n\t\"./長耳兔_.png\": \"./src/image/pm/長耳兔_.png\",\n\t\"./長鼻葉_.png\": \"./src/image/pm/長鼻葉_.png\",\n\t\"./閃電鳥_.png\": \"./src/image/pm/閃電鳥_.png\",\n\t\"./阿利多斯_.png\": \"./src/image/pm/阿利多斯_.png\",\n\t\"./阿勃梭魯_.png\": \"./src/image/pm/阿勃梭魯_.png\",\n\t\"./阿柏怪_.png\": \"./src/image/pm/阿柏怪_.png\",\n\t\"./阿柏蛇_.png\": \"./src/image/pm/阿柏蛇_.png\",\n\t\"./阿爾宙斯_.png\": \"./src/image/pm/阿爾宙斯_.png\",\n\t\"./隆隆岩_.png\": \"./src/image/pm/隆隆岩_.png\",\n\t\"./隆隆石_.png\": \"./src/image/pm/隆隆石_.png\",\n\t\"./隨風球_.png\": \"./src/image/pm/隨風球_.png\",\n\t\"./雙尾怪手_.png\": \"./src/image/pm/雙尾怪手_.png\",\n\t\"./雙彈瓦斯_.png\": \"./src/image/pm/雙彈瓦斯_.png\",\n\t\"./雨翅蛾_.png\": \"./src/image/pm/雨翅蛾_.png\",\n\t\"./雪妖女_.png\": \"./src/image/pm/雪妖女_.png\",\n\t\"./雪童子_.png\": \"./src/image/pm/雪童子_.png\",\n\t\"./雪笠怪_.png\": \"./src/image/pm/雪笠怪_.png\",\n\t\"./雷丘_.png\": \"./src/image/pm/雷丘_.png\",\n\t\"./雷伊布_.png\": \"./src/image/pm/雷伊布_.png\",\n\t\"./雷公_.png\": \"./src/image/pm/雷公_.png\",\n\t\"./雷吉奇卡斯_.png\": \"./src/image/pm/雷吉奇卡斯_.png\",\n\t\"./雷吉斯奇魯_.png\": \"./src/image/pm/雷吉斯奇魯_.png\",\n\t\"./雷吉洛克_.png\": \"./src/image/pm/雷吉洛克_.png\",\n\t\"./雷吉艾斯_.png\": \"./src/image/pm/雷吉艾斯_.png\",\n\t\"./雷電獸_.png\": \"./src/image/pm/雷電獸_.png\",\n\t\"./電擊怪_.png\": \"./src/image/pm/電擊怪_.png\",\n\t\"./電擊獸_.png\": \"./src/image/pm/電擊獸_.png\",\n\t\"./電擊魔獸_.png\": \"./src/image/pm/電擊魔獸_.png\",\n\t\"./電燈怪_.png\": \"./src/image/pm/電燈怪_.png\",\n\t\"./電螢蟲_.png\": \"./src/image/pm/電螢蟲_.png\",\n\t\"./電龍_.png\": \"./src/image/pm/電龍_.png\",\n\t\"./霏歐納_.png\": \"./src/image/pm/霏歐納_.png\",\n\t\"./霓虹魚_.png\": \"./src/image/pm/霓虹魚_.png\",\n\t\"./露力麗_.png\": \"./src/image/pm/露力麗_.png\",\n\t\"./霸王花_.png\": \"./src/image/pm/霸王花_.png\",\n\t\"./霹靂電球_.png\": \"./src/image/pm/霹靂電球_.png\",\n\t\"./青綿鳥_.png\": \"./src/image/pm/青綿鳥_.png\",\n\t\"./青銅鐘_.png\": \"./src/image/pm/青銅鐘_.png\",\n\t\"./音箱蟀_.png\": \"./src/image/pm/音箱蟀_.png\",\n\t\"./頑皮雷彈_.png\": \"./src/image/pm/頑皮雷彈_.png\",\n\t\"./頓甲_.png\": \"./src/image/pm/頓甲_.png\",\n\t\"./頭蓋龍_.png\": \"./src/image/pm/頭蓋龍_.png\",\n\t\"./風速狗_.png\": \"./src/image/pm/風速狗_.png\",\n\t\"./風鈴鈴_.png\": \"./src/image/pm/風鈴鈴_.png\",\n\t\"./飄浮泡泡_.png\": \"./src/image/pm/飄浮泡泡_.png\",\n\t\"./飄飄球_.png\": \"./src/image/pm/飄飄球_.png\",\n\t\"./飛天螳螂_.png\": \"./src/image/pm/飛天螳螂_.png\",\n\t\"./飛腿郎_.png\": \"./src/image/pm/飛腿郎_.png\",\n\t\"./飯匙蛇_.png\": \"./src/image/pm/飯匙蛇_.png\",\n\t\"./餵食樹果任務_.png\": \"./src/image/pm/餵食樹果任務_.png\",\n\t\"./騎拉帝納_.png\": \"./src/image/pm/騎拉帝納_.png\",\n\t\"./驚角鹿_.png\": \"./src/image/pm/驚角鹿_.png\",\n\t\"./鬼斯_.png\": \"./src/image/pm/鬼斯_.png\",\n\t\"./鬼斯通_.png\": \"./src/image/pm/鬼斯通_.png\",\n\t\"./魅力喵_.png\": \"./src/image/pm/魅力喵_.png\",\n\t\"./魔尼尼_.png\": \"./src/image/pm/魔尼尼_.png\",\n\t\"./魔牆人偶_.png\": \"./src/image/pm/魔牆人偶_.png\",\n\t\"./鯉魚王_.png\": \"./src/image/pm/鯉魚王_.png\",\n\t\"./鯰魚王_.png\": \"./src/image/pm/鯰魚王_.png\",\n\t\"./鳳王_.png\": \"./src/image/pm/鳳王_.png\",\n\t\"./鴨嘴寶寶_.png\": \"./src/image/pm/鴨嘴寶寶_.png\",\n\t\"./鴨嘴火獸_.png\": \"./src/image/pm/鴨嘴火獸_.png\",\n\t\"./鴨嘴炎獸_.png\": \"./src/image/pm/鴨嘴炎獸_.png\",\n\t\"./麒麟奇_.png\": \"./src/image/pm/麒麟奇_.png\",\n\t\"./黑夜魔靈_.png\": \"./src/image/pm/黑夜魔靈_.png\",\n\t\"./黑暗鴉_.png\": \"./src/image/pm/黑暗鴉_.png\",\n\t\"./黑魯加_.png\": \"./src/image/pm/黑魯加_.png\",\n\t\"./龍王蠍_.png\": \"./src/image/pm/龍王蠍_.png\",\n\t\"./龍蝦小兵_.png\": \"./src/image/pm/龍蝦小兵_.png\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/image/pm sync recursive \\\\.(jpg|png)$\";\n\n//# sourceURL=webpack:///./src/image/pm_sync_\\.(jpg%7Cpng)$?");

/***/ }),

/***/ "./src/image/pm/七夕青鳥_.png":
/*!********************************!*\
  !*** ./src/image/pm/七夕青鳥_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/七夕青鳥_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E4%B8%83%E5%A4%95%E9%9D%92%E9%B3%A5_.png?");

/***/ }),

/***/ "./src/image/pm/三合一磁怪_.png":
/*!*********************************!*\
  !*** ./src/image/pm/三合一磁怪_.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/三合一磁怪_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E4%B8%89%E5%90%88%E4%B8%80%E7%A3%81%E6%80%AA_.png?");

/***/ }),

/***/ "./src/image/pm/三地鼠_.png":
/*!*******************************!*\
  !*** ./src/image/pm/三地鼠_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/三地鼠_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E4%B8%89%E5%9C%B0%E9%BC%A0_.png?");

/***/ }),

/***/ "./src/image/pm/三蜜蜂_.png":
/*!*******************************!*\
  !*** ./src/image/pm/三蜜蜂_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/三蜜蜂_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E4%B8%89%E8%9C%9C%E8%9C%82_.png?");

/***/ }),

/***/ "./src/image/pm/不良蛙_.png":
/*!*******************************!*\
  !*** ./src/image/pm/不良蛙_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/不良蛙_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E4%B8%8D%E8%89%AF%E8%9B%99_.png?");

/***/ }),

/***/ "./src/image/pm/九尾_.png":
/*!******************************!*\
  !*** ./src/image/pm/九尾_.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/九尾_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E4%B9%9D%E5%B0%BE_.png?");

/***/ }),

/***/ "./src/image/pm/亞克諾姆_.png":
/*!********************************!*\
  !*** ./src/image/pm/亞克諾姆_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/亞克諾姆_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E4%BA%9E%E5%85%8B%E8%AB%BE%E5%A7%86_.png?");

/***/ }),

/***/ "./src/image/pm/代歐奇希斯_.png":
/*!*********************************!*\
  !*** ./src/image/pm/代歐奇希斯_.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/代歐奇希斯_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E4%BB%A3%E6%AD%90%E5%A5%87%E5%B8%8C%E6%96%AF_.png?");

/***/ }),

/***/ "./src/image/pm/伊布_.png":
/*!******************************!*\
  !*** ./src/image/pm/伊布_.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/伊布_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E4%BC%8A%E5%B8%83_.png?");

/***/ }),

/***/ "./src/image/pm/佛烈托斯_.png":
/*!********************************!*\
  !*** ./src/image/pm/佛烈托斯_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/佛烈托斯_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E4%BD%9B%E7%83%88%E6%89%98%E6%96%AF_.png?");

/***/ }),

/***/ "./src/image/pm/信使鳥_.png":
/*!*******************************!*\
  !*** ./src/image/pm/信使鳥_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/信使鳥_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E4%BF%A1%E4%BD%BF%E9%B3%A5_.png?");

/***/ }),

/***/ "./src/image/pm/倫琴貓_.png":
/*!*******************************!*\
  !*** ./src/image/pm/倫琴貓_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/倫琴貓_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%80%AB%E7%90%B4%E8%B2%93_.png?");

/***/ }),

/***/ "./src/image/pm/傑尼龜_.png":
/*!*******************************!*\
  !*** ./src/image/pm/傑尼龜_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/傑尼龜_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%82%91%E5%B0%BC%E9%BE%9C_.png?");

/***/ }),

/***/ "./src/image/pm/催眠貘_.png":
/*!*******************************!*\
  !*** ./src/image/pm/催眠貘_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/催眠貘_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%82%AC%E7%9C%A0%E8%B2%98_.png?");

/***/ }),

/***/ "./src/image/pm/傲骨燕_.png":
/*!*******************************!*\
  !*** ./src/image/pm/傲骨燕_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/傲骨燕_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%82%B2%E9%AA%A8%E7%87%95_.png?");

/***/ }),

/***/ "./src/image/pm/優雅貓_.png":
/*!*******************************!*\
  !*** ./src/image/pm/優雅貓_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/優雅貓_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%84%AA%E9%9B%85%E8%B2%93_.png?");

/***/ }),

/***/ "./src/image/pm/克雷色利亞_.png":
/*!*********************************!*\
  !*** ./src/image/pm/克雷色利亞_.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/克雷色利亞_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%85%8B%E9%9B%B7%E8%89%B2%E5%88%A9%E4%BA%9E_.png?");

/***/ }),

/***/ "./src/image/pm/六尾_.png":
/*!******************************!*\
  !*** ./src/image/pm/六尾_.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/六尾_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%85%AD%E5%B0%BE_.png?");

/***/ }),

/***/ "./src/image/pm/冰伊布_.png":
/*!*******************************!*\
  !*** ./src/image/pm/冰伊布_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/冰伊布_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%86%B0%E4%BC%8A%E5%B8%83_.png?");

/***/ }),

/***/ "./src/image/pm/冰鬼護_.png":
/*!*******************************!*\
  !*** ./src/image/pm/冰鬼護_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/冰鬼護_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%86%B0%E9%AC%BC%E8%AD%B7_.png?");

/***/ }),

/***/ "./src/image/pm/凱羅斯_.png":
/*!*******************************!*\
  !*** ./src/image/pm/凱羅斯_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/凱羅斯_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%87%B1%E7%BE%85%E6%96%AF_.png?");

/***/ }),

/***/ "./src/image/pm/凱西_.png":
/*!******************************!*\
  !*** ./src/image/pm/凱西_.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/凱西_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%87%B1%E8%A5%BF_.png?");

/***/ }),

/***/ "./src/image/pm/利歐路_.png":
/*!*******************************!*\
  !*** ./src/image/pm/利歐路_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/利歐路_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%88%A9%E6%AD%90%E8%B7%AF_.png?");

/***/ }),

/***/ "./src/image/pm/利牙魚_.png":
/*!*******************************!*\
  !*** ./src/image/pm/利牙魚_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/利牙魚_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%88%A9%E7%89%99%E9%AD%9A_.png?");

/***/ }),

/***/ "./src/image/pm/刺尾蟲_.png":
/*!*******************************!*\
  !*** ./src/image/pm/刺尾蟲_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/刺尾蟲_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%88%BA%E5%B0%BE%E8%9F%B2_.png?");

/***/ }),

/***/ "./src/image/pm/刺球仙人掌_.png":
/*!*********************************!*\
  !*** ./src/image/pm/刺球仙人掌_.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/刺球仙人掌_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%88%BA%E7%90%83%E4%BB%99%E4%BA%BA%E6%8E%8C_.png?");

/***/ }),

/***/ "./src/image/pm/刺甲貝_.png":
/*!*******************************!*\
  !*** ./src/image/pm/刺甲貝_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/刺甲貝_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%88%BA%E7%94%B2%E8%B2%9D_.png?");

/***/ }),

/***/ "./src/image/pm/刺龍王_.png":
/*!*******************************!*\
  !*** ./src/image/pm/刺龍王_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/刺龍王_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%88%BA%E9%BE%8D%E7%8E%8B_.png?");

/***/ }),

/***/ "./src/image/pm/力壯雞_.png":
/*!*******************************!*\
  !*** ./src/image/pm/力壯雞_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/力壯雞_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%8A%9B%E5%A3%AF%E9%9B%9E_.png?");

/***/ }),

/***/ "./src/image/pm/勇基拉_.png":
/*!*******************************!*\
  !*** ./src/image/pm/勇基拉_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/勇基拉_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%8B%87%E5%9F%BA%E6%8B%89_.png?");

/***/ }),

/***/ "./src/image/pm/勒克貓_.png":
/*!*******************************!*\
  !*** ./src/image/pm/勒克貓_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/勒克貓_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%8B%92%E5%85%8B%E8%B2%93_.png?");

/***/ }),

/***/ "./src/image/pm/勾魂眼_.png":
/*!*******************************!*\
  !*** ./src/image/pm/勾魂眼_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/勾魂眼_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%8B%BE%E9%AD%82%E7%9C%BC_.png?");

/***/ }),

/***/ "./src/image/pm/化石盔_.png":
/*!*******************************!*\
  !*** ./src/image/pm/化石盔_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/化石盔_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%8C%96%E7%9F%B3%E7%9B%94_.png?");

/***/ }),

/***/ "./src/image/pm/化石翼龍_.png":
/*!********************************!*\
  !*** ./src/image/pm/化石翼龍_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/化石翼龍_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%8C%96%E7%9F%B3%E7%BF%BC%E9%BE%8D_.png?");

/***/ }),

/***/ "./src/image/pm/千針魚_.png":
/*!*******************************!*\
  !*** ./src/image/pm/千針魚_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/千針魚_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%8D%83%E9%87%9D%E9%AD%9A_.png?");

/***/ }),

/***/ "./src/image/pm/卡咪龜_.png":
/*!*******************************!*\
  !*** ./src/image/pm/卡咪龜_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/卡咪龜_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%8D%A1%E5%92%AA%E9%BE%9C_.png?");

/***/ }),

/***/ "./src/image/pm/卡拉卡拉_.png":
/*!********************************!*\
  !*** ./src/image/pm/卡拉卡拉_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/卡拉卡拉_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%8D%A1%E6%8B%89%E5%8D%A1%E6%8B%89_.png?");

/***/ }),

/***/ "./src/image/pm/卡比獸_.png":
/*!*******************************!*\
  !*** ./src/image/pm/卡比獸_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/卡比獸_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%8D%A1%E6%AF%94%E7%8D%B8_.png?");

/***/ }),

/***/ "./src/image/pm/卡蒂狗_.png":
/*!*******************************!*\
  !*** ./src/image/pm/卡蒂狗_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/卡蒂狗_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%8D%A1%E8%92%82%E7%8B%97_.png?");

/***/ }),

/***/ "./src/image/pm/叉字蝠_.png":
/*!*******************************!*\
  !*** ./src/image/pm/叉字蝠_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/叉字蝠_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%8F%89%E5%AD%97%E8%9D%A0_.png?");

/***/ }),

/***/ "./src/image/pm/口呆花_.png":
/*!*******************************!*\
  !*** ./src/image/pm/口呆花_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/口呆花_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%8F%A3%E5%91%86%E8%8A%B1_.png?");

/***/ }),

/***/ "./src/image/pm/古空棘魚_.png":
/*!********************************!*\
  !*** ./src/image/pm/古空棘魚_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/古空棘魚_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%8F%A4%E7%A9%BA%E6%A3%98%E9%AD%9A_.png?");

/***/ }),

/***/ "./src/image/pm/可可多拉_.png":
/*!********************************!*\
  !*** ./src/image/pm/可可多拉_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/可可多拉_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%8F%AF%E5%8F%AF%E5%A4%9A%E6%8B%89_.png?");

/***/ }),

/***/ "./src/image/pm/可多拉_.png":
/*!*******************************!*\
  !*** ./src/image/pm/可多拉_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/可多拉_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%8F%AF%E5%A4%9A%E6%8B%89_.png?");

/***/ }),

/***/ "./src/image/pm/可達鴨_.png":
/*!*******************************!*\
  !*** ./src/image/pm/可達鴨_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/可達鴨_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%8F%AF%E9%81%94%E9%B4%A8_.png?");

/***/ }),

/***/ "./src/image/pm/吉利蛋_.png":
/*!*******************************!*\
  !*** ./src/image/pm/吉利蛋_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/吉利蛋_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%90%89%E5%88%A9%E8%9B%8B_.png?");

/***/ }),

/***/ "./src/image/pm/向尾喵_.png":
/*!*******************************!*\
  !*** ./src/image/pm/向尾喵_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/向尾喵_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%90%91%E5%B0%BE%E5%96%B5_.png?");

/***/ }),

/***/ "./src/image/pm/向日種子_.png":
/*!********************************!*\
  !*** ./src/image/pm/向日種子_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/向日種子_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%90%91%E6%97%A5%E7%A8%AE%E5%AD%90_.png?");

/***/ }),

/***/ "./src/image/pm/向日花怪_.png":
/*!********************************!*\
  !*** ./src/image/pm/向日花怪_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/向日花怪_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%90%91%E6%97%A5%E8%8A%B1%E6%80%AA_.png?");

/***/ }),

/***/ "./src/image/pm/吞食獸_.png":
/*!*******************************!*\
  !*** ./src/image/pm/吞食獸_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/吞食獸_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%90%9E%E9%A3%9F%E7%8D%B8_.png?");

/***/ }),

/***/ "./src/image/pm/含羞苞_.png":
/*!*******************************!*\
  !*** ./src/image/pm/含羞苞_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/含羞苞_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%90%AB%E7%BE%9E%E8%8B%9E_.png?");

/***/ }),

/***/ "./src/image/pm/吼吼鯨_.png":
/*!*******************************!*\
  !*** ./src/image/pm/吼吼鯨_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/吼吼鯨_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%90%BC%E5%90%BC%E9%AF%A8_.png?");

/***/ }),

/***/ "./src/image/pm/吼爆彈_.png":
/*!*******************************!*\
  !*** ./src/image/pm/吼爆彈_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/吼爆彈_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%90%BC%E7%88%86%E5%BD%88_.png?");

/***/ }),

/***/ "./src/image/pm/吼鯨王_.png":
/*!*******************************!*\
  !*** ./src/image/pm/吼鯨王_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/吼鯨王_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%90%BC%E9%AF%A8%E7%8E%8B_.png?");

/***/ }),

/***/ "./src/image/pm/呆呆獸_.png":
/*!*******************************!*\
  !*** ./src/image/pm/呆呆獸_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/呆呆獸_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%91%86%E5%91%86%E7%8D%B8_.png?");

/***/ }),

/***/ "./src/image/pm/呆呆王_.png":
/*!*******************************!*\
  !*** ./src/image/pm/呆呆王_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/呆呆王_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%91%86%E5%91%86%E7%8E%8B_.png?");

/***/ }),

/***/ "./src/image/pm/呆殼獸_.png":
/*!*******************************!*\
  !*** ./src/image/pm/呆殼獸_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/呆殼獸_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%91%86%E6%AE%BC%E7%8D%B8_.png?");

/***/ }),

/***/ "./src/image/pm/呆火駝_.png":
/*!*******************************!*\
  !*** ./src/image/pm/呆火駝_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/呆火駝_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%91%86%E7%81%AB%E9%A7%9D_.png?");

/***/ }),

/***/ "./src/image/pm/咕咕_.png":
/*!******************************!*\
  !*** ./src/image/pm/咕咕_.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/咕咕_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%92%95%E5%92%95_.png?");

/***/ }),

/***/ "./src/image/pm/咕妞妞_.png":
/*!*******************************!*\
  !*** ./src/image/pm/咕妞妞_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/咕妞妞_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%92%95%E5%A6%9E%E5%A6%9E_.png?");

/***/ }),

/***/ "./src/image/pm/咩利羊_.png":
/*!*******************************!*\
  !*** ./src/image/pm/咩利羊_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/咩利羊_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%92%A9%E5%88%A9%E7%BE%8A_.png?");

/***/ }),

/***/ "./src/image/pm/哈克龍_.png":
/*!*******************************!*\
  !*** ./src/image/pm/哈克龍_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/哈克龍_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%93%88%E5%85%8B%E9%BE%8D_.png?");

/***/ }),

/***/ "./src/image/pm/哥達鴨_.png":
/*!*******************************!*\
  !*** ./src/image/pm/哥達鴨_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/哥達鴨_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%93%A5%E9%81%94%E9%B4%A8_.png?");

/***/ }),

/***/ "./src/image/pm/喇叭芽_.png":
/*!*******************************!*\
  !*** ./src/image/pm/喇叭芽_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/喇叭芽_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%96%87%E5%8F%AD%E8%8A%BD_.png?");

/***/ }),

/***/ "./src/image/pm/喵喵_.png":
/*!******************************!*\
  !*** ./src/image/pm/喵喵_.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/喵喵_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%96%B5%E5%96%B5_.png?");

/***/ }),

/***/ "./src/image/pm/嘎啦嘎啦_.png":
/*!********************************!*\
  !*** ./src/image/pm/嘎啦嘎啦_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/嘎啦嘎啦_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%98%8E%E5%95%A6%E5%98%8E%E5%95%A6_.png?");

/***/ }),

/***/ "./src/image/pm/嘟嘟_.png":
/*!******************************!*\
  !*** ./src/image/pm/嘟嘟_.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/嘟嘟_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%98%9F%E5%98%9F_.png?");

/***/ }),

/***/ "./src/image/pm/嘟嘟利_.png":
/*!*******************************!*\
  !*** ./src/image/pm/嘟嘟利_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/嘟嘟利_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%98%9F%E5%98%9F%E5%88%A9_.png?");

/***/ }),

/***/ "./src/image/pm/噗噗豬_.png":
/*!*******************************!*\
  !*** ./src/image/pm/噗噗豬_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/噗噗豬_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%99%97%E5%99%97%E8%B1%AC_.png?");

/***/ }),

/***/ "./src/image/pm/噴火駝_.png":
/*!*******************************!*\
  !*** ./src/image/pm/噴火駝_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/噴火駝_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%99%B4%E7%81%AB%E9%A7%9D_.png?");

/***/ }),

/***/ "./src/image/pm/噴火龍_.png":
/*!*******************************!*\
  !*** ./src/image/pm/噴火龍_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/噴火龍_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%99%B4%E7%81%AB%E9%BE%8D_.png?");

/***/ }),

/***/ "./src/image/pm/固拉多_.png":
/*!*******************************!*\
  !*** ./src/image/pm/固拉多_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/固拉多_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%9B%BA%E6%8B%89%E5%A4%9A_.png?");

/***/ }),

/***/ "./src/image/pm/圈圈熊_.png":
/*!*******************************!*\
  !*** ./src/image/pm/圈圈熊_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/圈圈熊_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%9C%88%E5%9C%88%E7%86%8A_.png?");

/***/ }),

/***/ "./src/image/pm/圓法師_.png":
/*!*******************************!*\
  !*** ./src/image/pm/圓法師_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/圓法師_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%9C%93%E6%B3%95%E5%B8%AB_.png?");

/***/ }),

/***/ "./src/image/pm/圓絲蛛_.png":
/*!*******************************!*\
  !*** ./src/image/pm/圓絲蛛_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/圓絲蛛_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%9C%93%E7%B5%B2%E8%9B%9B_.png?");

/***/ }),

/***/ "./src/image/pm/圓陸鯊_.png":
/*!*******************************!*\
  !*** ./src/image/pm/圓陸鯊_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/圓陸鯊_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%9C%93%E9%99%B8%E9%AF%8A_.png?");

/***/ }),

/***/ "./src/image/pm/圖圖犬_.png":
/*!*******************************!*\
  !*** ./src/image/pm/圖圖犬_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/圖圖犬_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%9C%96%E5%9C%96%E7%8A%AC_.png?");

/***/ }),

/***/ "./src/image/pm/團體戰任務_.png":
/*!*********************************!*\
  !*** ./src/image/pm/團體戰任務_.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/團體戰任務_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%9C%98%E9%AB%94%E6%88%B0%E4%BB%BB%E5%8B%99_.png?");

/***/ }),

/***/ "./src/image/pm/土台龜_.png":
/*!*******************************!*\
  !*** ./src/image/pm/土台龜_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/土台龜_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%9C%9F%E5%8F%B0%E9%BE%9C_.png?");

/***/ }),

/***/ "./src/image/pm/土居忍士_.png":
/*!********************************!*\
  !*** ./src/image/pm/土居忍士_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/土居忍士_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%9C%9F%E5%B1%85%E5%BF%8D%E5%A3%AB_.png?");

/***/ }),

/***/ "./src/image/pm/土狼犬_.png":
/*!*******************************!*\
  !*** ./src/image/pm/土狼犬_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/土狼犬_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%9C%9F%E7%8B%BC%E7%8A%AC_.png?");

/***/ }),

/***/ "./src/image/pm/土龍弟弟_.png":
/*!********************************!*\
  !*** ./src/image/pm/土龍弟弟_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/土龍弟弟_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%9C%9F%E9%BE%8D%E5%BC%9F%E5%BC%9F_.png?");

/***/ }),

/***/ "./src/image/pm/地鼠_.png":
/*!******************************!*\
  !*** ./src/image/pm/地鼠_.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/地鼠_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%9C%B0%E9%BC%A0_.png?");

/***/ }),

/***/ "./src/image/pm/坦克臭鼬_.png":
/*!********************************!*\
  !*** ./src/image/pm/坦克臭鼬_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/坦克臭鼬_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%9D%A6%E5%85%8B%E8%87%AD%E9%BC%AC_.png?");

/***/ }),

/***/ "./src/image/pm/基拉祈_.png":
/*!*******************************!*\
  !*** ./src/image/pm/基拉祈_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/基拉祈_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%9F%BA%E6%8B%89%E7%A5%88_.png?");

/***/ }),

/***/ "./src/image/pm/墨海馬_.png":
/*!*******************************!*\
  !*** ./src/image/pm/墨海馬_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/墨海馬_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A2%A8%E6%B5%B7%E9%A6%AC_.png?");

/***/ }),

/***/ "./src/image/pm/壺壺_.png":
/*!******************************!*\
  !*** ./src/image/pm/壺壺_.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/壺壺_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A3%BA%E5%A3%BA_.png?");

/***/ }),

/***/ "./src/image/pm/多刺菊石獸_.png":
/*!*********************************!*\
  !*** ./src/image/pm/多刺菊石獸_.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/多刺菊石獸_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A4%9A%E5%88%BA%E8%8F%8A%E7%9F%B3%E7%8D%B8_.png?");

/***/ }),

/***/ "./src/image/pm/多邊獸_.png":
/*!*******************************!*\
  !*** ./src/image/pm/多邊獸_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/多邊獸_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A4%9A%E9%82%8A%E7%8D%B8_.png?");

/***/ }),

/***/ "./src/image/pm/多邊獸Ⅱ_.png":
/*!********************************!*\
  !*** ./src/image/pm/多邊獸Ⅱ_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/多邊獸Ⅱ_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A4%9A%E9%82%8A%E7%8D%B8%E2%85%A1_.png?");

/***/ }),

/***/ "./src/image/pm/多邊獸Ｚ_.png":
/*!********************************!*\
  !*** ./src/image/pm/多邊獸Ｚ_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/多邊獸Ｚ_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A4%9A%E9%82%8A%E7%8D%B8%EF%BC%BA_.png?");

/***/ }),

/***/ "./src/image/pm/夜巡靈_.png":
/*!*******************************!*\
  !*** ./src/image/pm/夜巡靈_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/夜巡靈_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A4%9C%E5%B7%A1%E9%9D%88_.png?");

/***/ }),

/***/ "./src/image/pm/夢妖_.png":
/*!******************************!*\
  !*** ./src/image/pm/夢妖_.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/夢妖_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A4%A2%E5%A6%96_.png?");

/***/ }),

/***/ "./src/image/pm/夢妖魔_.png":
/*!*******************************!*\
  !*** ./src/image/pm/夢妖魔_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/夢妖魔_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A4%A2%E5%A6%96%E9%AD%94_.png?");

/***/ }),

/***/ "./src/image/pm/夢幻_.png":
/*!******************************!*\
  !*** ./src/image/pm/夢幻_.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/夢幻_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A4%A2%E5%B9%BB_.png?");

/***/ }),

/***/ "./src/image/pm/夢歌仙人掌_.png":
/*!*********************************!*\
  !*** ./src/image/pm/夢歌仙人掌_.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/夢歌仙人掌_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A4%A2%E6%AD%8C%E4%BB%99%E4%BA%BA%E6%8E%8C_.png?");

/***/ }),

/***/ "./src/image/pm/大力鱷_.png":
/*!*******************************!*\
  !*** ./src/image/pm/大力鱷_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/大力鱷_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A4%A7%E5%8A%9B%E9%B1%B7_.png?");

/***/ }),

/***/ "./src/image/pm/大嘴娃_.png":
/*!*******************************!*\
  !*** ./src/image/pm/大嘴娃_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/大嘴娃_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A4%A7%E5%98%B4%E5%A8%83_.png?");

/***/ }),

/***/ "./src/image/pm/大嘴蝠_.png":
/*!*******************************!*\
  !*** ./src/image/pm/大嘴蝠_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/大嘴蝠_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A4%A7%E5%98%B4%E8%9D%A0_.png?");

/***/ }),

/***/ "./src/image/pm/大嘴雀_.png":
/*!*******************************!*\
  !*** ./src/image/pm/大嘴雀_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/大嘴雀_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A4%A7%E5%98%B4%E9%9B%80_.png?");

/***/ }),

/***/ "./src/image/pm/大嘴鷗_.png":
/*!*******************************!*\
  !*** ./src/image/pm/大嘴鷗_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/大嘴鷗_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A4%A7%E5%98%B4%E9%B7%97_.png?");

/***/ }),

/***/ "./src/image/pm/大奶罐_.png":
/*!*******************************!*\
  !*** ./src/image/pm/大奶罐_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/大奶罐_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A4%A7%E5%A5%B6%E7%BD%90_.png?");

/***/ }),

/***/ "./src/image/pm/大尾狸_.png":
/*!*******************************!*\
  !*** ./src/image/pm/大尾狸_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/大尾狸_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A4%A7%E5%B0%BE%E7%8B%B8_.png?");

/***/ }),

/***/ "./src/image/pm/大尾立_.png":
/*!*******************************!*\
  !*** ./src/image/pm/大尾立_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/大尾立_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A4%A7%E5%B0%BE%E7%AB%8B_.png?");

/***/ }),

/***/ "./src/image/pm/大岩蛇_.png":
/*!*******************************!*\
  !*** ./src/image/pm/大岩蛇_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/大岩蛇_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A4%A7%E5%B2%A9%E8%9B%87_.png?");

/***/ }),

/***/ "./src/image/pm/大朝北鼻_.png":
/*!********************************!*\
  !*** ./src/image/pm/大朝北鼻_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/大朝北鼻_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A4%A7%E6%9C%9D%E5%8C%97%E9%BC%BB_.png?");

/***/ }),

/***/ "./src/image/pm/大比鳥_.png":
/*!*******************************!*\
  !*** ./src/image/pm/大比鳥_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/大比鳥_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A4%A7%E6%AF%94%E9%B3%A5_.png?");

/***/ }),

/***/ "./src/image/pm/大牙狸_.png":
/*!*******************************!*\
  !*** ./src/image/pm/大牙狸_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/大牙狸_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A4%A7%E7%89%99%E7%8B%B8_.png?");

/***/ }),

/***/ "./src/image/pm/大狼犬_.png":
/*!*******************************!*\
  !*** ./src/image/pm/大狼犬_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/大狼犬_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A4%A7%E7%8B%BC%E7%8A%AC_.png?");

/***/ }),

/***/ "./src/image/pm/大王燕_.png":
/*!*******************************!*\
  !*** ./src/image/pm/大王燕_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/大王燕_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A4%A7%E7%8E%8B%E7%87%95_.png?");

/***/ }),

/***/ "./src/image/pm/大竺葵_.png":
/*!*******************************!*\
  !*** ./src/image/pm/大竺葵_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/大竺葵_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A4%A7%E7%AB%BA%E8%91%B5_.png?");

/***/ }),

/***/ "./src/image/pm/大舌舔_.png":
/*!*******************************!*\
  !*** ./src/image/pm/大舌舔_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/大舌舔_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A4%A7%E8%88%8C%E8%88%94_.png?");

/***/ }),

/***/ "./src/image/pm/大舌貝_.png":
/*!*******************************!*\
  !*** ./src/image/pm/大舌貝_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/大舌貝_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A4%A7%E8%88%8C%E8%B2%9D_.png?");

/***/ }),

/***/ "./src/image/pm/大舌頭_.png":
/*!*******************************!*\
  !*** ./src/image/pm/大舌頭_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/大舌頭_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A4%A7%E8%88%8C%E9%A0%AD_.png?");

/***/ }),

/***/ "./src/image/pm/大蔥鴨_.png":
/*!*******************************!*\
  !*** ./src/image/pm/大蔥鴨_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/大蔥鴨_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A4%A7%E8%94%A5%E9%B4%A8_.png?");

/***/ }),

/***/ "./src/image/pm/大針蜂_.png":
/*!*******************************!*\
  !*** ./src/image/pm/大針蜂_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/大針蜂_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A4%A7%E9%87%9D%E8%9C%82_.png?");

/***/ }),

/***/ "./src/image/pm/大鉗蟹_.png":
/*!*******************************!*\
  !*** ./src/image/pm/大鉗蟹_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/大鉗蟹_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A4%A7%E9%89%97%E8%9F%B9_.png?");

/***/ }),

/***/ "./src/image/pm/大鋼蛇_.png":
/*!*******************************!*\
  !*** ./src/image/pm/大鋼蛇_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/大鋼蛇_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A4%A7%E9%8B%BC%E8%9B%87_.png?");

/***/ }),

/***/ "./src/image/pm/大顎蟻_.png":
/*!*******************************!*\
  !*** ./src/image/pm/大顎蟻_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/大顎蟻_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A4%A7%E9%A1%8E%E8%9F%BB_.png?");

/***/ }),

/***/ "./src/image/pm/大食花_.png":
/*!*******************************!*\
  !*** ./src/image/pm/大食花_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/大食花_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A4%A7%E9%A3%9F%E8%8A%B1_.png?");

/***/ }),

/***/ "./src/image/pm/天氣怪任務_.png":
/*!*********************************!*\
  !*** ./src/image/pm/天氣怪任務_.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/天氣怪任務_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A4%A9%E6%B0%A3%E6%80%AA%E4%BB%BB%E5%8B%99_.png?");

/***/ }),

/***/ "./src/image/pm/天然雀_.png":
/*!*******************************!*\
  !*** ./src/image/pm/天然雀_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/天然雀_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A4%A9%E7%84%B6%E9%9B%80_.png?");

/***/ }),

/***/ "./src/image/pm/天然鳥_.png":
/*!*******************************!*\
  !*** ./src/image/pm/天然鳥_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/天然鳥_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A4%A9%E7%84%B6%E9%B3%A5_.png?");

/***/ }),

/***/ "./src/image/pm/天秤偶_.png":
/*!*******************************!*\
  !*** ./src/image/pm/天秤偶_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/天秤偶_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A4%A9%E7%A7%A4%E5%81%B6_.png?");

/***/ }),

/***/ "./src/image/pm/天蠍_.png":
/*!******************************!*\
  !*** ./src/image/pm/天蠍_.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/天蠍_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A4%A9%E8%A0%8D_.png?");

/***/ }),

/***/ "./src/image/pm/天蠍王_.png":
/*!*******************************!*\
  !*** ./src/image/pm/天蠍王_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/天蠍王_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A4%A9%E8%A0%8D%E7%8E%8B_.png?");

/***/ }),

/***/ "./src/image/pm/太古盔甲_.png":
/*!********************************!*\
  !*** ./src/image/pm/太古盔甲_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/太古盔甲_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A4%AA%E5%8F%A4%E7%9B%94%E7%94%B2_.png?");

/***/ }),

/***/ "./src/image/pm/太古羽蟲_.png":
/*!********************************!*\
  !*** ./src/image/pm/太古羽蟲_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/太古羽蟲_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A4%AA%E5%8F%A4%E7%BE%BD%E8%9F%B2_.png?");

/***/ }),

/***/ "./src/image/pm/太陽伊布_.png":
/*!********************************!*\
  !*** ./src/image/pm/太陽伊布_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/太陽伊布_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A4%AA%E9%99%BD%E4%BC%8A%E5%B8%83_.png?");

/***/ }),

/***/ "./src/image/pm/太陽岩_.png":
/*!*******************************!*\
  !*** ./src/image/pm/太陽岩_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/太陽岩_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A4%AA%E9%99%BD%E5%B2%A9_.png?");

/***/ }),

/***/ "./src/image/pm/太陽珊瑚_.png":
/*!********************************!*\
  !*** ./src/image/pm/太陽珊瑚_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/太陽珊瑚_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A4%AA%E9%99%BD%E7%8F%8A%E7%91%9A_.png?");

/***/ }),

/***/ "./src/image/pm/奇魯莉安_.png":
/*!********************************!*\
  !*** ./src/image/pm/奇魯莉安_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/奇魯莉安_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A5%87%E9%AD%AF%E8%8E%89%E5%AE%89_.png?");

/***/ }),

/***/ "./src/image/pm/妙蛙種子_.png":
/*!********************************!*\
  !*** ./src/image/pm/妙蛙種子_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/妙蛙種子_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A6%99%E8%9B%99%E7%A8%AE%E5%AD%90_.png?");

/***/ }),

/***/ "./src/image/pm/妙蛙花_.png":
/*!*******************************!*\
  !*** ./src/image/pm/妙蛙花_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/妙蛙花_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A6%99%E8%9B%99%E8%8A%B1_.png?");

/***/ }),

/***/ "./src/image/pm/妙蛙草_.png":
/*!*******************************!*\
  !*** ./src/image/pm/妙蛙草_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/妙蛙草_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A6%99%E8%9B%99%E8%8D%89_.png?");

/***/ }),

/***/ "./src/image/pm/姆克兒_.png":
/*!*******************************!*\
  !*** ./src/image/pm/姆克兒_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/姆克兒_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A7%86%E5%85%8B%E5%85%92_.png?");

/***/ }),

/***/ "./src/image/pm/姆克鳥_.png":
/*!*******************************!*\
  !*** ./src/image/pm/姆克鳥_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/姆克鳥_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A7%86%E5%85%8B%E9%B3%A5_.png?");

/***/ }),

/***/ "./src/image/pm/姆克鷹_.png":
/*!*******************************!*\
  !*** ./src/image/pm/姆克鷹_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/姆克鷹_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%A7%86%E5%85%8B%E9%B7%B9_.png?");

/***/ }),

/***/ "./src/image/pm/安瓢蟲_.png":
/*!*******************************!*\
  !*** ./src/image/pm/安瓢蟲_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/安瓢蟲_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%AE%89%E7%93%A2%E8%9F%B2_.png?");

/***/ }),

/***/ "./src/image/pm/寶寶丁_.png":
/*!*******************************!*\
  !*** ./src/image/pm/寶寶丁_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/寶寶丁_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%AF%B6%E5%AF%B6%E4%B8%81_.png?");

/***/ }),

/***/ "./src/image/pm/寶石海星_.png":
/*!********************************!*\
  !*** ./src/image/pm/寶石海星_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/寶石海星_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%AF%B6%E7%9F%B3%E6%B5%B7%E6%98%9F_.png?");

/***/ }),

/***/ "./src/image/pm/寶貝龍_.png":
/*!*******************************!*\
  !*** ./src/image/pm/寶貝龍_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/寶貝龍_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%AF%B6%E8%B2%9D%E9%BE%8D_.png?");

/***/ }),

/***/ "./src/image/pm/小卡比獸_.png":
/*!********************************!*\
  !*** ./src/image/pm/小卡比獸_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/小卡比獸_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%B0%8F%E5%8D%A1%E6%AF%94%E7%8D%B8_.png?");

/***/ }),

/***/ "./src/image/pm/小小象_.png":
/*!*******************************!*\
  !*** ./src/image/pm/小小象_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/小小象_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%B0%8F%E5%B0%8F%E8%B1%A1_.png?");

/***/ }),

/***/ "./src/image/pm/小山豬_.png":
/*!*******************************!*\
  !*** ./src/image/pm/小山豬_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/小山豬_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%B0%8F%E5%B1%B1%E8%B1%AC_.png?");

/***/ }),

/***/ "./src/image/pm/小拉達_.png":
/*!*******************************!*\
  !*** ./src/image/pm/小拉達_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/小拉達_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%B0%8F%E6%8B%89%E9%81%94_.png?");

/***/ }),

/***/ "./src/image/pm/小拳石_.png":
/*!*******************************!*\
  !*** ./src/image/pm/小拳石_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/小拳石_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%B0%8F%E6%8B%B3%E7%9F%B3_.png?");

/***/ }),

/***/ "./src/image/pm/小果然_.png":
/*!*******************************!*\
  !*** ./src/image/pm/小果然_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/小果然_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%B0%8F%E6%9E%9C%E7%84%B6_.png?");

/***/ }),

/***/ "./src/image/pm/小海獅_.png":
/*!*******************************!*\
  !*** ./src/image/pm/小海獅_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/小海獅_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%B0%8F%E6%B5%B7%E7%8D%85_.png?");

/***/ }),

/***/ "./src/image/pm/小火焰猴_.png":
/*!********************************!*\
  !*** ./src/image/pm/小火焰猴_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/小火焰猴_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%B0%8F%E7%81%AB%E7%84%B0%E7%8C%B4_.png?");

/***/ }),

/***/ "./src/image/pm/小火馬_.png":
/*!*******************************!*\
  !*** ./src/image/pm/小火馬_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/小火馬_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%B0%8F%E7%81%AB%E9%A6%AC_.png?");

/***/ }),

/***/ "./src/image/pm/小火龍_.png":
/*!*******************************!*\
  !*** ./src/image/pm/小火龍_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/小火龍_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%B0%8F%E7%81%AB%E9%BE%8D_.png?");

/***/ }),

/***/ "./src/image/pm/小球飛魚_.png":
/*!********************************!*\
  !*** ./src/image/pm/小球飛魚_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/小球飛魚_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%B0%8F%E7%90%83%E9%A3%9B%E9%AD%9A_.png?");

/***/ }),

/***/ "./src/image/pm/小磁怪_.png":
/*!*******************************!*\
  !*** ./src/image/pm/小磁怪_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/小磁怪_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%B0%8F%E7%A3%81%E6%80%AA_.png?");

/***/ }),

/***/ "./src/image/pm/小福蛋_.png":
/*!*******************************!*\
  !*** ./src/image/pm/小福蛋_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/小福蛋_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%B0%8F%E7%A6%8F%E8%9B%8B_.png?");

/***/ }),

/***/ "./src/image/pm/小貓怪_.png":
/*!*******************************!*\
  !*** ./src/image/pm/小貓怪_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/小貓怪_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%B0%8F%E8%B2%93%E6%80%AA_.png?");

/***/ }),

/***/ "./src/image/pm/小鋸鱷_.png":
/*!*******************************!*\
  !*** ./src/image/pm/小鋸鱷_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/小鋸鱷_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%B0%8F%E9%8B%B8%E9%B1%B7_.png?");

/***/ }),

/***/ "./src/image/pm/尖牙籠_.png":
/*!*******************************!*\
  !*** ./src/image/pm/尖牙籠_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/尖牙籠_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%B0%96%E7%89%99%E7%B1%A0_.png?");

/***/ }),

/***/ "./src/image/pm/尖牙陸鯊_.png":
/*!********************************!*\
  !*** ./src/image/pm/尖牙陸鯊_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/尖牙陸鯊_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%B0%96%E7%89%99%E9%99%B8%E9%AF%8A_.png?");

/***/ }),

/***/ "./src/image/pm/尼多力諾_.png":
/*!********************************!*\
  !*** ./src/image/pm/尼多力諾_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/尼多力諾_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%B0%BC%E5%A4%9A%E5%8A%9B%E8%AB%BE_.png?");

/***/ }),

/***/ "./src/image/pm/尼多后_.png":
/*!*******************************!*\
  !*** ./src/image/pm/尼多后_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/尼多后_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%B0%BC%E5%A4%9A%E5%90%8E_.png?");

/***/ }),

/***/ "./src/image/pm/尼多娜_.png":
/*!*******************************!*\
  !*** ./src/image/pm/尼多娜_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/尼多娜_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%B0%BC%E5%A4%9A%E5%A8%9C_.png?");

/***/ }),

/***/ "./src/image/pm/尼多朗_.png":
/*!*******************************!*\
  !*** ./src/image/pm/尼多朗_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/尼多朗_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%B0%BC%E5%A4%9A%E6%9C%97_.png?");

/***/ }),

/***/ "./src/image/pm/尼多王_.png":
/*!*******************************!*\
  !*** ./src/image/pm/尼多王_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/尼多王_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%B0%BC%E5%A4%9A%E7%8E%8B_.png?");

/***/ }),

/***/ "./src/image/pm/尼多蘭_.png":
/*!*******************************!*\
  !*** ./src/image/pm/尼多蘭_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/尼多蘭_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%B0%BC%E5%A4%9A%E8%98%AD_.png?");

/***/ }),

/***/ "./src/image/pm/尾立_.png":
/*!******************************!*\
  !*** ./src/image/pm/尾立_.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/尾立_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%B0%BE%E7%AB%8B_.png?");

/***/ }),

/***/ "./src/image/pm/巨沼怪_.png":
/*!*******************************!*\
  !*** ./src/image/pm/巨沼怪_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/巨沼怪_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%B7%A8%E6%B2%BC%E6%80%AA_.png?");

/***/ }),

/***/ "./src/image/pm/巨牙鯊_.png":
/*!*******************************!*\
  !*** ./src/image/pm/巨牙鯊_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/巨牙鯊_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%B7%A8%E7%89%99%E9%AF%8A_.png?");

/***/ }),

/***/ "./src/image/pm/巨翅飛魚_.png":
/*!********************************!*\
  !*** ./src/image/pm/巨翅飛魚_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/巨翅飛魚_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%B7%A8%E7%BF%85%E9%A3%9B%E9%AD%9A_.png?");

/***/ }),

/***/ "./src/image/pm/巨蔓藤_.png":
/*!*******************************!*\
  !*** ./src/image/pm/巨蔓藤_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/巨蔓藤_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%B7%A8%E8%94%93%E8%97%A4_.png?");

/***/ }),

/***/ "./src/image/pm/巨金怪_.png":
/*!*******************************!*\
  !*** ./src/image/pm/巨金怪_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/巨金怪_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%B7%A8%E9%87%91%E6%80%AA_.png?");

/***/ }),

/***/ "./src/image/pm/巨鉗螳螂_.png":
/*!********************************!*\
  !*** ./src/image/pm/巨鉗螳螂_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/巨鉗螳螂_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%B7%A8%E9%89%97%E8%9E%B3%E8%9E%82_.png?");

/***/ }),

/***/ "./src/image/pm/巨鉗蟹_.png":
/*!*******************************!*\
  !*** ./src/image/pm/巨鉗蟹_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/巨鉗蟹_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%B7%A8%E9%89%97%E8%9F%B9_.png?");

/***/ }),

/***/ "./src/image/pm/巴大蝶_.png":
/*!*******************************!*\
  !*** ./src/image/pm/巴大蝶_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/巴大蝶_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%B7%B4%E5%A4%A7%E8%9D%B6_.png?");

/***/ }),

/***/ "./src/image/pm/布魯_.png":
/*!******************************!*\
  !*** ./src/image/pm/布魯_.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/布魯_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%B8%83%E9%AD%AF_.png?");

/***/ }),

/***/ "./src/image/pm/布魯皇_.png":
/*!*******************************!*\
  !*** ./src/image/pm/布魯皇_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/布魯皇_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%B8%83%E9%AD%AF%E7%9A%87_.png?");

/***/ }),

/***/ "./src/image/pm/帕奇利茲_.png":
/*!********************************!*\
  !*** ./src/image/pm/帕奇利茲_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/帕奇利茲_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%B8%95%E5%A5%87%E5%88%A9%E8%8C%B2_.png?");

/***/ }),

/***/ "./src/image/pm/帕路奇亞_.png":
/*!********************************!*\
  !*** ./src/image/pm/帕路奇亞_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/帕路奇亞_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%B8%95%E8%B7%AF%E5%A5%87%E4%BA%9E_.png?");

/***/ }),

/***/ "./src/image/pm/帝牙海獅_.png":
/*!********************************!*\
  !*** ./src/image/pm/帝牙海獅_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/帝牙海獅_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%B8%9D%E7%89%99%E6%B5%B7%E7%8D%85_.png?");

/***/ }),

/***/ "./src/image/pm/帝牙盧卡_.png":
/*!********************************!*\
  !*** ./src/image/pm/帝牙盧卡_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/帝牙盧卡_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%B8%9D%E7%89%99%E7%9B%A7%E5%8D%A1_.png?");

/***/ }),

/***/ "./src/image/pm/帝王拿波_.png":
/*!********************************!*\
  !*** ./src/image/pm/帝王拿波_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/帝王拿波_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%B8%9D%E7%8E%8B%E6%8B%BF%E6%B3%A2_.png?");

/***/ }),

/***/ "./src/image/pm/席多藍恩_.png":
/*!********************************!*\
  !*** ./src/image/pm/席多藍恩_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/席多藍恩_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%B8%AD%E5%A4%9A%E8%97%8D%E6%81%A9_.png?");

/***/ }),

/***/ "./src/image/pm/幕下力士_.png":
/*!********************************!*\
  !*** ./src/image/pm/幕下力士_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/幕下力士_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%B9%95%E4%B8%8B%E5%8A%9B%E5%A3%AB_.png?");

/***/ }),

/***/ "./src/image/pm/幸福蛋_.png":
/*!*******************************!*\
  !*** ./src/image/pm/幸福蛋_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/幸福蛋_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%B9%B8%E7%A6%8F%E8%9B%8B_.png?");

/***/ }),

/***/ "./src/image/pm/幼基拉斯_.png":
/*!********************************!*\
  !*** ./src/image/pm/幼基拉斯_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/幼基拉斯_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%B9%BC%E5%9F%BA%E6%8B%89%E6%96%AF_.png?");

/***/ }),

/***/ "./src/image/pm/引夢貘人_.png":
/*!********************************!*\
  !*** ./src/image/pm/引夢貘人_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/引夢貘人_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%BC%95%E5%A4%A2%E8%B2%98%E4%BA%BA_.png?");

/***/ }),

/***/ "./src/image/pm/彷徨夜靈_.png":
/*!********************************!*\
  !*** ./src/image/pm/彷徨夜靈_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/彷徨夜靈_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%BD%B7%E5%BE%A8%E5%A4%9C%E9%9D%88_.png?");

/***/ }),

/***/ "./src/image/pm/快拳郎_.png":
/*!*******************************!*\
  !*** ./src/image/pm/快拳郎_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/快拳郎_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%BF%AB%E6%8B%B3%E9%83%8E_.png?");

/***/ }),

/***/ "./src/image/pm/快龍_.png":
/*!******************************!*\
  !*** ./src/image/pm/快龍_.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/快龍_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%BF%AB%E9%BE%8D_.png?");

/***/ }),

/***/ "./src/image/pm/念力土偶_.png":
/*!********************************!*\
  !*** ./src/image/pm/念力土偶_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/念力土偶_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E5%BF%B5%E5%8A%9B%E5%9C%9F%E5%81%B6_.png?");

/***/ }),

/***/ "./src/image/pm/急凍鳥_.png":
/*!*******************************!*\
  !*** ./src/image/pm/急凍鳥_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/急凍鳥_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%80%A5%E5%87%8D%E9%B3%A5_.png?");

/***/ }),

/***/ "./src/image/pm/怨影娃娃_.png":
/*!********************************!*\
  !*** ./src/image/pm/怨影娃娃_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/怨影娃娃_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%80%A8%E5%BD%B1%E5%A8%83%E5%A8%83_.png?");

/***/ }),

/***/ "./src/image/pm/怪力_.png":
/*!******************************!*\
  !*** ./src/image/pm/怪力_.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/怪力_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%80%AA%E5%8A%9B_.png?");

/***/ }),

/***/ "./src/image/pm/恰雷姆_.png":
/*!*******************************!*\
  !*** ./src/image/pm/恰雷姆_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/恰雷姆_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%81%B0%E9%9B%B7%E5%A7%86_.png?");

/***/ }),

/***/ "./src/image/pm/愛心魚_.png":
/*!*******************************!*\
  !*** ./src/image/pm/愛心魚_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/愛心魚_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%84%9B%E5%BF%83%E9%AD%9A_.png?");

/***/ }),

/***/ "./src/image/pm/懶人獺_.png":
/*!*******************************!*\
  !*** ./src/image/pm/懶人獺_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/懶人獺_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%87%B6%E4%BA%BA%E7%8D%BA_.png?");

/***/ }),

/***/ "./src/image/pm/戰槌龍_.png":
/*!*******************************!*\
  !*** ./src/image/pm/戰槌龍_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/戰槌龍_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%88%B0%E6%A7%8C%E9%BE%8D_.png?");

/***/ }),

/***/ "./src/image/pm/戰舞郎_.png":
/*!*******************************!*\
  !*** ./src/image/pm/戰舞郎_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/戰舞郎_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%88%B0%E8%88%9E%E9%83%8E_.png?");

/***/ }),

/***/ "./src/image/pm/戴魯比_.png":
/*!*******************************!*\
  !*** ./src/image/pm/戴魯比_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/戴魯比_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%88%B4%E9%AD%AF%E6%AF%94_.png?");

/***/ }),

/***/ "./src/image/pm/投球任務_.png":
/*!********************************!*\
  !*** ./src/image/pm/投球任務_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/投球任務_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%8A%95%E7%90%83%E4%BB%BB%E5%8B%99_.png?");

/***/ }),

/***/ "./src/image/pm/拉帝亞斯_.png":
/*!********************************!*\
  !*** ./src/image/pm/拉帝亞斯_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/拉帝亞斯_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%8B%89%E5%B8%9D%E4%BA%9E%E6%96%AF_.png?");

/***/ }),

/***/ "./src/image/pm/拉帝歐斯_.png":
/*!********************************!*\
  !*** ./src/image/pm/拉帝歐斯_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/拉帝歐斯_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%8B%89%E5%B8%9D%E6%AD%90%E6%96%AF_.png?");

/***/ }),

/***/ "./src/image/pm/拉普拉斯_.png":
/*!********************************!*\
  !*** ./src/image/pm/拉普拉斯_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/拉普拉斯_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%8B%89%E6%99%AE%E6%8B%89%E6%96%AF_.png?");

/***/ }),

/***/ "./src/image/pm/拉達_.png":
/*!******************************!*\
  !*** ./src/image/pm/拉達_.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/拉達_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%8B%89%E9%81%94_.png?");

/***/ }),

/***/ "./src/image/pm/拉魯拉絲_.png":
/*!********************************!*\
  !*** ./src/image/pm/拉魯拉絲_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/拉魯拉絲_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%8B%89%E9%AD%AF%E6%8B%89%E7%B5%B2_.png?");

/***/ }),

/***/ "./src/image/pm/捲捲耳_.png":
/*!*******************************!*\
  !*** ./src/image/pm/捲捲耳_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/捲捲耳_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%8D%B2%E6%8D%B2%E8%80%B3_.png?");

/***/ }),

/***/ "./src/image/pm/搖籃百合_.png":
/*!********************************!*\
  !*** ./src/image/pm/搖籃百合_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/搖籃百合_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%90%96%E7%B1%83%E7%99%BE%E5%90%88_.png?");

/***/ }),

/***/ "./src/image/pm/摩魯蛾_.png":
/*!*******************************!*\
  !*** ./src/image/pm/摩魯蛾_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/摩魯蛾_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%91%A9%E9%AD%AF%E8%9B%BE_.png?");

/***/ }),

/***/ "./src/image/pm/斗笠菇_.png":
/*!*******************************!*\
  !*** ./src/image/pm/斗笠菇_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/斗笠菇_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%96%97%E7%AC%A0%E8%8F%87_.png?");

/***/ }),

/***/ "./src/image/pm/時拉比_.png":
/*!*******************************!*\
  !*** ./src/image/pm/時拉比_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/時拉比_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%99%82%E6%8B%89%E6%AF%94_.png?");

/***/ }),

/***/ "./src/image/pm/晃晃斑(2號)_.png":
/*!***********************************!*\
  !*** ./src/image/pm/晃晃斑(2號)_.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/晃晃斑(2號)_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%99%83%E6%99%83%E6%96%91(2%E8%99%9F)_.png?");

/***/ }),

/***/ "./src/image/pm/晃晃斑(4號)_.png":
/*!***********************************!*\
  !*** ./src/image/pm/晃晃斑(4號)_.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/晃晃斑(4號)_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%99%83%E6%99%83%E6%96%91(4%E8%99%9F)_.png?");

/***/ }),

/***/ "./src/image/pm/晃晃斑(5號)_.png":
/*!***********************************!*\
  !*** ./src/image/pm/晃晃斑(5號)_.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/晃晃斑(5號)_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%99%83%E6%99%83%E6%96%91(5%E8%99%9F)_.png?");

/***/ }),

/***/ "./src/image/pm/晃晃斑(6號)_.png":
/*!***********************************!*\
  !*** ./src/image/pm/晃晃斑(6號)_.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/晃晃斑(6號)_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%99%83%E6%99%83%E6%96%91(6%E8%99%9F)_.png?");

/***/ }),

/***/ "./src/image/pm/晃晃斑(愛心)_.png":
/*!***********************************!*\
  !*** ./src/image/pm/晃晃斑(愛心)_.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/晃晃斑(愛心)_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%99%83%E6%99%83%E6%96%91(%E6%84%9B%E5%BF%83)_.png?");

/***/ }),

/***/ "./src/image/pm/晃晃斑_.png":
/*!*******************************!*\
  !*** ./src/image/pm/晃晃斑_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/晃晃斑_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%99%83%E6%99%83%E6%96%91_.png?");

/***/ }),

/***/ "./src/image/pm/暴雪王_.png":
/*!*******************************!*\
  !*** ./src/image/pm/暴雪王_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/暴雪王_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%9A%B4%E9%9B%AA%E7%8E%8B_.png?");

/***/ }),

/***/ "./src/image/pm/暴飛龍_.png":
/*!*******************************!*\
  !*** ./src/image/pm/暴飛龍_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/暴飛龍_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%9A%B4%E9%A3%9B%E9%BE%8D_.png?");

/***/ }),

/***/ "./src/image/pm/暴鯉龍_.png":
/*!*******************************!*\
  !*** ./src/image/pm/暴鯉龍_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/暴鯉龍_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%9A%B4%E9%AF%89%E9%BE%8D_.png?");

/***/ }),

/***/ "./src/image/pm/月亮伊布_.png":
/*!********************************!*\
  !*** ./src/image/pm/月亮伊布_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/月亮伊布_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%9C%88%E4%BA%AE%E4%BC%8A%E5%B8%83_.png?");

/***/ }),

/***/ "./src/image/pm/月桂葉_.png":
/*!*******************************!*\
  !*** ./src/image/pm/月桂葉_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/月桂葉_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%9C%88%E6%A1%82%E8%91%89_.png?");

/***/ }),

/***/ "./src/image/pm/月石_.png":
/*!******************************!*\
  !*** ./src/image/pm/月石_.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/月石_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%9C%88%E7%9F%B3_.png?");

/***/ }),

/***/ "./src/image/pm/朝北鼻_.png":
/*!*******************************!*\
  !*** ./src/image/pm/朝北鼻_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/朝北鼻_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%9C%9D%E5%8C%97%E9%BC%BB_.png?");

/***/ }),

/***/ "./src/image/pm/木守宮_.png":
/*!*******************************!*\
  !*** ./src/image/pm/木守宮_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/木守宮_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%9C%A8%E5%AE%88%E5%AE%AE_.png?");

/***/ }),

/***/ "./src/image/pm/未知圖騰_.png":
/*!********************************!*\
  !*** ./src/image/pm/未知圖騰_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/未知圖騰_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%9C%AA%E7%9F%A5%E5%9C%96%E9%A8%B0_.png?");

/***/ }),

/***/ "./src/image/pm/東施喵_.png":
/*!*******************************!*\
  !*** ./src/image/pm/東施喵_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/東施喵_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%9D%B1%E6%96%BD%E5%96%B5_.png?");

/***/ }),

/***/ "./src/image/pm/果然翁_.png":
/*!*******************************!*\
  !*** ./src/image/pm/果然翁_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/果然翁_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%9E%9C%E7%84%B6%E7%BF%81_.png?");

/***/ }),

/***/ "./src/image/pm/森林蜥蜴_.png":
/*!********************************!*\
  !*** ./src/image/pm/森林蜥蜴_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/森林蜥蜴_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%A3%AE%E6%9E%97%E8%9C%A5%E8%9C%B4_.png?");

/***/ }),

/***/ "./src/image/pm/椰蛋樹_.png":
/*!*******************************!*\
  !*** ./src/image/pm/椰蛋樹_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/椰蛋樹_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%A4%B0%E8%9B%8B%E6%A8%B9_.png?");

/***/ }),

/***/ "./src/image/pm/榛果球_.png":
/*!*******************************!*\
  !*** ./src/image/pm/榛果球_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/榛果球_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%A6%9B%E6%9E%9C%E7%90%83_.png?");

/***/ }),

/***/ "./src/image/pm/樂天河童_.png":
/*!********************************!*\
  !*** ./src/image/pm/樂天河童_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/樂天河童_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%A8%82%E5%A4%A9%E6%B2%B3%E7%AB%A5_.png?");

/***/ }),

/***/ "./src/image/pm/樹才怪_.png":
/*!*******************************!*\
  !*** ./src/image/pm/樹才怪_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/樹才怪_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%A8%B9%E6%89%8D%E6%80%AA_.png?");

/***/ }),

/***/ "./src/image/pm/樹林龜_.png":
/*!*******************************!*\
  !*** ./src/image/pm/樹林龜_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/樹林龜_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%A8%B9%E6%9E%97%E9%BE%9C_.png?");

/***/ }),

/***/ "./src/image/pm/橡實果_.png":
/*!*******************************!*\
  !*** ./src/image/pm/橡實果_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/橡實果_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%A9%A1%E5%AF%A6%E6%9E%9C_.png?");

/***/ }),

/***/ "./src/image/pm/櫻花兒_.png":
/*!*******************************!*\
  !*** ./src/image/pm/櫻花兒_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/櫻花兒_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%AB%BB%E8%8A%B1%E5%85%92_.png?");

/***/ }),

/***/ "./src/image/pm/櫻花寶_.png":
/*!*******************************!*\
  !*** ./src/image/pm/櫻花寶_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/櫻花寶_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%AB%BB%E8%8A%B1%E5%AF%B6_.png?");

/***/ }),

/***/ "./src/image/pm/櫻花魚_.png":
/*!*******************************!*\
  !*** ./src/image/pm/櫻花魚_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/櫻花魚_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%AB%BB%E8%8A%B1%E9%AD%9A_.png?");

/***/ }),

/***/ "./src/image/pm/正電拍拍_.png":
/*!********************************!*\
  !*** ./src/image/pm/正電拍拍_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/正電拍拍_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%AD%A3%E9%9B%BB%E6%8B%8D%E6%8B%8D_.png?");

/***/ }),

/***/ "./src/image/pm/毒刺水母_.png":
/*!********************************!*\
  !*** ./src/image/pm/毒刺水母_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/毒刺水母_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%AF%92%E5%88%BA%E6%B0%B4%E6%AF%8D_.png?");

/***/ }),

/***/ "./src/image/pm/毒粉蛾_.png":
/*!*******************************!*\
  !*** ./src/image/pm/毒粉蛾_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/毒粉蛾_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%AF%92%E7%B2%89%E8%9B%BE_.png?");

/***/ }),

/***/ "./src/image/pm/毒薔薇_.png":
/*!*******************************!*\
  !*** ./src/image/pm/毒薔薇_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/毒薔薇_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%AF%92%E8%96%94%E8%96%87_.png?");

/***/ }),

/***/ "./src/image/pm/毒骷蛙_.png":
/*!*******************************!*\
  !*** ./src/image/pm/毒骷蛙_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/毒骷蛙_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%AF%92%E9%AA%B7%E8%9B%99_.png?");

/***/ }),

/***/ "./src/image/pm/比比鳥_.png":
/*!*******************************!*\
  !*** ./src/image/pm/比比鳥_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/比比鳥_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%AF%94%E6%AF%94%E9%B3%A5_.png?");

/***/ }),

/***/ "./src/image/pm/毛球_.png":
/*!******************************!*\
  !*** ./src/image/pm/毛球_.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/毛球_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%AF%9B%E7%90%83_.png?");

/***/ }),

/***/ "./src/image/pm/毽子棉_.png":
/*!*******************************!*\
  !*** ./src/image/pm/毽子棉_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/毽子棉_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%AF%BD%E5%AD%90%E6%A3%89_.png?");

/***/ }),

/***/ "./src/image/pm/毽子花_.png":
/*!*******************************!*\
  !*** ./src/image/pm/毽子花_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/毽子花_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%AF%BD%E5%AD%90%E8%8A%B1_.png?");

/***/ }),

/***/ "./src/image/pm/毽子草_.png":
/*!*******************************!*\
  !*** ./src/image/pm/毽子草_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/毽子草_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%AF%BD%E5%AD%90%E8%8D%89_.png?");

/***/ }),

/***/ "./src/image/pm/水伊布_.png":
/*!*******************************!*\
  !*** ./src/image/pm/水伊布_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/水伊布_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%B0%B4%E4%BC%8A%E5%B8%83_.png?");

/***/ }),

/***/ "./src/image/pm/水君_.png":
/*!******************************!*\
  !*** ./src/image/pm/水君_.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/水君_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%B0%B4%E5%90%9B_.png?");

/***/ }),

/***/ "./src/image/pm/水箭龜_.png":
/*!*******************************!*\
  !*** ./src/image/pm/水箭龜_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/水箭龜_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%B0%B4%E7%AE%AD%E9%BE%9C_.png?");

/***/ }),

/***/ "./src/image/pm/水躍魚_.png":
/*!*******************************!*\
  !*** ./src/image/pm/水躍魚_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/水躍魚_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%B0%B4%E8%BA%8D%E9%AD%9A_.png?");

/***/ }),

/***/ "./src/image/pm/沙基拉斯_.png":
/*!********************************!*\
  !*** ./src/image/pm/沙基拉斯_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/沙基拉斯_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%B2%99%E5%9F%BA%E6%8B%89%E6%96%AF_.png?");

/***/ }),

/***/ "./src/image/pm/沙奈朵_.png":
/*!*******************************!*\
  !*** ./src/image/pm/沙奈朵_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/沙奈朵_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%B2%99%E5%A5%88%E6%9C%B5_.png?");

/***/ }),

/***/ "./src/image/pm/沙河馬_.png":
/*!*******************************!*\
  !*** ./src/image/pm/沙河馬_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/沙河馬_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%B2%99%E6%B2%B3%E9%A6%AC_.png?");

/***/ }),

/***/ "./src/image/pm/沙漠蜻蜓_.png":
/*!********************************!*\
  !*** ./src/image/pm/沙漠蜻蜓_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/沙漠蜻蜓_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%B2%99%E6%BC%A0%E8%9C%BB%E8%9C%93_.png?");

/***/ }),

/***/ "./src/image/pm/河馬獸_.png":
/*!*******************************!*\
  !*** ./src/image/pm/河馬獸_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/河馬獸_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%B2%B3%E9%A6%AC%E7%8D%B8_.png?");

/***/ }),

/***/ "./src/image/pm/沼王_.png":
/*!******************************!*\
  !*** ./src/image/pm/沼王_.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/沼王_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%B2%BC%E7%8E%8B_.png?");

/***/ }),

/***/ "./src/image/pm/沼躍魚_.png":
/*!*******************************!*\
  !*** ./src/image/pm/沼躍魚_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/沼躍魚_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%B2%BC%E8%BA%8D%E9%AD%9A_.png?");

/***/ }),

/***/ "./src/image/pm/波克基古_.png":
/*!********************************!*\
  !*** ./src/image/pm/波克基古_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/波克基古_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%B3%A2%E5%85%8B%E5%9F%BA%E5%8F%A4_.png?");

/***/ }),

/***/ "./src/image/pm/波克基斯_.png":
/*!********************************!*\
  !*** ./src/image/pm/波克基斯_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/波克基斯_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%B3%A2%E5%85%8B%E5%9F%BA%E6%96%AF_.png?");

/***/ }),

/***/ "./src/image/pm/波克比_.png":
/*!*******************************!*\
  !*** ./src/image/pm/波克比_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/波克比_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%B3%A2%E5%85%8B%E6%AF%94_.png?");

/***/ }),

/***/ "./src/image/pm/波加曼_.png":
/*!*******************************!*\
  !*** ./src/image/pm/波加曼_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/波加曼_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%B3%A2%E5%8A%A0%E6%9B%BC_.png?");

/***/ }),

/***/ "./src/image/pm/波士可多拉_.png":
/*!*********************************!*\
  !*** ./src/image/pm/波士可多拉_.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/波士可多拉_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%B3%A2%E5%A3%AB%E5%8F%AF%E5%A4%9A%E6%8B%89_.png?");

/***/ }),

/***/ "./src/image/pm/波波_.png":
/*!******************************!*\
  !*** ./src/image/pm/波波_.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/波波_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%B3%A2%E6%B3%A2_.png?");

/***/ }),

/***/ "./src/image/pm/波皇子_.png":
/*!*******************************!*\
  !*** ./src/image/pm/波皇子_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/波皇子_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%B3%A2%E7%9A%87%E5%AD%90_.png?");

/***/ }),

/***/ "./src/image/pm/泥泥鰍_.png":
/*!*******************************!*\
  !*** ./src/image/pm/泥泥鰍_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/泥泥鰍_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%B3%A5%E6%B3%A5%E9%B0%8D_.png?");

/***/ }),

/***/ "./src/image/pm/泳圈鼬_.png":
/*!*******************************!*\
  !*** ./src/image/pm/泳圈鼬_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/泳圈鼬_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%B3%B3%E5%9C%88%E9%BC%AC_.png?");

/***/ }),

/***/ "./src/image/pm/洛奇亞_.png":
/*!*******************************!*\
  !*** ./src/image/pm/洛奇亞_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/洛奇亞_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%B4%9B%E5%A5%87%E4%BA%9E_.png?");

/***/ }),

/***/ "./src/image/pm/洛托姆_.png":
/*!*******************************!*\
  !*** ./src/image/pm/洛托姆_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/洛托姆_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%B4%9B%E6%89%98%E5%A7%86_.png?");

/***/ }),

/***/ "./src/image/pm/派拉斯_.png":
/*!*******************************!*\
  !*** ./src/image/pm/派拉斯_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/派拉斯_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%B4%BE%E6%8B%89%E6%96%AF_.png?");

/***/ }),

/***/ "./src/image/pm/派拉斯特_.png":
/*!********************************!*\
  !*** ./src/image/pm/派拉斯特_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/派拉斯特_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%B4%BE%E6%8B%89%E6%96%AF%E7%89%B9_.png?");

/***/ }),

/***/ "./src/image/pm/浮潛鼬_.png":
/*!*******************************!*\
  !*** ./src/image/pm/浮潛鼬_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/浮潛鼬_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%B5%AE%E6%BD%9B%E9%BC%AC_.png?");

/***/ }),

/***/ "./src/image/pm/海兔獸_.png":
/*!*******************************!*\
  !*** ./src/image/pm/海兔獸_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/海兔獸_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%B5%B7%E5%85%94%E7%8D%B8_.png?");

/***/ }),

/***/ "./src/image/pm/海刺龍_.png":
/*!*******************************!*\
  !*** ./src/image/pm/海刺龍_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/海刺龍_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%B5%B7%E5%88%BA%E9%BE%8D_.png?");

/***/ }),

/***/ "./src/image/pm/海星星_.png":
/*!*******************************!*\
  !*** ./src/image/pm/海星星_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/海星星_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%B5%B7%E6%98%9F%E6%98%9F_.png?");

/***/ }),

/***/ "./src/image/pm/海豹球_.png":
/*!*******************************!*\
  !*** ./src/image/pm/海豹球_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/海豹球_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%B5%B7%E8%B1%B9%E7%90%83_.png?");

/***/ }),

/***/ "./src/image/pm/海魔獅_.png":
/*!*******************************!*\
  !*** ./src/image/pm/海魔獅_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/海魔獅_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%B5%B7%E9%AD%94%E7%8D%85_.png?");

/***/ }),

/***/ "./src/image/pm/溜溜糖球_.png":
/*!********************************!*\
  !*** ./src/image/pm/溜溜糖球_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/溜溜糖球_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%BA%9C%E6%BA%9C%E7%B3%96%E7%90%83_.png?");

/***/ }),

/***/ "./src/image/pm/溶食獸_.png":
/*!*******************************!*\
  !*** ./src/image/pm/溶食獸_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/溶食獸_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E6%BA%B6%E9%A3%9F%E7%8D%B8_.png?");

/***/ }),

/***/ "./src/image/pm/火伊布_.png":
/*!*******************************!*\
  !*** ./src/image/pm/火伊布_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/火伊布_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%81%AB%E4%BC%8A%E5%B8%83_.png?");

/***/ }),

/***/ "./src/image/pm/火岩鼠_.png":
/*!*******************************!*\
  !*** ./src/image/pm/火岩鼠_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/火岩鼠_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%81%AB%E5%B2%A9%E9%BC%A0_.png?");

/***/ }),

/***/ "./src/image/pm/火恐龍_.png":
/*!*******************************!*\
  !*** ./src/image/pm/火恐龍_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/火恐龍_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%81%AB%E6%81%90%E9%BE%8D_.png?");

/***/ }),

/***/ "./src/image/pm/火焰雞_.png":
/*!*******************************!*\
  !*** ./src/image/pm/火焰雞_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/火焰雞_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%81%AB%E7%84%B0%E9%9B%9E_.png?");

/***/ }),

/***/ "./src/image/pm/火焰鳥_.png":
/*!*******************************!*\
  !*** ./src/image/pm/火焰鳥_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/火焰鳥_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%81%AB%E7%84%B0%E9%B3%A5_.png?");

/***/ }),

/***/ "./src/image/pm/火爆猴_.png":
/*!*******************************!*\
  !*** ./src/image/pm/火爆猴_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/火爆猴_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%81%AB%E7%88%86%E7%8C%B4_.png?");

/***/ }),

/***/ "./src/image/pm/火爆獸_.png":
/*!*******************************!*\
  !*** ./src/image/pm/火爆獸_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/火爆獸_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%81%AB%E7%88%86%E7%8D%B8_.png?");

/***/ }),

/***/ "./src/image/pm/火球鼠_.png":
/*!*******************************!*\
  !*** ./src/image/pm/火球鼠_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/火球鼠_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%81%AB%E7%90%83%E9%BC%A0_.png?");

/***/ }),

/***/ "./src/image/pm/火稚雞_.png":
/*!*******************************!*\
  !*** ./src/image/pm/火稚雞_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/火稚雞_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%81%AB%E7%A8%9A%E9%9B%9E_.png?");

/***/ }),

/***/ "./src/image/pm/炎帝_.png":
/*!******************************!*\
  !*** ./src/image/pm/炎帝_.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/炎帝_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%82%8E%E5%B8%9D_.png?");

/***/ }),

/***/ "./src/image/pm/烈咬陸鯊_.png":
/*!********************************!*\
  !*** ./src/image/pm/烈咬陸鯊_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/烈咬陸鯊_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%83%88%E5%92%AC%E9%99%B8%E9%AF%8A_.png?");

/***/ }),

/***/ "./src/image/pm/烈焰猴_.png":
/*!*******************************!*\
  !*** ./src/image/pm/烈焰猴_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/烈焰猴_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%83%88%E7%84%B0%E7%8C%B4_.png?");

/***/ }),

/***/ "./src/image/pm/烈焰馬_.png":
/*!*******************************!*\
  !*** ./src/image/pm/烈焰馬_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/烈焰馬_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%83%88%E7%84%B0%E9%A6%AC_.png?");

/***/ }),

/***/ "./src/image/pm/烈空坐_.png":
/*!*******************************!*\
  !*** ./src/image/pm/烈空坐_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/烈空坐_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%83%88%E7%A9%BA%E5%9D%90_.png?");

/***/ }),

/***/ "./src/image/pm/烈雀_.png":
/*!******************************!*\
  !*** ./src/image/pm/烈雀_.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/烈雀_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%83%88%E9%9B%80_.png?");

/***/ }),

/***/ "./src/image/pm/烏波_.png":
/*!******************************!*\
  !*** ./src/image/pm/烏波_.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/烏波_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%83%8F%E6%B3%A2_.png?");

/***/ }),

/***/ "./src/image/pm/烏鴉頭頭_.png":
/*!********************************!*\
  !*** ./src/image/pm/烏鴉頭頭_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/烏鴉頭頭_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%83%8F%E9%B4%89%E9%A0%AD%E9%A0%AD_.png?");

/***/ }),

/***/ "./src/image/pm/無殼海兔_.png":
/*!********************************!*\
  !*** ./src/image/pm/無殼海兔_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/無殼海兔_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%84%A1%E6%AE%BC%E6%B5%B7%E5%85%94_.png?");

/***/ }),

/***/ "./src/image/pm/無畏小子_.png":
/*!********************************!*\
  !*** ./src/image/pm/無畏小子_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/無畏小子_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%84%A1%E7%95%8F%E5%B0%8F%E5%AD%90_.png?");

/***/ }),

/***/ "./src/image/pm/煤炭龜_.png":
/*!*******************************!*\
  !*** ./src/image/pm/煤炭龜_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/煤炭龜_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%85%A4%E7%82%AD%E9%BE%9C_.png?");

/***/ }),

/***/ "./src/image/pm/熊寶寶_.png":
/*!*******************************!*\
  !*** ./src/image/pm/熊寶寶_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/熊寶寶_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%86%8A%E5%AF%B6%E5%AF%B6_.png?");

/***/ }),

/***/ "./src/image/pm/熔岩蝸牛_.png":
/*!********************************!*\
  !*** ./src/image/pm/熔岩蝸牛_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/熔岩蝸牛_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%86%94%E5%B2%A9%E8%9D%B8%E7%89%9B_.png?");

/***/ }),

/***/ "./src/image/pm/熔岩蟲_.png":
/*!*******************************!*\
  !*** ./src/image/pm/熔岩蟲_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/熔岩蟲_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%86%94%E5%B2%A9%E8%9F%B2_.png?");

/***/ }),

/***/ "./src/image/pm/熱帶龍_.png":
/*!*******************************!*\
  !*** ./src/image/pm/熱帶龍_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/熱帶龍_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%86%B1%E5%B8%B6%E9%BE%8D_.png?");

/***/ }),

/***/ "./src/image/pm/燈籠魚_.png":
/*!*******************************!*\
  !*** ./src/image/pm/燈籠魚_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/燈籠魚_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%87%88%E7%B1%A0%E9%AD%9A_.png?");

/***/ }),

/***/ "./src/image/pm/爆音怪_.png":
/*!*******************************!*\
  !*** ./src/image/pm/爆音怪_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/爆音怪_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%88%86%E9%9F%B3%E6%80%AA_.png?");

/***/ }),

/***/ "./src/image/pm/狃拉_.png":
/*!******************************!*\
  !*** ./src/image/pm/狃拉_.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/狃拉_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%8B%83%E6%8B%89_.png?");

/***/ }),

/***/ "./src/image/pm/狡猾天狗_.png":
/*!********************************!*\
  !*** ./src/image/pm/狡猾天狗_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/狡猾天狗_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%8B%A1%E7%8C%BE%E5%A4%A9%E7%8B%97_.png?");

/***/ }),

/***/ "./src/image/pm/狩獵鳳蝶_.png":
/*!********************************!*\
  !*** ./src/image/pm/狩獵鳳蝶_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/狩獵鳳蝶_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%8B%A9%E7%8D%B5%E9%B3%B3%E8%9D%B6_.png?");

/***/ }),

/***/ "./src/image/pm/猛火猴_.png":
/*!*******************************!*\
  !*** ./src/image/pm/猛火猴_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/猛火猴_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%8C%9B%E7%81%AB%E7%8C%B4_.png?");

/***/ }),

/***/ "./src/image/pm/猴怪_.png":
/*!******************************!*\
  !*** ./src/image/pm/猴怪_.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/猴怪_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%8C%B4%E6%80%AA_.png?");

/***/ }),

/***/ "./src/image/pm/獨角犀牛_.png":
/*!********************************!*\
  !*** ./src/image/pm/獨角犀牛_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/獨角犀牛_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%8D%A8%E8%A7%92%E7%8A%80%E7%89%9B_.png?");

/***/ }),

/***/ "./src/image/pm/獨角蟲_.png":
/*!*******************************!*\
  !*** ./src/image/pm/獨角蟲_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/獨角蟲_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%8D%A8%E8%A7%92%E8%9F%B2_.png?");

/***/ }),

/***/ "./src/image/pm/獵斑魚_.png":
/*!*******************************!*\
  !*** ./src/image/pm/獵斑魚_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/獵斑魚_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%8D%B5%E6%96%91%E9%AD%9A_.png?");

/***/ }),

/***/ "./src/image/pm/珍珠貝_.png":
/*!*******************************!*\
  !*** ./src/image/pm/珍珠貝_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/珍珠貝_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%8F%8D%E7%8F%A0%E8%B2%9D_.png?");

/***/ }),

/***/ "./src/image/pm/班基拉斯_.png":
/*!********************************!*\
  !*** ./src/image/pm/班基拉斯_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/班基拉斯_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%8F%AD%E5%9F%BA%E6%8B%89%E6%96%AF_.png?");

/***/ }),

/***/ "./src/image/pm/瑪力露_.png":
/*!*******************************!*\
  !*** ./src/image/pm/瑪力露_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/瑪力露_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%91%AA%E5%8A%9B%E9%9C%B2_.png?");

/***/ }),

/***/ "./src/image/pm/瑪力露麗_.png":
/*!********************************!*\
  !*** ./src/image/pm/瑪力露麗_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/瑪力露麗_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%91%AA%E5%8A%9B%E9%9C%B2%E9%BA%97_.png?");

/***/ }),

/***/ "./src/image/pm/瑪沙那_.png":
/*!*******************************!*\
  !*** ./src/image/pm/瑪沙那_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/瑪沙那_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%91%AA%E6%B2%99%E9%82%A3_.png?");

/***/ }),

/***/ "./src/image/pm/瑪狃拉_.png":
/*!*******************************!*\
  !*** ./src/image/pm/瑪狃拉_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/瑪狃拉_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%91%AA%E7%8B%83%E6%8B%89_.png?");

/***/ }),

/***/ "./src/image/pm/瑪瑙水母_.png":
/*!********************************!*\
  !*** ./src/image/pm/瑪瑙水母_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/瑪瑙水母_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%91%AA%E7%91%99%E6%B0%B4%E6%AF%8D_.png?");

/***/ }),

/***/ "./src/image/pm/瑪納霏_.png":
/*!*******************************!*\
  !*** ./src/image/pm/瑪納霏_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/瑪納霏_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%91%AA%E7%B4%8D%E9%9C%8F_.png?");

/***/ }),

/***/ "./src/image/pm/瓦斯彈_.png":
/*!*******************************!*\
  !*** ./src/image/pm/瓦斯彈_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/瓦斯彈_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%93%A6%E6%96%AF%E5%BD%88_.png?");

/***/ }),

/***/ "./src/image/pm/甜甜螢_.png":
/*!*******************************!*\
  !*** ./src/image/pm/甜甜螢_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/甜甜螢_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%94%9C%E7%94%9C%E8%9E%A2_.png?");

/***/ }),

/***/ "./src/image/pm/由克希_.png":
/*!*******************************!*\
  !*** ./src/image/pm/由克希_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/由克希_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%94%B1%E5%85%8B%E5%B8%8C_.png?");

/***/ }),

/***/ "./src/image/pm/甲殼繭_.png":
/*!*******************************!*\
  !*** ./src/image/pm/甲殼繭_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/甲殼繭_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%94%B2%E6%AE%BC%E7%B9%AD_.png?");

/***/ }),

/***/ "./src/image/pm/甲殼龍_.png":
/*!*******************************!*\
  !*** ./src/image/pm/甲殼龍_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/甲殼龍_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%94%B2%E6%AE%BC%E9%BE%8D_.png?");

/***/ }),

/***/ "./src/image/pm/白海獅_.png":
/*!*******************************!*\
  !*** ./src/image/pm/白海獅_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/白海獅_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%99%BD%E6%B5%B7%E7%8D%85_.png?");

/***/ }),

/***/ "./src/image/pm/百變怪_.png":
/*!*******************************!*\
  !*** ./src/image/pm/百變怪_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/百變怪_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%99%BE%E8%AE%8A%E6%80%AA_.png?");

/***/ }),

/***/ "./src/image/pm/皮丘_.png":
/*!******************************!*\
  !*** ./src/image/pm/皮丘_.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/皮丘_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%9A%AE%E4%B8%98_.png?");

/***/ }),

/***/ "./src/image/pm/皮卡丘_.png":
/*!*******************************!*\
  !*** ./src/image/pm/皮卡丘_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/皮卡丘_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%9A%AE%E5%8D%A1%E4%B8%98_.png?");

/***/ }),

/***/ "./src/image/pm/皮可西_.png":
/*!*******************************!*\
  !*** ./src/image/pm/皮可西_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/皮可西_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%9A%AE%E5%8F%AF%E8%A5%BF_.png?");

/***/ }),

/***/ "./src/image/pm/皮寶寶_.png":
/*!*******************************!*\
  !*** ./src/image/pm/皮寶寶_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/皮寶寶_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%9A%AE%E5%AF%B6%E5%AF%B6_.png?");

/***/ }),

/***/ "./src/image/pm/皮皮_.png":
/*!******************************!*\
  !*** ./src/image/pm/皮皮_.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/皮皮_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%9A%AE%E7%9A%AE_.png?");

/***/ }),

/***/ "./src/image/pm/盆才怪_.png":
/*!*******************************!*\
  !*** ./src/image/pm/盆才怪_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/盆才怪_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%9B%86%E6%89%8D%E6%80%AA_.png?");

/***/ }),

/***/ "./src/image/pm/盔甲鳥_.png":
/*!*******************************!*\
  !*** ./src/image/pm/盔甲鳥_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/盔甲鳥_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%9B%94%E7%94%B2%E9%B3%A5_.png?");

/***/ }),

/***/ "./src/image/pm/直衝熊_.png":
/*!*******************************!*\
  !*** ./src/image/pm/直衝熊_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/直衝熊_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%9B%B4%E8%A1%9D%E7%86%8A_.png?");

/***/ }),

/***/ "./src/image/pm/盾甲繭_.png":
/*!*******************************!*\
  !*** ./src/image/pm/盾甲繭_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/盾甲繭_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%9B%BE%E7%94%B2%E7%B9%AD_.png?");

/***/ }),

/***/ "./src/image/pm/盾甲龍_.png":
/*!*******************************!*\
  !*** ./src/image/pm/盾甲龍_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/盾甲龍_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%9B%BE%E7%94%B2%E9%BE%8D_.png?");

/***/ }),

/***/ "./src/image/pm/穿山王_.png":
/*!*******************************!*\
  !*** ./src/image/pm/穿山王_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/穿山王_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%A9%BF%E5%B1%B1%E7%8E%8B_.png?");

/***/ }),

/***/ "./src/image/pm/穿山鼠_.png":
/*!*******************************!*\
  !*** ./src/image/pm/穿山鼠_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/穿山鼠_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%A9%BF%E5%B1%B1%E9%BC%A0_.png?");

/***/ }),

/***/ "./src/image/pm/章魚桶_.png":
/*!*******************************!*\
  !*** ./src/image/pm/章魚桶_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/章魚桶_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%AB%A0%E9%AD%9A%E6%A1%B6_.png?");

/***/ }),

/***/ "./src/image/pm/紳士蛾_.png":
/*!*******************************!*\
  !*** ./src/image/pm/紳士蛾_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/紳士蛾_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%B4%B3%E5%A3%AB%E8%9B%BE_.png?");

/***/ }),

/***/ "./src/image/pm/結草兒_.png":
/*!*******************************!*\
  !*** ./src/image/pm/結草兒_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/結草兒_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%B5%90%E8%8D%89%E5%85%92_.png?");

/***/ }),

/***/ "./src/image/pm/結草貴婦_.png":
/*!********************************!*\
  !*** ./src/image/pm/結草貴婦_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/結草貴婦_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%B5%90%E8%8D%89%E8%B2%B4%E5%A9%A6_.png?");

/***/ }),

/***/ "./src/image/pm/綠毛蟲_.png":
/*!*******************************!*\
  !*** ./src/image/pm/綠毛蟲_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/綠毛蟲_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%B6%A0%E6%AF%9B%E8%9F%B2_.png?");

/***/ }),

/***/ "./src/image/pm/羅絲雷朵_.png":
/*!********************************!*\
  !*** ./src/image/pm/羅絲雷朵_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/羅絲雷朵_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%BE%85%E7%B5%B2%E9%9B%B7%E6%9C%B5_.png?");

/***/ }),

/***/ "./src/image/pm/美納斯_.png":
/*!*******************************!*\
  !*** ./src/image/pm/美納斯_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/美納斯_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%BE%8E%E7%B4%8D%E6%96%AF_.png?");

/***/ }),

/***/ "./src/image/pm/美麗花_.png":
/*!*******************************!*\
  !*** ./src/image/pm/美麗花_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/美麗花_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E7%BE%8E%E9%BA%97%E8%8A%B1_.png?");

/***/ }),

/***/ "./src/image/pm/耿鬼_.png":
/*!******************************!*\
  !*** ./src/image/pm/耿鬼_.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/耿鬼_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%80%BF%E9%AC%BC_.png?");

/***/ }),

/***/ "./src/image/pm/聒噪鳥_.png":
/*!*******************************!*\
  !*** ./src/image/pm/聒噪鳥_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/聒噪鳥_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%81%92%E5%99%AA%E9%B3%A5_.png?");

/***/ }),

/***/ "./src/image/pm/肯泰羅_.png":
/*!*******************************!*\
  !*** ./src/image/pm/肯泰羅_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/肯泰羅_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%82%AF%E6%B3%B0%E7%BE%85_.png?");

/***/ }),

/***/ "./src/image/pm/胖丁_.png":
/*!******************************!*\
  !*** ./src/image/pm/胖丁_.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/胖丁_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%83%96%E4%B8%81_.png?");

/***/ }),

/***/ "./src/image/pm/胖可丁_.png":
/*!*******************************!*\
  !*** ./src/image/pm/胖可丁_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/胖可丁_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%83%96%E5%8F%AF%E4%B8%81_.png?");

/***/ }),

/***/ "./src/image/pm/胡地_.png":
/*!******************************!*\
  !*** ./src/image/pm/胡地_.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/胡地_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%83%A1%E5%9C%B0_.png?");

/***/ }),

/***/ "./src/image/pm/脫殼忍者_.png":
/*!********************************!*\
  !*** ./src/image/pm/脫殼忍者_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/脫殼忍者_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%84%AB%E6%AE%BC%E5%BF%8D%E8%80%85_.png?");

/***/ }),

/***/ "./src/image/pm/腕力_.png":
/*!******************************!*\
  !*** ./src/image/pm/腕力_.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/腕力_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%85%95%E5%8A%9B_.png?");

/***/ }),

/***/ "./src/image/pm/自爆磁怪_.png":
/*!********************************!*\
  !*** ./src/image/pm/自爆磁怪_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/自爆磁怪_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%87%AA%E7%88%86%E7%A3%81%E6%80%AA_.png?");

/***/ }),

/***/ "./src/image/pm/臭泥_.png":
/*!******************************!*\
  !*** ./src/image/pm/臭泥_.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/臭泥_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%87%AD%E6%B3%A5_.png?");

/***/ }),

/***/ "./src/image/pm/臭臭泥_.png":
/*!*******************************!*\
  !*** ./src/image/pm/臭臭泥_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/臭臭泥_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%87%AD%E8%87%AD%E6%B3%A5_.png?");

/***/ }),

/***/ "./src/image/pm/臭臭花_.png":
/*!*******************************!*\
  !*** ./src/image/pm/臭臭花_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/臭臭花_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%87%AD%E8%87%AD%E8%8A%B1_.png?");

/***/ }),

/***/ "./src/image/pm/臭鼬噗_.png":
/*!*******************************!*\
  !*** ./src/image/pm/臭鼬噗_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/臭鼬噗_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%87%AD%E9%BC%AC%E5%99%97_.png?");

/***/ }),

/***/ "./src/image/pm/艾姆利多_.png":
/*!********************************!*\
  !*** ./src/image/pm/艾姆利多_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/艾姆利多_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%89%BE%E5%A7%86%E5%88%A9%E5%A4%9A_.png?");

/***/ }),

/***/ "./src/image/pm/艾路雷朵_.png":
/*!********************************!*\
  !*** ./src/image/pm/艾路雷朵_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/艾路雷朵_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%89%BE%E8%B7%AF%E9%9B%B7%E6%9C%B5_.png?");

/***/ }),

/***/ "./src/image/pm/芭瓢蟲_.png":
/*!*******************************!*\
  !*** ./src/image/pm/芭瓢蟲_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/芭瓢蟲_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%8A%AD%E7%93%A2%E8%9F%B2_.png?");

/***/ }),

/***/ "./src/image/pm/花岩怪_.png":
/*!*******************************!*\
  !*** ./src/image/pm/花岩怪_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/花岩怪_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%8A%B1%E5%B2%A9%E6%80%AA_.png?");

/***/ }),

/***/ "./src/image/pm/茸茸羊_.png":
/*!*******************************!*\
  !*** ./src/image/pm/茸茸羊_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/茸茸羊_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%8C%B8%E8%8C%B8%E7%BE%8A_.png?");

/***/ }),

/***/ "./src/image/pm/草苗龜_.png":
/*!*******************************!*\
  !*** ./src/image/pm/草苗龜_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/草苗龜_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%8D%89%E8%8B%97%E9%BE%9C_.png?");

/***/ }),

/***/ "./src/image/pm/菊石獸_.png":
/*!*******************************!*\
  !*** ./src/image/pm/菊石獸_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/菊石獸_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%8F%8A%E7%9F%B3%E7%8D%B8_.png?");

/***/ }),

/***/ "./src/image/pm/菊草葉_.png":
/*!*******************************!*\
  !*** ./src/image/pm/菊草葉_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/菊草葉_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%8F%8A%E8%8D%89%E8%91%89_.png?");

/***/ }),

/***/ "./src/image/pm/落雷獸_.png":
/*!*******************************!*\
  !*** ./src/image/pm/落雷獸_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/落雷獸_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%90%BD%E9%9B%B7%E7%8D%B8_.png?");

/***/ }),

/***/ "./src/image/pm/葉伊布_.png":
/*!*******************************!*\
  !*** ./src/image/pm/葉伊布_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/葉伊布_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%91%89%E4%BC%8A%E5%B8%83_.png?");

/***/ }),

/***/ "./src/image/pm/蓋歐卡_.png":
/*!*******************************!*\
  !*** ./src/image/pm/蓋歐卡_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/蓋歐卡_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%93%8B%E6%AD%90%E5%8D%A1_.png?");

/***/ }),

/***/ "./src/image/pm/蓮帽小童_.png":
/*!********************************!*\
  !*** ./src/image/pm/蓮帽小童_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/蓮帽小童_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%93%AE%E5%B8%BD%E5%B0%8F%E7%AB%A5_.png?");

/***/ }),

/***/ "./src/image/pm/蓮葉童子_.png":
/*!********************************!*\
  !*** ./src/image/pm/蓮葉童子_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/蓮葉童子_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%93%AE%E8%91%89%E7%AB%A5%E5%AD%90_.png?");

/***/ }),

/***/ "./src/image/pm/蔓藤怪_.png":
/*!*******************************!*\
  !*** ./src/image/pm/蔓藤怪_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/蔓藤怪_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%94%93%E8%97%A4%E6%80%AA_.png?");

/***/ }),

/***/ "./src/image/pm/藍鱷_.png":
/*!******************************!*\
  !*** ./src/image/pm/藍鱷_.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/藍鱷_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%97%8D%E9%B1%B7_.png?");

/***/ }),

/***/ "./src/image/pm/蘑蘑菇_.png":
/*!*******************************!*\
  !*** ./src/image/pm/蘑蘑菇_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/蘑蘑菇_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%98%91%E8%98%91%E8%8F%87_.png?");

/***/ }),

/***/ "./src/image/pm/蚊香君_.png":
/*!*******************************!*\
  !*** ./src/image/pm/蚊香君_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/蚊香君_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%9A%8A%E9%A6%99%E5%90%9B_.png?");

/***/ }),

/***/ "./src/image/pm/蚊香泳士_.png":
/*!********************************!*\
  !*** ./src/image/pm/蚊香泳士_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/蚊香泳士_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%9A%8A%E9%A6%99%E6%B3%B3%E5%A3%AB_.png?");

/***/ }),

/***/ "./src/image/pm/蚊香蛙皇_.png":
/*!********************************!*\
  !*** ./src/image/pm/蚊香蛙皇_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/蚊香蛙皇_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%9A%8A%E9%A6%99%E8%9B%99%E7%9A%87_.png?");

/***/ }),

/***/ "./src/image/pm/蚊香蝌蚪_.png":
/*!********************************!*\
  !*** ./src/image/pm/蚊香蝌蚪_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/蚊香蝌蚪_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%9A%8A%E9%A6%99%E8%9D%8C%E8%9A%AA_.png?");

/***/ }),

/***/ "./src/image/pm/蛇紋熊_.png":
/*!*******************************!*\
  !*** ./src/image/pm/蛇紋熊_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/蛇紋熊_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%9B%87%E7%B4%8B%E7%86%8A_.png?");

/***/ }),

/***/ "./src/image/pm/蛋蛋_.png":
/*!******************************!*\
  !*** ./src/image/pm/蛋蛋_.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/蛋蛋_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%9B%8B%E8%9B%8B_.png?");

/***/ }),

/***/ "./src/image/pm/蜂女王_.png":
/*!*******************************!*\
  !*** ./src/image/pm/蜂女王_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/蜂女王_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%9C%82%E5%A5%B3%E7%8E%8B_.png?");

/***/ }),

/***/ "./src/image/pm/蜥蜴王_.png":
/*!*******************************!*\
  !*** ./src/image/pm/蜥蜴王_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/蜥蜴王_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%9C%A5%E8%9C%B4%E7%8E%8B_.png?");

/***/ }),

/***/ "./src/image/pm/蜻蜻蜓_.png":
/*!*******************************!*\
  !*** ./src/image/pm/蜻蜻蜓_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/蜻蜻蜓_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%9C%BB%E8%9C%BB%E8%9C%93_.png?");

/***/ }),

/***/ "./src/image/pm/螢光魚_.png":
/*!*******************************!*\
  !*** ./src/image/pm/螢光魚_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/螢光魚_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%9E%A2%E5%85%89%E9%AD%9A_.png?");

/***/ }),

/***/ "./src/image/pm/袋獸_.png":
/*!******************************!*\
  !*** ./src/image/pm/袋獸_.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/袋獸_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%A2%8B%E7%8D%B8_.png?");

/***/ }),

/***/ "./src/image/pm/補給站轉排任務_.png":
/*!***********************************!*\
  !*** ./src/image/pm/補給站轉排任務_.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/補給站轉排任務_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%A3%9C%E7%B5%A6%E7%AB%99%E8%BD%89%E6%8E%92%E4%BB%BB%E5%8B%99_.png?");

/***/ }),

/***/ "./src/image/pm/角金魚_.png":
/*!*******************************!*\
  !*** ./src/image/pm/角金魚_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/角金魚_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%A7%92%E9%87%91%E9%AD%9A_.png?");

/***/ }),

/***/ "./src/image/pm/觸手百合_.png":
/*!********************************!*\
  !*** ./src/image/pm/觸手百合_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/觸手百合_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%A7%B8%E6%89%8B%E7%99%BE%E5%90%88_.png?");

/***/ }),

/***/ "./src/image/pm/詛咒娃娃_.png":
/*!********************************!*\
  !*** ./src/image/pm/詛咒娃娃_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/詛咒娃娃_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%A9%9B%E5%92%92%E5%A8%83%E5%A8%83_.png?");

/***/ }),

/***/ "./src/image/pm/請假王_.png":
/*!*******************************!*\
  !*** ./src/image/pm/請假王_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/請假王_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%AB%8B%E5%81%87%E7%8E%8B_.png?");

/***/ }),

/***/ "./src/image/pm/謝米_.png":
/*!******************************!*\
  !*** ./src/image/pm/謝米_.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/謝米_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%AC%9D%E7%B1%B3_.png?");

/***/ }),

/***/ "./src/image/pm/護城龍_.png":
/*!*******************************!*\
  !*** ./src/image/pm/護城龍_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/護城龍_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%AD%B7%E5%9F%8E%E9%BE%8D_.png?");

/***/ }),

/***/ "./src/image/pm/變隱龍_.png":
/*!*******************************!*\
  !*** ./src/image/pm/變隱龍_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/變隱龍_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%AE%8A%E9%9A%B1%E9%BE%8D_.png?");

/***/ }),

/***/ "./src/image/pm/象牙豬_.png":
/*!*******************************!*\
  !*** ./src/image/pm/象牙豬_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/象牙豬_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%B1%A1%E7%89%99%E8%B1%AC_.png?");

/***/ }),

/***/ "./src/image/pm/豪力_.png":
/*!******************************!*\
  !*** ./src/image/pm/豪力_.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/豪力_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%B1%AA%E5%8A%9B_.png?");

/***/ }),

/***/ "./src/image/pm/貓老大_.png":
/*!*******************************!*\
  !*** ./src/image/pm/貓老大_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/貓老大_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%B2%93%E8%80%81%E5%A4%A7_.png?");

/***/ }),

/***/ "./src/image/pm/貓頭夜鷹_.png":
/*!********************************!*\
  !*** ./src/image/pm/貓頭夜鷹_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/貓頭夜鷹_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%B2%93%E9%A0%AD%E5%A4%9C%E9%B7%B9_.png?");

/***/ }),

/***/ "./src/image/pm/貓鼬斬_.png":
/*!*******************************!*\
  !*** ./src/image/pm/貓鼬斬_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/貓鼬斬_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%B2%93%E9%BC%AC%E6%96%AC_.png?");

/***/ }),

/***/ "./src/image/pm/負電拍拍_.png":
/*!********************************!*\
  !*** ./src/image/pm/負電拍拍_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/負電拍拍_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%B2%A0%E9%9B%BB%E6%8B%8D%E6%8B%8D_.png?");

/***/ }),

/***/ "./src/image/pm/赫拉克羅斯_.png":
/*!*********************************!*\
  !*** ./src/image/pm/赫拉克羅斯_.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/赫拉克羅斯_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%B5%AB%E6%8B%89%E5%85%8B%E7%BE%85%E6%96%AF_.png?");

/***/ }),

/***/ "./src/image/pm/走路草_.png":
/*!*******************************!*\
  !*** ./src/image/pm/走路草_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/走路草_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%B5%B0%E8%B7%AF%E8%8D%89_.png?");

/***/ }),

/***/ "./src/image/pm/超夢_.png":
/*!******************************!*\
  !*** ./src/image/pm/超夢_.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/超夢_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%B6%85%E5%A4%A2_.png?");

/***/ }),

/***/ "./src/image/pm/超甲狂犀_.png":
/*!********************************!*\
  !*** ./src/image/pm/超甲狂犀_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/超甲狂犀_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%B6%85%E7%94%B2%E7%8B%82%E7%8A%80_.png?");

/***/ }),

/***/ "./src/image/pm/超音波幼蟲_.png":
/*!*********************************!*\
  !*** ./src/image/pm/超音波幼蟲_.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/超音波幼蟲_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%B6%85%E9%9F%B3%E6%B3%A2%E5%B9%BC%E8%9F%B2_.png?");

/***/ }),

/***/ "./src/image/pm/超音蝠_.png":
/*!*******************************!*\
  !*** ./src/image/pm/超音蝠_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/超音蝠_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%B6%85%E9%9F%B3%E8%9D%A0_.png?");

/***/ }),

/***/ "./src/image/pm/路卡利歐_.png":
/*!********************************!*\
  !*** ./src/image/pm/路卡利歐_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/路卡利歐_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%B7%AF%E5%8D%A1%E5%88%A9%E6%AD%90_.png?");

/***/ }),

/***/ "./src/image/pm/跳跳豬_.png":
/*!*******************************!*\
  !*** ./src/image/pm/跳跳豬_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/跳跳豬_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%B7%B3%E8%B7%B3%E8%B1%AC_.png?");

/***/ }),

/***/ "./src/image/pm/迷你龍_.png":
/*!*******************************!*\
  !*** ./src/image/pm/迷你龍_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/迷你龍_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%BF%B7%E4%BD%A0%E9%BE%8D_.png?");

/***/ }),

/***/ "./src/image/pm/迷唇姐_.png":
/*!*******************************!*\
  !*** ./src/image/pm/迷唇姐_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/迷唇姐_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%BF%B7%E5%94%87%E5%A7%90_.png?");

/***/ }),

/***/ "./src/image/pm/迷唇娃_.png":
/*!*******************************!*\
  !*** ./src/image/pm/迷唇娃_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/迷唇娃_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E8%BF%B7%E5%94%87%E5%A8%83_.png?");

/***/ }),

/***/ "./src/image/pm/過動猿_.png":
/*!*******************************!*\
  !*** ./src/image/pm/過動猿_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/過動猿_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%81%8E%E5%8B%95%E7%8C%BF_.png?");

/***/ }),

/***/ "./src/image/pm/道館對戰任務_.png":
/*!**********************************!*\
  !*** ./src/image/pm/道館對戰任務_.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/道館對戰任務_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%81%93%E9%A4%A8%E5%B0%8D%E6%88%B0%E4%BB%BB%E5%8B%99_.png?");

/***/ }),

/***/ "./src/image/pm/達克萊伊_.png":
/*!********************************!*\
  !*** ./src/image/pm/達克萊伊_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/達克萊伊_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%81%94%E5%85%8B%E8%90%8A%E4%BC%8A_.png?");

/***/ }),

/***/ "./src/image/pm/遠古巨蜓_.png":
/*!********************************!*\
  !*** ./src/image/pm/遠古巨蜓_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/遠古巨蜓_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%81%A0%E5%8F%A4%E5%B7%A8%E8%9C%93_.png?");

/***/ }),

/***/ "./src/image/pm/醜醜魚_.png":
/*!*******************************!*\
  !*** ./src/image/pm/醜醜魚_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/醜醜魚_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%86%9C%E9%86%9C%E9%AD%9A_.png?");

/***/ }),

/***/ "./src/image/pm/金屬怪_.png":
/*!*******************************!*\
  !*** ./src/image/pm/金屬怪_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/金屬怪_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%87%91%E5%B1%AC%E6%80%AA_.png?");

/***/ }),

/***/ "./src/image/pm/金魚王_.png":
/*!*******************************!*\
  !*** ./src/image/pm/金魚王_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/金魚王_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%87%91%E9%AD%9A%E7%8E%8B_.png?");

/***/ }),

/***/ "./src/image/pm/鈴鐺響_.png":
/*!*******************************!*\
  !*** ./src/image/pm/鈴鐺響_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/鈴鐺響_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%88%B4%E9%90%BA%E9%9F%BF_.png?");

/***/ }),

/***/ "./src/image/pm/鉗尾蠍_.png":
/*!*******************************!*\
  !*** ./src/image/pm/鉗尾蠍_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/鉗尾蠍_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%89%97%E5%B0%BE%E8%A0%8D_.png?");

/***/ }),

/***/ "./src/image/pm/銀凰果_.png":
/*!*******************************!*\
  !*** ./src/image/pm/銀凰果_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/銀凰果_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%8A%80%E5%87%B0%E6%9E%9C_.png?");

/***/ }),

/***/ "./src/image/pm/銅鏡怪_.png":
/*!*******************************!*\
  !*** ./src/image/pm/銅鏡怪_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/銅鏡怪_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%8A%85%E9%8F%A1%E6%80%AA_.png?");

/***/ }),

/***/ "./src/image/pm/鐮刀盔_.png":
/*!*******************************!*\
  !*** ./src/image/pm/鐮刀盔_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/鐮刀盔_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%90%AE%E5%88%80%E7%9B%94_.png?");

/***/ }),

/***/ "./src/image/pm/鐵啞鈴_.png":
/*!*******************************!*\
  !*** ./src/image/pm/鐵啞鈴_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/鐵啞鈴_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%90%B5%E5%95%9E%E9%88%B4_.png?");

/***/ }),

/***/ "./src/image/pm/鐵掌力士_.png":
/*!********************************!*\
  !*** ./src/image/pm/鐵掌力士_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/鐵掌力士_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%90%B5%E6%8E%8C%E5%8A%9B%E5%A3%AB_.png?");

/***/ }),

/***/ "./src/image/pm/鐵殼蛹_.png":
/*!*******************************!*\
  !*** ./src/image/pm/鐵殼蛹_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/鐵殼蛹_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%90%B5%E6%AE%BC%E8%9B%B9_.png?");

/***/ }),

/***/ "./src/image/pm/鐵炮魚_.png":
/*!*******************************!*\
  !*** ./src/image/pm/鐵炮魚_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/鐵炮魚_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%90%B5%E7%82%AE%E9%AD%9A_.png?");

/***/ }),

/***/ "./src/image/pm/鐵甲蛹_.png":
/*!*******************************!*\
  !*** ./src/image/pm/鐵甲蛹_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/鐵甲蛹_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%90%B5%E7%94%B2%E8%9B%B9_.png?");

/***/ }),

/***/ "./src/image/pm/鐵螯龍蝦_.png":
/*!********************************!*\
  !*** ./src/image/pm/鐵螯龍蝦_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/鐵螯龍蝦_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%90%B5%E8%9E%AF%E9%BE%8D%E8%9D%A6_.png?");

/***/ }),

/***/ "./src/image/pm/鐵面忍者_.png":
/*!********************************!*\
  !*** ./src/image/pm/鐵面忍者_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/鐵面忍者_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%90%B5%E9%9D%A2%E5%BF%8D%E8%80%85_.png?");

/***/ }),

/***/ "./src/image/pm/鑽角犀獸_.png":
/*!********************************!*\
  !*** ./src/image/pm/鑽角犀獸_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/鑽角犀獸_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%91%BD%E8%A7%92%E7%8A%80%E7%8D%B8_.png?");

/***/ }),

/***/ "./src/image/pm/長尾怪手_.png":
/*!********************************!*\
  !*** ./src/image/pm/長尾怪手_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/長尾怪手_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%95%B7%E5%B0%BE%E6%80%AA%E6%89%8B_.png?");

/***/ }),

/***/ "./src/image/pm/長毛豬_.png":
/*!*******************************!*\
  !*** ./src/image/pm/長毛豬_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/長毛豬_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%95%B7%E6%AF%9B%E8%B1%AC_.png?");

/***/ }),

/***/ "./src/image/pm/長翅鷗_.png":
/*!*******************************!*\
  !*** ./src/image/pm/長翅鷗_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/長翅鷗_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%95%B7%E7%BF%85%E9%B7%97_.png?");

/***/ }),

/***/ "./src/image/pm/長耳兔_.png":
/*!*******************************!*\
  !*** ./src/image/pm/長耳兔_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/長耳兔_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%95%B7%E8%80%B3%E5%85%94_.png?");

/***/ }),

/***/ "./src/image/pm/長鼻葉_.png":
/*!*******************************!*\
  !*** ./src/image/pm/長鼻葉_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/長鼻葉_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%95%B7%E9%BC%BB%E8%91%89_.png?");

/***/ }),

/***/ "./src/image/pm/閃電鳥_.png":
/*!*******************************!*\
  !*** ./src/image/pm/閃電鳥_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/閃電鳥_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%96%83%E9%9B%BB%E9%B3%A5_.png?");

/***/ }),

/***/ "./src/image/pm/阿利多斯_.png":
/*!********************************!*\
  !*** ./src/image/pm/阿利多斯_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/阿利多斯_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%98%BF%E5%88%A9%E5%A4%9A%E6%96%AF_.png?");

/***/ }),

/***/ "./src/image/pm/阿勃梭魯_.png":
/*!********************************!*\
  !*** ./src/image/pm/阿勃梭魯_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/阿勃梭魯_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%98%BF%E5%8B%83%E6%A2%AD%E9%AD%AF_.png?");

/***/ }),

/***/ "./src/image/pm/阿柏怪_.png":
/*!*******************************!*\
  !*** ./src/image/pm/阿柏怪_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/阿柏怪_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%98%BF%E6%9F%8F%E6%80%AA_.png?");

/***/ }),

/***/ "./src/image/pm/阿柏蛇_.png":
/*!*******************************!*\
  !*** ./src/image/pm/阿柏蛇_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/阿柏蛇_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%98%BF%E6%9F%8F%E8%9B%87_.png?");

/***/ }),

/***/ "./src/image/pm/阿爾宙斯_.png":
/*!********************************!*\
  !*** ./src/image/pm/阿爾宙斯_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/阿爾宙斯_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%98%BF%E7%88%BE%E5%AE%99%E6%96%AF_.png?");

/***/ }),

/***/ "./src/image/pm/隆隆岩_.png":
/*!*******************************!*\
  !*** ./src/image/pm/隆隆岩_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/隆隆岩_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%9A%86%E9%9A%86%E5%B2%A9_.png?");

/***/ }),

/***/ "./src/image/pm/隆隆石_.png":
/*!*******************************!*\
  !*** ./src/image/pm/隆隆石_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/隆隆石_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%9A%86%E9%9A%86%E7%9F%B3_.png?");

/***/ }),

/***/ "./src/image/pm/隨風球_.png":
/*!*******************************!*\
  !*** ./src/image/pm/隨風球_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/隨風球_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%9A%A8%E9%A2%A8%E7%90%83_.png?");

/***/ }),

/***/ "./src/image/pm/雙尾怪手_.png":
/*!********************************!*\
  !*** ./src/image/pm/雙尾怪手_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/雙尾怪手_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%9B%99%E5%B0%BE%E6%80%AA%E6%89%8B_.png?");

/***/ }),

/***/ "./src/image/pm/雙彈瓦斯_.png":
/*!********************************!*\
  !*** ./src/image/pm/雙彈瓦斯_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/雙彈瓦斯_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%9B%99%E5%BD%88%E7%93%A6%E6%96%AF_.png?");

/***/ }),

/***/ "./src/image/pm/雨翅蛾_.png":
/*!*******************************!*\
  !*** ./src/image/pm/雨翅蛾_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/雨翅蛾_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%9B%A8%E7%BF%85%E8%9B%BE_.png?");

/***/ }),

/***/ "./src/image/pm/雪妖女_.png":
/*!*******************************!*\
  !*** ./src/image/pm/雪妖女_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/雪妖女_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%9B%AA%E5%A6%96%E5%A5%B3_.png?");

/***/ }),

/***/ "./src/image/pm/雪童子_.png":
/*!*******************************!*\
  !*** ./src/image/pm/雪童子_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/雪童子_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%9B%AA%E7%AB%A5%E5%AD%90_.png?");

/***/ }),

/***/ "./src/image/pm/雪笠怪_.png":
/*!*******************************!*\
  !*** ./src/image/pm/雪笠怪_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/雪笠怪_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%9B%AA%E7%AC%A0%E6%80%AA_.png?");

/***/ }),

/***/ "./src/image/pm/雷丘_.png":
/*!******************************!*\
  !*** ./src/image/pm/雷丘_.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/雷丘_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%9B%B7%E4%B8%98_.png?");

/***/ }),

/***/ "./src/image/pm/雷伊布_.png":
/*!*******************************!*\
  !*** ./src/image/pm/雷伊布_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/雷伊布_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%9B%B7%E4%BC%8A%E5%B8%83_.png?");

/***/ }),

/***/ "./src/image/pm/雷公_.png":
/*!******************************!*\
  !*** ./src/image/pm/雷公_.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/雷公_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%9B%B7%E5%85%AC_.png?");

/***/ }),

/***/ "./src/image/pm/雷吉奇卡斯_.png":
/*!*********************************!*\
  !*** ./src/image/pm/雷吉奇卡斯_.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/雷吉奇卡斯_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%9B%B7%E5%90%89%E5%A5%87%E5%8D%A1%E6%96%AF_.png?");

/***/ }),

/***/ "./src/image/pm/雷吉斯奇魯_.png":
/*!*********************************!*\
  !*** ./src/image/pm/雷吉斯奇魯_.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/雷吉斯奇魯_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%9B%B7%E5%90%89%E6%96%AF%E5%A5%87%E9%AD%AF_.png?");

/***/ }),

/***/ "./src/image/pm/雷吉洛克_.png":
/*!********************************!*\
  !*** ./src/image/pm/雷吉洛克_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/雷吉洛克_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%9B%B7%E5%90%89%E6%B4%9B%E5%85%8B_.png?");

/***/ }),

/***/ "./src/image/pm/雷吉艾斯_.png":
/*!********************************!*\
  !*** ./src/image/pm/雷吉艾斯_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/雷吉艾斯_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%9B%B7%E5%90%89%E8%89%BE%E6%96%AF_.png?");

/***/ }),

/***/ "./src/image/pm/雷電獸_.png":
/*!*******************************!*\
  !*** ./src/image/pm/雷電獸_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/雷電獸_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%9B%B7%E9%9B%BB%E7%8D%B8_.png?");

/***/ }),

/***/ "./src/image/pm/電擊怪_.png":
/*!*******************************!*\
  !*** ./src/image/pm/電擊怪_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/電擊怪_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%9B%BB%E6%93%8A%E6%80%AA_.png?");

/***/ }),

/***/ "./src/image/pm/電擊獸_.png":
/*!*******************************!*\
  !*** ./src/image/pm/電擊獸_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/電擊獸_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%9B%BB%E6%93%8A%E7%8D%B8_.png?");

/***/ }),

/***/ "./src/image/pm/電擊魔獸_.png":
/*!********************************!*\
  !*** ./src/image/pm/電擊魔獸_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/電擊魔獸_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%9B%BB%E6%93%8A%E9%AD%94%E7%8D%B8_.png?");

/***/ }),

/***/ "./src/image/pm/電燈怪_.png":
/*!*******************************!*\
  !*** ./src/image/pm/電燈怪_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/電燈怪_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%9B%BB%E7%87%88%E6%80%AA_.png?");

/***/ }),

/***/ "./src/image/pm/電螢蟲_.png":
/*!*******************************!*\
  !*** ./src/image/pm/電螢蟲_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/電螢蟲_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%9B%BB%E8%9E%A2%E8%9F%B2_.png?");

/***/ }),

/***/ "./src/image/pm/電龍_.png":
/*!******************************!*\
  !*** ./src/image/pm/電龍_.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/電龍_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%9B%BB%E9%BE%8D_.png?");

/***/ }),

/***/ "./src/image/pm/霏歐納_.png":
/*!*******************************!*\
  !*** ./src/image/pm/霏歐納_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/霏歐納_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%9C%8F%E6%AD%90%E7%B4%8D_.png?");

/***/ }),

/***/ "./src/image/pm/霓虹魚_.png":
/*!*******************************!*\
  !*** ./src/image/pm/霓虹魚_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/霓虹魚_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%9C%93%E8%99%B9%E9%AD%9A_.png?");

/***/ }),

/***/ "./src/image/pm/露力麗_.png":
/*!*******************************!*\
  !*** ./src/image/pm/露力麗_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/露力麗_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%9C%B2%E5%8A%9B%E9%BA%97_.png?");

/***/ }),

/***/ "./src/image/pm/霸王花_.png":
/*!*******************************!*\
  !*** ./src/image/pm/霸王花_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/霸王花_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%9C%B8%E7%8E%8B%E8%8A%B1_.png?");

/***/ }),

/***/ "./src/image/pm/霹靂電球_.png":
/*!********************************!*\
  !*** ./src/image/pm/霹靂電球_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/霹靂電球_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%9C%B9%E9%9D%82%E9%9B%BB%E7%90%83_.png?");

/***/ }),

/***/ "./src/image/pm/青綿鳥_.png":
/*!*******************************!*\
  !*** ./src/image/pm/青綿鳥_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/青綿鳥_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%9D%92%E7%B6%BF%E9%B3%A5_.png?");

/***/ }),

/***/ "./src/image/pm/青銅鐘_.png":
/*!*******************************!*\
  !*** ./src/image/pm/青銅鐘_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/青銅鐘_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%9D%92%E9%8A%85%E9%90%98_.png?");

/***/ }),

/***/ "./src/image/pm/音箱蟀_.png":
/*!*******************************!*\
  !*** ./src/image/pm/音箱蟀_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/音箱蟀_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%9F%B3%E7%AE%B1%E8%9F%80_.png?");

/***/ }),

/***/ "./src/image/pm/頑皮雷彈_.png":
/*!********************************!*\
  !*** ./src/image/pm/頑皮雷彈_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/頑皮雷彈_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%A0%91%E7%9A%AE%E9%9B%B7%E5%BD%88_.png?");

/***/ }),

/***/ "./src/image/pm/頓甲_.png":
/*!******************************!*\
  !*** ./src/image/pm/頓甲_.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/頓甲_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%A0%93%E7%94%B2_.png?");

/***/ }),

/***/ "./src/image/pm/頭蓋龍_.png":
/*!*******************************!*\
  !*** ./src/image/pm/頭蓋龍_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/頭蓋龍_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%A0%AD%E8%93%8B%E9%BE%8D_.png?");

/***/ }),

/***/ "./src/image/pm/風速狗_.png":
/*!*******************************!*\
  !*** ./src/image/pm/風速狗_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/風速狗_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%A2%A8%E9%80%9F%E7%8B%97_.png?");

/***/ }),

/***/ "./src/image/pm/風鈴鈴_.png":
/*!*******************************!*\
  !*** ./src/image/pm/風鈴鈴_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/風鈴鈴_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%A2%A8%E9%88%B4%E9%88%B4_.png?");

/***/ }),

/***/ "./src/image/pm/飄浮泡泡_.png":
/*!********************************!*\
  !*** ./src/image/pm/飄浮泡泡_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/飄浮泡泡_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%A3%84%E6%B5%AE%E6%B3%A1%E6%B3%A1_.png?");

/***/ }),

/***/ "./src/image/pm/飄飄球_.png":
/*!*******************************!*\
  !*** ./src/image/pm/飄飄球_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/飄飄球_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%A3%84%E9%A3%84%E7%90%83_.png?");

/***/ }),

/***/ "./src/image/pm/飛天螳螂_.png":
/*!********************************!*\
  !*** ./src/image/pm/飛天螳螂_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/飛天螳螂_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%A3%9B%E5%A4%A9%E8%9E%B3%E8%9E%82_.png?");

/***/ }),

/***/ "./src/image/pm/飛腿郎_.png":
/*!*******************************!*\
  !*** ./src/image/pm/飛腿郎_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/飛腿郎_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%A3%9B%E8%85%BF%E9%83%8E_.png?");

/***/ }),

/***/ "./src/image/pm/飯匙蛇_.png":
/*!*******************************!*\
  !*** ./src/image/pm/飯匙蛇_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/飯匙蛇_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%A3%AF%E5%8C%99%E8%9B%87_.png?");

/***/ }),

/***/ "./src/image/pm/餵食樹果任務_.png":
/*!**********************************!*\
  !*** ./src/image/pm/餵食樹果任務_.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/餵食樹果任務_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%A4%B5%E9%A3%9F%E6%A8%B9%E6%9E%9C%E4%BB%BB%E5%8B%99_.png?");

/***/ }),

/***/ "./src/image/pm/騎拉帝納_.png":
/*!********************************!*\
  !*** ./src/image/pm/騎拉帝納_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/騎拉帝納_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%A8%8E%E6%8B%89%E5%B8%9D%E7%B4%8D_.png?");

/***/ }),

/***/ "./src/image/pm/驚角鹿_.png":
/*!*******************************!*\
  !*** ./src/image/pm/驚角鹿_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/驚角鹿_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%A9%9A%E8%A7%92%E9%B9%BF_.png?");

/***/ }),

/***/ "./src/image/pm/鬼斯_.png":
/*!******************************!*\
  !*** ./src/image/pm/鬼斯_.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/鬼斯_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%AC%BC%E6%96%AF_.png?");

/***/ }),

/***/ "./src/image/pm/鬼斯通_.png":
/*!*******************************!*\
  !*** ./src/image/pm/鬼斯通_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/鬼斯通_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%AC%BC%E6%96%AF%E9%80%9A_.png?");

/***/ }),

/***/ "./src/image/pm/魅力喵_.png":
/*!*******************************!*\
  !*** ./src/image/pm/魅力喵_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/魅力喵_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%AD%85%E5%8A%9B%E5%96%B5_.png?");

/***/ }),

/***/ "./src/image/pm/魔尼尼_.png":
/*!*******************************!*\
  !*** ./src/image/pm/魔尼尼_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/魔尼尼_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%AD%94%E5%B0%BC%E5%B0%BC_.png?");

/***/ }),

/***/ "./src/image/pm/魔牆人偶_.png":
/*!********************************!*\
  !*** ./src/image/pm/魔牆人偶_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/魔牆人偶_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%AD%94%E7%89%86%E4%BA%BA%E5%81%B6_.png?");

/***/ }),

/***/ "./src/image/pm/鯉魚王_.png":
/*!*******************************!*\
  !*** ./src/image/pm/鯉魚王_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/鯉魚王_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%AF%89%E9%AD%9A%E7%8E%8B_.png?");

/***/ }),

/***/ "./src/image/pm/鯰魚王_.png":
/*!*******************************!*\
  !*** ./src/image/pm/鯰魚王_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/鯰魚王_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%AF%B0%E9%AD%9A%E7%8E%8B_.png?");

/***/ }),

/***/ "./src/image/pm/鳳王_.png":
/*!******************************!*\
  !*** ./src/image/pm/鳳王_.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/鳳王_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%B3%B3%E7%8E%8B_.png?");

/***/ }),

/***/ "./src/image/pm/鴨嘴寶寶_.png":
/*!********************************!*\
  !*** ./src/image/pm/鴨嘴寶寶_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/鴨嘴寶寶_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%B4%A8%E5%98%B4%E5%AF%B6%E5%AF%B6_.png?");

/***/ }),

/***/ "./src/image/pm/鴨嘴火獸_.png":
/*!********************************!*\
  !*** ./src/image/pm/鴨嘴火獸_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/鴨嘴火獸_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%B4%A8%E5%98%B4%E7%81%AB%E7%8D%B8_.png?");

/***/ }),

/***/ "./src/image/pm/鴨嘴炎獸_.png":
/*!********************************!*\
  !*** ./src/image/pm/鴨嘴炎獸_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/鴨嘴炎獸_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%B4%A8%E5%98%B4%E7%82%8E%E7%8D%B8_.png?");

/***/ }),

/***/ "./src/image/pm/麒麟奇_.png":
/*!*******************************!*\
  !*** ./src/image/pm/麒麟奇_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/麒麟奇_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%BA%92%E9%BA%9F%E5%A5%87_.png?");

/***/ }),

/***/ "./src/image/pm/黑夜魔靈_.png":
/*!********************************!*\
  !*** ./src/image/pm/黑夜魔靈_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/黑夜魔靈_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%BB%91%E5%A4%9C%E9%AD%94%E9%9D%88_.png?");

/***/ }),

/***/ "./src/image/pm/黑暗鴉_.png":
/*!*******************************!*\
  !*** ./src/image/pm/黑暗鴉_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/黑暗鴉_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%BB%91%E6%9A%97%E9%B4%89_.png?");

/***/ }),

/***/ "./src/image/pm/黑魯加_.png":
/*!*******************************!*\
  !*** ./src/image/pm/黑魯加_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/黑魯加_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%BB%91%E9%AD%AF%E5%8A%A0_.png?");

/***/ }),

/***/ "./src/image/pm/龍王蠍_.png":
/*!*******************************!*\
  !*** ./src/image/pm/龍王蠍_.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/龍王蠍_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%BE%8D%E7%8E%8B%E8%A0%8D_.png?");

/***/ }),

/***/ "./src/image/pm/龍蝦小兵_.png":
/*!********************************!*\
  !*** ./src/image/pm/龍蝦小兵_.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/龍蝦小兵_.png\";\n\n//# sourceURL=webpack:///./src/image/pm/%E9%BE%8D%E8%9D%A6%E5%B0%8F%E5%85%B5_.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.js */ \"./src/map.js\");\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ \"./src/data.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _image_icon_favicon_ico__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image/icon/favicon.ico */ \"./src/image/icon/favicon.ico\");\n/* harmony import */ var _image_icon_favicon_ico__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_image_icon_favicon_ico__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n\n// console.log(getData);\n\nasync function task() {\n    let data = await Object(_data_js__WEBPACK_IMPORTED_MODULE_1__[\"getData\"])();\n    let tasks = new _task_js__WEBPACK_IMPORTED_MODULE_2__[\"Task\"](data[0]).cleanTask().setIcons();\n\n    console.log(tasks);\n}\n\ntask();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/map.js":
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ \"./node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ \"./node_modules/leaflet/dist/leaflet.css\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _image_icon_location_64_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image/icon/location_64.png */ \"./src/image/icon/location_64.png\");\n/* harmony import */ var _image_icon_location_64_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_image_icon_location_64_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _image_icon_direction_64_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image/icon/direction_64.png */ \"./src/image/icon/direction_64.png\");\n/* harmony import */ var _image_icon_direction_64_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_image_icon_direction_64_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _image_icon_pikachu_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image/icon/pikachu.gif */ \"./src/image/icon/pikachu.gif\");\n/* harmony import */ var _image_icon_pikachu_gif__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_image_icon_pikachu_gif__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data.js */ \"./src/data.js\");\n/* harmony import */ var _css_map_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css/map.css */ \"./src/css/map.css\");\n/* harmony import */ var _css_map_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_map_css__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\n\n\nclass Map {\n    // 初始化\n    constructor() {\n        // 街道圖\n        this.streets = leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.tileLayer(\"https://mt{s}.google.com/vt/x={x}&y={y}&z={z}&hl=zh-TW\", {\n            subdomains: \"012\",\n            maxZoom: 20,\n            attribution: \"Map data: &copy; Google\"\n        });\n        // 地圖物件\n        this.map = leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.map(\"map\", {\n            attributionControl: false\n        });\n\n        let location = Object(_data_js__WEBPACK_IMPORTED_MODULE_5__[\"getLocation\"])();\n        let mapLatLng = location.latLng;\n        let mapZoom = location.zoom;\n\n        this.map.addLayer(this.streets).setView(mapLatLng, mapZoom);\n\n        this.direction = undefined;\n\n        this.user = leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.marker(mapLatLng, {\n            icon: leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.divIcon({\n                className: 'user hide',\n                iconSize: [30, 48],\n                iconAnchor: [15, 24],\n                html: `<div><img style=\"height: 48px; width: 30px;\" src=\"/images/pikachu.gif\"></div>`\n            })\n        });\n\n        if ('ondeviceorientationabsolute' in window) {\n\n            this.direction = leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.marker(mapLatLng, {\n                icon: leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.divIcon({\n                    className: 'direction hide',\n                    iconSize: [100, 100],\n                    iconAnchor: [50, 50],\n                    html: `<div><img style=\"height: 100px; width: 100px;\" src=\"/images/direction_64.png\"></div>`\n                })\n            });\n\n            this.map.addLayer(this.direction).addLayer(this.user);\n\n            let direction_img = document.querySelector('#map .direction img');\n            let user_img = document.querySelector('#map .user img');\n\n            // 監聽方位事件\n            window.addEventListener('deviceorientationabsolute', function (event) {\n                let alpha = event.alpha;\n\n                if (alpha !== null) {\n                    direction_img.style.Transform = `rotate(${-alpha}deg)`;\n                    direction_img.style.WebkitTransform = `rotate(${-alpha}deg)`;\n                    direction_img.style.MozTransform = `rotate(${-alpha}deg)`;\n\n                    user_img.style.Transform = `rotate(${-alpha + 180}deg)`;\n                    user_img.style.WebkitTransform = `rotate(${-alpha + 180}deg)`;\n                    user_img.style.MozTransform = `rotate(${-alpha + 180}deg)`;\n                } else {\n                    user_img.style.Transform = \"\";\n                    user_img.style.WebkitTransform = \"\";\n                    user_img.style.MozTransform = \"\";\n\n                    direction_img.style.display = \"none\";\n                }\n            }, true);\n        } else {\n            this.map.addLayer(this.user);\n        }\n\n        // 監聽GPS訊號\n        this.map.on('locationfound', e => {\n            this.user.setLatLng(e.latlng);\n            if (typeof this.direction !== \"undefined\") {\n                this.direction.setLatLng(e.latlng);\n            }\n            this.map.setView(e.latlng, this.map.getZoom());\n        }).on('moveend', Object(_data_js__WEBPACK_IMPORTED_MODULE_5__[\"setLocation\"])(this.map)).stopLocate();\n    }\n\n    // 加入控制項\n    addControl(position, icon, onclick) {\n        let control = leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.Control.extend({\n\n            options: {\n                position: position\n            },\n\n            onAdd: map => {\n                let control = leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.DomUtil.create('div', 'pointer leaflet-bar leaflet-control leaflet-control-custom');\n\n                control.style.backgroundColor = 'white';\n                control.style.backgroundImage = `url(${icon})`;\n                control.style.backgroundSize = \"30px 30px\";\n                control.style.width = '30px';\n                control.style.height = '30px';\n                control.style.cursor = 'pointer';\n                control.onclick = onclick(this);\n\n                return control;\n            }\n        });\n        this.map.addControl(new control());\n    }\n\n}\n\nlet map = new Map();\n\n// 加入定位控制\nmap.addControl('topleft', '/images/location_64.png', that => {\n    return e => {\n        e.target.classList.toggle(\"use\");\n        that.user._icon.classList.toggle(\"hide\");\n        that.direction._icon.classList.toggle(\"hide\");\n\n        if (typeof that.map._locateOptions === \"undefined\" || that.map._locateOptions.watch) {\n            that.map.locate({\n                watch: true,\n                maxZoom: that.map.getZoom(),\n                enableHighAccuracy: true\n            });\n        } else {\n            that.map.stopLocate();\n        }\n    };\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (map);\n\n//# sourceURL=webpack:///./src/map.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Task\", function() { return Task; });\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ \"./node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);\n\n\n__webpack_require__(\"./src/image/pm sync recursive \\\\.(jpg|png)$\");\n\nclass Task {\n    // 初始化\n    constructor(full_tasks) {\n        this.full_tasks = full_tasks;\n        this.tasks = [];\n        this.rewards = new Set();\n        this.rewards_icon = {};\n    }\n\n    cleanTask() {\n        this.tasks = this.full_tasks.map(task => {\n            let tem = task.split('：');\n            this.rewards.add(tem[1]);\n\n            return {\n                content: tem[0],\n                reward: tem[1],\n                type: tem[2]\n            };\n        });\n\n        this.rewards = Array.from(this.rewards);\n        return this;\n    }\n\n    setIcons() {\n\n        this.rewards_icon = this.rewards.reduce((a, b) => {\n            a[b] = leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.icon({\n                iconUrl: `./images/${b}_.png`,\n                iconSize: [48, 48],\n                iconAnchor: [24, 24],\n                popupAnchor: [0, -12]\n            });\n\n            return a;\n        }, {});\n\n        return this;\n    }\n}\n\n//# sourceURL=webpack:///./src/task.js?");

/***/ }),

/***/ "./src/urls.js":
/*!*********************!*\
  !*** ./src/urls.js ***!
  \*********************/
/*! exports provided: urls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"urls\", function() { return urls; });\nlet urls = {\n    imgHost: 'https://5upergeo.github.io/PMGO-tasks-map/img',\n    macros: 'https://script.google.com/macros/s/AKfycbyOkCaKC-q75jN8NPx4oxLvkcIyEJLDGZDKUuAZ_Rl9JufGr1Uf/exec',\n    reportTask: 'https://script.google.com/macros/s/AKfycbzMvd730XVRRCoEL13052qsOC81kwPKeWRWZJV9B60e59nXCDLZ/exec'\n};\n\n//# sourceURL=webpack:///./src/urls.js?");

/***/ })

/******/ });
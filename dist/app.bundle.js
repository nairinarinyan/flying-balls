webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(105);


/***/ },

/***/ 87:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(88)();
	// imports
	
	
	// module
	exports.push([module.id, "html {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\nbody {\n  margin: 0;\n}\narticle,\ndetails,\nsection,\nsummary,\naside,\nmain,\nmenu,\nnav,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup {\n  display: block;\n}\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n[hidden],\ntemplate {\n  display: none;\n}\na {\n  background-color: transparent;\n}\na:active,\na:hover {\n  outline: 0;\n}\nabbr[title] {\n  border-bottom: 1px dotted;\n}\ndfn {\n  font-style: italic;\n}\nmark {\n  background: #ff0;\n  color: #000;\n}\nb,\nstrong {\n  font-weight: bold;\n}\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\nimg {\n  border: 0;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\nfigure {\n  margin: 1em 40px;\n}\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0;\n}\npre {\n  overflow: auto;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  font: inherit;\n  margin: 0;\n}\nbutton {\n  overflow: visible;\n}\nbutton,\nselect {\n  text-transform: none;\n}\nbutton,\nhtml input[type='button'],\ninput[type='reset'],\ninput[type='submit'] {\n  cursor: pointer;\n  -webkit-appearance: button;\n}\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\ninput {\n  line-height: normal;\n}\ninput[type='checkbox'],\ninput[type='radio'] {\n  box-sizing: border-box;\n  padding: 0;\n}\ninput[type='number']::-webkit-inner-spin-button,\ninput[type='number']::-webkit-outer-spin-button {\n  height: auto;\n}\ninput[type='search'] {\n  -webkit-appearance: textfield;\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box;\n}\ninput[type='search']::-webkit-search-cancel-button,\ninput[type='search']::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\nlegend {\n  border: 0;\n  padding: 0;\n}\ntextarea {\n  overflow: auto;\n}\noptgroup {\n  font-weight: bold;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ntd,\nth {\n  padding: 0;\n}\ncanvas {\n  width: 100%;\n  height: 100%;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 88:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 103:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/nairi/proj/flying-balls/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/nairi/proj/flying-balls/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(32);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Color = function () {
		function Color() {
			_classCallCheck(this, Color);
		}
	
		_createClass(Color, null, [{
			key: 'colors',
			get: function get() {
				return ['#C47AC0', '#2F323Al', '#41393E', '#C7E8F3', '#EB5E28', '#4A5899', '#559CAD', '#7CAE7A', '#A72608', '#F0F2A6', '#1A1B25', '#CE0357', '#A507D7', '#61C9A8', '#ED9B40', '#0B3142'];
			}
		}]);
	
		return Color;
	}();
	
	var Scene = function () {
		function Scene() {
			_classCallCheck(this, Scene);
		}
	
		_createClass(Scene, null, [{
			key: 'WIDTH',
			get: function get() {
				return window.innerWidth;
			}
		}, {
			key: 'HEIGHT',
			get: function get() {
				return window.innerHeight;
			}
		}]);
	
		return Scene;
	}();
	
	var Vector2 = function () {
		function Vector2(x, y) {
			_classCallCheck(this, Vector2);
	
			this.x = x;
			this.y = y;
		}
	
		_createClass(Vector2, null, [{
			key: 'dot',
			value: function dot(vec, s) {
				return new Vector2(vec.x * s, vec.y * s);
			}
		}, {
			key: 'sum',
			value: function sum(vec1, vec2) {
				return new Vector2(vec1.x + vec2.x, vec1.y + vec2.y);
			}
		}, {
			key: 'distance',
			value: function distance(vec1, vec2) {
				return Math.sqrt(Math.pow(vec1.x - vec2.x, 2) + Math.pow(vec1.y - vec2.y, 2));
			}
		}]);
	
		return Vector2;
	}();
	
	var Utils = function () {
		function Utils() {
			_classCallCheck(this, Utils);
		}
	
		_createClass(Utils, null, [{
			key: 'computeDelta',
			value: function computeDelta() {
				var now = Date.now();
				Utils.delta = (now - (Utils._last || now - 16)) / 1000;
				Utils._last = now;
			}
		}, {
			key: 'random',
			value: function random(min, max, int) {
				var ret = Math.random() * (max - min) + min;
				return int ? Math.round(ret) : ret;
			}
		}, {
			key: 'detectCollisions',
			value: function detectCollisions(objects) {
				objects.forEach(function (obj) {
					if (obj.position.y >= Scene.HEIGHT - obj.radius) {
						obj.position.y = Scene.HEIGHT - obj.radius;
						obj.velocity.y = -obj.velocity.y / obj.weight;
						obj.velocity.x = obj.velocity.x / obj.weight;
					}
	
					if (obj.position.y <= obj.radius) {
						obj.position.y = obj.radius;
						obj.velocity.y = -obj.velocity.y / obj.weight;
					}
	
					if (obj.position.x >= Scene.WIDTH - obj.radius) {
						obj.position.x = Scene.WIDTH - obj.radius;
						obj.velocity.x = -obj.velocity.x / obj.weight;
					}
	
					if (obj.position.x <= obj.radius) {
						obj.position.x = obj.radius;
						obj.velocity.x = -obj.velocity.x / obj.weight;
					}
				});
			}
		}, {
			key: 'computeNextPositions',
			value: function computeNextPositions(objects) {
				objects.forEach(function (obj) {
					obj.velocity = Vector2.sum(obj.velocity, Vector2.dot(Utils.GRAVITY, Utils.delta));
					obj.position = Vector2.sum(obj.position, Vector2.dot(obj.velocity, Utils.delta));
				});
			}
		}, {
			key: 'squash',
			value: function squash(x, min, max, rangeMin, rangeMax) {
				return min + (x - rangeMin) * (max - min) / (rangeMax - rangeMin);
			}
		}, {
			key: 'GRAVITY',
			get: function get() {
				return new Vector2(0, 1900);
			}
		}]);
	
		return Utils;
	}();
	
	var Ball = function () {
		function Ball(positionX, positionY, radius, velocityX, velocityY, color) {
			var weight = arguments.length <= 6 || arguments[6] === undefined ? 1.5 : arguments[6];
	
			_classCallCheck(this, Ball);
	
			this.position = new Vector2(positionX, positionY);
			this.velocity = new Vector2(velocityX, velocityY);
			this.radius = radius;
			this.weight = weight;
			this.color = color;
		}
	
		_createClass(Ball, [{
			key: 'canvasArc',
			value: function canvasArc() {
				return [this.position.x, this.position.y, this.radius, 0, 2 * Math.PI];
			}
		}], [{
			key: 'drawBalls',
			value: function drawBalls(ctx, balls) {
				balls.forEach(function (ball) {
					ctx.beginPath();
					ctx.arc.apply(ctx, _toConsumableArray(ball.canvasArc()));
					ctx.fillStyle = ball.color;
					ctx.fill();
				});
			}
		}, {
			key: 'getRandomBalls',
			value: function getRandomBalls(count) {
				var balls = [];
				var minRadius = 10,
				    maxRadius = Scene.WIDTH < 700 ? 30 : 50;
	
				while (count) {
					var radius = Utils.random(minRadius, maxRadius, true);
					var positionX = Utils.random(radius, Scene.WIDTH);
					var positionY = Utils.random(radius, Scene.HEIGHT);
	
					var velocityX = Utils.random(-3000, 3000);
					var velocityY = Utils.random(-3000, 3000);
	
					var idx = Utils.random(0, Color.colors.length - 1, true);
					var color = Color.colors[idx];
	
					var weight = Utils.squash(radius, 1.2, 2, minRadius, maxRadius);
	
					balls.push(new Ball(positionX, positionY, radius, velocityX, velocityY, color, weight));
	
					count--;
				}
	
				return balls;
			}
		}]);
	
		return Ball;
	}();
	
	var Line = function () {
		function Line() {
			_classCallCheck(this, Line);
		}
	
		_createClass(Line, null, [{
			key: 'connectBalls',
			value: function connectBalls(ctx, lineColor, balls) {
				ctx.beginPath();
				ctx.strokeStyle = lineColor;
				ctx.moveTo(balls[0].position.x, balls[0].position.y);
	
				balls.slice(1).forEach(function (ball) {
					ctx.lineTo(ball.position.x, ball.position.y);
				});
	
				ctx.closePath();
				ctx.stroke();
			}
		}]);
	
		return Line;
	}();
	
	var Interaction = function () {
		function Interaction() {
			_classCallCheck(this, Interaction);
		}
	
		_createClass(Interaction, null, [{
			key: 'detectDraggingBall',
			value: function detectDraggingBall(mousePosition, balls) {
				this.draggingBall = balls.filter(function (b) {
					return Vector2.distance(mousePosition, b.position) < b.radius;
				}).slice(-1)[0];
			}
		}, {
			key: 'handleDragging',
			value: function handleDragging(mousePosition) {
				if (this.draggingBall) this.draggingBall.position = mousePosition;
			}
		}]);
	
		return Interaction;
	}();
	
	var Canvas = function (_Component) {
		_inherits(Canvas, _Component);
	
		function Canvas(props) {
			_classCallCheck(this, Canvas);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Canvas).call(this, props));
	
			_this.draw = _this.draw.bind(_this);
			return _this;
		}
	
		_createClass(Canvas, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				this.bindEvents();
				setTimeout(this.draw, 1000);
			}
		}, {
			key: 'componentWillUpdate',
			value: function componentWillUpdate() {
				setTimeout(this.draw, 1000);
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				window.cancelAnimationFrame(this.frameId);
			}
		}, {
			key: 'bindEvents',
			value: function bindEvents() {
				var _this2 = this;
	
				this.canvas.addEventListener('mousedown', function (e) {
					_this2.dragging = true;
					Interaction.detectDraggingBall(_this2.mousePosition, _this2.balls);
				});
				this.canvas.addEventListener('mousemove', function (e) {
					_this2.mousePosition = new Vector2(e.clientX, e.clientY);
				});
				this.canvas.addEventListener('mouseup', function (e) {
					_this2.dragging = false;
					Interaction.draggingBall = null;
				});
			}
		}, {
			key: 'draw',
			value: function draw() {
				Utils._last = 0;
				this.balls = Ball.getRandomBalls(Scene.WIDTH < 700 ? 30 : 50);
	
				render.call(this);
	
				function render() {
					Utils.computeDelta();
					Utils.computeNextPositions(this.balls);
	
					this.dragging && Interaction.handleDragging(this.mousePosition);
	
					this.frameId = window.requestAnimationFrame(render.bind(this));
					this.ctx.clearRect(0, 0, Scene.WIDTH, Scene.HEIGHT);
	
					Line.connectBalls(this.ctx, '#19647E', this.balls);
					Ball.drawBalls(this.ctx, this.balls);
					Utils.detectCollisions(this.balls);
				}
			}
		}, {
			key: 'render',
			value: function render() {
				var _this3 = this;
	
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement('canvas', {
						width: Scene.WIDTH,
						height: Scene.HEIGHT,
						ref: function ref(c) {
							_this3.canvas = c;
							if (!_this3.ctx) _this3.ctx = c.getContext('2d');
						} })
				);
			}
		}]);
	
		return Canvas;
	}(_react.Component);
	
	exports.default = Canvas;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/nairi/proj/flying-balls/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Canvas.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 104:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/nairi/proj/flying-balls/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/nairi/proj/flying-balls/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(32);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Canvas = __webpack_require__(103);
	
	var _Canvas2 = _interopRequireDefault(_Canvas);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Root = function (_Component) {
		_inherits(Root, _Component);
	
		function Root() {
			_classCallCheck(this, Root);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(Root).apply(this, arguments));
		}
	
		_createClass(Root, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_Canvas2.default, null)
				);
			}
		}]);
	
		return Root;
	}(_react.Component);
	
	exports.default = Root;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/nairi/proj/flying-balls/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Root.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 105:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/nairi/proj/flying-balls/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/nairi/proj/flying-balls/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _react = __webpack_require__(32);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(57);
	
	var _Root = __webpack_require__(104);
	
	var _Root2 = _interopRequireDefault(_Root);
	
	__webpack_require__(174);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _reactDom.render)(_react2.default.createElement(_Root2.default, null), document.getElementById('app'));
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/nairi/proj/flying-balls/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(87);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(173)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/stylus-loader/index.js!./styles.styl", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/stylus-loader/index.js!./styles.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }

});
//# sourceMappingURL=app.bundle.js.map
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _snake = require('./snake');

var _snake2 = _interopRequireDefault(_snake);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//const Snake = require('./snake');

var Game = function () {
  function Game() {
    _classCallCheck(this, Game);

    this.snake = new _snake2.default();
    this.food = [];
    //Create the canvas
    this.canvas = document.createElement('canvas');
    this.canvas.width = 100;
    this.canvas.height = 100;
    document.body.appendChild(canvas);
    this.ctx = canvas.getContext('2d');
  }

  _createClass(Game, [{
    key: 'update',
    value: function update() {
      this.snake.update();
    }
  }, {
    key: 'render',
    value: function render() {
      this.snake.render(ctx);
    }
  }]);

  return Game;
}();

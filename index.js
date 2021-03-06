'use strict';

var clamp       = require('clamp');
var assign      = require('object-assign');
var randomFloat = require('random-floating');

var MAX = 0;
var MIN = -10994;

module.exports = function (options) {

  options = assign({
    fixed: 5,
    min: MIN,
    max: MAX
  }, options);

  options.min = clamp(options.min, MIN, MAX);
  options.max = clamp(options.max, MIN, MAX);

  options.inspected = true;

  return randomFloat(options);
};


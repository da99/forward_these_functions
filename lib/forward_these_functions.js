// Generated by CoffeeScript 1.3.3
(function() {
  "use strict";

  var Forward_These_Functions,
    __slice = [].slice;

  Forward_These_Functions = function() {
    var args, name, target, target_meth_name, _i, _len, _results;
    target = arguments[0], target_meth_name = arguments[1], args = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
    _results = [];
    for (_i = 0, _len = args.length; _i < _len; _i++) {
      name = args[_i];
      _results.push(target[name] = new Function("var target = this[\"" + target_meth_name + "\"]();\nreturn target[\"" + name + "\"].apply( target, arguments );"));
    }
    return _results;
  };

  module.exports = Forward_These_Functions;

}).call(this);
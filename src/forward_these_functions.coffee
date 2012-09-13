"use strict"

Forward_These_Functions = ( target, target_meth_name, args... ) ->
  for name in args
    target[name] = new Function """
      var target = this["#{target_meth_name}"]();
      return target["#{name}"].apply( target, arguments );
    """


module.exports = Forward_These_Functions

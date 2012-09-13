

forward\_these\_functions
========================

A delegator for specific functions. This is so specific 
to my needs, you won't be able to use it.

Usage
====

In coffeescript:

    funcy_forward = require "forward_these_functions"

    class List_Position:

      funcy_forward @prototype, "target", "pop", "push"

      constructor: ( list ) ->
        @list = list
        
      target: () ->
        @list
        

    o = new List_Position []
    o.push "a"
    o.pop() # -> a



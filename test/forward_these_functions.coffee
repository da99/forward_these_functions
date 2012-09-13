
assert = require 'assert'
f      = require 'forward_these_functions'

describe "forward_these_functions", () ->

  it "adds functions to target" , () ->

    class My_Car

      f( @prototype, "car", "pop", "push" )

      constructor: (list) ->
        @_car_ = list

      car: () ->
        @_car_

    car = new My_Car( [1,2,3] )
    assert.equal car.pop(), 3
    car.push 4
    assert.equal car.car()[2], 4

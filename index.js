function countdown(callback) {
  return window.setTimeout(function(){callback()}, 2000);
}

function createMultiplier(multiplier) {
  return function(value) {
    return value * multiplier
  }
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function multiplier(x, y) {
  return x * y
}

var five = 5

var doublerWithBind = multiplier.bind(five, 2)
var triplerWithBind = multiplier.bind(five, 3)

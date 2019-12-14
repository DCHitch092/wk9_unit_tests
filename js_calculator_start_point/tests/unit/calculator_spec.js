var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('should be able to add numbers together', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    result = calculator.runningTotal;
    assert.strictEqual(5, result)
  }),

  it('should be able to subtract a number from another', function() {
    calculator.previousTotal = 7;
    calculator.subtract(4);
    result = calculator.runningTotal;
    assert.strictEqual(3, result)
  }),

  it('should be able to multiple a number by another', function() {
    calculator.previousTotal = 3;
    calculator.multiply(5);
    result = calculator.runningTotal;
    assert.strictEqual(15, result);
  }),

  it('should be able to divide a number by another', function() {
    calculator.previousTotal = 21;
    calculator.divide(7);
    result = calculator.runningTotal;
    assert.strictEqual(3, result);
  }),

  it('should be able to concatenate multiple number button clicks', function() {
    calculator.numberClick(1);
    calculator.numberClick(1);
    result = calculator.runningTotal;
    assert.strictEqual(11, result);
  }),

  it('it should be able to chain multiple operations together', function() {
    calculator.numberClick(4);
    calculator.operatorClick('*');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    result = calculator.runningTotal;
    assert.strictEqual(16, result);
  }),

  it('is should clear the running total without affecting the calculation', function() {
    calculator.previousTotal = 100;
    calculator.clearClick;
    calculator.add(1);
    result = calculator.runningTotal;
    assert.strictEqual(101, result)
  })
});

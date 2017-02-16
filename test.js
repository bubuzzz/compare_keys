var assert = require('assert');
var compareKeys = require('./');

// sample 1
var a1 = {
  "test1": {
    "test2": 2
  },
  "test3": 4
};


var b1 = {
  "test3": 4,
  "test1": {
    "test2": 3
  },
};

// sample 2
var a2 = {
  "test1": {
    "test2": 2,
    "test3": null,
  },
  "test3": 4
}

var b2 = {
  "test1": {
    "test2": 2,
    "test3": 4,
  },
  "test3": 4
}

// example 3
var a3 = {
  "test1": {
    "test2": 2,
    "test3": null,
  },
  "test3": 4
}

var b3 = {
  "test1": {
    "test2": 2,
    "test4": 4,
  },
  "test3": 4
}

it('should compare keys', function() {
  assert.equal(compareKeys(a1, b1), true, 'it should have returned true because keys are the same');
  assert.equal(compareKeys(a2, b2), true, 'it should have returned true because keys are the same');
  assert.equal(compareKeys(a3, b3), false, 'it should have returned false because keys are not the same');
});

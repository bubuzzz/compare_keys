Compare keys (only) inside an object

** Installation
npm install --save compare_keys

** Usage

// ES5
var compareKeys = require('compare_keys');

// import compareKeys from 'compare_keys';
compareKeys( { test: 1}, { test: 2}) // return true
compareKeys( { test: 1}, { test1: 2}) // return false
compareKeys( { test: 1, test2: 3}, { test: 2}) // return false
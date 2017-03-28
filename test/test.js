'use strict';

/*
Setup testing environment
=========================
*/
//Testing modules
var test = require('tidytest');

//Module to test
var path = require('../index.js');

/*
Tests
=====
*/
test('to("array")', function(assert){
    assert.plan(10);
	
	assert.deepEqual(val().to('array'), []);
	assert.deepEqual(val(1).to('array'), [1]);
	assert.deepEqual(val(0).to('array'), [0]);
	assert.deepEqual(val('helloworld').to('array'), ['helloworld']);
	assert.deepEqual(val('').to('array'), ['']);
	assert.deepEqual(val({}).to('array'), [{}]);
	assert.deepEqual(val(null).to('array'), [null]);
	assert.deepEqual(val(true).to('array'), [true]);
	assert.deepEqual(val(false).to('array'), [false]);
	assert.deepEqual(val([1,2,3]).to('array'), [1,2,3]);
	assert.deepEqual(val([]).to('array'), []);
});

test('to("object")', function(assert){
	assert.plan(10);
	
	assert.deepEqual(val().to('object'), {});
	assert.throws(val(1).to('object'));
	assert.throws(val(0).to('object'));
	assert.throws(val('helloworld').to('object'));
	assert.throws(val('').to('object'));
	assert.deepEqual(val({}).to('object'), {});
	assert.throws(val(null).to('object'));
	assert.throws(val(true).to('object')});
	assert.throws(val(false).to('object'));
	assert.throws(val([1,2,3]).to('object'));
	assert.throws(val([]).to('object'));
});
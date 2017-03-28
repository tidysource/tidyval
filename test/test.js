'use strict';

/*
Setup testing environment
=========================
*/
//Testing modules
var test = require('tidytest');

//Module to test
var val = require('../index.js');

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

test('validate()', function(assert){
	assert.plan(22);
	
	assert.throws(val(1).validate('boolean'));
	assert.doesNotThrow(val(1).validate('boolean'));
	
	assert.throws(val('hello').validate('number'));
	assert.doesNotThrow(val(0).validate('number'));
	
	assert.throws(val(1).validate('string'));
	assert.doesNotThrow(val('hello').validate('string'));
	
	assert.throws(val(0).validate('array'));
	assert.doesNotThrow(val([]).validate('array'));
	
	assert.throws(val().validate('object'));
	assert.doesNotThrow(val(1).validate('object'));
	
	assert.throws(val(1).validate('function'));
	assert.doesNotThrow(val(1).validate('function'));
	
	assert.throws(val(1).validate('regex'));
	assert.doesNotThrow(val(/foo/).validate('regex'));
	
	assert.throws(val(1).validate('null'));
	assert.doesNotThrow(val(/foo/).validate('null'));
	
	assert.throws(val(0).validate('NaN'));
	assert.doesNotThrow(val(NaN).validate('NaN'));
	
	assert.throws(val(0).validate('undefined'));
	assert.doesNotThrow(val(NaN).validate('undefined'));
	
	assert.throws(val(1).validate(['string','undefined']));
	assert.doesNotThrow(val().validate(['string','undefined']));
});
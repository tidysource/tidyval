'use strict';

const tidytype = require('tidytype');

let to = function to(param){
	if (param === 'array'){
		if (typeof this.input === 'undefined'){
			return [];
		}
		else if(tidytype(this.input) === 'array'){
			return this.input;
		}
		else{
			return [this.input];
		}
	}
	else if (param === 'object'){
		if (typeof this.input === 'undefined'){
			return {};
		}
		else if (tidytype(this.input) === 'object'){
			return this.input;
		}
		else{
			throw new Error('\n\r' +
							'Expected: object\n\r' +
							'Actual: ' + tidytype(this.input));
		}
	}
};

let validate = function validate(param){
	let valType = tidytype(this.input);
	if (param.indexOf(valType) === -1){
		throw new Error('Expected: ' + param.toString() + '\n\r' +
						'Actual: ' + tidytype(this.input));
	}

	return this;
};

let invalidate = function invalidate(param){
	let thrown = false;
	try{
		this.validate(param);
	}
	catch(e){
		thrown = true;
	}
	finally{
		if (!thrown){
			throw new Error('Did not expect: ' + param.toString() + '\n\r' +
							'Actual: ' + tidytype(this.input));
		}

		return this;
	}
};

module.exports = function val(input){
	return {
		input : input,
		to : to,
		validate : validate,
		invalidate : invalidate
	}
};

var CNPJ = {};

CNPJ.validate = function(c) {
	var b1 = [5,4,3,2,9,8,7,6,5,4,3,2];
	var b2 = [6,5,4,3,2,9,8,7,6,5,4,3,2];

	c = (c || '').toUpperCase().replace(/[^0-9A-Z]/g,'');

	var repeated = /^([0-9A-Z])\1{13}$/;
	if (!c || !/^[0-9A-Z]{12}[0-9]{2}$/.test(c) || repeated.test(c)) {
		return false;
	}
	c = c.split('');

	var value = function(ch) {
		return ch.charCodeAt(0) - 48;
	};

	for (var i = 0, n = 0; i < 12; i++) {
		n += value(c[i]) * b1[i];
	}
	n = 11 - n%11;
	n = n >= 10 ? 0 : n;
	if (parseInt(c[12], 10) !== n)  {
		return false;
	}

	for (i = 0, n = 0; i <= 12; i++) {
		n += value(c[i]) * b2[i];
	}
	n = 11 - n%11;
	n = n >= 10 ? 0 : n;
	if (parseInt(c[13], 10) !== n)  {
		return false;
	}
	return true;
};

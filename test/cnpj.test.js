var should = require('should'),
	BrV = require('../releases/br-validations');

describe('br-validations', function(){
	describe('CNPJ ', function() {
		it('should validate 10.157.471/0001-61', function(done) {
			should(BrV.cnpj.validate('10.157.471/0001-61')).be.true;
			done();
		});
		it('should validate 54.506.158/0001-67', function(done) {
			should(BrV.cnpj.validate('54.506.158/0001-67')).be.true;
			done();
		});
		it('should validate 79.121.383/0001-06', function(done) {
			should(BrV.cnpj.validate('79.121.383/0001-06')).be.true;
			done();
		});
		it('should not validate 12.871.891/0001-34', function(done) {
			should(BrV.cnpj.validate('12.871.891/0001-34')).be.false;
			done();
		});
		it('should not validate 01.781.192/0001-20', function(done) {
			should(BrV.cnpj.validate('01.781.192/0001-20')).be.false;
			done();
		});
		it('should validate alphanumeric 7S.XPD.GXY/0001-36', function(done) {
			should(BrV.cnpj.validate('7S.XPD.GXY/0001-36')).be.true;
			done();
		});
		it('should validate alphanumeric TS.3M2.ACA/0001-38', function(done) {
			should(BrV.cnpj.validate('TS.3M2.ACA/0001-38')).be.true;
			done();
		});
		it('should not validate alphanumeric with wrong check digit', function(done) {
			should(BrV.cnpj.validate('7S.XPD.GXY/0001-37')).be.false;
			done();
		});
		it('should not validate letters in the check digit positions', function(done) {
			should(BrV.cnpj.validate('7S.XPD.GXY/0001-3A')).be.false;
			done();
		});
		it('should not validate equal numbers sequence', function(done) {
			var template = '##.###.###/####-##';
			for (var i = 0; i < 10; i++) {
				var cnpj = template.replace(/#/g,i);
				should(BrV.cnpj.validate(cnpj)).be.false;
			}
			done();
		});
	});
});

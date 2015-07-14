(function(){

	QUnit.module( "Number Pyramid" );
	QUnit.test( "Test cases  Number Pyramid", function( assert ) {

		assert.equal(true,Katas.pattern && typeof Katas.pattern === "function","pattern exist");

		assert.equal(Katas.pattern(7),"      1      \n     121     \n    12321    \n   1234321   \n  123454321  \n 12345654321 \n1234567654321");
		assert.equal(Katas.pattern(1),"1");
		assert.equal(Katas.pattern(4),"   1   \n  121  \n 12321 \n1234321");
		assert.equal(Katas.pattern(0),"");
		assert.equal(Katas.pattern(-25),"");

	});


}());
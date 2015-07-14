(function(){

	var quotes = ["WHERE IS SHE?!", "Holy haberdashery, Batman!", "Let's put a smile on that faaaceee!"];

	QUnit.module( "BATMAN QUOTES" );
	QUnit.test( "Test cases batman quotes", function( assert ) {

		assert.equal(true,Katas.getQuote && typeof Katas.getQuote === "function","getQuote exist");

		assert.equal(Katas.getQuote(quotes, "Rob1n"), "Robin: Holy haberdashery, Batman!", "Robin found");
		assert.equal(Katas.getQuote(quotes, "Joke2"), "Joker: Let's put a smile on that faaaceee!", "Joker found");
		assert.equal(Katas.getQuote(quotes, "Batm0n"), "Batman: WHERE IS SHE?!", "Batman found");
	});

}());
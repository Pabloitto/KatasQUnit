(function(){

	Katas.getQuote = function(quotes, hero) {
	    var heroes = ["B a t m a n", "R o b i n", "J o k e r"],
	        heroFound = null;

	    for (var i = 0; i < heroes.length; i++) {
	        var matches = heroes[i].match(new RegExp("[" + hero + "]+", "g"));
	        
	        if (!matches) {
	            continue;
	        }

	        if (matches.length >= 3) {
	            heroFound = heroes[i].replace(/ /g, '');
	            break;
	        }
	    }

	    if (heroFound && typeof heroFound === "string") {
	        return heroFound + ": " + quotes[hero.match(/[0-9]/g)[0]];
	    }
	    
	}

}());
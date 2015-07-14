(function(){

	function pattern(n) {
	    var output = [],
	        i = 1,
	        formatObject,
	        numbers = [];

	    if (n <= 0) {
	        return "";
	    }

	    if (n === 1) {
	        return "1";
	    }

	    for (; i <= n; i++) {
	    	
	        if (i === 10) {
	            n = n - i;
	            i = 0;
	        }

	        formatObject = getFormatObject(i,n);
	        output.push(formatObject.tab);
	        output.push(numbers.join(''));
	        output.push(i);
	        output.push(numbers.reverse().join(''));
	        output.push(formatObject.tab);
	        output.push(formatObject.nextLine);
	        numbers.reverse();
	        numbers.push(i);
	    }

	    return output.join('');
	}

	function getFormatObject(index,length){
		var formatObjectHelper = {
			tab : getDecrementalTabs(length - index - 1),
			nextLine : "\n"
		};

		if (index === length) {
	    	formatObjectHelper.tab = "";
	        formatObjectHelper.nextLine = "";
	    }

	    return formatObjectHelper;
	}

	function getDecrementalTabs(n) {
	    var spaces = [" "];
	    for (var i = 0; i < n; i++) {
	        spaces.push(" ");
	    };
	    return spaces.join('');
	}

	Katas.pattern = pattern;


}());
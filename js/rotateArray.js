(function(){

	Katas.rotate = function(array, n) {
		    var position = n,
		        elements;

		    array = array.slice();

		    if (n === 0) {
		        return array;
		    }

		    if (position < 0) {
		        position = position * -1;
		    }

		    while (position > array.length) {
		        position = position - array.length;
		    }

		    if (n > 0) {
		        array.reverse();
		        elements = array.splice(position, array.length);
		        elements.reverse();
		        array.reverse();
		        elements = array.concat(elements);
		    } else {
		        elements = array.splice(position, array.length);
		        elements = elements.concat(array);
		    }

		    return elements;
		}

}());
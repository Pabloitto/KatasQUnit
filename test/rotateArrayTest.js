(function(){

	/*
		Create a function named "rotate" that takes an array and returns a new one with the elements inside rotated n spaces.

		If n is greater than 0 it should rotate the array to the right. 

		If n is less than 0 it should rotate the array to the left. If n is 0, then it should return the array unchanged.
	*/
	QUnit.module( "ARRAYS" );
	QUnit.test( "Test cases rotate array", function( assert ) {

		assert.equal(true,Katas.rotate && typeof Katas.rotate === "function","rotate exist");

		var data = [1, 2, 3, 4, 5];

		var rotate = Katas.rotate;

		assert.deepEqual(rotate(data, 1)  , [5, 1, 2, 3, 4])
		assert.deepEqual(rotate(data, 2)  , [4, 5, 1, 2, 3])
		assert.deepEqual(rotate(data, 3)  , [3, 4, 5, 1, 2])
		assert.deepEqual(rotate(data, 4)  , [2, 3, 4, 5, 1])
		assert.deepEqual(rotate(data, 5)  , [1, 2, 3, 4, 5])

		assert.deepEqual(rotate(data, 0)  , [1, 2, 3, 4, 5])

		assert.deepEqual(rotate(data, -1) , [2, 3, 4, 5, 1])
		assert.deepEqual(rotate(data, -2) , [3, 4, 5, 1, 2])
		assert.deepEqual(rotate(data, -3) , [4, 5, 1, 2, 3])
		assert.deepEqual(rotate(data, -4) , [5, 1, 2, 3, 4])
		assert.deepEqual(rotate(data, -5) , [1, 2, 3, 4, 5])

		assert.deepEqual(rotate(['a', 'b', 'c'], 1), ['c', 'a', 'b'])
		assert.deepEqual(rotate([1.0, 2.0, 3.0], 1), [3.0, 1.0, 2.0])
		assert.deepEqual(rotate([true, true, false], 1), [false, true, true])

		var data = [1, 2, 3, 4, 5]

		assert.deepEqual(rotate(data, 7), [4, 5, 1, 2, 3]);
		assert.deepEqual(rotate(data, 11), [5, 1, 2, 3, 4]);
		assert.deepEqual(rotate(data, 12478), [3, 4, 5, 1, 2]);

	});


}());
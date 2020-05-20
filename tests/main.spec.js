describe('Main', function() {
	describe('Method A', function() {
		context('Case A', function() {
			let arr;
			// roda UMA VEZ antes do bloco
			before(function() {});
			// roda UMA VEZ depois do bloco
			after(function() {});
			// roda todas as vezes, antes de CADA bloco
			beforeEach(function() {
				arr = [ 1, 2, 3 ];
			});
			// roda todas as vezes, depois de CADA bloco
			afterEach(function() {});

			it('should have a size of 4 when push another value to the array', function() {
				arr.push(4);
				console.log(arr.length);
			});

			it('should have a size of 2 when pop a value from the array', function() {
				arr.pop();
				console.log(arr.length);
			});

			it('should remove 3 when use pop in the array', function() {
				console.log(arr.pop() === 3);
			});
		});
	});
});

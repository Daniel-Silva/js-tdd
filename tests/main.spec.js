describe('Main', function() {
	describe('Method A', function() {
		context('Case A', function() {
			it('sthe sum of two integer values should happen', function() {
				// espera que aconteça
				// entra de dados / método sum(2,2)
				// espera retornar (4) => true
				// ou (3) => broken test
				throw new Error('just on error');
			});
		});

		context('Case B', function() {
			it('should happen blablablah', function() {
				// espera que aconteça
				// entra de dados / método sum(2,2)
				// espera retornar (4) => true
				// ou (3) => broken test
				throw new Error('just on error');
			});

			it('should happen mimimi', function() {
				// espera que aconteça
				// entra de dados / método sum(2,2)
				// espera retornar (4) => true
				// ou (3) => broken test
			});
		});
	});
});

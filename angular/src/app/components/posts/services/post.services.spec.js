describe('service post', function() {
	beforeEach(module('posts.services', 'restangular'));

	it('returns object with methods', inject(function(Posts) {
		expect(Posts).toEqual(jasmine.any(Object));
		expect(Posts.all).toBeDefined()
		expect(Posts.post).toBeDefined()
	}));
});

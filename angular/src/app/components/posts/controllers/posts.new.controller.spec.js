describe('controller posts new', function() {
	beforeEach(module('posts.controllers.new', 'posts.services', 'ui.router'));

	var post, win, controller, scope;

	beforeEach(inject(function($controller, $rootScope, $window) {
		scope = $rootScope.$new();
		controller = $controller('PostsNewController', {$scope: scope});
		win = $window;
		post = {
			title: 'Some title',
			description: 'Some description'
		};
	}));

	describe('addPost', function() {
		describe('resolve', function() {
			describe('success', function() {
				beforeEach(inject(function(Posts, $q) {
					spyOn(Posts, 'post').and.callFake(function() {
						var deferred = $q.defer();
						deferred.resolve({success: true});
						return deferred.promise
					});
				}));

				it('redirects to home', inject(function($state) {
					spyOn($state, 'go');
					controller.addPost(post);
					scope.$digest();
					expect($state.go).toHaveBeenCalledWith('home');
				}));
			});

			describe('fail', function() {
				beforeEach(inject(function(Posts, $q) {
					spyOn(Posts, 'post').and.callFake(function() {
						var deferred = $q.defer();
						deferred.resolve({success: false});
						return deferred.promise
					});
				}));

				it('shows alert', function() {
					spyOn(win, 'alert');
					controller.addPost(post);
					scope.$digest();
					expect(win.alert).toHaveBeenCalled();
				});
			});
		});

		describe('reject', function() {
			beforeEach(inject(function(Posts, $q) {
				spyOn(Posts, 'post').and.callFake(function() {
					var deferred = $q.defer();
					deferred.reject();
					return deferred.promise
				});
			}));

			it('shows alert', function() {
				spyOn(win, 'alert');
				controller.addPost(post);
				scope.$digest();
				expect(win.alert).toHaveBeenCalled();
			});
		});
	});
});
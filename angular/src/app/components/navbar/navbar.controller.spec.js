describe('controller navbar', function() {
	beforeEach(module('navbar.controller', 'ng-token-auth'));

	var controller, scope, win;

	beforeEach(inject(function($controller, $rootScope, $window) {
		scope = $rootScope.$new();
		controller = $controller('NavbarController', {$scope: scope});
		win = $window;
	}));

	describe('login', function() {
		beforeEach(inject(function($auth, $q) {
			spyOn($auth, 'submitLogin').and.callFake(function() {
				var deferred = $q.defer();
				deferred.reject({errors: ['some error']});
				return deferred.promise
			});
		}));

		it('does something', function() {
			spyOn(win, 'alert');
			var user = {email: 'abc@abc.com', password: '12345678'};
			controller.login(user);
			scope.$digest();
			expect(win.alert).toHaveBeenCalled();
		});
	});

	describe('signout', function() {
		describe('success', function() {
			beforeEach(inject(function($auth, $q) {
				spyOn($auth, 'signOut').and.callFake(function() {
					var deferred = $q.defer();
					deferred.resolve();
					return deferred.promise
				});
			}));

			it('reloads page', function() {
				spyOn(win.location, 'reload');
				controller.signout();
				scope.$digest();
				expect(win.location.reload).toHaveBeenCalled();
			});
		});

		describe('fail', function() {
			beforeEach(inject(function($auth, $q) {
				spyOn($auth, 'signOut').and.callFake(function() {
					var deferred = $q.defer();
					deferred.reject({errors: ['some error']});
					return deferred.promise
				});
			}));

			it('reloads page', function() {
				spyOn(win, 'alert');
				controller.signout();
				scope.$digest();
				expect(win.alert).toHaveBeenCalled();
			});
		});
		
	});
});

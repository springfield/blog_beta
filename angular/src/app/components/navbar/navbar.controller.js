angular.module('navbar.controller', [])
	.controller('NavbarController', function($auth, $window) {
		var vm = this;
		vm.user = $auth.user

		vm.login = function(user) {
			$auth.submitLogin(user)
				.catch(function(resp){
					alert(resp.errors[0]);
				});
		};

		vm.signout = function() {
			$auth.signOut()
        .then(function() {
					// fix for changing csrf token
          $window.location.reload();
        })
        .catch(function(resp) {
          alert(resp.errors[0]);
        });
		};
	});

angular.module('posts.services', ['restangular'])
	.factory('Posts', function(Restangular){
		var service = Restangular.withConfig(function (Configurer) {
			Configurer.setBaseUrl('/api');
		});

		return {
			all: function() {
				return service.all('posts').getList();
			},
			post: function(post) {
				return service.all('posts').post(post);
			}
		};
	});
angular.module('posts.controllers.new', [])
	.controller('PostsNewController', function($state, Posts) {
		var vm = this;

		vm.addPost = function(post) {
			Posts.post(post)
				.then(function(resp) {
					if(resp.success) {
						$state.go('home');
					}
					else {
						alert('There was an error!');
					}
				})
				.catch(function() {
					alert('There was an error!');
				});
		};
	});
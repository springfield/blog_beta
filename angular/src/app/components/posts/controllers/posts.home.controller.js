angular.module('posts.controllers.home', [])
  .controller('PostsHomeController', function(posts, $auth) {
    var vm = this;
    
    vm.posts = posts;
    vm.user = $auth.user
  });
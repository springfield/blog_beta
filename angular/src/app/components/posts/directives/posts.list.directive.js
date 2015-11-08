angular.module('posts.directives.list', [])
  .directive('postsList', function() {
    return {
      scope: {
        posts: '='
      },
      restrict: 'E',
      templateUrl: 'app/components/posts/views/posts.list.html',
      controller: 'PostsListController',
      controllerAs: 'ctrl',
      bindToController: true
    };
  });
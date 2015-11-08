angular.module('posts.routes', [
  'ui.router',
  'ng-token-auth'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/components/posts/views/posts.home.html',
        controller: 'PostsHomeController',
        controllerAs: 'ctrl',
        resolve: {
          posts: function(Posts) {
            return Posts.all()
          }
        }
      })
      .state('posts', {
        url: '/posts',
        template: '<ui-view/>',
        resolve: {
          auth: function($auth) {
            return $auth.validateUser();
          }
        }
      })
      .state('posts.new', {
        url: '/new',
        templateUrl: 'app/components/posts/views/posts.new.html',
        controller: 'PostsNewController',
        controllerAs: 'ctrl'
      })
      ;

      $urlRouterProvider.otherwise('/');
  });
angular.module('navbar.directive', [])
  .directive('navbar', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {},
      controller: 'NavbarController',
      controllerAs: 'ctrl',
      bindToController: true
    };
  });

describe('directive navbar', function() {
  var vm;
  var el;

  beforeEach(module('navbar', 'my.templates', 'ng-token-auth'));

  beforeEach(inject(function($compile, $rootScope) {

    el = angular.element('<navbar></navbar>');

    $compile(el)($rootScope.$new());
    $rootScope.$digest();
    vm = el.isolateScope().ctrl;
  }));

  it('should be compiled', function() {
    expect(el.html()).not.toEqual(null);
  });

  it('should have isolate scope object with instanciate members', function() {
    expect(vm).toEqual(jasmine.any(Object));
    expect(vm.user).toEqual(jasmine.any(Object));
  });

});

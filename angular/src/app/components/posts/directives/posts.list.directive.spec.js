describe('directive posts-list', function() {
  var vm;
  var el;

  beforeEach(module('posts.directives.list', 'posts.controllers.list', 'my.templates'));

  beforeEach(inject(function($compile, $rootScope) {

    el = angular.element('<posts-list posts="[{title: \'Some title\', description: \'Some description\', author: \'author\'}]"></posts-list>');

    $compile(el)($rootScope.$new());
    $rootScope.$digest();
    vm = el.isolateScope().ctrl;
  }));

  it('should be compiled', function() {
    expect(el.html()).not.toEqual(null);
  });

  it('should have isolate scope object with instanciate members', function() {
    expect(vm).toEqual(jasmine.any(Object));

    expect(vm.posts).toEqual(jasmine.any(Array));
    expect(vm.posts[0]).toEqual(jasmine.any(Object));
    expect(vm.posts[0].title).toEqual('Some title');
  });

});

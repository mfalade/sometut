{
  angular
    .module('Shopify', ['ngResource'])
    .controller('shopifyCtrl', shopifyCtrl);

  function shopifyCtrl($resource) {
    var vm = this;
    vm.jobs = $resource('api/jobs').query();
  }


  shopifyCtrl.$inject = ['$resource'];
}

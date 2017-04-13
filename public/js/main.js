{
  angular
    .module('Shopify', ['ngResource'])
    .controller('shopifyCtrl', shopifyCtrl);

  function shopifyCtrl($resource, jobs) {
    var vm = this;
    vm.jobs = $resource('api/jobs').query();

    vm.postJob = () => {
      let newJob = {
        title: vm.jobTitle,
        description: vm.jobDescription
      }
      vm.jobs.push(newJob);
      jobs.save(newJob);
      vm.jobTitle = '';
      vm.jobDescription = '';
    }
  }

  shopifyCtrl.$inject = ['$resource', 'jobs'];
}

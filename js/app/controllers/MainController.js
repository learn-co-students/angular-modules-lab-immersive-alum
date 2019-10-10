function MainController($scope) {
  $scope.name = "Rebecca";
}

angular
  .module('app')
  .controller('MainController', MainController);
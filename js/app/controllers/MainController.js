function MainController($scope) {
  $scope.name = 'Alla'
}

angular
  .module('app')
  .controller('MainController', MainController)
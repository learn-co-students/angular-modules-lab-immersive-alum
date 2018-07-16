function MainController($scope){
  $scope.name = 'Shirley'
}

angular
  .module('app')
  .controller('MainController', MainController)

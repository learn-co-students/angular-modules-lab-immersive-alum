function MainController($scope) {
  $scope.name = 'Jon!'
}

angular
	.module('app')
	.controller('MainController', MainController);

function MainController($scope) {
	$scope.name = 'Manu';
}

angular
	.module('app')
	.controller('MainController', MainController);
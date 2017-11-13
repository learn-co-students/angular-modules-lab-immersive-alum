function MainController($scope) {
    $scope.name = 'World';
    console.log($scope.name);
}

angular
    .module('app')
    .controller('MainController', MainController);
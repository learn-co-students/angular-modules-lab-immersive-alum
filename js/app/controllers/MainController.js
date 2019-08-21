function MainController($scope) {
    $scope.name = "SOMETHING GOES HERE"
}

angular
    .module('app')
    .controller('MainController', MainController)
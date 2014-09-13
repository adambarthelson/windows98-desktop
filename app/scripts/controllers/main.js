(function(){
    var app = angular.module('MainCtrl', ['Windows.directives']);

    app.controller('MainController', function ($scope) {

        $scope.startOpened = false;

        $scope.toggleStart = function(){
            $scope.startOpened = !$scope.startOpened;
        };

    });
})();
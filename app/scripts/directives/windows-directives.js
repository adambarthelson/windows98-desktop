(function(){
    var app = angular.module('Windows.directives', []);

    app.directive('exe', function(){
        return {
            restrict: 'EA',
            templateUrl: 'views/exe.html',
            scope: {
                fileIcon: '=',
                title: '='
            }
        }
    });

    app.directive('fileIcon', function () {
        return function (scope, element, attrs) {
            element.css({
                'background-image': 'url(images/' + attrs.fileIcon + ')',
                'background-size': 'cover',
                'background-repeat': 'no-repeat',
                'background-position': 'center center'
            });
        };
    });

})();
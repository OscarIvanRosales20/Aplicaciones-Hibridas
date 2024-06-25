(function(){
    let app = angular.module('Cancion', [])

    .directive('titulo', function(){
        return {
            restrict: 'A',
            templateUrl: './Templates/titulo.html'
        }
    })

    .directive('anio', function(){
        return {
            restrict: 'A',
            templateUrl: './Templates/anio.html'
        }
    })

    .directive('autor', function(){
        return {
            restrict: 'A',
            templateUrl: './Templates/autor.html'
        }
    })
})();
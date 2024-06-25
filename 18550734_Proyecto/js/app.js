(function(){
    let app = angular.module('proyecto', ['Cancion'])

    app.controller('canController', ['$http', function($http){
        let Can = this
        Can.Albums = []

        $http({
            method: 'GET',
            url: './Albums.json'
        }).then(function successCallback(response){
            console.log(response.data)
            Can.Albums = response.data
        }, 
        function errorCallback(response){
            console.log(response)
        })
    }])
})()
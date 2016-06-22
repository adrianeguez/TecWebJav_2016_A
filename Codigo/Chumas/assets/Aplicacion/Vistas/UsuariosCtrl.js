aplicacion.controller("UsuariosCtrl", function ($scope, $http) {

    $http({
        method: "GET"
        , url: "http://localhost:1337/Usuarios"
        , isArray: true
    }).then(
        function (respuesta) {
            
            $scope.usuarios = respuesta.data;
            
            console.log(respuesta);
        }
        , function (error) {
            console.log(error);
        });


    //    $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
    //        then(function(response) {
    //          $scope.status = response.status;
    //          $scope.data = response.data;
    //        }, function(response) {
    //          $scope.data = response.data || "Request failed";
    //          $scope.status = response.status;
    //      });
    //    


});




aplicacion.controller("ChumasCtrl",function($scope,$stateParams,$http){
    
    $scope.cargarChumasDeUsuario = function(){
        
        $http({
            method: "GET"
            , url: "http://localhost:1337/Usuarios/"+$stateParams.idUsuario
        }).then(
            function (respuesta) {

                $scope.usuario = respuesta.data;
                $scope.chumas = respuesta.data.chumas;
            }
            , function (error) {
                console.log(error);
            });
        
    }
    
    $scope.cargarChumasDeUsuario();
        
});
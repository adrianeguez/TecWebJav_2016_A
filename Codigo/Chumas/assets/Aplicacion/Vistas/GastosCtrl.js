aplicacion.controller("GastosCtrl", function (
    $scope
    , $stateParams
    , $http) {

    $scope.cargarGastos = function () {
        $http({
            method: 'GET'
            , isArray: true
            , url: "http://localhost:1337/TragosXChuma?idChuma=" + $stateParams.idChuma
        }).then(
            function (respuesta) {
                $scope.gastos = respuesta.data;
            }
            , function (error) {
                console.log(error);
            })
    }

    $scope.cargarInformacionUsuarioChuma = function () {
        $http({
            method: 'GET'
            , isArray: true
            , url: "http://localhost:1337/Chumas/" + $stateParams.idUsuario
        }).then(
            function (respuesta) {
                $scope.usuario = respuesta.data.idUsuarios;
                $scope.chuma = respuesta.data;
            }
            , function (error) {
                console.log(error);
            })
    }


    $scope.cargarInformacionUsuarioChuma();
    $scope.cargarGastos();

});
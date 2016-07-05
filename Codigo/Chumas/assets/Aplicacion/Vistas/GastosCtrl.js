aplicacion.controller("GastosCtrl", function (
    $scope
    , $stateParams
    , $http) {

    $scope.nuevoGasto = {
        lugarCompra: ""
        , precio: ""
        , idChuma: $stateParams.idChuma
        , idTrago: 0
    }

    $scope.crearTragosXChuma = function () {

        $http({
            method: 'POST'
            , url: "http://localhost:1337/TragosXChuma"
            , data: $scope.nuevoGasto
        }).then(
            function (respuesta) {

                for (var i = 0; i < $scope.tragos.length; i++) {

                    if ($scope.nuevoGasto.idTrago == $scope.tragos[i].id) {

                        respuesta.data.idTrago = $scope.tragos[i];
                    }

                }
                $scope.gastos.push(respuesta.data);

                $scope.nuevoGasto = {
                    lugarCompra: ""
                    , precio: ""
                    , idChuma: $stateParams.idChuma
                    , idTrago: 0
                }
            }
            , function (error) {
                console.log(error);
            })

    }

    $scope.cargarTragos = function () {

        $http({
            method: 'GET'
            , isArray: true
            , url: "http://localhost:1337/Tragos"
        }).then(
            function (respuesta) {
                $scope.tragos = respuesta.data;
            }
            , function (error) {
                console.log(error);

            })
    }

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
    $scope.cargarTragos();

});
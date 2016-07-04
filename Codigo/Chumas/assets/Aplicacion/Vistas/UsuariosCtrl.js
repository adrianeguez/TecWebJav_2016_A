aplicacion.controller("UsuariosCtrl", function ($scope, $http) {


    $scope.nuevoUsuario = {
        nombre: ""
        , apellido: ""
        , correo: ""
        , password: ""
        , fechaNac: ""
    }

    $scope.botonCrearDeshabilitado = false;


    $scope.crearUsuario = function () {

        $scope.botonCrearDeshabilitado = true;

        $http({
            method: "POST"
            , url: "http://localhost:1337/Usuarios"
            , data: $scope.nuevoUsuario
        }).then(
            function (respuesta) {

                //                $scope.cargarUsuarios();
                $scope.usuarios.push(respuesta.data);
                $scope.resetearNuevoUsuario();

                $scope.botonCrearDeshabilitado = false;

                console.log(respuesta);
            }
            , function (error) {
                $scope.botonCrearDeshabilitado = false;
                console.log(error);
            });

    }

    $scope.cargarUsuarios = function () {

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



    }

    $scope.resetearNuevoUsuario = function () {

        $scope.nuevoUsuario = {
            nombre: ""
            , apellido: ""
            , correo: ""
            , password: ""
            , fechaNac: ""
        }
    }

    $scope.cargarUsuarios();

    $scope.editarUsuario = function (usuario) {
        if (usuario.nuevaFecha) {
            usuario.fechaNac = usuario.nuevaFecha
        }
        $http({
            method: "PUT"
            , url: "http://localhost:1337/Usuarios/" + usuario.id
            , data: {
                nombre: usuario.nombre
                , apellido: usuario.apellido
                , correo: usuario.correo
                , password: usuario.password
                , fechaNac: usuario.fechaNac
            }
        }).then(
            function (respuesta) {
                usuario.mostrar = !usuario.mostrar
            }
            , function (error) {
                console.log(error);
            });
    }

    $scope.eliminarUsuario = function (usuario) {



        $http({
            method: "DELETE"
            , url: "http://localhost:1337/Usuarios/" + usuario.id
        }).then(
            function (respuesta) {

                for (var i = 0; i < $scope.usuarios.length; i++) {
                    if ($scope.usuarios[i].id == usuario.id) {
                        $scope.usuarios.splice(i, 1);
                    }
                }




            }
            , function (error) {
                console.log(error);
            });
    }






});
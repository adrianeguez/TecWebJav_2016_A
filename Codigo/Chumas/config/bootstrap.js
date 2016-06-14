/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function (cb) {


    // CREACION DE USUARIOS

        //Variables de Usuario a ser Ingresadas
    var usuarioWalter = {
        nombre: "Walter"
        , apellido: "Mercado"
        , correo: "walter.mercado@hotmail.com"
        , fechaNac: "1960-08-15"
        , password: "1234"
    }
    var usuarioAdrian = {
        nombre: "Adrian"
        , apellido: "Eguez"
        , correo: "adrian.eguez@epn.edu.ec"
        , fechaNac: "1989-06-10"
        , password: "1234"
    }
    var usuarioCarlos = {
            nombre: "Carlos"
            , apellido: "Arteaga"
            , correo: "carlos.arteaga@hotmail.com"
            , fechaNac: "1995-11-24"
            , password: "1234"
        }
        //Variables de Tragos a ser Ingresados
    var tragoZhumirSandia = {
            marca: "Zhumir Sandia"
            , tamano: "Mediano"
            , grados: "23"
            , tipo: "Anisados"
        }
    var tragoTequilaCuervo = {
            marca: "Tequila Cuervo Gold"
            , tamano: "Mediano"
            , grados: "45"
            , tipo: "Tequila"
        }
    var tragoJhonnyNegro = {
            marca: "Whisky Jhonny Negro"
            , tamano: "Grande"
            , grados: "50"
            , tipo: "Whisky"
        }

        //Funciones para crear base

    function crearUsuario(usuario) {
        if (usuario) {
            Usuarios
                .create(usuario)
                .exec(function respuestaServidor(errorServidor, usuarioCreado) {
                    if (errorServidor) {
                        console.log('Hubo un error del servidor');
                        console.log(errorServidor);
                    } else {
                        console.log('Se creo el Usuario: ' + usuarioCreado.nombre);
                    }

                });
        } else {
            console.log('No envio un usuario, ejecute la funcion con un usuario');
        }

    }
    function crearTragos(trago){
        if(trago){
            
            Tragos
                .create(trago)
                .exec(function respuestaServidor(errorServidor, tragoCreado) {
                    if (errorServidor) {
                        console.log('Hubo un error del servidor');
                        console.log(errorServidor);
                    } else {
                        console.log('Se creo el Trago: ' + tragoCreado.marca);
                    }

                });
        
        }else{
            console.log('No envio un trago, ejecute la funcion con un trago');
        }
    }
    function crearChumas(trago){
        if(trago){
            
            Tragos
                .create(trago)
                .exec(function respuestaServidor(errorServidor, tragoCreado) {
                    if (errorServidor) {
                        console.log('Hubo un error del servidor');
                        console.log(errorServidor);
                    } else {
                        console.log('Se creo el Trago: ' + tragoCreado.marca);
                    }

                });
        
        }else{
            console.log('No envio un trago, ejecute la funcion con un trago');
        }
    }

    crearUsuario(usuarioWalter);
    crearUsuario(usuarioAdrian);
    crearUsuario(usuarioCarlos);
    crearTragos(tragoJhonnyNegro);
    crearTragos(tragoTequilaCuervo);
    crearTragos(tragoZhumirSandia);







    // It's very important to trigger this callback method when you are finished
    // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
    cb();
};
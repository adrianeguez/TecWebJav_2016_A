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
        //Variables de Chumas a ser Ingresados
    var chumaGrado = {
        razon: "Grado"
        , descripcion: "Fue el Grado de mi Pana Walter que ahora es Ingeniero en Sistemas"
        , geoInicioX: "-0.210243"
        , geoInicioY: "-78.489298"
        , geoFinX: "-0.208104"
        , geoFinY: "-78.497431"
        , fechaInicio: "2016-06-13"
        , fechaFin: "2016-06-14"

    }
    var chumaBautizo = {
        razon: "Bautizo"
        , descripcion: "Fue el Bautizo de mi prima Mayra en Guapulo"
        , geoInicioX: "-0.210243"
        , geoInicioY: "-78.489298"
        , geoFinX: "-0.208104"
        , geoFinY: "-78.497431"
        , fechaInicio: "2016-04-13"
        , fechaFin: "2016-04-13"

    }
    var chumaSolBielero = {
        razon: "Sol Bielero"
        , descripcion: "Empezamos a tomar y no paramos hasta el siguiente dia."
        , geoInicioX: "-0.210243"
        , geoInicioY: "-78.489298"
        , geoFinX: "-0.208104"
        , geoFinY: "-78.497431"
        , fechaInicio: "2016-02-13"
        , fechaFin: "2016-02-14"

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
                        
                        var chumaLocal1 = chumaBautizo;
                        var chumaLocal2 = chumaGrado;
                        var chumaLocal3 = chumaSolBielero;
                        return usuarioCreado.id;
                        
                        chumaLocal1.idUsuarios = usuarioCreado.id;
                        chumaLocal2.idUsuarios = usuarioCreado.id;
                        chumaLocal3.idUsuarios = usuarioCreado.id;
                        
                        crearChumas(chumaLocal1);
                        crearChumas(chumaLocal2);
                        crearChumas(chumaLocal3);
                    }

                });
        } else {
            console.log('No envio un usuario, ejecute la funcion con un usuario');
        }

    }
    function crearTragos(trago) {
        if (trago) {

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

        } else {
            console.log('No envio un trago, ejecute la funcion con un trago');
        }
    }
    function crearChumas(chuma) {
        if (chuma) {

            Chumas
                .create(chuma)
                .exec(function respuestaServidor(errorServidor, chumaCreada) {
                    if (errorServidor) {
                        console.log('Hubo un error del servidor');
                        console.log(errorServidor);
                    } else {
                        console.log('Se creo el Trago: ' + chumaCreada.razon);
                    }

                });

        } else {
            console.log('No envio una chuma, ejecute la funcion con una chuma');
        }
    }
    
    
//    var local1 = chumaBautizo;
//    var idUsuariosLocal1 = crearUsuario(usuarioWalter);
//    local1.idUsuarios = idUsuariosLocal1;
//    crearChumas(local1);
    
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
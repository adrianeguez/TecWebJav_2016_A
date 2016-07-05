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


    //Variables de Imagenes
    var imagenChuma1 = {
            url: "http://www.generadormemes.com/media/created/250/shx63m.jpg"
        }
    var imagenChuma2 = {
            url: "http://pasamoslista.com/wp-content/uploads/2015/03/mejores-memes-de-borrachos-4.jpg"
        }
    var imagenChuma3 = {
            url: "http://www.fotoshumor.com/carpeta/1/original/344581441059800-memes-de-borrachos.jpg"
        }
    
    //Variables de TragosXChuma
    var tragoXChumaTienda = {
        lugarCompra:"Tienda de la Vecina Charito",
        precio:12.6
    }    
    var tragoXChumaBar = {
        lugarCompra:"Bar La Vaca",
        precio:25
    }  
    var tragoXChumaOldTimes = {
        lugarCompra:"OldTimes",
        precio:28.3
    }
        
    //Funciones para crear base
    
    function crearTragosXChuma(tragoXChuma,idChuma,idTrago){
        if (tragoXChuma) {
            console.log('crearTragosXChuma')
            console.log(idChuma)
            console.log(idTrago)
            tragoXChuma.idChuma = idChuma;
            tragoXChuma.idTrago = idTrago;

            TragosXChuma
                .create(tragoXChuma)
                .exec(function respuestaServidor(errorServidor, tragoXChumaCreado) {
                    if (errorServidor) {
                        console.log('Hubo un error del servidor');
                        console.log(errorServidor);
                    } else {
                        console.log('Se creo la Trago X Chuma: ' + tragoXChumaCreado.lugarCompra);
                    }

                });

        } else {
            console.log('No envio una Trago X Chuma, ejecute la funcion con una Trago X Chuma');
        }
    }

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
                        console.log('Se creo la Chuma: ' + chumaCreada.razon);
                        var imagen1 = imagenChuma1;
                        var imagen2 = imagenChuma2;
                        var imagen3 = imagenChuma3;
                        crearImagenes(imagen1,chumaCreada.id)
                        crearImagenes(imagen2,chumaCreada.id)
                        crearImagenes(imagen3,chumaCreada.id)
                        
                        var tragoXchumaLocal1 = tragoXChumaBar;
                        var tragoXchumaLocal2 = tragoXChumaOldTimes;
                        var tragoXchumaLocal3 = tragoXChumaTienda;
                        
                        crearTragosXChuma(tragoXchumaLocal1,chumaCreada.id,1)
                        crearTragosXChuma(tragoXchumaLocal2,chumaCreada.id,2)
                        crearTragosXChuma(tragoXchumaLocal3,chumaCreada.id,3)
                    }

                });

        } else {
            console.log('No envio una chuma, ejecute la funcion con una chuma');
        }
    }

    
    function crearImagenes(imagen,idChuma) {
        if (imagen) {
            imagen.idChuma = idChuma;
            Imagenes
                .create(imagen)
                .exec(function respuestaServidor(errorServidor, imagenCreada) {
                    if (errorServidor) {
                        console.log('Hubo un error del servidor');
                        console.log(errorServidor);
                    } else {
                        console.log('Se creo La Imagen: ' + imagenCreada.url);
                    }

                });

        } else {
            console.log('No envio una imagen, ejecute la funcion con una imagen');
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

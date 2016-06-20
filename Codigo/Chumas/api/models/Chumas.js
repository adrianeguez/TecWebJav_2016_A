/**
 * Chumas.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        razon: {
            type: 'string'
        }
        , descripcion: {
            type: 'string'
        }
        , geoInicioX: {
            type: 'string'
        }
        , geoInicioY: {
            type: 'string'
        }
        , geoFinX: {
            type: 'string'
        }
        , geoFinY: {
            type: 'string'
        }
        , fechaInicio: {
            type: 'date'
        }
        , fechaFin: {
            type: 'date'
        }
        , idUsuarios: {
            model: "usuarios" //Foreign key de la tabla "Usuarios"
        }
        , imagenes: {
            collection: "imagenes", //Tabla Hijo
            via: "idChuma" //Campo Foreign Key de la tabla Hijo
        }
        , tragos: {
            collection: "tragosxchuma", //Tabla Hijo
            via: "idChuma" //Campo Foreign Key de la tabla Hijo
        }
    }
};




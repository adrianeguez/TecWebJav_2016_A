/**
 * Tragos.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        marca: {
            type: 'string'
        }
        , tamano: {
            type: 'string'
            , enum: ['Pequeno', 'Mediano', 'Grande']
        }
        , grados: {
            type: 'string'
        }
        , tipo: {
            type: 'string'
            , enum: ['Ron', 'Vodka', 'Tequila', 'Mezcal', 'Anisados', 'Puntas', 'Whisky']
        }
        , tragosXChumas: {
            collection: "tragosxchuma"
            , via: "idTrago"
        }

    }
};















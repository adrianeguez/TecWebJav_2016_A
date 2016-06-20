




/**
* TragosXChuma.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    lugarCompra:{
      type:"string"
    },
    precio:{
      type:"float"
    },
    idChuma:{
        model:"chumas"//Foreign key de la tabla "Chuma"
    },
    idTrago:{
        model:"tragos"//Foreign key de la tabla "Trago"
    }

  }
};







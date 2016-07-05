//app.js

//CODESCHOOL CURSO BASICO DE JAVASCRIPT

//CODECADEMY CURSO 
/*
var nombreVariable;

var numeropagina = 534;
var holamundo = "hola" //El punto y coma es una buena practica, si compila
var peso = 32.43;
var arreglo = [];
var bol = true;
var bolF = false;
var arregloEnteros = [1,2,3,4];
var arregloStrings = ["hola","hola2","hola3","hola4"]
var arregloFloat = [1.2,2.3,32.3,452.232334];
var arregloMixto = [1,"String",23.4131,"stringa"];
var arrgeloFunciones = [function(){ return 1},function(){return 2}];

var tragoJoseCuervo = {
    "marca": "Jose Cuervo",
    "tamano": "Grande",
    "grados": "24",
    "tipo": "Tequila",
    labels:["Plata","Oro"],
    stock:false,
    "createdAt": "2016-05-24T18:52:54.685Z",
    "updatedAt": "2016-05-24T19:03:38.784Z",
    "id": 4,
    "anejado": 3,
    calcularAnejamiento: function(){
        var anejamiento = tragoJoseCuervo.grados * tragoJoseCuervo.anejado;
        return anejamiento
    }
  }

function nombreFuncion(edad,nombre){
    return "String";
}

function nombreFuncion(edad,nombre){

}


for(var i =1;i<4;i++){
    
    i++;
}

var i=0;
while(i<10){
    i++;
}



public String nombreFuncion(int edad,int nombre){
    //asdasdasd
    return "String";
}

int numeropagina = 534
String holamundo = "hola"
double peso = 32.43
arreglos 
*/

/*
INSTANACIAR UNA NUEVA APLICACION EN ANGULAR

angular.module("nombreaplicacionenminusculas",['Arreglo','de','modulos','de','Angular']);

*/

var aplicacion = angular.module("chuma", ['ui.router']);

aplicacion.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('home', {
            url: "/"
            , templateUrl: "Vistas/Home.html"
            , controller: "HomeCtrl"
        })
        .state('usuarios', {
            url: "/usuarios"
            , templateUrl: "Vistas/Usuarios.html"
            , controller: "UsuariosCtrl"
        })
        .state('tragos', {
            url: "/tragos"
            , templateUrl: "Vistas/Tragos.html"
            , controller: "TragosCtrl"
        })
        .state('chumas', {
            url: "/usuario/:idUsuario/chuma"
            , templateUrl: "Vistas/Chumas.html"
            , controller: "ChumasCtrl"
        })
        .state('gastos', {
            url: "/usuario/:idUsuario/chuma/:idChuma/gastos"
            , templateUrl: "Vistas/Gastos.html"
            , controller: "GastosCtrl"
        });
});







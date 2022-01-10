
let estudiante = {
    nombre : "Miguel",
    apellido : "Sanchez",
    edad : 23,
    casado : false,
    imprimeDatos : function(){
        console.log( this.nombre, this.apellido, this.edad, this.casado );
    },
    hobbies : [ "Programar", "Cantar", "Bailar" ],
    hermanos : {
        nombre1 : "Alejandro",
        nombre2 : "Martha"
    }
};

//console.log( estudiante );

estudiante.apellido = "Gomez";
estudiante.profesion = "Médico";

let propiedad = "edad"; 
// console.log( estudiante.nombre, estudiante["apellido"], estudiante[propiedad] );

estudiante.imprimeDatos();
//console.log( estudiante.hobbies );

for( let i = 0; i < estudiante.hobbies.length; i ++ ){
    //console.log( estudiante.hobbies[i] );
}

//console.log( "Hermanos" );
//console.log( estudiante.hermanos.nombre1, estudiante.hermanos.nombre2 );


let listaEstudiantes = [
    {
        nombre : "Miguel",
        apellido : "Gomez",
        edad : 23
    },
    {
        nombre : "Alan",
        apellido : "Morales",
        edad : 22
    },
    {
        nombre : "Martha",
        apellido : "Sanchez",
        edad : 22
    }
];

for( let i = 0; i < listaEstudiantes.length; i ++ ){
    console.log( listaEstudiantes[i].nombre, listaEstudiantes[i].apellido );
}

console.log( estudiante );

delete estudiante.casado;

console.log( estudiante );
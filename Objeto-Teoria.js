/* 
OBJETOS JAVASCRIPT

Un objeto es similar a una lista, pueden ser variblaes o funciones, que son las que definen a los objetos. Propiedades son las variables
y metodos son las funciones. */

const miObjeto = {};

/* un objeto vacio */ 

/*Crear objeto de con datos */
const persona = { 
    nombre: "Fede",
    edad: 14,
    email: 'fede'
}

/* Para accedera los valores puedo hacer a traves de notacion de punto */
alert (persona.nombre)
/* otra forma */ 
alert (persona ['email'])


/*EL THIS SE UTILIZA PARA LLAMAR AL OBJETO DE FORMA EXTERNA EN UNA FUNCION */

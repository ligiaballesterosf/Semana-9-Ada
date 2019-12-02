/*************************************************
 * Crear un objeto que sea un libro, con todos 
 * sus detalles (nombre, autor, año, isbn). Ademas
 * de esto, deberá tener una lista de reviews, y cada
 * review deberá tener un formato de 
 * {nombre, review, valoracion(entre 1 y 5)}.
 * 
 * Deberemos crear una funcion para promediar esta 
 * valoracion. 
 * Tambien, tendremos que crear un getter para 
 * obtener el nombre, el autor y el isbn juntos 
 * en un formato legible (libro [por] autor - isbn).
 * Por último tendremos que crear una funcion que nos
 * permita agregar nuevas reviews al libro.
 */

const myBook = {
    name: "Para Elisa",
    autor: "Lily Perozo",
    year: 2012,
    isbn: "isb-11-10",
    reviews : []
}

const createReview = (person, comment, rate) => {
    const info = {
        person,
        comment,
        rate
    }
const verifPerson = reviews.findIndex((reviews) => reviews.person === info.person)
    if (verifPerson === -1) {
        reviews.push({createReview})
        return "Gracias por tu opinion"
}
    return "Ya has dejado un comentario.";
/*
    const rangeRate = (rate) => {
        if ((rate >= 1) && (rate <= 5)) {
            return rate;
        } return "La valoracion se mide en un rango de 1 y 5."
    };
    */
}

let promedio = reviews.reduce(function (acumulador, siguienteValor) {
        return acumulador + siguienteValor.rate
    });

let promedioRate = promedio/reviews.length


module.exports = {myBook, reviews, createReview};

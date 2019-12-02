const libreria = require('./ejercicio2') 
    myBook = libreria.myBook
    reviews = libreria.reviews
    createReview = libreria.createReview;

test("Agregar reviews de los libros", () =>{
    createReview("Ligia", "mi descripcion", 5);
    expect(reviews[0]).toStrictEqual({
        person: "Ligia",
        comment: "msi descripcion",
        rate: 5
    })
});

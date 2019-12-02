/**********************************************
 * Hacer un programa que nos permita 
 * cargar/modificar/borrar
 * productos (deberían tener "id", como identificador 
 * único de número, por ej: 1, 2, 3.; título, descripción
 * de producto y precio (float)).
 * 
 * Además de esto vamos a necesitar un carrito de compras
 * que nos permita cargar/modificar/borrar productos de 
 * nuestro carrito, sumar el precio total de los elementos
 * de nuestro carrito. 
 */

let productos = [
    {
        id: 11,
        titulo: "Jabon",
        descripcion: "Huele rico",
        precio: parseFloat(100.5)
    },

    {
        id: 22,
        titulo: "Fernet",
        descripcion: "Pa la coca",
        precio: parseFloat(200.55)

    },
    {
        id: 33,
        titulo: "Cerveza",
        descripcion: "Bien fria",
        precio: parseFloat(50),

    },
    {
        id: 44,
        titulo: "Doritos",
        descripcion: "Que rico",
        precio: parseFloat(14.75),

    },
    {
        id: 55,
        titulo: "Coca-cola",
        descripcion: "Me encanta",
        precio: parseFloat(83, 14),

    },
    {
        id: 66,
        titulo: "Milanesa",
        descripcion: "Congelada",
        precio: parseFloat('147,52'),
    },
];
const agregarProducto = (id, titulo, descripcion, precio) => {
    const data = {
        id,
        titulo,
        descripcion,
        precio:parseFloat(precio)
    }
    const verificarId = productos.findIndex((producto) => producto.id === data.id)
    if (verificarId === -1) {
    productos.push(data)
    return "Producto creado"
    }
    return "Id ya existe, pruebe otro."
};

const modProducto = (id, newTitulo, newDesc, newPrecio)=>{
    for(let item of productos){
        if (item.id == id){
            item.titulo = newTitulo;
            item.descripcion = newDesc;
            item.precio = newPrecio;
            return item;
        }
    }
 }

 const eliminarProducto = (id)=>{
    for(let item of productos){
        if (item.id == id){ id.splice(item, 1);
            return "Producto eliminado"
        }
        return "Ingrese ID valido"
    }
 }


 /*
const eliminarProducto = (id) => {
    const eliminar = productos.findIndex((producto) => producto.id === id) 
    if (eliminar != -1) {
        productos.splice(eliminar, 1);
        return "Producto eliminado"
    }
    
}
*/

let $items = document.querySelector('#items');
let carrito = [];
let total = 0;


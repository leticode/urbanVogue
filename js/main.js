
let categorias = [
    {id: "rem", nombre: "Remera"},
    {id: "ves", nombre: "Vestido"},
    {id: "pan", nombre: "Pantalon"},
    {id : "zap", nombre: "Zapatillas"}
]

let productos = [
    {categoria: "pan", nombre: "pantalon", precio: "$40.000", img: "../img/pant1.jpg"},
    {categoria: "pan", nombre: "pantalon", precio: "$40.000", img: "../img/pant2.jpg"},
    {categoria: "pan", nombre: "pantalon", precio: "$40.000", img: "../img/pant3.jpg"},
    {categoria: "zap", nombre: "zapatilla", precio: "$40.000", img: "../img/zapas1.jpg"},
    {categoria: "zap", nombre: "zapatilla", precio: "$40.000", img: "../img/zapas2.jpg"},
    {categoria: "zap", nombre: "zapatilla", precio: "$40.000", img: "../img/zapas3.jpg"},
    {categoria: "rem", nombre: "remera", precio: "$40.000", img: "../img/rem1.jpg"},
    {categoria: "rem", nombre: "remera", precio: "$40.000", img: "../img/rem2.jpg"},
    {categoria: "rem", nombre: "remera", precio: "$40.000", img: "../img/rem3.jpg"},
    {categoria: "ves", nombre: "vestido", precio: "$40.000", img: "../img/ves1.jpg"},
    {categoria: "ves", nombre: "vestido", precio: "$40.000", img: "../img/ves2.jpg"},
    {categoria: "ves", nombre: "vestido", precio: "$40.000", img: "../img/ves3.jpg"}
]

let contendorCategorias = document.querySelector(".contenedorCategorias");
for (let categoriaProducto of categorias){
    let divCategoria = document.createElement("div");
    divCategoria.className = "divCategoria"

    let divNombreCategoria = document.createElement("div");
    divNombreCategoria.textContent = categoriaProducto.nombre;
    divCategoria.appendChild(divNombreCategoria);
    divNombreCategoria.className = "divCategoriaNombre"

    contendorCategorias.appendChild(divCategoria)
}


let catalogoProductos = document.querySelector(".catalogoProducto");
for (let producto of productos){
   let divProducto = document.createElement("div");
   divProducto.className = "divProducto"
   
   let divImg = document.createElement("img");
   divProducto.appendChild(divImg);
   divImg.src = producto.img;

   let divNombre = document.createElement("div");
   divProducto.appendChild(divNombre);
   divNombre.textContent = producto.nombre;
   divNombre.className = "divNombre"

   let divPrecio = document.createElement("div");
   divProducto.appendChild(divPrecio);
   divPrecio.textContent = producto.precio;
   divPrecio.className = "divPrecio";

   let divBtn = document.createElement("button");
   divProducto.appendChild(divBtn);
   divBtn.textContent = "Agregar al carrito";
   divBtn.className = "divBtn";


   catalogoProductos.appendChild(divProducto);
   
}

    
    



let categorias = [
    {id: "rem", nombre: "remera"},
    {id: "pan", nombre: "pantalon"},
    {id: "ves", nombre: "vestido"},
    {id: "zap", nombre: "zapatilla"}
]

let productos = [
    {categoria: "pan", nombre: "pantalon", img: "../img/pant1.jpg", precio: "40.000"},
    {categoria:"pan", nombre: "pantalon", img: "../img/pant2.jpg", precio: "40.000"},
    {categoria: "pan", nombre: "pantalon", img: "../img/pant3.jpg", precio: "40.000"},
    {categoria:"rem", nombre: "remera", img: "../img/rem1.jpg", precio: "40.000"},
    {categoria: "rem", nombre: "remera", img: "../img/rem2.jpg", precio: "40.000"},
    {categoria:"rem", nombre: "remera", img: "../img/rem3.jpg", precio: "40.000"},
    {categoria: "ves", nombre: "vestido", img: "../img/ves1.jpg", precio: "40.000"},
    {categoria:"ves", nombre: "vestido", img: "../img/ves2.jpg", precio: "40.000"},
    {categoria: "ves", nombre: "vestido", img: "../img/ves3.jpg", precio: "40.000"},
    {categoria:"zap", nombre: "zapatilla", img: "../img/zapas1.jpg", precio: "40.000"},
    {categoria: "zap", nombre: "zapatilla", img: "../img/zapas2.jpg", precio: "40.000"},
    {categoria:"zap", nombre: "zapatilla", img: "../img/zapas3.jpg", precio: "40.000"}

]

let contendorCategorias = document.querySelector(".contenedorCategorias")

for (let categoriaProducto of categorias){
    let divCategoria = document.createElement("div");
    contendorCategorias.appendChild(divCategoria);
    divCategoria.textContent = categoriaProducto.nombre;
    divCategoria.className = "divCategoria";
    divCategoria.addEventListener("click", ()=>{
        crearProductos(categoriaProducto.id);
    })
}


function crearProductos(categoriaId){
    let catalogoProducto = document.querySelector(".catalogoProducto");
    catalogoProducto.innerHTML = "";
    
    for(let producto of productos){

        if (producto.categoria == categoriaId){

            let divProducto = document.createElement("div");
            catalogoProducto.appendChild(divProducto);  
            divProducto.className = "divProducto";
        
            divImg = document.createElement("img");
            divProducto.appendChild(divImg);
            divImg.src = producto.img;
        
            divNombre = document.createElement("div");
            divProducto.appendChild(divNombre);
            divNombre.textContent = producto.nombre;
            divNombre.className = "divNombre";
        
            divPrecio = document.createElement("div");
            divProducto.appendChild(divPrecio);
            divPrecio.textContent = producto.precio;
            divPrecio.className = "divPrecio";
        
            divBtn = document.createElement("button");
            divProducto.appendChild(divBtn);
            divBtn.textContent = "Agregar al carrito";
            divBtn.className = "divBtn";
        }
        }

}

crearProductos("rem");


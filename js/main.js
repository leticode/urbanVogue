
let categorias = [
    {id: "ves", nombre: "Dress"},
    {id: "pan", nombre: "Pants"},
    {id: "rem", nombre: "T-shirt"},
    {id : "zap", nombre: "Sneakers"}
]

let productos = [
    {categoria: "pan", nombre: "Suit pants", precio: "$55", img: "../img/pant1.jpg"},
    {categoria: "pan", nombre: "Culottes pants", precio: "$25", img: "../img/pant2.jpg"},
    {categoria: "pan", nombre: "Slacks pants", precio: "$40", img: "../img/pant3.jpg"},
    {categoria: "zap", nombre: "Nike Air Jordan 1", precio: "$93", img: "../img/zapas1.jpg"},
    {categoria: "zap", nombre: "Nike Air Force x Artist Collabs", precio: "$79", img: "../img/zapas2.jpg"},
    {categoria: "zap", nombre: "Nike Air Force 1", precio: "$67", img: "../img/zapas3.jpg"},
    {categoria: "rem", nombre: "V-neck t-shirt", precio: "$24", img: "../img/rem1.jpg"},
    {categoria: "rem", nombre: "Ringer t-shirt", precio: "$18", img: "../img/rem2.jpg"},
    {categoria: "rem", nombre: "Graphic t-shirt", precio: "$20", img: "../img/rem3.jpg"},
    {categoria: "ves", nombre: "Cocktail dress", precio: "$70", img: "../img/ves1.jpg"},
    {categoria: "ves", nombre: "Slip dress", precio: "$48", img: "../img/ves2.jpg"},
    {categoria: "ves", nombre: "Shift dress", precio: "$23", img: "../img/ves3.jpg"}
]

let carrito = [];

let contenedorHeader = document.querySelector(".header");

function headerPagina() {
    let tituloHeader = document.createElement("h1");
    contenedorHeader.appendChild(tituloHeader);
    tituloHeader.textContent = "UrbanVogue"
}

headerPagina();

let contendorCategorias = document.querySelector(".contenedorCategorias");
for (let categoriaProducto of categorias){
    let divCategoria = document.createElement("div");
    divCategoria.className = "divCategoria";
    divCategoria.id = "boton_" + categoriaProducto.id;
    divCategoria.addEventListener ("click", ()=>{
        crearProductos(categoriaProducto.id);
        actualizarColorBotonCategoria(categoriaProducto.id);
    })

    let divNombreCategoria = document.createElement("div");
    divNombreCategoria.textContent = categoriaProducto.nombre;
    divCategoria.appendChild(divNombreCategoria);
    divNombreCategoria.className = "divCategoriaNombre"

    contendorCategorias.appendChild(divCategoria)
}


function actualizarColorBotonCategoria(categoriaId) {
    for (let categoriaProducto of categorias){
        let divCategoria = document.getElementById("boton_" + categoriaProducto.id);
        if (categoriaProducto.id == categoriaId){
            divCategoria.classList.add("seleccionada");
        } else{
            divCategoria.classList.remove("seleccionada");
        }
    }
}

function crearProductos(categoriaId){
    let catalogoProductos = document.querySelector(".catalogoProducto");
    catalogoProductos.innerHTML = "";
   
        for (let producto of productos){
            if (producto.categoria == categoriaId){
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

    }

}
crearProductos("pan");


    
    



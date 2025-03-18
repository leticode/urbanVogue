
let categorias = [
    {id: "ves", nombre: "Dress"},
    {id: "pan", nombre: "Pants"},
    {id: "rem", nombre: "T-shirt"},
    {id : "zap", nombre: "Sneakers"}
]

let division = [
    {id: "wm", nombre : "Women",},
    {id: "mn", nombre : "Men"},
    {id: "tn", nombre: "Teen"}
]

let productos = [
    {categoria: "pan", nombre: "Barrel fleece pants", precio: "$29", img: "../img/pan1.jpg", division: "wm"},
    {categoria: "pan", nombre: "Wide-leg pants", precio: "$25", img: "../img/pan2.jpg", division: "wm"},
    {categoria: "pan", nombre: "Linen-blend pants with elastic waistband", precio: "$19", img: "../img/pan3.jpg", division: "wm"},
    {categoria: "pan", nombre: "Baggy parachute pants", precio: "$45", img: "../img/pan4.jpg", division: "wm"},
    {categoria: "pan", nombre: "Pleated pants with buckles", precio: "$30", img: "../img/pan5.jpg", division: "wm"},
    {categoria: "pan", nombre: "Fluid wide-leg textured pants with drawstring", precio: "$29", img: "../img/pan6.jpg", division: "wm"},

    {categoria: "zap", nombre: "High-top sneakers with hidden wedge", precio: "$50", img: "../img/zap1.jpg", division: "wm"},
    {categoria: "zap", nombre: "Skate sneakers", precio: "$36", img: "../img/zap2.jpg", division: "wm"},
    {categoria: "zap", nombre: "Skate sneakers with XL laces", precio: "$36", img: "../img/zap3.jpg", division: "wm"},
    {categoria: "zap", nombre: "Tech volume sneakers", precio: "$46", img: "../img/zap4.jpg", division: "wm"},
    {categoria: "zap", nombre: "Retro sneakers with lace detail", precio: "$35", img: "../img/zap5.jpg", division: "wm"},
    {categoria: "zap", nombre: "Skate sneakers with animal print", precio: "$60", img: "../img/zap6.jpg", division: "wm"},

    {categoria: "rem", nombre: "Sabrina Carpenter short-sleeve printed t-shirt", precio: "$18", img: "../img/rem1.jpg", division: "wm"},
    {categoria: "rem", nombre: "Cinnamorroll short-sleeve printed t-shirt", precio: "$15", img: "../img/rem2.jpg", division: "wm"},
    {categoria: "rem", nombre: "Short-sleeve printed t-shirt", precio: "$16", img: "../img/rem3.jpg", division: "wm"},
    {categoria: "rem", nombre: "Short-sleeve V-neck printed t-shirt", precio: "$16", img: "../img/rem4.jpg", division: "wm"},
    {categoria: "rem", nombre: "Short-sleeve boxy heavy cotton t-shirt", precio: "$10", img: "../img/rem5.jpg", division: "wm"},
    {categoria: "rem", nombre: "The Vampire Diaries short-sleeve t-shirt", precio: "$18", img: "../img/rem6.jpg", division: "wm"},

    {categoria: "ves", nombre: "Lace dress", precio: "$40", img: "../img/ves1.jpg", division: "wm"},
    {categoria: "ves", nombre: "Midi dress with straps", precio: "$78", img: "../img/ves2.jpg", division: "wm"},
    {categoria: "ves", nombre: "Printed midi dress with straps", precio: "$53", img: "../img/ves3.jpg", division: "wm"},
    {categoria: "ves", nombre: "Maxi dress with straps", precio: "$60", img: "../img/ves4.jpg", division: "wm"},
    {categoria: "ves", nombre: "Mini dress with belt", precio: "$38", img: "../img/ves5.jpg", division: "wm"},
    {categoria: "ves", nombre: "Ice bandeau maxi dress", precio: "$73", img: "../img/ves6.jpg", division: "wm"}
];

let carrito = [];

let contenedorHeader = document.querySelector(".header");

function headerPagina() {
    let tituloHeader = document.createElement("h1");
    contenedorHeader.appendChild(tituloHeader);
    tituloHeader.textContent = "UrbanVogue";

    
    for (let categoriaProductoNav of categorias){
        let navHeader = document.createElement("nav");
        contenedorHeader.appendChild(navHeader);
        navHeader.className = "navHeader";
        
        let navCategoria = document.createElement("div");
        navHeader.appendChild(navCategoria);
        navCategoria.textContent = categoriaProductoNav.nombre;
        navCategoria.addEventListener ("click", () =>{
            crearProductos(categoriaProductoNav.id);
            actualizarColorBotonCategoria(categoriaProductoNav.id);
        })

    }

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


    
    



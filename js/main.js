function renderProductos(){
    let contenidoHTML = "";

    for (const producto of productos){
        contenidoHTML += `<div class="col-md-3">
        <div class="card border-0">
        <a href="./pages/producto.html" onclick="guardarProductoLS(${producto.id});">
            <img src="./assets/imagenes-productos/${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        </a>
        <div class="card-body">
            <h5 class="card-text text-center">${producto.nombre}</h5>
            <p class="card-text text-center text-danger">$${producto.precio} ARS</p>
            <p class="text-center"><button class="btn btn-dark rounded-pill" onclick="agregarCarrito(${producto.id});">Agregar al carrito <i class="bi bi-plus-circle"></i></button></p>
        </div>
        </div>
    </div>`
    }
    document.getElementById("contenido").innerHTML = contenidoHTML;
}


renderProductos();
renderBotonCarrito();
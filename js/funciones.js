//Declaro variable de productos en una Array
const productos = [
    {id:1, nombre:"Auriculares Redragon H120 con cable", precio:20990, descripcion:"Auriculares gamer con cancelación de ruido, con microfono incorporado y un cable de 2 Mts.", imagen:"Prod-01.jpg"},
    {id:2, nombre:"Teclado Redragon Kumara K552", precio:47990, descripcion:"Teclado Redragon Kumara K552, con iluminación RGB, antisalpicaduras, con switch del tipo Outemu (Switch Blue:", imagen:"Prod-02.jpg"},
    {id:3, nombre:"Mouse Redragon Griffin M607W", precio:23190, descripcion:"Mouse Redragon color blanco, con iluminación Rainbow, con DPI Ajustable.", imagen:"Prod-03.jpg"},
    {id:4, nombre:"WebCam Logitech C922 - 1080P", precio:127750, descripcion:"Webcam Logitech, con calidad Full HD 1080p, para stremear.", imagen:"Prod-04.jpg"},
    {id:5, nombre:"Monitor LG 24 '' Entrada HDMI", precio:335000, descripcion:"Monitor LG de 24'' con iluminación del tipo EDGE, con entrada HDMI y conector de Auriculares. Consumo de 30W con conector externo.", imagen:"Prod-05.jpg"},
    {id:6, nombre:"Microprocesador AMD Ryzen 5600G", precio:183500, descripcion:"Procesador AMD Ryzen 5600G, de 6 núcleos y 12 hilos, con graficos integrados. (Incluye Cooler cpu)", imagen:"Prod-06.jpg"},
    {id:7, nombre:"Gabinete Kolink Inspire K20 con vidrio templado", precio:46210, descripcion:"Gabinete Kolink Inspire K20, con vidrio templado en el panel lateral izquierdo, color negro.", imagen:"Prod-07.jpg"},
    {id:8, nombre:"Mother ASUS PRIME B450M-A", precio:98210, descripcion:"Motherboard ASUS PRIME B450m-A, Plataforma AMD, con capacidad maxima de expanción de 128GB tipo DDR4, HDMI M.2 y USB 3.2, de color negro", imagen:"Prod-08.jpg"}
]

// Creo Funciones para Gestionar el Carrito
function agregarCarrito (id) {
    const producto = productos.find(item => item.id == id);
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    console.log("El producto fue agregado con exito!");
    renderBotonCarrito();
}

function eliminarCarrito(id) {
    const carrito = cargarCarritoLS();
    const carritoActualizado = carrito.filter(item => item.id != id);
    guardarCarritoLS(carritoActualizado);
    renderCarrito();
    renderBotonCarrito();
}

function renderBotonCarrito() {
    let total = totalProductos();
    document.getElementById("totalDelCarrito").innerHTML = total;
}

function totalProductos () {
const carrito = cargarCarritoLS()
return carrito.length;
}

function cargarCarritoLS() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function guardarCarritoLS(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function vaciarCarrito() {
    localStorage.removeItem("carrito");
    renderCarrito();
    renderBotonCarrito();
    console.log("El carrito se ha vaciado correctamente!");
}

function cargarProductoLS() {
    let id = JSON.parse(localStorage.getItem("producto"));
    const producto = productos.find(item => item.id == id);
    return producto;
}

function guardarProductoLS(id) {
    localStorage.setItem("producto", JSON.stringify(id));
}

// Creo una función para dar la cuenta final de mis productos.
function calcularTotal() {
    let totalPrecio = 0;
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    for (let i = 0; i < carrito.length; i++) { // Recorro el array de carrito y sumo el total (0) con el precio de cada producto
        totalPrecio += carrito[i].precio;
    }

    return totalPrecio;
}

// funcion para gestionar el cupón
function recibir(){
    const cuponRecibido = document.getElementById("cupon").value.toUpperCase(); // Obtengo el contenido del input "Cupon"
    const cuponesValidos = ["CUPON10", "D3SCUENT70", "COMPR4GAM3R", "L11CH4"]; // Establesco un Array de cupones válidos
    
    let totalConDescuento = calcularTotal();

if (cuponesValidos.includes(cuponRecibido)) { // Verifico si es o no Valido
    totalConDescuento *= 0.9;
} else {
    calcularTotal();
}
    document.getElementById("precioFinal").textContent = `Tu precio Final Con el descuento aplicado es de: $${totalConDescuento}`;
}




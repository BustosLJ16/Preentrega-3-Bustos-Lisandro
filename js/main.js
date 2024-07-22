//Declaro variable de productos en una Array
const productos = [
    {id:1, nombre:"Auriculares Redragon H120", precio:20990, descripcion:"Auriculares gamer con cancelación de ruido, con microfono incorporado y un cable de 2 Mts.", imagen:"Prod-01.jpg"},
    {id:2, nombre:"Teclado Kumara K552", precio:47990, descripcion:"Teclado Redragon Kumara K552, con iluminación RGB, antisalpicaduras, con switch del tipo Outemu (Switch Blue:", imagen:"Prod-02.jpg"},
    {id:3, nombre:"Mouse Redragon Griffin White M607W ", precio:23190, descripcion:"Mouse Redragon color blanco, con iluminación Rainbow, con DPI Ajustable.", imagen:"Prod-03.jpg"},
    {id:4, nombre:"WebCam Logitech C922", precio:127750, descripcion:"Webcam Logitech, con calidad Full HD 1080p, para stremear.", imagen:"Prod-04.jpg"},
    {id:5, nombre:"Monitor LG 24''", precio:335000, descripcion:"Monitor LG de 24'' con iluminación del tipo EDGE, con entrada HDMI y conector de Auriculares. Consumo de 30W con conector externo.", imagen:"Prod-05.jpg"},
    {id:6, nombre:"Microprocesador AMD Ryzen 5600G", precio:183500, descripcion:"Procesador AMD Ryzen 5600G, de 6 núcleos y 12 hilos, con graficos integrados. (Incluye Cooler cpu)", imagen:"Prod-06.jpg"},
    {id:7, nombre:"Gabinete Kolink Inspire K20", precio:46210, descripcion:"Gabinete Kolink Inspire K20, con vidrio templado en el panel lateral izquierdo, color negro.", imagen:"Prod-07.jpg"},
    {id:8, nombre:"Mother ASUS PRIME B450M-A", precio:98210, descripcion:"Motherboard ASUS PRIME B450m-A, Plataforma AMD, con capacidad maxima de expanción de 128GB tipo DDR4, HDMI M.2 y USB 3.2, de color negro", imagen:"Prod-08.jpg"}
]

function renderProductos(){
    let contenidoHTML = "";

    for (const producto of productos){
        contenidoHTML += `<div class="col-md-3">
        <div class="card border-0">
        <img src="./assets/${producto.imagen}" class="card-img-top" alt="${producto.nombre}" width=75>
        <div class="card-body">
            <p class="card-text text-center">${producto.nombre}</p>
            <p class="card-text text-center text-danger">${producto.precio}</p>
        </div>
        </div>
    </div>`
    }
    document.getElementById("contenido").innerHTML = contenidoHTML;
}

renderProductos(productos);
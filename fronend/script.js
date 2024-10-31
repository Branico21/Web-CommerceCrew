// Simular productos (esto puede ser reemplazado con un fetch desde un servidor)
const productos = [
    {
        id: 1,
        nombre: "Jersey",
        tipo: "Ejemplar",
        genero: "Hembra",
        precio: "1.900.000,00",
        localizacion: "Villapinzón, Cundinamarca",
        vendedor: "Sergio Martínez",
        imagen: "imagenes/jersey.jpg"
    },
    {
        id: 2,
        nombre: "Brahman",
        tipo: "Ejemplar",
        genero: "Macho",
        precio: "5.300.000,00",
        localizacion: "Campo de la Cruz, Atlántico",
        vendedor: "Andrés López",
        imagen: "imagenes/brahman.jpg"
    },
    // Más productos simulados...
];

// Dividir los productos en dos categorías
const productosMasVendidos = productos.slice(0, 4);  // Los primeros 4 productos más vendidos
const productosNuevos = productos.slice(4, 8);  // Los productos nuevos

// Función para renderizar productos
function renderProductos(productos, containerId) {
    const container = document.getElementById(containerId);
    productos.forEach(producto => {
        const productoHTML = `
            <div class="producto">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p>${producto.tipo} - ${producto.genero}</p>
                <p>Precio: ${producto.precio}</p>
                <p>Ubicación: ${producto.localizacion}</p>
                <p>Vendedor: ${producto.vendedor}</p>
            </div>
        `;
        container.innerHTML += productoHTML;
    });
}

// Renderizar productos más vendidos
renderProductos(productosMasVendidos, 'productos-mas-vendidos');

// Renderizar productos nuevos
renderProductos(productosNuevos, 'productos-nuevos');

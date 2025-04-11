const productoRepo = require('./producto_repo');

function obtenerProductos() {
  return productoRepo.getAll();
}

function agregarProducto(producto) {
  const { nombre, precio, categoria } = producto;

  if (!nombre || !precio || !categoria) {
    throw new Error('Los campos nombre, precio y categoría son obligatorios');
  }

  const nuevoProducto = {
    id: productoRepo.count() + 1,
    nombre,
    precio,
    categoria
  };

  productoRepo.add(nuevoProducto);
  return nuevoProducto;
}

module.exports = {
  obtenerProductos,
  agregarProducto
};

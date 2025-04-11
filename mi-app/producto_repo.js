let productos = [];

function getAll() {
  return productos;
}

function add(producto) {
  productos.push(producto);
}

function count() {
  return productos.length;
}

module.exports = {
  getAll,
  add,
  count
};

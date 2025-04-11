const express = require('express');
const app = express();
const productoService = require('./producto_service');

app.use(express.json());

// Rutas
app.get('/productos', (req, res) => {
  const productos = productoService.obtenerProductos();
  res.json(productos);
});

app.post('/productos', (req, res) => {
  const { nombre, precio, categoria } = req.body;

  try {
    const nuevoProducto = productoService.agregarProducto({ nombre, precio, categoria });
    res.status(201).json({
      mensaje: 'Producto agregado',
      producto: nuevoProducto
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

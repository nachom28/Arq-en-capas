# Arq-en-capas
Descripción de cómo identificamos cada capa en el código
1. Capa de presentación (app.js)
Esta capa es la encargada de manejar las rutas HTTP y la comunicación con el cliente.
Responsabilidades:
Recibir peticiones HTTP (GET, POST).
Validar entrada básica (que haya datos).
Enviar respuestas con el formato adecuado (res.json, res.status).
No contiene lógica de negocio ni acceso directo a los datos.
2. Capa de lógica de negocio (producto_service.js)
Aquí centralizamos las reglas del negocio, o sea, lo que el sistema “debería hacer” con los datos.
Responsabilidades:
Validar que los productos tengan los campos correctos (nombre, precio, categoría).
Asignar un ID a cada nuevo producto.
Invocar al repositorio para guardar u obtener productos.
No sabe nada de HTTP ni Express.
4. Capa de acceso a datos (producto_repo.js)
Es la capa que maneja directamente los datos, aunque en este caso es una lista en memoria.
Responsabilidades:
Guardar nuevos productos (add).
Devolver todos los productos (getAll).
Contar la cantidad de productos (count).
Si en el futuro usamos una base de datos real, solo tendríamos que modificar esta capa.

Separar el código en capas tiene un montón de ventajas frente al estilo monolítico.
Lo principal es que todo queda mucho más ordenado: cada archivo se encarga de una sola cosa y eso hace que sea más fácil de entender y modificar. 
Si más adelante queremos cambiar algo, como guardar los productos en una base de datos en vez de en memoria, 
solo tenemos que tocar una parte del código sin romper el resto. Además, 
se vuelve más sencillo agregar nuevas funcionalidades o encontrar errores. 
En resumen, con este diseño es más fácil mantener el proyecto, hacerlo crecer y que otras personas lo entiendan sin volverse locas.

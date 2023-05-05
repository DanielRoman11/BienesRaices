# BienesRaices

Esta aplicación es una plataforma de anuncios inmobiliarios que tiene como propósito facilitar la compra, venta y consulta de bienes inmuebles a través de una plataforma en línea. Sin embargo, no hay venta directa de propiedades a través de la aplicación, sino que los usuarios pueden publicar sus propiedades y esperar a que los compradores interesados se comuniquen con ellos directamente. La aplicación está dirigida a reclutadores, pero también se considera la documentación y los posibles usuarios técnicos de selección en ingeniería.

La aplicación cuenta con las siguientes funcionalidades principales:

Creación, lectura, actualización y eliminación de propiedades: Los usuarios pueden crear una lista de propiedades que deseen vender y actualizar su estado a medida que las propiedades se venden o se retiran de la lista.

Creación de usuarios con autenticación y autorización: Se puede crear una cuenta de usuario con una dirección de correo electrónico válida y una contraseña segura. Además, la autenticación de usuarios se realiza mediante tokens JSON y se maneja a través de cookies almacenadas en el navegador.

Diseño atractivo y enfocado en la experiencia de usuario: La aplicación cuenta con un diseño atractivo y fácil de usar que permite a los usuarios navegar fácilmente por la plataforma y encontrar la información que necesitan.

Integración de mapas: La aplicación cuenta con una función de integración de mapas para cada propiedad, lo que permite a los usuarios ver la ubicación de cada propiedad en un mapa interactivo.

Sección de comentarios: Los posibles compradores pueden dejar comentarios en la página de la propiedad y comunicarse directamente con el vendedor.

Esta es una aplicación de varias páginas por sus siglas en ingles MPA (Multi-Page Application), lo que significa que a diferencia de aplicaciones de una página por sus siglas en ingles SPA (Single-Page Application) o híbridas que integran ambos tipos de renderizado, la experencia de usuario puede verse disminuida por la fluidez del contenido presentado en tiempos de carga mayores. Para su desarrollo, se han utilizado una serie de dependencias como "bcrypt": "^5.1.0", "cookie-parser": "^1.4.6", "csurf": "^1.11.0", "dotenv": "^16.0.3", "express": "^4.18.2", "express-validator": "^6.14.3", "jsonwebtoken": "^9.0.0", "mysql2": "^3.0.1", "pug": "^3.0.2", "sequelize": "^6.28.0", y otras más como dependencias de desarrollo.

La aplicación utiliza el patrón de diseño MVC (Modelo-Vista-Controlador), lo que significa que hay una clara separación entre los datos (Model), la interfaz de usuario (View) y la lógica de negocio (Controller). Al utilizar este patrón, se puede facilitar el mantenimiento y la escalabilidad de la aplicación, ya que los diferentes componentes pueden ser modificados e implementados de forma independiente.

La base de datos utilizada para la aplicación es MySQL y se ha utilizado el ORM Sequelize para la creación de cuatro tablas: Usuarios, Categorías, Precios y Propiedades. Estas tablas están relacionadas entre sí mediante llaves foráneas y las relaciones son 1:1 o 1:N según corresponda.

Es importante destacar que la aplicación no consume ninguna API y no incluye un proceso de pago integrado, por lo que los vendedores y compradores deben gestionar directamente los pagos. La aplicación aún no ha sido desplegada en la web, por lo que no hay un enlace disponible para acceder a la versión final. Además, aún no se ha implementado un proceso de depuración o pruebas para identificar posibles errores en la aplicación.

Otro aspecto a considerar es la forma en que la aplicación maneja las credenciales de los usuarios. En este caso, se utiliza JSON Web Tokens (JWT) para autenticar y autorizar a los usuarios. Los tokens se almacenan en las cookies del navegador por un día (en desarrollo, en producción se pasaran a tres días), lo que significa que los usuarios no necesitan volver a iniciar sesión cada vez que acceden a la aplicación. Además, se utiliza el ORM Sequelize para interactuar con la base de datos MySQL, lo que facilita la gestión de los datos y reduce la cantidad de código necesario para realizar operaciones CRUD.

Por último, es importante tener en cuenta que la aplicación aún no ha sido desplegada en la web. Si bien esto no afecta directamente la documentación, es importante tener en cuenta que antes de su lanzamiento es necesario realizar pruebas exhaustivas para asegurarse de que la aplicación funciona correctamente en diferentes entornos y dispositivos. Esto incluye pruebas de rendimiento, compatibilidad y seguridad.

Cualquier comentario que ayude a la mejora de esta página es recibido es recibido, mi correo de contacto es daker.dev@gmail.com


Las variables de entorno son: // Estas pueden que cambien dependiendo de la versión del proyecto, por lo cual puede que esten incompletas
-->Database:
BD_NOMBRE, BD_USER, BD_PASS, BD_HOST

-->Nodemailer:
EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS

-->JsonWebTokens:
SECRET_JWT

-->General:
BACKEND_URL, PORT

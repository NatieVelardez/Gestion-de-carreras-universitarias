# Proyecto de Gestion de Carreras Universitarias.

## Nombre del Grupo: Los Practicantes.

```
-Blanco Luis
-Perez Gabriela
-Velardez Natalia
-Vera Vera Leonardo

## DESCRIPCIÓN DEL PROYECTO
Este proyecto tiene como objetivo gestionar las carreras universitarias y sus materias asociadas. Implementamos una API REST utiliando Node.js y Express para manejar operaciones CRUD sobre las carreras y materias.

## Estructura del Proyecto
La estructura del proyecto está organizada de la siguiente manera:

```tp/
├── data/
│ └── data.json
├── src/
│ ├── controladores/
│ │ └── carrera.controllers.js
    └── materias.controllers.js
│ ├── middlewares/
    └── carreras.middlewares.js
    └── materias.middlewares.js
│ │ └── validador.schema.js
│ ├── models/
│ │ └── models.schema.js
│ ├── routes/
│ │ └── carreras.route.js
│ │ └── materias.route.js
│ └── app.js
├── .env
└── README.md

## Descripcion de Carpetas y Archivos

```-data/: Contiene el archivo data.json que almacena los datos de las carreras y materias.
-src/controladores/: Contiene los controladores que manejan la lógica de negocio de las rutas.
-src/middlewares/: Contiene los middlewares para la validación de esquemas y datos.
-src/models/: Contine los esquemas de validación utilizando Joi.
-src/routes/: Contiene las definiciones de las rutas para carreras y materias.
-app.js: Configura y arranca el servidor Express.

## Ejemplo de JSON de Datos

Formato de los datos almacenados en 'data.json':
```{
  "carreras": [
    {
      "id": 1,
      "nombre": "Ingeniería Informática",
      "grado": "De grado",
      "universidad": "UTN",
      "materias": [
        {
          "id": 1,
          "nombre": "Derecho Informatico",
          "cuatrimestral": 1,
          "anio": 4,
          "carreraId": 1
        },
        {
          "id": 2,
          "nombre": "Calculo Diferencial",
          "cuatrimestral": 1,
          "anio": 3,
          "carreraId": 1
        }
      ]
    },
    {
      "id": 2,
      "nombre": "Licenciatura en Sistemas de Informacion",
      "grado": "De grado",
      "universidad": "UNPAZ",
      "materias": [
        {
          "id": 4,
          "nombre": "Ingeniaria de software",
          "cuatrimestral": 1,
          "anio": 3,
          "carreraId": 2
        },
        {
          "id": 5,
          "nombre": "Introduccion a la programacion",
          "cuatrimestral": 1,
          "anio": 1,
          "carreraId": 2
        }
        ]
    }
  ]
}
 ## Configuración del Proyecto

  Requisitos previos
  
  -Node.js
  -npm 

  ## Instalación

  1. Clona el repositorio:

  2. Instala las dependencias:
  -npm  i express.
  -npm  i -D.
  -npm i Joi.
  
  3. Configura el archivo '.env':
  -PORT=3000

  4. Ejecuta el servidor:
  -npm run dev
El servidor debe estar corriendo en 'http://localhost:3000'

## Endpoints de la API 

Carreras
-GET/carreras: Obtener unas lista de todas las carreras.
-GET/carreras/:id: Obtener una carrera por ID.
-POST/carreras: Crear una nueva carrera.
-PUT/carreras/:id: Actualizar una carrera existente por su ID.
-DELETE/carreras/:id: Eliminar una carrera por ID.
-POST/carreras/:id/materia: Crear una materia dentro de una carrera.

Materias 
-GET materias: Obtener una lista de todas las materias.
-GET/materias/:id: Obtener una materia por ID.
-DELETE/materias/:id: Eliminar una materia por ID.


# Contacto

Para cualquier duda o consulta, comunicarse con cualquiera de los integrantes del proyecto.

-Blanco Luis: 

-Perez Gabriela: gaby.68.aries@hotmail.com

-Velardez Natalia:nvidanueva20@gmail.com

-Vera Vera Leonardo:

## AGREGAR DB
-Se instala:
 sequelize: biblioteca llamada ORM, que permite almacenar objetos de JavaScript en una base de datos relacional sin usar el Lenguaje SQL en si mismo.
   
 -npx sequelize -cli init: comando que inicializa el proyecto , genera carpetas dentro del SRC.
 -npx sequelize -cli model: genera los modelos
 -npm i sqlite3: instala el motor de base de datos.

-Se descarga DBeaver Community. Aplicacion de software cliente de SQL, herramienta de administracion de bases de datos.

# La Base de Datos SQLite, se configura automaticamente al iniciar la aplicacion, ya que el archivo index.js se encarga de leer todos los modelos definidos en el directorio y los sincroniza con la base de datos.

# Migraciones y Seeders, realiza las migraciones o pre cargas de datos en el directorio correspondiente.

# La estructura de Modelos : models/carrera.js, define el modelo Carrera. models/materia.js, define el modelo Materia.
  

*ESTRUCTURA DEL PROYECTO

```tp/
├── data/
│   └── carrera.sqlite
├── src/
│   ├── config/
│   │   └── config.json
│   ├── controladores/
│   │   ├── carrera.controllers.js
│   │   └── materias.controllers.js
│   ├── middlewares/
│   │   ├── carreras.middlewares.js
│   │   ├── materias.middlewares.js
│   │   └── validador.schema.js
│   ├── migrations/
│   │   ├── 20240615035311-create-carrera.js
│   │   ├── 20240615041515-create-caa.js
│   │   ├── 20240615042449-create-materia.js
│   │   └── 20240615044719-create-carrera.js
│   ├── models/
│   │   ├── carrera.js
│   │   ├── index.js
│   │   ├── materia.js
│   │   └── models.schema.js
│   ├── routes/
│   │   ├── carreras.route.js
│   │   └── materias.route.js
│   ├── seeders/
│   └── app.js
├── .env
├── .gitignore
├── package-lock.json
├── package.json
└── README.md

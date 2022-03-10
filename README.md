# Provincias Dominicanas

## caracteristicas de la web:

Podemos ver las:

-Provincias.
<br/>
-Municipios.
<br/>
-Distritos municipales.

de la republica dominicana.

## Como Correr el proyecto

### Tenemos dos formas:

### forma manual

correr `npm install`, `ng serve` en la ruta del proyecto y luego dirigirse a `http://localhost:4200/`

### Docker

Dentro de la ruta principal del proyecto abrimos la terminal, ejecutamos `docker build . --no-cache -t provinciasdominicanas` para poder generar la imagen, solo tenemos que ejecutar el contenedor con `docker run -d -p 80:80 provinciasdominicanas:latest` e ir al navegador y pegar `http://localhost:80/`

<br>

Es una pagina web que consume su data de: https://github.com/SquarePeace/WebRestProvincias

para mas informacion acerca de esta api por favor leer el readme del mismo repositorio...